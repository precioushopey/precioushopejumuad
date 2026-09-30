import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  return (
    <div className="space-y-6 p-5 text-sm sm:p-8 sm:text-base">
      <header className="animate-fade-in">
        <h1 className="text-2xl font-medium sm:text-3xl">Blog</h1>
      </header>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link
            key={post.to}
            to={post.to}
            target="_top"
            className="group flex flex-col md:flex-row overflow-hidden glass-card card-hover"
          >
            <img
              src={post.image}
              alt={post.alt}
              className="w-full md:w-[200px] aspect-[1/1] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="flex flex-1 flex-col items-start justify-center p-4 space-y-2 ml-2">
              <h2 className="text-lg font-semibold">{post.title}</h2>
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
                      timeZone: "UTC",
                    })}
                  </time>
                </p>
              </div>
              <span className="arrow-button self-end" aria-hidden>
                <MdArrowOutward size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
