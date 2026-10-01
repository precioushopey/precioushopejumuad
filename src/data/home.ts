import { projects } from "./projects";

// Work experience, most recent first. Logos sit on a tile: white for dark/coloured marks,
// black for the Roostercat cat, which is white.
export const workHighlights = [
  {
    title: "Product Designer, Design Engineering",
    detail: "Freelance · Aug 2026 to present",
    logo: "/apple-touch-icon.png",
    tile: "",
  },
  {
    title: "Product Designer/Developer",
    detail: "OJT Connect · Feb 2026 to present",
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

const HOME_PROJECT_COUNT = 3;

// The Recent Projects rows: the newest projects with their first three tags as the detail line.
export const recentProjects = projects
  .slice(0, HOME_PROJECT_COUNT)
  .map(({ url, image, title, tags }) => ({
    url,
    image,
    title,
    detail: tags.slice(0, 3).join(" · "),
  }));

// The Featured Projects photo cards.
export const featuredProjects = projects
  .slice(0, HOME_PROJECT_COUNT)
  .map(({ url, image, title }) => ({ url, image, title }));
