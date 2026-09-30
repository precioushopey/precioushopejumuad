export type Skill = {
  name: string;
  level: number;
  logo: string;
  category: "frontend" | "design" | "multimedia";
};

export const skills: Skill[] = [
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    logo: "/assets/images/skills/html_css.png",
  },
  {
    name: "JavaScript",
    level: 80,
    category: "frontend",
    logo: "/assets/images/skills/js.png",
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    logo: "/assets/images/skills/ts.png",
  },
  {
    name: "React",
    level: 70,
    category: "frontend",
    logo: "/assets/images/skills/react.png",
  },
  {
    name: "Next.js",
    level: 75,
    category: "frontend",
    logo: "/assets/images/skills/next.png",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    logo: "/assets/images/skills/tailwind.png",
  },

  {
    name: "Figma",
    level: 90,
    category: "design",
    logo: "/assets/images/skills/figma.png",
  },
  {
    name: "Canva",
    level: 95,
    category: "design",
    logo: "/assets/images/skills/canva.png",
  },
  {
    name: "Adobe Photoshop",
    level: 85,
    category: "design",
    logo: "/assets/images/skills/photoshop.png",
  },
  {
    name: "Adobe Illustrator",
    level: 75,
    category: "design",
    logo: "/assets/images/skills/illustrator.png",
  },
  {
    name: "Aseprite",
    level: 80,
    category: "design",
    logo: "/assets/images/skills/aseprite.png",
  },

  {
    name: "CapCut",
    level: 95,
    category: "multimedia",
    logo: "/assets/images/skills/capcut.png",
  },
  {
    name: "Adobe Lightroom",
    level: 85,
    category: "multimedia",
    logo: "/assets/images/skills/lightroom.png",
  },
  {
    name: "IbisPaint",
    level: 90,
    category: "multimedia",
    logo: "/assets/images/skills/ibispaint.png",
  },
  {
    name: "Meta Business Suite",
    level: 80,
    category: "multimedia",
    logo: "/assets/images/skills/meta.png",
  },
];
