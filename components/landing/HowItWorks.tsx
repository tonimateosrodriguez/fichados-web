import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="como-empezar"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empieza a cumplir la ley hoy, en 3 pasos
          </h2>
          <p className="text-muted-foreground text-lg">
            Sin papeleo. Sin instalaciones. Sin líos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div className="text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Registra tu empresa
            </h3>
            <p className="text-muted-foreground min-h-[72px]">
              Rellena los datos básicos de tu empresa en menos de 1 minuto.
              <br />
              Sin contratos ni permanencia.
            </p>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Invita a tu equipo
            </h3>
            <p className="text-muted-foreground min-h-[72px]">
              Tus empleados reciben un email y pueden empezar
              <br />a fichar al instante desde móvil o PC.
            </p>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Duerme tranquilo
            </h3>
            <p className="text-muted-foreground min-h-[72px]">
              Cumples la ley desde el primer día.
              <br />
              Informes listos automáticamente si llega una inspección.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="https://app.fichados.es/registro-empresa">
            <Button size="sm" className="text-sm">
              <Shield className="mr-2 h-4 w-4" />
              Empezar ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
