import { Link, useSearchParams } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { categories, projects, type Category } from "../data/projects";
import { PillTabs } from "../components/PillTabs";

const isCategory = (value: string | null): value is Category =>
  categories.some((c) => c === value);

const ProjectsPage = () => {
  const [params] = useSearchParams();
  const raw = params.get("category");
  // Unknown or missing values fall back to "all".
  const active: Category = isCategory(raw) ? raw : "all";

  const filtered = projects.filter(
    (project) => active === "all" || project.category === active
  );

  return (
    <div className="space-y-6 p-5 sm:p-8">
      <header className="animate-fade-in space-y-4">
        <h1 className="text-2xl font-medium sm:text-3xl">Projects</h1>
        <PillTabs active={active} markCurrent />
      </header>

      {filtered.length === 0 ? (
        <p className="text-cream/70">No projects in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <Link
              to={project.url}
              key={project.title}
              className="group glass-card card-hover overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-5">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-cream/10 px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-row items-center justify-between gap-3">
                  <h2 className="text-left text-xl font-semibold">{project.title}</h2>
                  <span className="arrow-button" aria-hidden>
                    <MdArrowOutward size={18} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
