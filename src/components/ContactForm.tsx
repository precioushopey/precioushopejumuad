import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { LuSend } from "react-icons/lu";
import { useToast } from "../hooks/use-toast";

// Two looks: the roomy one for the About page's contact section, and a compact "card" one that
// matches the small cards in the panel (muted title, small labels, dark rounded fields).
const styles = {
  roomy: {
    heading: "text-2xl font-semibold",
    form: "space-y-3",
    group: "space-y-2",
    label: "block text-lg font-medium",
    field:
      "w-full px-3 py-3 rounded-md border bg-black/30 text-cream placeholder:text-cream/50 focus:outline-hidden focus:ring-2 focus:ring-accent",
    messageGroup: "space-y-2",
    messageLabel: "block text-lg font-medium",
    messageField: "resize-none",
    button:
      "white-button w-full flex items-center justify-center text-base gap-x-2",
  },
  // The "New message" window in the right column: a mail compose sheet, with each field on a ruled
  // row (label on the left) and the message body below.
  card: {
    heading: "sr-only",
    form: "space-y-3",
    group: "flex items-center gap-2 border-b border-line/40",
    label: "w-20 shrink-0 text-left text-xs text-cream/60",
    field:
      "min-w-0 flex-1 rounded-md bg-transparent px-1 py-2 text-sm text-cream placeholder:text-cream/40 focus:outline-hidden focus:ring-2 focus:ring-accent",
    messageGroup: "block",
    messageLabel: "sr-only",
    messageField: "block h-36 min-h-24 max-h-96 w-full resize-y",
    button:
      "white-button w-full flex items-center justify-center gap-x-2 text-sm sm:text-sm",
  },
};

// Asks the server for the signed timestamp that goes with the message (see api/contact.ts). It
// resolves to null when the server can't be reached, e.g. under `npm run dev`, which has no /api.
const requestFormToken = (): Promise<string | null> =>
  fetch("/api/contact", { cache: "no-store" })
    .then((response) => (response.ok ? response.json() : null))
    .then((body) => (typeof body?.token === "string" ? body.token : null))
    .catch(() => null);

// The heading and form only (no card around them), so it can sit inside any card.
// Field ids come from useId so the form can appear twice on one page without clashing.
export const ContactForm = ({
  heading: Heading = "h3",
  variant = "roomy",
}: {
  heading?: "h2" | "h3";
  variant?: keyof typeof styles;
}) => {
  const s = styles[variant];
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const uid = useId();
  // The server's token for this form (it works out how long the form was open from it), and when a
  // message last went out: a short cooldown stops accidental double sends.
  const formToken = useRef<Promise<string | null> | null>(null);
  const lastSentAt = useRef(0);

  useEffect(() => {
    formToken.current = requestFormToken();
  }, []);

  // Posts the form to /api/contact (api/contact.ts), which emails it through Resend.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (Date.now() - lastSentAt.current < 30_000) {
      toast({
        title: "Message already sent",
        description: "Please wait a moment before sending another one.",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const data = {
        ...Object.fromEntries(new FormData(form)),
        token: (await (formToken.current ?? requestFormToken())) ?? "",
        page: window.location.pathname,
      };
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        // A stale or missing token: get a fresh one so the next try can work without a reload.
        if (result.code) formToken.current = requestFormToken();
        throw new Error(result.error);
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
      lastSentAt.current = Date.now();
    } catch (error) {
      toast({
        title: "Message not sent",
        description:
          error instanceof Error && error.message
            ? error.message
            : "Something went wrong. Please try again, or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Heading className={s.heading}>Send a Message</Heading>

      <form className={s.form} onSubmit={handleSubmit}>
        {/* Spam trap: hidden from people and screen readers, bots tend to fill it in. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />
        <div className={s.group}>
          <label htmlFor={`${uid}-name`} className={s.label}>
            Your Name
          </label>
          <input
            type="text"
            id={`${uid}-name`}
            name="name"
            required
            className={s.field}
            placeholder="What should I call you?"
          />
        </div>

        <div className={s.group}>
          <label htmlFor={`${uid}-email`} className={s.label}>
            Your Email
          </label>
          <input
            type="email"
            id={`${uid}-email`}
            name="email"
            required
            className={s.field}
            placeholder="Where can I reply?"
          />
        </div>

        <div className={s.messageGroup}>
          <label htmlFor={`${uid}-message`} className={s.messageLabel}>
            Your Message
          </label>
          <textarea
            id={`${uid}-message`}
            name="message"
            required
            className={`${s.field} ${s.messageField}`}
            placeholder="What’s getting in your users’ way? A design that feels off, a flow that confuses people, an experience that’s hard to use. No design or UX problem is too small. Tell me about it and let’s find how I can help."
          />
        </div>

        <button type="submit" disabled={isSubmitting} className={s.button}>
          {isSubmitting ? "Sending..." : "Send Message"}
          <LuSend
            size={variant === "card" ? 18 : 20}
            className="text-[var(--brown-accent)] hover:text-[var(--yellow-accent)]"
          />
        </button>
      </form>
    </>
  );
};
