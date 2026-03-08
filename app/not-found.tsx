import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <p className="text-xl text-muted-foreground">
          La página que buscas no existe
        </p>
        <Link href="/">
          <Button size="lg">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
}
