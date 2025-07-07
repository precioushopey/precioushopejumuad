import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineCancel } from "react-icons/md";

type NavItem = {
  name: string;
  href: string;
  category: "home" | "projects" | "blog";
};

const navItems: NavItem[] = [
  { name: "home", href: "/#", category: "home" },
  { name: "projects", href: "/projects", category: "projects" },
  { name: "blog", href: "/blog", category: "blog" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<NavItem["category"]>("home");

  useEffect(() => {
    const currentPath = window.location.pathname;

    const matchedNav = navItems.find((item) =>
      item.href === "/#" ? currentPath === "/" : item.href === currentPath
    );

    if (matchedNav) {
      setActiveCategory(matchedNav.category);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 animate-fade-in transition-all duration-300 ${
        isScrolled ? "py-4 backdrop-blur-sm shadow-lg" : "py-6"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-8">
        <Link to="/#" className="font-semibold">
          <span className="relative z-10">
            <span className="font-noto text-glow text-base">
              Precious{" "}
              <span className="absolute top-0 -ml-1 pinyon-script text-3xl">
                Hope
              </span>
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-1 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === item.category
                  ? "white-button text-sm"
                  : "transparent-button border text-sm"
              }`}
              onClick={() => setActiveCategory(item.category)}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-r-[1.5px] border-white"></div>
          <a
            href="mailto:jumuad.precious@gmail.com"
            target="_blank"
            className="white-button text-sm"
          >
            hello@hope
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden cursor-pointer z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <MdOutlineCancel size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden flex items-center justify-center z-40 p-12 animate-fade-in">
          <div className="flex flex-col space-y-4 text-base font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => {
                  setActiveCategory(item.category);
                  setIsMenuOpen(false);
                }}
                className={`w-48 px-4 py-2 rounded-full transition-colors duration-300 capitalize ${
                  activeCategory === item.category
                    ? "white-button text-sm"
                    : "transparent-button border text-sm"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-b-[1.5px] border-white"></div>
            <a
              href="mailto:jumuad.precious@gmail.com"
              target="_blank"
              className="white-button text-sm"
            >
              hello@hope
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
