import Reveal from "@/components/Reveal";
import { STATS } from "@/lib/constants";

export default function WhoWeAre() {
  return (
    <section id="who" className="relative z-10 py-20 md:py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
              {"// who you actually work with"}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-mono text-3xl md:text-4xl leading-tight text-fg mb-6 max-w-2xl">
              Three senior engineers. The same three, every week.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-fg-muted text-base md:text-lg leading-relaxed mb-4 max-w-2xl">
              We&apos;re not an agency, not a body shop, not a roster of
              freelancers picked at random per project. We&apos;re three senior
              engineers — 10+ years each — who have shipped together long enough
              to skip the coordination tax. The names on the proposal are the
              names committing to your repo.
            </p>
            <p className="text-fg-muted text-base md:text-lg leading-relaxed max-w-2xl">
              When a project needs DevOps, AI/ML, design, or QA depth we
              don&apos;t have, we plug in a vetted specialist by the hour — no
              minimum retainer, no padded headcount. You see the bench. You
              approve every hour.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-5 md:sticky md:top-28">
          <div className="grid grid-cols-2 gap-3">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.05}>
                <div className="border border-border rounded-lg p-5 md:p-6 bg-surface/50">
                  <div className="font-mono text-2xl md:text-3xl text-accent">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-fg-muted mt-2">
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
