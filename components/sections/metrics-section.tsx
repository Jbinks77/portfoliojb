import { metrics } from "@/lib/data";

export function MetricsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-2xl font-semibold text-cyan-200">{metric.value}</p>
            <p className="text-sm text-white/70">{metric.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-white/40">* Résultats observés selon projets.</p>
    </section>
  );
}
