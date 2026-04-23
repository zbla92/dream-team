import { STATS } from "@/lib/constants";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10 md:gap-12 items-start">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
              {"// about"}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-mono text-3xl md:text-5xl leading-tight text-fg mb-8">
              A tight-knit team of senior engineers who design, build, and
              deliver together.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-fg-muted text-base md:text-lg leading-relaxed mb-4">
              We&apos;re three senior full-stack engineers with{" "}
              <span className="text-fg">33+ years of combined experience</span>{" "}
              shipping production web and mobile apps across fintech, wealth-tech,
              HVAC, IoT, safety-systems and consumer products. We&apos;ve worked
              together long-term — no hand-offs, no freelancer roulette.
            </p>
            <p className="text-fg-muted text-base md:text-lg leading-relaxed">
              Our edge is speed without the usual trade-offs:{" "}
              <span className="text-fg">AI-native workflows</span> (Claude Code,
              Cursor, custom pipelines), strong ownership from architecture to
              deployment, and a bias toward shipping working software weekly.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-5 md:sticky md:top-32">
          <div className="grid grid-cols-2 gap-3">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.05}>
                <div className="border border-border rounded-lg p-6 bg-surface/50 hover:border-accent/30 transition-colors">
                  <div className="font-mono text-3xl md:text-4xl text-accent">
                    {s.value}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-fg-muted mt-2">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
