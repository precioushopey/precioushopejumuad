import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  return (
    <div className="container mx-auto max-w-5xl space-y-6 py-4 px-8 text-sm sm:text-base">
      <header>
        <div className="flex justify-center font-bold text-glow animate-fade-in">
          <h1 className="text-3xl sm:text-6xl">Blog</h1>
          <h2 className="font-display text-3xl sm:text-5xl">Page</h2>
        </div>
      </header>

      <main className="space-y-6">
        {blogPosts.map((post) => (
          <Link
            key={post.to}
            to={post.to}
            target="_top"
            className="group flex flex-col md:flex-row overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs card-hover"
          >
            <img
              src={post.image}
              alt={post.alt}
              className="w-full md:w-[200px] aspect-[1/1] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="flex flex-col items-start justify-center p-4 space-y-2 ml-2">
              <h3
                className="font-semibold text-lg"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <p className="line-clamp-3 font-light italic text-left">
                {post.description}
              </p>
              <div className="flex items-center text-[10px] sm:text-sm gap-x-2">
                <p>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Blog;
