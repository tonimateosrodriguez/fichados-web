import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, X, ChevronRight } from "lucide-react";
import { competidores, getCompetidorBySlug } from "@/data/competidores";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

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

  const fichadosAdvantages = comp.features.filter(
    (f) => f.fichados === true && f.competidor !== true
  );

  return (
    <>
      <LandingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Comparativa 2026
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {comp.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {comp.description}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://app.fichados.es/registro-empresa"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Prueba Fichados gratis
                <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Price comparison */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Comparativa de precios
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {/* Fichados */}
              <div className="relative overflow-hidden rounded-xl border-2 border-primary bg-card p-6">
                <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Recomendado
                </div>
                <h3 className="text-xl font-bold text-foreground">Fichados</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">19 €</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tarifa plana. Sin coste por empleado.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-green-600" />
                    Empleados ilimitados
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-green-600" />
                    Todas las funciones incluidas
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-green-600" />
                    Sin compromiso de permanencia
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-green-600" />
                    Soporte incluido
                  </li>
                </ul>
              </div>
              {/* Competitor */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {comp.nombre}
                </h3>
                <div className="mt-4">
                  <span className="text-lg font-semibold text-muted-foreground">
                    {comp.precioCompetidor}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  El coste crece con cada empleado que añadas.
                </p>
                <div className="mt-6 rounded-lg bg-amber-50 p-4">
                  <p className="text-sm text-amber-800">
                    <strong>Ejemplo:</strong> Con 20 empleados, el coste puede
                    superar los 100 €/mes. Con Fichados siempre pagas lo mismo:
                    19 €/mes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature comparison table */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Comparativa de funciones
            </h2>
            <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
              {/* Table header */}
              <div className="grid grid-cols-[1fr_100px_100px] border-b border-border bg-muted/50 px-4 py-3 text-sm font-semibold sm:grid-cols-[1fr_120px_120px] sm:px-6">
                <span>Función</span>
                <span className="text-center text-primary">Fichados</span>
                <span className="text-center">{comp.nombre}</span>
              </div>
              {/* Table rows */}
              {comp.features.map((f, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_100px_100px] items-center border-b border-border px-4 py-3 text-sm last:border-0 sm:grid-cols-[1fr_120px_120px] sm:px-6"
                >
                  <span className="text-muted-foreground">{f.feature}</span>
                  <FeatureCell value={f.fichados} />
                  <FeatureCell value={f.competidor} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key differences */}
        {fichadosAdvantages.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-4xl px-4">
              <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ventajas clave de Fichados frente a {comp.nombre}
              </h2>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {fichadosAdvantages.map((f, i) => (
                  <div
                    key={i}
                    className="flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4"
                  >
                    <Check className="mt-0.5 size-5 shrink-0 text-green-600" />
                    <p className="text-sm leading-relaxed text-green-900">
                      {f.feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
              Cambia a Fichados y ahorra desde el primer mes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Sin compromiso de permanencia. Setup en 5 minutos. Migra tus
              datos de {comp.nombre} y empieza a ahorrar.
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
