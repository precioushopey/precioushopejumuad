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
      "w-full px-4 py-3 rounded-md border bg-black/30 text-cream placeholder:text-cream/50 focus:outline-hidden focus:ring-2 focus:ring-accent",
    button:
      "white-button w-full flex items-center justify-center text-base gap-x-2",
  },
  card: {
    heading: "px-1 text-center text-sm font-normal text-cream/70",
    form: "space-y-3",
    group: "space-y-1.5",
    label: "block px-1 text-left text-sm font-medium",
    field:
      "w-full rounded-2xl bg-black/20 px-3 py-2.5 text-sm text-cream placeholder:text-cream/50 focus:outline-hidden focus:ring-2 focus:ring-accent",
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Heading className={s.heading}>Send a Message</Heading>

      <form className={s.form} onSubmit={handleSubmit}>
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

        <div className={s.group}>
          <label htmlFor={`${uid}-message`} className={s.label}>
            Your Message
          </label>
          <textarea
            id={`${uid}-message`}
            name="message"
            required
            className={`${s.field} resize-none`}
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
