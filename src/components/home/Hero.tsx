"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Check } from "lucide-react";
import { SITE_CONFIG, BOOK_CALL_MAILTO } from "@/lib/constants";

const BULLETS = [
  "Dedicated team (not freelancers)",
  "6–10+ years experience",
  "Fast, reliable delivery",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-20 md:pb-24 px-6">
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-accent mb-6"
        >
          <span className="caret mr-1">›</span> senior full-stack team · EST{" "}
          {SITE_CONFIG.founded}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-fg max-w-4xl"
        >
          Full-Stack Development Team{" "}
          <span className="text-fg-muted">for </span>
          <span className="text-fg relative inline-block">
            Scalable Web Products
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent/60" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 text-base md:text-xl text-fg-muted max-w-2xl leading-relaxed"
        >
          {SITE_CONFIG.subline}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6"
        >
          {BULLETS.map((b) => (
            <li
              key={b}
              className="inline-flex items-center gap-2 text-sm text-fg"
            >
              <Check size={16} className="text-accent shrink-0" />
              {b}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
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
          <Link
            href="/work"
            className="group font-mono text-sm uppercase tracking-wider border border-border-hi text-fg px-6 py-3 rounded-full hover:border-accent/50 hover:text-accent transition-all inline-flex items-center justify-center gap-2"
          >
            View work
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
