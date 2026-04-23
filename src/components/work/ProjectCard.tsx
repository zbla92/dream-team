"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/projects";
import { isPortraitProject } from "@/lib/projects";
import PhoneFrame from "@/components/PhoneFrame";

function PortraitThumb({ p }: { p: CaseStudy }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px" });
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!p.gallery || p.gallery.length < 2) return;
    if (!inView) return;
    const id = window.setInterval(
      () => setIdx((i) => (p.gallery ? (i + 1) % p.gallery.length : 0)),
      3000
    );
    return () => window.clearInterval(id);
  }, [p.gallery, inView]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative flex items-end justify-center w-full pt-8 pb-3 overflow-hidden"
    >
      {/* soft aura so the card has depth */}
      <div
        aria-hidden
        className="absolute inset-x-8 top-6 bottom-0 rounded-full blur-3xl bg-accent/10"
      />
      <PhoneFrame widthClass="w-40 sm:w-44">
        {p.video ? (
          <>
            <Image
              src={p.video.poster}
              alt=""
              fill
              sizes="224px"
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
          </>
        ) : p.gallery && p.gallery.length > 0 ? (
          p.gallery.map((g, i) => (
            <Image
              key={g}
              src={g}
              alt={p.client}
              fill
              sizes="224px"
              className={[
                "object-cover transition-opacity duration-[1200ms]",
                i === idx ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />
          ))
        ) : (
          <Image
            src={p.image}
            alt={p.client}
            fill
            sizes="224px"
            className="object-cover"
          />
        )}
      </PhoneFrame>
    </div>
  );
}

function LandscapeThumb({ p }: { p: CaseStudy }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image
        src={p.image}
        alt={p.client}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
    </div>
  );
}

export default function ProjectCard({
  p,
  index,
}: {
  p: CaseStudy;
  index: number;
}) {
  const portrait = isPortraitProject(p);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/work/${p.slug}`}
        className="group block border border-border rounded-xl overflow-hidden bg-surface/40 hover:border-accent/40 hover:bg-surface/70 transition-colors h-full"
      >
        <div className="relative bg-gradient-to-b from-surface-hi to-surface border-b border-border">
          {portrait ? <PortraitThumb p={p} /> : <LandscapeThumb p={p} />}
          <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider text-accent bg-background/70 border border-accent/30 rounded-full px-2 py-0.5 backdrop-blur-sm">
            {p.industry}
          </span>
        </div>
        <div className="p-5">
          <h2 className="font-mono text-lg text-fg group-hover:text-accent transition-colors">
            {p.client}
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-wider text-fg-dim mt-0.5">
            {p.year}
          </p>
          <p className="text-sm text-fg-muted leading-relaxed mt-3 line-clamp-3">
            {p.solution}
          </p>

          <ul className="flex flex-wrap gap-1.5 mt-4">
            {p.stack.slice(0, 4).map((s) => (
              <li
                key={s}
                className="font-mono text-[10px] uppercase tracking-wider text-fg-muted border border-border rounded-full px-2 py-0.5"
              >
                {s}
              </li>
            ))}
            {p.stack.length > 4 && (
              <li className="font-mono text-[10px] text-fg-dim px-1">
                +{p.stack.length - 4}
              </li>
            )}
          </ul>

          <span className="mt-5 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-accent">
            View case study
            <ArrowRight
              size={13}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
