import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <section className="relative z-10 pt-28 md:pt-32 pb-20 md:pb-24 px-6">
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
            real users across Switzerland, Monaco, Germany and beyond. Tap any
            project to read the full case study.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
