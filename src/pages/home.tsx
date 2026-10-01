import { Link } from "react-router-dom";
import { LuActivity, LuBriefcase, LuFolderOpen } from "react-icons/lu";
import { WindowBar } from "../components/WindowBar";
import { ProfileCard } from "../components/ProfileCard";
import { ContactCard } from "../components/ContactCard";
import { PillTabs } from "../components/PillTabs";
import { SkillsCard } from "../components/SkillsCard";
import { ListRow } from "../components/ListRow";
import { AnalogClock } from "../components/AnalogClock";
import {
  featuredProjects,
  recentProjects,
  workHighlights,
} from "../data/home";
import { useHomeStats } from "../hooks/use-home-stats";
import { usePhilippineClock } from "../hooks/use-philippine-clock";

const Home = () => {
  const clock = usePhilippineClock();
  const stats = useHomeStats();

  return (
    <div className="flex flex-col lg:flex-1 gap-3 lg:gap-6 p-0 lg:p-6">
      {/* Phones and tablets: the profile card leads the page and the message form closes it. From lg
          up they live in the right-hand column instead. */}
      <div className="lg:hidden">
        <ProfileCard />
      </div>

      <header className="animate-fade-in space-y-3 text-center max-lg:sr-only lg:text-left">
        <h1 className="font-medium text-xl sm:text-2xl">Featured</h1>
        <PillTabs active="all" />
      </header>

      {/* Two rows of two. Cards in a row stretch to the same height; the Skills card fills its cell. */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 lg:flex-1">
        <section
          aria-label="Recent Projects"
          className="glass-card animate-fade-in-delay-1 opacity-0"
        >
          <WindowBar
            icon={<LuFolderOpen size={14} />}
            title="Recent Projects"
            to="/projects"
            toLabel="See all projects"
          />
          <div className="space-y-3 p-3">
            {recentProjects.map((p) => (
              <ListRow
                key={p.url}
                to={p.url}
                image={p.image}
                title={p.title}
                detail={p.detail}
              />
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-3 lg:gap-6 opacity-0 max-lg:order-first animate-fade-in-delay-2">
          <section aria-label="At a glance" className="glass-card overflow-hidden">
            <WindowBar icon={<LuActivity size={14} />} title="At a glance" />
            <div className="flex flex-row items-center justify-around gap-3 p-3">
              <div className="flex flex-col shrink-0 items-center gap-1 text-cream">
                <AnalogClock
                  hours={clock.hours}
                  minutes={clock.minutes}
                  seconds={clock.seconds}
                  className="h-20 w-20"
                />
                <p className="text-[10px] text-cream/70">
                  <time dateTime={clock.iso}>{clock.label}</time> PH Time
                </p>
              </div>
              <span aria-hidden className="h-20 w-px bg-line" />
              <div className="flex items-center gap-3">
                {stats.map(({ shown, label }) => (
                  <div
                    key={label}
                    className="flex flex-col size-24 shrink-0 items-center justify-center gap-1 rounded-2xl bg-accent/10"
                  >
                    <span className="font-medium text-4xl text-accent">
                      {shown}
                    </span>
                    <span className="whitespace-nowrap text-xs text-cream/70">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <SkillsCard />
        </div>

        <section
          aria-label="Work experience"
          className="glass-card animate-fade-in-delay-3 opacity-0"
        >
          <WindowBar
            icon={<LuBriefcase size={14} />}
            title="Work Experience"
            to="/about"
            toLabel="See my full experience"
          />
          <div className="space-y-3 p-3">
            {workHighlights.map((w) => (
              <ListRow
                key={w.title}
                image={w.logo}
                title={w.title}
                detail={w.detail}
                tile={w.tile}
                contain
              />
            ))}
          </div>
        </section>

        {/* Bare photo cards, no container: a column that stretches to the height of the row. */}
        <section
          aria-label="Featured projects"
          className="grid grid-cols-3 gap-3 opacity-0 animate-fade-in-delay-4"
        >
          {featuredProjects.map((p) => (
            <Link
              key={p.url}
              to={p.url}
              className="group relative min-h-32 min-w-0 flex-1 max-lg:aspect-video overflow-hidden rounded-3xl border border-line"
            >
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-x-0 bottom-0 flex h-20 items-end bg-gradient-to-t from-black/80 to-transparent p-3 text-left text-xs font-medium leading-tight">
                {p.title}
              </span>
            </Link>
          ))}
        </section>
      </div>

      <div className="lg:hidden">
        <ContactCard />
      </div>
    </div>
  );
};

export default Home;
