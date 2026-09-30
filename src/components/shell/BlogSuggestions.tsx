import { Link } from "react-router-dom";
import { LuArrowRight, LuNewspaper } from "react-icons/lu";
import { blogPosts } from "../../data/blogPosts";
import { ThumbnailTile } from "../ThumbnailTile";
import { WindowBar } from "../WindowBar";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

// The right-hand column on a blog post: every other post as the same thumbnail tiles the Blog page
// uses, stacked in one column (the column scrolls). Posts from the same category come first, then
// the rest, newest first. Below xl the same tiles wrap into a grid at the bottom of the page.
export const BlogSuggestions = ({ currentPath }: { currentPath: string }) => {
  const current = blogPosts.find((p) => p.to === currentPath);
  const others = blogPosts
    .filter((p) => p.to !== currentPath)
    .sort((a, b) => {
      const sameA = current && a.category === current.category ? 0 : 1;
      const sameB = current && b.category === current.category ? 0 : 1;
      return sameA - sameB || b.date.localeCompare(a.date);
    });

  return (
    <section aria-label="More posts" className="glass-card">
      <WindowBar
        icon={<LuNewspaper size={14} />}
        title="More posts"
        status={
          <Link
            to="/blog"
            aria-label="See all posts"
            title="See all posts"
            className="flex h-6 w-6 items-center justify-center rounded-full text-cream/50 transition-colors duration-300 hover:text-cream"
          >
            <LuArrowRight size={14} aria-hidden />
          </Link>
        }
      />
      <div className="grid grid-cols-2 gap-x-2 gap-y-1 p-3 lg:grid-cols-3 xl:grid-cols-1">
        {others.map((post, index) => (
          <ThumbnailTile
            key={post.to}
            to={post.to}
            image={post.image}
            title={post.title}
            subtitle={<time dateTime={post.date}>{formatDate(post.date)}</time>}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
