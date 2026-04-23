import { ArrowRight, Mail, Linkedin, Globe, Github } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { TEAM } from "@/lib/team";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 md:py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            {"// contact"}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-mono text-4xl md:text-6xl leading-tight text-fg mb-6">
            Let&apos;s build something.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-fg-muted md:text-lg max-w-xl mx-auto mb-12">
            Tell us what you&apos;re working on. We reply within a day and can
            start within a week.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${SITE_CONFIG.contactEmail}?subject=Project%20inquiry`}
            className="group inline-flex items-center gap-3 font-mono text-base md:text-lg bg-accent text-background px-7 py-4 rounded-full hover:bg-accent/90 transition-all accent-glow"
          >
            <Mail size={18} />
            {SITE_CONFIG.contactEmail}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 pt-10 border-t border-border">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-dim mb-6">
              Or reach out directly
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {TEAM.map((m) => (
                <div
                  key={m.slug}
                  className="flex items-center gap-2 border border-border rounded-full pl-3 pr-1 py-1 bg-surface/40"
                >
                  <span className="font-mono text-xs text-fg-muted">
                    {m.name}
                  </span>
                  <div className="flex items-center gap-0.5">
                    <a
                      href={`mailto:${m.links.email}`}
                      aria-label={`Email ${m.name}`}
                      className="p-1.5 rounded-full text-fg-muted hover:text-accent transition-colors"
                    >
                      <Mail size={12} />
                    </a>
                    {m.links.linkedin && (
                      <a
                        href={m.links.linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${m.name} on LinkedIn`}
                        className="p-1.5 rounded-full text-fg-muted hover:text-accent transition-colors"
                      >
                        <Linkedin size={12} />
                      </a>
                    )}
                    {m.links.github && (
                      <a
                        href={m.links.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${m.name} on GitHub`}
                        className="p-1.5 rounded-full text-fg-muted hover:text-accent transition-colors"
                      >
                        <Github size={12} />
                      </a>
                    )}
                    {m.links.website && (
                      <a
                        href={m.links.website}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${m.name} website`}
                        className="p-1.5 rounded-full text-fg-muted hover:text-accent transition-colors"
                      >
                        <Globe size={12} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
