import { useId, type CSSProperties } from "react";
import {
  LuCodeXml,
  LuLayoutDashboard,
  LuMousePointerClick,
  LuPencilRuler,
} from "react-icons/lu";
import {
  EXPERIENCE_START,
  formatManilaDate,
  manilaMidnight,
  skillBreakdown,
} from "../lib/experience";

// `since` is when I started each skill. Its ring fills with the share of my total experience
// (since March 1, 2024, when I started Product Design) that I have spent on it, live from today.
const skills = [
  {
    label: "Design Engineering",
    Icon: LuPencilRuler,
    since: manilaMidnight(2025, 8, 1),
  },
  {
    label: "User Experience Engineering",
    Icon: LuMousePointerClick,
    since: manilaMidnight(2025, 2, 1),
  },
  {
    label: "Frontend Development",
    Icon: LuCodeXml,
    since: manilaMidnight(2024, 8, 1),
  },
  {
    label: "Product Design (UI/UX)",
    Icon: LuLayoutDashboard,
    since: manilaMidnight(2024, 2, 1),
  },
];

const RADIUS = 42;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Laid out like the ring gauges: a ring with the icon inside and the label underneath.
// Hovering (or focusing/tapping) a skill explains how its ring was worked out.
// flex-1 lets the card stretch to fill whatever cell it is placed in.
export const SkillsCard = () => {
  const now = new Date();
  const uid = useId();
  return (
    <section
      aria-label="Skills and expertise"
      className="glass-card flex flex-1 flex-col p-4"
    >
      <ul className="grid flex-1 grid-cols-2 content-center gap-x-0 gap-y-8 min-[420px]:grid-cols-4">
        {skills.map(({ label, Icon, since }, index) => {
          const { percent, days, totalDays } = skillBreakdown(since, now);
          const tipId = `${uid}-tip-${index}`;
          return (
            <li
              key={label}
              tabIndex={0}
              aria-describedby={tipId}
              className="group relative flex min-w-0 cursor-help flex-col items-center gap-2 rounded-2xl"
            >
              <div className="relative h-16 w-16 text-cream">
                <svg
                  viewBox="0 0 100 100"
                  aria-hidden
                  className="h-full w-full -rotate-90"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r={RADIUS}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.2"
                    strokeWidth="9"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r={RADIUS}
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={CIRCUMFERENCE * (1 - percent / 100)}
                    className="ring-sweep"
                    style={{ "--ring-full": CIRCUMFERENCE } as CSSProperties}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center">
                  <Icon size={24} aria-hidden />
                </span>
              </div>
              <span className="text-center text-[11px] leading-tight text-cream/70 xl:text-[10px] 2xl:text-[11px]">
                {label}
              </span>
              <span
                id={tipId}
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-44 -translate-x-1/2 rounded-xl border border-line bg-black/90 px-3 py-2 text-left text-[11px] leading-snug text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100"
              >
                <strong className="block font-medium text-accent">
                  Since {formatManilaDate(since)}
                </strong>
                <span className="block text-cream/80">
                  {days} of {totalDays} days since I began (
                  {formatManilaDate(EXPERIENCE_START)}).
                </span>
                <span className="block font-medium">
                  = {percent}% of my experience
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
