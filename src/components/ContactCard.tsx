import { LuMail } from "react-icons/lu";
import { ContactForm } from "./ContactForm";
import { WindowBar } from "./WindowBar";

// The "Send a Message" form in the right-hand column, dressed as a mail app's "New message" window.
export const ContactCard = () => (
  <section
    aria-label="Send a message"
    className="glass-card overflow-hidden pb-2"
  >
    <WindowBar icon={<LuMail size={14} />} title="New message" />
    <div className="space-y-2 px-4 pb-4 pt-2">
      <p className="flex items-center gap-2 border-b border-line/40 py-2 text-left text-sm">
        <span className="w-20 shrink-0 text-xs text-cream/60">To</span>
        <span className="min-w-0 truncate rounded-full bg-cream/10 px-2.5 py-0.5 text-xs">
          Precious Hope Jumuad
        </span>
      </p>
      <ContactForm heading="h2" variant="card" />
    </div>
  </section>
);
