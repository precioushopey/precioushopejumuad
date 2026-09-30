import {
  LuCodeXml,
  LuLayoutDashboard,
  LuMousePointerClick,
  LuPackage,
  LuPencilRuler,
} from "react-icons/lu";

const skills = [
  { label: "Design Engineering", Icon: LuPencilRuler },
  { label: "UX Engineering", Icon: LuMousePointerClick },
  { label: "Product Design", Icon: LuPackage },
  { label: "UI/UX Design", Icon: LuLayoutDashboard },
  { label: "Frontend Development", Icon: LuCodeXml },
];

export const SkillsCard = () => (
  <section aria-label="Skills and expertise" className="glass-card p-4">
    <h2 className="px-1 text-sm text-cream/70">Skills &amp; expertise</h2>
    <ul className="mt-3 space-y-3">
      {skills.map(({ label, Icon }) => (
        <li
          key={label}
          className="flex items-center gap-3 rounded-2xl bg-black/20 p-2.5 text-left"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <Icon size={22} aria-hidden />
          </span>
          <span className="min-w-0 text-sm font-medium">{label}</span>
        </li>
      ))}
    </ul>
  </section>
);
