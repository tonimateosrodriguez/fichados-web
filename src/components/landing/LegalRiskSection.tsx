import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle2, ArrowRight, X, Check } from "lucide-react";

const LegalRiskSection = () => {
  return (
    <section id="riesgos" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Red Box - Problem/Risk */}
          <Card className="border-[#be123c]/30 bg-red-50 dark:bg-[#be123c]/10 overflow-hidden h-full">
            <CardContent className="p-6 sm:p-8 flex flex-col h-full text-[#be123c]">
              <div className="w-12 h-12 rounded-xl bg-[#be123c]/15 flex items-center justify-center mb-5">
                <AlertTriangle className="h-6 w-6" />
              </div>

              <h2 className="text-lg font-bold mb-4">
                No fichar puede costarte hasta 187.515 &euro;
              </h2>

              <p className="mb-5 text-sm sm:text-base">
                La Inspección de Trabajo puede sancionar si ocurre cualquiera de estos casos:
              </p>

              <ul className="space-y-2 mb-6 text-sm flex-grow">
                <li className="flex items-start gap-3">
                  <X className="h-4 w-4 mt-0.5 flex-shrink-0 stroke-[1.5]" />
                  <span>No existe un sistema de fichaje</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-4 w-4 mt-0.5 flex-shrink-0 stroke-[1.5]" />
                  <span>Los registros son manipulables o poco fiables</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-4 w-4 mt-0.5 flex-shrink-0 stroke-[1.5]" />
                  <span>No se conservan los registros durante 4 años</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-4 w-4 mt-0.5 flex-shrink-0 stroke-[1.5]" />
                  <span>No se pueden presentar ante una inspección</span>
                </li>
              </ul>

              <p className="text-xs border-t border-[#be123c]/20 pt-4 mt-auto">
                Las inspecciones aumentan cada año. No cumplir ya no es una opción.
              </p>
            </CardContent>
          </Card>

          {/* Green Box - Solution */}
          <Card className="border-[#047857]/30 bg-green-50 dark:bg-[#047857]/10 overflow-hidden h-full">
            <CardContent className="p-6 sm:p-8 flex flex-col h-full text-[#047857]">
              <div className="w-12 h-12 rounded-xl bg-[#047857]/15 flex items-center justify-center mb-5">
                <CheckCircle2 className="h-6 w-6" />
              </div>

              <h2 className="text-lg font-bold mb-4">
                La forma sencilla de cumplir la ley: Fichados
              </h2>

              <p className="mb-5 text-sm sm:text-base">
                Empieza a cumplir desde el primer día, sin papeleo, sin errores y sin dolores de cabeza.
              </p>

              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 flex-shrink-0 stroke-[1.5]" />
                  <span>Cumple el Real Decreto-ley 8/2019</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 flex-shrink-0 stroke-[1.5]" />
                  <span>Registros automáticos de entrada, salida y pausas</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 flex-shrink-0 stroke-[1.5]" />
                  <span>Conservación legal de registros durante +4 años</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 flex-shrink-0 stroke-[1.5]" />
                  <span>Informes listos para Inspección de Trabajo</span>
                </li>
              </ul>

              <div className="mt-auto">
                <a href="https://app.fichados.es/registro-empresa">
                  <Button className="w-full bg-[#047857] hover:bg-[#065f46] text-white" size="lg">
                    Evita sanciones desde hoy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default LegalRiskSection;
