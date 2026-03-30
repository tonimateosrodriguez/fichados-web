import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, X, ArrowRight, Shield } from "lucide-react";
import { competidores, getCompetidorBySlug } from "@/data/competidores";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import DemoVideo from "@/components/landing/DemoVideo";
import { PricingCalculator } from "@/components/landing/PricingCalculator";
import TestimonialsCarousel from "@/components/landing/TestimonialsCarousel";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface PageProps {
  params: Promise<{ competitor: string }>;
}

export async function generateStaticParams() {
  return competidores.map((c) => ({ competitor: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { competitor: slug } = await params;
  const comp = getCompetidorBySlug(slug);
  if (!comp) return {};

  return {
    title: comp.h1,
    description: comp.description,
    openGraph: {
      title: comp.h1,
      description: comp.description,
      type: "website",
    },
  };
}

const STEPS = [
  {
    step: 1,
    title: "Crea tu cuenta",
    desc: "Rellena los datos básicos de tu empresa en menos de 1 minuto. Sin contratos ni permanencia.",
  },
  {
    step: 2,
    title: "Invita a tus empleados",
    desc: "Tus empleados reciben un email y pueden empezar a fichar al instante desde móvil o PC.",
  },
  {
    step: 3,
    title: "Empiezan a fichar",
    desc: "Cumples la ley desde el primer día. Informes listos automáticamente si llega una inspección.",
  },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <div className="flex size-7 items-center justify-center rounded-full bg-green-100">
          <Check className="size-4 text-green-600" />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex items-center justify-center">
        <div className="flex size-7 items-center justify-center rounded-full bg-red-100">
          <X className="size-4 text-red-500" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
        {value}
      </span>
    </div>
  );
}

export default async function CompetitorPage({ params }: PageProps) {
  const { competitor: slug } = await params;
  const comp = getCompetidorBySlug(slug);

  if (!comp) notFound();

  const faqItems = comp.faq;
  const ventajas = comp.ventajas;
  const ctaFinal = comp.ctaFinal;

  const faqJsonLd = faqItems
    ? {
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
      }
    : null;

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <LandingHeader />

      <main className="min-h-screen bg-white">
        {/* -- HERO -- */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text */}
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Comparativa 2026
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {comp.h1}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
                  {comp.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2">
                  <a
                    href="https://app.fichados.es/registro-empresa"
                    className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Cumple la ley hoy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="#demo"
                    className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-8 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50"
                  >
                    Ver demo
                  </a>
                </div>
              </div>

              {/* Video */}
              <div className="relative" id="demo-video">
                <DemoVideo />
                <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* -- TABLA COMPARATIVA DE FEATURES -- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comparativa de funciones
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Fichados vs {comp.nombre}: funcionalidad a funcionalidad.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              {/* Table header */}
              <div className="grid grid-cols-[1fr_100px_100px] border-b border-gray-200 bg-muted/50 px-4 py-3 text-sm font-semibold sm:grid-cols-[1fr_120px_120px] sm:px-6">
                <span className="text-gray-900">Función</span>
                <span className="text-center text-primary">Fichados</span>
                <span className="text-center text-gray-900">{comp.nombre}</span>
              </div>
              {/* Table rows */}
              {comp.features.map((f, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_100px_100px] items-center border-b border-gray-200 px-4 py-3 text-sm last:border-0 sm:grid-cols-[1fr_120px_120px] sm:px-6"
                >
                  <span className="text-gray-600">{f.feature}</span>
                  <FeatureCell value={f.fichados} />
                  <FeatureCell value={f.competidor} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- COMO FUNCIONA -- */}
        <section id="como-funciona" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cómo funciona
              </h2>
              <p className="text-gray-600 text-lg">
                Empieza a cumplir la ley en 3 sencillos pasos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {STEPS.map(({ step, title, desc }) => (
                <div key={step} className="text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://app.fichados.es/registro-empresa"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Shield className="mr-2 h-4 w-4" />
                Empezar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* -- VENTAJAS DE FICHADOS -- */}
        {ventajas && ventajas.length > 0 && (
          <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ventajas de Fichados frente a {comp.nombre}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {ventajas.map((v, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 bg-white shadow-sm rounded-lg p-5 sm:p-6 flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        {v.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* -- PLANES Y PRECIOS -- */}
        <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Planes y precios
              </h2>
            </div>
            <PricingCalculator />
          </div>
        </section>

        {/* -- SOCIAL PROOF -- */}
        <div id="testimonios">
          <TestimonialsCarousel />
        </div>

        {/* -- FAQ -- */}
        {faqItems && faqItems.length > 0 && (
          <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
                Preguntas frecuentes: Fichados vs {comp.nombre}
              </h2>
              <Accordion className="space-y-3">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-white border border-gray-200 rounded-lg px-5 data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {/* -- CTA FINAL -- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#3B82F6]">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {ctaFinal?.title ?? `Cambia a Fichados y ahorra desde el primer mes`}
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              {ctaFinal?.subtitle ??
                `Sin compromiso de permanencia. Setup en 5 minutos. Migra tus datos de ${comp.nombre} y empieza a ahorrar.`}
            </p>
            <a
              href="https://app.fichados.es/registro-empresa"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white text-[#3B82F6] hover:bg-blue-50 text-base px-8 font-semibold shadow-lg transition-colors"
            >
              Empieza a fichar hoy
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}
