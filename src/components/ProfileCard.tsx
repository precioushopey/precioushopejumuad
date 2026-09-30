import { Link } from "react-router-dom";
import { LuArrowRight, LuFileText } from "react-icons/lu";
import { contactItems } from "../data/contact";
import { CV_URL } from "../data/links";
import { experienceLabel } from "../lib/experience";

export const ProfileCard = () => {
  // Counted from March 1, 2024 up to today, so the wording keeps itself current.
  const experience = experienceLabel();
  return (
    <section
      aria-label="Profile"
      className="glass-card relative p-6 pb-8 text-center"
    >
      <span className="absolute left-5 top-5 rounded-full border border-line px-3 py-0.5 text-xs">
        Profile
      </span>
      <Link
        to="/about"
        aria-label="About me"
        title="About me"
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-cream/50 transition-colors duration-300 hover:text-cream"
      >
        <LuArrowRight size={14} aria-hidden />
      </Link>
      <img
        src="/assets/images/precious.png"
        alt="Precious Hope T. Jumuad"
        className="mx-auto mt-4 h-36 w-36 rounded-full border-2 border-line bg-white object-cover"
      />
      <h2 className="mt-4 text-2xl font-medium">Precious Hope Jumuad</h2>
      <p className="text-sm text-accent">
        <span className="whitespace-nowrap">Design Engineer ·</span>{" "}
        <span className="whitespace-nowrap">Product Designer</span>
      </p>
      <p className="mt-3 hyphens-auto text-justify text-pretty text-sm leading-6 text-cream/80 [text-align-last:center]">
        I’m passionate about designing and building great products that make
        people’s lives easier. I’ve spent over{" "}
        <strong className="font-semibold text-cream">{experience}</strong>{" "}
        creating digital experiences for SaaS startups to local government
        units. A Computer Engineering graduate who loves art and design in
        technology, I’m excited to build with you!
      </p>
      <div className="mt-4 flex flex-col items-center gap-3">
        <ul className="flex items-center justify-center gap-3">
          {contactItems.map(({ label, href, Icon, isEmail }) => (
            <li key={label}>
              <a
                href={href}
                target={isEmail ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 hover:scale-110"
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
            className="inline-flex items-center gap-2 rounded-full border border-line bg-cream/10 px-5 py-2 text-sm font-medium text-cream transition-transform duration-300 hover:scale-105 hover:bg-cream/20 active:scale-95"
          >
            <LuFileText size={18} aria-hidden />
            View my CV
          </a>
        )}
      </div>
    </section>
  );
};
