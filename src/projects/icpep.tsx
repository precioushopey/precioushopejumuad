import {
  SimpleCaseStudy,
  type SimpleCaseStudyData,
} from "../components/SimpleCaseStudy";

const data: SimpleCaseStudyData = {
  hero: {
    images: [
      "/assets/images/projects/icpep/icpep1.jpg",
      "/assets/images/projects/icpep/icpep2.jpg",
      "/assets/images/projects/icpep/icpep3.jpg",
    ],
    alt: "Preview images of the ICpEP.SE – USTP website redesign",
  },
  about:
    "The ICpEP.SE – USTP Redesign was envisioned as a fresh, modern take on the digital identity of the Computer Engineering student organization at the University of Science and Technology of Southern Philippines. This project set out to elevate not only the aesthetic appeal of the site but also its usability, accessibility, and ability to tell the story of a vibrant student body. With a focus on showcasing activities, events, and initiatives, the redesign aimed to create a platform that students could be proud of and feel connected to. Though still in the design stage, this project represents a bold step forward in creating a purposeful and engaging online space for the organization.",
  facts: [
    {
      label: "Type",
      value: "Website redesign for a student organization",
    },
    {
      label: "Role",
      value: "Designer, and the organization’s sitting president",
    },
    { label: "Status", value: "Design stage" },
    { label: "Tools", value: "Figma, Canva, Photoshop" },
  ],
  links: [
    {
      label: "See Live Demo Here!",
      href: "https://www.icpepse-ustp.org/",
    },
  ],
  problem:
    "With clear feedback from the organization and personal experience managing its digital presence, I defined our pain points: lack of visual appeal, cluttered information flow, and no clear platform to showcase our achievements. The site failed to reflect the vibrant, innovative spirit of our members.",
  goal: "A modern redesign that lifts the site’s looks, usability, and accessibility, and tells the story of the student body through its activities, events, and initiatives.",
  challenge:
    "The biggest challenge lay in reimagining a digital presence that felt outdated and overlooked. The existing site did not reflect the dynamic nature of ICpEP.SE or the pride its members had in their work. It was important to reframe the narrative, not just by making it look good, but by creating a space where students could see themselves, their projects, and their progress. Balancing information hierarchy with expressive design while staying true to the organization's identity was a constant, evolving process.",
  process: {
    empathize: {
      status: "Done",
      text: "As the sitting president, gathered concerns from members and officers and observed the old site’s limits.",
    },
    define: {
      status: "Done",
      text: "Lack of visual appeal, cluttered information flow, and no place to show achievements.",
    },
    ideate: {
      status: "Done",
      text: "Simpler navigation, visual storytelling, and sections for projects, events, and member engagement.",
    },
    prototype: {
      status: "Done",
      text: "High-fidelity Figma prototypes with a modular component system.",
    },
    test: {
      status: "Partly",
      text: "Informal feedback sessions with officers and members, not formal usability tests.",
    },
  },
  research:
    "As the sitting president of ICpEP.SE – USTP, I had firsthand insight into the struggles students and officers faced with our outdated website. I regularly engaged with members, gathered concerns during meetings, and observed how limited the current site was in representing our activities.",
  ideation:
    "Taking everything I knew from both leadership and design perspectives, I began drafting solutions. I explored ways to simplify navigation, amplify storytelling through visuals, and create dedicated sections for projects, events, and member engagement.",
  prototype: {
    text: "I translated these ideas into high-fidelity prototypes using Figma, iterating on structure, colors, and component systems that would bring consistency and impact. The design aimed to be modular and scalable, considering future content and organizational growth. Every element, from the homepage hero to the blogs, was crafted to be a bold yet professional representation of our org.",
    link: {
      label: "See Prototype",
      href: "https://www.figma.com/design/pxDfxLLZKL8d22Asol61ha/ICpEP.SE---USTP-Website-Redesign-Mood-Board?node-id=0-1&t=yAHRFon0HpdcwOu1-1",
    },
  },
  testing:
    "Even in the design stage, I circulated the prototypes to fellow officers and members for feedback. As president, I facilitated open discussions on what worked and what didn’t. These feedback sessions were incredibly valuable in refining user flow, content placement, and visual clarity. Design choices were revisited and adjusted based on what resonated most with our community.",
  quality: {
    usable:
      "Feedback sessions with officers and members refined the user flow, content placement, and visual clarity. They were open discussions, not usability tests.",
    equitable:
      "Accessibility is named as a goal in the overview, but no accessibility checks are documented.",
    enjoyable:
      "The design aims for a bold yet professional look that members can be proud of, and peers and student leaders reacted with interest.",
    useful:
      "Dedicated sections for projects, events, and member engagement give the organization a place to show its work. The page describes the redesign as still in the design stage, so there is no usage data.",
  },
  result:
    "The result is a comprehensive website redesign that not only looks modern and cohesive but serves as a powerful tool for engagement, communication, and pride. Though still in the design phase, the prototype is aligned with the real-world needs of the organization, offering a future-ready foundation for implementation.",
  impact:
    "Even as a conceptual project, the redesigned ICpEP.SE website has already sparked meaningful conversations among peers and student leaders. It gave the organization a visual identity they could feel excited about and inspired others to think more critically about the role of digital design in student engagement. More than just a design exercise, this project served as a collaborative dialogue between designer and community, one that planted the seed for future innovation.",
  closingLinks: [
    {
      label: "See the Org's Facebook Page",
      href: "https://www.facebook.com/icpep.se.ustp",
    },
  ],
  nextSteps: ["Implement the prototype as the organization’s website."],
};

const ICpEP = () => <SimpleCaseStudy data={data} />;

export default ICpEP;
