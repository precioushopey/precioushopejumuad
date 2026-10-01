// Vercel serverless function: receives the contact form and emails it to Precious through Resend.
//
// Needs two environment variables in the Vercel project (Settings > Environment Variables):
//   RESEND_API_KEY   the API key from resend.com (keep it secret, never put it in src/)
//   CONTACT_TO_EMAIL optional; where messages go (defaults to the address below). With Resend's free
//                    sender (onboarding@resend.dev) this must be the email the Resend account uses.
//   FORM_SECRET      optional; the secret that signs the form's timestamp token (see below). Without
//                    it the signing key is derived from RESEND_API_KEY, so nothing extra is needed.
const DEFAULT_TO = "jumuad.precious@gmail.com";
const FROM = "Portfolio Contact <onboarding@resend.dev>";

// Abuse protection (the free Resend plan allows 100 emails a day, so one person must not use them up).
const MIN_FILL_MS = 3000; // a human needs a few seconds to type a message; bots submit instantly
const TOKEN_MAX_AGE_MS = 60 * 60 * 1000; // a form left open longer than an hour must be reloaded
const MAX_LINKS = 2; // messages stuffed with links are almost always spam
const MAX_BODY_BYTES = 20_000; // a real message is a few KB at most (5000 characters plus the other fields)
// One plain address: letters, digits and . _ % + ' - before the @, and a dotted domain after it. This
// keeps commas, spaces and brackets out, so it cannot name several recipients or inject anything.
const EMAIL = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;
const PER_IP_SHORT = { limit: 3, windowMs: 10 * 60 * 1000 }; // 3 messages per 10 minutes per visitor
const PER_IP_DAY = { limit: 8, windowMs: 24 * 60 * 60 * 1000 }; // 8 per day per visitor
const ALL_HOUR = { limit: 30, windowMs: 60 * 60 * 1000 }; // 30 per hour in total, well under the daily cap

// Recent sends, kept in memory. Vercel may run several copies of this function and restarts them now
// and then, so this slows abuse down rather than stopping a determined attacker.
const hits = new Map<string, number[]>();

const tooMany = (
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
) => {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 2000) hits.clear();
  return false;
};

const json = (body: Record<string, unknown>, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

// Trimmed, length-limited text with control characters replaced by spaces (tabs and line breaks are
// kept only when keepNewlines is set).
const clean = (value: unknown, max: number, keepNewlines = false) => {
  if (typeof value !== "string") return "";
  let out = "";
  for (const ch of value) {
    const code = ch.charCodeAt(0);
    const control = code < 32 || code === 127;
    const allowed = keepNewlines && (code === 9 || code === 10 || code === 13);
    out += control && !allowed ? " " : ch;
  }
  return out.trim().slice(0, max);
};

const safeDecode = (value: string | null) => {
  if (!value) return "";
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

// The form's timestamp token. When the form appears, the page asks GET for a token: the time it was
// issued plus a signature only this server can make. When the message comes back, the server checks
// the signature and works out for itself how long the form was open. The browser can no longer just
// claim "I took 9 seconds", which is what the old elapsedMs field allowed. A determined bot can still
// fetch a token and wait, so this raises the cost of spamming rather than ruling it out.
const encoder = new TextEncoder();

const signingKey = async () => {
  const secret = process.env.FORM_SECRET || process.env.RESEND_API_KEY;
  if (!secret) return null;
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(`form-token:${secret}`),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
};

const sign = async (key: CryptoKey, text: string) => {
  const bytes = new Uint8Array(
    await crypto.subtle.sign("HMAC", key, encoder.encode(text)),
  );
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

// Compares without stopping at the first difference, so timing reveals nothing about the signature.
const sameText = (a: string, b: string) => {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
};

const checkToken = async (
  key: CryptoKey,
  token: unknown,
): Promise<{ ok: true; ageMs: number } | { ok: false; expired: boolean }> => {
  if (typeof token !== "string" || token.length > 100)
    return { ok: false, expired: false };
  const [issued, signature, ...extra] = token.split(".");
  const issuedAt = Number(issued);
  if (extra.length || !signature || !Number.isSafeInteger(issuedAt))
    return { ok: false, expired: false };
  if (!sameText(signature, await sign(key, issued)))
    return { ok: false, expired: false };
  const ageMs = Date.now() - issuedAt;
  if (ageMs > TOKEN_MAX_AGE_MS) return { ok: false, expired: true };
  // A timestamp from the future can only come from a forged or broken clock.
  if (ageMs < 0) return { ok: false, expired: false };
  return { ok: true, ageMs };
};

// Hands out a fresh token when the form appears.
export async function GET() {
  const key = await signingKey();
  if (!key) {
    console.error("FORM_SECRET and RESEND_API_KEY are both unset");
    return json({ error: "Messages can't be sent right now." }, 500);
  }
  const issued = String(Date.now());
  return json({ token: `${issued}.${await sign(key, issued)}` });
}

export async function POST(request: Request) {
  // Only the site itself may post here (blocks other websites; command-line tools can still fake it).
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin) {
    let originHost = "";
    try {
      originHost = new URL(origin).host;
    } catch {
      /* treated as a mismatch below */
    }
    // Local development is only allowed outside production.
    const local =
      process.env.VERCEL_ENV !== "production" &&
      /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(originHost);
    if (originHost !== host && !local)
      return json({ error: "Not allowed." }, 403);
  }

  // Refuse oversized bodies before reading them (the header can be missing or wrong, so the text is
  // measured again after reading).
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES)
    return json({ error: "That message is too long." }, 413);

  let data: Record<string, unknown>;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES)
      return json({ error: "That message is too long." }, 413);
    const parsed: unknown = JSON.parse(text);
    // Valid JSON is not always an object (null, a number, a list), so check before using it.
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      return json({ error: "Invalid request." }, 400);
    data = parsed as Record<string, unknown>;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Hidden field that real visitors never fill in: only a bot does. Pretend it worked so the bot
  // doesn't try again.
  if (clean(data.website, 200)) return json({ ok: true });

  // The form must come with a token this server signed (see above). A missing, altered or old token
  // is most likely a real visitor with a stale page, so they get an honest message, not silence.
  const key = await signingKey();
  if (!key) {
    console.error("FORM_SECRET and RESEND_API_KEY are both unset");
    return json({ error: "Messages can't be sent right now." }, 500);
  }
  const token = await checkToken(key, data.token);
  if (!token.ok) {
    return json(
      {
        error: token.expired
          ? "This form has been open for a while. Please try sending again."
          : "Please reload the page and try again.",
        code: token.expired ? "expired" : "invalid",
      },
      400,
    );
  }
  // Filled in faster than a person can type: a bot. Pretend it worked.
  if (token.ageMs < MIN_FILL_MS) return json({ ok: true });

  const name = clean(data.name, 100);
  const email = clean(data.email, 200);
  const message = clean(data.message, 5000, true);

  if (!name || !message || email.length > 254 || !EMAIL.test(email)) {
    return json(
      { error: "Please fill in your name, a valid email and a message." },
      400,
    );
  }
  if ((message.match(/https?:\/\/|www\./gi) ?? []).length > MAX_LINKS) {
    return json(
      {
        error:
          "Please keep links out of your message, or send just one or two.",
      },
      400,
    );
  }

  const ip =
    (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // The same text again from the same visitor is a double click or a bot.
  const fingerprint = `dup:${ip}:${message.slice(0, 200).toLowerCase()}`;
  if (tooMany(fingerprint, { limit: 1, windowMs: PER_IP_SHORT.windowMs })) {
    return json({ error: "That message was already sent." }, 429);
  }
  if (
    tooMany(`ip10:${ip}`, PER_IP_SHORT) ||
    tooMany(`ipday:${ip}`, PER_IP_DAY) ||
    tooMany("all", ALL_HOUR)
  ) {
    return json(
      { error: "Too many messages right now. Please try again later." },
      429,
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return json({ error: "Messages can't be sent right now." }, 500);
  }

  // Where and when the message came from, added under the message so a spammer can be spotted.
  const country = request.headers.get("x-vercel-ip-country") ?? "?";
  const city = safeDecode(request.headers.get("x-vercel-ip-city"));
  const sentAt = new Date().toLocaleString("en-PH", {
    timeZone: "Asia/Manila",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const details = [
    "",
    "--",
    `Sent: ${sentAt} (Philippine time)`,
    `From: ${ip} (${[city, country].filter(Boolean).join(", ")})`,
    `Browser: ${clean(request.headers.get("user-agent"), 200) || "unknown"}`,
    `Page: ${clean(data.page, 100) || "unknown"}`,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [process.env.CONTACT_TO_EMAIL || DEFAULT_TO],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}\n${details}`,
    }),
  });

  if (response.status === 429) {
    console.error("Resend rate limit reached");
    return json(
      { error: "Too many messages right now. Please try again later." },
      429,
    );
  }
  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return json({ error: "Messages can't be sent right now." }, 502);
  }
  return json({ ok: true });
}
