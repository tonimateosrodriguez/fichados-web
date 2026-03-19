import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { herramientas, getHerramientaBySlug } from "@/data/herramientas";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import CalculadoraHorasExtras from "@/components/herramientas/CalculadoraHorasExtras";
import CalculadoraHorasTrabajadas from "@/components/herramientas/CalculadoraHorasTrabajadas";
import CalculadoraJornadaLaboral from "@/components/herramientas/CalculadoraJornadaLaboral";
import CalculadoraMultasFichaje from "@/components/herramientas/CalculadoraMultasFichaje";
import CalculadoraCosteFichaje from "@/components/herramientas/CalculadoraCosteFichaje";
import type { ComponentType } from "react";

const componentMap: Record<string, ComponentType> = {
  "horas-extras": CalculadoraHorasExtras,
  "horas-trabajadas": CalculadoraHorasTrabajadas,
  "jornada-laboral": CalculadoraJornadaLaboral,
  "multas-fichaje": CalculadoraMultasFichaje,
  "coste-fichaje": CalculadoraCosteFichaje,
};

interface PageProps {
  params: Promise<{ herramienta: string }>;
}

export async function generateStaticParams() {
  return herramientas.map((h) => ({ herramienta: h.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { herramienta: slug } = await params;
  const herramienta = getHerramientaBySlug(slug);
  if (!herramienta) return {};

  return {
    title: herramienta.h1,
    description: herramienta.description,
    openGraph: {
      title: herramienta.h1,
      description: herramienta.description,
      type: "website",
    },
  };
}

export default async function HerramientaPage({ params }: PageProps) {
  const { herramienta: slug } = await params;
  const herramienta = getHerramientaBySlug(slug);

  if (!herramienta) notFound();

  const ToolComponent = componentMap[herramienta.componentKey];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: herramienta.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: herramienta.nombre,
    description: herramienta.description,
    url: `https://fichados.es/herramientas/${herramienta.slug}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />

      <LandingHeader showSectionLinks={false} />

      <main className="flex-1 pt-20 sm:pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {herramienta.nombre}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {herramienta.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {herramienta.intro}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://app.fichados.es/registro-empresa"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Cumple la ley hoy
                <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Interactive Tool */}
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-3xl px-4">
            {ToolComponent && <ToolComponent />}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Preguntas frecuentes
            </h2>
            <div className="mt-10">
              <Accordion className="space-y-4">
                {herramienta.faq.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-6">
                    <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
              Empieza a fichar con Fichados hoy
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Configura Fichados en menos de 5 minutos. Sin compromiso de
              permanencia, sin costes ocultos. Desde solo 19 euros/mes.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://app.fichados.es/registro-empresa"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-medium text-primary transition-colors hover:bg-white/90"
              >
                Crear cuenta gratis
                <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}
