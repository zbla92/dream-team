import BackgroundDecor from "@/components/BackgroundDecor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import CaseStudies from "@/components/CaseStudies";
import HeroMarquee from "@/components/HeroMarquee";
import Stack from "@/components/Stack";
import Process from "@/components/Process";
import Engagement from "@/components/Engagement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundDecor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <CaseStudies />
        <HeroMarquee />
        <Stack />
        <Process />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
