import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { projects } from "../data/projects";
import { blogPosts } from "../data/blogPosts";

type BentoLinkProps = { to: string; label: string };

const BentoLink = ({ to, label }: BentoLinkProps) => (
  <Link
    to={to}
    className="mt-4 flex items-center justify-between rounded-full bg-white py-2 pl-6 pr-2 text-base font-medium shadow-sm transition-transform duration-300 hover:scale-[1.02] active:scale-95"
  >
    {label}
    <span className="arrow-button">
      <MdArrowOutward size={18} aria-hidden />
    </span>
  </Link>
);

const Stat = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-1 flex-col justify-center rounded-3xl bg-white/80 px-4 py-3 text-left">
    <span className="text-3xl font-medium leading-none">{value}</span>
    <span className="mt-1 text-xs text-ink/60">{label}</span>
  </div>
);

const Home = () => (
  <div className="grid min-h-[600px] grid-rows-[1fr_auto] gap-4 lg:h-full">
    <section aria-label="Introduction" className="relative min-h-[380px]">
      <svg
        aria-hidden
        viewBox="0 0 600 400"
        className="pointer-events-none absolute inset-0 h-full w-full text-accent/60"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="300" cy="220" r="120" />
        <circle cx="300" cy="220" r="170" />
        <circle cx="300" cy="220" r="220" />
        <circle cx="300" cy="220" r="270" />
      </svg>

      <div className="relative z-10 max-w-[16rem] animate-fade-in text-left sm:max-w-sm">
        <h1 className="font-display text-4xl leading-tight sm:text-6xl">
          Precious Hope
        </h1>
        <p className="mt-3 text-sm tracking-widest sm:text-base">
          COMPUTER ENGINEER · UI/UX DESIGNER
        </p>
      </div>

      <img
        src="/assets/images/hero.png"
        alt="Precious Hope T. Jumuad"
        className="absolute bottom-0 left-1/2 z-0 h-full max-h-[560px] -translate-x-1/2 object-contain object-bottom"
      />
    </section>

    <section
      aria-label="Explore"
      className="relative z-20 grid gap-4 lg:grid-cols-[1fr_minmax(0,22rem)_1fr]"
    >
      <div className="glass-card p-5 text-left">
        <p className="text-base">Explore my</p>
        <p className="font-display text-4xl sm:text-5xl">WORK</p>
        <BentoLink to="/projects" label="See projects" />
      </div>

      <div className="glass-card flex flex-col p-4 text-left">
        <p className="mb-2 px-1 text-base">At a glance</p>
        <div className="flex flex-1 gap-3">
          <Stat value={projects.length} label="Projects" />
          <Stat value={blogPosts.length} label="Blog posts" />
        </div>
      </div>

      <div className="glass-card p-5 text-left">
        <p className="text-base">Read my</p>
        <p className="font-display text-4xl sm:text-5xl">STORIES</p>
        <BentoLink to="/blog" label="Read blog" />
      </div>
    </section>
  </div>
);

export default Home;
