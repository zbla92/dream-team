import Reveal from "./Reveal";

const GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Frontend & Mobile",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Framer Motion",
      "Tailwind",
    ],
  },
  {
    label: "Backend & Cloud",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "GCP",
      "Docker",
    ],
  },
  {
    label: "AI & Workflow",
    items: [
      "Claude Code",
      "Cursor",
      "Anthropic API",
      "OpenAI",
      "Bitrise",
      "GitHub Actions",
      "Cloudinary",
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="relative z-10 py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// stack"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-3xl md:text-5xl leading-tight text-fg mb-4">
            Tools we ship with.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-16">
            A boring, battle-tested core — plus the AI tools that let us move
            5× faster without shipping junk.
          </p>
        </Reveal>

        <div className="space-y-4">
          {GROUPS.map((g, i) => (
            <Reveal key={g.label} delay={0.1 + i * 0.06}>
              <div className="border border-border rounded-xl p-6 bg-surface/40 hover:border-accent/20 transition-colors">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-dim mb-4">
                  {g.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-sm text-fg border border-border-hi rounded-full px-4 py-1.5 hover:text-accent hover:border-accent/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
