import { Link, NavLink, useLocation } from "react-router-dom";
import { LuBriefcase, LuHouse, LuNewspaper, LuUser } from "react-icons/lu";

const items: {
  to: string;
  label: string;
  Icon: typeof LuHouse;
  end: boolean;
  alsoMatch?: string;
}[] = [
  { to: "/", label: "Home", Icon: LuHouse, end: true },
  { to: "/about", label: "About", Icon: LuUser, end: false },
  { to: "/projects", label: "Projects", Icon: LuBriefcase, end: false },
  // Posts live under /blogs/<slug>, the listing under /blog.
  {
    to: "/blog",
    label: "Blog",
    Icon: LuNewspaper,
    end: false,
    alsoMatch: "/blogs/",
  },
];

export const Rail = () => {
  const { pathname } = useLocation();
  return (
    <nav
      aria-label="Main"
      className="sticky bottom-4 z-40 mx-auto flex w-fit items-center gap-3 rounded-full border border-line bg-black/50 p-2 shadow-lg backdrop-blur-md lg:absolute lg:bottom-auto lg:left-0 lg:top-1/2 lg:z-10 lg:mx-0 lg:w-24 lg:-translate-y-1/2 lg:h-[28rem] lg:max-h-[calc(100%-5rem)] lg:flex-col lg:justify-between lg:rounded-l-[2rem] lg:rounded-r-none lg:border-cream/20 lg:bg-cream/15 lg:p-6 lg:pr-12 lg:shadow-none lg:backdrop-blur-xl"
    >
      <div className="flex gap-3 lg:flex-col lg:gap-2 2xl:gap-4">
        {items.map(({ to, label, Icon, end, alsoMatch }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            aria-label={label}
            title={label}
            className={({ isActive }) => {
              const on =
                isActive || (alsoMatch && pathname.startsWith(alsoMatch));
              return `relative flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                on
                  ? "bg-accent text-ink lg:bg-transparent lg:text-accent lg:before:absolute lg:before:-left-[0.375rem] lg:before:h-8 lg:before:w-1.5 lg:before:rounded-full lg:before:bg-accent lg:before:content-['']"
                  : "text-cream hover:bg-cream/15"
              }`;
            }}
          >
            {({ isActive }) => {
              const on =
                isActive || (alsoMatch && pathname.startsWith(alsoMatch));
              // Lucide has no filled icons: the active page gets a heavier line instead.
              return <Icon size={24} strokeWidth={on ? 2.6 : 2} />;
            }}
          </NavLink>
        ))}
      </div>
      <Link
        to="/about"
        aria-label="About me"
        className="hidden rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:block"
      >
        <img
          src="/assets/images/precious.png"
          alt=""
          className="h-11 w-11 rounded-full border border-line bg-white object-cover"
        />
      </Link>
    </nav>
  );
};
