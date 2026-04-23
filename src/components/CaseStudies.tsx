"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { TEAM } from "@/lib/team";
import Reveal from "./Reveal";
import ProjectMedia from "./ProjectMedia";
import type { CaseStudy } from "@/lib/projects";

const memberBySlug = Object.fromEntries(TEAM.map((m) => [m.slug, m]));

function Body({ p }: { p: CaseStudy }) {
  return (
    <div className="p-6 md:p-7 flex flex-col flex-1 min-w-0">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-mono text-lg md:text-xl text-fg">{p.client}</h3>
        {p.liveUrl && (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="shrink-0 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted hover:text-accent transition-colors border border-border rounded-full px-2 py-1"
          >
            {p.liveLabel ?? "Live"} <ArrowUpRight size={11} />
          </a>
        )}
      </div>

      <p className="text-sm text-fg-muted leading-relaxed mb-3">{p.oneLiner}</p>
      <p className="text-[13px] text-fg-dim leading-relaxed mb-5">{p.details}</p>

      <ul className="flex flex-wrap gap-1.5 mb-5">
        {p.stack.map((s) => (
          <li
            key={s}
            className="font-mono text-[10px] uppercase tracking-wider text-fg-muted border border-border rounded-full px-2 py-0.5"
          >
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-2 pt-4 border-t border-border">
        <span className="font-mono text-[10px] uppercase tracking-wider text-fg-dim">
          Built by
        </span>
        <div className="flex items-center gap-1.5">
          {p.credits.map((slug) => {
            const m = memberBySlug[slug];
            if (!m) return null;
            return (
              <span key={slug} className="font-mono text-[11px] text-fg-muted">
                {m.name.split(" ")[0]}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Chips({
  industry,
  year,
  gallery,
}: {
  industry: string;
  year: string;
  gallery?: unknown[];
}) {
  return (
    <>
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10 gap-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-accent bg-background/70 border border-accent/30 rounded-full px-2 py-0.5 backdrop-blur-sm truncate">
          {industry}
        </span>
        <span className="font-mono text-[10px] text-fg-muted bg-background/70 border border-border rounded-full px-2 py-0.5 backdrop-blur-sm shrink-0">
          {year}
        </span>
      </div>
      {gallery && gallery.length > 1 && (
        <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wider text-fg-muted bg-background/70 border border-border rounded-full px-2 py-0.5 backdrop-blur-sm z-10">
          {gallery.length} shots
        </span>
      )}
    </>
  );
}

function VideoCard({ p, index }: { p: CaseStudy; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="md:col-span-2 group relative border border-border rounded-xl overflow-hidden bg-surface/40 hover:border-accent/40 hover:bg-surface/70 transition-colors flex flex-col md:flex-row"
    >
      {/* Media: aspect 9:16 on mobile (portrait hero), fixed width on desktop */}
      <div className="relative w-full md:w-[340px] lg:w-[400px] aspect-[9/16] md:aspect-auto md:min-h-[520px] shrink-0 overflow-hidden bg-black">
        <ProjectMedia project={p} hovered={hovered} />
        <Chips industry={p.industry} year={p.year} />
      </div>

      <Body p={p} />
    </motion.article>
  );
}

function StandardCard({ p, index }: { p: CaseStudy; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative border border-border rounded-xl overflow-hidden bg-surface/40 hover:border-accent/40 hover:bg-surface/70 transition-colors h-full flex flex-col"
    >
      <div className="relative aspect-[16/10] bg-surface-hi overflow-hidden">
        <ProjectMedia project={p} hovered={hovered} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent pointer-events-none" />
        <Chips
          industry={p.industry}
          year={p.year}
          gallery={p.gallery}
        />
      </div>
      <Body p={p} />
    </motion.article>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="relative z-10 py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// work"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-3xl md:text-5xl leading-tight text-fg mb-4">
            Selected case studies.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-12 md:mb-16">
            Shipped products across fintech, hospitality, health, music, HVAC
            and insurance — many live on the App Store and Play Store.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {PROJECTS.map((p, i) =>
            p.video ? (
              <VideoCard key={p.slug} p={p} index={i} />
            ) : (
              <StandardCard key={p.slug} p={p} index={i} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
