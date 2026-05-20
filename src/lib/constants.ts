export const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dekljoqsm/image/upload";
export const CLD_ROOT = `${CLOUDINARY_BASE}/dream-team`;

export const cld = (
  path: string,
  transforms: string = "f_auto,q_auto"
): string => `${CLOUDINARY_BASE}/${transforms}/dream-team/${path}`;

export const SITE_CONFIG = {
  name: "NoAgency",
  short: "NoAgency",
  tagline: "The senior engineers you actually met. No swap.",
  subline:
    "Three senior engineers who build it themselves, plus a bench of specialists on call by the hour. Direct comms, no agency middle layer, no juniors at week three.",
  domain: "noagency.dev",
  url: "https://noagency.dev",
  contactEmail: "hello@noagency.dev",
  founded: 2024,
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "33+", label: "years combined" },
  { value: "25+", label: "products shipped" },
  { value: "0", label: "swap rate" },
  { value: "3+", label: "specialists on call" },
];

export const BOOK_CALL_MAILTO = `mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent("Booking a 20-minute call")}&body=${encodeURIComponent(
  "Hi — I'd like a short call about a project.\n\nCompany:\nWhat we're building:\nWhere we're stuck (or what we need):\nTimeline:\n"
)}`;
