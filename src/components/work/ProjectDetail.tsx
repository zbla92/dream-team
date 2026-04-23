"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Apple,
  Play as PlayIcon,
  Mail,
  Calendar,
} from "lucide-react";
import type { CaseStudy } from "@/lib/projects";
import { isPortraitProject } from "@/lib/projects";
import { TEAM } from "@/lib/team";
import { BOOK_CALL_MAILTO, SITE_CONFIG } from "@/lib/constants";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/Reveal";

const memberBySlug = Object.fromEntries(TEAM.map((m) => [m.slug, m]));

// ---------- Hero media block ----------

function HeroVideo({ p }: { p: CaseStudy }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(wrapRef, { margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView]);

  if (!p.video) return null;
  return (
    <div ref={wrapRef} className="flex justify-center">
      <PhoneFrame widthClass="w-64 md:w-72">
        <Image
          src={p.video.poster}
          alt=""
          fill
          sizes="288px"
          className="object-cover"
          aria-hidden
        />
        <video
          ref={videoRef}
          src={p.video.src}
          poster={p.video.poster}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </PhoneFrame>
    </div>
  );
}

function HeroPortraitStack({ p }: { p: CaseStudy }) {
  const shots = (p.gallery && p.gallery.length > 0 ? p.gallery : [p.image]).slice(0, 3);
  return (
    <div className="relative flex items-center justify-center gap-3 md:gap-5 py-6 md:py-10">
      {shots.map((src, i) => {
        const offset = i - (shots.length - 1) / 2;
        const tilt = offset * 6;
        const translate = offset * 4;
        return (
          <motion.div
            key={src + i}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: tilt,
              x: translate,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1 * i,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
            style={{ zIndex: shots.length - Math.abs(offset) }}
          >
            <PhoneFrame widthClass="w-40 md:w-52 lg:w-56">
              <Image src={src} alt={p.client} fill sizes="224px" className="object-cover" priority={i === 1} />
            </PhoneFrame>
          </motion.div>
        );
      })}
    </div>
  );
}

function HeroLandscape({ p }: { p: CaseStudy }) {
  return (
    <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border bg-surface-hi">
      <Image
        src={p.image}
        alt={p.client}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
    </div>
  );
}

function HeroMedia({ p }: { p: CaseStudy }) {
  if (p.video) return <HeroVideo p={p} />;
  if (isPortraitProject(p)) return <HeroPortraitStack p={p} />;
  return <HeroLandscape p={p} />;
}

// ---------- Full gallery (portrait sweep) ----------

function FullGallery({ p }: { p: CaseStudy }) {
  if (!p.gallery || p.gallery.length <= 1) return null;
  const portrait = isPortraitProject(p);
  return (
    <section className="border-t border-border py-16 md:py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// gallery"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-2xl md:text-3xl text-fg mb-10">
            Screens.
          </h2>
        </Reveal>
        {portrait ? (
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-thin">
            {p.gallery.map((src, i) => (
              <div key={src} className="snap-start shrink-0">
                <PhoneFrame widthClass="w-48 md:w-56">
                  <Image
                    src={src}
                    alt={`${p.client} screen ${i + 1}`}
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </PhoneFrame>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {p.gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border bg-surface-hi"
              >
                <Image
                  src={src}
                  alt={`${p.client} screen ${i + 1}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ---------- Page ----------

type Props = {
  project: CaseStudy;
  prev: CaseStudy | null;
  next: CaseStudy | null;
};

export default function ProjectDetail({ project: p, prev, next }: Props) {
  return (
    <article>
      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-10 md:pb-14 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              All work
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
              {p.industry} · {p.year}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-fg mb-6">
              {p.client}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-lg md:text-xl text-fg-muted leading-relaxed max-w-3xl">
              {p.solution}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider bg-accent text-background px-4 py-2 rounded-full hover:bg-accent/90 transition-all"
                >
                  {p.liveLabel ?? "Live"} <ArrowUpRight size={12} />
                </a>
              )}
              {p.storeUrls?.ios && (
                <a
                  href={p.storeUrls.ios}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-fg-muted border border-border hover:text-accent hover:border-accent/40 rounded-full px-3 py-2 transition-all"
                >
                  <Apple size={12} /> App Store
                </a>
              )}
              {p.storeUrls?.android && (
                <a
                  href={p.storeUrls.android}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-fg-muted border border-border hover:text-accent hover:border-accent/40 rounded-full px-3 py-2 transition-all"
                >
                  <PlayIcon size={12} /> Google Play
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero media */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl">
          <HeroMedia p={p} />
        </div>
      </section>

      {/* Problem / Solution / Result / Stack */}
      <section className="py-16 md:py-24 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-6 md:gap-8">
          <Reveal>
            <div className="border border-border rounded-xl p-6 md:p-8 bg-surface/40 h-full">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
                Problem
              </p>
              <p className="text-base md:text-lg text-fg-muted leading-relaxed">
                {p.problem}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="border border-border rounded-xl p-6 md:p-8 bg-surface/40 h-full">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
                Solution
              </p>
              <p className="text-base md:text-lg text-fg-muted leading-relaxed">
                {p.solution}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-accent/40 rounded-xl p-6 md:p-8 bg-accent/5 h-full accent-glow md:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
                Result
              </p>
              <p className="text-base md:text-lg text-fg leading-relaxed">
                {p.result}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="md:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim mb-3">
                Stack
              </p>
              <ul className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="font-mono text-xs uppercase tracking-wider text-fg border border-border-hi rounded-full px-3 py-1.5"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <FullGallery p={p} />

      {/* Credits */}
      <section className="border-t border-border py-16 md:py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
              {"// built by"}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {p.credits.map((slug) => {
              const m = memberBySlug[slug];
              if (!m) return null;
              return (
                <Reveal key={slug}>
                  <div className="flex items-start gap-3 border border-border rounded-xl p-4 bg-surface/40">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface-hi shrink-0">
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-sm text-fg">{m.name}</p>
                      <p className="font-mono text-[11px] text-fg-muted">
                        {m.role}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prev / Next + CTA */}
      <section className="border-t border-border py-16 md:py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group block border border-border rounded-xl p-6 bg-surface/40 hover:border-accent/40 transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim mb-2">
                  ← Previous
                </p>
                <p className="font-mono text-lg text-fg group-hover:text-accent transition-colors">
                  {prev.client}
                </p>
                <p className="text-sm text-fg-muted mt-1 line-clamp-2">
                  {prev.industry}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group block border border-border rounded-xl p-6 bg-surface/40 hover:border-accent/40 transition-colors md:text-right"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim mb-2">
                  Next →
                </p>
                <p className="font-mono text-lg text-fg group-hover:text-accent transition-colors">
                  {next.client}
                </p>
                <p className="text-sm text-fg-muted mt-1 line-clamp-2">
                  {next.industry}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>

          <div className="text-center">
            <Reveal>
              <h3 className="font-mono text-2xl md:text-3xl text-fg mb-4">
                Building something similar?
              </h3>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-fg-muted mb-8 max-w-lg mx-auto">
                We can usually start within a week.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={BOOK_CALL_MAILTO}
                  className="group font-mono text-sm uppercase tracking-wider bg-accent text-background px-6 py-3 rounded-full hover:bg-accent/90 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Calendar size={16} />
                  Book a call
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(`About ${p.client}`)}`}
                  className="group font-mono text-sm uppercase tracking-wider border border-border-hi text-fg px-6 py-3 rounded-full hover:border-accent/50 hover:text-accent transition-all inline-flex items-center justify-center gap-2"
                >
                  <Mail size={16} />
                  {SITE_CONFIG.contactEmail}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </article>
  );
}
