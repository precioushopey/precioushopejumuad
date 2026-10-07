export type Project = {
  title: string;
  description: string;
  image: string;
  /** A taller picture for the Featured Projects cards on Home; falls back to `image`. */
  featuredImage?: string;
  /** Where the Featured Projects card on Home goes instead of the project page (the live site). */
  featuredLink?: string;
  tags: string[];
  url: string;
  category: "frontend" | "design" | "socials" | "multimedia";
  /** The page is only a "Coming Soon" placeholder, so it stays out of search results and the sitemap. */
  comingSoon?: boolean;
};

export const categories = [
  "all",
  "frontend",
  "design",
  "socials",
  "multimedia",
] as const;

export const projects: Project[] = [
  {
    title: "OJT Connect",
    description:
      "OJT Connect is a web platform that connects early-career Filipino talent with verified employers and helps universities, colleges, and the government run and oversee on-the-job training. I designed and built its four portals (On-the-Job Trainee, Host Training Establishment, Higher Education Institution, and Government Regulator), its public website, and a shared design system as a product designer and frontend developer.",
    image: "/assets/images/projects/ojtconnect/cover.png",
    featuredImage: "/assets/images/projects/ojtconnect/thumbnail.png",
    featuredLink: "https://ojtconnect.com/",
    tags: ["Figma", "React", "Claude Code", "SEO"],
    url: "/projects/ojtconnect",
    category: "frontend",
  },
  {
    title: "ROOTÉ",
    description:
      "ROOTÉ.US is a web app for people with hair loss: a free hair diagnosis, a personal report, a treatment plan with checkout, and a daily program app, in six languages including right-to-left. I designed the journey and the product packaging (bottles, label artwork, and carton) and built the front end as a UX/UI designer and front-end developer.",
    image: "/assets/images/projects/roote/cover.png",
    featuredImage: "/assets/images/projects/roote/thumbnail.png",
    featuredLink: "https://roote.us/",
    tags: ["Figma", "React", "Claude Code", "UX/UI Design"],
    url: "/projects/roote",
    category: "frontend",
  },
  {
    title: "WeCare",
    description:
      "WeCare is a problem-first health platform for Germany and Austria: a short assessment leads to one recommended solution, a doctor's review, and delivery. I designed the journey and built the front end as a UX designer and front-end developer on the TLH Team.",
    image: "/assets/images/projects/wecare/cover.png",
    featuredImage: "/assets/images/projects/wecare/thumbnail.png",
    featuredLink: "https://www.wecare360.de/",
    tags: ["Figma", "React", "Claude Code", "UX/UI Design"],
    url: "/projects/wecare",
    category: "frontend",
  },
  {
    title: "SanoVida",
    description:
      "SanoVida is a mobile companion app for a 21-day health, fitness, and routine program, guiding Spanish-speaking women in Mexico from quiz and checkout through daily habits, tracking, and AI coaching. I designed the journey, wrote the UX copy, and built an interactive prototype for the Google UX Design Certificate.",
    image: "/assets/images/projects/sanovida/cover.png",
    tags: ["Figma", "UX/UI Design", "UX Writing", "Prototyping"],
    url: "/projects/sanovida",
    category: "design",
  },
  {
    title: "CoCo: Coop Companion",
    description:
      "CoCo: Coop Companion is a mobile-first, offline-capable app for Philippine cooperatives that brings membership, share capital, fee collection, accounting, and CDA and BIR compliance reports into one place, with a separate interface for administrators, officers, and members. I designed the requirements, flows, design system, and screens as a UX/UI designer.",
    image: "/assets/images/projects/coco/cover.png",
    tags: ["Figma", "UX/UI Design", "Design System", "Prototyping"],
    url: "/projects/coco",
    category: "design",
  },
  {
    title: "Roostercat Games Website",
    description:
      "A responsive website for Roostercat LLC, an independent game studio: ten pages that present three mobile games in development and the studio's client services to players and prospective clients. I led the design and hand-coded it in HTML, CSS, and JavaScript as the lead designer and front-end developer.",
    image: "/assets/images/projects/roostercat/cover.jpg",
    tags: ["HTML", "CSS", "JavaScript", "UX/UI Design"],
    url: "/projects/roostercat",
    category: "frontend",
  },
  {
    title: "SUBAY",
    description:
      "SUBAY is a multi-camera detection system for customer tracking using YOLOv10, DeepSORT, and OSNet for re-identification in retail environments. This research won Best Thesis and Best Prototype at CpE Research Colloquium!",
    image: "/assets/images/projects/subay/subay1.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    url: "/projects/subay",
    category: "frontend",
  },
  {
    title: "HRMO Payroll System",
    description:
      "An automated payroll management system for LGU Jasaan’s HRMO, designed to streamline payroll processing by integrating directly with biometric data, reducing manual workload.",
    image: "/assets/images/projects/payroll/payroll1.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Figma", "Canva"],
    url: "/projects/payroll",
    category: "frontend",
  },
  {
    title: "iBRGY",
    description:
      "An automated document request and issuance system for barangays, designed to streamline their services by digitizing and accelerating the processing of requests.",
    image: "/assets/images/projects/ibrgy/ibrgy1.png",
    tags: ["React", "JavaScript", "TailwindCSS", "Figma"],
    url: "/projects/ibrgy",
    category: "frontend",
  },
  {
    title: "TaleMakers",
    description:
      "TaleMakers is an educational mobile game that empowers children to create interactive storybooks. It combines creative and accessible storytelling with engaging gameplay.",
    image: "/assets/images/projects/talemakers/talemakers1.png",
    tags: ["Figma", "Canva", "Illustrator", "Aseprite"],
    url: "/projects/talemakers",
    category: "design",
  },
  {
    title: "ATHOMES",
    description:
      "ATHOMES is a real estate website designed to streamline property browsing and client-agent interaction, allowing users to explore property listings and connect directly with real estate agents simplifying the property search and inquiry process.",
    image: "/assets/images/projects/athomes/athomes1.png",
    tags: ["Figma", "Canva", "Photoshop"],
    url: "/projects/athomes",
    category: "design",
  },
  {
    title: "ICpEP.SE - USTP Redesign",
    description:
      "A website redesign project for ICpEP.SE – USTP, USTP's Computer Engineering student organization. The project aimed to enhance the platform’s visual appeal and functionality while effectively showcasing the organization's activities, events, and initiatives.",
    image: "/assets/images/projects/icpep/icpep1.jpg",
    tags: ["Figma", "Canva", "Photoshop"],
    url: "/projects/icpep",
    category: "design",
  },
  {
    title: "CpExpress: CpE Confessions",
    description:
      "A moderated anonymous confession platform launched during Valentines Day 2024. This project was designed to provide students with a safe space to share their confessions.",
    image: "/assets/images/projects/cpexpress/cpexpress1.png",
    tags: ["Figma", "Canva", "Photoshop"],
    url: "/projects/cpexpress",
    category: "design",
  },
  {
    title: "CpEngage 2025",
    description:
      "CpEngage is a design project for ICpEP.SE–USTP’s community outreach program, created to promote computer engineering knowledge and skills among senior high school students.",
    image: "/assets/images/projects/cpengage/cpengage1.jpg",
    tags: ["Canva", "Photoshop", "Meta Business"],
    url: "/projects/cpengage",
    comingSoon: true,
    category: "socials",
  },
  {
    title: "CpE Building Blocks 2024",
    description:
      "Also known as CpE BB Time, is an ICT Month initiative where I led all creative design efforts for seminars, workshops, and training sessions, supporting the event’s educational goals.",
    image: "/assets/images/projects/bbtime/bbtime1.jpg",
    tags: ["Canva", "Photoshop", "Meta Business"],
    url: "/projects/bbtime",
    comingSoon: true,
    category: "socials",
  },
  {
    title: "CpExpo 2024",
    description:
      "An innovation showcase that I co-headed and also participated in as a presenting Computer Engineering student, displaying our research on microprocessor design and applications.",
    image: "/assets/images/projects/cpexpo/cpexpo1.png",
    tags: ["Canva", "Photoshop", "Meta Business"],
    url: "/projects/cpexpo",
    comingSoon: true,
    category: "socials",
  },
  {
    title: "CpE Days 2024",
    description:
      "This three-day intramurals event is where I, the president of ICpEP.SE–USTP, led the planning, organization, and branding design to ensure an engaging experience for the participants.",
    image: "/assets/images/projects/cpedays/cpedays1.jpg",
    tags: ["Canva", "Photoshop", "Meta Business"],
    url: "/projects/cpedays",
    comingSoon: true,
    category: "socials",
  },
  {
    title: "CpE GenAss 2023",
    description:
      "This event is an orientation welcoming freshmen to the university, with its theme and event design led by me as the president to foster a strong sense of community from day one.",
    image: "/assets/images/projects/genass/genass1.jpg",
    tags: ["Canva", "Photoshop", "Meta Business"],
    url: "/projects/genass",
    comingSoon: true,
    category: "socials",
  },
  {
    title: "Branding for ICpEP.SE - USTP A.Y. 2023-2024",
    description:
      "Branding for ICpEP.SE – USTP A.Y. 2023–2024 featured an 8-bit space adventure theme, which I spearheaded as president by leading the branding and creative direction to deliver a fun, engaging, and memorable experience for CpE students.",
    image: "/assets/images/projects/icpepse/icpepse1.png",
    tags: ["Figma", "Canva", "Photoshop", "Aseprite", "IbisPaint", "Meta"],
    url: "/projects/icpepse",
    comingSoon: true,
    category: "multimedia",
  },
  {
    title: "USTP University Digital Arts - Art Projects",
    description:
      "As former content writer and contributor to UDA, I produced a range of creative works including a Christmas countdown poster, DTIYS challenge entries, and illustrations for campus-wide digital art initiatives that showcased talent and creativity.",
    image: "/assets/images/projects/uda/uda1.jpg",
    tags: ["Canva", "Photoshop", "Illustrator", "Lightroom", "IbisPaint"],
    url: "/projects/uda",
    comingSoon: true,
    category: "multimedia",
  },
  {
    title: "Imagine Me in this Anime!",
    description:
      "This is a personal digital art project where I illustrate myself in various anime styles, exploring character design, visual storytelling, and stylistic adaptation to deepen my creative and technical skills.",
    image: "/assets/images/projects/meinaot/meinaot1.jpg",
    tags: ["Canva", "Photoshop", "Illustrator", "IbisPaint"],
    url: "/projects/meinaot",
    comingSoon: true,
    category: "multimedia",
  },
  {
    title: "PixelPlay!",
    description:
      "It is a collection of original pixel art projects featuring character sprites, environments, and game-ready assets designed to capture retro aesthetics and enhance 2D gameplay experiences.",
    image: "/assets/images/projects/pixels/pixel1.png",
    tags: ["Aseprite", "Canva", "Photoshop"],
    url: "/projects/pixels",
    comingSoon: true,
    category: "multimedia",
  },
  {
    title: "Video Editing Collection",
    description:
      "This collection features my works in video editing, combining rhythm, transitions, and narrative flow to produce engaging visual content for both creative and academic projects.",
    image: "/assets/images/projects/videos/videos1.png",
    tags: ["Capcut", "Blender"],
    url: "/projects/videos",
    comingSoon: true,
    category: "multimedia",
  },
  {
    title: "Photo Editing Collection",
    description:
      "This is a collection of creative photo edits showcasing retouching, color grading, and layout design, emphasizing storytelling through static visuals and digital enhancements.",
    image: "/assets/images/projects/photos/photos1.jpg",
    tags: ["Lightroom"],
    url: "/projects/photos",
    comingSoon: true,
    category: "multimedia",
  },
  // optional: cpexpo micro display, and cpexpress with sir mark
];
