"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, Globe, MapPin } from "lucide-react";
import { TEAM } from "@/lib/team";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section id="team" className="relative z-10 py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// team"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-3xl md:text-5xl leading-tight text-fg mb-4">
            Three seniors. One team.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-2xl mb-16">
            No juniors to babysit, no agency markup. Just the people who will
            actually build and ship your product.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TEAM.map((m, i) => (
            <Reveal key={m.slug} delay={0.1 + i * 0.08}>
              <article className="group relative border border-border rounded-xl p-6 bg-surface/40 hover:border-accent/40 hover:bg-surface/70 transition-all h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border border-border-hi bg-surface-hi shrink-0 group-hover:border-accent/50 transition-colors">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-mono text-lg text-fg">{m.name}</h3>
                    <p className="text-sm text-fg-muted">{m.role}</p>
                    <p className="font-mono text-xs text-fg-dim mt-1 flex items-center gap-1">
                      <MapPin size={11} />
                      {m.location} · {m.yearsExperience}+ yrs
                    </p>
                  </div>
                </div>

                <p className="text-sm text-fg-muted leading-relaxed mt-5">
                  {m.bio}
                </p>

                <ul className="flex flex-wrap gap-1.5 mt-5">
                  {m.skills.slice(0, 6).map((s) => (
                    <li
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-wider text-fg-dim border border-border rounded-full px-2 py-0.5"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 flex items-center gap-2">
                  <a
                    href={`mailto:${m.links.email}`}
                    aria-label={`Email ${m.name}`}
                    className="p-2 rounded-full border border-border text-fg-muted hover:text-accent hover:border-accent/40 transition-all"
                  >
                    <Mail size={15} />
                  </a>
                  {m.links.linkedin && (
                    <a
                      href={m.links.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${m.name} on LinkedIn`}
                      className="p-2 rounded-full border border-border text-fg-muted hover:text-accent hover:border-accent/40 transition-all"
                    >
                      <Linkedin size={15} />
                    </a>
                  )}
                  {m.links.github && (
                    <a
                      href={m.links.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${m.name} on GitHub`}
                      className="p-2 rounded-full border border-border text-fg-muted hover:text-accent hover:border-accent/40 transition-all"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {m.links.website && (
                    <a
                      href={m.links.website}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${m.name} website`}
                      className="p-2 rounded-full border border-border text-fg-muted hover:text-accent hover:border-accent/40 transition-all"
                    >
                      <Globe size={15} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
