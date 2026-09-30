import { Link, NavLink, useLocation } from "react-router-dom";
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
      className="sticky bottom-4 z-40 mx-auto flex w-fit gap-3 rounded-full border border-line bg-black/50 p-2 shadow-lg backdrop-blur-md lg:absolute lg:bottom-auto lg:left-10 lg:top-[calc(50%+2.5rem)] lg:mx-0 lg:-translate-y-1/2 lg:flex-col lg:gap-4 lg:p-3"
    >
      {items.map(({ to, label, Icon, end, alsoMatch }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          aria-label={label}
          title={label}
          className={({ isActive }) => {
            const on = isActive || (alsoMatch && pathname.startsWith(alsoMatch));
            return `relative flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              on
                ? "bg-accent text-ink lg:before:absolute lg:before:-left-[1.05rem] lg:before:h-7 lg:before:w-1 lg:before:rounded-full lg:before:bg-accent lg:before:content-['']"
                : "text-cream hover:bg-cream/15"
            }`;
          }}
        >
          <Icon size={22} />
        </NavLink>
      ))}
      <Link
        to="/about"
        aria-label="About me"
        className="mt-2 hidden rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:block"
      >
        <img
          src="/assets/images/profile.jpg"
          alt=""
          className="h-11 w-11 rounded-full border border-line object-cover"
        />
      </Link>
    </nav>
  );
};
