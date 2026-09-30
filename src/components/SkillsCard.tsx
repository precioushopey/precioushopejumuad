import {
  LuCodeXml,
  LuLayoutDashboard,
  LuMousePointerClick,
  LuPencilRuler,
} from "react-icons/lu";
import { manilaMidnight, skillShare } from "../lib/experience";

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
// flex-1 lets the card stretch to fill whatever cell it is placed in.
export const SkillsCard = () => {
  const now = new Date();
  return (
    <section
      aria-label="Skills and expertise"
      className="glass-card flex flex-1 flex-col p-4"
    >
      <h2 className="px-1 text-left text-sm text-cream/70">
        Skills &amp; Expertise
      </h2>
      <ul className="mt-2 grid flex-1 grid-cols-2 content-center gap-x-0 gap-y-5 min-[420px]:grid-cols-4">
        {skills.map(({ label, Icon, since }) => {
          const percent = skillShare(since, now);
          return (
            <li
              key={label}
              className="flex min-w-0 flex-col items-center gap-2"
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
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center">
                  <Icon size={24} aria-hidden />
                </span>
              </div>
              <span className="text-center text-[11px] leading-tight text-cream/70 xl:text-[10px] 2xl:text-[11px]">
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
