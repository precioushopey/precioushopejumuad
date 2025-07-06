import { MdOutlineExpandMore } from "react-icons/md";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center pt-20 px-8"
    >
      <div className="mx-auto max-w-5xl space-y-2">
        <div className="ml-4">
          <img
            src="/assets/images/hero.png"
            alt="Precious Hope T. Jumuad"
            width={500}
            className="opacity-0 animate-fade-in"
          />
        </div>

        <div className="absolute left-8 top-1/2 sm:left-1/3 backdrop-blur-sm rounded-full border tracking-widest text-glow py-1 px-3">
          ENGINEER • DESIGNER
        </div>

        <div className="max-w-lg mx-auto opacity-0 animate-fade-in-delay-3">
          Precious Hope Jumuad is a <strong>computer engineering</strong>{" "}
          graduate who is passionate in front-end development, UI/UX design, and
          multimedia arts to create practical and user-focused digital
          solutions.
        </div>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" target="_blank" className="white-button">
            View My Work
          </a>
        </div>

        <div className="pt-6 place-items-center animate-bounce">
          <MdOutlineExpandMore size={20} className="text-white" />
        </div>
      </div>
    </section>
  );
};
