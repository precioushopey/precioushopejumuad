import { useSearchParams } from "react-router-dom";
import { PillTabs } from "../components/PillTabs";
import { ThumbnailTile } from "../components/ThumbnailTile";
import {
  blogCategories,
  blogPosts,
  type BlogCategory,
} from "../data/blogPosts";

const isCategory = (value: string | null): value is BlogCategory =>
  blogCategories.some((c) => c === value);

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

// The posts as the same thumbnail tiles the Projects page uses, with the date as the details line
// and category pills (kept in the URL, /blog?category=<c>) above them.
const Blog = () => {
  const [params] = useSearchParams();
  const raw = params.get("category");
  // Unknown or missing values fall back to "all".
  const active: BlogCategory = isCategory(raw) ? raw : "all";

  const filtered = blogPosts.filter(
    (post) => active === "all" || post.category === active,
  );

  return (
    <div className="space-y-6 p-0 lg:p-8">
      <header className="animate-fade-in space-y-4 text-center lg:text-left">
        <h1 className="text-2xl font-medium sm:text-3xl">Blog</h1>
        <PillTabs
          active={active}
          markCurrent
          categories={blogCategories}
          basePath="/blog"
          label="Blog categories"
        />
      </header>

      {filtered.length === 0 ? (
        <p className="text-cream/70">No posts in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-4 lg:grid-cols-3">
          {filtered.map((post) => (
            <ThumbnailTile
              key={post.to}
              to={post.to}
              image={post.image}
              title={post.title}
              subtitle={
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
