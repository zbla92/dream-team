import Reveal from "@/components/Reveal";
import { STATS } from "@/lib/constants";

export default function WhoWeAre() {
  return (
    <section id="who" className="relative z-10 py-20 md:py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
              {"// who we are"}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-mono text-3xl md:text-4xl leading-tight text-fg mb-6 max-w-2xl">
              A long-term team, not a freelancer roster.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-fg-muted text-base md:text-lg leading-relaxed mb-4 max-w-2xl">
              We are a dedicated team of senior engineers who have worked
              together for years. That continuity is why we can move fast,
              communicate clearly, and deliver consistently — without the
              coordination tax of strangers building your product.
            </p>
            <p className="text-fg-muted text-base md:text-lg leading-relaxed max-w-2xl">
              We own the whole delivery, from architecture to deployment, and
              stay accountable for what we ship. No agency middle layer, no
              hand-offs, no retainers for slideware.
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
