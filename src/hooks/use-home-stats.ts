import { projects } from "../data/projects";
import { blogPosts } from "../data/blogPosts";
import { useCountUp } from "./use-count-up";

// The two "At a glance" tiles, with their numbers counting up. "Coming Soon" placeholders are not
// counted as projects.
export const useHomeStats = () => {
  const projectsShown = useCountUp(
    projects.filter((project) => !project.comingSoon).length,
  );
  const postsShown = useCountUp(blogPosts.length);
  return [
    { label: "Projects", shown: projectsShown },
    { label: "Blog posts", shown: postsShown },
  ];
};
