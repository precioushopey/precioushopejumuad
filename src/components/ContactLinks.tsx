import { LuFileText } from "react-icons/lu";
import { contactItems } from "../data/contact";
import { CV_URL } from "../data/links";

// The round contact icons (email, LinkedIn, Facebook, Instagram, résumé), plus the "View my CV"
// button once `CV_URL` is set. Shared by the profile card and the project pages' "Get in touch" card.
export const ContactLinks = () => (
  <div className="flex flex-col items-center gap-3">
    <ul className="flex items-center justify-center gap-3">
      {contactItems.map(({ label, href, Icon, isEmail }) => (
        <li key={label}>
          <a
            href={href}
            target={isEmail ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition duration-300 hover:scale-110 hover:bg-accent/20"
          >
            <Icon size={20} aria-hidden />
          </a>
        </li>
      ))}
    </ul>
    {CV_URL && (
      <a
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-line bg-cream/10 px-6 py-2 text-sm font-medium text-cream transition-transform duration-300 hover:scale-105 hover:bg-cream/20 active:scale-95"
      >
        <LuFileText size={18} aria-hidden />
        View my CV
      </a>
    )}
  </div>
);
