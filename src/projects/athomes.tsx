import {
  SimpleCaseStudy,
  type SimpleCaseStudyData,
} from "../components/SimpleCaseStudy";

const data: SimpleCaseStudyData = {
  hero: {
    images: [
      "/assets/images/projects/athomes/athomes1.png",
      "/assets/images/projects/athomes/athomes2.png",
    ],
    alt: "Preview images of the AtHomes project",
  },
  about:
    "AtHomes was imagined with one goal in mind and that is to make finding a home feel less like a chore and more like a conversation. It’s a real estate platform in the making, built to simplify property discovery and make it easier for home seekers to connect with real estate agents in just a few clicks. The website introduces a clean, intuitive interface where users can explore listings and directly reach out to agents without the usual friction. Although still in its prototype phase, AtHomes lays the foundation for a smarter, more human-centered property search experience.",
  businessCase: {
    headline:
      "AtHomes is built to get home seekers talking to a real agent in a few clicks, instead of leaving them alone with listings.",
    conversion:
      "Listing cards lead with what matters, price, location, and photos, and agent profiles are part of the browsing journey, so interest can turn into a conversation quickly.",
    efficiency:
      "Filters built around what home seekers care about help them skip listings that don’t fit.",
    roi: "The aim is more agent conversations from the same visitors, which the next phase will need to measure.",
    evidence:
      "A Figma prototype; it hasn’t been built or tested with users yet.",
  },
  facts: [
    { label: "Type", value: "Real estate website" },
    { label: "Status", value: "Prototype phase" },
    { label: "Tools", value: "Figma, Canva, Photoshop" },
  ],
  links: [
    {
      label: "See their Agency!",
      href: "https://www.facebook.com/athomescdorecruitement",
    },
  ],
  problem:
    "The core problem became crystal clear: users needed clarity and connection. They wanted to browse properties effortlessly while also being able to talk to real people and those are the agents who could guide them, not just algorithms that filtered listings.",
  goal: "To make finding a home feel less like a chore and more like a conversation: simple property discovery, and a few clicks to reach a real estate agent.",
  challenge:
    "Real estate platforms tend to fall into two extremes: overwhelming with clutter or stripped so bare they lose personality. Designing AtHomes meant walking the tightrope between function and emotion. The biggest challenge was crafting a visual language and flow that feels personal without sacrificing efficiency, because people aren’t just searching for property; they’re searching for possibility.",
  process: {
    empathize: {
      status: "Done",
      text: "Researched and listened to agents about cluttered listings, dead-end inquiries, and impersonal platforms.",
    },
    define: {
      status: "Done",
      text: "Users needed clarity, and a way to talk to real agents, not only to filter listings.",
    },
    ideate: {
      status: "Done",
      text: "Sketched filters and card designs that put price, location, and photos first.",
    },
    prototype: {
      status: "Done",
      text: "High-fidelity Figma mockups of listing cards and agent profiles.",
    },
    test: {
      status: "Partly",
      text: "Early walkthroughs with target users. Full-scale testing is still ahead.",
    },
  },
  research:
    "It started with researching and listening to the agents. We heard the frustrations: cluttered listings, dead-end inquiries, and impersonal platforms that treat home buying like a transaction instead of a journey. These insights shaped the heartbeat of AtHomes.",
  ideation:
    "I sketched out experiences that felt more like discovery and less like data entry. From filters that made sense to card designs that highlighted what matters: price, location, and photos. We envisioned a browsing journey that was welcoming and smart.",
  prototype: {
    text: "Using Figma, I designed high-fidelity mockups that reflect the minimal, modern identity of AtHomes. The prototype showcases listing cards, agent profiles, and an interface optimized for both curious first-time buyers and seasoned property seekers.",
    link: {
      label: "See Prototype",
      href: "https://www.figma.com/design/GGQyigCWlqYjvrcQpYGzIZ/ATHOMES---Website?node-id=0-1&t=ifIu5CBMsA1vIb7J-1",
    },
  },
  testing:
    "While full-scale testing is still ahead, early walkthroughs with target users revealed moments of delight like how quick it was to find listings, how intuitive the layout felt, and how refreshing it was to see an agent’s face tied to a property. Their feedback is now shaping the next iteration.",
  quality: {
    usable:
      "Early walkthroughs with target users found listings quick to find and the layout intuitive. These were informal walkthroughs, so there are no task or timing results.",
    equitable:
      "Not covered on this page. No accessibility checks or inclusive-design work are documented.",
    enjoyable:
      "Users in the walkthroughs liked seeing an agent’s face tied to a property, which fits the warm, human feel the design aims for.",
    useful:
      "The design lets people browse listings and reach agents directly. The prototype has not launched, so there is no usage data.",
  },
  result:
    "Even in this early phase, AtHomes is proving that a warm, human touch can exist in the digital real estate space. The prototype has already sparked excitement, and as development continues, it’s paving the way for a platform that could truly reimagine how people find and feel at home.",
  impact:
    "Though still evolving, AtHomes is already demonstrating how thoughtful design can make something as complex as real estate feel approachable. It’s more than a site; it’s a bridge connecting people not just to properties, but to the lives they imagine living in them. As the project moves toward development, it promises to empower both agents and clients with clarity, trust, and a better experience from the very first click.",
  closingLinks: [
    {
      label: "See More about the Company",
      href: "http://athomesph.com/",
    },
  ],
  nextSteps: [
    "Run full-scale testing with target users.",
    "Use the walkthrough feedback to shape the next iteration.",
    "Move the project into development.",
  ],
};

const AtHomes = () => <SimpleCaseStudy data={data} />;

export default AtHomes;
