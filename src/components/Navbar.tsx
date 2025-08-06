import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<NavItem["category"]>("home");

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath.startsWith("/projects")) {
      setActiveCategory("projects");
    } else if (currentPath.startsWith("/blog")) {
      setActiveCategory("blog");
    } else {
      setActiveCategory("home");
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 backdrop-blur-sm shadow-lg" : "py-6"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-8">
        <Link to="/#" target="_top" className="font-semibold">
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
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              target="_top"
              className={`transition-colors duration-300 capitalize text-sm font-medium ${
                activeCategory === item.category
                  ? "white-button"
                  : "transparent-button border"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-r-[1.5px] border-white text-sm font-medium"></div>
          <a
            href="mailto:jumuad.precious@gmail.com"
            target="_blank"
            className="white-button"
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
        <div className="md:hidden flex items-center justify-center z-40 p-12">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                target="_top"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className={`w-48 transition-colors duration-300 capitalize text-sm font-medium ${
                  activeCategory === item.category
                    ? "white-button"
                    : "transparent-button border"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-b-[1.5px] border-white"></div>
            <a
              href="mailto:jumuad.precious@gmail.com"
              target="_blank"
              className="white-button"
            >
              hello@hope
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
