import { Link, useSearchParams } from "react-router-dom";
import { LuFolderOpen } from "react-icons/lu";
import { categories, projects, type Category } from "../data/projects";
import { PillTabs } from "../components/PillTabs";
import { WindowBar } from "../components/WindowBar";

const isCategory = (value: string | null): value is Category =>
  categories.some((c) => c === value);

// The projects as a File Explorer window: title bar, address bar, category filters, a grid of
// large-icon thumbnails and a status bar with the item count.
const ProjectsPage = () => {
  const [params] = useSearchParams();
  const raw = params.get("category");
  // Unknown or missing values fall back to "all".
  const active: Category = isCategory(raw) ? raw : "all";

  const filtered = projects.filter(
    (project) => active === "all" || project.category === active,
  );
  const countLabel = `${filtered.length} ${filtered.length === 1 ? "item" : "items"}`;

  return (
    <div className="p-5 sm:p-8">
      <h1 className="sr-only">Projects</h1>
      <section
        aria-label="Projects"
        className="glass-card animate-fade-in overflow-hidden"
      >
        <WindowBar
          icon={<LuFolderOpen size={14} />}
          title={`Projects (${projects.length} items)`}
        />
        <div className="border-b border-line/40 px-6 py-2 text-left text-xs text-cream/60">
          This PC <span aria-hidden>›</span> Projects
          {active !== "all" && (
            <>
              {" "}
              <span aria-hidden>›</span>{" "}
              <span className="capitalize">{active}</span>
            </>
          )}
        </div>
        <div className="border-b border-line/40 px-6 py-3">
          <PillTabs active={active} markCurrent />
        </div>

        {filtered.length === 0 ? (
          <p className="px-6 py-10 text-cream/70">
            No projects in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-x-4 gap-y-2 p-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Link
                to={project.url}
                key={project.title}
                className="group flex flex-col gap-3 rounded-2xl p-3 text-left transition-colors hover:bg-cream/10"
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

        <div className="border-t border-line/40 px-6 py-2 text-left text-xs text-cream/60">
          {countLabel}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
