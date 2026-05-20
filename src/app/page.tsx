import Hero from "@/components/home/Hero";
import AgencySwitch from "@/components/home/AgencySwitch";
import WhoWeAre from "@/components/home/WhoWeAre";
import WhatWeDo from "@/components/home/WhatWeDo";
import TheBench from "@/components/home/TheBench";
import HowWeWork from "@/components/home/HowWeWork";
import Engagement from "@/components/home/Engagement";
import AiAdvantage from "@/components/home/AiAdvantage";
import WorkPreview from "@/components/home/WorkPreview";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AgencySwitch />
      <WhoWeAre />
      <WhatWeDo />
      <TheBench />
      <HowWeWork />
      <Engagement />
      <AiAdvantage />
      <WorkPreview />
      <CtaSection />
    </>
  );
}
