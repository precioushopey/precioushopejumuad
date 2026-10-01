import { Link } from "react-router-dom";
import {
  LuAward,
  LuBriefcase,
  LuExternalLink,
  LuGraduationCap,
  LuStickyNote,
} from "react-icons/lu";
import { SkillsSection } from "../components/SkillsSection";
import { FolderGroup, FolderSection } from "../components/FolderGroup";
import { WindowBar } from "../components/WindowBar";
import { AccordionCard } from "../components/AccordionCard";
import { ProcessTable } from "../components/ProcessTable";
import { certifications } from "../data/about";
import { skills } from "../data/skills";
import { useAboutData } from "../hooks/use-about-data";
import { useDisclosure } from "../hooks/use-disclosure";
import { siteLink } from "../lib/site-link";
import { thumb } from "../lib/thumb";

const cardIcons = {
  job: <LuBriefcase size={14} />,
  school: <LuGraduationCap size={14} />,
};

const About = () => {
  const folders = useAboutData();
  const bio = useDisclosure();

  return (
    <div className="flex flex-col lg:flex-1 gap-3 lg:gap-6 p-0 lg:p-6">
      <div className="tracking-normal leading-6 text-left space-y-6">
        <section className="flex flex-col items-center gap-6 animate-fade-in-delay-1">
          <h1 className="font-medium text-xl sm:text-2xl">About</h1>

          <figure className="relative w-full max-w-2xl">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -inset-y-[5%] bg-[radial-gradient(ellipse_at_58%_55%,rgb(255_201_60/0.5),rgb(255_201_60/0.16)_40%,transparent_70%)] blur-2xl"
            />
            <img
              width={1420}
              height={1080}
              src="/assets/images/profile/hero.png"
              alt="Precious Hope Jumuad in her graduation gown"
              className="relative h-auto w-full"
            />
          </figure>
          <article className="glass-card w-full overflow-hidden bg-cream/[0.07] text-justify">
            <WindowBar icon={<LuStickyNote size={14} />} title="About me" />
            <div className="bg-[repeating-linear-gradient(transparent_0_23px,rgb(245_234_214/0.08)_23px_24px)] bg-[position:0_1.25rem] px-6 pt-6 pb-6">
              <p>
                I’m <strong>Precious Hope T. Jumuad</strong>, a Design Engineer
                (Product/UI/UX Designer and Front-End Developer) who believes
                that design and technology should make life easier, more
                beautiful, and more meaningful. My work sits at the intersection
                of product thinking, user experience, visual design, and
                front-end development, turning ideas and complex problems into
                digital experiences that feel intuitive and purposeful.
              </p>
              {/* The rest of the bio is hidden until "Read more". Every gap is a multiple of the
                  24px line height so the ruled lines stay under the text. While closed it is
                  invisible and inert, so it can't be tabbed into or read out. */}
              <div
                id={bio.panelId}
                inert={!bio.open}
                className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none ${
                  bio.open
                    ? "visible grid-rows-[1fr]"
                    : "invisible grid-rows-[0fr]"
                }`}
              >
                <div
                  className={`min-h-0 overflow-hidden transition-opacity duration-300 motion-reduce:transition-none ${
                    bio.open ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="space-y-6 pt-6">
                    <p>
                      I work across startups and digital projects, designing and
                      building web and mobile products, SaaS platforms, design
                      systems, and interactive prototypes. I enjoy taking
                      products from the early stages of an idea (understanding
                      the problem, defining requirements, mapping user flows,
                      and exploring solutions) to creating working interfaces
                      that can be tested, refined, and brought closer to
                      production. I work primarily with Figma, React,
                      TypeScript, Tailwind, and AI-powered tools to move quickly
                      without losing sight of thoughtful design.
                    </p>
                    <p>
                      As a Design Engineer, I care about the space between
                      design and development. My workflow combines UX research
                      and analysis, product requirements, rapid prototyping,
                      reusable components, responsive behavior, accessibility,
                      technical feasibility, documentation, and developer
                      handoff. I believe design shouldn’t stop at static
                      screens; sometimes the best way to communicate an idea is
                      to make it real, interactive, and something people can
                      experience.
                    </p>
                    <p>
                      I’m always curious about better ways to design, build, and
                      solve problems, especially where creativity and technology
                      meet. I want to work with people who value thoughtful
                      design, collaboration, experimentation, and purposeful
                      products. If you’re building something interesting, I’d
                      love to connect. You can explore my work{" "}
                      <Link to="/projects">
                        <u>here</u>
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                aria-expanded={bio.open}
                aria-controls={bio.panelId}
                onClick={bio.toggle}
                className="mt-6 block text-left leading-6 text-accent underline underline-offset-4 transition-colors hover:text-cream"
              >
                {bio.open ? "Show less" : "Read more"}
              </button>
            </div>
          </article>
        </section>

        <FolderGroup>
          {folders.map((folder) => (
            <FolderSection
              key={folder.label}
              label={folder.label}
              count={folder.cards.length}
              peek={folder.peek}
            >
              <section className="flex flex-col gap-3 lg:gap-6">
                {folder.cards.map((card) => (
                  <AccordionCard
                    key={card.key}
                    icon={cardIcons[card.kind]}
                    link={siteLink(card.title, card.site)}
                    title={card.title}
                    summary={
                      <ProcessTable rows={card.rows} labels={card.labels} />
                    }
                  >
                    <div
                      className={`flex flex-col p-6 ${card.timeline ? "gap-6" : "gap-3"}`}
                    >
                      <div className="flex flex-col sm:flex-row gap-6">
                        <figure className="w-full md:w-1/8 text-center">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={thumb(card.image.src)}
                            alt={card.image.alt}
                            className={`w-full aspect-[1/1] rounded-4xl border object-cover ${card.image.className ?? ""}`}
                          />
                        </figure>
                        <ul className="w-full md:w-7/8">
                          <li className="text-base font-semibold">
                            <u>{card.heading}</u>
                          </li>
                          {card.lines.map((line) => (
                            <li
                              key={line.text}
                              className={
                                line.bold ? "font-semibold" : undefined
                              }
                            >
                              {line.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {card.description && (
                        <p className="text-justify">{card.description}</p>
                      )}
                      {card.bullets && (
                        <ul className="ml-6 list-disc">
                          {card.bullets.map((task, idx) => (
                            <li key={idx}>{task}</li>
                          ))}
                        </ul>
                      )}
                      {card.timeline && (
                        <ol className="ml-2 space-y-6 border-l border-line pl-6">
                          {card.timeline.map((role) => (
                            <li key={role.key} className="relative">
                              <span
                                aria-hidden
                                className="absolute top-1 -left-[32.5px] h-4 w-4 rounded-full bg-cream/50"
                              />
                              <p className="text-base font-semibold">
                                {role.title}
                              </p>
                              {role.type && <p>{role.type}</p>}
                              <p>{role.period}</p>
                              <ul className="mt-3 ml-6 list-disc">
                                {role.bullets.map((task, idx) => (
                                  <li key={idx}>{task}</li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  </AccordionCard>
                ))}
              </section>
            </FolderSection>
          ))}

          <FolderSection
            label="Certifications"
            count={certifications.length}
            peek="/assets/images/certifications/cisco.jfif"
          >
            <section
              aria-label="Certifications"
              className="glass-card overflow-hidden"
            >
              <WindowBar
                icon={<LuAward size={14} />}
                title={`Certifications (${certifications.length} items)`}
              />
              <div
                aria-hidden
                className="hidden grid-cols-[2rem_minmax(0,2.2fr)_minmax(0,1fr)_6rem_1rem] gap-3 border-b border-line/40 px-6 py-2 text-left text-xs text-cream/50 md:grid"
              >
                <span />
                <span>Name</span>
                <span>Issuer</span>
                <span>Issued</span>
                <span />
              </div>
              <ul>
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="border-b border-line/30 last:border-b-0"
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-3 px-6 py-3 text-left hover:bg-cream/5 md:grid-cols-[2rem_minmax(0,2.2fr)_minmax(0,1fr)_6rem_1rem]"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        src={thumb(cert.imgSrc)}
                        alt=""
                        className="h-8 w-8 rounded-lg border bg-white object-cover"
                      />
                      <span className="min-w-0">
                        <span className="block truncate font-medium">
                          {cert.certificate}
                        </span>
                        <span className="block truncate text-xs text-cream/60 md:hidden">
                          {cert.organization} · {cert.issuedOn}
                        </span>
                      </span>
                      <span className="hidden truncate text-cream/70 md:block">
                        {cert.organization}
                      </span>
                      <span className="hidden text-cream/70 md:block">
                        {cert.issuedOn}
                      </span>
                      <LuExternalLink
                        aria-hidden
                        size={14}
                        className="text-cream/50"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </FolderSection>
          <FolderSection
            label="Skills"
            count={skills.length}
            peek="/assets/images/skills/figma.png"
          >
            <SkillsSection />
          </FolderSection>
        </FolderGroup>
      </div>
    </div>
  );
};

export default About;
