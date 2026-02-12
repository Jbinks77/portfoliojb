import { DashboardWidget } from "@/components/widgets/dashboard-widget";
import { FaqSearchWidget } from "@/components/widgets/faq-search-widget";
import { PaletteGeneratorWidget } from "@/components/widgets/palette-generator-widget";
import { PerformanceScoreWidget } from "@/components/widgets/performance-score-widget";
import { PricingToggleWidget } from "@/components/widgets/pricing-toggle-widget";
import { TestimonialsCarouselWidget } from "@/components/widgets/testimonials-carousel-widget";

export function WidgetsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Widgets / Démo technique</h2>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <PricingToggleWidget />
        <DashboardWidget />
        <TestimonialsCarouselWidget />
        <PaletteGeneratorWidget />
        <PerformanceScoreWidget />
        <FaqSearchWidget />
      </div>
    </section>
  );
}
