import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { projects } from "../data/projects";
import { blogPosts } from "../data/blogPosts";
import { WorkExperience } from "../components/WorkExperience";
import { PhilippineClock } from "../components/PhilippineClock";
import { PillTabs } from "../components/PillTabs";
import { RingGauge } from "../components/RingGauge";
import { SkillsCard } from "../components/SkillsCard";

// Blog goal: 1 blog at age 21, 2 at 22, 3 at 23 … 10 at 30, so 1 + 2 + … + 10 = 55.
const GOAL_FIRST_AGE = 21;
const GOAL_LAST_AGE = 30;
const GOAL_YEARS = GOAL_LAST_AGE - GOAL_FIRST_AGE + 1;
const BLOG_GOAL = (GOAL_YEARS * (GOAL_YEARS + 1)) / 2;

const Home = () => {
  const featured = projects.slice(0, 3);
  const recent = projects.slice(0, 3);
  const blogPercent = Math.round((blogPosts.length / BLOG_GOAL) * 100);

  return (
    <div className="flex flex-col gap-5 p-5 sm:p-8 lg:flex-1">
      <header className="animate-fade-in space-y-4 text-left">
        <h1 className="text-2xl font-medium sm:text-3xl">Featured</h1>
        <PillTabs active="all" />
      </header>

      {/* Two rows of two. Cards in a row stretch to the same height; the Skills card fills its cell. */}
      <div className="grid grid-cols-[minmax(0,1fr)] gap-5 lg:flex-1 lg:grid-cols-2">
        <section
          aria-label="Recent Projects"
          className="glass-card animate-fade-in-delay-1 space-y-2 p-4 opacity-0"
        >
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm text-cream/70">Recent Projects</h2>
            <Link
              to="/projects"
              aria-label="See all projects"
              title="See all projects"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-110"
            >
              <LuArrowRight size={20} aria-hidden />
            </Link>
          </div>
          {recent.map((p) => (
            <Link
              key={p.url}
              to={p.url}
              className="flex min-w-0 items-center gap-3 rounded-2xl bg-black/20 p-2.5 text-left transition-colors hover:bg-black/35"
            >
              <img
                src={p.image}
                alt=""
                className="h-14 w-16 shrink-0 rounded-xl object-cover"
              />
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">
                  {p.title}
                </span>
                <span className="block truncate text-xs text-cream/70">
                  {p.tags.slice(0, 3).join(" · ")}
                </span>
              </span>
            </Link>
          ))}
        </section>

        <div className="flex animate-fade-in-delay-2 flex-col gap-5 opacity-0">
          <section
            aria-label="At a glance"
            className="glass-card flex flex-wrap items-center justify-around gap-x-4 gap-y-3 p-4"
          >
            <PhilippineClock />
            <span aria-hidden className="hidden h-20 w-px bg-line sm:block" />
            <RingGauge
              value={projects.length}
              max={projects.length}
              label="Projects"
            />
            <RingGauge
              value={blogPosts.length}
              max={BLOG_GOAL}
              label="Blog posts"
              tipAlign="right"
              tip={
                <>
                  <strong className="block font-medium text-accent">
                    Goal: {BLOG_GOAL} blogs by age {GOAL_LAST_AGE}
                  </strong>
                  <span className="block text-cream/80">
                    1 blog at {GOAL_FIRST_AGE}, 2 at {GOAL_FIRST_AGE + 1}, 3 at{" "}
                    {GOAL_FIRST_AGE + 2} … {GOAL_YEARS} at {GOAL_LAST_AGE}. That
                    adds up to {BLOG_GOAL}.
                  </span>
                  <span className="block font-medium">
                    {blogPosts.length} of {BLOG_GOAL} so far = {blogPercent}%
                  </span>
                </>
              }
            />
          </section>

          <SkillsCard />
        </div>

        <div className="flex animate-fade-in-delay-3 flex-col opacity-0">
          <WorkExperience />
        </div>

        {/* Bare photo cards, no container: they stretch to the height of Work Experience beside them. */}
        <section
          aria-label="Featured projects"
          className="grid animate-fade-in-delay-4 grid-cols-[repeat(3,minmax(0,1fr))] gap-3 opacity-0"
        >
          {featured.map((p) => (
            <Link
              key={p.url}
              to={p.url}
              className="group relative aspect-[3/4] min-w-0 overflow-hidden rounded-3xl border border-line lg:aspect-auto lg:min-h-32"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 text-left text-xs font-medium leading-tight">
                {p.title}
              </span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
