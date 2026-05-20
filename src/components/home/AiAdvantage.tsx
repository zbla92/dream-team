import { Sparkles, Zap, ShieldCheck, Wallet } from "lucide-react";
import Reveal from "@/components/Reveal";

const POINTS = [
  {
    icon: Zap,
    title: "Weeks, not quarters",
    body: "Weekly shipping is the default. AI pair-programming compresses the gap between Linear ticket and merged PR.",
  },
  {
    icon: ShieldCheck,
    title: "Fewer regressions",
    body: "More tests, more reviews, more types — at less marginal cost. AI catches the dumb stuff so senior engineers focus on the hard stuff.",
  },
  {
    icon: Wallet,
    title: "ROI on your invoice",
    body: "Higher output per engineer. Fewer bugs in production. Shorter ramp on the legacy code we inherit. The math shows up in the bill.",
  },
];

export default function AiAdvantage() {
  return (
    <section id="ai" className="relative z-10 py-20 md:py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// ai-native delivery"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-3xl md:text-4xl leading-tight text-fg mb-4 max-w-3xl">
            AI is how we build — not a feature we resell.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-12 leading-relaxed">
            Claude Code, Cursor, and custom pipelines are baked into our daily
            workflow. We don&apos;t demo AI to you — we ship faster because of
            it.
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
