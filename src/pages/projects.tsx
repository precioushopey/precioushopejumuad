import { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { projects } from "../data/projects";

const categories = [
  "all",
  "frontend",
  "design",
  "socials",
  "multimedia",
] as const;
type Category = (typeof categories)[number];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <div className="container mx-auto max-w-5xl space-y-6 py-4 px-8">
      <header>
        <div className="flex flex-col sm:flex-row justify-center font-bold text-glow animate-fade-in text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl">Project</h1>
          <h2 className="font-display text-4xl sm:text-5xl sm:ml-2">
            Repository
          </h2>
        </div>
      </header>

      <main className="space-y-6">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === category
                  ? "white-button"
                  : "transparent-button border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
          {filteredProjects.map((project) => (
            <Link
              to={project.url}
              target="_top"
              rel="noopener noreferrer"
              key={project.title}
              className="group overflow-hidden glass-card card-hover"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border bg-white/60 text-xs px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-row items-center justify-between gap-3">
                  <h3 className="text-left text-xl font-semibold">{project.title}</h3>
                  <span className="arrow-button" aria-hidden>
                    <MdArrowOutward size={18} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
