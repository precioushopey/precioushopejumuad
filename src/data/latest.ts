import { projects } from "./projects";
import { blogPosts } from "./blogPosts";

export type LatestItem = {
  title: string;
  description: string;
  image: string;
  to: string;
};

// Projects have no date, so array order is the featured order; the blog post is the newest by date.
export const latestItems = (): LatestItem[] => {
  const items: LatestItem[] = projects.slice(0, 2).map((p) => ({
    title: p.title,
    description: p.description,
    image: p.image,
    to: p.url,
  }));
  const newest = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))[0];
  if (newest) {
    items.push({
      title: newest.title,
      description: newest.description,
      image: newest.image,
      to: newest.to,
    });
  }
  return items;
};
