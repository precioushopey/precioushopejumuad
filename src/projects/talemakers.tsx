import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { Navbar } from "../components/Navbar";
import { SparkleBackground } from "../components/SparkleBackground";
import { FiHeart, FiTarget } from "react-icons/fi";
import {
  MdLightbulbOutline,
  MdOutlineBuild,
  MdOutlineChecklist,
  MdOutlineKeyboardArrowLeft,
  MdOutlineWbSunny,
} from "react-icons/md";

const TaleMakers = () => {
  const tags = ["Figma", "Canva", "Ibis Paint", "Aseprite"];
  const images1 = [
    "/assets/images/talemakers1.png",
    "/assets/images/talemakers2.png",
    "/assets/images/talemakers3.png",
    "/assets/images/talemakers4.png",
    "/assets/images/talemakers5.png",
    "/assets/images/talemakers6.png",
  ];

  const designSteps = [
    {
      icon: <FiHeart size={20} />,
      title: "Empathize",
      description:
        "I began by placing myself in a child’s shoes, wondering what makes storytelling exciting, what captures attention, and how to make it feel magical yet simple. I observed how kids interact with games and educational apps, noticing patterns of play, moments of frustration, and bursts of joy.",
    },
    {
      icon: <FiTarget size={20} />,
      title: "Define",
      description:
        "One clear insight surfaced: children needed more than just content, they needed agency. The challenge was to design an environment that felt intuitive, joyful, and empowering, while also respecting short attention spans and varied developmental levels.",
    },
    {
      icon: <MdLightbulbOutline size={20} />,
      title: "Ideate",
      description:
        "I explored interactive features like drag-and-drop scenes, tap-to-animate characters, and background music, and imagined a playful interface that felt more like a toy chest than a textbook. I brainstormed endlessly: What if kids could make their stories move? What if they could hear them come alive?",
    },
    {
      icon: <MdOutlineBuild size={20} />,
      title: "Prototype",
      description:
        "I crafted interactive mockups using Figma and built animated UI samples that brought characters and scenes to life. The prototype focused on showcasing a minimal yet rich user experience, emphasizing ease of use, playful feedback, and visual clarity.",
    },
    {
      icon: <MdOutlineChecklist size={20} />,
      title: "Test",
      description:
        "Early testing sessions with peers and feedback from my client helped validate the app’s direction. While the current version is still evolving, those small tests gave insights into what works, what delights, and where the design needs to simplify or expand.",
    },
    {
      icon: <MdOutlineWbSunny size={20} />,
      title: "Result",
      description:
        "While not yet launched, the prototype has already resonated with my peers and client who see its potential. The early results highlight a user experience that is both approachable and imaginative, laying the groundwork for the next stages of development.",
    },
  ];

  const skills = [
    { name: "Research", level: 100 },
    { name: "UI/UX Design", level: 95 },
    { name: "Multimedia Design", level: 85 },
    { name: "Figma", level: 90 },
    { name: "Canva", level: 75 },
    { name: "Ibis Paint", level: 80 },
    { name: "Communication", level: 70 },
    { name: "Initiative", level: 70 },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header>
        <Navbar />
        <div className="flex justify-center font-bold text-glow animate-fade-in">
          <h1 className="font-noto text-3xl sm:text-6xl">Tale</h1>
          <h2 className="pinyon-script -ml-0 sm:-ml-8 text-5xl sm:text-8xl">
            Makers
          </h2>
        </div>
        <div>
          <div className="flex flex-wrap justify-center gap-4 text-sm animate-fade-in-delay-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border font-light px-4 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="space-y-18 pt-6">
        <section className="space-y-6">
          <Carousel images={images1} />
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            Project Overview
          </h2>
          <p className="-mt-2">
            TaleMakers is a mobile app concept born from a simple but powerful
            idea: what if children could become the authors of their own
            adventures? Designed to nurture creativity, storytelling, and
            digital literacy, the app allows kids to create animated storybooks
            using a playful mix of characters, backgrounds, music, and narration
            tools. Though still in the prototype stage, TaleMakers already shows
            promise as an inclusive platform where every child regardless of
            ability or learning style can explore, express, and share their
            unique voice in an imaginative space.
          </p>
          <button className="mx-auto flex justify-center">
            <a
              href="https://www.figma.com/proto/8fOWyiK87SDeMOOhH0oDZM/TaleMakers-App?node-id=1418-1728&p=f&t=FteYo7hMhkxWz2K9-1&scaling=scale-down-width&content-scaling=fixed&page-id=1418%3A1727&starting-point-node-id=1418%3A1728"
              target="_blank"
              className="flex white-button"
            >
              Read the Brand Book!
            </a>
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            Design Thinking Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designSteps.map((step, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-4xl backdrop-blur-sm border shadow-xs space-y-4 p-6 card-hover"
              >
                <div className="flex items-center justify-center border-b pb-2 gap-x-3">
                  {step.icon}
                  <h3 className="font-medium text-lg">{step.title}</h3>
                </div>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <button className="mx-auto flex justify-center pt-2">
            <a
              href="https://www.figma.com/proto/8fOWyiK87SDeMOOhH0oDZM/TaleMakers-App?node-id=1118-56&p=f&t=U77PsVSoE2swj5xD-1&scaling=scale-down&content-scaling=fixed&page-id=1035%3A12&starting-point-node-id=1118%3A56"
              target="_blank"
              className="flex white-button"
            >
              See Prototype
            </a>
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            The Challenge
          </h2>
          <div className="w-full flex flex-col lg:flex-row items-center gap-6">
            <div className="w-full lg:w-2/3">
              <Carousel images={images1} />
            </div>
            <p className="w-full lg:w-1/3">
              Designing for children is never just about making things “cute.”
              It’s about clarity, accessibility, emotional safety, and deep
              engagement, all in one seamless experience. The biggest challenge
              was creating a user interface that felt powerful yet simple,
              animated yet calm, and expressive without being overwhelming.
              Every design decision needed to honor how children think, explore,
              and feel. No fluff, no friction, just pure imaginative flow.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            The Impact
          </h2>
          <p>
            Though still in its early stages, TaleMakers is already beginning to
            spark excitement among creatives. Its vision which is to empower
            every child to become a storyteller, holds the potential to foster
            confidence, imagination, and digital fluency. As development
            continues, I remain committed to making TaleMakers a tool that
            children don’t just use but one they love, grow with, and return to
            again and again.
          </p>
          <button className="mx-auto flex justify-center">
            <a
              href="https://www.roostercat.io/"
              target="_blank"
              className="flex white-button"
            >
              See More about the Company
            </a>
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            Skills Earned
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center rounded-4xl backdrop-blur-sm border shadow-xs card-hover gap-2 p-4"
              >
                <div className="flex items-center gap-x-4">
                  <div className="text-left">
                    <h3 className="font-medium text-lg">{skill.name}</h3>
                  </div>
                </div>
                <div className="w-full bg-white/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-white h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-right -mt-1">
                  <span>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-center">
          <Link
            to="/projects"
            target="_top"
            className="w-fit flex items-center gap-x-2 white-button"
          >
            <MdOutlineKeyboardArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </main>
    </div>
  );
};

export default TaleMakers;
