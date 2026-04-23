"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { CaseStudy } from "@/lib/projects";

type Props = {
  project: CaseStudy;
  /** Whether card is currently hovered (used for subtle zoom / emphasis) */
  hovered: boolean;
};

export default function ProjectMedia({ project, hovered }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(wrapRef, { margin: "-10% 0px -10% 0px" });
  const [galleryIdx, setGalleryIdx] = useState(0);

  // Auto-cycle gallery images while visible (every 2.8s)
  useEffect(() => {
    if (!project.gallery || project.gallery.length <= 1) return;
    if (!inView) return;
    const id = window.setInterval(() => {
      setGalleryIdx((i) =>
        project.gallery ? (i + 1) % project.gallery.length : 0
      );
    }, 2800);
    return () => window.clearInterval(id);
  }, [project.gallery, inView]);

  // Always-on muted autoplay for videos, but pause when off-screen to save CPU/bandwidth
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [inView]);

  // --- Video variant (portrait-safe: object-contain, no crop) ---
  if (project.video) {
    return (
      <div ref={wrapRef} className="absolute inset-0 flex items-center justify-center bg-black">
        {/* soft backdrop so portrait video has visual context */}
        <Image
          src={project.video.poster}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover blur-2xl opacity-40 scale-110"
          aria-hidden
        />
        <motion.video
          ref={videoRef}
          src={project.video.src}
          poster={project.video.poster}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          animate={{ scale: hovered ? 1.02 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-h-full max-w-full w-auto h-full object-contain"
        />
      </div>
    );
  }

  // --- Gallery variant: cross-fade ---
  if (project.gallery && project.gallery.length > 1) {
    return (
      <div ref={wrapRef} className="absolute inset-0">
        {project.gallery.map((g, i) => (
          <Image
            key={g}
            src={g}
            alt={project.client}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={[
              "object-cover transition-opacity duration-[1200ms]",
              i === galleryIdx ? "opacity-100" : "opacity-0",
              hovered ? "scale-[1.03]" : "scale-100",
              "transition-transform duration-[1600ms]",
            ].join(" ")}
          />
        ))}
      </div>
    );
  }

  // --- Single image ---
  return (
    <div ref={wrapRef} className="absolute inset-0">
      <Image
        src={project.image}
        alt={project.client}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className={[
          "object-cover transition-transform duration-[1200ms]",
          hovered ? "scale-[1.04]" : "scale-100",
        ].join(" ")}
      />
    </div>
  );
}
