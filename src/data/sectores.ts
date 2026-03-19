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
    slug: "transporte",
    nombre: "Transporte",
    h1: "Control de fichajes para empresas de transporte",
    description:
      "Sistema de fichaje para transporte y logística. Registro de jornada de conductores con geolocalización, tiempos de conducción y descanso según normativa.",
    intro:
      "Las empresas de transporte deben cumplir con normativas específicas de tiempos de conducción y descanso, además del registro de jornada obligatorio. Fichados facilita el control de flotas y conductores desde cualquier ubicación.",
    problemas: [
      "Conductores en ruta que no pueden fichar en una ubicación fija",
      "Necesidad de registrar tiempos de conducción y descanso obligatorios",
      "Flota distribuida en diferentes rutas y bases operativas",
      "Doble normativa: registro de jornada + tiempos de conducción y descanso",
      "Dificultad para consolidar datos de conductores dispersos geográficamente",
    ],
    beneficios: [
      "Fichaje móvil desde cualquier punto de la ruta con geolocalización",
      "Registro de pausas y descansos obligatorios integrado en el fichaje",
      "Visión en tiempo real de la jornada de cada conductor",
      "Informes de cumplimiento normativo generados automáticamente",
      "Integración sencilla con sistemas de gestión de flotas existentes",
    ],
    faq: [
      {
        question: "¿Los conductores pueden fichar desde la cabina?",
        answer:
          "Sí. Los conductores fichan desde su teléfono móvil con un solo toque. La geolocalización registra automáticamente dónde se realizó el fichaje.",
      },
      {
        question: "¿Se registran los tiempos de descanso?",
        answer:
          "Sí. Fichados permite registrar pausas y descansos como eventos diferenciados. El sistema calcula automáticamente las horas efectivas de trabajo descontando los descansos.",
      },
      {
        question: "¿Puedo ver en tiempo real quién está trabajando?",
        answer:
          "Sí. El panel de administración muestra en tiempo real qué conductores han fichado, cuántas horas llevan y desde qué ubicación.",
      },
    ],
  },
  {
    slug: "industria",
    nombre: "Industria",
    h1: "Control de fichajes para el sector industrial",
    description:
      "Sistema de fichaje para fábricas y plantas industriales. Gestión de turnos 24/7, relevos y control de presencia en planta conforme a la ley.",
    intro:
      "Las plantas industriales operan con turnos continuos, relevos y producción 24/7. Fichados gestiona la complejidad de los turnos industriales con un sistema de fichaje robusto y adaptado a entornos de fábrica.",
    problemas: [
      "Turnos rotativos 24/7 con relevos que requieren control preciso",
      "Entornos de fábrica donde los dispositivos personales no siempre están permitidos",
      "Cientos de empleados fichando a la vez en cambios de turno",
      "Necesidad de control de acceso combinado con registro de jornada",
      "Cálculo complejo de nocturnidad, festivos y horas extraordinarias",
    ],
    beneficios: [
      "Soporte para turnos rotativos 24/7 con gestión automática de relevos",
      "Fichaje masivo sin colas: el sistema soporta cientos de fichajes simultáneos",
      "Cálculo automático de complementos de nocturnidad y festivos",
      "Compatible con tablets industriales y terminales de fichaje en planta",
      "Exportación de datos para integración con software de nóminas",
    ],
    faq: [
      {
        question: "¿Fichados soporta turnos rotativos de fábrica?",
        answer:
          "Sí. Puedes configurar patrones de turnos rotativos (mañana, tarde, noche) y el sistema asigna automáticamente los horarios. Los cambios de turno y relevos quedan registrados con precisión.",
      },
      {
        question: "¿Se puede fichar sin teléfono móvil?",
        answer:
          "Sí. Fichados es compatible con tablets y terminales fijos que pueden instalarse en la entrada de la planta. Los empleados fichan con su código personal.",
      },
      {
        question: "¿Se integra con el software de nóminas?",
        answer:
          "Sí. Fichados permite exportar los datos de fichaje en formatos estándar compatibles con los principales programas de nóminas del mercado español.",
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
    slug: "tecnologia",
    nombre: "Tecnología",
    h1: "Control de fichajes para empresas tecnológicas",
    description:
      "Sistema de fichaje para startups y empresas tech. Compatible con teletrabajo, horario flexible y equipos distribuidos. Cumple el RDL 8/2019.",
    intro:
      "Las empresas tecnológicas trabajan con horarios flexibles, teletrabajo y equipos distribuidos. Aunque la cultura sea informal, la obligación legal de registrar la jornada es la misma. Fichados se adapta a la flexibilidad tech sin añadir burocracia.",
    problemas: [
      "Cultura de horario flexible que parece incompatible con el fichaje",
      "Equipos en remoto o híbrido que trabajan desde diferentes ubicaciones",
      "Percepción del fichaje como una medida de control anticuada",
      "Desarrolladores y creativos que trabajan en horarios no convencionales",
      "Necesidad de cumplir la ley sin dañar la cultura de confianza",
    ],
    beneficios: [
      "Fichaje discreto y rápido que respeta la cultura flexible de la empresa",
      "Soporte nativo para teletrabajo y trabajo híbrido",
      "Sin hardware: todo funciona desde el navegador o el móvil",
      "Respetuoso con la privacidad: solo registra entrada y salida",
      "Cumplimiento legal sin sacrificar la flexibilidad horaria",
    ],
    faq: [
      {
        question: "¿Es compatible con horario flexible?",
        answer:
          "Totalmente. Fichados registra la hora real de entrada y salida sin imponer horarios fijos. Cada empleado ficha cuando empieza y termina, sea a las 7:00 o a las 11:00.",
      },
      {
        question: "¿Funciona para equipos en remoto?",
        answer:
          "Sí. Los empleados pueden fichar desde cualquier ubicación a través de la app web o móvil. No necesitan estar en la oficina para registrar su jornada.",
      },
      {
        question: "¿Se necesita instalar algo?",
        answer:
          "No. Fichados es una aplicación web progresiva que funciona directamente desde el navegador. No requiere instalación de software ni hardware adicional.",
      },
    ],
  },
  {
    slug: "agricultura",
    nombre: "Agricultura",
    h1: "Control de fichajes para el sector agrícola",
    description:
      "Sistema de fichaje para empresas agrícolas y explotaciones. Registro de jornada de temporeros y trabajadores de campo con geolocalización.",
    intro:
      "El sector agrícola trabaja con jornaleros, temporeros y personal en fincas remotas. Fichados permite registrar la jornada laboral desde el campo, sin necesidad de infraestructura fija, cumpliendo con la normativa laboral.",
    problemas: [
      "Trabajadores en fincas y parcelas sin infraestructura tecnológica",
      "Temporeros con contratos cortos que requieren altas y bajas continuas",
      "Jornadas que dependen de las condiciones climáticas y la cosecha",
      "Dificultad para controlar fichajes de cuadrillas distribuidas",
      "Inspecciones de trabajo frecuentes en campañas de recolección",
    ],
    beneficios: [
      "Fichaje desde el móvil en cualquier parcela o finca",
      "Alta y baja instantánea de temporeros sin papeleo",
      "Funciona sin conexión y sincroniza al recuperar cobertura",
      "Geolocalización que demuestra presencia en la explotación",
      "Registros digitales listos para inspección de trabajo",
    ],
    faq: [
      {
        question: "¿Funciona en zonas rurales sin buena cobertura?",
        answer:
          "Sí. Fichados funciona offline y almacena los registros localmente. Cuando el dispositivo recupera cobertura, los datos se sincronizan automáticamente.",
      },
      {
        question: "¿Cómo gestiono temporeros con contratos cortos?",
        answer:
          "Puedes dar de alta y baja temporeros en segundos desde el panel. El historial se conserva aunque el trabajador esté inactivo, útil si vuelve en la siguiente campaña.",
      },
      {
        question: "¿El encargado puede fichar por la cuadrilla?",
        answer:
          "Sí. El encargado puede registrar la entrada y salida de los miembros de su equipo desde su propio dispositivo, con trazabilidad completa de quién realizó cada registro.",
      },
    ],
  },
  {
    slug: "turismo",
    nombre: "Turismo",
    h1: "Control de fichajes para empresas turísticas",
    description:
      "Sistema de fichaje para el sector turístico. Gestión de temporadas, guías turísticos y personal estacional conforme a la normativa laboral española.",
    intro:
      "El turismo en España es un sector clave con fuerte estacionalidad. Hoteles, agencias de viajes y empresas de actividades necesitan un control de jornada flexible que se adapte a temporadas altas y bajas.",
    problemas: [
      "Fuerte estacionalidad con picos de contratación en verano y festivos",
      "Guías y animadores que trabajan en ubicaciones variables cada día",
      "Personal multilingüe que necesita herramientas intuitivas",
      "Jornadas irregulares con eventos nocturnos y fines de semana",
      "Rotación alta de personal que dificulta la formación en el sistema",
    ],
    beneficios: [
      "Escalabilidad instantánea: añade empleados en segundos para temporada alta",
      "Interfaz intuitiva que cualquier empleado aprende en minutos",
      "Fichaje móvil para guías y personal en diferentes ubicaciones",
      "Gestión de jornadas irregulares con eventos y actividades fuera de horario",
      "Informes de horas por temporada para planificación de recursos",
    ],
    faq: [
      {
        question: "¿Puedo escalar rápidamente en temporada alta?",
        answer:
          "Sí. Fichados permite añadir y eliminar empleados en segundos. No hay coste de configuración adicional por cada alta, ideal para la estacionalidad del sector.",
      },
      {
        question: "¿Los guías turísticos pueden fichar desde cualquier punto?",
        answer:
          "Sí. El fichaje móvil con geolocalización permite que los guías registren su jornada desde cualquier ubicación donde realicen la actividad.",
      },
      {
        question: "¿La interfaz está disponible en varios idiomas?",
        answer:
          "El panel de administración está en español. La interfaz de fichaje para empleados es tan intuitiva que no requiere instrucciones en ningún idioma.",
      },
    ],
  },
  {
    slug: "limpieza",
    nombre: "Limpieza",
    h1: "Control de fichajes para empresas de limpieza",
    description:
      "Sistema de fichaje para empresas de limpieza. Registro de jornada en múltiples clientes, control de presencia y cumplimiento del RDL 8/2019.",
    intro:
      "Las empresas de limpieza tienen empleados distribuidos en decenas de ubicaciones diferentes cada día. Fichados permite verificar que cada trabajador está en el lugar correcto a la hora correcta, sin papel ni complicaciones.",
    problemas: [
      "Empleados repartidos en múltiples ubicaciones de clientes diferentes",
      "Jornadas partidas con desplazamientos entre centros de trabajo",
      "Dificultad para verificar que el trabajador está en la ubicación asignada",
      "Contratos por horas con jornadas muy reducidas y variables",
      "Clientes que exigen reportes de horas de servicio prestado",
    ],
    beneficios: [
      "Geolocalización que verifica presencia en cada centro de trabajo",
      "Control de fichajes por ubicación de cliente para facturación precisa",
      "Gestión de jornadas partidas con múltiples entradas y salidas al día",
      "Reportes automáticos por cliente para justificar horas de servicio",
      "Alertas si un empleado no ficha a la hora esperada en un centro",
    ],
    faq: [
      {
        question: "¿Se puede verificar que el limpiador está en el centro asignado?",
        answer:
          "Sí. Fichados registra la geolocalización de cada fichaje y puede configurar zonas válidas para cada centro de trabajo. Si el empleado ficha fuera de la zona, el administrador recibe una alerta.",
      },
      {
        question: "¿Puedo generar informes por cliente?",
        answer:
          "Sí. Fichados permite asignar fichajes a centros de trabajo específicos y generar informes de horas por cliente, útil tanto para control interno como para facturación.",
      },
      {
        question: "¿Gestiona jornadas de pocas horas?",
        answer:
          "Sí. Fichados funciona independientemente de la duración de la jornada. Empleados con contratos de 2, 4 o 6 horas fichan igual de fácil que los de jornada completa.",
      },
    ],
  },
  {
    slug: "seguridad",
    nombre: "Seguridad privada",
    h1: "Control de fichajes para empresas de seguridad",
    description:
      "Sistema de fichaje para seguridad privada. Registro de rondas, turnos de vigilancia 24/7 y cumplimiento normativo para vigilantes y escoltas.",
    intro:
      "Las empresas de seguridad privada operan 24/7 con vigilantes en múltiples ubicaciones. Fichados ofrece un control preciso de los turnos de vigilancia, rondas y relevos con geolocalización.",
    problemas: [
      "Vigilantes en decenas de ubicaciones diferentes que trabajan solos",
      "Turnos de 24 horas y nocturnos con relevos que deben ser puntuales",
      "Necesidad de verificar que el vigilante permanece en su puesto",
      "Control de rondas y puntos de verificación durante el servicio",
      "Requisitos normativos específicos del sector de seguridad privada",
    ],
    beneficios: [
      "Geolocalización continua que verifica presencia en el puesto asignado",
      "Gestión de turnos 24/7 con control preciso de relevos",
      "Alertas automáticas si un vigilante no ficha o abandona la zona",
      "Registro de rondas con puntos de control verificables",
      "Informes de servicio para clientes y para cumplimiento normativo",
    ],
    faq: [
      {
        question: "¿Se puede verificar que el vigilante está en su puesto?",
        answer:
          "Sí. Fichados registra la geolocalización del fichaje y permite configurar zonas de presencia obligatoria. Si el vigilante abandona la zona, se genera una alerta.",
      },
      {
        question: "¿Gestiona turnos de 24 horas?",
        answer:
          "Sí. El sistema soporta jornadas que cruzan la medianoche y turnos de 24 horas completos, calculando correctamente las horas y los complementos nocturnos.",
      },
      {
        question: "¿Se pueden registrar las rondas?",
        answer:
          "Sí. Los vigilantes pueden registrar puntos de control durante sus rondas, generando un historial verificable del recorrido realizado.",
      },
    ],
  },
  {
    slug: "logistica",
    nombre: "Logística",
    h1: "Control de fichajes para empresas de logística",
    description:
      "Sistema de fichaje para almacenes y logística. Gestión de turnos, control de acceso a nave y registro de jornada de mozos y transportistas.",
    intro:
      "Los almacenes y centros logísticos funcionan con turnos continuos y personal que se mueve entre diferentes zonas. Fichados simplifica el control de jornada para operarios de almacén, preparadores y repartidores.",
    problemas: [
      "Turnos rotativos en almacén con cambios frecuentes de horario",
      "Personal que alterna entre almacén, reparto y oficina",
      "Picos de actividad (Black Friday, Navidad) con contrataciones masivas",
      "Necesidad de control de acceso a zonas restringidas del almacén",
      "Cálculo de horas extras en periodos de alta demanda",
    ],
    beneficios: [
      "Fichaje rápido desde terminal en la entrada del almacén",
      "Gestión de turnos rotativos con asignación automática",
      "Alta masiva de personal temporal para picos de actividad",
      "Control de horas extras con alertas cuando se superan los límites",
      "Informes de productividad por turno y por departamento",
    ],
    faq: [
      {
        question: "¿Puedo dar de alta muchos empleados a la vez?",
        answer:
          "Sí. Fichados permite la importación masiva de empleados mediante archivo CSV, ideal para las contrataciones de temporada en logística.",
      },
      {
        question: "¿Controla las horas extras automáticamente?",
        answer:
          "Sí. El sistema detecta automáticamente cuando un empleado supera su jornada ordinaria y registra las horas extras. Puedes configurar alertas para los responsables.",
      },
      {
        question: "¿Se integra con el sistema de gestión del almacén?",
        answer:
          "Fichados permite exportar datos en formatos estándar que pueden importarse en la mayoría de sistemas de gestión de almacén y ERPs.",
      },
    ],
  },
  {
    slug: "alimentacion",
    nombre: "Alimentación",
    h1: "Control de fichajes para la industria alimentaria",
    description:
      "Sistema de fichaje para empresas de alimentación. Registro de jornada en plantas de procesado, obradores y cadenas de producción conforme a la ley.",
    intro:
      "La industria alimentaria trabaja con turnos continuos, estrictos controles de higiene y personal en líneas de producción. Fichados se adapta a las particularidades del sector con fichaje higiénico y sin contacto.",
    problemas: [
      "Zonas de producción con restricciones de higiene que limitan dispositivos",
      "Turnos continuos en plantas de procesado y obradores",
      "Personal con equipos de protección que dificultan el uso de dispositivos",
      "Temporadas de producción con contrataciones masivas",
      "Cumplimiento simultáneo de normativa laboral y de seguridad alimentaria",
    ],
    beneficios: [
      "Fichaje sin contacto compatible con entornos de higiene alimentaria",
      "Gestión de turnos continuos en líneas de producción",
      "Terminal de fichaje en zona de vestuarios, antes de entrar a producción",
      "Alta rápida de personal temporal en campañas de producción",
      "Registros digitales que cumplen con auditorías laborales y alimentarias",
    ],
    faq: [
      {
        question: "¿Se puede fichar antes de ponerse el equipo de protección?",
        answer:
          "Sí. Lo habitual es colocar el terminal de fichaje en la zona de vestuarios o en la entrada, para que los empleados registren su jornada antes de equiparse.",
      },
      {
        question: "¿El sistema cumple con las auditorías del sector?",
        answer:
          "Sí. Fichados genera registros inalterables con marca de tiempo que cumplen los requisitos de trazabilidad tanto laborales como de seguridad alimentaria.",
      },
      {
        question: "¿Gestiona turnos de producción continuos?",
        answer:
          "Sí. El sistema soporta turnos que cruzan la medianoche, turnos rotativos y producción 24/7 con cálculo automático de nocturnidad.",
      },
    ],
  },
  {
    slug: "peluqueria",
    nombre: "Peluquería y estética",
    h1: "Control de fichajes para peluquerías y centros de estética",
    description:
      "Sistema de fichaje para peluquerías y salones de belleza. Registro sencillo de jornada para estilistas y esteticistas. Cumple el RDL 8/2019.",
    intro:
      "Las peluquerías y centros de estética suelen ser pequeños negocios con pocos empleados pero con horarios amplios y turnos variables. Fichados ofrece una solución sencilla y económica que cumple la ley sin complicaciones.",
    problemas: [
      "Negocios pequeños que no necesitan sistemas complejos",
      "Horarios amplios de apertura con turnos rotativos de mañana y tarde",
      "Empleados autónomos y asalariados que conviven en el mismo centro",
      "Desconocimiento de la obligación legal de registro de jornada",
      "Inspecciones de trabajo que pueden suponer sanciones graves para el negocio",
    ],
    beneficios: [
      "Setup en 5 minutos: configuras tu peluquería y empiezas a fichar",
      "Precio económico adaptado a pequeños negocios desde 19€/mes",
      "Interfaz tan sencilla que cualquier estilista la usa sin formación",
      "Cumplimiento legal garantizado sin complicaciones técnicas",
      "Informes automáticos de horas que simplifican la gestión de nóminas",
    ],
    faq: [
      {
        question: "¿Merece la pena para una peluquería con 3 empleados?",
        answer:
          "Absolutamente. La obligación de registro de jornada aplica a todas las empresas con empleados, independientemente del tamaño. Las sanciones pueden llegar a 187.515 € y Fichados empieza desde solo 19 €/mes.",
      },
      {
        question: "¿Es complicado de configurar?",
        answer:
          "No. En menos de 5 minutos puedes crear tu cuenta, añadir a tus empleados y empezar a fichar. No necesitas conocimientos técnicos.",
      },
      {
        question: "¿Los autónomos que trabajan en el salón también fichan?",
        answer:
          "Los autónomos no tienen obligación legal de fichar, pero si trabajan para tu empresa bajo una relación laboral encubierta, es recomendable tener registros. Fichados permite gestionar ambos perfiles.",
      },
    ],
  },
  {
    slug: "gimnasios",
    nombre: "Gimnasios y centros deportivos",
    h1: "Control de fichajes para gimnasios y centros deportivos",
    description:
      "Sistema de fichaje para gimnasios y centros deportivos. Gestión de monitores, recepcionistas y personal de mantenimiento conforme a la normativa.",
    intro:
      "Los gimnasios operan con horarios amplios, monitores con clases repartidas a lo largo del día y personal de limpieza y mantenimiento. Fichados gestiona todos estos perfiles con un sistema sencillo y económico.",
    problemas: [
      "Monitores con clases repartidas en diferentes horarios del día",
      "Horarios de apertura de 14-16 horas diarias que requieren varios turnos",
      "Personal a tiempo parcial con horarios muy variables",
      "Entrenadores que imparten clases en varios centros",
      "Gestión de sustituciones de última hora por bajas o vacaciones",
    ],
    beneficios: [
      "Fichaje rápido desde el móvil al llegar al centro deportivo",
      "Gestión de horarios variables para monitores con clases dispersas",
      "Control de presencia en tiempo real para saber quién está en el centro",
      "Sustituciones de última hora con notificaciones automáticas",
      "Informes de horas por monitor para calcular retribuciones variables",
    ],
    faq: [
      {
        question: "¿Fichados gestiona monitores con clases sueltas?",
        answer:
          "Sí. Los monitores fichan cuando empiezan y terminan cada clase. El sistema calcula las horas totales incluyendo los descansos entre clases.",
      },
      {
        question: "¿Puedo ver quién está en el centro en tiempo real?",
        answer:
          "Sí. El panel de administración muestra en todo momento qué empleados han fichado y están presentes en el centro.",
      },
      {
        question: "¿Sirve para gestionar sustituciones?",
        answer:
          "Fichados registra quién trabaja cada día, facilitando la gestión de sustituciones. El sistema mantiene un historial completo de presencia.",
      },
    ],
  },
  {
    slug: "veterinaria",
    nombre: "Clínicas veterinarias",
    h1: "Control de fichajes para clínicas veterinarias",
    description:
      "Sistema de fichaje para clínicas veterinarias. Registro de jornada de veterinarios, auxiliares y recepcionistas conforme al RDL 8/2019.",
    intro:
      "Las clínicas veterinarias combinan consultas programadas, urgencias y cirugías que alargan la jornada. Fichados permite registrar de forma sencilla las horas reales de trabajo de todo el equipo veterinario.",
    problemas: [
      "Urgencias que alargan la jornada más allá del horario previsto",
      "Guardias y turnos de urgencias que cruzan la medianoche",
      "Equipos pequeños donde un retraso afecta a todo el servicio",
      "Veterinarios que también hacen visitas a domicilio o granjas",
      "Obligación legal que muchas clínicas pequeñas desconocen",
    ],
    beneficios: [
      "Fichaje instantáneo que no interfiere con la atención al animal",
      "Registro automático de horas extras por urgencias imprevistas",
      "Soporte para guardias y turnos de urgencias nocturnas",
      "Fichaje móvil para visitas a domicilio y granjas",
      "Cumplimiento legal sencillo para clínicas pequeñas",
    ],
    faq: [
      {
        question: "¿Cómo registro las horas extras por urgencias?",
        answer:
          "Fichados calcula automáticamente las horas que superan la jornada ordinaria. Si un veterinario sale más tarde por una urgencia, el sistema registra las horas extras.",
      },
      {
        question: "¿Sirve para una clínica con solo 2 empleados?",
        answer:
          "Sí. La obligación de registro de jornada aplica a todas las empresas con al menos un empleado. Fichados desde 19 €/mes es la forma más económica de cumplir.",
      },
      {
        question: "¿Los veterinarios pueden fichar en visitas a domicilio?",
        answer:
          "Sí. El fichaje móvil permite registrar la jornada desde cualquier ubicación, ya sea la clínica, un domicilio particular o una explotación ganadera.",
      },
    ],
  },
  {
    slug: "farmacias",
    nombre: "Farmacias",
    h1: "Control de fichajes para farmacias",
    description:
      "Sistema de fichaje para farmacias. Registro de jornada de farmacéuticos, técnicos y auxiliares con gestión de guardias y turnos ampliados.",
    intro:
      "Las farmacias tienen horarios regulados, guardias nocturnas y personal con diferentes titulaciones. Fichados simplifica el registro de jornada para todo el equipo de la oficina de farmacia.",
    problemas: [
      "Guardias de farmacia con horarios nocturnos y de fin de semana",
      "Farmacias con horario ampliado que requieren varios turnos",
      "Personal con diferentes categorías (titular, adjunto, técnico, auxiliar)",
      "Farmacias pequeñas que consideran el fichaje innecesario",
      "Riesgo de sanciones que pueden superar el beneficio anual de la farmacia",
    ],
    beneficios: [
      "Gestión de guardias de farmacia con horarios especiales",
      "Fichaje sencillo que no interfiere con la atención al paciente",
      "Categorización del personal por titulación y funciones",
      "Precio económico que se amortiza evitando una sola sanción",
      "Informes de horas listos para inspección y para el COF",
    ],
    faq: [
      {
        question: "¿Cómo gestiono las guardias de farmacia?",
        answer:
          "Fichados permite configurar turnos especiales para guardias, incluyendo jornadas nocturnas y de 24 horas, con cálculo automático de complementos.",
      },
      {
        question: "¿Es obligatorio fichar en una farmacia?",
        answer:
          "Sí. Desde el Real Decreto-ley 8/2019, todas las empresas con empleados deben registrar la jornada diaria. Las farmacias no son una excepción.",
      },
      {
        question: "¿Puedo ver las horas de cada empleado para las nóminas?",
        answer:
          "Sí. Fichados genera informes detallados de horas trabajadas por empleado que puedes exportar y enviar directamente a tu gestoría para la confección de nóminas.",
      },
    ],
  },
  {
    slug: "dentistas",
    nombre: "Clínicas dentales",
    h1: "Control de fichajes para clínicas dentales",
    description:
      "Sistema de fichaje para clínicas dentales. Registro de jornada de odontólogos, higienistas y auxiliares. Cumple el RDL 8/2019.",
    intro:
      "Las clínicas dentales trabajan con citas programadas, pero las jornadas reales varían por retrasos y urgencias. Fichados registra las horas exactas de trabajo de dentistas, higienistas y auxiliares.",
    problemas: [
      "Jornadas que se alargan por tratamientos complejos o urgencias",
      "Odontólogos que trabajan en varias clínicas a lo largo de la semana",
      "Clínicas con varios gabinetes y profesionales con horarios solapados",
      "Auxiliares e higienistas con contratos parciales y horarios variables",
      "Cumplimiento normativo que muchas clínicas no tienen resuelto",
    ],
    beneficios: [
      "Fichaje rápido entre pacientes sin interrumpir la consulta",
      "Gestión de profesionales que trabajan en múltiples clínicas",
      "Control de horarios de gabinete y personal auxiliar",
      "Informes para la gestoría con horas reales trabajadas",
      "Setup en minutos para clínicas que nunca han fichado",
    ],
    faq: [
      {
        question: "¿Un odontólogo que trabaja en varias clínicas puede usar Fichados?",
        answer:
          "Sí. El profesional puede estar asociado a varias clínicas y fichar en cada una. Los informes se generan por centro de trabajo.",
      },
      {
        question: "¿Es necesario si todos mis empleados tienen horario fijo?",
        answer:
          "Sí. La ley obliga a registrar la jornada real de cada trabajador, aunque el horario sea fijo. El fichaje permite demostrar el cumplimiento ante una inspección.",
      },
      {
        question: "¿Cuánto tiempo tarda la configuración?",
        answer:
          "Menos de 5 minutos. Creas la cuenta, añades a tu equipo y ya pueden empezar a fichar desde el primer día.",
      },
    ],
  },
  {
    slug: "abogados",
    nombre: "Despachos de abogados",
    h1: "Control de fichajes para despachos de abogados",
    description:
      "Sistema de fichaje para despachos de abogados. Registro de jornada que cumple el RDL 8/2019 sin afectar la flexibilidad del bufete.",
    intro:
      "Los despachos de abogados trabajan con plazos judiciales, horarios irregulares y frecuentes desplazamientos a juzgados. Fichados permite cumplir con la obligación de registro de jornada respetando la autonomía del profesional.",
    problemas: [
      "Abogados con jornadas irregulares marcadas por plazos judiciales",
      "Desplazamientos frecuentes a juzgados, notarías y reuniones con clientes",
      "Cultura profesional que percibe el fichaje como inapropiado",
      "Socios y asociados con diferentes regímenes de jornada",
      "Necesidad de registrar las horas pero respetar la privacidad",
    ],
    beneficios: [
      "Fichaje discreto desde el móvil, ideal para profesionales autónomos",
      "Compatible con jornadas irregulares y desplazamientos",
      "Respeta la privacidad: solo registra hora de inicio y fin",
      "Configuración diferenciada para socios, asociados y personal administrativo",
      "Cumplimiento legal sin burocracia innecesaria",
    ],
    faq: [
      {
        question: "¿Los socios del despacho también deben fichar?",
        answer:
          "Si los socios tienen relación laboral con el despacho, sí. Si son autónomos, no están obligados, pero es recomendable para evitar conflictos. Fichados permite configurar perfiles diferentes.",
      },
      {
        question: "¿Se puede fichar desde el juzgado?",
        answer:
          "Sí. El fichaje móvil permite registrar la jornada desde cualquier ubicación. No es necesario estar en el despacho para fichar.",
      },
      {
        question: "¿Fichados es discreto?",
        answer:
          "Muy discreto. Solo registra la hora de entrada y salida. No rastrea la ubicación de forma continua ni monitoriza la actividad del empleado.",
      },
    ],
  },
  {
    slug: "consultoras",
    nombre: "Consultoras",
    h1: "Control de fichajes para empresas de consultoría",
    description:
      "Sistema de fichaje para consultoras. Registro de jornada de consultores en cliente, oficina y teletrabajo conforme a la normativa laboral.",
    intro:
      "Los consultores pasan gran parte de su tiempo en las oficinas de los clientes, trabajando en remoto o viajando. Fichados se adapta a esta movilidad constante con un fichaje flexible y sin fricción.",
    problemas: [
      "Consultores que trabajan en ubicaciones de clientes diferentes cada semana",
      "Modelo híbrido: oficina propia + cliente + teletrabajo",
      "Necesidad de imputar horas por proyecto y por cliente",
      "Viajes frecuentes con jornadas que no siguen un patrón regular",
      "Equipos distribuidos en diferentes ciudades o países",
    ],
    beneficios: [
      "Fichaje desde cualquier ubicación: oficina, cliente o casa",
      "Asignación de fichajes a proyectos y clientes específicos",
      "Compatible con modelos de trabajo híbrido y full-remote",
      "Informes de horas por proyecto para facturación a clientes",
      "Cumplimiento legal sin limitar la flexibilidad del consultor",
    ],
    faq: [
      {
        question: "¿Puedo asignar horas a proyectos específicos?",
        answer:
          "Sí. Fichados permite etiquetar los fichajes por proyecto o cliente, generando informes de horas que facilitan la facturación.",
      },
      {
        question: "¿Funciona cuando el consultor está en las oficinas del cliente?",
        answer:
          "Sí. El consultor ficha desde su móvil independientemente de dónde se encuentre. No necesita estar en la oficina de la consultora.",
      },
      {
        question: "¿Se pueden exportar las horas para facturar al cliente?",
        answer:
          "Sí. Fichados genera informes detallados por proyecto y cliente que puedes exportar en formato Excel o PDF para justificar las horas facturadas.",
      },
    ],
  },
  {
    slug: "inmobiliarias",
    nombre: "Inmobiliarias",
    h1: "Control de fichajes para agencias inmobiliarias",
    description:
      "Sistema de fichaje para inmobiliarias. Registro de jornada de agentes inmobiliarios con visitas, reuniones y trabajo de oficina.",
    intro:
      "Los agentes inmobiliarios combinan trabajo de oficina con visitas a inmuebles, reuniones con clientes y gestiones notariales. Fichados registra toda la jornada sin importar la ubicación del agente.",
    problemas: [
      "Agentes que pasan la mayor parte del día fuera de la oficina",
      "Visitas a inmuebles en horarios no convencionales (tardes, fines de semana)",
      "Dificultad para controlar la jornada de un equipo distribuido",
      "Agentes comerciales con objetivos que pueden fomentar jornadas excesivas",
      "Obligación legal que muchas inmobiliarias pequeñas desconocen",
    ],
    beneficios: [
      "Fichaje móvil que acompaña al agente a visitas y reuniones",
      "Control de jornada sin limitar la autonomía comercial",
      "Alertas de exceso de jornada para prevenir burnout del equipo",
      "Informes de actividad que complementan los KPIs comerciales",
      "Cumplimiento legal sencillo para agencias de cualquier tamaño",
    ],
    faq: [
      {
        question: "¿Los agentes inmobiliarios deben fichar?",
        answer:
          "Sí. Todos los empleados por cuenta ajena deben registrar su jornada, incluyendo los agentes comerciales. La ley no hace excepciones por tipo de actividad.",
      },
      {
        question: "¿Puedo controlar la jornada sin ser intrusivo?",
        answer:
          "Sí. Fichados solo registra la hora de entrada y salida. No rastrea la ubicación de forma continua ni monitoriza las actividades del agente.",
      },
      {
        question: "¿Funciona para agencias con pocos empleados?",
        answer:
          "Sí. Fichados es ideal para agencias pequeñas. Desde 19 €/mes tienes todo lo necesario para cumplir la ley sin complicaciones.",
      },
    ],
  },
  {
    slug: "asesorias",
    nombre: "Asesorías y gestorías",
    h1: "Control de fichajes para asesorías y gestorías",
    description:
      "Sistema de fichaje para asesorías y gestorías. Registro de jornada que cumple la normativa que tú mismo recomiendas a tus clientes.",
    intro:
      "Las asesorías y gestorías aconsejan a sus clientes sobre el cumplimiento del registro de jornada, pero muchas no lo aplican internamente. Fichados te permite predicar con el ejemplo y cumplir la misma normativa que recomiendas.",
    problemas: [
      "Asesores que recomiendan el fichaje a clientes pero no lo aplican internamente",
      "Incoherencia profesional al no cumplir lo que se asesora",
      "Personal que combina trabajo en oficina con visitas a clientes",
      "Picos de trabajo estacionales (IRPF, IVA, Sociedades) con horas extras",
      "Riesgo reputacional si la propia asesoría es sancionada por no fichar",
    ],
    beneficios: [
      "Predica con el ejemplo: cumple la normativa que recomiendas a clientes",
      "Conoce Fichados de primera mano para recomendarlo a tus clientes",
      "Control de horas extras en periodos de campaña fiscal",
      "Fichaje flexible para visitas a clientes y teletrabajo",
      "Descuentos especiales para asesorías que recomienden Fichados",
    ],
    faq: [
      {
        question: "¿Puedo recomendar Fichados a mis clientes?",
        answer:
          "Sí. Ofrecemos un programa de partners para asesorías y gestorías con condiciones especiales. Contacta con nosotros para conocer los detalles.",
      },
      {
        question: "¿Es realmente necesario que una asesoría fiche?",
        answer:
          "Sí. La obligación aplica a todas las empresas con empleados, incluyendo asesorías. Además, como profesional del sector, no fichar genera una contradicción con el asesoramiento que ofreces.",
      },
      {
        question: "¿Gestiona las horas extras de la campaña fiscal?",
        answer:
          "Sí. Fichados registra automáticamente las horas que superan la jornada ordinaria, generando informes claros de las horas extras realizadas durante los picos de trabajo.",
      },
    ],
  },
  {
    slug: "restaurantes",
    nombre: "Restaurantes",
    h1: "Control de fichajes para restaurantes",
    description:
      "Sistema de fichaje para restaurantes. Gestión de turnos de cocina, sala y barra con cumplimiento del RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Los restaurantes tienen turnos partidos, personal de cocina con horarios diferentes al de sala, y picos de actividad estacionales. Fichados gestiona toda esta complejidad con un sistema pensado para el ritmo de la restauración.",
    problemas: [
      "Turnos partidos con pausa de mediodía que complican el registro",
      "Personal de cocina, sala y barra con horarios diferentes",
      "Horas extras habituales en fines de semana y festivos",
      "Alta rotación de personal, especialmente en temporada",
      "Inspecciones de trabajo muy frecuentes en restauración",
    ],
    beneficios: [
      "Fichaje de turnos partidos con múltiples entradas y salidas al día",
      "Gestión diferenciada de personal de cocina, sala y barra",
      "Cálculo automático de horas extras y festivos",
      "Alta instantánea de nuevos empleados sin papeleo",
      "Registros que superan cualquier inspección de trabajo",
    ],
    faq: [
      {
        question: "¿Fichados entiende los turnos partidos de restaurante?",
        answer:
          "Sí. Los empleados pueden fichar múltiples entradas y salidas en un mismo día. El sistema suma automáticamente las horas trabajadas en todos los tramos.",
      },
      {
        question: "¿Qué sanción puede recibir un restaurante por no fichar?",
        answer:
          "Las sanciones por no registrar la jornada van de 751 € a 7.500 € por infracción grave. En caso de reincidencia o irregularidades adicionales, pueden alcanzar los 187.515 €.",
      },
      {
        question: "¿Puedo gestionar cocina y sala por separado?",
        answer:
          "Sí. Puedes crear departamentos o equipos dentro de Fichados y asignar empleados a cada uno, con informes diferenciados por área.",
      },
    ],
  },
  {
    slug: "hoteles",
    nombre: "Hoteles",
    h1: "Control de fichajes para hoteles",
    description:
      "Sistema de fichaje para hoteles. Gestión de recepción 24h, housekeeping, cocina y mantenimiento conforme a la normativa laboral española.",
    intro:
      "Los hoteles operan 24/7 con múltiples departamentos: recepción, housekeeping, restaurante, mantenimiento y spa. Fichados centraliza el control de jornada de todos los equipos en un único sistema.",
    problemas: [
      "Recepción 24 horas con turnos de mañana, tarde y noche",
      "Múltiples departamentos con horarios completamente diferentes",
      "Housekeeping con jornadas que dependen de la ocupación",
      "Temporada alta con contrataciones masivas de refuerzo",
      "Cadenas hoteleras que necesitan control multi-establecimiento",
    ],
    beneficios: [
      "Gestión de turnos 24/7 para recepción y seguridad",
      "Departamentos diferenciados con reglas y horarios propios",
      "Escalabilidad para temporada alta sin costes de configuración",
      "Panel multi-hotel para cadenas y grupos hoteleros",
      "Informes de cumplimiento para auditorías laborales y de calidad",
    ],
    faq: [
      {
        question: "¿Puedo gestionar todos los departamentos del hotel?",
        answer:
          "Sí. Fichados permite crear departamentos (recepción, housekeeping, cocina, mantenimiento, spa) con configuraciones independientes y un panel de visión global.",
      },
      {
        question: "¿Funciona para cadenas de hoteles?",
        answer:
          "Sí. Puedes gestionar múltiples hoteles desde un único panel de administración con datos separados por establecimiento e informes consolidados.",
      },
      {
        question: "¿Cómo gestiono las contrataciones de temporada?",
        answer:
          "Puedes dar de alta empleados en segundos o importarlos masivamente. Al finalizar la temporada, se desactivan conservando el historial para la siguiente campaña.",
      },
    ],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectores.find((s) => s.slug === slug);
}
