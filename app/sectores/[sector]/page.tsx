import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Future: generate pages for each sector
// export async function generateStaticParams() {
//   const sectors = ["restaurantes", "clinicas", "construccion", "retail", "hoteles", "despachos-abogados", "fabricas", "gimnasios"];
//   return sectors.map((sector) => ({ sector }));
// }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector } = await params;
  const sectorName = sector.replace(/-/g, " ");
  return {
    title: `Control de fichajes para ${sectorName} | Fichados`,
    description: `Sistema de fichaje online para empresas de ${sectorName}. Cumple la ley de control horario en España.`,
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector } = await params;
  const sectorName = sector.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold text-foreground">
          Control de fichajes para {sectorName}
        </h1>
        <p className="text-muted-foreground">
          Contenido específico para el sector de {sectorName} próximamente.
        </p>
        <Link href="/">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
}
