"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { FEATURED_PROJECTS } from "@/lib/projects";

export default function WorkPreview() {
  return (
    <section id="work-preview" className="relative z-10 py-20 md:py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
                {"// recent work"}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-mono text-3xl md:text-4xl leading-tight text-fg max-w-2xl">
                Real products we&apos;ve shipped.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/work"
              className="group self-start font-mono text-xs uppercase tracking-wider text-fg hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              All work
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {FEATURED_PROJECTS.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border border-border rounded-xl overflow-hidden bg-surface/40 hover:border-accent/40 hover:bg-surface/70 transition-colors flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-surface-hi overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.client}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent" />
                <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider text-accent bg-background/70 border border-accent/30 rounded-full px-2 py-0.5 backdrop-blur-sm">
                  {p.industry}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-mono text-lg text-fg group-hover:text-accent transition-colors mb-2">
                  {p.client}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed mb-4 line-clamp-3">
                  {p.solution}
                </p>

                <div className="mt-auto pt-4 border-t border-border">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-fg-dim mb-1">
                    Result
                  </p>
                  <p className="text-xs text-fg leading-snug">{p.result}</p>
                </div>

                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-4 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted hover:text-accent transition-colors self-start"
                  >
                    {p.liveLabel ?? "Live"} <ArrowUpRight size={11} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
