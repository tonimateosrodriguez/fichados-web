import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  FileSpreadsheet,
  Clock,
  ShieldCheck,
  Cloud,
  BarChart3,
} from "lucide-react";
import { recursos, getRecursoBySlug } from "@/data/recursos";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";
import DescargarRecursoForm from "@/components/recursos/DescargarRecursoForm";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface PageProps {
  params: Promise<{ recurso: string }>;
}

export async function generateStaticParams() {
  return recursos.map((r) => ({ recurso: r.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { recurso: slug } = await params;
  const recurso = getRecursoBySlug(slug);
  if (!recurso) return {};

  return {
    title: recurso.h1,
    description: recurso.description,
    openGraph: {
      title: recurso.h1,
      description: recurso.description,
      type: "website",
    },
  };
}

const ventajasFichados = [
  {
    icon: Clock,
    titulo: "Registro automático",
    descripcion:
      "Tus empleados fichan desde el móvil con un toque. Sin rellenar celdas manualmente ni depender de que nadie se olvide.",
  },
  {
    icon: ShieldCheck,
    titulo: "Cumplimiento legal garantizado",
    descripcion:
      "Registros inalterables con trazabilidad completa. Informes listos para la Inspección de Trabajo en un clic.",
  },
  {
    icon: Cloud,
    titulo: "Acceso desde cualquier lugar",
    descripcion:
      "Panel de administración en la nube. Consulta fichajes, aprueba incidencias y descarga informes desde cualquier dispositivo.",
  },
  {
    icon: BarChart3,
    titulo: "Informes en tiempo real",
    descripcion:
      "Dashboards con horas trabajadas, extras, ausencias y tendencias. Sin fórmulas de Excel ni consolidación manual de datos.",
  },
];

export default async function RecursoPage({ params }: PageProps) {
  const { recurso: slug } = await params;
  const recurso = getRecursoBySlug(slug);

  if (!recurso) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: recurso.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: recurso.h1,
    description: recurso.description,
    fileFormat: recurso.fileType === "excel"
      ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      : "application/pdf",
    encodingFormat: recurso.fileType === "excel"
      ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      : "application/pdf",
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: "Fichados",
      url: "https://fichados.es",
    },
  };

  const fileLabel = recurso.fileType === "excel" ? "Excel" : "PDF";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkJsonLd),
        }}
      />

      <LandingHeader showSectionLinks={false} />

      <main className="flex-1 pt-20 sm:pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <FileSpreadsheet className="size-4" />
              {fileLabel}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {recurso.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {recurso.intro}
            </p>
            <div className="mt-8">
              <DescargarRecursoForm
                recursoSlug={recurso.slug}
                fileLabel={fileLabel}
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              ¿Qué incluye esta plantilla?
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {recurso.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" />
                  <p className="text-sm leading-relaxed text-foreground">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Fichados */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              ¿Por qué usar Fichados en vez de Excel?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Las plantillas Excel son un buen punto de partida, pero tienen
              limitaciones importantes. Fichados automatiza todo el proceso.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {ventajasFichados.map((ventaja, i) => (
                <div
                  key={i}
                  className="rounded-xl border bg-card p-6 shadow-sm"
                >
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <ventaja.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {ventaja.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {ventaja.descripcion}
                  </p>
                </div>
              ))}
            </div>
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
                {recurso.faq.map((item, i) => (
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
              ¿Prefieres automatizarlo todo? Prueba Fichados gratis
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Olvídate de rellenar plantillas manualmente. Fichados registra las
              horas de tu equipo automáticamente, genera informes y te mantiene
              al día con la normativa. Desde solo 19 €/mes.
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
