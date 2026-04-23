import Reveal from "@/components/Reveal";

const STEPS = [
  {
    num: "01",
    title: "Architecture & planning",
    body: "Understand the business problem, sketch the system, agree on scope and the shortest path to a real user seeing value.",
  },
  {
    num: "02",
    title: "Development (AI-assisted)",
    body: "Ship weekly. AI-native workflows (Claude Code, Cursor, custom pipelines) compress feedback loops without compressing quality.",
  },
  {
    num: "03",
    title: "Testing",
    body: "Types, automated tests, and real-device checks. No separate QA hand-off — the engineer who shipped it is the one who verified it.",
  },
  {
    num: "04",
    title: "Delivery & iteration",
    body: "Containerised deploys, monitoring, and fast-turnaround iteration once real users are hitting it. Ownership doesn't stop at launch.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how" className="relative z-10 py-20 md:py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// how we work"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-3xl md:text-4xl leading-tight text-fg mb-4 max-w-2xl">
            Ownership from architecture to delivery.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-12">
            Four steps. Speed + quality, bias to shipping.
          </p>
        </Reveal>

        <ol className="grid md:grid-cols-2 gap-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={0.1 + i * 0.05}>
              <li className="border border-border rounded-xl p-6 bg-surface/40 h-full hover:border-accent/30 transition-colors">
                <div className="font-mono text-accent text-xs uppercase tracking-[0.3em] mb-3">
                  Step {s.num}
                </div>
                <h3 className="font-mono text-lg md:text-xl text-fg mb-3">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-fg-muted leading-relaxed">
                  {s.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
