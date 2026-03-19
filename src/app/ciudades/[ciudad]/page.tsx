import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight, ShieldCheck, Clock, FileText, AlertTriangle } from "lucide-react";
import { ciudades, getCiudadBySlug } from "@/data/ciudades";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

interface PageProps {
  params: Promise<{ ciudad: string }>;
}

export async function generateStaticParams() {
  return ciudades.map((c) => ({ ciudad: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ciudad: slug } = await params;
  const ciudad = getCiudadBySlug(slug);
  if (!ciudad) return {};

  return {
    title: ciudad.h1,
    description: ciudad.description,
    openGraph: {
      title: ciudad.h1,
      description: ciudad.description,
      type: "website",
    },
  };
}

const beneficios = [
  {
    icon: ShieldCheck,
    titulo: "Cumplimiento del RDL 8/2019",
    descripcion:
      "Registro de jornada digital que cumple todos los requisitos del Real Decreto-ley 8/2019. Registros inalterables con marca de tiempo.",
  },
  {
    icon: AlertTriangle,
    titulo: "Evita sanciones de hasta 187.515 €",
    descripcion:
      "La Inspección de Trabajo puede imponer multas de 751 € a 7.500 € por infracción grave. En caso de reincidencia, hasta 187.515 €.",
  },
  {
    icon: Clock,
    titulo: "Setup en menos de 5 minutos",
    descripcion:
      "Crea tu cuenta, añade a tus empleados y empieza a fichar. Sin instalaciones, sin hardware, sin consultorías.",
  },
  {
    icon: FileText,
    titulo: "Informes listos para inspección",
    descripcion:
      "Genera informes de registro de jornada en formato oficial con un solo clic. Listos para presentar ante la Inspección de Trabajo.",
  },
];

export default async function CiudadPage({ params }: PageProps) {
  const { ciudad: slug } = await params;
  const ciudad = getCiudadBySlug(slug);

  if (!ciudad) notFound();

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Fichados",
    description: ciudad.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "19",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
    },
    areaServed: {
      "@type": "City",
      name: ciudad.nombre,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: ciudad.comunidad,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <LandingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {ciudad.provincia} &middot; {ciudad.comunidad}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {ciudad.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {ciudad.intro}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://app.fichados.es/registro-empresa"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Prueba gratis en {ciudad.nombre}
                <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Normativa */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Registro de jornada obligatorio en {ciudad.nombre}
            </h2>
            <div className="mx-auto mt-8 max-w-3xl space-y-4 text-muted-foreground">
              <p>
                Desde el 12 de mayo de 2019, el{" "}
                <strong className="text-foreground">Real Decreto-ley 8/2019</strong>{" "}
                obliga a todas las empresas en España a registrar la jornada
                diaria de cada trabajador. Esta obligación aplica a todas las
                empresas con sede o actividad en {ciudad.nombre} y{" "}
                {ciudad.provincia}, independientemente de su tamaño o sector.
              </p>
              <p>
                La <strong className="text-foreground">Inspección de Trabajo</strong> en{" "}
                {ciudad.comunidad} realiza controles periódicos del cumplimiento
                del registro de jornada. Las empresas que no dispongan de un
                sistema de fichaje pueden enfrentarse a sanciones de entre{" "}
                <strong className="text-foreground">751 € y 7.500 €</strong> por
                infracción grave, pudiendo alcanzar los{" "}
                <strong className="text-foreground">187.515 €</strong> en los
                casos más graves.
              </p>
              <p>
                Fichados es un sistema de fichaje 100% digital que permite a
                las empresas de {ciudad.nombre} cumplir con la normativa de
                forma sencilla, sin hardware y desde solo 19 €/mes.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Por qué elegir Fichados en {ciudad.nombre}
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {beneficios.map((b, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <b.icon className="size-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {b.titulo}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {b.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Todo lo que necesitas para fichar en {ciudad.nombre}
            </h2>
            <ul className="mt-10 space-y-4">
              {[
                "Registro digital de entrada y salida conforme al RDL 8/2019",
                "Fichaje desde móvil, tablet u ordenador sin hardware adicional",
                "Geolocalización opcional para verificar presencia en el centro de trabajo",
                "Informes automáticos listos para la Inspección de Trabajo",
                "Gestión de múltiples centros de trabajo en " + ciudad.provincia,
                "Alta y baja de empleados en segundos",
                "Soporte en español con respuesta rápida",
                "Sin compromiso de permanencia ni costes ocultos",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
              Empieza a fichar en {ciudad.nombre} hoy
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
