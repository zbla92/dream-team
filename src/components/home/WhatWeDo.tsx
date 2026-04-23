import {
  Code2,
  Server,
  Database,
  Rocket,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    icon: Code2,
    title: "Full-stack web development",
    body: "React, Next.js and TypeScript on the front; Node.js and PostgreSQL behind. Built for scale, not for demos.",
  },
  {
    icon: Server,
    title: "Backend systems & APIs",
    body: "REST and GraphQL APIs, auth, event pipelines, background jobs — the parts that have to keep working at 3am.",
  },
  {
    icon: Database,
    title: "Data-heavy applications",
    body: "Analytics surfaces, real-time dashboards, multi-tenant SaaS schemas. We default to Postgres and keep the stack boring.",
  },
  {
    icon: Rocket,
    title: "MVP → production systems",
    body: "From first prototype to a production system your customers actually use. Same team, same repo, no rewrites.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted development",
    body: "Claude Code, Cursor, and custom pipelines embedded in how we work — not a demo feature.",
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
            Five things we do well — no fluff.
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
