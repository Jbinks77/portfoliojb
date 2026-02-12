import { HeroSection } from "@/components/sections/hero-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WidgetsSection } from "@/components/sections/widgets-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <MetricsSection />
      <ProcessSection />
      <WidgetsSection />
    </>
  );
}
