import { Package, Users, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

const MODELS = [
  {
    icon: Package,
    name: "Project",
    tagline: "Fixed scope, fixed price",
    body: "POC, MVP, or a specific feature. We scope it together, agree on a number, ship it. Best when you know what you need but can't hire for it.",
    fit: "POC · MVP · scoped feature",
  },
  {
    icon: Users,
    name: "Dedicated team",
    tagline: "Three engineers, monthly",
    body: "All three of us, focused on your product, for 3+ months. Bench specialists plugged in by the hour as needed. Best when you've got a product to build and no in-house team yet.",
    fit: "Pre-seed → Series B build-out",
  },
  {
    icon: Clock,
    name: "Augmentation",
    tagline: "By the hour, plug-in",
    body: "One or more of us drop into your existing repo and stand-ups. Ship the feature blocking revenue, then hand it back clean. Best when you have engineers but not enough of them.",
    fit: "Existing team · capacity gap",
  },
];

export default function Engagement() {
  return (
    <section
      id="engagement"
      className="relative z-10 py-20 md:py-28 px-6 border-t border-border"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// how to engage"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-3xl md:text-4xl leading-tight text-fg mb-4 max-w-2xl">
            Three ways to work with us.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-12 leading-relaxed">
            Pricing is a 20-minute conversation, not a checkout. Pick the shape
            that fits your stage.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {MODELS.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.name} delay={0.1 + i * 0.05}>
                <div className="border border-border rounded-xl p-6 bg-surface/40 h-full hover:border-accent/30 transition-colors flex flex-col">
                  <div className="w-10 h-10 rounded-lg border border-accent/30 bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-mono text-xl text-fg mb-1">{m.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
                    {m.tagline}
                  </p>
                  <p className="text-sm text-fg-muted leading-relaxed mb-6 flex-1">
                    {m.body}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-fg-dim mb-1">
                      Best fit
                    </p>
                    <p className="text-xs text-fg">{m.fit}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
