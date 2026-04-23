import { Sparkles, Zap, ShieldCheck, Wallet } from "lucide-react";
import Reveal from "@/components/Reveal";

const POINTS = [
  {
    icon: Zap,
    title: "Faster iteration",
    body: "Weekly shipping instead of quarterly. AI pair-programming and custom pipelines compress the space between idea and deploy.",
  },
  {
    icon: ShieldCheck,
    title: "Better code quality",
    body: "More tests, more reviews, more types — at less marginal cost. AI catches the dumb stuff so humans focus on the hard stuff.",
  },
  {
    icon: Wallet,
    title: "Cost efficiency",
    body: "Higher output per engineer. Fewer bugs in production. Shorter ramps on legacy code. The ROI shows up in your bill.",
  },
];

export default function AiAdvantage() {
  return (
    <section id="ai" className="relative z-10 py-20 md:py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// ai advantage"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-3xl md:text-4xl leading-tight text-fg mb-4 max-w-3xl">
            AI tools are part of how we build — not a feature we sell.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-12 leading-relaxed">
            We actively use Claude Code, Cursor, and custom internal pipelines
            to speed up development, reduce bugs, and keep quality high as
            projects scale.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {POINTS.map((p, i) => {
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

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Claude Code",
              "Cursor",
              "Anthropic API",
              "Custom pipelines",
              "Automated review",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 font-mono text-xs text-fg-muted border border-border rounded-full px-3 py-1"
              >
                <Sparkles size={12} className="text-accent" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
