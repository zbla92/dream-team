"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Apple, Play as PlayIcon } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { TEAM } from "@/lib/team";
import Reveal from "@/components/Reveal";
import ProjectMedia from "@/components/ProjectMedia";
import type { CaseStudy } from "@/lib/projects";

const memberBySlug = Object.fromEntries(TEAM.map((m) => [m.slug, m]));

function StoreButtons({ urls }: { urls: NonNullable<CaseStudy["storeUrls"]> }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-3">
      {urls.ios && (
        <a
          href={urls.ios}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted hover:text-accent transition-colors border border-border rounded-full px-3 py-1.5"
        >
          <Apple size={12} /> App Store
        </a>
      )}
      {urls.android && (
        <a
          href={urls.android}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted hover:text-accent transition-colors border border-border rounded-full px-3 py-1.5"
        >
          <PlayIcon size={12} /> Google Play
        </a>
      )}
    </div>
  );
}

function Body({ p }: { p: CaseStudy }) {
  return (
    <div className="p-6 md:p-8 flex flex-col flex-1 min-w-0">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="min-w-0">
          <h3 className="font-mono text-xl md:text-2xl text-fg leading-tight">
            {p.client}
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-wider text-fg-muted mt-1">
            {p.industry} · {p.year}
          </p>
        </div>
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

      <dl className="space-y-4 md:space-y-5">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-1.5">
            Problem
          </dt>
          <dd className="text-sm md:text-[15px] text-fg-muted leading-relaxed">
            {p.problem}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-1.5">
            Solution
          </dt>
          <dd className="text-sm md:text-[15px] text-fg-muted leading-relaxed">
            {p.solution}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-1.5">
            Result
          </dt>
          <dd className="text-sm md:text-[15px] text-fg leading-relaxed">
            {p.result}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
            Stack
          </dt>
          <dd>
            <ul className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="font-mono text-[10px] uppercase tracking-wider text-fg-muted border border-border rounded-full px-2 py-0.5"
                >
                  {s}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      {p.storeUrls && <StoreButtons urls={p.storeUrls} />}

      <div className="mt-auto flex items-center gap-2 pt-6 border-t border-border mt-6">
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
      className="group relative border border-border rounded-xl overflow-hidden bg-surface/40 hover:border-accent/40 hover:bg-surface/70 transition-colors flex flex-col md:flex-row"
    >
      <div className="relative w-full md:w-[340px] lg:w-[400px] aspect-[9/16] md:aspect-auto md:min-h-[560px] shrink-0 overflow-hidden bg-black">
        <ProjectMedia project={p} hovered={hovered} />
      </div>
      <Body p={p} />
    </motion.article>
  );
}

function StandardCard({ p, index }: { p: CaseStudy; index: number }) {
  const [hovered, setHovered] = useState(false);
  const isPortraitGallery =
    !!p.gallery?.length &&
    (p.gallery[0]?.includes("client-onboarding") ||
      p.gallery[0]?.includes("mindsaid"));

  if (isPortraitGallery) {
    // Portrait gallery → same side-by-side layout as video cards
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
        className="group relative border border-border rounded-xl overflow-hidden bg-surface/40 hover:border-accent/40 hover:bg-surface/70 transition-colors flex flex-col md:flex-row"
      >
        <div className="relative w-full md:w-[340px] lg:w-[400px] aspect-[9/16] md:aspect-auto md:min-h-[560px] shrink-0 overflow-hidden bg-black flex items-center justify-center">
          <ProjectMedia project={p} hovered={hovered} />
        </div>
        <Body p={p} />
      </motion.article>
    );
  }

  // Landscape hero + body underneath
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
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-transparent pointer-events-none" />
      </div>
      <Body p={p} />
    </motion.article>
  );
}

export default function ProjectList() {
  return (
    <section className="relative z-10 py-16 md:py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// all work"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-mono text-4xl md:text-5xl leading-tight text-fg mb-4 max-w-3xl">
            Products we&apos;ve designed, built, and shipped.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-12 md:mb-16">
            Mobile, web, and backend — live in stores, in gyms, in front of
            real users across Switzerland, Monaco, Germany and beyond.
          </p>
        </Reveal>

        <div className="grid gap-6">
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
