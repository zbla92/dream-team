"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-24 pb-16"
    >
      {/* scanline */}
      {!reduced && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
        >
          <div
            className="scanline absolute inset-x-0 h-24"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(124,255,179,0.05), transparent)",
            }}
          />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* meta line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-accent mb-6 md:mb-8"
        >
          <span className="caret mr-1">›</span> senior full-stack team · EST{" "}
          {SITE_CONFIG.founded}
        </motion.p>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight"
        >
          <span className="block text-fg">We ship products</span>
          <span className="block text-fg-muted">
            others{" "}
            <span className="text-fg relative">
              plan
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent/60" />
            </span>
            .
          </span>
        </motion.h1>

        {/* subline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-fg-muted max-w-2xl mx-auto"
        >
          {SITE_CONFIG.subline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href="#work"
            className="group font-mono text-xs sm:text-sm uppercase tracking-wider bg-accent text-background px-6 py-3 rounded-full hover:bg-accent/90 transition-all inline-flex items-center gap-2"
          >
            See our work
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="group font-mono text-xs sm:text-sm uppercase tracking-wider border border-border-hi text-fg px-6 py-3 rounded-full hover:border-accent/50 hover:text-accent transition-all inline-flex items-center gap-2"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </motion.div>

        {/* chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 md:mt-12 flex flex-wrap gap-2 justify-center"
        >
          {["Next.js", "React Native", "Node", "TypeScript", "AWS", "AI-native"].map(
            (t) => (
              <span
                key={t}
                className="font-mono text-[10px] sm:text-xs text-fg-muted border border-border rounded-full px-3 py-1"
              >
                {t}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
