import { projects } from "./projects";

// Work experience, most recent first. Logos sit on a tile: white for dark/coloured marks,
// black for the Roostercat cat, which is white.
export const workHighlights = [
  {
    title: "Product Designer, Design Engineering",
    detail: "Freelance · Mar 2024 to present",
    logo: "/apple-touch-icon.png",
    tile: "",
  },
  {
    title: "Product Designer/Developer",
    detail: "OJT Connect · Aug 2025 to present",
    logo: "/assets/images/experience/ojtconnect_logo.png",
    tile: "bg-white p-1",
  },
  {
    title: "Designer/Artist",
    detail: "Roostercat LLC · Jun 2025 to present",
    logo: "/assets/images/experience/roostercat.png",
    tile: "bg-black p-1",
  },
];

// The Recent Projects rows: three chosen projects with their first three tags as the detail line.
const RECENT_PROJECTS = [
  "/projects/ojtconnect",
  "/projects/clawholics",
  "/projects/wecare",
];

export const recentProjects = RECENT_PROJECTS.flatMap((url) => {
  const project = projects.find((p) => p.url === url);
  return project
    ? [
        {
          url,
          image: project.image,
          title: project.title,
          detail: project.tags.slice(0, 3).join(" · "),
        },
      ]
    : [];
});

// The Featured Projects photo cards: the same three projects as Recent Projects.
export const featuredProjects = recentProjects.flatMap(({ url }) => {
  const project = projects.find((p) => p.url === url);
  return project
    ? [
        {
          url,
          image: project.featuredImage ?? project.image,
          title: project.title,
          external: project.featuredLink !== undefined,
          href: project.featuredLink ?? url,
        },
      ]
    : [];
});
