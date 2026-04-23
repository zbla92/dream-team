"use client";

import Image from "next/image";
import { PROJECTS } from "@/lib/projects";

// Collect thumbnail frames across projects — prefer gallery variety,
// fall back to hero image for single-image projects. Video posters are
// included via the `image` field which is already the `so_1` poster URL.
const FRAMES: { src: string; alt: string }[] = (() => {
  const out: { src: string; alt: string }[] = [];
  for (const p of PROJECTS) {
    if (p.gallery && p.gallery.length) {
      for (const g of p.gallery) out.push({ src: g, alt: p.client });
    } else {
      out.push({ src: p.image, alt: p.client });
    }
  }
  return out;
})();

const TRACK = [...FRAMES, ...FRAMES];

export default function HeroMarquee() {
  return (
    <div className="relative w-full overflow-hidden select-none py-8 md:py-12 border-y border-border/60">
      <div
        aria-hidden
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex gap-3 animate-[marquee_80s_linear_infinite] will-change-transform">
          {TRACK.map((f, i) => (
            <div
              key={`${f.src}-${i}`}
              className="relative shrink-0 h-16 w-24 md:h-20 md:w-32 rounded-md overflow-hidden border border-border bg-surface"
            >
              <Image
                src={f.src}
                alt=""
                fill
                sizes="128px"
                className="object-cover opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
