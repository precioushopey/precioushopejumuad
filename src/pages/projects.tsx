import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { MdOutlineOpenInNew } from "react-icons/md";
import { ContactSection } from "../components/ContactSection";
import { SparkleBackground } from "../components/SparkleBackground";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  category: "frontend" | "design" | "socials" | "multimedia";
};

const projects: Project[] = [
  {
    title: "SUBAY",
    description:
      "SUBAY is a multi-camera detection system for customer tracking using YOLOv10, DeepSORT, and OSNet for re-identification in retail environments. This research won Best Thesis and Best Prototype at CpE Research Colloquium!",
    image: "/assets/images/subay1.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    url: "/projects/subay",
    category: "frontend",
  },
  {
    title: "HRMO Payroll System",
    description:
      "An automated payroll management system for LGU Jasaan’s HRMO, designed to streamline payroll processing by integrating directly with biometric data, reducing manual workload.",
    image: "/assets/images/payroll1.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Figma", "Canva"],
    url: "/projects/payroll",
    category: "frontend",
  },
  {
    title: "iBRGY",
    description:
      "An automated document request and issuance system for barangays, designed to streamline their services by digitizing and accelerating the processing of requests.",
    image: "/assets/images/ibrgy1.png",
    tags: ["React", "JavaScript", "TailwindCSS", "Figma"],
    url: "/projects/ibrgy",
    category: "frontend",
  },
  {
    title: "TaleMakers",
    description:
      "TaleMakers is an educational mobile game that empowers children to create interactive storybooks. It combines creative and accessible storytelling with engaging gameplay.",
    image: "/assets/images/talemakers1.png",
    tags: ["Figma", "Canva", "Illustrator", "Aseprite"],
    url: "/projects/talemakers",
    category: "design",
  },
  {
    title: "ATHOMES",
    description:
      "ATHOMES is a real estate website designed to streamline property browsing and client-agent interaction, allowing users to explore property listings and connect directly with real estate agents simplifying the property search and inquiry process.",
    image: "/assets/images/athomes1.png",
    tags: ["Figma", "Canva", "Photoshop"],
    url: "/projects/athomes",
    category: "design",
  },
  {
    title: "ICpEP.SE - USTP Redesign",
    description:
      "A website redesign project for ICpEP.SE – USTP, USTP's Computer Engineering student organization. The project aimed to enhance the platform’s visual appeal and functionality while effectively showcasing the organization's activities, events, and initiatives.",
    image: "/assets/images/icpep1.jpg",
    tags: ["Figma", "Canva", "Photoshop"],
    url: "/projects/icpep",
    category: "design",
  },
  {
    title: "CpExpress: CpE Confessions",
    description:
      "A moderated anonymous confession platform launched during Valentines Day 2024. This project was designed to provide students with a safe space to share their confessions.",
    image: "/assets/images/cpexpress1.png",
    tags: ["Figma", "Canva", "Photoshop"],
    url: "/projects/cpexpress",
    category: "design",
  },
  {
    title: "CpEngage 2025",
    description:
      "CpEngage is a design project for ICpEP.SE–USTP’s community outreach program, created to promote computer engineering knowledge and skills among senior high school students.",
    image: "/assets/images/cpengage1.jpg",
    tags: ["Canva", "Photoshop", "Meta Business"],
    url: "/projects/cpengage",
    category: "socials",
  },
  {
    title: "CpE Building Blocks 2024",
    description:
      "Also known as CpE BB Time, is an ICT Month initiative where I led all creative design efforts for seminars, workshops, and training sessions, supporting the event’s educational goals.",
    image: "/assets/images/bbtime1.jpg",
    tags: ["Canva", "Photoshop", "Meta Business"],
    url: "/projects/bbtime",
    category: "socials",
  },
  {
    title: "CpExpo 2024",
    description:
      "An innovation showcase that I co-headed and also participated in as a presenting Computer Engineering student, displaying our research on microprocessor design and applications.",
    image: "/assets/images/cpexpo1.png",
    tags: ["Canva", "Photoshop", "Meta Business"],
    url: "/projects/cpexpo",
    category: "socials",
  },
  {
    title: "CpE Days 2024",
    description:
      "This three-day intramurals event is where I, the president of ICpEP.SE–USTP, led the planning, organization, and branding design to ensure an engaging experience for the participants.",
    image: "/assets/images/cpedays1.jpg",
    tags: ["Canva", "Photoshop", "Meta Business"],
    url: "/projects/cpedays",
    category: "socials",
  },
  {
    title: "CpE GenAss 2023",
    description:
      "This event is an orientation welcoming freshmen to the university, with its theme and event design led by me as the president to foster a strong sense of community from day one.",
    image: "/assets/images/genass1.jpg",
    tags: ["Canva", "Photoshop", "Meta Business"],
    url: "/projects/genass",
    category: "socials",
  },
  {
    title: "Branding for ICpEP.SE - USTP A.Y. 2023-2024",
    description:
      "Branding for ICpEP.SE – USTP A.Y. 2023–2024 featured an 8-bit space adventure theme, which I spearheaded as president by leading the branding and creative direction to deliver a fun, engaging, and memorable experience for CpE students.",
    image: "/assets/images/icpepse1.png",
    tags: ["Figma", "Canva", "Photoshop", "Aseprite", "IbisPaint", "Meta"],
    url: "/projects/icpepse",
    category: "multimedia",
  },
  {
    title: "USTP University Digital Arts - Art Projects",
    description:
      "As former content writer and contributor to UDA, I produced a range of creative works including a Christmas countdown poster, DTIYS challenge entries, and illustrations for campus-wide digital art initiatives that showcased talent and creativity.",
    image: "/assets/images/uda1.jpg",
    tags: ["Canva", "Photoshop", "Illustrator", "Lightroom", "IbisPaint"],
    url: "/projects/uda",
    category: "multimedia",
  },
  {
    title: "Imagine Me in this Anime!",
    description:
      "This is a personal digital art project where I illustrate myself in various anime styles, exploring character design, visual storytelling, and stylistic adaptation to deepen my creative and technical skills.",
    image: "/assets/images/meinaot1.jpg",
    tags: ["Canva", "Photoshop", "Illustrator", "IbisPaint"],
    url: "/projects/meinaot",
    category: "multimedia",
  },
  {
    title: "PixelPlay!",
    description:
      "It is a collection of original pixel art projects featuring character sprites, environments, and game-ready assets designed to capture retro aesthetics and enhance 2D gameplay experiences.",
    image: "/assets/images/pixel1.png",
    tags: ["Aseprite", "Canva", "Photoshop"],
    url: "/projects/pixel",
    category: "multimedia",
  },
  {
    title: "Video Editing Collection",
    description:
      "This collection features my works in video editing, combining rhythm, transitions, and narrative flow to produce engaging visual content for both creative and academic projects.",
    image: "/assets/images/videos1.png",
    tags: ["Capcut", "Blender"],
    url: "/projects/videos",
    category: "multimedia",
  },
  {
    title: "Photo Editing Collection",
    description:
      "This is a collection of creative photo edits showcasing retouching, color grading, and layout design, emphasizing storytelling through static visuals and digital enhancements.",
    image: "/assets/images/photos1.jpg",
    tags: ["Lightroom"],
    url: "/projects/photos",
    category: "multimedia",
  },
  // optional: cpexpo micro display, and cpexpress with sir mark
];

const categories = [
  "all",
  "frontend",
  "design",
  "socials",
  "multimedia",
] as const;
type Category = (typeof categories)[number];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <SparkleBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Navbar />
      <main className="pt-24 px-8">
        <div className="container mx-auto max-w-5xl space-y-6">
          <div className="flex justify-center font-bold text-glow animate-fade-in">
            <h1 className="font-noto text-4xl sm:text-6xl">Project</h1>
            <h2 className="pinyon-script text-6xl sm:text-8xl">Repository</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1 rounded-full transition-colors duration-300 capitalize ${
                  activeCategory === category
                    ? "white-button"
                    : "transparent-button border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 animate-fade-in-delay-2">
            {filteredProjects.map((project) => (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                className="group overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full border text-xs font-light px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-row items-center  space-x-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--yellow-accent)] text-glow hover:scale-110 active:scale-100 cursor-pointer"
                      >
                        <MdOutlineOpenInNew size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <ContactSection />
    </div>
  );
};

export default ProjectsPage;
