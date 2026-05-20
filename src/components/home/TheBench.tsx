import {
  Server,
  Brain,
  Palette,
  Smartphone,
  TestTube2,
  Lock,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const BENCH = [
  {
    icon: Server,
    role: "DevOps / SRE",
    body: "Kubernetes, CI/CD, observability, on-call setup. Plug in for the migration, leave it production-grade.",
  },
  {
    icon: Brain,
    role: "AI / ML engineer",
    body: "RAG pipelines, vector stores, LLM evals, fine-tunes. We bring depth when the product needs more than a chat box.",
  },
  {
    icon: Palette,
    role: "Product designer",
    body: "Flows, wireframes, polished UI. Works directly with engineering — no Figma-to-spec handoff loss.",
  },
  {
    icon: Smartphone,
    role: "Mobile (React Native)",
    body: "iOS + Android, native modules when needed. Already shipped to App Store and Play across 8 industries.",
  },
  {
    icon: TestTube2,
    role: "QA automation",
    body: "Playwright, Detox, contract tests. We bring in real coverage when the app is past the move-fast-and-break-things phase.",
  },
  {
    icon: Lock,
    role: "Security review",
    body: "Threat modelling, dependency audits, secrets handling. Brought in before the SOC2 / GDPR audit, not after.",
  },
];

export default function TheBench() {
  return (
    <section
      id="bench"
      className="relative z-10 py-20 md:py-28 px-6 border-t border-border"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// the bench"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-3xl md:text-4xl leading-tight text-fg mb-4 max-w-2xl">
            Specialists on call. By the hour. No retainer.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-12 leading-relaxed">
            When the project needs depth we don&apos;t carry full-time, we
            bring in a vetted specialist for the hours it takes. You see who.
            You approve before they start. No padded headcount.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENCH.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.role} delay={0.1 + i * 0.05}>
                <div className="border border-border rounded-xl p-6 bg-surface/40 h-full hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg border border-accent/30 bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-mono text-lg text-fg mb-2">{b.role}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {b.body}
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
