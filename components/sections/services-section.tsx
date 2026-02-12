import { services } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Services premium</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-glow" style={{ transformStyle: "preserve-3d" }}>
            <CardHeader>
              <service.icon className="h-6 w-6 text-cyan-200" />
              <CardTitle className="mt-3">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70">{service.details}</p>
              <p className="mt-4 text-sm font-medium text-violet-200">{service.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
