import { ThumbnailTile } from "../components/ThumbnailTile";
import { blogPosts } from "../data/blogPosts";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

// The posts as the same thumbnail tiles the Projects page uses, with the date as the details line.
const Blog = () => {
  return (
    <div className="space-y-6 p-0 lg:p-8">
      <header className="animate-fade-in text-center lg:text-left">
        <h1 className="text-2xl font-medium sm:text-3xl">Blog</h1>
      </header>

      <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-4 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <ThumbnailTile
            key={post.to}
            to={post.to}
            image={post.image}
            title={post.title}
            subtitle={<time dateTime={post.date}>{formatDate(post.date)}</time>}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
