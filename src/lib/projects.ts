import { cld } from "./constants";

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  oneLiner: string;
  details: string;
  stack: string[];
  credits: string[];
  year: string;
  /** Single image used as card hero (thumbnail/poster) */
  image: string;
  /** Optional gallery. When set, card cycles between these. */
  gallery?: string[];
  /** Optional video. When set, card plays a looping muted preview. */
  video?: {
    src: string;
    poster: string;
  };
  liveUrl?: string;
  liveLabel?: string;
}

const img = (slug: string, w = 1600, h = 1000) =>
  cld(`projects/${slug}`, `f_auto,q_auto,c_fill,w_${w},h_${h}`);

// Video helpers — preserve natural aspect (portrait screen recordings stay portrait).
// c_limit caps the bigger side without cropping; the component renders with
// object-contain so portrait + landscape both frame correctly.
const VIDEO_BASE = "https://res.cloudinary.com/dekljoqsm/video/upload";
const vid = (slug: string) =>
  `${VIDEO_BASE}/f_auto,q_auto,vc_auto,c_limit,w_1280,h_1280/dream-team/projects/${slug}.mp4`;
const vidPoster = (slug: string) =>
  `${VIDEO_BASE}/f_auto,q_auto,so_1,c_limit,w_1600,h_1600/dream-team/projects/${slug}.jpg`;

export const PROJECTS: CaseStudy[] = [
  {
    slug: "coop-finance",
    client: "Coop Finance Plus",
    industry: "Fintech · Switzerland",
    oneLiner:
      "Expo mobile app powering banking, insurance and pensions for Switzerland's largest retailer.",
    details:
      "Secure in-app card provisioning across Apple, Google and Samsung wallets. Integrations with Futurae, IDNow and twint.",
    stack: ["TypeScript", "React Native", "Expo", "Swift", "Kotlin"],
    credits: ["ensar-bavrk"],
    year: "2023 – now",
    image: img("coop-finance"),
    liveUrl: "https://apps.apple.com/ch/app/coop-finance/id6449426048",
    liveLabel: "App Store",
  },
  {
    slug: "reaction-club",
    client: "Reaction Club",
    industry: "Health & fitness",
    oneLiner:
      "Mobile + web platform that turns day-to-day activity into a social fitness experience.",
    details:
      "Cross-platform React Native + web stack with real-time activity feeds, challenges and leaderboards. Built end-to-end with a focus on smooth mobile UX.",
    stack: ["React Native", "TypeScript", "Node.js", "React"],
    credits: ["milan-blaz"],
    year: "2023 – 2024",
    image: vidPoster("reaction-club"),
    video: {
      src: vid("reaction-club"),
      poster: vidPoster("reaction-club"),
    },
    liveUrl: "https://www.reaction-club.com/",
    liveLabel: "Live",
  },
  {
    slug: "instant-monte-carlo",
    client: "Instant Monte Carlo",
    industry: "Hospitality · Monaco",
    oneLiner:
      "Concierge app for Monte-Carlo experiences — booking, events, tables, and instant access.",
    details:
      "Polished native-feel mobile product. Map-driven discovery, live availability, and a hand-crafted UI built to match a luxury brand.",
    stack: ["React Native", "TypeScript", "Node.js"],
    credits: ["milan-blaz"],
    year: "2024",
    image: vidPoster("instant-monte-carlo"),
    video: {
      src: vid("instant-monte-carlo"),
      poster: vidPoster("instant-monte-carlo"),
    },
    liveUrl: "https://instantmontecarlo.app/",
    liveLabel: "Live",
  },
  {
    slug: "insurance-ai",
    client: "AI-Driven Insurance (POC)",
    industry: "Insurance · AI",
    oneLiner:
      "Proof-of-concept app where users record vehicle damage on video and AI returns actionable insurance feedback.",
    details:
      "Mobile video capture → backend vision pipeline → structured feedback for insurers. Validated an end-to-end AI-assisted claim flow in weeks, not quarters.",
    stack: ["React Native", "TypeScript", "Node.js", "AI / vision"],
    credits: ["milan-blaz"],
    year: "2024",
    image: vidPoster("insurance-ai"),
    video: {
      src: vid("insurance-ai"),
      poster: vidPoster("insurance-ai"),
    },
  },
  {
    slug: "vivant",
    client: "Vivant",
    industry: "Video streaming · wine",
    oneLiner:
      "Resource-intensive React Native + Next.js platform for live wine-advisor streaming, 4K presentations, quizzes and interactive modules.",
    details:
      "Monorepo with shared React logic and platform-specific rendering. WebRTC, Socket.io, Video.js. Owned iOS + Android releases and CI/CD on Bitrise.",
    stack: ["React Native", "Next.js", "Redux", "WebRTC", "Socket.io", "Bitrise"],
    credits: ["milan-blaz"],
    year: "2019 – 2022",
    image: img("vivant-1"),
    gallery: [
      img("vivant-1"),
      img("vivant-2"),
      img("vivant-3"),
      img("vivant-4"),
      img("vivant-5"),
      img("vivant-6"),
      img("vivant-7"),
      img("vivant-8"),
    ],
  },
  {
    slug: "sparwk",
    client: "Sparwk",
    industry: "Music industry platform",
    oneLiner:
      "React / Next.js platform plus a companion React Native app for solving artist credits claims.",
    details:
      "Led initial repo setup and architecture for both platforms, built a custom UI component library, and configured Bitrise CI/CD for automated TestFlight and Play Store releases.",
    stack: ["React", "Next.js", "React Native", "TypeScript", "Bitrise"],
    credits: ["milan-blaz", "milan-susnjar"],
    year: "2022 – 2023",
    image: img("sparwk-1"),
    gallery: [img("sparwk-1"), img("sparwk-2"), img("sparwk-3")],
  },
  {
    slug: "myvaillant-pro",
    client: "myVAILLANT Pro",
    industry: "HVAC · white-label",
    oneLiner:
      "Heating device maintenance app for service technicians with 3 sub-brand white-label variants.",
    details:
      "Identifies heater errors, serves PDF manuals, and graphs water temperature/pressure in real time. An architecture that let every Vaillant sub-brand ship a private-label build from the same codebase.",
    stack: ["React Native", "React", "JavaScript", "GCP", "App Center"],
    credits: ["milan-susnjar", "ensar-bavrk"],
    year: "2018 – 2022",
    image: img("myvaillant-pro"),
    liveUrl: "https://myvaillantpro.vaillant.com/",
    liveLabel: "Live",
  },
];
