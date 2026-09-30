import { Link } from "react-router-dom";
import { categories, type Category } from "../data/projects";

export const PillTabs = ({
  active,
  markCurrent = false,
}: {
  active?: Category;
  markCurrent?: boolean;
}) => (
  <nav
    aria-label="Project categories"
    className="flex flex-wrap justify-center gap-3 lg:justify-start"
  >
    {categories.map((c) => (
      <Link
        key={c}
        to={c === "all" ? "/projects" : `/projects?category=${c}`}
        aria-current={markCurrent && c === active ? "page" : undefined}
        className={`${c === active ? "pill-outline" : "pill"} capitalize`}
      >
        {c}
      </Link>
    ))}
  </nav>
);
