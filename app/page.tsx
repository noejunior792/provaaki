import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Features />
      <Testimonials />
      <CTASection />
    </div>
  );
}