import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vs: string }>;
}): Promise<Metadata> {
  const { vs } = await params;
  const competitor = vs.replace(/-/g, " ").replace("vs ", "");
  return {
    title: `Fichados vs ${competitor} | Comparativa`,
    description: `Compara Fichados con ${competitor}. Descubre cuál es el mejor sistema de fichaje para tu empresa.`,
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ vs: string }>;
}) {
  const { vs } = await params;
  const competitor = vs.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold text-foreground">
          Fichados vs {competitor}
        </h1>
        <p className="text-muted-foreground">
          Comparativa detallada próximamente.
        </p>
        <Link href="/">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
}
