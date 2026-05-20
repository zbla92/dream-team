import {
  Rocket,
  Layers,
  Wrench,
  Plug,
  Sparkles,
  Gauge,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    icon: Rocket,
    title: "POC in 2–4 weeks",
    body: "You need to show traction or close a customer before you can hire. We build the working demo — not a prototype slide, a thing your users can press.",
  },
  {
    icon: Layers,
    title: "MVP to production",
    body: "From first commit to a product real customers pay for. Same team, same repo, no rewrites between phases.",
  },
  {
    icon: Plug,
    title: "Augment your eng team",
    body: "Drop us into your existing repo for 4–12 weeks. We ship the feature you can't hire for fast enough, then hand it back clean.",
  },
  {
    icon: Wrench,
    title: "Modernize what you outgrew",
    body: "The Series A codebase that's slowing the Series B. We rewrite incrementally — no big-bang migrations, no production outages.",
  },
  {
    icon: Gauge,
    title: "Ship the feature that's blocking revenue",
    body: "One specific thing, scoped, priced, delivered. You don't need a 6-month engagement to unblock the integration your top customer needs.",
  },
  {
    icon: Sparkles,
    title: "AI-native delivery",
    body: "Claude Code, Cursor, custom pipelines baked into how we ship. Faster cycles, fewer regressions — the ROI lands on your invoice.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what" className="relative z-10 py-20 md:py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// what we do"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-3xl md:text-4xl leading-tight text-fg mb-12 max-w-2xl">
            Six things funded startups hire us for.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={0.1 + i * 0.05}>
                <div className="border border-border rounded-xl p-6 bg-surface/40 h-full hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg border border-accent/30 bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-mono text-lg text-fg mb-2">{s.title}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {s.body}
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
