import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de Fichados - Groove Factory Studios S.L. Información sobre el uso de cookies en nuestro sitio web.",
};

export default function PoliticaCookies() {
  return (
    <LegalPageLayout title="Política de Cookies">
      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar un
          sitio web. Permiten, entre otras cosas, recordar información sobre la navegación, mejorar la experiencia
          del usuario y garantizar el correcto funcionamiento del sitio.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">2. ¿Quién es el responsable del uso de cookies?</h2>
        <p>El responsable del sitio web y del uso de cookies es:</p>
        <div className="bg-muted p-4 rounded-lg mt-4">
          <p className="font-semibold">Groove Factory Studios S.L.</p>
          <p>CIF: B42915165</p>
          <p>Domicilio: Calle Mosteruelo, 2</p>
          <p>49334 – Ferreras de Abajo, Zamora (España)</p>
          <p><strong>Marca comercial:</strong> Fichados</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">3. Tipos de cookies utilizadas</h2>
        <p>El sitio web de Fichados utiliza los siguientes tipos de cookies:</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">a) Cookies técnicas o necesarias</h3>
        <p>
          Son cookies imprescindibles para el correcto funcionamiento del sitio web y de la plataforma. Permiten, por ejemplo:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>La navegación por la web</li>
          <li>El acceso a áreas seguras</li>
          <li>La autenticación de usuarios</li>
          <li>La gestión de sesiones</li>
        </ul>
        <p className="mt-2">Estas cookies no requieren el consentimiento del usuario.</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">b) Cookies de personalización</h3>
        <p>
          Permiten recordar información para que el usuario acceda al servicio con determinadas características,
          como el idioma o configuraciones básicas.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">c) Cookies analíticas (si aplica)</h3>
        <p>
          Permiten analizar el comportamiento de los usuarios en el sitio web con el fin de mejorar el servicio
          y la experiencia de navegación.
        </p>
        <p>Estas cookies solo se instalarán si el usuario presta su consentimiento expreso.</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">d) Cookies de terceros</h3>
        <p>
          En algunos casos, el sitio web puede utilizar servicios de terceros que instalan cookies, como herramientas
          de análisis o servicios técnicos necesarios para el funcionamiento del servicio.
        </p>
        <p className="font-medium mt-2">En ningún caso se utilizan cookies para fines publicitarios invasivos.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">4. Cookies utilizadas en Fichados</h2>
        <p>A continuación se detallan las cookies que pueden utilizarse en este sitio web:</p>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border border-border rounded-lg">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-2 text-left font-semibold border-b">Tipo de cookie</th>
                <th className="px-4 py-2 text-left font-semibold border-b">Finalidad</th>
                <th className="px-4 py-2 text-left font-semibold border-b">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Técnicas</td>
                <td className="px-4 py-2 border-b">Funcionamiento y seguridad del sitio</td>
                <td className="px-4 py-2 border-b">Sesión / Persistente</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Analíticas</td>
                <td className="px-4 py-2 border-b">Análisis de uso y mejora del servicio</td>
                <td className="px-4 py-2 border-b">Según proveedor</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Personalización</td>
                <td className="px-4 py-2">Recordar preferencias básicas</td>
                <td className="px-4 py-2">Persistente</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          (La lista concreta puede variar en función de la configuración del sitio.)
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">5. Gestión del consentimiento</h2>
        <p>Al acceder por primera vez al sitio web, el usuario verá un banner de cookies que le permitirá:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Aceptar todas las cookies</li>
          <li>Rechazar las cookies no necesarias</li>
          <li>Configurar las cookies de forma granular</li>
        </ul>
        <p className="mt-4">
          El usuario puede modificar o retirar su consentimiento en cualquier momento desde el panel de configuración de cookies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">6. Cómo desactivar o eliminar cookies</h2>
        <p>
          El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la
          configuración de su navegador.
        </p>
        <p className="mt-4">A continuación se indican enlaces a la información de los navegadores más comunes:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p className="mt-4 text-muted-foreground">
          La desactivación de cookies puede afectar al correcto funcionamiento del sitio web.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">7. Transferencias internacionales de datos</h2>
        <p>
          No se realizan transferencias internacionales de datos a países fuera del Espacio Económico Europeo
          a través del uso de cookies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">8. Actualización de la política de cookies</h2>
        <p>
          Fichados puede modificar la presente Política de Cookies para adaptarla a cambios legislativos o técnicos.
          Las modificaciones serán publicadas en esta misma página.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">9. Más información</h2>
        <p>
          Para más información sobre el tratamiento de datos personales, el usuario puede consultar la{" "}
          <Link href="/politica-privacidad" className="text-primary hover:underline">
            Política de Privacidad
          </Link>{" "}
          y la página de{" "}
          <Link href="/cumplimiento-rgpd" className="text-primary hover:underline">
            Cumplimiento RGPD
          </Link>{" "}
          disponibles en el sitio web.
        </p>
      </section>

      <p className="text-muted-foreground mt-8">
        Para cualquier consulta, puede contactarnos en{" "}
        <a href="mailto:info@fichados.es" className="text-primary hover:underline">
          info@fichados.es
        </a>
      </p>
    </LegalPageLayout>
  );
}
