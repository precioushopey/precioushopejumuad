import { categories, projects } from "../data/projects";
import { useCategoryParam } from "./use-category-param";

// The projects in the category from the URL, each with its tags joined into a details line.
export const useFilteredProjects = () => {
  const active = useCategoryParam(categories);
  const filtered = projects
    .filter((project) => active === "all" || project.category === active)
    .map((project) => ({ ...project, details: project.tags.join(" · ") }));
  return { active, projects: filtered };
};
