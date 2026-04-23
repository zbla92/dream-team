import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PROJECTS,
  getProject,
  getAdjacentProjects,
} from "@/lib/projects";
import { SITE_CONFIG } from "@/lib/constants";
import ProjectDetail from "@/components/work/ProjectDetail";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.client} — Case Study`;
  const description = `${p.problem} ${p.solution}`.slice(0, 180);
  const url = `${SITE_CONFIG.url}/work/${p.slug}`;
  const ogImage = p.image;
  return {
    title,
    description,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      title: `${p.client} — Case Study | Dream Team`,
      description,
      url,
      type: "article",
      images: [{ url: ogImage, alt: p.client }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.client} — Case Study`,
      description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);
  return <ProjectDetail project={project} prev={prev} next={next} />;
}
