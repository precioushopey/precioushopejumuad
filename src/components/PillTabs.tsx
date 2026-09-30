import { Link } from "react-router-dom";
import { categories as projectCategories } from "../data/projects";

// Category pills that link to `<basePath>?category=<c>` ("all" links to the bare path). Defaults to
// the project categories; the Blog page passes its own.
export const PillTabs = ({
  active,
  markCurrent = false,
  categories = projectCategories,
  basePath = "/projects",
  label = "Project categories",
}: {
  active?: string;
  markCurrent?: boolean;
  categories?: readonly string[];
  basePath?: string;
  label?: string;
}) => (
  <nav
    aria-label={label}
    className="flex flex-wrap justify-center gap-3 lg:justify-start"
  >
    {categories.map((c) => (
      <Link
        key={c}
        to={c === "all" ? basePath : `${basePath}?category=${c}`}
        aria-current={markCurrent && c === active ? "page" : undefined}
        className={`${c === active ? "pill-outline" : "pill"} capitalize`}
      >
        {c}
      </Link>
    ))}
  </nav>
);
