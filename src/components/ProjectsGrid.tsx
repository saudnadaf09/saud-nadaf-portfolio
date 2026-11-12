"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories } from "@/data";

export default function ProjectsGrid() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? projects : projects.filter((p) => p.categories.includes(cat));
  return (
    <div>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${cat === c ? "border-accent bg-accent text-bg" : "border-line text-muted hover:border-accent hover:text-accent"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{shown.length} projects shown</p>
      {shown.length ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      ) : (
        <p className="mt-6 text-muted">No projects in this category yet.</p>
      )}
    </div>
  );
}
