import { Link } from "react-router-dom";
import { categories, type Category } from "../data/projects";

export const PillTabs = ({ active }: { active: Category }) => (
  <nav aria-label="Project categories" className="flex flex-wrap gap-3">
    {categories.map((c) => (
      <Link
        key={c}
        to={c === "all" ? "/projects" : `/projects?category=${c}`}
        aria-current={c === active ? "page" : undefined}
        className={`${c === active ? "pill-outline" : "pill"} capitalize`}
      >
        {c}
      </Link>
    ))}
  </nav>
);
