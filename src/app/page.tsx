import LandingHeader from "@/components/landing/LandingHeader";
import HeroSection from "@/components/landing/HeroSection";
import TrustLogos from "@/components/landing/TrustLogos";
import LegalRiskSection from "@/components/landing/LegalRiskSection";
import BentoFeatures from "@/components/landing/BentoFeatures";
import HowItWorks from "@/components/landing/HowItWorks";
import { PricingCalculator } from "@/components/landing/PricingCalculator";
import TestimonialsCarousel from "@/components/landing/TestimonialsCarousel";
import FAQSection from "@/components/landing/FAQSection";
import LandingFooter from "@/components/landing/LandingFooter";

const faqItems = [
  {
    question: "¿Es obligatorio fichar en España?",
    answer:
      "Sí. Desde 2019, todas las empresas y autónomos con empleados están obligados a registrar la jornada laboral según el Real Decreto-ley 8/2019.",
  },
  {
    question: "¿Qué pasa si no tengo un sistema de fichaje?",
    answer:
      "La Inspección de Trabajo puede sancionar a la empresa con multas que van desde 60 € hasta 187.515 €, dependiendo de la gravedad y reincidencia.",
  },
  {
    question: "¿Fichados cumple con la normativa laboral?",
    answer:
      "Sí. Fichados cumple el Real Decreto-ley 8/2019, permite registrar entrada, salida y pausas, y conserva los registros durante más de 4 años, tal y como exige la ley.",
  },
  {
    question: "¿Sirve Fichados en una inspección de trabajo?",
    answer:
      "Sí. Puedes exportar los registros oficiales en PDF en cualquier momento y presentarlos directamente ante la Inspección de Trabajo.",
  },
  {
    question: "¿Mis empleados tienen que instalar algo?",
    answer:
      "No. Tus empleados pueden fichar desde cualquier navegador, en móvil, tablet o ordenador. Sin apps ni instalaciones.",
  },
  {
    question: "¿Mis empleados pueden modificar fichajes?",
    answer:
      "No. Los registros son inalterables por el empleado, garantizando su validez legal.",
  },
  {
    question: "¿Tiene permanencia?",
    answer:
      "No. Sin permanencia ni compromiso. Puedes darte de baja cuando quieras.",
  },
  {
    question: "¿Cuánto tardo en empezar a cumplir la ley?",
    answer:
      "Menos de 1 minuto. Creas la cuenta, invitas a tu equipo y ya cumples la normativa desde el primer día.",
  },
];

export default function Home() {
  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Fichados",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Sistema de fichaje online conforme al Real Decreto-ley 8/2019. Registro de jornada laboral obligatorio en España.",
    url: "https://fichados.es",
    offers: {
      "@type": "Offer",
      price: "9",
      priceCurrency: "EUR",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "8",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd),
        }}
      />

      <LandingHeader />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Section - Institutional Logos */}
      <TrustLogos />

      {/* Legal Risk Section - Two Boxes */}
      <LegalRiskSection />

      {/* Bento Features - How it works internally */}
      <BentoFeatures />

      {/* How it Works - 3 Steps */}
      <HowItWorks />

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Precio simple. Sin letra pequeña.
            </h2>
          </div>

          <PricingCalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <div id="testimonios">
        <TestimonialsCarousel />
      </div>

      {/* FAQ Section */}
      <FAQSection />

      <LandingFooter />
    </div>
  );
}
