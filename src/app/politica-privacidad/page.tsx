import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
  title: "Política de Privacidad | Fichados",
  robots: { index: false },
};

export default function PoliticaPrivacidad() {
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
              <CardTitle className="text-3xl font-bold">Política de Privacidad</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">1. Responsable del tratamiento</h2>
                <p>
                  En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD),
                  se informa que los datos personales tratados a través del sitio web y la plataforma Fichados son responsabilidad de:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p><strong>Responsable:</strong> Groove Factory Studios S.L.</p>
                  <p><strong>CIF:</strong> B42915165</p>
                  <p><strong>Domicilio:</strong> Calle Mosteruelo, 2, 49334, Ferreras de Abajo, Zamora (España)</p>
                  <p><strong>Marca comercial:</strong> Fichados</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">2. Finalidad del tratamiento de los datos</h2>
                <p>Los datos personales recabados a través de Fichados se tratan con las siguientes finalidades:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prestar el servicio de registro y control de la jornada laboral.</li>
                  <li>Gestionar cuentas de empresas y empleados.</li>
                  <li>Permitir el fichaje, gestión de ausencias, vacaciones y permisos.</li>
                  <li>Generar informes y registros conforme a la normativa laboral.</li>
                  <li>Gestionar la relación contractual y la facturación.</li>
                  <li>Enviar comunicaciones operativas relacionadas con el servicio.</li>
                </ul>
                <p className="mt-4">En ningún caso los datos se utilizarán con fines comerciales no autorizados.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">3. Tipos de datos tratados</h2>
                <p>Dependiendo del tipo de usuario, se pueden tratar las siguientes categorías de datos:</p>

                <h3 className="text-lg font-semibold mt-4 mb-2">Empresas / empleadores</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nombre o razón social</li>
                  <li>CIF/NIF</li>
                  <li>Dirección</li>
                  <li>Email</li>
                  <li>Datos de facturación</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">Empleados</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nombre y apellidos</li>
                  <li>DNI/NIE (si lo configura la empresa)</li>
                  <li>Email corporativo</li>
                  <li>Registros de fichaje (fecha, hora, tipo)</li>
                  <li>Ausencias, vacaciones y permisos</li>
                  <li>Justificantes médicos o administrativos (si el empleado los adjunta)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">4. Legitimación del tratamiento</h2>
                <p>La base legal para el tratamiento de los datos es:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Ejecución de un contrato:</strong> prestación del servicio SaaS.</li>
                  <li><strong>Cumplimiento de una obligación legal:</strong> normativa laboral sobre registro de jornada.</li>
                  <li><strong>Interés legítimo:</strong> garantizar el correcto funcionamiento del servicio.</li>
                  <li><strong>Consentimiento:</strong> en los casos en que sea requerido expresamente.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">5. Responsable y encargado del tratamiento</h2>
                <p>Fichados actúa como:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Encargado del tratamiento,</strong> respecto a los datos de empleados introducidos por las empresas.</li>
                  <li><strong>Responsable del tratamiento,</strong> respecto a los datos de los empleadores.</li>
                </ul>
                <p className="mt-4">Las empresas usuarias de Fichados son las responsables del tratamiento de los datos de sus empleados.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">6. Conservación de los datos</h2>
                <p>Los datos personales se conservarán:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mientras exista una relación contractual.</li>
                  <li>Durante los plazos legalmente exigidos.</li>
                  <li>En el caso de los registros de jornada, al menos 4 años, conforme a la normativa laboral vigente.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">7. Destinatarios de los datos</h2>
                <p>
                  Los datos no se cederán a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio,
                  en cuyo caso podrán intervenir proveedores tecnológicos que actúan como encargados del tratamiento, tales como:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Servicios de alojamiento y bases de datos en la Unión Europea.</li>
                  <li>Plataformas de envío de correos electrónicos.</li>
                  <li>Servicios de facturación y pagos.</li>
                </ul>
                <p className="mt-4">En todos los casos, se garantiza el cumplimiento del RGPD mediante los correspondientes contratos.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">8. Transferencias internacionales de datos</h2>
                <p>No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">9. Derechos de los usuarios</h2>
                <p>Los usuarios pueden ejercer los siguientes derechos:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Acceso</li>
                  <li>Rectificación</li>
                  <li>Supresión</li>
                  <li>Oposición</li>
                  <li>Limitación del tratamiento</li>
                  <li>Portabilidad de los datos</li>
                </ul>
                <p className="mt-4">Para ejercer estos derechos, pueden dirigirse por escrito al responsable del tratamiento.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">10. Seguridad de los datos</h2>
                <p>
                  Fichados adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad, integridad
                  y confidencialidad de los datos personales, evitando su alteración, pérdida o acceso no autorizado.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">11. Datos de menores</h2>
                <p>El servicio no está dirigido a menores de edad.</p>
                <p>No se recaban de forma consciente datos de menores.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">12. Modificaciones de la política de privacidad</h2>
                <p>
                  Fichados se reserva el derecho de modificar la presente política para adaptarla a novedades legislativas o técnicas.
                  Las modificaciones serán publicadas en la plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">13. Autoridad de control</h2>
                <p>
                  En caso de considerar vulnerados sus derechos, el usuario puede presentar una reclamación ante la
                  Agencia Española de Protección de Datos (AEPD).
                </p>
              </section>

              <p className="text-muted-foreground mt-8">
                Para cualquier consulta sobre privacidad, puede contactarnos en{" "}
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
