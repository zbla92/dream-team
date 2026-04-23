import { cld } from "./constants";

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  year: string;
  /** 1–2 sentences on the business problem */
  problem: string;
  /** What we built, in plain language */
  solution: string;
  /** Outcome: a metric or shipped state */
  result: string;
  stack: string[];
  credits: string[];
  liveUrl?: string;
  liveLabel?: string;
  storeUrls?: {
    ios?: string;
    android?: string;
  };
  /** Card hero image / video poster */
  image: string;
  /** Optional auto-cycling gallery */
  gallery?: string[];
  /** Optional looping preview video */
  video?: {
    src: string;
    poster: string;
  };
}

// ---------- Image helpers ----------

const img = (slug: string, w = 1600, h = 1000) =>
  cld(`projects/${slug}`, `f_auto,q_auto,c_fill,w_${w},h_${h}`);

// Orion Fit Studio shots already live under dekljoqsm/client-onboarding/*.
// Use them directly — no mirror needed.
const orionImg = (file: string, w = 1290, h = 2796) =>
  `https://res.cloudinary.com/dekljoqsm/image/upload/f_auto,q_auto,c_limit,w_${w},h_${h}/client-onboarding/${file}`;

// MindSaid shots mirrored to dream-team/projects/mindsaid/*
const mindsaidImg = (file: string) =>
  `https://res.cloudinary.com/dekljoqsm/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/dream-team/projects/mindsaid/${file}`;

// Video helpers
const VIDEO_BASE = "https://res.cloudinary.com/dekljoqsm/video/upload";
const vid = (slug: string) =>
  `${VIDEO_BASE}/f_auto,q_auto,vc_auto,c_limit,w_1280,h_1280/dream-team/projects/${slug}.mp4`;
const vidPoster = (slug: string) =>
  `${VIDEO_BASE}/f_auto,q_auto,so_1,c_limit,w_1600,h_1600/dream-team/projects/${slug}.jpg`;

// ---------- Projects ----------

export const PROJECTS: CaseStudy[] = [
  {
    slug: "orion-fit-studio",
    client: "Orion Fitness Studio",
    industry: "Fitness · SaaS + mobile",
    year: "2024 – now",
    problem:
      "Personal trainers juggle spreadsheets, WhatsApp, and three different apps to run training plans, nutrition, and client progress. The context loss makes it hard to deliver a premium coaching experience.",
    solution:
      "A native mobile platform for trainers and clients — programming, workout tracking, nutrition logging, analytics, and in-app messaging in one place. Built with React Native + Expo against a Node.js / Postgres backend, shipping to iOS and Android from a single codebase.",
    result:
      "Live on the App Store and Google Play. 500+ active users, 50+ trainers, 4.9★ average rating.",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Cloudinary",
    ],
    credits: ["milan-blaz"],
    liveUrl: "https://www.orion-fit.com/en",
    liveLabel: "orion-fit.com",
    storeUrls: {
      ios: "https://apps.apple.com/il/app/orion-fitness-studio/id6754841074",
      android:
        "https://play.google.com/store/apps/details?id=com.milanblaz.fitmeapp",
    },
    image: orionImg("21_client_can_now_login_and_see_home_screen"),
    gallery: [
      orionImg("21_client_can_now_login_and_see_home_screen"),
      orionImg("28_client_looks_at_workout_screen"),
      orionImg("36_client_can_see_analytics"),
      orionImg("39_client_sees_nutrition_screen"),
      orionImg("41_client_adding_meal"),
      orionImg(
        "25_client_can_update_goal_weight_and_see_in_widget_as_well_as_steps_sleep_data"
      ),
    ],
  },
  {
    slug: "orion-gym",
    client: "Orion Gym",
    industry: "Gym management · SaaS",
    year: "2024 – now",
    problem:
      "Gyms rely on paper registers, generic POS software, and manual check-ins. They lack real-time visibility into attendance, renewals, and revenue — and members hate waiting at the desk.",
    solution:
      "A gym-management mobile app with QR-based contactless check-in, membership and renewal tracking, class scheduling, revenue analytics, and staff administration. Shares infrastructure with the Orion Fit Studio platform.",
    result:
      "Shipped to the App Store; running in production gyms with contactless check-in replacing the manual front-desk flow.",
    stack: ["React Native", "Expo", "TypeScript", "Node.js", "PostgreSQL"],
    credits: ["milan-blaz"],
    liveUrl: "https://www.orion-fit.com/en",
    liveLabel: "orion-fit.com",
    storeUrls: {
      ios: "https://apps.apple.com/il/app/orion-gym/id6759008998",
    },
    image: orionImg("20_trainer_can_see_new_client_on_client_screen"),
    gallery: [
      orionImg("20_trainer_can_see_new_client_on_client_screen"),
      orionImg("23_trainer_can_see_analytics_screen_from_client_but_its_empty_as_its_a_new_client"),
      orionImg("07_trainer_invite_client"),
      orionImg("18_trainer_opens_app_and_sees_pending_clientpng"),
    ],
  },
  {
    slug: "mindsaid",
    client: "MindSaid",
    industry: "Mental health · mobile",
    year: "2025",
    problem:
      "When thoughts loop or emotions spike, most tools ask you to analyse, track, or calm down — right when you can't. People need a way to notice what's happening without friction, and without their voice being recorded or sent anywhere.",
    solution:
      "A privacy-first mobile app built end-to-end: speak your thoughts out loud, hear them back, and step out of loops with guided exercises (STOP, two-minute start, breathing). Everything runs on-device — no recordings, no cloud, no account.",
    result:
      "Live on the App Store and Google Play. Cross-platform, zero data collection, no accounts required.",
    stack: ["React Native", "Expo", "TypeScript", "on-device audio"],
    credits: ["ensar-bavrk"],
    liveUrl: "https://mindsaid.bavrk.com/",
    liveLabel: "mindsaid.bavrk.com",
    storeUrls: {
      ios: "https://apps.apple.com/us/app/mindsaid/id6758176248",
      android: "https://play.google.com/store/apps/details?id=com.bavrk.mindsaid",
    },
    image: mindsaidImg("dashboard"),
    gallery: [
      mindsaidImg("dashboard"),
      mindsaidImg("emotion"),
      mindsaidImg("breathing"),
    ],
  },
  {
    slug: "coop-finance",
    client: "Coop Finance Plus",
    industry: "Fintech · Switzerland",
    year: "2023 – now",
    problem:
      "Switzerland's largest retailer wanted to bring banking, insurance, and 3a/3b pensions under a single consumer brand — with in-app card provisioning that works across Apple, Google, and Samsung wallets.",
    solution:
      "Expo-based iOS + Android app integrating Futurae, IDNow and twint, with native Swift/Kotlin bridges for the secure wallet-provisioning paths. Shared component system and release pipeline.",
    result:
      "Live on the App Store and Play Store, powering wealth-tech access for Coop's retail base.",
    stack: ["TypeScript", "React Native", "Expo", "Swift", "Kotlin"],
    credits: ["ensar-bavrk"],
    liveUrl: "https://apps.apple.com/ch/app/coop-finance/id6449426048",
    liveLabel: "App Store",
    storeUrls: {
      ios: "https://apps.apple.com/ch/app/coop-finance/id6449426048",
      android: "https://play.google.com/store/apps/details?id=ch.coop.financeplus",
    },
    image: img("coop-finance"),
  },
  {
    slug: "myvaillant-pro",
    client: "myVAILLANT Pro",
    industry: "HVAC · white-label",
    year: "2018 – 2022",
    problem:
      "Heating-system service engineers needed a mobile tool to diagnose devices on-site across dozens of sub-brands, without shipping a separate codebase per brand.",
    solution:
      "A React Native app that identifies heating-device errors, serves PDF manuals, and graphs water temperature and pressure live. The architecture supports white-label builds for every Vaillant sub-brand from the same code.",
    result:
      "Three production white-label variants shipped; live at myvaillantpro.vaillant.com.",
    stack: ["React Native", "React", "JavaScript", "GCP", "App Center"],
    credits: ["milan-susnjar", "ensar-bavrk"],
    liveUrl: "https://myvaillantpro.vaillant.com/",
    liveLabel: "myvaillantpro.vaillant.com",
    image: img("myvaillant-pro"),
  },
  {
    slug: "reaction-club",
    client: "Reaction Club",
    industry: "Health & fitness",
    year: "2023 – 2024",
    problem:
      "Fitness tracking apps are solo and data-heavy. Most people need social accountability more than another dashboard.",
    solution:
      "Cross-platform mobile + web product that turns daily activity into a shared fitness experience: real-time feeds, challenges, leaderboards. Built end-to-end from RN clients to the Node.js backend.",
    result:
      "Shipped and live at reaction-club.com.",
    stack: ["React Native", "TypeScript", "Node.js", "React"],
    credits: ["milan-blaz"],
    liveUrl: "https://www.reaction-club.com/",
    liveLabel: "reaction-club.com",
    image: vidPoster("reaction-club"),
    video: { src: vid("reaction-club"), poster: vidPoster("reaction-club") },
  },
  {
    slug: "instant-monte-carlo",
    client: "Instant Monte Carlo",
    industry: "Hospitality · Monaco",
    year: "2024",
    problem:
      "Luxury concierge services still run on WhatsApp and phone calls. Guests want instant access to experiences, tables, and events — without talking to anyone.",
    solution:
      "A native-feel concierge app for Monte-Carlo: map-driven discovery, live availability, bookable experiences, and a hand-crafted UI matched to a luxury brand.",
    result:
      "Live at instantmontecarlo.app.",
    stack: ["React Native", "TypeScript", "Node.js"],
    credits: ["milan-blaz"],
    liveUrl: "https://instantmontecarlo.app/",
    liveLabel: "instantmontecarlo.app",
    image: vidPoster("instant-monte-carlo"),
    video: { src: vid("instant-monte-carlo"), poster: vidPoster("instant-monte-carlo") },
  },
  {
    slug: "vivant",
    client: "Vivant",
    industry: "Video streaming · wine",
    year: "2019 – 2022",
    problem:
      "Vivant wanted live, 4K wine-advisor streaming on mobile — with quizzes, music, and multi-party interaction — something standard video-streaming SDKs weren't built for.",
    solution:
      "Resource-intensive React Native + Next.js platform built on WebRTC, Socket.io and Video.js. Monorepo with shared React logic and platform-specific rendering; owned iOS and Android releases and CI/CD on Bitrise.",
    result:
      "Shipped to iOS and Android; powered the live sommelier sessions and 4K presentation surface.",
    stack: ["React Native", "Next.js", "Redux", "WebRTC", "Socket.io", "Bitrise"],
    credits: ["milan-blaz"],
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
];

// Homepage preview: pick 3 distinct projects (mobile SaaS, privacy app, fintech)
export const FEATURED_PROJECT_SLUGS = [
  "orion-fit-studio",
  "mindsaid",
  "coop-finance",
];

export const FEATURED_PROJECTS = FEATURED_PROJECT_SLUGS.map(
  (slug) => PROJECTS.find((p) => p.slug === slug)!
);
