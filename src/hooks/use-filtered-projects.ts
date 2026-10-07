import { categories, projects } from "../data/projects";
import { useCategoryParam } from "./use-category-param";

// The projects in the category from the URL, finished ones first and "Coming Soon" placeholders
// last (the sort is stable, so each group keeps its order), each with a details line: its tags, or
// "Coming soon".
export const useFilteredProjects = () => {
  const active = useCategoryParam(categories);
  const filtered = projects
    .filter((project) => active === "all" || project.category === active)
    .sort((a, b) => Number(!!a.comingSoon) - Number(!!b.comingSoon))
    .map((project) => ({
      ...project,
      details: project.comingSoon ? "Coming soon" : project.tags.join(" · "),
    }));
  return { active, projects: filtered };
};
