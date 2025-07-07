import { useState } from "react";

type Skill = {
  name: string;
  level: number;
  logo: string;
  category: "frontend" | "design" | "multimedia";
};

const skills: Skill[] = [
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    logo: "/assets/images/html_css.png",
  },
  {
    name: "JavaScript",
    level: 80,
    category: "frontend",
    logo: "/assets/images/js.png",
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    logo: "/assets/images/ts.png",
  },
  {
    name: "React",
    level: 70,
    category: "frontend",
    logo: "/assets/images/react.png",
  },
  {
    name: "Next.js",
    level: 75,
    category: "frontend",
    logo: "/assets/images/next.png",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    logo: "/assets/images/tailwind.png",
  },

  {
    name: "Figma",
    level: 90,
    category: "design",
    logo: "/assets/images/figma.png",
  },
  {
    name: "Canva",
    level: 95,
    category: "design",
    logo: "/assets/images/canva.png",
  },
  {
    name: "Adobe Photoshop",
    level: 85,
    category: "design",
    logo: "/assets/images/photoshop.png",
  },
  {
    name: "Adobe Illustrator",
    level: 75,
    category: "design",
    logo: "/assets/images/illustrator.png",
  },
  {
    name: "Aseprite",
    level: 80,
    category: "design",
    logo: "/assets/images/aseprite.png",
  },

  {
    name: "CapCut",
    level: 95,
    category: "multimedia",
    logo: "/assets/images/capcut.png",
  },
  {
    name: "Adobe Lightroom",
    level: 85,
    category: "multimedia",
    logo: "/assets/images/lightroom.png",
  },
  {
    name: "IbisPaint",
    level: 90,
    category: "multimedia",
    logo: "/assets/images/ibispaint.png",
  },
  {
    name: "Meta Business Suite",
    level: 80,
    category: "multimedia",
    logo: "/assets/images/meta.png",
  },
];

const categories = ["all", "frontend", "design", "multimedia"] as const;
type Category = (typeof categories)[number];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="container mx-auto max-w-5xl space-y-4 pt-20 px-8"
    >
      <div className="flex justify-center font-bold text-glow">
        <h2 className="font-noto text-3xl sm:text-4xl">My</h2>
        <h2 className="pinyon-script text-5xl sm:text-6xl">Skills</h2>
      </div>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col justify-center rounded-4xl backdrop-blur-sm border shadow-xs gap-3 p-4 card-hover"
          >
            <div className="flex flex-row items-center gap-x-4">
              <img src={skill.logo} alt="Logo" width={50} />
              <div className="text-left">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>

            <div className="w-full bg-white/50 h-2 rounded-full overflow-hidden">
              <div
                className="bg-white h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
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
