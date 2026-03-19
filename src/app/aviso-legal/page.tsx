import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
  title: "Aviso Legal | Fichados",
  robots: { index: false },
};

export default function AvisoLegal() {
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
              <CardTitle className="text-3xl font-bold">Aviso Legal</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">1. Información general</h2>
                <p>
                  En cumplimiento con el deber de información establecido en la Ley 34/2002, de 11 de julio, de servicios
                  de la sociedad de la información y de comercio electrónico (LSSI-CE), se facilitan a continuación los
                  datos identificativos del titular del sitio web y del servicio:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p><strong>Titular:</strong> Groove Factory Studios S.L.</p>
                  <p><strong>CIF:</strong> B42915165</p>
                  <p><strong>Domicilio social:</strong></p>
                  <p className="pl-4">Calle Mosteruelo, 2</p>
                  <p className="pl-4">49334 – Ferreras de Abajo</p>
                  <p className="pl-4">Zamora (España)</p>
                  <p className="mt-2"><strong>Marca comercial:</strong> Fichados</p>
                  <p><strong>Actividad:</strong> Desarrollo y comercialización de software (SaaS)</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">2. Objeto del sitio web</h2>
                <p>
                  El presente sitio web tiene como finalidad ofrecer información sobre el servicio Fichados, una plataforma
                  digital destinada al registro y gestión de la jornada laboral de trabajadores, conforme a la normativa
                  laboral vigente en España.
                </p>
                <p>
                  El acceso al sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de
                  las disposiciones incluidas en el presente Aviso Legal.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">3. Condiciones de uso</h2>
                <p>
                  El usuario se compromete a utilizar el sitio web y sus contenidos de conformidad con la ley, la buena fe,
                  el orden público y el presente Aviso Legal.
                </p>
                <p>
                  Queda prohibido el uso del sitio web con fines ilícitos, lesivos de derechos o intereses de terceros, o
                  que puedan causar perjuicio, inutilización o deterioro del servicio.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">4. Responsabilidad</h2>
                <p>Groove Factory Studios S.L. no se hace responsable de:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>El uso indebido que los usuarios puedan hacer del sitio web o del servicio.</li>
                  <li>Los errores u omisiones en los contenidos.</li>
                  <li>La falta de disponibilidad temporal del sitio web por causas técnicas o de mantenimiento.</li>
                  <li>Los daños que puedan derivarse del acceso o uso del sitio web.</li>
                </ul>
                <p className="mt-4">
                  El prestador se reserva el derecho a modificar, suspender o interrumpir el acceso al sitio web en
                  cualquier momento y sin previo aviso.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">5. Enlaces externos</h2>
                <p>
                  El sitio web puede contener enlaces a páginas web de terceros. Groove Factory Studios S.L. no asume
                  ninguna responsabilidad sobre los contenidos, políticas o prácticas de dichos sitios externos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">6. Propiedad intelectual e industrial</h2>
                <p>
                  Todos los contenidos del sitio web, incluyendo a título enunciativo pero no limitativo, textos, imágenes,
                  diseños, logotipos, marcas, código fuente y software, son titularidad de Groove Factory Studios S.L. o de
                  terceros autorizados, y están protegidos por la normativa de propiedad intelectual e industrial.
                </p>
                <p>
                  Queda prohibida la reproducción, distribución o comunicación pública total o parcial sin autorización
                  expresa del titular.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">7. Protección de datos personales</h2>
                <p>
                  El tratamiento de los datos personales del usuario se rige por lo dispuesto en la{" "}
                  <Link href="/politica-privacidad" className="text-primary hover:underline">
                    Política de Privacidad
                  </Link>{" "}
                  y en la página de{" "}
                  <Link href="/cumplimiento-rgpd" className="text-primary hover:underline">
                    Cumplimiento RGPD
                  </Link>
                  , accesibles desde este sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">8. Uso de cookies</h2>
                <p>
                  El sitio web utiliza cookies propias y de terceros conforme a lo establecido en la{" "}
                  <Link href="/politica-cookies" className="text-primary hover:underline">
                    Política de Cookies
                  </Link>
                  , disponible para su consulta en el sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">9. Legislación aplicable y jurisdicción</h2>
                <p>El presente Aviso Legal se rige íntegramente por la legislación española.</p>
                <p>
                  Para la resolución de cualquier conflicto que pudiera derivarse del acceso o uso del sitio web, las partes
                  se someten a los Juzgados y Tribunales de España, salvo que la normativa aplicable disponga otra cosa.
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
