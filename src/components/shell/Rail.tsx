import { NavLink } from "react-router-dom";
import {
  MdOutlineArticle,
  MdOutlineHome,
  MdOutlinePersonOutline,
  MdOutlineWorkOutline,
} from "react-icons/md";

const items = [
  { to: "/", label: "Home", Icon: MdOutlineHome, end: true },
  { to: "/about", label: "About", Icon: MdOutlinePersonOutline, end: false },
  { to: "/projects", label: "Projects", Icon: MdOutlineWorkOutline, end: false },
  { to: "/blog", label: "Blog", Icon: MdOutlineArticle, end: false },
];

export const Rail = () => (
  <nav
    aria-label="Main"
    className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-3 rounded-full border border-white/70 bg-white/70 p-2 shadow-lg backdrop-blur-md lg:static lg:translate-x-0 lg:flex-col lg:self-center lg:border-0 lg:bg-transparent lg:p-0 lg:pl-6 lg:shadow-none lg:backdrop-blur-none"
  >
    {items.map(({ to, label, Icon, end }) => (
      <NavLink
        key={to}
        to={to}
        end={end}
        aria-label={label}
        title={label}
        className={({ isActive }) =>
          `flex h-12 w-12 items-center justify-center rounded-full text-ink shadow-sm transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
            isActive ? "bg-accent" : "bg-white"
          }`
        }
      >
        <Icon size={22} />
      </NavLink>
    ))}
  </nav>
);
