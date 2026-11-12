import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return { title: "Project not found" };
  return { title: p.title, description: p.shortDescription, alternates: { canonical: `/projects/${p.slug}` } };
}

export default function ProjectPage({ params }: Props) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent">
        <ArrowLeft size={16} /> All projects
      </Link>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-4xl font-semibold">{p.title}</h1>
        <span className="tag">{p.status}</span>
      </div>
      <p className="mt-2 text-lg text-muted">{p.subtitle}</p>

      {p.image ? (
        <Image src={p.image} alt={p.imageAlt ?? `${p.title} screenshot`} width={1200} height={675} unoptimized className="mt-8 w-full rounded-xl border border-line" />
      ) : (
        <div className="mt-8 flex h-48 items-center justify-center rounded-xl border border-dashed border-line bg-surface text-sm text-muted">
          Screenshot placeholder. Add a real image in /public/projects
        </div>
      )}

      {p.image?.endsWith(".svg") && <p className="mt-2 text-xs text-muted">Concept illustration. Replace with a real screenshot in /public/projects when available.</p>}
      <div className="mt-8 flex flex-wrap gap-3">
        {p.repositoryUrl && <a href={p.repositoryUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Github size={16} /> GitHub</a>}
        {p.demoUrl && <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><ExternalLink size={16} /> Live demo</a>}
      </div>

      <section className="mt-10"><h2 className="font-display text-xl font-semibold">Overview</h2><p className="mt-2 text-muted">{p.fullDescription}</p></section>
      <section className="mt-8">
        <h2 className="font-display text-xl font-semibold">Features</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
      </section>
      <section className="mt-8">
        <h2 className="font-display text-xl font-semibold">Technology</h2>
        <ul className="mt-3 flex flex-wrap gap-1.5">{p.technologies.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
      </section>
      {p.contribution && (
        <section className="mt-8"><h2 className="font-display text-xl font-semibold">My contribution</h2><p className="mt-2 text-muted">{p.contribution}</p></section>
      )}
      {p.limitations && (
        <section className="mt-8"><h2 className="font-display text-xl font-semibold">Limitations</h2><p className="mt-2 text-muted">{p.limitations}</p></section>
      )}
      {p.updated && <p className="mt-10 text-xs text-muted">Last updated {p.updated}</p>}
    </main>
  );
}
