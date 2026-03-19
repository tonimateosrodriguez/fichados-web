"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield } from "lucide-react";

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Todo lo que necesitas saber sobre el fichaje legal en España
          </p>
        </div>

        <Accordion defaultValue={[]} className="space-y-4">
          <AccordionItem value="item-1" className="bg-card rounded-lg border border-border px-6">
            <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
              ¿Es obligatorio fichar en España?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              Sí. Desde 2019, todas las empresas y autónomos con empleados están obligados a registrar la jornada laboral según el Real Decreto-ley 8/2019.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card rounded-lg border border-border px-6">
            <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
              ¿Qué pasa si no tengo un sistema de fichaje?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              La Inspección de Trabajo puede sancionar a la empresa con multas que van desde 60 &euro; hasta 187.515 &euro;, dependiendo de la gravedad y reincidencia.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card rounded-lg border border-border px-6">
            <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
              ¿Fichados cumple con la normativa laboral?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              Sí. Fichados cumple el Real Decreto-ley 8/2019, permite registrar entrada, salida y pausas, y conserva los registros durante más de 4 años, tal y como exige la ley.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card rounded-lg border border-border px-6">
            <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
              ¿Sirve Fichados en una inspección de trabajo?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              Sí. Puedes exportar los registros oficiales en PDF en cualquier momento y presentarlos directamente ante la Inspección de Trabajo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card rounded-lg border border-border px-6">
            <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
              ¿Mis empleados tienen que instalar algo?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              No. Tus empleados pueden fichar desde cualquier navegador, en móvil, tablet o ordenador. Sin apps ni instalaciones.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card rounded-lg border border-border px-6">
            <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
              ¿Mis empleados pueden modificar fichajes?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              No. Los registros son inalterables por el empleado, garantizando su validez legal.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-card rounded-lg border border-border px-6">
            <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
              ¿Tiene permanencia?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              No. Sin permanencia ni compromiso. Puedes darte de baja cuando quieras.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="bg-card rounded-lg border border-border px-6">
            <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
              ¿Cuánto tardo en empezar a cumplir la ley?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              Menos de 1 minuto. Creas la cuenta, invitas a tu equipo y ya cumples la normativa desde el primer día.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="https://app.fichados.es/registro-empresa">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Shield className="mr-2 h-5 w-5" />
              Quiero dormir tranquilo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
