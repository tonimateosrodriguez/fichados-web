export interface Sector {
  slug: string;
  nombre: string;
  h1: string;
  description: string;
  intro: string;
  problemas: string[];
  beneficios: string[];
  faq: { question: string; answer: string }[];
}

export const sectores: Sector[] = [
  {
    slug: "hosteleria",
    nombre: "Hostelería",
    h1: "Control de fichajes para hostelería",
    description:
      "Sistema de fichaje digital para hostelería. Cumple el Real Decreto-ley 8/2019 con turnos rotativos, extras y horas nocturnas. Evita sanciones de hasta 187.515 €.",
    intro:
      "La hostelería es uno de los sectores con mayor rotación de personal y turnos irregulares en España. Fichados te permite gestionar fichajes de camareros, cocineros y personal de sala con total cumplimiento legal, incluso con turnos partidos y jornadas nocturnas.",
    problemas: [
      "Turnos rotativos y partidos que complican el registro manual de jornadas",
      "Alta rotación de empleados que dificulta mantener los registros actualizados",
      "Horas extras no registradas que generan conflictos laborales y sanciones",
      "Inspecciones de trabajo frecuentes en el sector hostelero",
      "Dificultad para controlar fichajes en múltiples locales simultáneamente",
    ],
    beneficios: [
      "Gestión automática de turnos partidos y jornadas nocturnas sin errores",
      "Alta y baja de empleados en segundos, ideal para temporadas altas",
      "Registro de horas extras con cálculo automático conforme al convenio",
      "Informes listos para inspección de trabajo con un solo clic",
      "Control centralizado de varios establecimientos desde un panel único",
    ],
    faq: [
      {
        question: "¿Fichados gestiona turnos partidos de hostelería?",
        answer:
          "Sí. Fichados permite registrar múltiples fichajes en un mismo día, ideal para turnos partidos habituales en restaurantes y bares. Cada entrada y salida queda registrada de forma independiente y el sistema calcula automáticamente las horas totales trabajadas.",
      },
      {
        question: "¿Qué pasa si un camarero se olvida de fichar?",
        answer:
          "El administrador recibe una alerta y puede registrar manualmente la entrada o salida del empleado. Todas las modificaciones manuales quedan registradas con trazabilidad completa para cumplir con la normativa.",
      },
      {
        question: "¿Puedo gestionar varios restaurantes con una sola cuenta?",
        answer:
          "Sí. Fichados permite gestionar múltiples centros de trabajo desde un único panel de administración, con informes separados por local y visión global de toda la empresa.",
      },
    ],
  },
  {
    slug: "construccion",
    nombre: "Construcción",
    h1: "Control de fichajes para construcción",
    description:
      "Sistema de fichaje para empresas de construcción. Registro en obra con geolocalización, control de subcontratas y cumplimiento del RDL 8/2019.",
    intro:
      "El sector de la construcción presenta retos únicos para el control de jornada: obras en ubicaciones remotas, personal que se mueve entre proyectos y subcontratas. Fichados resuelve todo esto con fichaje móvil y geolocalización.",
    problemas: [
      "Obras en ubicaciones sin acceso a internet estable ni infraestructura fija",
      "Trabajadores que rotan entre diferentes obras y proyectos cada semana",
      "Control de jornada de subcontratas y autónomos en la misma obra",
      "Dificultad para verificar que el fichaje se realiza en la ubicación correcta",
      "Riesgo de sanciones elevadas en un sector muy vigilado por Inspección de Trabajo",
    ],
    beneficios: [
      "Fichaje móvil con geolocalización que verifica presencia en la obra",
      "Funciona offline y sincroniza los datos cuando recupera conexión",
      "Control de jornada separado por obra, proyecto o centro de coste",
      "Gestión de equipos de subcontratas con permisos diferenciados",
      "Cumplimiento garantizado del RDL 8/2019 con registros inalterables",
    ],
    faq: [
      {
        question: "¿Funciona Fichados en obras sin cobertura?",
        answer:
          "Sí. Los empleados pueden fichar desde su móvil incluso sin conexión a internet. El registro se almacena localmente y se sincroniza automáticamente cuando el dispositivo recupera la cobertura.",
      },
      {
        question: "¿Se puede verificar que el trabajador está en la obra?",
        answer:
          "Sí. Fichados utiliza geolocalización para registrar la ubicación exacta del fichaje. El administrador puede configurar un radio de validación alrededor de cada obra.",
      },
      {
        question: "¿Cómo gestiono los fichajes de subcontratas?",
        answer:
          "Puedes crear perfiles de empresa diferenciados y asignar trabajadores externos a obras específicas. Cada subcontrata puede gestionar sus propios fichajes con visibilidad limitada a su personal.",
      },
    ],
  },
  {
    slug: "sanidad",
    nombre: "Sanidad",
    h1: "Control de fichajes para el sector sanitario",
    description:
      "Sistema de fichaje para clínicas, hospitales y centros sanitarios. Gestión de guardias, turnos 24h y registro de jornada conforme a la normativa.",
    intro:
      "El sector sanitario combina turnos de 24 horas, guardias localizadas y personal de refuerzo. Fichados se adapta a la complejidad del entorno hospitalario y clínico con un sistema flexible y seguro.",
    problemas: [
      "Guardias de 24 horas y turnos que cruzan la medianoche",
      "Personal de refuerzo y sustituciones con poco preaviso",
      "Múltiples categorías profesionales con convenios diferentes",
      "Entornos estériles donde el uso de dispositivos está restringido",
      "Necesidad de cumplir simultáneamente normativa laboral y sanitaria",
    ],
    beneficios: [
      "Soporte completo para guardias de 24h y turnos que cruzan días",
      "Alta rápida de personal de sustitución y refuerzo",
      "Configuración por categorías profesionales con convenios diferenciados",
      "Fichaje sin contacto compatible con entornos sanitarios",
      "Cumplimiento del RDL 8/2019 adaptado al convenio sanitario",
    ],
    faq: [
      {
        question: "¿Fichados gestiona guardias de 24 horas?",
        answer:
          "Sí. El sistema permite registrar jornadas que cruzan la medianoche y guardias completas de 24 horas, calculando correctamente las horas trabajadas.",
      },
      {
        question: "¿Se puede fichar sin tocar ningún dispositivo?",
        answer:
          "Sí. Fichados permite el fichaje desde el teléfono personal sin necesidad de tocar un terminal compartido, ideal para entornos donde la higiene es prioritaria.",
      },
      {
        question: "¿Cómo gestiono las diferentes categorías profesionales?",
        answer:
          "Puedes crear grupos con configuraciones diferentes (médicos, enfermeros, auxiliares, administrativos) y aplicar reglas específicas por categoría.",
      },
    ],
  },
  {
    slug: "educacion",
    nombre: "Educación",
    h1: "Control de fichajes para centros educativos",
    description:
      "Sistema de fichaje para colegios, institutos y academias. Registro de jornada de profesores y personal administrativo conforme al RDL 8/2019.",
    intro:
      "Los centros educativos tienen personal con horarios muy diversos: profesores con jornadas lectivas, personal administrativo, monitores de comedor y actividades extraescolares. Fichados gestiona todos estos perfiles con un solo sistema.",
    problemas: [
      "Horarios lectivos que no coinciden con la jornada laboral completa",
      "Personal con funciones mixtas (docencia + tutorías + reuniones)",
      "Monitores de comedor y extraescolares con jornadas reducidas e irregulares",
      "Centros con múltiples edificios o sedes que complican el control",
      "Resistencia del profesorado a sistemas de fichaje percibidos como intrusivos",
    ],
    beneficios: [
      "Fichaje sencillo y rápido que no interrumpe la actividad docente",
      "Diferenciación entre tiempo lectivo, reuniones y trabajo administrativo",
      "Gestión de personal con jornadas parciales y horarios irregulares",
      "Control multi-sede para centros con varios edificios",
      "Interfaz intuitiva que minimiza la curva de aprendizaje",
    ],
    faq: [
      {
        question: "¿Los profesores pueden fichar desde el aula?",
        answer:
          "Sí. Los profesores pueden fichar desde su teléfono móvil al llegar al centro. El fichaje se realiza en segundos y no interfiere con la actividad docente.",
      },
      {
        question: "¿Se pueden registrar diferentes tipos de actividad?",
        answer:
          "Sí. Fichados permite categorizar la jornada en bloques (docencia, reuniones, trabajo administrativo) para un control más detallado del tiempo.",
      },
      {
        question: "¿Cumple la LOPDGDD para centros educativos?",
        answer:
          "Sí. Fichados cumple con la LOPDGDD y el RGPD. Los datos se almacenan en servidores europeos y solo se recogen los datos estrictamente necesarios para el registro de jornada.",
      },
    ],
  },
  {
    slug: "administracion-publica",
    nombre: "Admin. pública",
    h1: "Control de fichajes para funcionarios y empleados públicos",
    description:
      "Sistema de fichaje digital para administraciones públicas. Registro de jornada de funcionarios, personal laboral e interinos conforme al EBEP y el RDL 8/2019. Adaptado a jornadas de 37,5 horas semanales.",
    intro:
      "Las administraciones públicas en España están obligadas a registrar la jornada de todo su personal, incluidos funcionarios de carrera, personal laboral e interinos. Fichados se adapta a las particularidades del empleo público: jornadas de 37,5 horas, flexibilidad horaria regulada, permisos y licencias del EBEP, y la necesidad de transparencia y auditoría que exige el sector público.",
    problemas: [
      "Jornadas de 37,5 horas semanales con flexibilidad horaria de entrada y salida regulada por normativa",
      "Múltiples regímenes de personal (funcionarios, laborales, interinos, eventuales) con condiciones diferentes",
      "Permisos, licencias y reducciones de jornada del EBEP que complican el cálculo de horas efectivas",
      "Requisitos estrictos de transparencia y auditoría en la gestión del tiempo público",
      "Resistencia al cambio en organizaciones con procesos de fichaje manual muy arraigados",
    ],
    beneficios: [
      "Configuración de jornada de 37,5 horas con bandas horarias de flexibilidad",
      "Gestión automática de permisos, licencias y reducciones de jornada del EBEP",
      "Diferenciación por régimen de personal con reglas específicas para cada colectivo",
      "Trazabilidad completa y registros auditables para cumplir con los requisitos de transparencia",
      "Interfaz sencilla que facilita la adopción en organizaciones con baja digitalización",
    ],
    faq: [
      {
        question: "¿Fichados se adapta a la jornada de 37,5 horas de los funcionarios?",
        answer:
          "Sí. Fichados permite configurar la jornada semanal de 37,5 horas con bandas de flexibilidad horaria (hora de entrada entre 7:30 y 9:00, por ejemplo). El sistema calcula automáticamente el saldo de horas y avisa si se está por debajo del cómputo mensual.",
      },
      {
        question: "¿Se pueden gestionar los permisos y licencias del EBEP?",
        answer:
          "Sí. Fichados incluye la gestión de permisos retribuidos, licencias por asuntos propios, reducciones de jornada por guarda legal y demás supuestos del Estatuto Básico del Empleado Público. Se descuentan automáticamente del cómputo de horas.",
      },
      {
        question: "¿Es compatible con los requisitos de transparencia del sector público?",
        answer:
          "Sí. Todos los registros son inalterables y auditables. Fichados genera informes detallados que cumplen con los requisitos de transparencia y pueden ser exportados para auditorías internas o externas.",
      },
    ],
  },
  {
    slug: "comercio",
    nombre: "Comercio",
    h1: "Control de fichajes para comercio y retail",
    description:
      "Sistema de fichaje para tiendas y comercios. Gestiona turnos de dependientes, horarios de apertura y cierre, y cumple la normativa laboral española.",
    intro:
      "El comercio minorista depende de turnos rotativos, jornadas de fin de semana y picos estacionales. Fichados simplifica el registro de jornada para dependientes y encargados de tienda, asegurando el cumplimiento legal sin complicaciones.",
    problemas: [
      "Horarios de apertura amplios con turnos de mañana, tarde y fines de semana",
      "Personal a tiempo parcial con horarios variables difíciles de rastrear",
      "Múltiples puntos de venta que requieren control independiente",
      "Temporadas altas (rebajas, Navidad) con contrataciones masivas temporales",
      "Registros en papel que se pierden o deterioran con facilidad",
    ],
    beneficios: [
      "Fichaje rápido desde tablet o móvil en el propio punto de venta",
      "Gestión flexible de contratos a tiempo parcial y jornadas reducidas",
      "Panel centralizado para cadenas de tiendas con datos en tiempo real",
      "Alta masiva de empleados temporales para campañas estacionales",
      "Eliminación total del papel con registros digitales inalterables",
    ],
    faq: [
      {
        question: "¿Puedo gestionar varias tiendas desde un solo panel?",
        answer:
          "Sí. Fichados permite configurar múltiples centros de trabajo y ver los fichajes de todas tus tiendas en un único panel de administración con filtros por ubicación.",
      },
      {
        question: "¿Cómo gestiono empleados a tiempo parcial?",
        answer:
          "Fichados calcula automáticamente las horas trabajadas independientemente del tipo de contrato. Puedes configurar jornadas máximas diferentes por empleado y recibir alertas si se superan.",
      },
      {
        question: "¿Es fácil dar de alta empleados temporales?",
        answer:
          "Muy fácil. Puedes añadir empleados en segundos desde el panel o importarlos masivamente con un archivo CSV. Cuando termina su contrato, se desactivan sin perder el historial.",
      },
    ],
  },
  {
    slug: "autonomos",
    nombre: "Autónomos",
    h1: "Control de fichajes para autónomos con empleados",
    description:
      "Sistema de fichaje digital para autónomos. Registra la jornada de tus empleados cumpliendo el RDL 8/2019 sin complicaciones. Desde 0 € para autónomos con pocos trabajadores.",
    intro:
      "Si eres autónomo con empleados a tu cargo, estás obligado a registrar su jornada laboral igual que cualquier empresa. Fichados te ofrece un sistema sencillo, económico y sin burocracia para cumplir la ley sin perder tiempo que necesitas para tu negocio.",
    problemas: [
      "Obligación legal de registrar la jornada de empleados aunque solo tengas uno o dos trabajadores",
      "Falta de tiempo para gestionar papeles y registros cuando el autónomo lleva todo el negocio",
      "Desconocimiento de la normativa y miedo a sanciones que pueden llegar a 187.515 €",
      "Sistemas de fichaje pensados para grandes empresas que resultan caros y complejos para un autónomo",
      "Empleados con horarios variables o a tiempo parcial que dificultan el control manual",
    ],
    beneficios: [
      "Configuración en 2 minutos: sin instalaciones, sin hardware, sin complicaciones",
      "Precio adaptado a autónomos: económico y escalable según el número de empleados",
      "Cumplimiento automático del RDL 8/2019 sin necesidad de conocer la normativa en detalle",
      "Tus empleados fichan desde el móvil y tú lo controlas todo desde tu teléfono",
      "Informes de jornada listos para descargar si llega una inspección de trabajo",
    ],
    faq: [
      {
        question: "¿Estoy obligado a fichar a mis empleados si soy autónomo?",
        answer:
          "Sí. Desde 2019, todo empresario con empleados a su cargo, incluidos los autónomos, está obligado a registrar la jornada laboral diaria conforme al Real Decreto-ley 8/2019. El incumplimiento puede suponer sanciones de hasta 187.515 €.",
      },
      {
        question: "¿Fichados es asequible para un autónomo con pocos empleados?",
        answer:
          "Sí. Fichados tiene planes diseñados para pequeños negocios y autónomos. El coste se adapta al número de empleados, por lo que no pagas por funcionalidades que no necesitas.",
      },
      {
        question: "¿Necesito conocimientos técnicos para configurarlo?",
        answer:
          "No. Fichados se configura en 2 minutos desde el navegador. Solo necesitas crear tu cuenta, añadir a tus empleados y ellos ya pueden empezar a fichar desde su móvil. Sin instalaciones ni hardware.",
      },
    ],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectores.find((s) => s.slug === slug);
}
