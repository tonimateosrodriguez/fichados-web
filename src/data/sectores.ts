export interface SectorProblem {
  title: string;
  description: string;
}

export interface SectorBenefit {
  title: string;
  description: string;
}

export interface Sector {
  slug: string;
  nombre: string;
  h1: string;
  description: string;
  intro: string;
  problemas: SectorProblem[];
  beneficios: SectorBenefit[];
  normativa: string;
  faq: { question: string; answer: string }[];
  keywords: {
    primary: string;
    secondary: string[];
  };
  ctaFinal: {
    title: string;
    subtitle: string;
  };
}

export const sectores: Sector[] = [
  {
    slug: "hosteleria",
    nombre: "Hostelería",
    h1: "Control de fichajes para hostelería",
    description:
      "Sistema de fichaje digital para hostelería. Cumple el Real Decreto-ley 8/2019 con registro de turnos partidos y jornadas irregulares. Evita sanciones de hasta 187.515 €.",
    intro:
      "Turnos rotativos, extras de fin de semana, personal eventual… En hostelería, controlar la jornada es obligatorio y complicado. Fichados lo simplifica para que cumplas la ley sin perder tiempo.",
    problemas: [
      {
        title: "Turnos rotativos difíciles de registrar",
        description:
          "Turnos partidos, noches y fines de semana hacen que el control manual sea un caos de papeles y errores.",
      },
      {
        title: "Alta rotación de personal",
        description:
          "Empleados eventuales, extras y sustituciones constantes dificultan mantener los registros al día.",
      },
      {
        title: "Hojas de papel que se pierden o manipulan",
        description:
          "Los registros en papel no cumplen los requisitos legales y son fácilmente impugnables ante una inspección.",
      },
      {
        title: "Inspecciones cada vez más frecuentes",
        description:
          "La hostelería es uno de los sectores más inspeccionados por la Inspección de Trabajo en España.",
      },
      {
        title: "Sanciones de hasta 187.515 €",
        description:
          "No disponer de un sistema de fichaje fiable puede suponer multas graves para tu negocio.",
      },
      {
        title: "Falta de control en múltiples locales",
        description:
          "Gestionar fichajes de varios establecimientos a la vez con métodos manuales es prácticamente imposible.",
      },
    ],
    beneficios: [
      {
        title: "Fichaje desde cualquier dispositivo",
        description:
          "Tus empleados fichan desde el móvil, tablet o PC. Ideal para barras, cocinas y terrazas.",
      },
      {
        title: "Gestión de turnos partidos y nocturnos",
        description:
          "Registra entradas, salidas y pausas de cualquier tipo de jornada, por compleja que sea.",
      },
      {
        title: "Alta y baja de empleados en segundos",
        description:
          "Añade personal eventual o extras con una invitación por email. Empiezan a fichar al instante.",
      },
      {
        title: "Informes listos para inspección",
        description:
          "Genera informes legales con un clic. Si llega la Inspección de Trabajo, estarás preparado.",
      },
      {
        title: "Registros inalterables y conservados 4+ años",
        description:
          "Cumple el Real Decreto-ley 8/2019. Todos los datos se almacenan de forma segura en la UE.",
      },
      {
        title: "Panel de control centralizado",
        description:
          "Visualiza el estado de fichajes de todos tus empleados y locales desde un único panel.",
      },
    ],
    faq: [
      {
        question: "¿Fichados sirve para turnos partidos y nocturnos?",
        answer:
          "Sí. Fichados registra todas las entradas, salidas y pausas sin importar el tipo de jornada. Turnos partidos, nocturnos, extras de fin de semana… todo queda registrado correctamente.",
      },
      {
        question: "¿Puedo dar de alta empleados eventuales rápidamente?",
        answer:
          "Sí. Basta con enviar una invitación por email. El empleado se registra y puede empezar a fichar en menos de un minuto. Cuando termina su contrato, lo desactivas con un clic.",
      },
      {
        question: "¿Qué pasa si tengo varios locales?",
        answer:
          "Fichados te permite gestionar todos los empleados desde un único panel de administración. Puedes ver quién ha fichado, en qué horario, y generar informes por empleado o por periodo.",
      },
      {
        question: "¿Los registros son válidos ante una inspección?",
        answer:
          "Sí. Los registros de Fichados son digitales, inalterables y se conservan durante más de 4 años, cumpliendo todos los requisitos del Real Decreto-ley 8/2019.",
      },
      {
        question: "¿Necesito instalar algo en los dispositivos?",
        answer:
          "No. Fichados es 100% online. Funciona desde cualquier navegador en móvil, tablet u ordenador. No requiere instalación ni hardware adicional.",
      },
    ],
    normativa:
      "El Real Decreto-ley 8/2019 obliga a todos los establecimientos de hostelería a registrar la jornada diaria de sus empleados, incluyendo hora de inicio y fin, conforme al artículo 34.9 del Estatuto de los Trabajadores. Los registros deben conservarse durante 4 años y estar disponibles para la Inspección de Trabajo, los trabajadores y sus representantes. Las sanciones por incumplimiento van de 751 € para infracciones leves a 187.515 € en infracciones muy graves, según la Ley de Infracciones y Sanciones en el Orden Social (LISOS).",
    keywords: {
      primary: "control horario hostelería",
      secondary: [
        "fichaje restaurantes",
        "registro jornada hostelería",
        "control horario bares",
        "fichaje hostelería",
        "turnos partidos hostelería",
      ],
    },
    ctaFinal: {
      title: "Empieza a fichar en tu empresa de hostelería hoy",
      subtitle:
        "Configura Fichados en menos de 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
  },
  {
    slug: "construccion",
    nombre: "Construcción",
    h1: "Control de fichajes para construcción",
    description:
      "Sistema de fichaje para empresas de construcción. Registro en obra con geolocalización y cumplimiento del RDL 8/2019. Evita sanciones de hasta 187.515 €.",
    intro:
      "El sector de la construcción presenta retos únicos para el control de jornada: obras en distintas ubicaciones, personal que se mueve entre proyectos y necesidad de verificar la presencia en obra. Fichados resuelve todo esto con fichaje desde el móvil y geolocalización opcional.",
    problemas: [
      {
        title: "Rotación entre obras",
        description:
          "Trabajadores que rotan entre diferentes obras y proyectos cada semana.",
      },
      {
        title: "Verificación de ubicación",
        description:
          "Dificultad para verificar que el fichaje se realiza en la ubicación correcta.",
      },
      {
        title: "Registros en papel inválidos",
        description:
          "Registros en papel que se pierden, deterioran o no cumplen la normativa.",
      },
      {
        title: "Sector muy vigilado",
        description:
          "Riesgo de sanciones elevadas en un sector muy vigilado por Inspección de Trabajo.",
      },
      {
        title: "Alta rotación de personal",
        description:
          "Alta y baja frecuente de empleados por la naturaleza temporal de los proyectos.",
      },
    ],
    beneficios: [
      {
        title: "Fichaje con geolocalización",
        description:
          "Fichaje desde el móvil con geolocalización opcional que registra la ubicación del fichaje.",
      },
      {
        title: "Alta y baja en segundos",
        description:
          "Alta y baja de empleados en segundos, ideal para la rotación habitual en obra.",
      },
      {
        title: "Registros digitales inalterables",
        description:
          "Registros digitales inalterables que los empleados no pueden modificar.",
      },
      {
        title: "Informes listos para inspección",
        description:
          "Informes en PDF y Excel listos para presentar ante una inspección de trabajo.",
      },
      {
        title: "Cumplimiento legal garantizado",
        description:
          "Cumplimiento garantizado del RDL 8/2019 con conservación de registros más de 4 años.",
      },
    ],
    faq: [
      {
        question: "¿Es obligatorio fichar en obras de construcción?",
        answer:
          "Sí. El Real Decreto-ley 8/2019 obliga a registrar la jornada diaria de todos los trabajadores, incluidos los del sector de la construcción. El incumplimiento puede suponer sanciones de hasta 187.515 € en los casos más graves.",
      },
      {
        question: "¿Cómo fichan los trabajadores en una obra?",
        answer:
          "Desde su propio teléfono móvil, sin instalar ninguna app ni necesitar hardware en la obra. Solo necesitan un navegador. Si activas la geolocalización, cada fichaje queda registrado con la ubicación donde se realizó.",
      },
      {
        question:
          "¿Qué pasa si hay una inspección de trabajo en la obra?",
        answer:
          "Con Fichados puedes generar al instante informes de registro de jornada en PDF o Excel con todos los datos exigidos por la ley. Puedes mostrarlos desde tu móvil o descargarlos en segundos desde el panel de administración.",
      },
      {
        question:
          "¿Puedo controlar los fichajes de varias obras a la vez?",
        answer:
          "Sí. Desde el panel de administración puedes ver en tiempo real quién ha fichado y en qué ubicación. Si gestionas varias obras, tienes una visión global de todo tu equipo sin necesidad de estar presente en cada una.",
      },
      {
        question:
          "¿Cuánto cuesta Fichados para mi empresa de construcción?",
        answer:
          "Desde 9 €/mes, sin permanencia ni costes ocultos. No necesitas instalar dispositivos en la obra ni comprar hardware. El precio escala según el número de empleados y puedes probarlo gratis.",
      },
    ],
    normativa:
      "El Real Decreto-ley 8/2019 obliga a todas las empresas de construcción a registrar la jornada diaria de sus trabajadores, conforme al artículo 34.9 del Estatuto de los Trabajadores. Los registros deben conservarse durante 4 años y estar disponibles para la Inspección de Trabajo, los trabajadores y sus representantes. El sector de la construcción es uno de los más vigilados por la Inspección de Trabajo. Las sanciones por incumplimiento van de 751 € para infracciones leves a 187.515 € en infracciones muy graves, según la Ley de Infracciones y Sanciones en el Orden Social (LISOS).",
    keywords: {
      primary: "control horario construcción",
      secondary: [
        "control horario obra",
        "fichaje obra",
        "registro jornada construcción",
        "fichaje trabajadores obra",
        "control horario subcontratas",
      ],
    },
    ctaFinal: {
      title: "Empieza a fichar en tu empresa de construcción hoy",
      subtitle:
        "Configura Fichados en menos de 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
  },
  {
    slug: "sanidad",
    nombre: "Sanidad",
    h1: "Control de fichajes para el sector sanitario",
    description:
      "Sistema de fichaje para clínicas, hospitales y centros sanitarios. Registro de jornada desde el móvil, sin contacto y conforme al RDL 8/2019.",
    intro:
      "El sector sanitario trabaja con turnos largos, personal de refuerzo y entornos donde la higiene es prioritaria. Fichados permite registrar la jornada de todo el personal sanitario desde el móvil, sin tocar terminales compartidos y con total cumplimiento legal.",
    problemas: [
      {
        title: "Turnos largos y nocturnos",
        description:
          "Turnos largos y jornadas que cruzan la medianoche dificultan el registro manual.",
      },
      {
        title: "Personal de refuerzo imprevisto",
        description:
          "Personal de refuerzo y sustituciones con poco preaviso que hay que dar de alta rápidamente.",
      },
      {
        title: "Entornos estériles",
        description:
          "Entornos estériles donde el uso de dispositivos compartidos está restringido.",
      },
      {
        title: "Múltiples centros sanitarios",
        description:
          "Múltiples centros (clínicas, consultorios, hospitales) que gestionar de forma coordinada.",
      },
      {
        title: "Registros en papel insuficientes",
        description:
          "Registros en papel que no cumplen los requisitos legales de conservación.",
      },
    ],
    beneficios: [
      {
        title: "Jornadas que cruzan medianoche",
        description:
          "Registro de fichajes en jornadas que cruzan la medianoche sin problemas.",
      },
      {
        title: "Alta rápida de sustituciones",
        description:
          "Alta rápida de personal de sustitución y refuerzo en segundos.",
      },
      {
        title: "Fichaje sin contacto",
        description:
          "Fichaje desde el móvil personal, sin tocar terminales compartidos.",
      },
      {
        title: "Panel en tiempo real",
        description:
          "Panel en tiempo real para ver quién está trabajando en cada momento.",
      },
      {
        title: "Informes listos para inspección",
        description:
          "Informes en PDF y Excel listos para inspección de trabajo.",
      },
    ],
    faq: [
      {
        question: "¿Es obligatorio fichar en clínicas y hospitales?",
        answer:
          "Sí. El Real Decreto-ley 8/2019 obliga a todos los centros sanitarios, tanto públicos como privados, a registrar la jornada diaria de sus trabajadores. El incumplimiento puede suponer sanciones de hasta 187.515 € en los casos más graves.",
      },
      {
        question:
          "¿Cómo fichan los sanitarios sin tocar un terminal compartido?",
        answer:
          "Desde su propio teléfono móvil, accediendo a Fichados desde el navegador. No necesitan instalar ninguna app ni tocar un dispositivo compartido, algo ideal para entornos donde la higiene es prioritaria.",
      },
      {
        question:
          "¿Qué pasa si hay una inspección de trabajo en el centro sanitario?",
        answer:
          "Con Fichados puedes generar al instante informes de registro de jornada en PDF o Excel con todos los datos que exige la ley. Puedes presentarlos desde tu móvil o descargarlos en segundos desde el panel de administración.",
      },
      {
        question:
          "¿Puedo gestionar el fichaje de varios centros sanitarios?",
        answer:
          "Sí. Fichados permite controlar el registro de jornada de clínicas, consultorios y hospitales desde un único panel de administración. Puedes ver en tiempo real quién está trabajando en cada centro y generar informes individuales o de toda la organización.",
      },
      {
        question:
          "¿Cuánto cuesta Fichados para mi clínica u hospital?",
        answer:
          "Desde 9 €/mes, sin permanencia ni costes ocultos. El precio se adapta al número de empleados que necesites registrar. Puedes probarlo gratis y dar de alta o baja personal en cualquier momento.",
      },
    ],
    normativa:
      "El Real Decreto-ley 8/2019 obliga a todos los centros sanitarios, tanto públicos como privados, a registrar la jornada diaria de sus trabajadores, conforme al artículo 34.9 del Estatuto de los Trabajadores. Los registros deben conservarse durante 4 años y estar disponibles para la Inspección de Trabajo, los trabajadores y sus representantes. Las sanciones por incumplimiento van de 751 € para infracciones leves a 187.515 € en infracciones muy graves, según la Ley de Infracciones y Sanciones en el Orden Social (LISOS).",
    keywords: {
      primary: "control horario sanitarios",
      secondary: [
        "fichaje clínicas",
        "registro jornada hospitales",
        "control horario enfermería",
        "fichaje personal sanitario",
      ],
    },
    ctaFinal: {
      title: "Empieza a fichar en tu centro sanitario hoy",
      subtitle:
        "Configura Fichados en menos de 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
  },
  {
    slug: "educacion",
    nombre: "Educación",
    h1: "Control de fichajes para centros educativos",
    description:
      "Sistema de fichaje para colegios, institutos y academias. Registro de jornada de profesores y personal administrativo conforme al RDL 8/2019.",
    intro:
      "Los centros educativos tienen personal con horarios muy diversos: profesores, personal administrativo, monitores de comedor y actividades extraescolares. Fichados permite registrar la jornada de todos estos perfiles con un solo sistema, de forma sencilla y sin interrumpir la actividad docente.",
    problemas: [
      {
        title: "Horarios lectivos variables",
        description:
          "Horarios lectivos que no coinciden con la jornada laboral completa.",
      },
      {
        title: "Jornadas reducidas e irregulares",
        description:
          "Monitores de comedor y extraescolares con jornadas reducidas e irregulares.",
      },
      {
        title: "Múltiples edificios o sedes",
        description:
          "Centros con múltiples edificios o sedes que complican el control.",
      },
      {
        title: "Registros en papel deficientes",
        description:
          "Registros en papel que no cumplen la normativa y se pierden con facilidad.",
      },
      {
        title: "Resistencia a sistemas intrusivos",
        description:
          "Resistencia del profesorado a sistemas de fichaje percibidos como intrusivos.",
      },
    ],
    beneficios: [
      {
        title: "Fichaje rápido desde el móvil",
        description:
          "Fichaje rápido desde el móvil que no interrumpe la actividad docente.",
      },
      {
        title: "Jornadas parciales e irregulares",
        description:
          "Gestión de personal con jornadas parciales y horarios irregulares.",
      },
      {
        title: "Panel en tiempo real",
        description:
          "Panel en tiempo real para ver quién ha fichado en cada centro o sede.",
      },
      {
        title: "Gestión de ausencias",
        description:
          "Gestión de ausencias: vacaciones, bajas y permisos desde el panel.",
      },
      {
        title: "Interfaz intuitiva",
        description:
          "Interfaz intuitiva que minimiza la curva de aprendizaje para todo el personal.",
      },
    ],
    faq: [
      {
        question: "¿Es obligatorio fichar en colegios y academias?",
        answer:
          "Sí. El Real Decreto-ley 8/2019 obliga a registrar la jornada laboral de todos los trabajadores por cuenta ajena, incluidos profesores y personal no docente de centros concertados, privados y academias. El incumplimiento puede suponer sanciones de hasta 187.515 €.",
      },
      {
        question:
          "¿Cómo fichan los profesores sin perder tiempo de clase?",
        answer:
          "Desde su propio teléfono móvil al llegar al centro, en segundos. No necesitan instalar ninguna app ni buscar un terminal. Solo abren el navegador, pulsan un botón y siguen con su jornada.",
      },
      {
        question:
          "¿Qué pasa si hay una inspección de trabajo en el centro educativo?",
        answer:
          "Con Fichados puedes generar al instante informes de registro de jornada en PDF o Excel con todos los datos que exige la ley. Puedes descargarlos desde el panel o mostrarlos directamente desde tu móvil.",
      },
      {
        question:
          "¿Puedo gestionar monitores de comedor y extraescolares con jornadas reducidas?",
        answer:
          "Sí. Fichados funciona con cualquier tipo de jornada. Los monitores fichan entrada y salida desde su móvil igual que el resto del personal, y sus horas quedan registradas aunque trabajen solo unas pocas horas al día.",
      },
      {
        question:
          "¿Cuánto cuesta Fichados para mi centro educativo?",
        answer:
          "Desde 9 €/mes, sin permanencia ni costes ocultos. El precio se adapta al número de empleados. Puedes probarlo gratis y dar de alta a todo el personal docente y no docente del centro.",
      },
    ],
    normativa:
      "El Real Decreto-ley 8/2019 obliga a todos los centros educativos a registrar la jornada de sus trabajadores, tanto docentes como personal de administración y servicios, conforme al artículo 34.9 del Estatuto de los Trabajadores. En centros concertados y privados, aplica directamente al personal contratado por el titular. Los registros deben conservarse durante 4 años. Las sanciones por incumplimiento van de 751 € para infracciones leves a 187.515 € en infracciones muy graves, según la Ley de Infracciones y Sanciones en el Orden Social (LISOS).",
    keywords: {
      primary: "control horario centros educativos",
      secondary: [
        "fichaje colegios",
        "registro jornada profesores",
        "control horario academias",
        "fichaje centros educativos",
      ],
    },
    ctaFinal: {
      title: "Empieza a fichar en tu centro educativo hoy",
      subtitle:
        "Configura Fichados en menos de 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
  },
  {
    slug: "administracion-publica",
    nombre: "Admin. pública",
    h1: "Control de fichajes para funcionarios y empleados públicos",
    description:
      "Sistema de fichaje digital para administraciones públicas. Registro de jornada de funcionarios y personal laboral conforme al RDL 8/2019. Sencillo, sin hardware y desde cualquier dispositivo.",
    intro:
      "Las administraciones públicas en España están obligadas a registrar la jornada de todo su personal. Fichados ofrece un sistema sencillo y sin hardware que permite a funcionarios y personal laboral fichar desde su móvil o navegador, con registros inalterables y listos para auditoría.",
    problemas: [
      {
        title: "Obligación legal ineludible",
        description:
          "Obligación legal de registrar la jornada de todo el personal público.",
      },
      {
        title: "Procesos manuales arraigados",
        description:
          "Procesos de fichaje manual muy arraigados y difíciles de cambiar.",
      },
      {
        title: "Requisitos de transparencia",
        description:
          "Requisitos estrictos de transparencia y auditoría en la gestión del tiempo público.",
      },
      {
        title: "Múltiples sedes y edificios",
        description:
          "Múltiples sedes y edificios que complican el control de presencia.",
      },
      {
        title: "Gestión centralizada de ausencias",
        description:
          "Necesidad de gestionar vacaciones, bajas y permisos de forma centralizada.",
      },
    ],
    beneficios: [
      {
        title: "Sin hardware, desde el navegador",
        description:
          "Fichaje desde el móvil o navegador, sin instalar nada ni comprar hardware.",
      },
      {
        title: "Gestión de ausencias integrada",
        description:
          "Gestión centralizada de ausencias: vacaciones, bajas y permisos desde el panel.",
      },
      {
        title: "Registros auditables",
        description:
          "Registros inalterables y auditables que cumplen con los requisitos de transparencia.",
      },
      {
        title: "Panel en tiempo real",
        description:
          "Panel en tiempo real para ver el estado de presencia de todo el personal.",
      },
      {
        title: "Interfaz sencilla",
        description:
          "Interfaz sencilla que facilita la adopción en organizaciones con baja digitalización.",
      },
    ],
    faq: [
      {
        question: "¿Es obligatorio fichar en las administraciones públicas?",
        answer:
          "Sí. El Real Decreto-ley 8/2019 obliga a todas las administraciones públicas a registrar la jornada de sus trabajadores, tanto funcionarios como personal laboral. El incumplimiento puede suponer sanciones de hasta 187.515 € en los casos más graves.",
      },
      {
        question:
          "¿Cómo fichan los empleados públicos con Fichados?",
        answer:
          "Desde su teléfono móvil o cualquier navegador, sin instalar ninguna aplicación. El empleado accede a Fichados, pulsa un botón y queda registrada su entrada o salida. No necesita hardware ni terminales en las oficinas.",
      },
      {
        question:
          "¿Qué pasa si hay una auditoría o inspección de trabajo?",
        answer:
          "Fichados genera informes de registro de jornada en PDF o Excel listos para presentar. Todos los registros son inalterables y auditables, cumpliendo con los requisitos de transparencia del sector público.",
      },
      {
        question:
          "¿Puedo gestionar las vacaciones y permisos del personal?",
        answer:
          "Sí. Fichados incluye gestión de ausencias: los empleados solicitan vacaciones, bajas o permisos desde la app y el responsable los aprueba o deniega. Todo queda registrado y reflejado en los informes.",
      },
      {
        question:
          "¿Cuánto cuesta Fichados para mi administración?",
        answer:
          "Desde 9 €/mes, sin permanencia ni costes ocultos. No requiere inversión en hardware ni instalación. El precio se adapta al número de empleados y puedes probarlo gratis.",
      },
    ],
    normativa:
      "El Real Decreto-ley 8/2019 obliga a todas las administraciones públicas a registrar la jornada de sus trabajadores, tanto funcionarios como personal laboral, conforme al artículo 34.9 del Estatuto de los Trabajadores. Los registros deben conservarse durante 4 años y estar disponibles para auditorías y la Inspección de Trabajo. Las sanciones por incumplimiento van de 751 € para infracciones leves a 187.515 € en infracciones muy graves, según la Ley de Infracciones y Sanciones en el Orden Social (LISOS).",
    keywords: {
      primary: "fichaje funcionarios",
      secondary: [
        "control horario administración pública",
        "registro jornada funcionarios",
        "fichaje empleados públicos",
        "control horario ayuntamiento",
      ],
    },
    ctaFinal: {
      title: "Empieza a fichar en tu administración pública hoy",
      subtitle:
        "Configura Fichados en menos de 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
  },
  {
    slug: "comercio",
    nombre: "Comercio",
    h1: "Control de fichajes para comercio y retail",
    description:
      "Sistema de fichaje para tiendas y comercios. Registro de jornada de dependientes y encargados conforme al RDL 8/2019. Desde 9 €/mes.",
    intro:
      "El comercio minorista depende de turnos rotativos, jornadas de fin de semana y picos estacionales. Fichados simplifica el registro de jornada para dependientes y encargados de tienda, asegurando el cumplimiento legal sin complicaciones.",
    problemas: [
      {
        title: "Turnos amplios y rotativos",
        description:
          "Horarios de apertura amplios con turnos de mañana, tarde y fines de semana.",
      },
      {
        title: "Jornadas parciales variables",
        description:
          "Personal a tiempo parcial con horarios variables difíciles de rastrear.",
      },
      {
        title: "Múltiples puntos de venta",
        description:
          "Múltiples puntos de venta que requieren control independiente.",
      },
      {
        title: "Contrataciones estacionales masivas",
        description:
          "Temporadas altas (rebajas, Navidad) con contrataciones masivas temporales.",
      },
      {
        title: "Registros en papel poco fiables",
        description:
          "Registros en papel que se pierden o deterioran con facilidad.",
      },
    ],
    beneficios: [
      {
        title: "Fichaje en el punto de venta",
        description:
          "Fichaje rápido desde tablet o móvil en el propio punto de venta.",
      },
      {
        title: "Jornadas parciales sin complicación",
        description:
          "Gestión de contratos a tiempo parcial y jornadas reducidas sin configuración especial.",
      },
      {
        title: "Panel centralizado para cadenas",
        description:
          "Panel centralizado para cadenas de tiendas con datos en tiempo real.",
      },
      {
        title: "Alta y baja en segundos",
        description:
          "Alta y baja de empleados en segundos, ideal para campañas estacionales.",
      },
      {
        title: "Registros inalterables 4+ años",
        description:
          "Registros digitales inalterables que cumplen la normativa durante más de 4 años.",
      },
    ],
    faq: [
      {
        question: "¿Es obligatorio fichar en tiendas y comercios?",
        answer:
          "Sí. El Real Decreto-ley 8/2019 obliga a todos los comercios, desde pequeñas tiendas hasta grandes superficies, a registrar la jornada diaria de cada empleado. El incumplimiento puede suponer sanciones de hasta 187.515 € en los casos más graves.",
      },
      {
        question:
          "¿Cómo fichan los dependientes en una tienda?",
        answer:
          "Desde su móvil o desde una tablet en la tienda, accediendo a Fichados desde el navegador. No necesitan instalar ninguna app. Pulsan un botón al llegar y otro al salir, y el registro queda completado.",
      },
      {
        question:
          "¿Qué pasa si hay una inspección de trabajo en mi tienda?",
        answer:
          "Con Fichados puedes generar al instante informes de registro de jornada en PDF o Excel con todos los datos exigidos por la ley. Puedes mostrarlos desde tu móvil o descargarlos en segundos desde el panel de administración.",
      },
      {
        question:
          "¿Puedo gestionar varias tiendas desde un solo panel?",
        answer:
          "Sí. Fichados permite gestionar múltiples puntos de venta desde un único panel de administración. Puedes ver en tiempo real quién ha fichado en cada tienda y generar informes separados o consolidados.",
      },
      {
        question:
          "¿Cuánto cuesta Fichados para mi tienda o cadena de comercios?",
        answer:
          "Desde 9 €/mes, sin permanencia ni costes ocultos. El precio se adapta al número de empleados, así que funciona tanto para una tienda pequeña como para una cadena. Puedes probarlo gratis.",
      },
    ],
    normativa:
      "El Real Decreto-ley 8/2019 obliga a todos los comercios a registrar la jornada diaria de sus trabajadores, conforme al artículo 34.9 del Estatuto de los Trabajadores. Los registros deben conservarse durante 4 años y estar disponibles para la Inspección de Trabajo, los trabajadores y sus representantes. Las sanciones por incumplimiento van de 751 € para infracciones leves a 187.515 € en infracciones muy graves, según la Ley de Infracciones y Sanciones en el Orden Social (LISOS).",
    keywords: {
      primary: "control horario tiendas",
      secondary: [
        "fichaje comercio",
        "registro jornada retail",
        "control horario dependientes",
        "fichaje tiendas",
      ],
    },
    ctaFinal: {
      title: "Empieza a fichar en tu comercio hoy",
      subtitle:
        "Configura Fichados en menos de 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
  },
  {
    slug: "autonomos",
    nombre: "Autónomos",
    h1: "Control de fichajes para autónomos con empleados",
    description:
      "Sistema de fichaje digital para autónomos. Registra la jornada de tus empleados cumpliendo el RDL 8/2019 sin complicaciones. Desde 9 €/mes.",
    intro:
      "Si eres autónomo con empleados a tu cargo, estás obligado a registrar su jornada laboral igual que cualquier empresa. Fichados te ofrece un sistema sencillo, económico y sin burocracia para cumplir la ley sin perder tiempo que necesitas para tu negocio.",
    problemas: [
      {
        title: "Obligación incluso con pocos empleados",
        description:
          "Obligación legal de registrar la jornada de empleados aunque solo tengas uno o dos trabajadores.",
      },
      {
        title: "Falta de tiempo para burocracia",
        description:
          "Falta de tiempo para gestionar papeles y registros cuando el autónomo lleva todo el negocio.",
      },
      {
        title: "Riesgo de sanciones graves",
        description:
          "Desconocimiento de la normativa y miedo a sanciones que pueden llegar a 187.515 €.",
      },
      {
        title: "Sistemas caros y complejos",
        description:
          "Sistemas de fichaje pensados para grandes empresas que resultan caros y complejos para un autónomo.",
      },
      {
        title: "Horarios variables difíciles de controlar",
        description:
          "Empleados con horarios variables o a tiempo parcial que dificultan el control manual.",
      },
    ],
    beneficios: [
      {
        title: "Configuración en 2 minutos",
        description:
          "Sin instalaciones, sin hardware, sin complicaciones. Listo para usar desde el navegador.",
      },
      {
        title: "Precio adaptado a autónomos",
        description:
          "Económico y escalable según el número de empleados. Desde solo 9 €/mes.",
      },
      {
        title: "Cumplimiento automático del RDL 8/2019",
        description:
          "Cumplimiento automático del RDL 8/2019 sin necesidad de conocer la normativa en detalle.",
      },
      {
        title: "Control total desde tu móvil",
        description:
          "Tus empleados fichan desde el móvil y tú lo controlas todo desde tu teléfono.",
      },
      {
        title: "Informes listos para inspección",
        description:
          "Informes de jornada listos para descargar si llega una inspección de trabajo.",
      },
    ],
    faq: [
      {
        question: "¿Es obligatorio fichar a mis empleados si soy autónomo?",
        answer:
          "Sí. Desde 2019, todo empresario con empleados a su cargo, incluidos los autónomos, está obligado a registrar la jornada laboral diaria conforme al Real Decreto-ley 8/2019. El incumplimiento puede suponer sanciones de hasta 187.515 €.",
      },
      {
        question:
          "¿Cómo fichan los empleados de un autónomo con Fichados?",
        answer:
          "Desde su propio teléfono móvil o cualquier navegador, sin instalar nada. El empleado accede a Fichados, pulsa un botón para fichar entrada o salida, y el registro queda guardado. Tú lo ves todo en tiempo real desde tu móvil.",
      },
      {
        question:
          "¿Qué pasa si la Inspección de Trabajo visita mi negocio?",
        answer:
          "Con Fichados puedes generar al instante un informe de registro de jornada en PDF o Excel con todos los datos exigidos por la ley: nombre del empleado, hora de entrada, hora de salida y total de horas diarias. Puedes mostrarlo desde tu móvil o enviarlo por email.",
      },
      {
        question:
          "¿Necesito conocimientos técnicos para configurar Fichados?",
        answer:
          "No. Fichados se configura en 2 minutos desde el navegador. Solo necesitas crear tu cuenta, añadir a tus empleados y ellos ya pueden empezar a fichar desde su móvil. Sin instalaciones ni hardware.",
      },
      {
        question:
          "¿Cuánto cuesta Fichados para un autónomo?",
        answer:
          "Desde 9 €/mes, sin permanencia ni costes ocultos. El precio se adapta al número de empleados, por lo que no pagas por funcionalidades que no necesitas. Puedes probarlo gratis.",
      },
    ],
    normativa:
      "El Real Decreto-ley 8/2019 obliga a todos los autónomos que tengan trabajadores por cuenta ajena contratados a registrar su jornada diaria, conforme al artículo 34.9 del Estatuto de los Trabajadores. La obligación aplica independientemente del número de empleados e incluye conservar los registros durante 4 años. Las sanciones por incumplimiento van de 751 € para infracciones leves a 187.515 € en infracciones muy graves, según la Ley de Infracciones y Sanciones en el Orden Social (LISOS). Para un autónomo con pocos empleados, una sanción de esta magnitud puede comprometer la viabilidad del negocio.",
    keywords: {
      primary: "fichaje autónomos",
      secondary: [
        "control horario autónomos con empleados",
        "registro jornada autónomos",
        "fichaje pequeño negocio",
        "obligación fichaje autónomos",
      ],
    },
    ctaFinal: {
      title: "Empieza a fichar en tu negocio de autónomo hoy",
      subtitle:
        "Configura Fichados en menos de 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectores.find((s) => s.slug === slug);
}
