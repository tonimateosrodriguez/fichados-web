import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones del servicio Fichados - Groove Factory Studios S.L. Condiciones de uso y contratación del servicio SaaS.",
};

export default function TerminosCondiciones() {
  return (
    <LegalPageLayout title="Términos y Condiciones del Servicio">
      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Identificación del titular</h2>
        <p>
          El presente documento regula las condiciones de uso y contratación del servicio Fichados, titularidad de:
        </p>
        <div className="bg-muted p-4 rounded-lg mt-4">
          <p className="font-semibold">Groove Factory Studios S.L.</p>
          <p>CIF: B42915165</p>
          <p>Domicilio social: Calle Mosteruelo, 2, 49334, Ferreras de Abajo, Zamora (España)</p>
        </div>
        <p className="mt-4">En adelante, <strong>Fichados</strong> o <strong>el prestador</strong>.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">2. Objeto del servicio</h2>
        <p>
          Fichados es una plataforma digital (software como servicio – SaaS) destinada al registro, gestión y
          conservación de la jornada laboral de los trabajadores, conforme a la normativa laboral vigente en España.
        </p>
        <p>
          El servicio está dirigido exclusivamente a empresas y profesionales que actúan como empleadores.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">3. Ámbito de aplicación</h2>
        <p>Las presentes condiciones se aplican a:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Empresas o autónomos que contratan el servicio Fichados.</li>
          <li>Usuarios empleados creados por dichas empresas para el uso interno del sistema.</li>
        </ul>
        <p className="mt-4">El acceso y uso del servicio implica la aceptación expresa de estos términos.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">4. Alta y acceso al servicio</h2>
        <p>
          El alta en Fichados se realiza mediante el registro de una empresa o empleador, quien será responsable de:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>La veracidad de los datos proporcionados.</li>
          <li>La creación y gestión de las cuentas de sus empleados.</li>
          <li>El uso adecuado del servicio conforme a la ley.</li>
        </ul>
        <p className="mt-4">
          El empleador es el responsable último del tratamiento de los datos de sus empleados introducidos en la plataforma.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">5. Uso correcto del servicio</h2>
        <p>El usuario se compromete a:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Utilizar Fichados de forma lícita y conforme a la normativa laboral.</li>
          <li>No introducir datos falsos, inexactos o de terceros sin legitimación.</li>
          <li>No manipular, alterar o intentar vulnerar el sistema.</li>
        </ul>
        <p className="mt-4">
          Fichados se reserva el derecho de suspender o cancelar cuentas ante usos indebidos o contrarios a la ley.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">6. Responsabilidad del empleador</h2>
        <p>El empleador es responsable de:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>La correcta configuración del sistema.</li>
          <li>La gestión de los fichajes de sus empleados.</li>
          <li>El cumplimiento de sus obligaciones laborales y legales.</li>
        </ul>
        <p className="mt-4">
          Fichados actúa como herramienta tecnológica, pero no sustituye las obligaciones legales del empleador
          ni actúa como asesor legal o laboral.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">7. Disponibilidad del servicio</h2>
        <p>
          Fichados se esfuerza por garantizar la disponibilidad continua del servicio, aunque no puede asegurar
          un funcionamiento ininterrumpido debido a:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mantenimiento técnico.</li>
          <li>Actualizaciones.</li>
          <li>Incidencias ajenas al control del prestador.</li>
        </ul>
        <p className="mt-4">No se garantiza la ausencia total de errores.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">8. Propiedad intelectual</h2>
        <p>
          Todos los derechos de propiedad intelectual sobre la plataforma, diseño, código, marcas y contenidos
          pertenecen a Groove Factory Studios S.L.
        </p>
        <p>Queda prohibida la reproducción, distribución o uso no autorizado del servicio.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">9. Precio y facturación</h2>
        <p>
          El servicio se ofrece bajo modalidad de suscripción, cuyo precio y condiciones se muestran de forma
          clara en la web.
        </p>
        <p>Salvo indicación contraria:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>El cobro es periódico.</li>
          <li>El usuario puede cancelar la suscripción conforme a las condiciones indicadas.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">10. Protección de datos</h2>
        <p>
          El tratamiento de datos personales se rige por lo dispuesto en la Política de Privacidad y en la
          página específica de Cumplimiento RGPD.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">11. Modificación de las condiciones</h2>
        <p>
          Fichados se reserva el derecho de modificar estas condiciones en cualquier momento. Las modificaciones
          serán publicadas en la plataforma y serán aplicables desde su publicación.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">12. Legislación aplicable y jurisdicción</h2>
        <p>Las presentes condiciones se rigen por la legislación española.</p>
        <p>
          Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de España, salvo
          disposición legal en contrario.
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
