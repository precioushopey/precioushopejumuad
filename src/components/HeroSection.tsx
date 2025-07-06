import { MdOutlineExpandMore } from "react-icons/md";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative mx-auto max-w-5xl flex flex-col items-center justify-center space-y-2 pt-20 px-8"
    >
      <div className="ml-4">
        <img
          src="/assets/images/hero.png"
          alt="Precious Hope T. Jumuad"
          width={500}
          className="opacity-0 animate-fade-in"
        />
      </div>

      <div className="absolute left-8 top-1/2 sm:left-1/3 backdrop-blur-sm rounded-full border tracking-widest text-glow animate-fade-in-delay-1 py-1 px-3">
        ENGINEER • DESIGNER
      </div>

      <div className="max-w-lg mx-auto opacity-0 animate-fade-in-delay-2">
        Precious Hope Jumuad is a computer engineering graduate who is
        passionate in front-end development, UI/UX design, and multimedia arts
        to create practical and user-focused digital solutions.
      </div>

      <div className="flex justify-center gap-4 pt-4 animate-fade-in-delay-3">
        <a href="/projects" className="white-button">
          View My Work
        </a>
        <a href="/blog" className="transparent-button border">
          Read My Blog
        </a>
      </div>

      <div className="place-items-center pt-4 animate-bounce">
        <MdOutlineExpandMore size={24} className="text-white" />
      </div>
    </section>
  );
};
