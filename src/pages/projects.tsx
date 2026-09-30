import { Link, useSearchParams } from "react-router-dom";
import { categories, projects, type Category } from "../data/projects";
import { PillTabs } from "../components/PillTabs";

const isCategory = (value: string | null): value is Category =>
  categories.some((c) => c === value);

// A "Projects" heading with the category pills (same look as Home's Featured header), then a
// grid of large thumbnails with the name and tags underneath.
const ProjectsPage = () => {
  const [params] = useSearchParams();
  const raw = params.get("category");
  // Unknown or missing values fall back to "all".
  const active: Category = isCategory(raw) ? raw : "all";

  const filtered = projects.filter(
    (project) => active === "all" || project.category === active,
  );

  return (
    <div className="space-y-6 p-0 lg:p-8">
      <header className="animate-fade-in space-y-4 text-center lg:text-left">
        <h1 className="text-2xl font-medium sm:text-3xl">Projects</h1>
        <PillTabs active={active} markCurrent />
      </header>

      {filtered.length === 0 ? (
        <p className="text-cream/70">No projects in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-4 lg:grid-cols-3">
          {filtered.map((project) => (
            <Link
              to={project.url}
              key={project.title}
              className="group flex flex-col gap-2 rounded-2xl p-2 text-left sm:gap-3 sm:p-3 transition-colors hover:bg-cream/10"
            >
              <img
                src={project.image}
                alt=""
                className="aspect-[16/10] w-full rounded-xl border border-line object-cover shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="min-w-0">
                <span className="block truncate font-semibold sm:text-base">
                  {project.title}
                </span>
                <span className="block text-xs text-cream/60">
                  {project.tags.join(" · ")}
                </span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
