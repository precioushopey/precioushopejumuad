import {
  LuCodeXml,
  LuLayoutDashboard,
  LuMousePointerClick,
  LuPencilRuler,
} from "react-icons/lu";

const skills = [
  { label: "Design Engineering", Icon: LuPencilRuler },
  { label: "UX Engineering", Icon: LuMousePointerClick },
  { label: "Frontend Development", Icon: LuCodeXml },
  { label: "Product Design (UI/UX)", Icon: LuLayoutDashboard },
];

// Laid out like the ring gauges: a round ring with the icon inside and the label underneath.
// flex-1 lets the card stretch to fill whatever cell it is placed in.
export const SkillsCard = () => (
  <section
    aria-label="Skills and expertise"
    className="glass-card flex flex-1 flex-col p-4"
  >
    <h2 className="px-1 text-left text-sm text-cream/70">
      Skills &amp; Expertise
    </h2>
    <ul className="mt-2 grid flex-1 grid-cols-2 content-center gap-x-0 gap-y-5 min-[420px]:grid-cols-4">
      {skills.map(({ label, Icon }) => (
        <li key={label} className="flex min-w-0 flex-col items-center gap-2">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-accent text-cream">
            <Icon size={24} aria-hidden />
          </span>
          <span className="text-center text-[11px] leading-tight text-cream/70 xl:text-[10px] 2xl:text-[11px]">
            {label}
          </span>
        </li>
      ))}
    </ul>
  </section>
);
