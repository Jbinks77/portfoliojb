"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects, type ProjectType } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimpleDialog } from "@/components/ui/dialog";

type Filter = "Tout" | ProjectType;
const filters: Filter[] = ["Tout", "Vitrine", "Landing", "E-commerce"];

export function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("Tout");
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const filtered = useMemo(() => (filter === "Tout" ? projects : projects.filter((p) => p.type === filter)), [filter]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h1 className="text-4xl font-semibold text-white">Mes créations</h1>
      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((item) => (
          <Button key={item} variant={filter === item ? "default" : "secondary"} size="sm" onClick={() => setFilter(item)}>{item}</Button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <Card key={project.title} className="cursor-pointer overflow-hidden transition hover:border-cyan-300/30" onClick={() => setActiveProject(project)}>
            <div className="h-36 bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/20" />
            <CardHeader><CardTitle>{project.title}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-white/70">{project.description}</p>
              <p className="mt-2 text-xs text-cyan-200">{project.stack.join(" • ")}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-2 py-1 text-xs text-white/70">{tag}</span>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <SimpleDialog
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title ?? ""}
        description={activeProject?.description}
      >
        {activeProject && (
          <div className="space-y-3 text-sm text-white/80">
            <p><span className="text-white">Objectif:</span> {activeProject.objective}</p>
            <p><span className="text-white">Features:</span> {activeProject.features.join(" • ")}</p>
            <p><span className="text-white">Stack:</span> {activeProject.stack.join(" • ")}</p>
            <Button asChild size="sm"><a href={activeProject.link} target="_blank" rel="noreferrer">Voir le site <ExternalLink className="ml-2 h-4 w-4" /></a></Button>
          </div>
        )}
      </SimpleDialog>
    </section>
  );
}
