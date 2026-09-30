import { LuAward, LuBadgeCheck, LuPalette, LuTrophy } from "react-icons/lu";

const highlights = [
  {
    title: "Best Thesis & Best Prototype",
    detail: "SUBAY · CONVERGE 2025, CpE Research Colloquium",
    Icon: LuTrophy,
  },
  {
    title: "Silver Award, Outstanding Student Org",
    detail: "President, ICpEP.SE–USTP · Kahamili Awards 2024",
    Icon: LuAward,
  },
  {
    title: "Civil Service Professional Exam passer",
    detail: "89.72% rating · 2025",
    Icon: LuBadgeCheck,
  },
  {
    title: "Designer/Artist, Roostercat LLC",
    detail: "Game UI/UX and 2D art · 2025 to present",
    Icon: LuPalette,
  },
];

export const CareerHighlights = () => (
  <section
    aria-label="Career highlights"
    className="glass-card flex flex-1 flex-col p-4"
  >
    <h2 className="px-1 text-left text-sm text-cream/70">Career Highlights</h2>
    <ul className="mt-2 flex flex-1 flex-col gap-2">
      {highlights.map(({ title, detail, Icon }) => (
        <li
          key={title}
          className="flex flex-1 items-center gap-3 rounded-2xl bg-black/20 p-2.5 text-left"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <Icon size={22} aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium leading-snug">
              {title}
            </span>
            <span className="block text-xs leading-snug text-cream/70">
              {detail}
            </span>
          </span>
        </li>
      ))}
    </ul>
  </section>
);
