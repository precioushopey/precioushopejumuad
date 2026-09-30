import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { projects } from "../data/projects";
import { blogPosts } from "../data/blogPosts";
import { PhilippineClock } from "../components/PhilippineClock";
import { PillTabs } from "../components/PillTabs";
import { RingGauge } from "../components/RingGauge";

const tools = [
  { name: "Figma", src: "/assets/images/figma.png" },
  { name: "React", src: "/assets/images/react.png" },
  { name: "TypeScript", src: "/assets/images/ts.png" },
  { name: "Tailwind CSS", src: "/assets/images/tailwind.png" },
];

const Home = () => {
  const featured = projects.slice(0, 3);
  const max = Math.max(projects.length, blogPosts.length);

  return (
    <div className="space-y-5 p-5 sm:p-8">
      <header className="animate-fade-in space-y-4 text-left">
        <h1 className="text-2xl font-medium sm:text-3xl">Featured</h1>
        <PillTabs active="all" />
      </header>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-2">
        <section aria-label="Recent work" className="glass-card space-y-2 p-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm text-cream/70">Recent work</h2>
            <Link
              to="/projects"
              aria-label="See all projects"
              title="See all projects"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-110"
            >
              <LuArrowRight size={20} aria-hidden />
            </Link>
          </div>
          {featured.map((p) => (
            <Link
              key={p.url}
              to={p.url}
              className="flex min-w-0 items-center gap-3 rounded-2xl bg-black/20 p-2.5 text-left transition-colors hover:bg-black/35"
            >
              <img
                src={p.image}
                alt=""
                className="h-14 w-16 shrink-0 rounded-xl object-cover"
              />
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">
                  {p.title}
                </span>
                <span className="block truncate text-xs text-cream/70">
                  {p.tags.slice(0, 3).join(" · ")}
                </span>
              </span>
            </Link>
          ))}
        </section>

        <div className="space-y-5">
          <section
            aria-label="At a glance"
            className="glass-card flex flex-wrap items-center justify-around gap-x-4 gap-y-3 p-4"
          >
            <PhilippineClock />
            <span aria-hidden className="hidden h-20 w-px bg-line sm:block" />
            <RingGauge value={projects.length} max={max} label="Projects" />
            <RingGauge value={blogPosts.length} max={max} label="Blog posts" />
          </section>

          <section aria-label="Tools" className="glass-card p-4">
            <ul className="grid grid-cols-4 gap-3">
              {tools.map((t) => (
                <li
                  key={t.name}
                  className="tile-outline aspect-square bg-cream/90 p-3"
                >
                  <img
                    src={t.src}
                    alt={t.name}
                    className="h-full w-full object-contain"
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section
        aria-label="Featured projects"
        className="grid grid-cols-3 gap-3 sm:gap-5"
      >
        {featured.map((p) => (
          <Link
            key={p.url}
            to={p.url}
            className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-line"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 text-left text-xs font-medium sm:text-sm">
              {p.title}
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
