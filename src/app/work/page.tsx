import type { Metadata } from "next";
import ProjectList from "@/components/work/ProjectList";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work — Case Studies",
  description:
    "Real products we've shipped: Orion Fit Studio, Orion Gym, MindSaid, Coop Finance Plus, myVAILLANT Pro, Reaction Club, Instant Monte Carlo, Vivant. Built with React, Node.js, and AI-assisted development.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work — Case Studies | Dream Team",
    description:
      "Real products shipped across fintech, mobile SaaS, HVAC, hospitality and health.",
    url: `${SITE_CONFIG.url}/work`,
    type: "website",
  },
};

export default function WorkPage() {
  return <ProjectList />;
}
