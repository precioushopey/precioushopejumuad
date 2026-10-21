import {
  SimpleCaseStudy,
  type SimpleCaseStudyData,
} from "../components/SimpleCaseStudy";

const data: SimpleCaseStudyData = {
  hero: {
    images: [
      "/assets/images/projects/payroll/payroll1.png",
      "/assets/images/projects/payroll/payroll2.png",
    ],
    alt: "Preview images of the HRMO Payroll Management System",
  },
  about:
    "In the heart of LGU Jasaan’s Human Resource operations, manual payroll processes once consumed hours of tedious work: cross-checking biometric logs, calculating deductions, and generating payslips by hand. To ease this burden, I, together with my partner, developed an automated Payroll Management System tailored to their workflow. Designed with seamless biometric integration, the system simplifies complex payroll tasks into an intuitive digital experience, empowering HR staff to focus more on people, not paperwork. It's more than automation, it's a tool that restores time and ensures accuracy where it matters most.",
  businessCase: {
    headline:
      "The payroll system turns biometric logs into payroll and payslips automatically, giving HR staff back the time spent on manual entry.",
    conversion:
      "It was built around how LGU Jasaan’s HR office already works, with HR’s feedback guiding the mockups, and it is fully deployed.",
    efficiency:
      "Biometric attendance flows straight into payroll calculations, and payslips are generated automatically instead of by hand, with fewer errors.",
    roi: "Since launch, payroll work that once took days is managed in minutes.",
    evidence:
      "The days-to-minutes change is described, not measured; no timed results are shown.",
  },
  facts: [
    {
      label: "Type",
      value: "Payroll management system for the HR office of LGU Jasaan",
    },
    { label: "Team", value: "Me and a partner" },
    { label: "Status", value: "Fully deployed" },
    {
      label: "Tools",
      value: "Next.js, TypeScript, Tailwind CSS, Figma, Canva",
    },
  ],
  links: [
    {
      label: "See Live Demo Here!",
      href: "https://hrmo-payroll-web.vercel.app/",
    },
    {
      label: "Read User Manual",
      href: "https://hrmo-payroll-web.vercel.app/",
    },
  ],
  problem:
    "Their pain was clear: scattered data, inconsistent records, and a lack of centralized tools to manage payroll and attendance efficiently.",
  goal: "An automated payroll system, tailored to the HR workflow, with biometric integration, so HR staff can focus more on people, not paperwork.",
  challenge:
    "The biggest hurdle wasn’t just building a payroll system rather, it was designing one that understood the nuances of local government operations. Integrating biometric data posed technical constraints, but the real challenge was building trust: HR teams needed assurance that every peso, every record, and every leave count was accurate to the last detail. This meant rigorous testing, thoughtful UI design, and a flexible backend that could handle edge cases from unexpected absences to multiple pay grades without fail.",
  process: {
    empathize: {
      status: "Done",
      text: "Listened to HR staff about repetitive tasks and error-prone manual entries.",
    },
    define: {
      status: "Done",
      text: "Scattered data, inconsistent records, and no central tool for payroll and attendance.",
    },
    ideate: {
      status: "Done",
      text: "Automated syncing, real-time payroll previews, and a clean dashboard.",
    },
    prototype: {
      status: "Done",
      text: "Wireframes became interactive mockups, guided by HR’s feedback.",
    },
    test: {
      status: "Done",
      text: "Live trials and repeated iterations. No test results or scores are shown here.",
    },
  },
  sdlc: {
    planning: {
      status: "Done",
      text: "Built with a partner for the HR office of LGU Jasaan, tailored to its workflow.",
    },
    requirements: {
      status: "Done",
      text: "Listening to HR staff about repetitive tasks and error-prone manual entries defined the need: scattered data, inconsistent records, and no central tool for payroll and attendance.",
    },
    design: {
      status: "Done",
      text: "Wireframes turned into interactive mockups in Figma, guided by HR’s feedback.",
    },
    development: {
      status: "Done",
      text: "Next.js, TypeScript, and Tailwind CSS, with biometric integration and a backend that handles edge cases from unexpected absences to multiple pay grades.",
    },
    testing: {
      status: "Done",
      text: "Rigorous testing for accuracy, live trials, and repeated iterations. No test results or scores are shown here.",
    },
    deployment: {
      status: "Done",
      text: "Fully deployed, with a live demo and a user manual.",
    },
    maintenance: {
      status: "To add",
      text: "The page doesn’t say what happened after launch.",
    },
  },
  research:
    "It started with listening and understanding the frustrations of HR staff bogged down by repetitive tasks and error-prone manual entries.",
  ideation:
    "I explored solutions that would reduce friction: automated syncing, real-time payroll previews, and a clean dashboard.",
  prototype: {
    text: "Wireframes turned into interactive mockups, guided by HR’s feedback.",
    images: [
      "/assets/images/projects/payroll/payroll3.jpg",
      "/assets/images/projects/payroll/payroll4.jfif",
      "/assets/images/projects/payroll/payroll5.jpg",
      "/assets/images/projects/payroll/payroll6.png",
      "/assets/images/projects/payroll/payroll7.jpg",
    ],
    alt: "Screens and mockups from the HRMO Payroll Management System",
    link: {
      label: "See Prototype",
      href: "https://www.figma.com/design/RpTMeFJSwf0d7t3cxB1ori/HR-Payroll-Management?node-id=0-1&t=8FlCrtuJ47o0YDTA-1",
    },
  },
  testing:
    "Through live trials and continuous iterations, the system evolved into a responsive, reliable, and user-centric tool built specifically for their needs.",
  quality: {
    usable:
      "Wireframes became mockups with HR’s feedback, and live trials followed. No usability scores or task results are shown here.",
    equitable: "Not covered on this page. No accessibility work is documented.",
    enjoyable:
      "The aim was an intuitive digital experience that gives HR staff time back from paperwork. The page does not report how staff felt using it.",
    useful:
      "The system feeds biometric logs into payroll calculations and generates payslips automatically. The page says this cut days of work to minutes but gives no measured times.",
  },
  result:
    "The result was a fully deployed, dependable payroll system that seamlessly met HR’s real-world needs with accuracy, usability, and trust.",
  impact:
    "Since its launch, the Payroll Management System has transformed how Jasaan’s HRMO operates. What once took days is now managed in minutes. Biometric logs flow seamlessly into payroll calculations. Payslips are generated automatically, with fewer errors and greater transparency. Most importantly, it has lightened the emotional and mental load on HR staff giving them confidence in their tools, clarity in their processes, and time to focus on what truly matters: serving people. It’s a quiet revolution, one pay cycle at a time.",
  closingLinks: [
    {
      label: "View GitHub Repository",
      href: "https://github.com/HR-Payroll/hrmo-payroll-web",
    },
  ],
};

const Payroll = () => <SimpleCaseStudy data={data} />;

export default Payroll;
