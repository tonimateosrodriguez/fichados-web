import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  X,
  Check,
  ArrowRight,
  Shield,
  Scale,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import { sectores, getSectorBySlug } from "@/data/sectores";
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
  params: Promise<{ sector: string }>;
}

export async function generateStaticParams() {
  return sectores.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sector: slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return {};

  const title = sector.keywords?.primary ?? sector.h1;

  return {
    title,
    description: sector.description,
    keywords: [sector.keywords.primary, ...sector.keywords.secondary],
    openGraph: {
      title,
      description: sector.description,
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

const NORMATIVA_STEPS = [
  {
    icon: "law" as const,
    title: "Qué dice la ley",
    highlight: "RDL 8/2019",
    description:
      "El Real Decreto-ley 8/2019 obliga a todas las empresas a registrar la jornada de cada empleado. Los registros deben conservarse durante un mínimo de 4 años.",
  },
  {
    icon: "warning" as const,
    title: "Qué pasa si no cumples",
    highlight: "187.515 \u20AC",
    // description se rellena dinámicamente con sector.normativa
    description: "",
  },
  {
    icon: "shield" as const,
    title: "Cómo te protege Fichados",
    highlight: "100% legal",
    description:
      "Registros digitales inalterables, almacenados en servidores de la UE. Cumplimiento total del RDL 8/2019 y el RGPD.",
  },
];

const ICON_CONFIG = {
  law: { bg: "bg-blue-100", text: "text-blue-600", Icon: Scale },
  warning: { bg: "bg-amber-100", text: "text-amber-600", Icon: AlertTriangle },
  shield: { bg: "bg-green-100", text: "text-green-600", Icon: ShieldCheck },
} as const;

export default async function SectorPage({ params }: PageProps) {
  const { sector: slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sector.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const normativaSteps = NORMATIVA_STEPS.map((step) => {
    if (step.icon === "warning") {
      return {
        ...step,
        description:
          sector.normativa ||
          "Las sanciones por no registrar la jornada laboral pueden alcanzar los 187.515 € en los casos más graves. Las inspecciones de trabajo son cada vez más frecuentes.",
      };
    }
    return step;
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <LandingHeader showSectionLinks={false} />

      <main className="min-h-screen bg-white">
        {/* -- HERO -- */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text */}
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  {sector.nombre}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {sector.h1}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
                  {sector.intro}
                </p>
                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2">
                  <a
                    href="https://app.fichados.es/registro-empresa"
                    className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Cumple la ley hoy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Video */}
              <div className="relative">
                <DemoVideo />
                <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* -- PROBLEMAS DEL SECTOR -- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Problemas del fichaje en {sector.nombre.toLowerCase()}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Los retos más comunes que enfrentan las empresas del sector.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {sector.problemas.map((problema, i) => (
                <div
                  key={i}
                  className="border border-gray-200 bg-white shadow-sm rounded-lg p-5 sm:p-6 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {problema.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {problema.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- COMO FUNCIONA -- */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
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

        {/* -- BENEFICIOS -- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todo esto lo resuelves con Fichados
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {sector.beneficios.map((beneficio, i) => (
                <div
                  key={i}
                  className="border border-gray-200 bg-white shadow-sm rounded-lg p-5 sm:p-6 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {beneficio.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {beneficio.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- NORMATIVA -- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Normativa de fichaje en {sector.nombre.toLowerCase()}
            </h2>

            {/* Timeline desktop: horizontal */}
            <div className="hidden md:grid md:grid-cols-3 gap-0 relative">
              {/* Linea horizontal conectora */}
              <div className="absolute top-10 left-[16.67%] right-[16.67%] h-0.5 bg-gray-300" />

              {normativaSteps.map((step, i) => {
                const config = ICON_CONFIG[step.icon];
                return (
                  <div key={i} className="flex flex-col items-center text-center px-4">
                    <div
                      className={`w-20 h-20 rounded-full ${config.bg} flex items-center justify-center relative z-10`}
                    >
                      <config.Icon className={`h-9 w-9 ${config.text}`} />
                    </div>
                    {step.highlight && (
                      <span className="mt-4 text-2xl font-semibold text-gray-900">
                        {step.highlight}
                      </span>
                    )}
                    <h3 className="mt-2 text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-700 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Timeline mobile: vertical */}
            <div className="md:hidden relative pl-12">
              {/* Linea vertical */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-300" />

              <div className="space-y-10">
                {normativaSteps.map((step, i) => {
                  const config = ICON_CONFIG[step.icon];
                  return (
                    <div key={i} className="relative">
                      <div
                        className={`absolute -left-12 top-0 w-10 h-10 rounded-full ${config.bg} flex items-center justify-center z-10`}
                      >
                        <config.Icon className={`h-5 w-5 ${config.text}`} />
                      </div>
                      {step.highlight && (
                        <span className="text-xl font-semibold text-gray-900">
                          {step.highlight}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-gray-700 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* -- PLANES Y PRECIOS -- */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
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
        <TestimonialsCarousel />

        {/* -- FAQ -- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
              Preguntas frecuentes sobre fichaje en{" "}
              {sector.nombre.toLowerCase()}
            </h2>
            <Accordion className="space-y-3">
              {sector.faq.map((item, i) => (
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

        {/* -- CTA FINAL -- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#3B82F6]">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {sector.ctaFinal.title}
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              {sector.ctaFinal.subtitle}
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
