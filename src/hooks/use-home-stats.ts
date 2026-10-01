import { projects } from "../data/projects";
import { blogPosts } from "../data/blogPosts";
import { useCountUp } from "./use-count-up";

// The two "At a glance" tiles, with their numbers counting up.
export const useHomeStats = () => {
  const projectsShown = useCountUp(projects.length);
  const postsShown = useCountUp(blogPosts.length);
  return [
    { label: "Projects", shown: projectsShown },
    { label: "Blog posts", shown: postsShown },
  ];
};
