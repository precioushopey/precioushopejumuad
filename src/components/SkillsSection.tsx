import { useState } from "react";
import { skills } from "../data/skills";

const categories = ["all", "frontend", "design", "multimedia"] as const;
type Category = (typeof categories)[number];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="space-y-4">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1 text-base rounded-full transition-colors duration-300 capitalize ${
              activeCategory === category
                ? "white-button"
                : "transparent-button border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col justify-center glass-card gap-3 p-4 card-hover"
          >
            <div className="flex flex-row items-center gap-x-4">
              <img src={skill.logo} alt="Logo" width={50} />
              <div className="text-left">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>

            <div className="w-full bg-cream/15 h-2 rounded-full overflow-hidden">
              <div
                className="bg-accent h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            <div className="text-right -mt-2">
              <span>{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
