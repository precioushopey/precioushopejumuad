import { Link, NavLink, useLocation } from "react-router-dom";
import {
  LuBatteryFull,
  LuBriefcase,
  LuHouse,
  LuNewspaper,
  LuUser,
  LuWifi,
} from "react-icons/lu";
import { TrayClock } from "./TrayClock";

const items: {
  to: string;
  label: string;
  Icon: typeof LuHouse;
  end: boolean;
  alsoMatch?: string;
}[] = [
  { to: "/", label: "Home", Icon: LuHouse, end: true },
  { to: "/about", label: "About", Icon: LuUser, end: false },
  { to: "/projects", label: "Work", Icon: LuBriefcase, end: false },
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
  // Same rule NavLink uses, plus the Blog item also covering /blogs/<slug>. It marks the active
  // item with data-active, which the phone nav's gliding pill (see index.css) anchors to.
  const isOn = (to: string, end: boolean, alsoMatch?: string) => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const active = end ? path === to : path === to || path.startsWith(`${to}/`);
    return active || (alsoMatch ? pathname.startsWith(alsoMatch) : false);
  };
  return (
    <nav
      aria-label="Main"
      className="sticky bottom-4 z-40 mx-auto flex w-full items-center gap-3 rounded-full border border-line bg-black/50 p-2 shadow-lg backdrop-blur-md lg:absolute lg:bottom-auto lg:left-0 lg:top-1/2 lg:z-10 lg:mx-0 lg:w-24 lg:-translate-y-1/2 lg:h-[28rem] lg:max-h-[calc(100%-5rem)] lg:flex-col lg:justify-between lg:rounded-l-[2rem] lg:rounded-r-none lg:border-cream/20 lg:bg-cream/15 lg:p-6 lg:pr-12 lg:shadow-none lg:backdrop-blur-xl"
    >
      {/* On phones the icons spread across the whole bar; the active one expands to show its title. */}
      <div className="flex flex-1 items-center justify-center max-lg:gap-2 min-[400px]:max-lg:gap-4 lg:flex-none lg:flex-col lg:justify-start lg:gap-2 2xl:gap-4">
        {items.map(({ to, label, Icon, end, alsoMatch }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            aria-label={label}
            title={label}
            data-active={isOn(to, end, alsoMatch) ? "true" : undefined}
            className={({ isActive }) => {
              const on =
                isActive || (alsoMatch && pathname.startsWith(alsoMatch));
              return `relative flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                on
                  ? "bg-accent text-ink max-lg:w-auto max-lg:gap-2 max-lg:px-3 min-[360px]:max-lg:px-4 lg:flex-col lg:gap-1.5 lg:bg-transparent lg:text-accent lg:before:absolute lg:before:-left-[0.375rem] lg:before:h-8 lg:before:w-1.5 lg:before:rounded-full lg:before:bg-accent lg:before:content-['']"
                  : "text-cream hover:bg-cream/15"
              }`;
            }}
          >
            {({ isActive }) => {
              const on =
                isActive || (alsoMatch && pathname.startsWith(alsoMatch));
              // Lucide has no filled icons: the active page gets a heavier line instead.
              return (
                <>
                  <Icon size={24} strokeWidth={on ? 2.6 : 2} />
                  {on && (
                    <span className="nav-label text-sm font-medium lg:text-[10px] lg:leading-none">
                      {label}
                    </span>
                  )}
                </>
              );
            }}
          </NavLink>
        ))}
      </div>
      {/* Phones: the taskbar's tray (wifi and battery from 380px, plus the clock from 440px). */}
      <div className="hidden items-center gap-1.5 pr-2 text-cream/70 min-[380px]:max-lg:flex">
        <LuWifi size={13} aria-hidden />
        <LuBatteryFull size={15} aria-hidden />
        <TrayClock className="hidden min-[440px]:block" />
      </div>
      {/* Desktop: the dock's tray, with the avatar and the Philippine time under it. */}
      <div className="hidden shrink-0 flex-col items-center gap-1.5 lg:flex">
        <Link
          to="/about"
          aria-label="About me"
          className="h-11 w-11 shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <img
            src="/assets/images/precious.png"
            alt=""
            className="h-11 w-11 rounded-full border border-line bg-white object-cover"
          />
        </Link>
        <TrayClock className="w-11" />
      </div>
    </nav>
  );
};
