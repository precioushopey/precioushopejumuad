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

const Ibrgy = () => {
  const tags = ["React", "JavaScript", "TailwindCSS", "Figma"];
  const images1 = ["/assets/images/ibrgy1.png", "/assets/images/ibrgy2.png"];

  const designSteps = [
    {
      icon: <FiHeart size={20} />,
      title: "Empathize",
      description:
        "We stood at the heart of community life, listening to residents’ frustrations over long queues and barangay staff’s struggle with manual logs and paperwork.",
    },
    {
      icon: <FiTarget size={20} />,
      title: "Define",
      description:
        "We heard the call clearly: our barangays needed a system that made document requests transparent, traceable, and fast.",
    },
    {
      icon: <MdLightbulbOutline size={20} />,
      title: "Ideate",
      description:
        "We sketched out solutions: a dashboard for staff, a user-friendly form flow for residents, and real-time status updates to keep both sides informed.",
    },
    {
      icon: <MdOutlineBuild size={20} />,
      title: "Prototype",
      description:
        "Early wireframes evolved into a working UI, using Figma prototypes and user-testing sessions to fine-tune every button and message.",
    },
    {
      icon: <MdOutlineChecklist size={20} />,
      title: "Test",
      description:
        "Live trials confirmed it worked—no bugs, no errors—just satisfied residents and barangay officials praising its efficiency.",
    },
    {
      icon: <MdOutlineWbSunny size={20} />,
      title: "Result",
      description:
        "The final version surpassed expectations: A+ usability, seamless performance, and glowing feedback. Residents found it intuitive, personnel found it reliable, and everyone found time saved. It wasn't just accepted, it was embraced.",
    },
  ];

  const skills = [
    { name: "Design Thinking", level: 100 },
    { name: "Research", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Figma", level: 85 },
    { name: "Microsoft Office", level: 80 },
    { name: "Problem Solving", level: 75 },
    { name: "Communication", level: 70 },
    { name: "Empathy", level: 70 },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden container mx-auto max-w-5xl space-y-6 py-24 px-8 text-sm sm:text-base">
      <SparkleBackground />

      <header>
        <Navbar />
        <div className="flex justify-center font-bold text-glow animate-fade-in">
          <h1 className="font-noto text-3xl sm:text-6xl">iBRGY</h1>
          <h2 className="pinyon-script text-5xl sm:text-8xl">System</h2>
        </div>
        <div>
          <div className="flex flex-wrap justify-center gap-4 text-sm pt-4 animate-fade-in-delay-1">
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
            Imagine a bustling barangay hall where residents once queued
            endlessly for documents like clearances, indigency certificates,
            even routine permits. iBRGY transforms that scene with empathy and
            intelligence, offering an accessible online platform where residents
            request and track their documents with just a few clicks. Built with
            the vision of automating document handling via interviews and
            hands-on observation, it empowers users to navigate processes
            smoothly, while easing the load on barangay personnel. It’s not just
            tech, it’s a bridge between the community and efficiency, one
            request at a time.
          </p>
          <button className="mx-auto flex justify-center">
            <a
              href="https://ibrgy.netlify.app/"
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
              href="https://www.figma.com/design/GIHW4r5fqPlq3dLYuEdqpc/iBRGY-GUI-Design?node-id=0-1&t=m7OhCxVOTXC6iqgq-1"
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
              Translating traditional barangay workflows into an online space
              wasn’t just a technical hurdle, it was a cultural shift. The root
              challenge lay in reshaping deeply ingrained paper-driven processes
              and ensuring trust in a digital interface. We needed to ensure
              clarity at every step: from form submission to approval, so
              neither residents nor officials felt lost. It meant predicting
              edge cases, like incomplete fields or missing uploads, and
              handling them gracefully to avoid distrust or confusion.
            </p>
          </div>
          <button className="pt-2">
            <a
              href="https://drive.google.com/drive/folders/1WZWou71qFtARwjpr4Vg7k7uQ7SRc8k8M?usp=sharing"
              target="_blank"
              className="white-button"
            >
              Project Files
            </a>
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            The Impact
          </h2>
          <p>
            The transformation has been profound. Residents no longer wait in
            restless lines, they request documents from home, track progress
            instantly, and step into the barangay only to pick up finalized
            paperwork. Barangay staff, in turn, manage requests from a
            centralized dashboard, reducing manual errors and accelerating
            service delivery. More than just saving time, iBRGY injects
            transparency and dignity into public service, creating a system that
            respects people’s time, trust, and voice.
          </p>
          <button className="mx-auto flex justify-center">
            <a
              href="https://github.com/capstone-ibrgy/ibrgy"
              target="_blank"
              className="flex white-button"
            >
              View GitHub Repository
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

export default Ibrgy;
