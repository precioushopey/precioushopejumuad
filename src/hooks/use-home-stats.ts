import { projects } from "../data/projects";
import { jobs } from "../data/about";
import { useCountUp } from "./use-count-up";

// The two "At a glance" tiles, with their numbers counting up. "Coming Soon" placeholders are not
// counted as projects. Experiences count companies, not roles, matching the one card per company
// on the About page.
export const useHomeStats = () => {
  const projectsShown = useCountUp(
    projects.filter((project) => !project.comingSoon).length,
  );
  const experiencesShown = useCountUp(
    new Set(jobs.map((job) => job.company)).size,
  );
  return [
    { label: "Projects", shown: projectsShown },
    { label: "Experiences", shown: experiencesShown },
  ];
};
