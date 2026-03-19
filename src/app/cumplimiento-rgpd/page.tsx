import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
  title: "Cumplimiento RGPD | Fichados",
  robots: { index: false },
};

export default function CumplimientoRGPD() {
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
              <CardTitle className="text-3xl font-bold">Cumplimiento RGPD</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">1. Compromiso con la protección de datos</h2>
                <p>
                  En Fichados, nos tomamos muy en serio la protección de los datos personales y el cumplimiento
                  de la normativa vigente en materia de privacidad y protección de datos.
                </p>
                <p>Nuestro servicio cumple con lo dispuesto en:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reglamento (UE) 2016/679, General de Protección de Datos (RGPD)</li>
                  <li>Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">2. Responsable del servicio</h2>
                <p>El servicio Fichados es prestado por:</p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="font-semibold">Groove Factory Studios S.L.</p>
                  <p>CIF: B42915165</p>
                  <p>Domicilio social: Calle Mosteruelo, 2</p>
                  <p>49334 – Ferreras de Abajo, Zamora (España)</p>
                  <p className="mt-2"><strong>Marca comercial:</strong> Fichados</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">3. Roles en el tratamiento de datos</h2>
                <p>En el uso de la plataforma Fichados intervienen los siguientes roles:</p>

                <h3 className="text-lg font-semibold mt-4 mb-2">Empresas usuarias</h3>
                <p>
                  Las empresas o empleadores que utilizan Fichados actúan como <strong>Responsables del Tratamiento</strong> de
                  los datos personales de sus empleados.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">Fichados</h3>
                <p>
                  Fichados actúa como <strong>Encargado del Tratamiento</strong>, tratando los datos únicamente siguiendo
                  las instrucciones del responsable y para la correcta prestación del servicio.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">4. Tipología de datos tratados</h2>
                <p>
                  A través de Fichados se pueden tratar, según la configuración del empleador, los siguientes datos personales:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Datos identificativos (nombre, apellidos, DNI/NIE)</li>
                  <li>Datos de contacto (email)</li>
                  <li>Registros de jornada laboral (fecha, hora, tipo de fichaje)</li>
                  <li>Ausencias, permisos y vacaciones</li>
                  <li>Justificantes médicos o administrativos, cuando el empleado los aporta</li>
                  <li>Datos técnicos relacionados con el acceso y uso del sistema</li>
                </ul>
                <p className="mt-4">En ningún caso se tratan datos con fines ajenos a la prestación del servicio.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">5. Base legal del tratamiento</h2>
                <p>El tratamiento de los datos se fundamenta en:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>El cumplimiento de una obligación legal en materia de control horario.</li>
                  <li>La ejecución de un contrato de prestación de servicios.</li>
                  <li>El interés legítimo del empleador en la gestión de su plantilla.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">6. Medidas de seguridad</h2>
                <p>
                  Fichados aplica medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos, entre ellas:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceso restringido mediante autenticación</li>
                  <li>Cifrado de comunicaciones</li>
                  <li>Control de accesos y permisos por roles</li>
                  <li>Registro de acciones y trazabilidad</li>
                  <li>Copias de seguridad periódicas</li>
                </ul>
                <p className="mt-4">
                  Estas medidas tienen como objetivo evitar la pérdida, alteración o acceso no autorizado a los datos personales.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">7. Conservación de los datos</h2>
                <p>Los datos personales se conservan durante:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>La vigencia de la relación contractual</li>
                  <li>Los plazos legalmente exigidos</li>
                  <li>En el caso de los registros de jornada, un mínimo de 4 años, conforme a la normativa laboral</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">8. Subencargados del tratamiento</h2>
                <p>
                  Para la correcta prestación del servicio, Fichados puede apoyarse en proveedores tecnológicos que
                  actúan como subencargados del tratamiento, tales como:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Servicios de alojamiento y bases de datos</li>
                  <li>Servicios de envío de correos electrónicos</li>
                  <li>Plataformas de facturación y pagos</li>
                </ul>
                <p className="mt-4">
                  Todos los proveedores cumplen con el RGPD y disponen de acuerdos contractuales adecuados.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">9. Transferencias internacionales</h2>
                <p>No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">10. Derechos de los interesados</h2>
                <p>Los empleados y usuarios cuyos datos se tratan a través de Fichados pueden ejercer sus derechos de:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Acceso</li>
                  <li>Rectificación</li>
                  <li>Supresión</li>
                  <li>Limitación del tratamiento</li>
                  <li>Oposición</li>
                  <li>Portabilidad</li>
                </ul>
                <p className="mt-4">
                  El ejercicio de estos derechos se realizará a través del responsable del tratamiento (empresa empleadora).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">11. Delegado de Protección de Datos</h2>
                <p>
                  En caso de que sea exigible, el responsable del tratamiento podrá designar un Delegado de Protección de Datos (DPO).
                  Fichados colaborará con el mismo en todo lo necesario para garantizar el cumplimiento normativo.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">12. Actualización de esta información</h2>
                <p>
                  Fichados se reserva el derecho de actualizar la presente información para adaptarla a cambios normativos o técnicos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">13. Autoridad de control</h2>
                <p>
                  Si un interesado considera que el tratamiento de sus datos vulnera la normativa vigente, podrá presentar
                  una reclamación ante la{" "}
                  <a
                    href="https://www.aepd.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Agencia Española de Protección de Datos (AEPD)
                  </a>.
                </p>
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
