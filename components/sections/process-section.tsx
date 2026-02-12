import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Process</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {processSteps.map((step, i) => (
          <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs text-cyan-200">0{i + 1}</p>
            <p className="mt-2 font-medium text-white">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
