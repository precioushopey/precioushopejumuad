import { LuWrench } from "react-icons/lu";
import { skills } from "../data/skills";
import { WindowBar } from "./WindowBar";

// Skills as a file-list window, like the certifications: a title bar and one row per skill (icon, name, category and a proficiency bar).
export const SkillsSection = () => {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="glass-card overflow-hidden"
    >
      <WindowBar
        icon={<LuWrench size={14} />}
        title={`Skills (${skills.length} items)`}
      />
      <div
        aria-hidden
        className="hidden grid-cols-[2rem_minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1.6fr)] gap-3 border-b border-line/40 px-6 py-2 text-left text-xs text-cream/50 md:grid"
      >
        <span />
        <span>Name</span>
        <span>Category</span>
        <span>Proficiency</span>
      </div>
      <ul>
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="grid grid-cols-[2rem_minmax(0,1fr)_8rem] items-center gap-3 border-b border-line/30 px-6 py-3 text-left last:border-b-0 md:grid-cols-[2rem_minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1.6fr)]"
          >
            <img loading="lazy" decoding="async"
              src={skill.logo}
              alt=""
              className="h-8 w-8 rounded-lg border bg-white object-contain p-0.5"
            />
            <span className="min-w-0 truncate font-medium">{skill.name}</span>
            <span className="hidden capitalize text-cream/70 md:block">
              {skill.category}
            </span>
            <span className="flex items-center gap-3">
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-cream/15">
                <span
                  className="block h-full rounded-full bg-accent"
                  style={{ width: `${skill.level}%` }}
                />
              </span>
              <span className="w-12 shrink-0 text-right text-cream/70">
                {skill.level}%
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
