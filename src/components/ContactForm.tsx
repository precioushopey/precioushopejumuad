import { FormEvent, useId, useState } from "react";
import { LuSend } from "react-icons/lu";
import { useToast } from "../hooks/use-toast";

// Two looks: the roomy one for the About page's contact section, and a compact "card" one that
// matches the small cards in the panel (muted title, small labels, dark rounded fields).
const styles = {
  roomy: {
    heading: "text-2xl font-semibold",
    form: "space-y-4",
    group: "space-y-2",
    label: "block text-lg font-medium",
    field:
      "w-full px-4 py-4 rounded-md border bg-black/30 text-cream placeholder:text-cream/50 focus:outline-hidden focus:ring-2 focus:ring-accent",
    messageGroup: "space-y-2",
    messageLabel: "block text-lg font-medium",
    messageField: "",
    button:
      "white-button w-full flex items-center justify-center text-base gap-x-2",
  },
  // The "New message" window in the right column: a mail compose sheet, with each field on a ruled
  // row (label on the left) and the message body below.
  card: {
    heading: "sr-only",
    form: "space-y-4",
    group: "flex items-center gap-2 border-b border-line/40",
    label: "w-20 shrink-0 text-left text-xs text-cream/60",
    field:
      "min-w-0 flex-1 rounded-md bg-transparent px-1 py-2 text-sm text-cream placeholder:text-cream/40 focus:outline-hidden focus:ring-2 focus:ring-accent",
    messageGroup: "block",
    messageLabel: "sr-only",
    messageField: "block h-28 w-full",
    button:
      "white-button w-full flex items-center justify-center gap-x-2 text-sm sm:text-sm",
  },
};

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

  // Posts the form to /api/contact (api/contact.ts), which emails it through Resend.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
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
            placeholder="Precious Hope Jumuad..."
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
            placeholder="jumuad.precious@gmail.com"
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
            className={`${s.field} ${s.messageField} resize-none`}
            placeholder="Hi! Just wanted to share or talk about..."
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
