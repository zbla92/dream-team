import { cld } from "./constants";

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  yearsExperience: number;
  location: string;
  bio: string;
  skills: string[];
  photo: string;
  links: {
    email: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  highlights: string[];
}

const photo = (slug: string) =>
  cld(`team/${slug}`, "f_auto,q_auto,c_fill,g_face,w_480,h_480");

export const TEAM: TeamMember[] = [
  {
    slug: "milan-blaz",
    name: "Milan Blaz",
    role: "Senior Software Engineer",
    yearsExperience: 9,
    location: "Banja Luka, BA",
    bio: "Lead engineer at Additiv building an in-house React/Next.js framework powering multiple teams. Ships MVPs and white-label products end-to-end, with heavy experience in real-time streaming, monorepos, and AI-assisted development.",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "WebRTC",
      "React Query",
      "CI/CD",
    ],
    photo: photo("milan-blaz"),
    links: {
      email: "milanblaz@live.com",
    },
    highlights: [
      "Built a POC AI-driven insurance app (video damage → backend analysis → actionable feedback)",
      "Led video-streaming platform on React + RN + WebRTC with 4K live sessions",
      "Leads small teams through critical client delivery phases",
    ],
  },
  {
    slug: "milan-susnjar",
    name: "Milan Šušnjar",
    role: "Senior Full-Stack / React Native Engineer",
    yearsExperience: 14,
    location: "Banja Luka, BA",
    bio: "Fourteen-year veteran specialising in React Native, TypeScript and cross-platform architecture. Owned production releases to iOS and Android for enterprise and startup teams across IoT, HVAC and safety-systems.",
    skills: [
      "React Native",
      "React",
      "TypeScript",
      "Expo",
      "Redux",
      "React Query",
      "MUI",
      "Bitrise",
    ],
    photo: photo("milan-susnjar"),
    links: {
      email: "milanrs@gmail.com",
      linkedin: "https://www.linkedin.com/in/milansusnjar/",
      github: "https://github.com/milansusnjar",
    },
    highlights: [
      "Delivered myVAILLANT Pro HVAC app with 3 white-label variants",
      "Shipped 3 Medion IoT apps (Pet, Robots, Air) on a shared RN component library",
      "Architected RN apps from scratch with automated TestFlight / Play releases",
    ],
  },
  {
    slug: "ensar-bavrk",
    name: "Ensar Bavrk",
    role: "Senior Engineer / Technical Lead",
    yearsExperience: 10,
    location: "Zürich, CH",
    bio: "Technical Lead Frontend at Additiv AG, Zürich. Ten years shipping mobile and web across fintech, wealth-tech and consumer electronics — including in-app wallet provisioning, multi-brand white-label, and B2B platforms. Speaker at European tech conferences.",
    skills: [
      "TypeScript",
      "React Native",
      "Expo",
      "React",
      "Next.js",
      "Node.js",
      "AWS",
      "Swift / Kotlin",
    ],
    photo: photo("ensar-bavrk"),
    links: {
      email: "hey@itbite.dev",
      website: "https://itbite.dev",
    },
    highlights: [
      "Shipped Coop Finance (Swiss retailer banking app) live on App Store + Play Store",
      "Lead engineer on Crédit Agricole next bank Swiss wealth-tech launch",
      "Spoke at How To Web on shipping prototypes with agile teams",
    ],
  },
];
