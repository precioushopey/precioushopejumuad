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

const CpExpress = () => {
  const tags = ["Figma", "Canva", "Photoshop"];
  const images1 = [
    "/assets/images/cpexpress1.png",
    "/assets/images/cpexpress2.png",
    "/assets/images/cpexpress3.png",
  ];

  const designSteps = [
    {
      icon: <FiHeart size={20} />,
      title: "Empathize",
      description:
        "I noticed that many students longed for an outlet to express unspoken thoughts, especially around Valentine’s Day. This inspired the idea of an anonymous platform where they could share freely and safely.",
    },
    {
      icon: <FiTarget size={20} />,
      title: "Define",
      description:
        "The challenge was clear: build a space for anonymous confessions that felt safe, moderated, and inviting, ensuring emotional honesty without risking misuse.",
    },
    {
      icon: <MdLightbulbOutline size={20} />,
      title: "Ideate",
      description:
        "I brainstormed various formats and features, ultimately deciding on a minimalist submission system with a moderation layer to maintain trust and community standards.",
    },
    {
      icon: <MdOutlineBuild size={20} />,
      title: "Prototype",
      description:
        "I developed a simple, themed prototype with a user-friendly form and backend moderation, allowing for quick, safe interaction while keeping the experience visually engaging.",
    },
    {
      icon: <MdOutlineChecklist size={20} />,
      title: "Test",
      description:
        "Launching the platform on Valentine’s Day revealed key insights about user behavior and moderation flow, allowing us to iterate in real time and enhance the experience.",
    },
    {
      icon: <MdOutlineWbSunny size={20} />,
      title: "Result",
      description:
        "The platform collected a total of 94 confessions from our target audience, validating both the concept and the need for a space like this, building user interest ahead of the next initiative, CpExpress: Speak Now.",
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
          <h1 className="font-noto text-3xl sm:text-6xl">CpExpress:</h1>
          <h2 className="pinyon-script text-5xl sm:text-8xl">
            CpE Confessions
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
            CpExpress: CpE Confessions is a moderated anonymous confession
            platform developed and launched during Valentine’s Day 2024. This
            digital initiative was built to create a safe, expressive space
            where students could share their thoughts, feelings, and hidden
            confessions without fear of judgment. It was more than just a
            seasonal platform — it served as a moment of connection, laughter,
            and emotional relief during one of the most socially charged times
            of the year.
          </p>
          <button className="mx-auto flex justify-center">
            <a
              href="https://express.icpepse-ustp.org/"
              target="_blank"
              className="flex white-button"
            >
              See Live Demo Here!
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
              href="https://www.figma.com/design/dTxd4Ox50vsJvi0Ax91DCG/CpExpress--CpE-Confessions?node-id=76-3&t=P8zko3Wy6yn4J3Br-1"
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
              The real challenge was creating an environment where anonymity
              could thrive without inviting toxicity. It required striking a
              delicate balance between freedom of expression and responsible
              community behavior. Designing a submission and moderation system
              that was both real-time and protective was technically demanding —
              and emotionally nuanced — especially when dealing with vulnerable
              or humorous content in a public space.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            The Impact
          </h2>
          <p>
            By framing CpE Confessions as a Valentine’s Day campaign, we were
            able to tap into a moment of heightened emotional engagement and
            curiosity among students. This approach generated organic traction
            and positioned the platform as both relevant and approachable. More
            importantly, it introduced the community to the site in a
            lighthearted yet compelling way, lowering the barrier for future
            participation. The early interaction served not only to validate the
            platform’s usability but also to establish trust and familiarity
            with its brand. This strategic momentum directly supported the
            seamless transition into our next and more purpose-driven
            initiative, CpExpress: Speak Now, where students would be encouraged
            to engage in more meaningful, reflective dialogue.
          </p>
          <button className="mx-auto flex justify-center">
            <a
              href="https://www.facebook.com/share/p/16auriyxyx/"
              target="_blank"
              className="flex white-button"
            >
              See the Poster
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

export default CpExpress;
