import { categories, projects } from "../data/projects";
import { useCategoryParam } from "./use-category-param";

// The finished projects in the category from the URL, each with a details line (its tags). "Coming
// Soon" placeholders stay off the grid; their pages still open by address.
export const useFilteredProjects = () => {
  const active = useCategoryParam(categories);
  const filtered = projects
    .filter(
      (project) =>
        !project.comingSoon &&
        (active === "all" || project.category === active),
    )
    .map((project) => ({ ...project, details: project.tags.join(" · ") }));
  return { active, projects: filtered };
};
