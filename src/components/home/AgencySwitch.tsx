import { AlertTriangle, ArrowRight, Skull } from "lucide-react";
import Reveal from "@/components/Reveal";

const BEATS = [
  {
    label: "The bait",
    body: "You meet a sharp senior engineer in the pitch. They answer every architecture question. You sign.",
  },
  {
    label: "The switch",
    body: "Week one: project kickoff. The sharp one is on calls only. The actual work goes to two devs you've never met.",
  },
  {
    label: "The cost",
    body: "Week four: rewriting their code. Week eight: re-explaining the domain to a third dev. Months of runway gone to a team you didn't hire.",
  },
];

export default function AgencySwitch() {
  return (
    <section
      id="switch"
      className="relative z-10 py-20 md:py-28 px-6 border-t border-border"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// the agency bait-and-switch"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-3xl md:text-4xl leading-tight text-fg mb-6 max-w-3xl">
            You hired a senior. You got a junior at week three.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-12 leading-relaxed">
            Every founder we&apos;ve talked to has the same story. Different
            agency, same pattern.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {BEATS.map((b, i) => (
            <Reveal key={b.label} delay={0.1 + i * 0.05}>
              <div className="border border-border rounded-xl p-6 bg-surface/40 h-full">
                <div className="w-10 h-10 rounded-lg border border-accent/30 bg-accent/10 text-accent flex items-center justify-center mb-4">
                  {i === 0 ? (
                    <AlertTriangle size={18} />
                  ) : i === 1 ? (
                    <ArrowRight size={18} />
                  ) : (
                    <Skull size={18} />
                  )}
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim mb-2">
                  {b.label}
                </p>
                <p className="text-sm md:text-base text-fg leading-relaxed">
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 border-l-2 border-accent pl-6 max-w-3xl">
            <p className="font-mono text-sm md:text-base text-fg leading-relaxed">
              We&apos;re the three you met. We stay on the keyboard. The names
              on the contract are the names committing to your repo — every
              week, for the whole engagement.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
