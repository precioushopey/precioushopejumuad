// Vercel serverless function: receives the contact form and emails it to Precious through Resend.
//
// Needs two environment variables in the Vercel project (Settings > Environment Variables):
//   RESEND_API_KEY   the API key from resend.com (keep it secret, never put it in src/)
//   CONTACT_TO_EMAIL optional; where messages go (defaults to the address below). With Resend's free
//                    sender (onboarding@resend.dev) this must be the email the Resend account uses.
const DEFAULT_TO = "jumuad.precious@gmail.com";
const FROM = "Portfolio Contact <onboarding@resend.dev>";

const json = (body: Record<string, unknown>, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Hidden field that real visitors never fill in: a filled one means a bot. Pretend it worked.
  if (clean(data.website, 200)) return json({ ok: true });

  const name = clean(data.name, 100);
  const email = clean(data.email, 200);
  const message = clean(data.message, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Please fill in your name, a valid email and a message." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return json({ error: "Messages can't be sent right now." }, 500);
  }

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
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return json({ error: "Messages can't be sent right now." }, 502);
  }
  return json({ ok: true });
}
