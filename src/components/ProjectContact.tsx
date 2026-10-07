import { LuMail } from "react-icons/lu";
import { ContactLinks } from "./ContactLinks";
import { WindowBar } from "./WindowBar";

// A short "Get in touch" window at the end of a finished project page. The profile and message form
// live on Home and About, so this gives a reader who has just finished a case study a way to reach
// out without leaving it. The message form stays in one place on purpose (it has its own spam guards).
export const ProjectContact = () => (
  <section
    aria-label="Get in touch"
    className="glass-card overflow-hidden text-left"
  >
    <WindowBar icon={<LuMail size={14} />} title="Get in touch" />
    <div className="space-y-3 p-6 text-center">
      <p className="text-sm leading-6 text-cream/80">
        Like this work? Let’s talk.
      </p>
      <ContactLinks />
    </div>
  </section>
);
