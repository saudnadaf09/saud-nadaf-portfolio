import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card lift flex flex-col gap-3 overflow-hidden">
      {p.image ? (
        <Image src={p.image} alt={p.imageAlt ?? `${p.title} screenshot`} width={640} height={360} unoptimized className="w-full rounded-lg border border-line" />
      ) : (
        <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-line bg-elev text-xs text-muted">
          Screenshot placeholder
        </div>
      )}
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-display text-lg font-semibold">{p.title}</h3>
        <span className="tag">{p.status}</span>
      </div>
      <p className="text-sm text-muted">{p.shortDescription}</p>
      <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
        {p.technologies.slice(0, 4).map((t) => <li key={t} className="tag">{t}</li>)}
      </ul>
      <div className="mt-auto flex flex-wrap gap-3 pt-2 text-sm">
        <Link href={`/projects/${p.slug}`} className="font-medium text-accent hover:underline">View details</Link>
        {p.repositoryUrl && <a href={p.repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">GitHub</a>}
        {p.demoUrl && <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">Live demo</a>}
      </div>
    </article>
  );
}
