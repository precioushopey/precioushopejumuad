import { Link, useLocation } from "react-router-dom";
import { LuChevronLeft } from "react-icons/lu";

// Shown for any address that is not a page of the site. It says which address it could not find,
// so a mistyped or outdated link is easy to spot, and offers the way back.
const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-[60vh] flex-1 flex-col items-center justify-center gap-6 p-6 text-center animate-fade-in">
      <p className="text-6xl font-semibold text-accent sm:text-8xl">404</p>
      <div className="space-y-2">
        <h1 className="text-2xl font-medium sm:text-3xl">Page not found</h1>
        <p className="mx-auto max-w-md break-words text-sm text-cream/70">
          I couldn’t find{" "}
          <code className="rounded-md bg-cream/10 px-2 py-0.5 text-cream">
            {pathname}
          </code>
          . The link may be mistyped, or the page may have moved.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link to="/" className="flex w-fit items-center gap-2 white-button">
          <LuChevronLeft size={20} aria-hidden />
          Back to Home
        </Link>
        <Link to="/projects" className="pill">
          Projects
        </Link>
        <Link to="/blog" className="pill">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
