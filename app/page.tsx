import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import TrustLogos from "@/components/landing/TrustLogos";
import RiskSolution from "@/components/landing/RiskSolution";
import BentoFeatures from "@/components/landing/BentoFeatures";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingCalculator from "@/components/landing/PricingCalculator";
import TestimonialsCarousel from "@/components/landing/TestimonialsCarousel";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustLogos />
      <RiskSolution />
      <BentoFeatures />
      <HowItWorks />
      <section
        id="pricing"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Precio simple. Sin letra pequeña.
            </h2>
          </div>
          <PricingCalculator />
        </div>
      </section>
      <div id="testimonios">
        <TestimonialsCarousel />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}
