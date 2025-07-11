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

const AtHomes = () => {
  const tags = ["Figma", "Canva", "Photoshop"];
  const images1 = [
    "/assets/images/athomes1.png",
    "/assets/images/athomes2.png",
  ];

  const designSteps = [
    {
      icon: <FiHeart size={20} />,
      title: "Empathize",
      description:
        "It started with researching and listening to the agents. We heard the frustrations: cluttered listings, dead-end inquiries, and impersonal platforms that treat home buying like a transaction instead of a journey. These insights shaped the heartbeat of AtHomes.",
    },
    {
      icon: <FiTarget size={20} />,
      title: "Define",
      description:
        "The core problem became crystal clear: users needed clarity and connection. They wanted to browse properties effortlessly while also being able to talk to real people and those are the agents who could guide them, not just algorithms that filtered listings.",
    },
    {
      icon: <MdLightbulbOutline size={20} />,
      title: "Ideate",
      description:
        "I sketched out experiences that felt more like discovery and less like data entry. From filters that made sense to card designs that highlighted what matters: price, location, and photos. We envisioned a browsing journey that was welcoming and smart.",
    },
    {
      icon: <MdOutlineBuild size={20} />,
      title: "Prototype",
      description:
        "Using Figma, I designed high-fidelity mockups that reflect the minimal, modern identity of AtHomes. The prototype showcases listing cards, agent profiles, and an interface optimized for both curious first-time buyers and seasoned property seekers.",
    },
    {
      icon: <MdOutlineChecklist size={20} />,
      title: "Test",
      description:
        "While full-scale testing is still ahead, early walkthroughs with target users revealed moments of delight like how quick it was to find listings, how intuitive the layout felt, and how refreshing it was to see an agent’s face tied to a property. Their feedback is now shaping the next iteration.",
    },
    {
      icon: <MdOutlineWbSunny size={20} />,
      title: "Result",
      description:
        "Even in this early phase, AtHomes is proving that a warm, human touch can exist in the digital real estate space. The prototype has already sparked excitement, and as development continues, it’s paving the way for a platform that could truly reimagine how people find and feel at home.",
    },
  ];

  const skills = [
    { name: "Research", level: 100 },
    { name: "UI/UX Design", level: 95 },
    { name: "Multimedia Design", level: 85 },
    { name: "Figma", level: 90 },
    { name: "Canva", level: 80 },
    { name: "Communication", level: 75 },
    { name: "Adaptability", level: 70 },
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
            AtHomes was imagined with one goal in mind and that is to make
            finding a home feel less like a chore and more like a conversation.
            It’s a real estate platform in the making, built to simplify
            property discovery and make it easier for home seekers to connect
            with real estate agents in just a few clicks. The website introduces
            a clean, intuitive interface where users can explore listings and
            directly reach out to agents without the usual friction. Although
            still in its prototype phase, AtHomes lays the foundation for a
            smarter, more human-centered property search experience.
          </p>
          <button className="mx-auto flex justify-center">
            <a
              href="https://www.facebook.com/athomescdorecruitement"
              target="_blank"
              className="flex white-button"
            >
              See their Agency!
            </a>{" "}
            {/* Should be a brandbook */}
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
              href="https://www.figma.com/design/GGQyigCWlqYjvrcQpYGzIZ/ATHOMES---Website?node-id=0-1&t=ifIu5CBMsA1vIb7J-1"
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
              Real estate platforms tend to fall into two extremes: overwhelming
              with clutter or stripped so bare they lose personality. Designing
              AtHomes meant walking the tightrope between function and emotion.
              The biggest challenge was crafting a visual language and flow that
              feels personal without sacrificing efficiency, because people
              aren’t just searching for property; they’re searching for
              possibility.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            The Impact
          </h2>
          <p>
            Though still evolving, AtHomes is already demonstrating how
            thoughtful design can make something as complex as real estate feel
            approachable. It’s more than a site; it’s a bridge connecting people
            not just to properties, but to the lives they imagine living in
            them. As the project moves toward development, it promises to
            empower both agents and clients with clarity, trust, and a better
            experience from the very first click.
          </p>
          <button className="mx-auto flex justify-center">
            <a
              href="http://athomesph.com/"
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

export default AtHomes;
