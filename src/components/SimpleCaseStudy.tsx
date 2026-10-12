import { LuExternalLink, LuInfo, LuListChecks, LuSquare } from "react-icons/lu";
import Carousel from "./Carousel";
import { FolderGroup, FolderSection } from "./FolderGroup";
import { ProjectLayout } from "./ProjectLayout";
import {
  NoteWindow,
  ProcessStrip,
  Section,
  UxQualities,
  Window,
  cardText,
  noteText,
} from "./CaseStudy";

type Link = { label: string; href: string };
type Phase = { status: "Done" | "Partly" | "Planned" | "To add"; text: string };

// The content of one of the older, shorter case studies. Each project file only holds its own text
// and links; this component lays them out in the same four folders as the longer case studies.
// There is no entry for work the old page never described (personas, journey maps, role, dates),
// so nothing here is made up: a stage with nothing to show is left out, or marked "To add".
export type SimpleCaseStudyData = {
  /** Pictures at the top of the page. */
  hero: { images: string[]; alt: string };
  /** The old "Project Overview" paragraph. */
  about: string;
  /** Rows of the Properties box; only facts the old page states. */
  facts: { label: string; value: string }[];
  /** Buttons under the Properties box (live demo, manual, files). */
  links?: Link[];
  /** From the old "Define" step. */
  problem: string;
  /** What the overview says the project set out to do, kept close to its own words. */
  goal: string;
  /** The old "The Challenge" paragraph. */
  challenge: string;
  /** One line per phase; the full text of each lives in the folders below. */
  process: {
    empathize: Phase;
    define: Phase;
    ideate: Phase;
    prototype: Phase;
    test: Phase;
  };
  /** The old "Empathize" paragraph. */
  research: string;
  /** The old "Ideate" paragraph. */
  ideation: string;
  /** The old "Prototype" paragraph, with the pictures and link it came with. */
  prototype: {
    text: string;
    images?: string[];
    alt?: string;
    link?: Link;
  };
  /** The old "Test" paragraph. */
  testing: string;
  /** The Good UX Check: only what is already on the page, with thin evidence said plainly. */
  quality: {
    usable: string;
    equitable: string;
    enjoyable: string;
    useful: string;
  };
  /** The old "Result" paragraph. */
  result: string;
  /** The old "The Impact" paragraph. */
  impact: string;
  /** Buttons that closed the old "The Impact" section. */
  closingLinks?: Link[];
  /** Only where the old page says what comes next. */
  nextSteps?: string[];
};

const LinkButton = ({ link, primary }: { link: Link; primary: boolean }) => (
  <a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-2 ${primary ? "white-button" : "transparent-button border"}`}
  >
    {link.label}
    <LuExternalLink size={16} aria-hidden />
  </a>
);

const LinkRow = ({ links }: { links: Link[] }) => (
  <div className="flex flex-col justify-center gap-6 sm:flex-row">
    {links.map((link, index) => (
      <LinkButton
        key={link.href + link.label}
        link={link}
        primary={index === 0}
      />
    ))}
  </div>
);

export const SimpleCaseStudy = ({ data }: { data: SimpleCaseStudyData }) => {
  const {
    hero,
    about,
    facts,
    links = [],
    problem,
    goal,
    challenge,
    process,
    research,
    ideation,
    prototype,
    testing,
    quality,
    result,
    impact,
    closingLinks = [],
    nextSteps = [],
  } = data;

  const pool = [...hero.images, ...(prototype.images ?? [])];
  const peek = (index: number) => pool[index % pool.length];

  const parts = [
    {
      number: 1,
      title: "Project overview",
      peek: peek(0),
      topics: [
        { id: "problem-and-goal", label: "The problem and the goal" },
        { id: "process", label: "Design process" },
      ],
    },
    {
      number: 2,
      title: "Understanding the user",
      peek: peek(1),
      topics: [{ id: "user-research", label: "User research" }],
    },
    {
      number: 3,
      title: "Design",
      peek: peek(2),
      topics: [
        { id: "ideation", label: "Ideation" },
        { id: "prototype", label: "Prototype" },
        { id: "testing", label: "Testing" },
      ],
    },
    {
      number: 4,
      title: "Going forward",
      peek: peek(3),
      topics: [
        { id: "ux-qualities", label: "Good UX check" },
        { id: "takeaways", label: "Takeaways" },
        ...(nextSteps.length > 0
          ? [{ id: "next-steps", label: "Next steps" }]
          : []),
      ],
    },
  ];

  return (
    <ProjectLayout>
      <div className="space-y-15 pt-6">
        <Section id="overview" level={2} title="Project Overview" hideTitle>
          <Carousel images={hero.images} alt={hero.alt} />
          <NoteWindow title="About this project">
            <p className={noteText}>{about}</p>
          </NoteWindow>
          <Window icon={<LuInfo size={16} />} title="Properties">
            <dl className="divide-y divide-line/40 text-sm">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[8rem_1fr] sm:gap-3"
                >
                  <dt className="text-xs leading-6 text-cream/60">
                    {fact.label}
                  </dt>
                  <dd className="font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Window>
          {links.length > 0 && <LinkRow links={links} />}
        </Section>

        <FolderGroup>
          <FolderSection
            label={`${parts[0].number}. ${parts[0].title}`}
            count={parts[0].topics.length}
            peek={parts[0].peek}
          >
            <div className="space-y-6">
              <Section
                trail={parts[0].title}
                collapsible
                id="problem-and-goal"
                title="The Problem and the Goal"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <NoteWindow title="The problem" level={3}>
                    <p className={noteText}>{problem}</p>
                  </NoteWindow>
                  <NoteWindow title="The goal" level={3}>
                    <p className={noteText}>{goal}</p>
                  </NoteWindow>
                </div>
                <NoteWindow title="The challenge" level={3}>
                  <p className={noteText}>{challenge}</p>
                </NoteWindow>
              </Section>

              <ProcessStrip
                trail={parts[0].title}
                collapsible
                empathize={process.empathize}
                define={process.define}
                ideate={process.ideate}
                prototype={process.prototype}
                test={process.test}
              />
            </div>
          </FolderSection>

          <FolderSection
            label={`${parts[1].number}. ${parts[1].title}`}
            count={parts[1].topics.length}
            peek={parts[1].peek}
          >
            <div className="space-y-6">
              <Section
                collapsible
                id="user-research"
                title="User Research"
                trail={parts[1].title}
              >
                <NoteWindow title="Research notes">
                  <p className={noteText}>{research}</p>
                </NoteWindow>
              </Section>
            </div>
          </FolderSection>

          <FolderSection
            label={`${parts[2].number}. ${parts[2].title}`}
            count={parts[2].topics.length}
            peek={parts[2].peek}
          >
            <div className="space-y-6">
              <Section
                collapsible
                id="ideation"
                title="Ideation"
                trail={parts[2].title}
              >
                <NoteWindow title="Ideation notes">
                  <p className={noteText}>{ideation}</p>
                </NoteWindow>
              </Section>

              <Section
                collapsible
                id="prototype"
                title="Prototype"
                trail={parts[2].title}
              >
                <NoteWindow title="Prototype notes">
                  <p className={noteText}>{prototype.text}</p>
                </NoteWindow>
                {prototype.images && (
                  <Carousel
                    images={prototype.images}
                    alt={prototype.alt ?? hero.alt}
                  />
                )}
                {prototype.link && <LinkRow links={[prototype.link]} />}
              </Section>

              <Section
                collapsible
                id="testing"
                title="Testing"
                trail={parts[2].title}
              >
                <NoteWindow title="Testing notes">
                  <p className={noteText}>{testing}</p>
                </NoteWindow>
              </Section>
            </div>
          </FolderSection>

          <FolderSection
            label={`${parts[3].number}. ${parts[3].title}`}
            count={parts[3].topics.length}
            peek={parts[3].peek}
          >
            <div className="space-y-6">
              <UxQualities
                collapsible
                trail={parts[3].title}
                usable={quality.usable}
                equitable={quality.equitable}
                enjoyable={quality.enjoyable}
                useful={quality.useful}
              />

              <Section
                collapsible
                id="takeaways"
                title="Takeaways"
                trail={parts[3].title}
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <NoteWindow title="Result" level={4}>
                    <p className={noteText}>{result}</p>
                  </NoteWindow>
                  <NoteWindow title="Impact" level={4}>
                    <p className={noteText}>{impact}</p>
                  </NoteWindow>
                </div>
                {closingLinks.length > 0 && <LinkRow links={closingLinks} />}
              </Section>

              {nextSteps.length > 0 && (
                <Section
                  collapsible
                  id="next-steps"
                  title="Next Steps"
                  trail={parts[3].title}
                >
                  <Window
                    icon={<LuListChecks size={16} />}
                    title="To do"
                    footer={`${nextSteps.length} ${nextSteps.length === 1 ? "item" : "items"}`}
                  >
                    <ul className="divide-y divide-line/40">
                      {nextSteps.map((step) => (
                        <li
                          key={step}
                          className="flex items-start gap-3 px-6 py-3"
                        >
                          <LuSquare
                            size={16}
                            aria-hidden
                            className="mt-1 shrink-0 text-accent"
                          />
                          <p className={cardText}>{step}</p>
                        </li>
                      ))}
                    </ul>
                  </Window>
                </Section>
              )}
            </div>
          </FolderSection>
        </FolderGroup>
      </div>
    </ProjectLayout>
  );
};
