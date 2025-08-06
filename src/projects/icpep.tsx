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

const ICpEP = () => {
  const tags = ["Figma", "Canva", "Photoshop"];
  const images1 = [
    "/assets/images/icpep1.jpg",
    "/assets/images/icpep2.jpg",
    "/assets/images/icpep3.jpg",
  ];

  const designSteps = [
    {
      icon: <FiHeart size={20} />,
      title: "Empathize",
      description:
        "As the sitting president of ICpEP.SE – USTP, I had firsthand insight into the struggles students and officers faced with our outdated website. I regularly engaged with members, gathered concerns during meetings, and observed how limited the current site was in representing our activities.",
    },
    {
      icon: <FiTarget size={20} />,
      title: "Define",
      description:
        "With clear feedback from the organization and personal experience managing its digital presence, I defined our pain points: lack of visual appeal, cluttered information flow, and no clear platform to showcase our achievements. The site failed to reflect the vibrant, innovative spirit of our members.",
    },
    {
      icon: <MdLightbulbOutline size={20} />,
      title: "Ideate",
      description:
        "Taking everything I knew from both leadership and design perspectives, I began drafting solutions. I explored ways to simplify navigation, amplify storytelling through visuals, and create dedicated sections for projects, events, and member engagement.",
    },
    {
      icon: <MdOutlineBuild size={20} />,
      title: "Prototype",
      description:
        "I translated these ideas into high-fidelity prototypes using Figma, iterating on structure, colors, and component systems that would bring consistency and impact. The design aimed to be modular and scalable, considering future content and organizational growth. Every element, from the homepage hero to the blogs, was crafted to be a bold yet professional representation of our org.",
    },
    {
      icon: <MdOutlineChecklist size={20} />,
      title: "Test",
      description:
        "Even in the design stage, I circulated the prototypes to fellow officers and members for feedback. As president, I facilitated open discussions on what worked and what didn’t. These feedback sessions were incredibly valuable in refining user flow, content placement, and visual clarity. Design choices were revisited and adjusted based on what resonated most with our community.",
    },
    {
      icon: <MdOutlineWbSunny size={20} />,
      title: "Result",
      description:
        "The result is a comprehensive website redesign that not only looks modern and cohesive but serves as a powerful tool for engagement, communication, and pride. Though still in the design phase, the prototype is aligned with the real-world needs of the organization, offering a future-ready foundation for implementation.",
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
          <h1 className="font-noto text-3xl sm:text-6xl">ICpEP.SE</h1>
          <h2 className="pinyon-script text-5xl sm:text-8xl">Redesign</h2>
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
            The ICpEP.SE – USTP Redesign was envisioned as a fresh, modern take
            on the digital identity of the Computer Engineering student
            organization at the University of Science and Technology of Southern
            Philippines. This project set out to elevate not only the aesthetic
            appeal of the site but also its usability, accessibility, and
            ability to tell the story of a vibrant student body. With a focus on
            showcasing activities, events, and initiatives, the redesign aimed
            to create a platform that students could be proud of and feel
            connected to. Though still in the design stage, this project
            represents a bold step forward in creating a purposeful and engaging
            online space for the organization.
          </p>
          <button className="mx-auto flex justify-center">
            <a
              href="https://www.icpepse-ustp.org/"
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
              href="https://www.figma.com/design/pxDfxLLZKL8d22Asol61ha/ICpEP.SE---USTP-Website-Redesign-Mood-Board?node-id=0-1&t=yAHRFon0HpdcwOu1-1"
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
              The biggest challenge lay in reimagining a digital presence that
              felt outdated and overlooked. The existing site did not reflect
              the dynamic nature of ICpEP.SE or the pride its members had in
              their work. It was important to reframe the narrative, not just by
              making it look good, but by creating a space where students could
              see themselves, their projects, and their progress. Balancing
              information hierarchy with expressive design while staying true to
              the organization's identity was a constant, evolving process.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            The Impact
          </h2>
          <p>
            Even as a conceptual project, the redesigned ICpEP.SE website has
            already sparked meaningful conversations among peers and student
            leaders. It gave the organization a visual identity they could feel
            excited about and inspired others to think more critically about the
            role of digital design in student engagement. More than just a
            design exercise, this project served as a collaborative dialogue
            between designer and community, one that planted the seed for future
            innovation.
          </p>
          <button className="mx-auto flex justify-center">
            <a
              href="https://www.facebook.com/icpep.se.ustp"
              target="_blank"
              className="flex white-button"
            >
              See the Org's Facebook Page
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

export default ICpEP;
