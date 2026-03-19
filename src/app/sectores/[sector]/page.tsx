import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import { sectores, getSectorBySlug } from "@/data/sectores";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
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

  return {
    title: sector.h1,
    description: sector.description,
    openGraph: {
      title: sector.h1,
      description: sector.description,
      type: "website",
    },
  };
}

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <LandingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {sector.nombre}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {sector.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {sector.intro}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://app.fichados.es/registro-empresa"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Prueba gratis Fichados
                <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Problemas del fichaje en {sector.nombre.toLowerCase()}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Estos son los retos más comunes que enfrentan las empresas de{" "}
              {sector.nombre.toLowerCase()} con el registro de jornada.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {sector.problemas.map((problema, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
                >
                  <XCircle className="mt-0.5 size-5 shrink-0 text-red-500" />
                  <p className="text-sm leading-relaxed text-red-900">
                    {problema}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Cómo Fichados resuelve estos problemas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Fichados está diseñado para adaptarse a las necesidades específicas
              del sector de {sector.nombre.toLowerCase()}.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {sector.beneficios.map((beneficio, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" />
                  <p className="text-sm leading-relaxed text-green-900">
                    {beneficio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Preguntas frecuentes sobre fichaje en {sector.nombre.toLowerCase()}
            </h2>
            <div className="mt-10">
              <Accordion>
                {sector.faq.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{item.answer}</p>
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
              Empieza a fichar en tu empresa de {sector.nombre.toLowerCase()} hoy
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Configura Fichados en menos de 5 minutos. Sin compromiso de
              permanencia, sin costes ocultos. Desde solo 19 €/mes.
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
