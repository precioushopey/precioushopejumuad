import { NavLink, useLocation } from "react-router-dom";
import {
  MdOutlineArticle,
  MdOutlineHome,
  MdOutlinePersonOutline,
  MdOutlineWorkOutline,
} from "react-icons/md";

const items: {
  to: string;
  label: string;
  Icon: typeof MdOutlineHome;
  end: boolean;
  alsoMatch?: string;
}[] = [
  { to: "/", label: "Home", Icon: MdOutlineHome, end: true },
  { to: "/about", label: "About", Icon: MdOutlinePersonOutline, end: false },
  {
    to: "/projects",
    label: "Projects",
    Icon: MdOutlineWorkOutline,
    end: false,
  },
  // Posts live under /blogs/<slug>, the listing under /blog.
  {
    to: "/blog",
    label: "Blog",
    Icon: MdOutlineArticle,
    end: false,
    alsoMatch: "/blogs/",
  },
];

export const Rail = () => {
  const { pathname } = useLocation();
  return (
    <nav
      aria-label="Main"
      className="sticky bottom-4 z-40 order-last mx-auto mb-4 flex w-fit gap-3 rounded-full border border-white/70 bg-white/80 p-2 shadow-lg backdrop-blur-md lg:static lg:order-none lg:mx-0 lg:mb-0 lg:flex-col lg:self-center lg:border-0 lg:bg-transparent lg:p-0 lg:pl-6 lg:shadow-none lg:backdrop-blur-none"
    >
      {items.map(({ to, label, Icon, end, alsoMatch }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          aria-label={label}
          title={label}
          className={({ isActive }) =>
            `flex h-12 w-12 items-center justify-center rounded-full text-ink shadow-sm transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
              isActive || (alsoMatch && pathname.startsWith(alsoMatch))
                ? "bg-accent"
                : "bg-white"
            }`
          }
        >
          <Icon size={22} />
        </NavLink>
      ))}
    </nav>
  );
};
