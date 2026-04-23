export const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dekljoqsm/image/upload";
export const CLD_ROOT = `${CLOUDINARY_BASE}/dream-team`;

export const cld = (
  path: string,
  transforms: string = "f_auto,q_auto"
): string => `${CLOUDINARY_BASE}/${transforms}/dream-team/${path}`;

export const SITE_CONFIG = {
  name: "Dream Team",
  short: "Dream Team",
  tagline: "We ship products others plan.",
  subline:
    "A senior full-stack team that designs, builds and deploys production web & mobile apps — fast, with AI-native workflows.",
  domain: "dream-team.dev",
  url: "https://dream-team.dev",
  contactEmail: "hello@dream-team.dev",
  founded: 2024,
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "33+", label: "years combined" },
  { value: "25+", label: "apps shipped" },
  { value: "8", label: "industries" },
  { value: "3–5", label: "team size" },
];
