import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
  title: "Declaración de Cumplimiento Legal | Fichados",
  robots: { index: false },
};

export default function DeclaracionCumplimiento() {
  return (
    <>
      <LandingHeader />
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center mb-6 text-sm font-medium hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Declaración de Cumplimiento Legal</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">1. Objeto de la declaración</h2>
                <p>
                  La presente Declaración de Cumplimiento Legal tiene como finalidad informar de manera clara y transparente
                  sobre el grado de adecuación del servicio Fichados a la normativa laboral vigente en materia de registro
                  de jornada laboral.
                </p>
                <p>
                  Esta declaración no sustituye a la obligación legal del empleador, sino que describe el marco en el que
                  Fichados presta su servicio como herramienta tecnológica.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">2. Normativa de referencia</h2>
                <p>Fichados ha sido diseñado teniendo en cuenta, entre otras, las siguientes disposiciones legales:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Real Decreto-ley 8/2019</strong>, de 8 de marzo, de medidas urgentes de protección social
                    y de lucha contra la precariedad laboral en la jornada de trabajo.
                  </li>
                  <li>
                    <strong>Estatuto de los Trabajadores</strong>, artículo 34.9.
                  </li>
                  <li>
                    Criterios interpretativos de la <strong>Inspección de Trabajo y Seguridad Social</strong>.
                  </li>
                  <li>
                    <strong>Reglamento (UE) 2016/679</strong>, General de Protección de Datos (RGPD).
                  </li>
                  <li>
                    <strong>Ley Orgánica 3/2018</strong>, de Protección de Datos Personales y garantía de los derechos
                    digitales (LOPDGDD).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">3. Cumplimiento en materia de registro de jornada</h2>
                <p>El sistema Fichados permite:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Registrar de forma diaria la jornada laboral de los trabajadores.</li>
                  <li>Conservar los registros de jornada durante un mínimo de 4 años, conforme a la normativa vigente.</li>
                  <li>
                    Garantizar el acceso a los registros por parte de:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>La empresa</li>
                      <li>El trabajador</li>
                      <li>La Inspección de Trabajo, cuando sea requerido</li>
                    </ul>
                  </li>
                  <li>Generar informes claros y exportables de los registros de jornada.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">4. Integridad e inalterabilidad de los registros</h2>
                <p>Fichados incorpora mecanismos técnicos orientados a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Evitar la manipulación indebida de los registros de jornada.</li>
                  <li>Mantener trazabilidad de las acciones realizadas sobre los fichajes.</li>
                  <li>Registrar fechas y horas de creación de los registros.</li>
                </ul>
                <p className="mt-4">
                  Cualquier modificación de un fichaje queda debidamente registrada y auditada en el sistema.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">5. Uso correcto del servicio</h2>
                <p>Para que el uso de Fichados sea conforme a la normativa laboral, es imprescindible que:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>El empleador configure correctamente el sistema.</li>
                  <li>Los trabajadores realicen los fichajes de forma veraz.</li>
                  <li>No se utilice el sistema para simular jornadas no reales.</li>
                </ul>
                <p className="mt-4 font-medium">
                  El empleador es el único responsable del cumplimiento de sus obligaciones laborales.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">6. Alcance de esta declaración</h2>
                <p>
                  Fichados actúa como proveedor de una herramienta tecnológica que facilita el cumplimiento de la
                  normativa de registro horario.
                </p>
                <p>
                  Esta declaración no constituye asesoramiento legal ni sustituye la interpretación que puedan realizar
                  las autoridades competentes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">7. Protección de datos personales</h2>
                <p>El tratamiento de los datos personales derivados del uso del sistema se realiza conforme a lo dispuesto en:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    La{" "}
                    <Link href="/politica-privacidad" className="text-primary hover:underline">
                      Política de Privacidad
                    </Link>
                  </li>
                  <li>
                    La página específica de{" "}
                    <Link href="/cumplimiento-rgpd" className="text-primary hover:underline">
                      Cumplimiento RGPD
                    </Link>
                  </li>
                </ul>
                <p className="mt-4">
                  Fichados actúa como Encargado del Tratamiento respecto a los datos de empleados.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">8. Actualización de la declaración</h2>
                <p>
                  La presente Declaración de Cumplimiento Legal podrá ser actualizada para adaptarse a cambios normativos,
                  criterios administrativos o mejoras técnicas del servicio.
                </p>
                <p>Las versiones actualizadas estarán disponibles en esta misma página.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">9. Titular del servicio</h2>
                <p>El servicio Fichados es prestado por:</p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="font-semibold">Groove Factory Studios S.L.</p>
                  <p>CIF: B42915165</p>
                  <p>Domicilio social:</p>
                  <p className="pl-4">Calle Mosteruelo, 2</p>
                  <p className="pl-4">49334 – Ferreras de Abajo</p>
                  <p className="pl-4">Zamora (España)</p>
                </div>
              </section>

              <p className="text-muted-foreground mt-8">
                Para cualquier consulta, puede contactarnos en{" "}
                <a href="mailto:info@fichados.es" className="text-primary hover:underline">
                  info@fichados.es
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <LandingFooter />
    </>
  );
}
