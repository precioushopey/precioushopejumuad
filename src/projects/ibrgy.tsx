import Carousel from "../components/Carousel";
import {
  LuHeart,
  LuLightbulb,
  LuListChecks,
  LuSun,
  LuTarget,
  LuWrench,
} from "react-icons/lu";
import { ProjectLayout } from "../components/ProjectLayout";

const Ibrgy = () => {
  const images1 = [
    "/assets/images/projects/ibrgy/ibrgy1.png",
    "/assets/images/projects/ibrgy/ibrgy2.png",
  ];

  const designSteps = [
    {
      icon: <LuHeart size={20} />,
      title: "Empathize",
      description:
        "We stood at the heart of community life, listening to residents’ frustrations over long queues and barangay staff’s struggle with manual logs and paperwork.",
    },
    {
      icon: <LuTarget size={20} />,
      title: "Define",
      description:
        "We heard the call clearly: our barangays needed a system that made document requests transparent, traceable, and fast.",
    },
    {
      icon: <LuLightbulb size={20} />,
      title: "Ideate",
      description:
        "We sketched out solutions: a dashboard for staff, a user-friendly form flow for residents, and real-time status updates to keep both sides informed.",
    },
    {
      icon: <LuWrench size={20} />,
      title: "Prototype",
      description:
        "Early wireframes evolved into a working UI, using Figma prototypes and user-testing sessions to fine-tune every button and message.",
    },
    {
      icon: <LuListChecks size={20} />,
      title: "Test",
      description:
        "Live trials confirmed it worked: no bugs, no errors, just satisfied residents and barangay officials praising its efficiency.",
    },
    {
      icon: <LuSun size={20} />,
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
    <ProjectLayout>
      <div className="space-y-18 pt-8">
        <section className="space-y-6">
          <Carousel images={images1} />
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            Project Overview
          </h2>
          <p className="-mt-2 hyphens-auto text-justify text-pretty text-sm leading-6 text-cream/80 [text-align-last:center]">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {designSteps.map((step, index) => (
              <div
                key={index}
                className="group overflow-hidden glass-card space-y-4 p-8 card-hover"
              >
                <div className="flex items-center justify-center border-b pb-2 gap-x-4">
                  {step.icon}
                  <h3 className="font-medium text-lg">{step.title}</h3>
                </div>
                <p className="hyphens-auto text-justify text-pretty text-sm leading-6 text-cream/80 [text-align-last:center]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <button className="mx-auto flex justify-center pt-2">
            <a
              href="https://drive.google.com/drive/folders/106qju_uRAZ9Md0lmTMTWLMOWU1Zu_eRo?usp=sharing"
              target="_blank"
              className="flex white-button"
            >
              See User Manual
            </a>
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl text-glow">
            The Challenge
          </h2>
          <div className="w-full flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-2/3">
              <Carousel images={images1} />
            </div>
            <p className="w-full lg:w-1/3 hyphens-auto text-justify text-pretty text-sm leading-6 text-cream/80 [text-align-last:center]">
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
          <p className="hyphens-auto text-justify text-pretty text-sm leading-6 text-cream/80 [text-align-last:center]">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center glass-card card-hover gap-2 p-4"
              >
                <div className="flex items-center gap-x-4">
                  <div className="text-left">
                    <h3 className="font-medium text-lg">{skill.name}</h3>
                  </div>
                </div>
                <div className="w-full bg-cream/15 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-accent h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
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
      </div>
    </ProjectLayout>
  );
};

export default Ibrgy;
