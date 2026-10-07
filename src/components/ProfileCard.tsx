import { memo } from "react";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { ContactLinks } from "./ContactLinks";
import { experienceLabel } from "../lib/experience";
import { thumb } from "../lib/thumb";

const ProfileCardBase = () => {
  // Counted from March 1, 2024 up to today, so the wording keeps itself current.
  const experience = experienceLabel();
  return (
    <section
      aria-label="Profile"
      className="glass-card relative p-6 pb-6 text-center"
    >
      <span className="pointer-events-none absolute left-6 top-8 z-10 -translate-y-1/2 rounded-full border border-line px-3 py-0.5 text-xs">
        Profile
      </span>
      {/* The whole top strip (the "Profile" tag and the arrow) links to the About page. */}
      <Link
        to="/about"
        aria-label="About me"
        title="About me"
        className="group absolute inset-x-0 top-0 flex h-16 items-center justify-end rounded-t-[2rem] pr-6 text-cream/50 transition-colors hover:bg-cream/5 hover:text-cream"
      >
        <LuArrowRight size={14} aria-hidden />
      </Link>
      <img
        src={thumb("/assets/images/profile/precious.png")}
        alt="Precious Hope T. Jumuad"
        className="mx-auto mt-3 h-36 w-36 rounded-full border-2 border-line bg-white object-cover"
      />
      <h2 className="mt-3 text-2xl font-medium">Precious Hope Jumuad</h2>
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
        technology, I’m excited to build something great with you!
      </p>
      <div className="mt-3">
        <ContactLinks />
      </div>
    </section>
  );
};

// Memoized so the Home page's once-a-second clock tick doesn't redraw it.
export const ProfileCard = memo(ProfileCardBase);
