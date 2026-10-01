import { memo } from "react";
import { Link } from "react-router-dom";
import { LuMail } from "react-icons/lu";
import { ContactForm } from "./ContactForm";
import { WindowBar } from "./WindowBar";

// The "Send a Message" form in the right-hand column, dressed as a mail app's "New message" window.
const ContactCardBase = () => (
  <section
    aria-label="Send a message"
    className="glass-card overflow-hidden pb-2"
  >
    <WindowBar icon={<LuMail size={14} />} title="New message" />
    <div className="space-y-2 px-3 pb-3 pt-2">
      <p className="flex items-center gap-2 border-b border-line/40 py-2 text-left text-sm">
        <span className="w-20 shrink-0 text-xs text-cream/60">To</span>
        <span className="min-w-0 truncate rounded-full bg-cream/10 px-3 py-0.5 text-xs">
          Precious Hope Jumuad
        </span>
      </p>
      <ContactForm heading="h2" variant="card" />
      <p className="px-1 text-center text-xs text-cream/60">
        How your message is used:{" "}
        <Link to="/privacy" className="underline hover:text-cream">
          Privacy Policy
        </Link>
      </p>
    </div>
  </section>
);

// Memoized so the Home page's once-a-second clock tick doesn't redraw it.
export const ContactCard = memo(ContactCardBase);
