export type ArticleCategory = "Normativa" | "Guías" | "Comparativas" | "Novedades";

export interface ContentSection {
  type: "h2" | "h3" | "paragraph" | "list" | "quote" | "cta";
  id?: string;
  text?: string;
  items?: string[];
}

export interface TocEntry {
  id: string;
  title: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  gradient: string;
  content: ContentSection[];
  tableOfContents: TocEntry[];
}

export const CATEGORY_STYLES: Record<ArticleCategory, string> = {
  Normativa: "bg-primary/10 text-primary border-primary/20",
  Guías: "bg-[hsl(142,71%,45%)]/10 text-[hsl(142,71%,45%)] border-[hsl(142,71%,45%)]/20",
  Comparativas: "bg-[hsl(262,83%,58%)]/10 text-[hsl(262,83%,58%)] border-[hsl(262,83%,58%)]/20",
  Novedades: "bg-[hsl(38,92%,50%)]/10 text-[hsl(38,92%,50%)] border-[hsl(38,92%,50%)]/20",
};

export const CATEGORY_GRADIENTS: Record<ArticleCategory, string> = {
  Normativa: "from-primary/30 to-primary/10",
  Guías: "from-[hsl(142,71%,45%)]/30 to-[hsl(142,71%,45%)]/10",
  Comparativas: "from-[hsl(262,83%,58%)]/30 to-[hsl(262,83%,58%)]/10",
  Novedades: "from-[hsl(38,92%,50%)]/30 to-[hsl(38,92%,50%)]/10",
};

export const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "guia-registro-jornada-2026",
    title: "Guía completa del registro de jornada obligatorio en 2026",
    description: "Todo lo que necesitas saber sobre la normativa de fichaje en España: qué dice la ley, a quién aplica y cómo cumplirla sin complicaciones.",
    category: "Normativa",
    date: "15 Mar 2026",
    readTime: "7 min",
    gradient: "from-primary/30 to-primary/10",
    tableOfContents: [
      { id: "que-dice-la-ley", title: "¿Qué dice la ley?" },
      { id: "a-quien-aplica", title: "¿A quién aplica?" },
      { id: "que-debe-registrarse", title: "¿Qué debe registrarse?" },
      { id: "sanciones", title: "Sanciones por incumplimiento" },
      { id: "como-cumplir", title: "Cómo cumplir fácilmente" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Desde la entrada en vigor del **Real Decreto-ley 8/2019**, todas las empresas en España están obligadas a llevar un registro diario de la jornada laboral de sus empleados. Sin embargo, muchas pymes y autónomos aún no cumplen correctamente con esta normativa, exponiéndose a sanciones que pueden alcanzar los **187.515 €**.",
      },
      {
        type: "h2",
        id: "que-dice-la-ley",
        text: "¿Qué dice la ley?",
      },
      {
        type: "paragraph",
        text: "El artículo 34.9 del Estatuto de los Trabajadores establece que la empresa **garantizará el registro diario de jornada**, que deberá incluir el horario concreto de inicio y finalización de la jornada de trabajo de cada persona trabajadora.",
      },
      {
        type: "paragraph",
        text: "Este registro debe conservarse durante un mínimo de **4 años** y estar a disposición de los trabajadores, sus representantes legales y la Inspección de Trabajo.",
      },
      {
        type: "h2",
        id: "a-quien-aplica",
        text: "¿A quién aplica?",
      },
      {
        type: "paragraph",
        text: "La obligación de registrar la jornada aplica a **todas las empresas**, independientemente de su tamaño o sector. Esto incluye:",
      },
      {
        type: "list",
        items: [
          "Empresas con empleados a jornada completa",
          "Trabajadores a tiempo parcial",
          "Empleados en teletrabajo o trabajo remoto",
          "Personal con horario flexible",
          "Trabajadores desplazados o en movilidad",
        ],
      },
      {
        type: "h2",
        id: "que-debe-registrarse",
        text: "¿Qué debe registrarse?",
      },
      {
        type: "paragraph",
        text: "Como mínimo, el registro de jornada debe incluir la **hora de inicio** y la **hora de finalización** de la jornada laboral de cada empleado, cada día trabajado.",
      },
      {
        type: "paragraph",
        text: "Adicionalmente, es recomendable registrar las pausas, descansos y horas extraordinarias para tener un control más preciso y evitar conflictos laborales.",
      },
      {
        type: "h2",
        id: "sanciones",
        text: "Sanciones por incumplimiento",
      },
      {
        type: "paragraph",
        text: "La Inspección de Trabajo puede imponer sanciones significativas por no cumplir con el registro de jornada:",
      },
      {
        type: "list",
        items: [
          "**Leves** (626 – 1.250 €): Defectos formales en el registro",
          "**Graves** (1.251 – 6.250 €): No disponer de registro de jornada",
          "**Muy graves** (6.251 – 187.515 €): Incumplimientos reiterados o que afecten a los derechos de los trabajadores",
        ],
      },
      {
        type: "quote",
        text: "En 2025, la Inspección de Trabajo levantó más de 12.000 actas por infracciones relacionadas con el control horario. La tendencia para 2026 es al alza.",
      },
      {
        type: "cta",
        text: "Cumple la ley de fichaje en 1 minuto",
      },
      {
        type: "h2",
        id: "como-cumplir",
        text: "Cómo cumplir fácilmente",
      },
      {
        type: "paragraph",
        text: "La forma más sencilla de cumplir con la normativa es utilizar un sistema de fichaje digital que registre automáticamente las entradas y salidas de tus empleados. Fichados te permite:",
      },
      {
        type: "list",
        items: [
          "Registrar fichajes desde cualquier dispositivo",
          "Generar informes automáticos para la Inspección de Trabajo",
          "Gestionar ausencias, vacaciones y permisos",
          "Cumplir con la normativa sin esfuerzo",
        ],
      },
      {
        type: "paragraph",
        text: "El alta es inmediata, sin permanencia y con soporte incluido. Tu empresa estará cumpliendo la ley desde el primer minuto.",
      },
    ],
  },
  {
    id: "2",
    slug: "errores-pymes-control-horario",
    title: "5 errores que cometen las pymes con el control horario",
    description: "Desde usar Excel hasta no conservar los registros. Descubre los errores más comunes y cómo evitar sanciones innecesarias.",
    category: "Guías",
    date: "12 Mar 2026",
    readTime: "5 min",
    gradient: "from-[hsl(142,71%,45%)]/30 to-[hsl(142,71%,45%)]/10",
    tableOfContents: [
      { id: "error-1-excel", title: "Error 1: Usar Excel o papel" },
      { id: "error-2-no-conservar", title: "Error 2: No conservar registros" },
      { id: "error-3-no-incluir-pausas", title: "Error 3: No registrar pausas" },
      { id: "error-4-teletrabajo", title: "Error 4: Ignorar el teletrabajo" },
      { id: "error-5-no-firmar", title: "Error 5: No firmar los registros" },
    ],
    content: [
      {
        type: "paragraph",
        text: "El control horario es obligatorio desde 2019, pero muchas pymes siguen cometiendo errores que pueden costarles miles de euros en sanciones. Estos son los **5 errores más comunes** y cómo evitarlos.",
      },
      {
        type: "h2",
        id: "error-1-excel",
        text: "Error 1: Usar Excel o papel",
      },
      {
        type: "paragraph",
        text: "Muchas empresas aún utilizan hojas de cálculo o registros en papel para controlar la jornada. Aunque la ley no prohíbe estos métodos, son **propensos a errores**, difíciles de auditar y no garantizan la integridad de los datos.",
      },
      {
        type: "paragraph",
        text: "Un inspector de trabajo puede cuestionar la validez de un Excel modificable. Un sistema digital con registros inmutables ofrece mucha más seguridad jurídica.",
      },
      {
        type: "h2",
        id: "error-2-no-conservar",
        text: "Error 2: No conservar registros 4 años",
      },
      {
        type: "paragraph",
        text: "La ley obliga a conservar los registros de jornada durante **4 años**. Muchas empresas los eliminan al cambiar de año o al cambiar de herramienta, perdiendo información crítica ante una inspección.",
      },
      {
        type: "h2",
        id: "error-3-no-incluir-pausas",
        text: "Error 3: No registrar las pausas",
      },
      {
        type: "paragraph",
        text: "Aunque el mínimo legal es registrar hora de entrada y salida, no documentar las pausas puede generar conflictos con los empleados y dificultar el cálculo de horas extraordinarias.",
      },
      {
        type: "quote",
        text: "Un sistema que registra automáticamente las pausas elimina discrepancias y protege tanto a la empresa como al trabajador.",
      },
      {
        type: "h2",
        id: "error-4-teletrabajo",
        text: "Error 4: Ignorar el teletrabajo",
      },
      {
        type: "paragraph",
        text: "Con la Ley 10/2021 de trabajo a distancia, los empleados que teletrabajan también deben fichar. No tener un sistema que permita el fichaje remoto es un incumplimiento directo.",
      },
      {
        type: "cta",
        text: "Fichaje desde cualquier lugar, en cualquier dispositivo",
      },
      {
        type: "h2",
        id: "error-5-no-firmar",
        text: "Error 5: No obtener confirmación del empleado",
      },
      {
        type: "paragraph",
        text: "Los registros deben ser accesibles para los trabajadores. Idealmente, cada empleado debería poder consultar y confirmar sus propios fichajes. Un sistema digital lo hace automáticamente.",
      },
      {
        type: "paragraph",
        text: "Evitar estos errores es sencillo con la herramienta adecuada. Fichados automatiza todo el proceso para que tú te centres en lo que importa: tu negocio.",
      },
    ],
  },
  {
    id: "3",
    slug: "fichados-vs-excel-comparativa",
    title: "Fichados vs Excel: ¿qué método de fichaje te conviene?",
    description: "Comparamos el fichaje manual con hojas de cálculo frente a un sistema digital automático. Spoiler: uno puede costarte una multa.",
    category: "Comparativas",
    date: "8 Mar 2026",
    readTime: "6 min",
    gradient: "from-[hsl(262,83%,58%)]/30 to-[hsl(262,83%,58%)]/10",
    tableOfContents: [
      { id: "contexto", title: "El contexto actual" },
      { id: "excel-pros-contras", title: "Excel: pros y contras" },
      { id: "fichados-ventajas", title: "Fichados: ventajas clave" },
      { id: "comparativa-detallada", title: "Comparativa detallada" },
      { id: "conclusion", title: "Conclusión" },
    ],
    content: [
      {
        type: "paragraph",
        text: "A la hora de elegir cómo registrar la jornada laboral, muchas empresas se debaten entre seguir con Excel o dar el salto a un sistema digital. En esta comparativa analizamos ambas opciones para que tomes la mejor decisión.",
      },
      {
        type: "h2",
        id: "contexto",
        text: "El contexto actual",
      },
      {
        type: "paragraph",
        text: "Desde 2019, todas las empresas españolas deben registrar la jornada de sus empleados. La Inspección de Trabajo ha intensificado los controles y las sanciones pueden alcanzar los **187.515 €**.",
      },
      {
        type: "h2",
        id: "excel-pros-contras",
        text: "Excel: pros y contras",
      },
      {
        type: "paragraph",
        text: "Excel es una herramienta versátil, pero tiene limitaciones importantes para el control horario:",
      },
      {
        type: "list",
        items: [
          "**Pro**: Coste cero si ya tienes Office",
          "**Pro**: Flexibilidad para personalizar formatos",
          "**Contra**: Los datos son fácilmente manipulables",
          "**Contra**: No genera informes automáticos",
          "**Contra**: Difícil de escalar con más empleados",
          "**Contra**: Sin validez jurídica garantizada",
        ],
      },
      {
        type: "h2",
        id: "fichados-ventajas",
        text: "Fichados: ventajas clave",
      },
      {
        type: "list",
        items: [
          "Registros inmutables con marca temporal verificable",
          "Informes automáticos listos para inspección",
          "Fichaje desde móvil, tablet u ordenador",
          "Gestión de ausencias y vacaciones integrada",
          "Geolocalización opcional para equipos en movilidad",
          "Sin permanencia ni compromisos a largo plazo",
        ],
      },
      {
        type: "cta",
        text: "Deja de arriesgar con Excel. Alta en 1 minuto",
      },
      {
        type: "h2",
        id: "comparativa-detallada",
        text: "Comparativa detallada",
      },
      {
        type: "paragraph",
        text: "Mientras que Excel puede servir para una empresa de 2-3 personas, a partir de 5 empleados la gestión se vuelve insostenible. Los errores humanos se multiplican, los datos se pierden y ante una inspección no tienes garantías.",
      },
      {
        type: "h2",
        id: "conclusion",
        text: "Conclusión",
      },
      {
        type: "paragraph",
        text: "Si buscas cumplir la ley con garantías, ahorrar tiempo y evitar sanciones, un sistema digital como Fichados es la opción más inteligente. El coste es mínimo comparado con el riesgo de una multa.",
      },
    ],
  },
  {
    id: "4",
    slug: "sanciones-no-fichar-multas",
    title: "Sanciones por no fichar: multas de hasta 225.018 €",
    description: "La Inspección de Trabajo intensifica los controles. Conoce las sanciones exactas por incumplir el registro de jornada.",
    category: "Normativa",
    date: "5 Mar 2026",
    readTime: "4 min",
    gradient: "from-primary/30 to-primary/10",
    tableOfContents: [
      { id: "marco-legal", title: "Marco legal" },
      { id: "tipos-sanciones", title: "Tipos de sanciones" },
    ],
    content: [
      { type: "paragraph", text: "La Inspección de Trabajo ha intensificado significativamente los controles sobre el registro de jornada. En este artículo repasamos las sanciones exactas y cómo evitarlas." },
      { type: "h2", id: "marco-legal", text: "Marco legal" },
      { type: "paragraph", text: "El Real Decreto-ley 8/2019 estableció la obligatoriedad del registro de jornada. Su incumplimiento se tipifica como infracción grave en la **Ley sobre Infracciones y Sanciones en el Orden Social (LISOS)**." },
      { type: "h2", id: "tipos-sanciones", text: "Tipos de sanciones" },
      { type: "list", items: ["**Leves** (626 – 1.250 €): Defectos formales", "**Graves** (1.251 – 6.250 €): Ausencia de registro", "**Muy graves** (6.251 – 187.515 €): Incumplimientos reiterados"] },
      { type: "cta", text: "Evita sanciones. Cumple la ley en 1 minuto" },
      { type: "paragraph", text: "La mejor forma de evitar estas sanciones es implementar un sistema de fichaje digital que garantice el cumplimiento automático de la normativa." },
    ],
  },
  {
    id: "5",
    slug: "implementar-fichaje-digital-3-pasos",
    title: "Cómo implementar el fichaje digital en 3 pasos",
    description: "Una guía práctica para que cualquier empresa, sin importar su tamaño, empiece a fichar digitalmente en menos de 5 minutos.",
    category: "Guías",
    date: "1 Mar 2026",
    readTime: "4 min",
    gradient: "from-[hsl(142,71%,45%)]/30 to-[hsl(142,71%,45%)]/10",
    tableOfContents: [
      { id: "paso-1-registro", title: "Paso 1: Registro" },
      { id: "paso-2-empleados", title: "Paso 2: Añadir empleados" },
      { id: "paso-3-fichar", title: "Paso 3: Empezar a fichar" },
    ],
    content: [
      { type: "paragraph", text: "Implementar un sistema de fichaje digital no tiene por qué ser complicado. Con Fichados, puedes estar cumpliendo la ley en **menos de 5 minutos**." },
      { type: "h2", id: "paso-1-registro", text: "Paso 1: Registra tu empresa" },
      { type: "paragraph", text: "El proceso de alta es inmediato. Solo necesitas el NIF de tu empresa, un email de administrador y los datos básicos de tu organización." },
      { type: "h2", id: "paso-2-empleados", text: "Paso 2: Añade a tus empleados" },
      { type: "paragraph", text: "Invita a tus empleados por email. Cada uno recibirá un enlace para activar su cuenta y empezar a fichar desde cualquier dispositivo." },
      { type: "h2", id: "paso-3-fichar", text: "Paso 3: Empieza a fichar" },
      { type: "paragraph", text: "Tus empleados podrán fichar su entrada y salida con un solo clic. Tú verás todo el registro en tiempo real desde el panel de administración." },
      { type: "cta", text: "Alta en 1 minuto. Sin permanencia" },
    ],
  },
  {
    id: "6",
    slug: "novedades-normativa-laboral-2026",
    title: "Novedades en la normativa laboral para 2026",
    description: "Los cambios más importantes en materia de control horario, teletrabajo y registro de jornada que afectan a las empresas españolas.",
    category: "Novedades",
    date: "25 Feb 2026",
    readTime: "6 min",
    gradient: "from-[hsl(38,92%,50%)]/30 to-[hsl(38,92%,50%)]/10",
    tableOfContents: [
      { id: "cambios-principales", title: "Cambios principales" },
      { id: "impacto-empresas", title: "Impacto en las empresas" },
    ],
    content: [
      { type: "paragraph", text: "2026 trae consigo varios cambios normativos que afectan directamente a la gestión laboral de las empresas españolas. Repasamos los más relevantes." },
      { type: "h2", id: "cambios-principales", text: "Cambios principales" },
      { type: "paragraph", text: "Entre las novedades más destacadas se encuentra el endurecimiento de las sanciones por incumplimiento del registro de jornada y la ampliación de los requisitos para el teletrabajo." },
      { type: "h2", id: "impacto-empresas", text: "Impacto en las empresas" },
      { type: "paragraph", text: "Las empresas deberán adaptar sus sistemas de control horario para cumplir con los nuevos requisitos. Un sistema digital actualizado es la mejor garantía de cumplimiento." },
      { type: "cta", text: "Adapta tu empresa a la nueva normativa" },
    ],
  },
  {
    id: "7",
    slug: "obligatorio-fichar-teletrabajo",
    title: "¿Es obligatorio fichar en el teletrabajo?",
    description: "Sí, y te explicamos exactamente cómo debe hacerse según la Ley 10/2021 de trabajo a distancia y el Real Decreto-ley 8/2019.",
    category: "Normativa",
    date: "20 Feb 2026",
    readTime: "5 min",
    gradient: "from-primary/30 to-primary/10",
    tableOfContents: [
      { id: "marco-normativo", title: "Marco normativo" },
      { id: "como-fichar-remoto", title: "Cómo fichar en remoto" },
    ],
    content: [
      { type: "paragraph", text: "Con el auge del teletrabajo, una de las preguntas más frecuentes es si los empleados remotos también deben fichar. La respuesta es **sí**, rotundamente." },
      { type: "h2", id: "marco-normativo", text: "Marco normativo" },
      { type: "paragraph", text: "La Ley 10/2021 de trabajo a distancia, combinada con el Real Decreto-ley 8/2019, establece claramente que el registro de jornada es obligatorio para **todos** los trabajadores, incluidos los que teletrabajan." },
      { type: "h2", id: "como-fichar-remoto", text: "Cómo fichar en remoto" },
      { type: "paragraph", text: "Un sistema de fichaje digital permite a los empleados registrar su jornada desde cualquier ubicación, usando su móvil u ordenador. Fichados está diseñado para esto." },
      { type: "cta", text: "Fichaje remoto para tu equipo. Sin complicaciones" },
    ],
  },
  {
    id: "8",
    slug: "fichados-vs-factorial-vs-sesame",
    title: "Fichados vs Factorial vs Sesame: comparativa 2026",
    description: "Analizamos las tres herramientas de fichaje más usadas en España. Precios, funcionalidades y facilidad de uso frente a frente.",
    category: "Comparativas",
    date: "15 Feb 2026",
    readTime: "8 min",
    gradient: "from-[hsl(262,83%,58%)]/30 to-[hsl(262,83%,58%)]/10",
    tableOfContents: [
      { id: "criterios", title: "Criterios de comparación" },
      { id: "resultado", title: "Resultado" },
    ],
    content: [
      { type: "paragraph", text: "Elegir la herramienta de fichaje adecuada puede marcar la diferencia entre cumplir la ley sin esfuerzo o enfrentarse a problemas. Comparamos las tres opciones más populares en España." },
      { type: "h2", id: "criterios", text: "Criterios de comparación" },
      { type: "paragraph", text: "Hemos evaluado precio, facilidad de uso, funcionalidades, soporte al cliente y adecuación a la normativa española." },
      { type: "h2", id: "resultado", text: "Resultado" },
      { type: "paragraph", text: "Fichados destaca por su **sencillez**, su enfoque 100% en la normativa española y su precio competitivo sin permanencia." },
      { type: "cta", text: "Prueba Fichados y compruébalo tú mismo" },
    ],
  },
  {
    id: "9",
    slug: "gestionar-vacaciones-equipo",
    title: "Cómo gestionar las vacaciones de tu equipo sin dramas",
    description: "Calendario compartido, aprobaciones automáticas y control de días restantes. La guía definitiva para gestionar ausencias.",
    category: "Guías",
    date: "10 Feb 2026",
    readTime: "5 min",
    gradient: "from-[hsl(142,71%,45%)]/30 to-[hsl(142,71%,45%)]/10",
    tableOfContents: [
      { id: "problemas-comunes", title: "Problemas comunes" },
      { id: "solucion-digital", title: "La solución digital" },
    ],
    content: [
      { type: "paragraph", text: "Gestionar las vacaciones y ausencias de un equipo puede ser una pesadilla si no tienes las herramientas adecuadas. Te explicamos cómo hacerlo de forma eficiente." },
      { type: "h2", id: "problemas-comunes", text: "Problemas comunes" },
      { type: "paragraph", text: "Solapamientos, pérdida de días, falta de visibilidad... Los problemas se multiplican cuando la gestión se hace por email o en hojas de cálculo." },
      { type: "h2", id: "solucion-digital", text: "La solución digital" },
      { type: "paragraph", text: "Fichados incluye un módulo de gestión de ausencias con calendario compartido, aprobaciones automáticas y control de días restantes en tiempo real." },
      { type: "cta", text: "Gestiona ausencias sin complicaciones" },
    ],
  },
  {
    id: "10",
    slug: "fichados-geolocalizacion-fichajes",
    title: "Fichados lanza la geolocalización de fichajes",
    description: "Nueva funcionalidad que permite registrar la ubicación exacta de cada fichaje. Ideal para equipos en movilidad o múltiples sedes.",
    category: "Novedades",
    date: "5 Feb 2026",
    readTime: "3 min",
    gradient: "from-[hsl(38,92%,50%)]/30 to-[hsl(38,92%,50%)]/10",
    tableOfContents: [
      { id: "que-es", title: "¿Qué es?" },
      { id: "como-funciona", title: "Cómo funciona" },
    ],
    content: [
      { type: "paragraph", text: "Nos complace anunciar una nueva funcionalidad muy solicitada: la **geolocalización de fichajes**. Ahora puedes saber desde dónde fichan tus empleados." },
      { type: "h2", id: "que-es", text: "¿Qué es la geolocalización de fichajes?" },
      { type: "paragraph", text: "Cada vez que un empleado ficha su entrada o salida, el sistema registra opcionalmente la ubicación GPS. Ideal para empresas con equipos en movilidad, múltiples sedes o trabajo en campo." },
      { type: "h2", id: "como-funciona", text: "Cómo funciona" },
      { type: "paragraph", text: "El empleado solo necesita permitir el acceso a su ubicación en el navegador o la app. El registro se hace automáticamente junto con el fichaje." },
      { type: "cta", text: "Descubre la geolocalización en Fichados" },
    ],
  },
];

export const CATEGORIES: Array<ArticleCategory | "Todos"> = ["Todos", "Normativa", "Guías", "Comparativas", "Novedades"];
