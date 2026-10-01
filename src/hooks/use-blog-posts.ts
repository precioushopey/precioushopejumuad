import { blogCategories, blogPosts } from "../data/blogPosts";
import { formatLongDate } from "../lib/format-date";
import { useCategoryParam } from "./use-category-param";

// The posts in the category from the URL, each with its date already formatted for display.
export const useBlogPosts = () => {
  const active = useCategoryParam(blogCategories);
  const posts = blogPosts
    .filter((post) => active === "all" || post.category === active)
    .map((post) => ({ ...post, dateLabel: formatLongDate(post.date) }));
  return { active, posts };
};
