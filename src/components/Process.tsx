import { Users, GitBranch, Sparkles, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS = [
  {
    icon: Users,
    title: "Dedicated team",
    body:
      "We work as one unit — architecture, development, testing and delivery. No hand-offs, no middlemen.",
  },
  {
    icon: GitBranch,
    title: "Own the SDLC",
    body:
      "From the first line of code to production deploys. Infra, CI/CD, monitoring, iteration — included.",
  },
  {
    icon: Sparkles,
    title: "AI-native workflow",
    body:
      "Claude Code, Cursor and custom pipelines are part of how we work — not a bolt-on. We move fast without sacrificing quality.",
  },
  {
    icon: Rocket,
    title: "Weekly shipping",
    body:
      "Short feedback loops, fast onboarding, visible progress. We default to shipping working software every week.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative z-10 py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// process"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-3xl md:text-5xl leading-tight text-fg mb-4">
            How we work.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-16">
            Built around shipping — not process theatre.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={0.1 + i * 0.05}>
                <div className="border border-border rounded-xl p-6 bg-surface/40 h-full hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg border border-accent/30 bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-mono text-lg text-fg mb-2">{p.title}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
