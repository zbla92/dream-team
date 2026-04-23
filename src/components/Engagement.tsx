import { Check } from "lucide-react";
import Reveal from "./Reveal";

const MODELS = [
  {
    label: "Full-time dedicated",
    size: "3–5 engineers",
    duration: "3+ months",
    fits: [
      "Building a product from zero",
      "Replacing a slow in-house team",
      "Heavy product roadmap with weekly releases",
    ],
  },
  {
    label: "Long-term partnership",
    size: "2–4 engineers",
    duration: "6+ months",
    fits: [
      "Own a product area end-to-end",
      "Scale up or down as the roadmap shifts",
      "Stable, senior extension of your team",
    ],
    highlighted: true,
  },
  {
    label: "Product-focused sprints",
    size: "2–3 engineers",
    duration: "4–12 weeks",
    fits: [
      "Shipping a new feature or MVP fast",
      "Rescuing a stalled build",
      "Prototyping an AI-assisted workflow",
    ],
  },
];

export default function Engagement() {
  return (
    <section id="engagement" className="relative z-10 py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// engagement"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-3xl md:text-5xl leading-tight text-fg mb-4">
            Flexible engagement.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-16">
            Pick the shape that fits. Scale up or down as the product evolves.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {MODELS.map((m, i) => (
            <Reveal key={m.label} delay={0.1 + i * 0.05}>
              <div
                className={[
                  "relative rounded-xl p-6 h-full flex flex-col transition-colors",
                  m.highlighted
                    ? "border border-accent/50 bg-accent/5 accent-glow"
                    : "border border-border bg-surface/40 hover:border-accent/30",
                ].join(" ")}
              >
                {m.highlighted && (
                  <span className="absolute -top-2.5 left-6 font-mono text-[10px] uppercase tracking-[0.2em] bg-accent text-background px-2 py-0.5 rounded-full">
                    Most chosen
                  </span>
                )}
                <h3 className="font-mono text-xl text-fg mb-3">{m.label}</h3>
                <div className="flex items-center gap-3 font-mono text-xs text-fg-muted mb-6">
                  <span>{m.size}</span>
                  <span className="text-fg-dim">·</span>
                  <span>{m.duration}</span>
                </div>
                <ul className="space-y-3 mt-auto">
                  {m.fits.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-fg-muted"
                    >
                      <Check
                        size={14}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
