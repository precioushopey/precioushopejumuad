import { useSearchParams } from "react-router-dom";
import { categories, projects, type Category } from "../data/projects";
import { PillTabs } from "../components/PillTabs";
import { ThumbnailTile } from "../components/ThumbnailTile";

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
      <header className="animate-fade-in text-center lg:space-y-4 lg:text-left">
        <h1 className="text-2xl font-medium max-lg:sr-only sm:text-3xl">
          Projects
        </h1>
        <PillTabs active={active} markCurrent />
      </header>

      {filtered.length === 0 ? (
        <p className="text-cream/70">No projects in this category yet.</p>
      ) : (
        <div
          key={active}
          className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-4 lg:grid-cols-3"
        >
          {filtered.map((project, index) => (
            <ThumbnailTile
              key={project.title}
              index={index}
              to={project.url}
              image={project.image}
              title={project.title}
              subtitle={project.tags.join(" · ")}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
