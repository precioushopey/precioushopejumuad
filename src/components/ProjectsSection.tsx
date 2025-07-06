import { JSX, useState } from "react";
import { FiGithub, FiFigma, FiFacebook, FiGlobe } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineOpenInNew,
  MdOutlineFolder,
} from "react-icons/md";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  fileUrl?: string;
  tool1Url?: string;
  tool2Url?: string;
  toolIcon1?: JSX.Element;
  toolIcon2?: JSX.Element;
  category: "frontend" | "design" | "socials" | "multimedia";
};

const projects: Project[] = [
  {
    title: "SUBAY",
    description:
      "SUBAY is a multi-camera detection system for customer tracking using YOLOv10, DeepSORT, and OSNet for re-identification in retail environments. This research won Best Thesis and Best Prototype at CpE Research Colloquium!",
    image: "/assets/images/subay1.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    demoUrl: "https://thesis-subay-web.vercel.app/",
    fileUrl:
      "https://drive.google.com/drive/folders/14-d1JSdhbfCQ2dHKyOmHeeTtlmk6JJOx?usp=sharing",
    tool1Url: "https://github.com/precioushopey/thesis-subay-web",
    tool2Url: "https://www.facebook.com/share/p/12Fq4QZERpa/",
    toolIcon1: <FiGithub size={16} />,
    toolIcon2: <FiFacebook size={16} />,
    category: "frontend",
  },
  {
    title: "HRMO Payroll System",
    description:
      "An automated payroll management system for LGU Jasaan’s HRMO, designed to streamline payroll processing by integrating directly with biometric data, reducing manual workload.",
    image: "/assets/images/payroll1.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Figma", "Canva"],
    demoUrl: "https://hrmo-payroll-web.vercel.app/",
    fileUrl: "https://hrmo-payroll-web.vercel.app/",
    tool1Url: "https://github.com/HR-Payroll/hrmo-payroll-web",
    tool2Url:
      "https://www.figma.com/design/RpTMeFJSwf0d7t3cxB1ori/HR-Payroll-Management?node-id=0-1&t=8FlCrtuJ47o0YDTA-1",
    toolIcon1: <FiGithub size={16} />,
    toolIcon2: <FiFigma size={16} />,
    category: "frontend",
  },
  {
    title: "iBRGY",
    description:
      "An automated document request and issuance system for barangays, designed to streamline their services by digitizing and accelerating the processing of requests.",
    image: "/assets/images/ibrgy1.png",
    tags: ["React", "JavaScript", "TailwindCSS", "Figma"],
    demoUrl: "https://ibrgy.netlify.app/",
    fileUrl:
      "https://drive.google.com/drive/folders/1WZWou71qFtARwjpr4Vg7k7uQ7SRc8k8M?usp=sharing",
    tool1Url: "https://github.com/capstone-ibrgy/ibrgy",
    tool2Url:
      "https://www.figma.com/design/GIHW4r5fqPlq3dLYuEdqpc/iBRGY-GUI-Design?node-id=0-1&t=m7OhCxVOTXC6iqgq-1",
    toolIcon1: <FiGithub size={16} />,
    toolIcon2: <FiFigma size={16} />,
    category: "frontend",
  },
  {
    title: "TaleMakers",
    description:
      "TaleMakers is an educational mobile game that empowers children to create interactive storybooks. It combines creative and accessible storytelling with engaging gameplay.",
    image: "/assets/images/talemakers1.png",
    tags: ["Figma", "Canva", "Illustrator", "Aseprite"],
    demoUrl:
      "https://www.figma.com/proto/8fOWyiK87SDeMOOhH0oDZM/TaleMakers-App?node-id=1418-1728&p=f&t=FteYo7hMhkxWz2K9-1&scaling=scale-down-width&content-scaling=fixed&page-id=1418%3A1727&starting-point-node-id=1418%3A1728",
    tool1Url:
      "https://www.figma.com/proto/8fOWyiK87SDeMOOhH0oDZM/TaleMakers-App?node-id=1118-56&p=f&t=U77PsVSoE2swj5xD-1&scaling=scale-down&content-scaling=fixed&page-id=1035%3A12&starting-point-node-id=1118%3A56",
    tool2Url: "https://www.roostercat.io/",
    toolIcon1: <FiFigma size={16} />,
    toolIcon2: <FiGlobe size={16} />,
    category: "design",
  },
  {
    title: "ATHOMES",
    description:
      "ATHOMES is a real estate website designed to streamline property browsing and client-agent interaction, allowing users to explore property listings and connect directly with real estate agents simplifying the property search and inquiry process.",
    image: "/assets/images/athomes1.png",
    tags: ["Figma", "Canva", "Photoshop"],
    demoUrl: "http://athomesph.com/",
    tool1Url:
      "https://www.figma.com/design/GGQyigCWlqYjvrcQpYGzIZ/ATHOMES---Website?node-id=0-1&t=ifIu5CBMsA1vIb7J-1",
    tool2Url: "https://www.facebook.com/athomescdorecruitement",
    toolIcon1: <FiFigma size={16} />,
    toolIcon2: <FiFacebook size={16} />,
    category: "design",
  },
  {
    title: "ICpEP.SE - USTP Redesign",
    description:
      "A website redesign project for ICpEP.SE, USTP-CDO's Computer Engineering student organization. The project aimed to enhance the platform’s visual appeal and functionality while effectively showcasing the organization's activities, events, and initiatives.",
    image: "/assets/images/icpep1.jpg",
    tags: ["Figma", "Canva", "Photoshop"],
    demoUrl: "https://www.icpepse-ustp.org/",
    tool1Url:
      "https://www.figma.com/design/pxDfxLLZKL8d22Asol61ha/ICpEP.SE---USTP-Website-Redesign-Mood-Board?node-id=0-1&t=yAHRFon0HpdcwOu1-1",
    tool2Url: "https://www.facebook.com/icpep.se.ustp",
    toolIcon1: <FiFigma size={16} />,
    toolIcon2: <FiFacebook size={16} />,
    category: "design",
  },
  {
    title: "CpExpress: CpE Confessions",
    description:
      "A moderated anonymous confession platform launched during Valentines Day 2024. This project was designed to provide students with a safe space to share their confessions.",
    image: "/assets/images/cpexpress1.png",
    tags: ["Figma", "Canva", "Photoshop"],
    demoUrl: "https://express.icpepse-ustp.org/",
    tool1Url:
      "https://www.figma.com/design/dTxd4Ox50vsJvi0Ax91DCG/CpExpress--CpE-Confessions?node-id=76-3&t=P8zko3Wy6yn4J3Br-1",
    tool2Url: "https://www.facebook.com/share/p/16auriyxyx/",
    toolIcon1: <FiFigma size={16} />,
    toolIcon2: <FiFacebook size={16} />,
    category: "design",
  },
  {
    title: "CpEngage 2025",
    description:
      "CpEngage is a design project for ICpEP.SE–USTP’s community outreach program, created to promote computer engineering knowledge and skills among senior high school students.",
    image: "/assets/images/cpengage1.jpg",
    tags: ["Canva", "Photoshop", "Meta Business"],
    demoUrl: "/projects",
    tool1Url: "https://www.facebook.com/share/p/16ybJQt49a/",
    toolIcon1: <FiFacebook size={16} />,
    category: "socials",
  },
  {
    title: "CpE Building Blocks 2024",
    description:
      "Also known as CpE BB Time, is an ICT Month initiative where I led all creative design efforts for seminars, workshops, and training sessions, supporting the event’s educational goals.",
    image: "/assets/images/bbtime1.jpg",
    tags: ["Canva", "Photoshop", "Meta Business"],
    demoUrl: "/projects",
    tool1Url: "https://www.facebook.com/share/p/1AafZxaxSo/",
    toolIcon1: <FiFacebook size={16} />,
    category: "socials",
  },
  {
    title: "CpExpo 2024",
    description:
      "An innovation showcase that I co-headed and also participated in as a presenting Computer Engineering student, displaying our research on microprocessor design and applications.",
    image: "/assets/images/cpexpo1.png",
    tags: ["Canva", "Photoshop", "Meta Business"],
    demoUrl: "/projects",
    tool1Url: "https://www.facebook.com/share/p/1W21t13bgV/",
    toolIcon1: <FiFacebook size={16} />,
    category: "socials",
  },
  {
    title: "CpE Days 2024",
    description:
      "This three-day intramurals event is where I, the president of ICpEP.SE–USTP, led the planning, organization, and branding design to ensure an engaging experience for the participants.",
    image: "/assets/images/cpedays1.jpg",
    tags: ["Canva", "Photoshop", "Meta Business"],
    demoUrl: "/projects",
    tool1Url: "https://www.facebook.com/share/p/16WscCyDag/",
    toolIcon1: <FiFacebook size={16} />,
    category: "socials",
  },
  {
    title: "CpE GenAss 2023",
    description:
      "This event is an orientation welcoming freshmen to the university, with its theme and event design led by me as the president to foster a strong sense of community from day one.",
    image: "/assets/images/genass1.jpg",
    tags: ["Canva", "Photoshop", "Meta Business"],
    demoUrl: "/projects",
    tool1Url: "https://www.facebook.com/share/p/1CVcjtJCZx/",
    toolIcon1: <FiFacebook size={16} />,
    category: "socials",
  },
  {
    title: "Branding for ICpEP.SE - USTP A.Y. 2023-2024",
    description:
      "Branding for ICpEP.SE – USTP A.Y. 2023–2024 featured an 8-bit space adventure theme, which I spearheaded as president by leading the branding and creative direction to deliver a fun, engaging, and memorable experience for CpE students.",
    image: "/assets/images/icpepse1.png",
    tags: ["Figma", "Canva", "Photoshop", "Aseprite", "IbisPaint", "Meta"],
    demoUrl: "/projects",
    category: "multimedia",
  },
  {
    title: "USTP University Digital Arts - Art Projects",
    description:
      "As former content writer and contributor to UDA, I produced a range of creative works including a Christmas countdown poster, DTIYS challenge entries, and illustrations for campus-wide digital art initiatives that showcased talent and creativity.",
    image: "/assets/images/uda1.jpg",
    tags: ["Canva", "Photoshop", "Illustrator", "Lightroom", "IbisPaint"],
    demoUrl: "/projects",
    category: "multimedia",
  },
  {
    title: "Imagine Me in this Anime!",
    description:
      "This is a personal digital art project where I illustrate myself in various anime styles, exploring character design, visual storytelling, and stylistic adaptation to deepen my creative and technical skills.",
    image: "/assets/images/meinaot1.jpg",
    tags: ["Canva", "Photoshop", "Illustrator", "IbisPaint"],
    demoUrl: "/projects",
    category: "multimedia",
  },
  {
    title: "PixelPlay!",
    description:
      "It is a collection of original pixel art projects featuring character sprites, environments, and game-ready assets designed to capture retro aesthetics and enhance 2D gameplay experiences.",
    image: "/assets/images/pixel1.png",
    tags: ["Aseprite", "Canva", "Photoshop"],
    demoUrl: "/projects",
    category: "multimedia",
  },
  {
    title: "Video Editing Collection",
    description:
      "This collection features my works in video editing, combining rhythm, transitions, and narrative flow to produce engaging visual content for both creative and academic projects.",
    image: "/assets/images/videos1.png",
    tags: ["Capcut", "Blender"],
    demoUrl: "/projects",
    category: "multimedia",
  },
  {
    title: "Photo Editing Collection",
    description:
      "This is a collection of creative photo edits showcasing retouching, color grading, and layout design, emphasizing storytelling through static visuals and digital enhancements.",
    image: "/assets/images/photos1.jpg",
    tags: ["Lightroom"],
    demoUrl: "/projects",
    category: "multimedia",
  },
  // optional: leaderboard, and cpexpress with sir mark
];

const categories = [
  "all",
  "frontend",
  "design",
  "socials",
  "multimedia",
] as const;
type Category = (typeof categories)[number];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="container mx-auto max-w-5xl space-y-4 pt-20 px-8"
    >
      <div className="flex justify-center font-bold text-glow animate-fade-in">
        <h2 className="font-noto text-3xl sm:text-4xl">Featured</h2>
        <h2 className="pinyon-script text-5xl sm:text-6xl">Projects</h2>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 animate-fade-in-delay-2">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full border text-xs font-light px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-semibold text-lg pt-4">{project.title}</h3>
              <p className="pt-2">{project.description}</p>
              <div className="flex justify-between items-center pt-4">
                <div className="flex space-x-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="white-button p-1.5"
                    >
                      <MdOutlineOpenInNew
                        size={16}
                        className="text-[var(--brown-accent)] hover:text-[var(--yellow-accent)]"
                      />
                    </a>
                  )}

                  {project.category === "frontend" && project.fileUrl && (
                    <a
                      href={project.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="white-button p-1.5"
                    >
                      <MdOutlineFolder
                        size={16}
                        className="text-[var(--brown-accent)] hover:text-[var(--yellow-accent)]"
                      />
                    </a>
                  )}

                  {project.category === "frontend" && project.tool1Url && (
                    <a
                      href={project.tool1Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="white-button p-1.5"
                    >
                      {project.toolIcon1}
                    </a>
                  )}

                  {project.category === "frontend" && project.tool2Url && (
                    <a
                      href={project.tool2Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="white-button p-1.5"
                    >
                      {project.toolIcon2}
                    </a>
                  )}

                  {project.category === "design" && project.tool1Url && (
                    <a
                      href={project.tool1Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="white-button p-1.5"
                    >
                      {project.toolIcon1}
                    </a>
                  )}

                  {project.category === "design" && project.tool2Url && (
                    <a
                      href={project.tool2Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="white-button p-1.5"
                    >
                      {project.toolIcon2}
                    </a>
                  )}

                  {project.category === "socials" && project.tool1Url && (
                    <a
                      href={project.tool1Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="white-button p-1.5"
                    >
                      {project.toolIcon1}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="animate-fade-in-delay-3 pt-4">
        <a
          href="/projects"
          className="white-button w-fit flex items-center mx-auto gap-2"
        >
          See More Projects <MdOutlineKeyboardArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};
