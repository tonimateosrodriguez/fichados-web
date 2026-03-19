import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ciudad: string }>;
}): Promise<Metadata> {
  const { ciudad } = await params;
  const cityName = ciudad.replace(/-/g, " ");
  return {
    title: `Control de fichajes en ${cityName} | Fichados`,
    description: `Sistema de fichaje online para empresas en ${cityName}. Cumple la normativa laboral española de control horario.`,
  };
}

export default async function CiudadPage({
  params,
}: {
  params: Promise<{ ciudad: string }>;
}) {
  const { ciudad } = await params;
  const cityName = ciudad.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold text-foreground">
          Control de fichajes en {cityName}
        </h1>
        <p className="text-muted-foreground">
          Contenido específico para {cityName} próximamente.
        </p>
        <Link href="/">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
}
