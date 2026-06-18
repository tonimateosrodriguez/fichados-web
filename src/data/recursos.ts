export interface Recurso {
  slug: string;
  nombre: string;
  h1: string;
  description: string;
  intro: string;
  fileType: "excel" | "pdf";
  fileName: string;
  features: string[];
  faq: { question: string; answer: string }[];
}

export const recursos: Recurso[] = [
  {
    slug: "plantilla-control-horario",
    nombre: "Control horario",
    h1: "Plantilla de control horario Excel gratis",
    description:
      "Descarga gratis nuestra plantilla Excel de control horario. Registro diario de entrada y salida, cálculo automático de horas y cumplimiento del RDL 8/2019.",
    intro:
      "El Real Decreto-ley 8/2019 obliga a todas las empresas en España a registrar la jornada diaria de sus empleados. Esta plantilla Excel te permite cumplir la normativa de forma sencilla y gratuita, con cálculos automáticos de horas trabajadas y extras.",
    fileType: "excel",
    fileName: "plantilla-control-horario-fichados.xlsx",
    features: [
      "Registro diario de entrada y salida para cada empleado",
      "Cálculo automático de horas trabajadas por día y por semana",
      "Detección y suma de horas extras realizadas",
      "Espacio para firma del empleado y del responsable",
      "Resumen mensual de horas totales por trabajador",
      "Adaptada a la normativa vigente del RDL 8/2019",
    ],
    faq: [
      {
        question: "¿Esta plantilla cumple con la ley de control horario?",
        answer:
          "Sí, la plantilla incluye todos los campos que exige el Real Decreto-ley 8/2019: hora de inicio y fin de jornada, total de horas trabajadas y espacio para firma. Sin embargo, la Inspección de Trabajo recomienda sistemas digitales con registros inalterables, algo que Excel no garantiza.",
      },
      {
        question:
          "¿Cuánto tiempo debo conservar los registros de control horario?",
        answer:
          "La normativa establece que los registros de jornada deben conservarse durante 4 años. Esta plantilla facilita el archivo mensual, pero debes asegurarte de almacenar los archivos de forma segura y accesible durante ese período.",
      },
      {
        question: "¿Por qué usar Fichados en vez de esta plantilla Excel?",
        answer:
          "Excel requiere que cada empleado rellene manualmente sus horas, lo que genera errores y posibles manipulaciones. Fichados automatiza el registro con fichaje desde el móvil, calcula horas extras automáticamente y genera informes listos para inspección con registros inalterables.",
      },
    ],
  },
  {
    slug: "modelo-registro-jornada",
    nombre: "Registro de jornada",
    h1: "Modelo de registro de jornada laboral 2026",
    description:
      "Modelo de registro de jornada laboral 2026 en Excel. Cumple el RDL 8/2019 con campos de entrada, salida, pausas y firma. Descarga gratuita.",
    intro:
      "Todas las empresas españolas necesitan un modelo de registro de jornada actualizado a 2026. Este modelo Excel incluye todos los campos exigidos por la normativa vigente y te permite llevar un control claro de las horas de cada trabajador mes a mes.",
    fileType: "excel",
    fileName: "modelo-registro-jornada-fichados.xlsx",
    features: [
      "Campos de hora de entrada, salida y pausas conforme a la normativa 2026",
      "Cálculo automático de horas netas descontando tiempo de descanso",
      "Hoja individual por empleado con datos identificativos",
      "Columna de observaciones para incidencias y justificaciones",
      "Totalizador semanal y mensual de horas trabajadas",
      "Compatible con Excel, Google Sheets y LibreOffice Calc",
    ],
    faq: [
      {
        question:
          "¿Este modelo está actualizado a la normativa de 2026?",
        answer:
          "Sí. El modelo incorpora todos los requisitos del RDL 8/2019 y las actualizaciones normativas vigentes en 2026, incluyendo los campos obligatorios de registro de pausas y descansos que la Inspección de Trabajo verifica en sus auditorías.",
      },
      {
        question:
          "¿Qué sanciones puede recibir mi empresa por no llevar el registro de jornada?",
        answer:
          "El incumplimiento de la obligación de registro de jornada está tipificado como infracción grave, con multas de entre 751 € y 7.500 €. Si además se detectan irregularidades en horas extras, la sanción puede alcanzar los 187.515 € como infracción muy grave.",
      },
      {
        question:
          "¿Fichados puede sustituir este modelo de registro de jornada?",
        answer:
          "Sí. Fichados digitaliza todo el proceso: tus empleados fichan desde el móvil, las horas se calculan automáticamente y los registros se almacenan de forma inalterable. Eliminas el riesgo de errores manuales y tienes los informes listos ante cualquier inspección.",
      },
    ],
  },
  {
    slug: "plantilla-registro-horario-trabajadores",
    nombre: "Registro horario trabajadores",
    h1: "Plantilla de registro horario de trabajadores",
    description:
      "Plantilla Excel gratuita de registro horario de trabajadores. Control de entrada, salida, horas extras y resumen mensual. Cumple la normativa laboral.",
    intro:
      "Llevar un registro horario preciso de todos los trabajadores es una obligación legal desde 2019. Esta plantilla Excel te permite registrar la jornada de cada empleado de forma organizada, con cálculos automáticos y un formato listo para presentar ante la Inspección de Trabajo.",
    fileType: "excel",
    fileName: "plantilla-registro-horario-trabajadores-fichados.xlsx",
    features: [
      "Ficha individual por trabajador con nombre, DNI y puesto",
      "Registro de hora de entrada y salida con formato 24h",
      "Cálculo automático de horas ordinarias y extraordinarias",
      "Resumen mensual con total de horas por categoría",
      "Sección de firmas para empleado y responsable de RRHH",
      "Formato de impresión optimizado en A4 para archivo físico",
    ],
    faq: [
      {
        question:
          "¿Necesito una plantilla distinta para cada tipo de contrato?",
        answer:
          "No. Esta plantilla sirve para cualquier tipo de contrato (indefinido, temporal, parcial o completo). Los cálculos se adaptan automáticamente a las horas registradas, independientemente de la jornada pactada.",
      },
      {
        question:
          "¿Los trabajadores a tiempo parcial también deben registrar su jornada?",
        answer:
          "Sí. La obligación de registro de jornada aplica a todos los trabajadores sin excepción, incluidos los de tiempo parcial. De hecho, para los contratos a tiempo parcial el control es especialmente importante para evitar que se realicen horas complementarias no registradas.",
      },
      {
        question:
          "¿Qué ventajas tiene Fichados sobre una plantilla Excel para el registro horario?",
        answer:
          "Fichados elimina el trabajo manual: los empleados fichan desde su móvil con un toque, las horas se calculan solas y los registros son inalterables. Además, recibes alertas de incidencias y puedes exportar informes al instante, algo imposible con una hoja de cálculo.",
      },
    ],
  },
  {
    slug: "plantilla-turnos-trabajo",
    nombre: "Turnos de trabajo",
    h1: "Plantilla de turnos de trabajo Excel gratis",
    description:
      "Plantilla Excel gratuita para gestionar turnos de trabajo. Organiza turnos rotativos de mañana, tarde y noche con cuadrante visual y resumen de horas.",
    intro:
      "Organizar los turnos de trabajo de tu equipo no tiene por qué ser un dolor de cabeza. Esta plantilla Excel te permite planificar turnos rotativos de mañana, tarde y noche de forma visual, asegurando una distribución equitativa de las horas entre todos los empleados.",
    fileType: "excel",
    fileName: "plantilla-turnos-trabajo-fichados.xlsx",
    features: [
      "Cuadrante visual de turnos por semana con código de colores",
      "Configuración de turnos de mañana, tarde, noche y descanso",
      "Rotación automática de turnos entre empleados",
      "Cálculo de horas totales asignadas por empleado y período",
      "Detección de conflictos: solapes, exceso de horas o descansos insuficientes",
      "Vista mensual y semanal para planificación a corto y largo plazo",
    ],
    faq: [
      {
        question:
          "¿Esta plantilla sirve para turnos rotativos de 3 turnos?",
        answer:
          "Sí. La plantilla está preparada para gestionar turnos rotativos de mañana, tarde y noche. Puedes personalizar los horarios de cada turno y configurar la rotación según las necesidades de tu empresa.",
      },
      {
        question:
          "¿Cuántos empleados puedo gestionar con esta plantilla?",
        answer:
          "La plantilla permite gestionar hasta 20 empleados de forma cómoda. Si tienes más trabajadores, la gestión en Excel se complica considerablemente y es recomendable usar un sistema digital como Fichados.",
      },
      {
        question:
          "¿Fichados genera los turnos rotativos automáticamente?",
        answer:
          "No de forma automática: Fichados se centra en el registro de jornada, no en generar cuadrantes de turnos por ti. Puedes seguir planificando los turnos con esta plantilla y usar Fichados para lo que de verdad exige la ley: que tu equipo fiche entrada, salida y pausas desde el móvil, con registros inalterables e informes listos para la Inspección. Así separas la planificación (la plantilla) del registro real de horas (Fichados).",
      },
    ],
  },
  {
    slug: "plantilla-cuadrante-horario",
    nombre: "Cuadrante horario",
    h1: "Plantilla de cuadrante horario Excel",
    description:
      "Plantilla de cuadrante horario en Excel gratis. Planifica horarios semanales y mensuales de tu equipo con vista visual, control de horas y formato imprimible.",
    intro:
      "Un cuadrante horario bien organizado es clave para que tu equipo sepa cuándo trabaja y tu empresa cumpla la normativa. Esta plantilla Excel te ofrece un cuadrante visual, fácil de editar y listo para imprimir o compartir con tus empleados cada semana.",
    fileType: "excel",
    fileName: "plantilla-cuadrante-horario-fichados.xlsx",
    features: [
      "Cuadrante semanal con franjas horarias por empleado",
      "Vista mensual con resumen de horas asignadas por trabajador",
      "Código de colores personalizable para distinguir turnos y departamentos",
      "Cálculo automático de horas semanales y mensuales por empleado",
      "Formato optimizado para imprimir y colgar en el centro de trabajo",
      "Espacio para notas y cambios de última hora",
    ],
    faq: [
      {
        question:
          "¿Puedo usar esta plantilla como registro de jornada?",
        answer:
          "Esta plantilla es para planificación de horarios, no para registro de jornada. El cuadrante refleja las horas previstas, pero la ley exige registrar las horas realmente trabajadas. Puedes complementarla con nuestra plantilla de control horario o usar Fichados para ambas funciones.",
      },
      {
        question:
          "¿Cómo comparto el cuadrante con mis empleados?",
        answer:
          "Puedes imprimir la plantilla y colgarla en un lugar visible del centro de trabajo, o guardarla como PDF y enviarla por email o WhatsApp. Si prefieres que cada empleado consulte su horario en tiempo real, Fichados lo muestra directamente en la app.",
      },
      {
        question:
          "¿Fichados sustituye al cuadrante horario en Excel?",
        answer:
          "Sí. Con Fichados puedes crear cuadrantes horarios digitales que tus empleados consultan desde la app. Cualquier cambio se actualiza en tiempo real, sin necesidad de reimprimir ni reenviar documentos. Además, el fichaje queda vinculado al horario planificado.",
      },
    ],
  },
  {
    slug: "plantilla-horario-semanal",
    nombre: "Horario semanal",
    h1: "Plantilla de horario semanal para empleados en Excel (gratis)",
    description:
      "Descarga gratis una plantilla de horario semanal para empleados en Excel: organiza los turnos del equipo de lunes a domingo, una fila por trabajador y horas automáticas. Editable e imprimible.",
    intro:
      "Organiza el horario semanal de todo tu equipo de un vistazo: quién trabaja cada día, en qué franja y cuántas horas suma cada empleado de lunes a domingo. Una buena planificación es el primer paso para repartir los turnos sin líos y tener la semana organizada, aunque no sustituye al registro de jornada que exige la ley (lo aclaramos más abajo).",
    fileType: "excel",
    fileName: "plantilla-horario-semanal-fichados.xlsx",
    features: [
      "Cuadrícula de lunes a domingo con una fila por empleado, lista para repartir la semana completa de un vistazo.",
      "Franjas por empleado (mañana, tarde, partido o nocturno) para anotar a mano la hora de entrada y de salida de cada día.",
      "Total de horas semanales por empleado con fórmula automática: escribes los horarios y la plantilla suma las horas sola.",
      "Código de colores para distinguir turnos, descansos, vacaciones y ausencias sin confundirte.",
      "Diseño preparado para imprimir en A4 y colgar en el tablón o repartir en mano al equipo.",
      "Compatible con Microsoft Excel, Google Sheets y LibreOffice Calc: ábrela y edítala donde mejor te venga, sin instalar nada raro.",
    ],
    faq: [
      {
        question: "¿Cómo edito la plantilla de horario semanal en Excel?",
        answer:
          "Descarga el archivo y ábrelo con Excel, Google Sheets o LibreOffice. Escribe el nombre de cada empleado en su fila y anota las horas de entrada y salida en cada día de lunes a domingo. El total de horas semanales se calcula solo gracias a la fórmula que ya viene incluida. Usa el código de colores para marcar descansos, vacaciones o ausencias y, cuando lo tengas, imprímela o compártela con tu equipo.",
      },
      {
        question: "¿La plantilla sirve también para Google Sheets y LibreOffice?",
        answer:
          "Sí. La plantilla es un archivo de Excel estándar, así que se abre y se edita en Microsoft Excel, en Google Sheets (subiéndola a tu Drive) y en LibreOffice Calc. Las fórmulas del total de horas y el código de colores se conservan sin problemas en los tres en la práctica; en algún caso menor el formato de color puede variar ligeramente al pasar de una herramienta a otra. Elige la que ya uses y empieza a planificar; no necesitas instalar nada nuevo.",
      },
      {
        question: "¿Un horario semanal previsto cumple con el registro de jornada obligatorio?",
        answer:
          "No, son cosas distintas. Esta plantilla te ayuda a planificar el horario semanal previsto, es decir, a organizar qué turno hace cada persona. El registro de jornada que exige la ley (art. 34.9 del Estatuto de los Trabajadores, RDL 8/2019) es otra cosa: debe reflejar las horas que cada empleado ha trabajado realmente, con su hora de entrada y salida de cada día, y conservarse durante cuatro años. Una previsión en Excel planifica la semana, pero no sustituye al registro real de horas; para eso te conviene una plantilla de control horario (busca nuestra plantilla de control horario en la sección de recursos) o, mejor, un sistema digital. Ojo con el matiz legal: el registro es obligatorio desde 2019; que tenga que ser en formato digital aún no es una obligación plena para todas las empresas, aunque hay una reforma del Ministerio de Trabajo en tramitación que va en esa dirección. El papel sigue siendo legal hoy, pero es frágil ante una inspección.",
      },
      {
        question: "¿Y si necesito ir más allá de la plantilla de Excel?",
        answer:
          "La plantilla es genial para planificar la semana, pero a la hora de registrar la jornada real tiene límites: cada empleado tendría que apuntar sus horas a mano, los archivos se pueden modificar y reunir todo para una inspección da bastante trabajo. Con Fichados das el salto: tus empleados fichan entrada, salida y pausas desde el móvil, el ordenador o una tablet; tú lo ves todo en tiempo real en el panel; y generas informes en PDF o Excel listos para la Inspección. La ley obliga a conservar los registros cuatro años; con Fichados quedan inalterables y se conservan durante más de cuatro años. Desde 9 €/mes hasta 3 empleados y sin permanencia, lo tienes funcionando en 5 minutos en app.fichados.es/registro-empresa.",
      },
    ],
  },
];

export function getRecursoBySlug(slug: string): Recurso | undefined {
  return recursos.find((r) => r.slug === slug);
}
