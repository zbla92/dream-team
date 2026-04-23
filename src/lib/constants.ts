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
  tagline: "Full-Stack Development Team for Scalable Web Products",
  subline:
    "We build data-heavy web platforms using React, Node.js, and AI-assisted development.",
  domain: "dream-team.dev",
  url: "https://dream-team.dev",
  contactEmail: "hello@dream-team.dev",
  founded: 2024,
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "33+", label: "years combined" },
  { value: "25+", label: "apps shipped" },
  { value: "8", label: "industries" },
  { value: "3–5", label: "team size" },
];

export const BOOK_CALL_MAILTO = `mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent("Let's schedule a call")}&body=${encodeURIComponent(
  "Hi — I'd like to book a call about a project.\n\nCompany:\nRough scope:\nTimeline:"
)}`;
