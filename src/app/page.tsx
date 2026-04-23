import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import WhatWeDo from "@/components/home/WhatWeDo";
import HowWeWork from "@/components/home/HowWeWork";
import AiAdvantage from "@/components/home/AiAdvantage";
import WorkPreview from "@/components/home/WorkPreview";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <HowWeWork />
      <AiAdvantage />
      <WorkPreview />
      <CtaSection />
    </>
  );
}
