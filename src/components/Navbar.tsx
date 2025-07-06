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
    // Set active category based on pathname
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
      className={`w-full bg-transparent fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 backdrop-blur-sm shadow-lg" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/#" className="font-semibold">
          <span className="relative z-10">
            <span className="font-noto text-glow text-base">
              Precious{" "}
              <span className="absolute top-0 -ml-1 pinyon-script text-3xl">
                Hope
              </span>
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-4 py-1 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === item.category
                  ? "white-button text-sm"
                  : "transparent-button border text-sm"
              }`}
              onClick={() => setActiveCategory(item.category)}
            >
              {item.name}
            </a>
          ))}
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/50 p-6 z-40">
          <div className="flex flex-col space-y-6 text-base font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveCategory(item.category);
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-1 rounded-full transition-colors duration-300 capitalize ${
                  activeCategory === item.category
                    ? "text-[var(--yellow-accent)] text-glow"
                    : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
