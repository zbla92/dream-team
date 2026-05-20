"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Mail,
  AlertTriangle,
  Skull,
  Package,
  Users,
  Clock,
  Check,
} from "lucide-react";
import { SITE_CONFIG, BOOK_CALL_MAILTO } from "@/lib/constants";
import { getProject, type CaseStudy } from "@/lib/projects";
import ProjectCard from "@/components/work/ProjectCard";

const FEATURED_SLUGS = ["orion-fit-studio", "coop-finance", "vivant"];

const BEATS = [
  {
    icon: AlertTriangle,
    label: "The bait",
    body: "You met a senior in the pitch. They had the right answers.",
  },
  {
    icon: ArrowRight,
    label: "The switch",
    body: "Week one, the actual work goes to devs you've never seen.",
  },
  {
    icon: Skull,
    label: "The cost",
    body: "Months of runway, rewriting code from a team you didn't hire.",
  },
];

const MODELS = [
  {
    icon: Package,
    name: "Project",
    tagline: "Fixed scope, fixed price",
    body: "POC, MVP, or a scoped feature. Agreed number, shipped.",
  },
  {
    icon: Users,
    name: "Dedicated team",
    tagline: "Three of us, monthly",
    body: "All three of us, focused on your product, for 3+ months.",
  },
  {
    icon: Clock,
    name: "Augmentation",
    tagline: "By the hour, plug-in",
    body: "Drop into your repo and ship the feature blocking revenue.",
  },
];

const BULLETS = [
  "Same three engineers, week one to launch",
  "No PM filter — direct comms with the people writing the code",
  "Specialists plug in by the hour, no padded retainer",
];

function PitchInner() {
  const params = useSearchParams();
  const senderRaw = params.get("sender") || "";
  const sender = senderRaw.replace(/[^a-z0-9 _-]/gi, "").slice(0, 32);

  const projects = FEATURED_SLUGS
    .map((s) => getProject(s))
    .filter((p): p is CaseStudy => Boolean(p));

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="px-6 pt-24 md:pt-32 pb-16">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-accent mb-6"
          >
            <span className="caret mr-1">›</span> {SITE_CONFIG.name.toLowerCase()} · for {sender || "you"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-mono text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-fg max-w-3xl"
          >
            You opened the email.{" "}
            <span className="text-fg-muted">Here&apos;s the </span>
            <span className="text-fg relative inline-block">
              short version
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent/60" />
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 text-base md:text-lg text-fg-muted max-w-2xl leading-relaxed"
          >
            We&apos;re three senior engineers (10+ years each). Same three on
            the proposal, the standup, and the commits. Specialists on call by
            the hour when we need depth. No agency middle layer, no juniors
            swapped in at week three.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-col gap-2"
          >
            {BULLETS.map((b) => (
              <li
                key={b}
                className="inline-flex items-start gap-2 text-sm md:text-base text-fg"
              >
                <Check size={16} className="text-accent shrink-0 mt-1" />
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a
              href={BOOK_CALL_MAILTO}
              className="group font-mono text-sm uppercase tracking-wider bg-accent text-background px-6 py-3 rounded-full hover:bg-accent/90 transition-all inline-flex items-center justify-center gap-2 accent-glow"
            >
              <Calendar size={16} />
              Book a 20-min call
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="group font-mono text-sm uppercase tracking-wider border border-border-hi text-fg px-6 py-3 rounded-full hover:border-accent/50 hover:text-accent transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              Reply to the email
            </a>
          </motion.div>
        </div>
      </section>

      {/* Agency switch — compressed */}
      <section className="px-6 py-16 md:py-20 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// why we wrote"}
          </p>
          <h2 className="font-mono text-2xl md:text-3xl leading-tight text-fg mb-10 max-w-2xl">
            You&apos;ve probably been through this once already.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {BEATS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.label}
                  className="border border-border rounded-xl p-5 bg-surface/40"
                >
                  <div className="w-9 h-9 rounded-lg border border-accent/30 bg-accent/10 text-accent flex items-center justify-center mb-3">
                    <Icon size={16} />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim mb-2">
                    {b.label}
                  </p>
                  <p className="text-sm text-fg leading-relaxed">{b.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement — compressed */}
      <section className="px-6 py-16 md:py-20 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// how to engage"}
          </p>
          <h2 className="font-mono text-2xl md:text-3xl leading-tight text-fg mb-10 max-w-2xl">
            Three shapes. Pricing is a conversation.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {MODELS.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.name}
                  className="border border-border rounded-xl p-5 bg-surface/40"
                >
                  <div className="w-9 h-9 rounded-lg border border-accent/30 bg-accent/10 text-accent flex items-center justify-center mb-3">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-mono text-lg text-fg mb-1">{m.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent mb-3">
                    {m.tagline}
                  </p>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {m.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured case studies */}
      {projects.length > 0 && (
        <section className="px-6 py-16 md:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
              {"// what we've shipped"}
            </p>
            <h2 className="font-mono text-2xl md:text-3xl leading-tight text-fg mb-10 max-w-2xl">
              Three you might pattern-match on.
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {projects.map((p, i) => (
                <ProjectCard key={p.slug} p={p} index={i} />
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/work"
                className="group font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                See all work
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="px-6 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-mono text-3xl md:text-4xl leading-tight text-fg mb-6">
            20 minutes. No deck. No sales person.
          </h2>
          <p className="text-fg-muted md:text-lg max-w-xl mx-auto mb-10">
            You talk to one of the three. If it&apos;s not a fit, we&apos;ll
            tell you in the call, not after the proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOK_CALL_MAILTO}
              className="group font-mono text-sm uppercase tracking-wider bg-accent text-background px-6 py-3 rounded-full hover:bg-accent/90 transition-all inline-flex items-center justify-center gap-2 accent-glow"
            >
              <Calendar size={16} />
              Book a 20-min call
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="group font-mono text-sm uppercase tracking-wider border border-border-hi text-fg px-6 py-3 rounded-full hover:border-accent/50 hover:text-accent transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              {SITE_CONFIG.contactEmail}
            </a>
          </div>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim">
            {SITE_CONFIG.name} · senior engineers, direct
          </p>
        </div>
      </section>
    </div>
  );
}

export default function PitchPage() {
  return (
    <Suspense fallback={null}>
      <PitchInner />
    </Suspense>
  );
}
