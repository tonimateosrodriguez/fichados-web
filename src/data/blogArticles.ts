export type ArticleCategory = "Normativa" | "Guías" | "Comparativas" | "Novedades";

export interface ContentSection {
  type:
    | "h2"
    | "h3"
    | "paragraph"
    | "list"
    | "quote"
    | "cta"
    | "verdict"
    | "callout"
    | "table";
  id?: string;
  text?: string;
  items?: string[];
  /** verdict: si | no | depende · callout: info | aviso | clave */
  variant?: "si" | "no" | "depende" | "info" | "aviso" | "clave";
  /** título corto para verdict/callout, o caption para table */
  title?: string;
  /** table */
  headers?: string[];
  rows?: string[][];
  highlightRow?: number;
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
  faqs?: { question: string; answer: string }[];
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
  {
    "id": "11",
    "slug": "fichaje-digital-obligatorio-2026",
    "title": "Fichaje digital obligatorio: la ley en 2026",
    "description": "Fichaje digital obligatorio en España: qué exige la ley en 2026, la reforma en marcha y cómo evitar multas de hasta 187.515 € con honestidad.",
    "category": "Normativa",
    "date": "18 Jun 2026",
    "readTime": "9 min",
    "gradient": "from-primary/30 to-primary/10",
    "tableOfContents": [
      {
        "id": "es-obligatorio",
        "title": "¿Es obligatorio el fichaje digital en España?"
      },
      {
        "id": "que-dice-la-ley",
        "title": "Qué dice la ley: RDL 8/2019 y art. 34.9 ET"
      },
      {
        "id": "reforma-digital",
        "title": "La reforma hacia el fichaje digital obligatorio"
      },
      {
        "id": "papel-sigue-valiendo",
        "title": "¿Sigue valiendo el fichaje en papel?"
      },
      {
        "id": "sanciones",
        "title": "Sanciones por no registrar la jornada y otros incumplimientos"
      },
      {
        "id": "implantar-5-minutos",
        "title": "Cómo implantar el fichaje digital en 5 minutos"
      },
      {
        "id": "preguntas-frecuentes",
        "title": "Preguntas frecuentes"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Si has llegado hasta aquí buscando si el **fichaje digital es obligatorio** en tu empresa, te lo decimos claro desde el principio, sin marketing del miedo: **el registro de jornada es obligatorio en España desde 2019**, pero que ese registro sea **digital** todavía no es una obligación legal plena para todas las empresas. La diferencia es importante y vamos a explicártela con honestidad, porque te afecta directamente."
      },
      {
        "type": "paragraph",
        "text": "En esta guía te contamos exactamente qué exige la ley hoy (junio de 2026), qué cambiará con la reforma que el Ministerio de Trabajo tiene en tramitación, por qué el papel sigue siendo legal pero es un riesgo, y cómo pasarte al fichaje digital en cinco minutos sin complicarte la vida."
      },
      {
        "type": "h2",
        "id": "es-obligatorio",
        "text": "¿Es obligatorio el fichaje digital en España?"
      },
      {
        "type": "paragraph",
        "text": "Vamos a separar dos cosas que mucha gente mezcla, y que generan confusión (y muchas veces, multas):"
      },
      {
        "type": "list",
        "items": [
          "**Registrar la jornada SÍ es obligatorio.** Desde el 12 de mayo de 2019, toda empresa con personas trabajadoras por cuenta ajena debe llevar un registro diario de la jornada de cada empleado. Sin excepciones por tamaño: aplica igual a una empresa de 3 personas que a una de 300.",
          "**Que el registro sea DIGITAL todavía no es obligatorio para todos.** A día de hoy, la ley no te obliga a usar una app o un sistema telemático. Puedes registrar la jornada en papel siempre que el sistema sea fiable, objetivo y accesible. El matiz: hay una reforma en tramitación que sí haría obligatorio el formato digital."
        ]
      },
      {
        "type": "paragraph",
        "text": "Dicho de otra forma: **hoy estás obligado a fichar, pero la ley aún no te obliga a hacerlo con un sistema digital**. Eso sí, la dirección a la que se mueve la normativa es clara, y la realidad de las inspecciones también: un registro digital es mucho más sólido, más difícil de cuestionar y te protege mejor. Más abajo te explicamos por qué."
      },
      {
        "type": "quote",
        "text": "Registro de jornada = obligatorio desde 2019. Formato digital = muy recomendado hoy, y probablemente obligatorio pronto con la reforma en camino."
      },
      {
        "type": "h2",
        "id": "que-dice-la-ley",
        "text": "Qué dice la ley: RDL 8/2019 y art. 34.9 ET"
      },
      {
        "type": "paragraph",
        "text": "La obligación nace del **Real Decreto-ley 8/2019, de 8 de marzo**, que modificó el **artículo 34.9 del Estatuto de los Trabajadores**. Desde entonces, el texto legal es directo:"
      },
      {
        "type": "quote",
        "text": "\"La empresa garantizará el registro diario de jornada, que deberá incluir el horario concreto de inicio y finalización de la jornada de trabajo de cada persona trabajadora.\" (art. 34.9 ET)"
      },
      {
        "type": "paragraph",
        "text": "De esa frase tan corta salen unas cuantas obligaciones concretas que conviene tener claras:"
      },
      {
        "type": "list",
        "items": [
          "**Registro diario.** No vale un cuadrante mensual estimado ni \"lo de siempre\". Hay que registrar cada día, con la hora real de entrada y de salida.",
          "**Para cada persona trabajadora.** Aplica a toda la plantilla por cuenta ajena: jornada completa, parcial, fijos, temporales y también quienes están en teletrabajo.",
          "**Conservación durante 4 años.** Los registros deben guardarse y estar a disposición de la plantilla, sus representantes y la Inspección de Trabajo durante cuatro años.",
          "**Sistema objetivo y fiable.** El registro tiene que reflejar la jornada real. Un sistema que se pueda manipular sin rastro es un sistema frágil ante una inspección."
        ]
      },
      {
        "type": "paragraph",
        "text": "La ley **no impone una herramienta concreta**, y ahí está la clave de toda la confusión: te dice qué tienes que conseguir (un registro fiable, diario y conservado 4 años), pero no con qué tecnología. Por eso, técnicamente, un cuaderno de fichas sigue siendo legal hoy. El problema llega cuando ese cuaderno tiene que aguantar el escrutinio de un inspector. Si quieres profundizar en todos los requisitos, tienes el detalle paso a paso en nuestra guía completa del registro de jornada en 2026, dentro del blog de Fichados."
      },
      {
        "type": "h2",
        "id": "reforma-digital",
        "text": "La reforma hacia el fichaje digital obligatorio"
      },
      {
        "type": "paragraph",
        "text": "Aquí está la novedad que muchas webs cuentan mal. El Ministerio de Trabajo tiene en tramitación un **anteproyecto de ley** que, entre otras medidas (como la reducción de la jornada máxima), busca **hacer obligatorio el registro de jornada en formato digital y accesible de forma telemática**. La idea de fondo es acabar con los registros de papel fáciles de manipular y permitir que la Inspección pueda acceder a los datos en remoto, en tiempo real."
      },
      {
        "type": "paragraph",
        "text": "Seamos honestos con el estado real de las cosas, porque es justo lo que te interesa saber:"
      },
      {
        "type": "list",
        "items": [
          "**Es una reforma en tramitación, no una ley en vigor.** A junio de 2026, el formato digital obligatorio para todas las empresas todavía NO está aprobado ni publicado en el BOE. Cualquiera que te diga \"el fichaje digital ya es obligatorio por ley\" como hecho consumado, te está adelantando algo que aún no ha ocurrido.",
          "**La dirección es inequívoca.** El sentido de la reforma, los pronunciamientos del Ministerio y la propia práctica inspectora apuntan todos al mismo sitio: el papel tiene los días contados y el registro telemático será el estándar.",
          "**Adelantarte no tiene desventajas.** Pasarte al digital ahora no te cuesta apenas nada y te deja preparado para cuando la obligación entre en vigor. Esperar, en cambio, te expone a una inspección con un sistema más débil."
        ]
      },
      {
        "type": "paragraph",
        "text": "Nuestra recomendación, sin venderte humo: trata el fichaje digital como **lo más seguro y casi inevitable**, no como una obligación que ya existe para todos. Adelantarte es la decisión sensata. La obligación es legal y normativa; la herramienta concreta (la app, el sistema) es una decisión tuya de software, y conviene elegir una que ya esté preparada para el formato telemático que viene."
      },
      {
        "type": "h2",
        "id": "papel-sigue-valiendo",
        "text": "¿Sigue valiendo el fichaje en papel?"
      },
      {
        "type": "paragraph",
        "text": "Sí, hoy el fichaje en papel **sigue siendo legal**. Si llevas un cuadrante firmado a mano con las horas de entrada y salida de cada empleado, cumples formalmente la letra del art. 34.9 ET. Pero \"legal\" y \"buena idea\" no son lo mismo, y aquí es donde tienes que decidir con la cabeza fría."
      },
      {
        "type": "paragraph",
        "text": "Estos son los problemas reales del papel cuando llega una inspección o un conflicto laboral:"
      },
      {
        "type": "list",
        "items": [
          "**Es fácil de cuestionar.** Un inspector puede sospechar que las firmas se han rellenado todas el mismo día. Sin marca de tiempo real, tu registro pierde fuerza probatoria.",
          "**Se pierde, se moja, se traspapela.** Cuatro años de fichas en papel ocupan, se deterioran y a menudo simplemente desaparecen justo cuando las necesitas.",
          "**No tiene trazabilidad.** Si alguien modifica una hora con típex, no queda rastro. Un sistema digital con registros inalterables sí deja constancia de todo.",
          "**Da más trabajo del que parece.** Recopilar, sumar horas, detectar excesos de jornada y preparar un informe para la Inspección a mano es lento y propenso a errores.",
          "**Va contracorriente de la reforma.** Si la ley de registro digital se aprueba, tendrás que migrar igualmente. ¿Para qué montar un sistema de papel que sabes que vas a tener que tirar?"
        ]
      },
      {
        "type": "paragraph",
        "text": "Resumen honesto: el papel es legal hoy, pero es **frágil ante inspección** y va a quedarse obsoleto. Si todavía no has dado el salto, ahora es el mejor momento. Y si quieres empezar a ordenarte aunque sea sobre papel mientras decides, en la sección de recursos de Fichados tienes un modelo de registro de jornada descargable para imprimir."
      },
      {
        "type": "h2",
        "id": "sanciones",
        "text": "Sanciones por no registrar la jornada y otros incumplimientos"
      },
      {
        "type": "paragraph",
        "text": "No llevar el registro de jornada (o llevarlo mal) es una **infracción grave** en materia laboral, tipificada en la Ley sobre Infracciones y Sanciones en el Orden Social (LISOS). Conviene entender bien las cifras para no caer ni en la despreocupación ni en el alarmismo:"
      },
      {
        "type": "list",
        "items": [
          "**No disponer del registro de jornada es una infracción grave:** el tramo de las graves va de **1.251 € a 6.250 €** por empresa (no por empleado), y el importe sube según la gravedad y el número de personas afectadas.",
          "**El abanico completo de sanciones laborales** se divide en tres niveles: leves (**626 – 1.250 €**), graves (**1.251 – 6.250 €**) y muy graves (**6.251 – 187.515 €**). El techo de 187.515 € corresponde a las infracciones **muy graves**, que se alcanzan al acumular incumplimientos serios (por ejemplo, horas extra no registradas ni pagadas, que además generan reclamaciones de salarios y de cotizaciones a la Seguridad Social), no por el mero hecho de no fichar.",
          "**El coste oculto:** sin registro fiable, en un juicio por horas extra la carga de la prueba se vuelve en tu contra. Si el trabajador reclama horas y tú no puedes demostrar su jornada real, lo normal es que el juzgado dé por buena la versión del empleado."
        ]
      },
      {
        "type": "paragraph",
        "text": "Es decir, el riesgo no es solo la multa directa: es la suma de sanción, atrasos salariales, recargos de la Seguridad Social y el desgaste de un procedimiento. En el blog de Fichados desglosamos cada tramo con ejemplos en la guía de sanciones por no fichar, y en la sección de herramientas tienes una calculadora de multas por fichaje para estimar tu exposición real."
      },
      {
        "type": "quote",
        "text": "Un sistema de fichaje digital cuesta desde 9 €/mes. La infracción grave por no llevar el registro parte de 1.251 €. La matemática es sencilla."
      },
      {
        "type": "h2",
        "id": "implantar-5-minutos",
        "text": "Cómo implantar el fichaje digital en 5 minutos"
      },
      {
        "type": "paragraph",
        "text": "La buena noticia: cumplir con un sistema digital es mucho más fácil de lo que imaginas, y no necesitas instalar nada ni montar hardware. Con Fichados, el proceso es este:"
      },
      {
        "type": "list",
        "items": [
          "**Crea tu empresa** entrando en app.fichados.es/registro-empresa. Sin tarjeta, sin demo y sin que te llame un comercial.",
          "**Invita a tu equipo por email.** Cada empleado recibe su acceso y ficha desde su móvil, tablet u ordenador, directamente en el navegador, sin instalar ninguna app.",
          "**Empieza a fichar.** Entrada, salida y pausas con un toque. Tú lo ves todo en tiempo real desde el panel de administración.",
          "**Descarga los informes cuando los necesites.** Informes en PDF y Excel listos para la Inspección, con los registros conservados de forma inalterable durante más de 4 años.",
          "**Activa lo que necesites.** Gestión de vacaciones, ausencias y permisos, y geolocalización opcional si tu actividad lo requiere."
        ]
      },
      {
        "type": "paragraph",
        "text": "El precio es transparente: **9 €/mes hasta 3 empleados** y **3 € por cada empleado adicional**, sin permanencia y con un **20 % de descuento** si pagas el año por adelantado. Sin sorpresas en la factura. Si quieres ver cómo encaja frente a otras opciones del mercado, en Fichados tienes la comparativa detallada de Fichados frente a Factorial."
      },
      {
        "type": "cta",
        "text": "Pásate al fichaje digital hoy y olvídate del riesgo de multa por no registrar la jornada. Crea tu empresa en 5 minutos en app.fichados.es/registro-empresa, sin tarjeta ni permanencia, desde 9 €/mes."
      },
      {
        "type": "h2",
        "id": "preguntas-frecuentes",
        "text": "Preguntas frecuentes"
      },
      {
        "type": "h3",
        "id": "faq-obligatorio-2026",
        "text": "¿Es obligatorio el fichaje digital en 2026?"
      },
      {
        "type": "paragraph",
        "text": "El **registro de jornada** es obligatorio desde 2019 para todas las empresas. El **formato digital** todavía no es obligatorio por ley para todas, pero hay una reforma del Ministerio de Trabajo en tramitación que lo haría obligatorio. Por seguridad jurídica y de cara a la inspección, el digital es hoy la opción más recomendable."
      },
      {
        "type": "h3",
        "id": "faq-papel-multa",
        "text": "¿Me pueden multar por fichar en papel?"
      },
      {
        "type": "paragraph",
        "text": "No por usar papel en sí, porque hoy sigue siendo legal. Te pueden multar si **no llevas registro** o si el que llevas no es fiable, objetivo o no refleja la jornada real. El papel es más fácil de cuestionar en una inspección, por eso es un sistema frágil aunque sea legal."
      },
      {
        "type": "h3",
        "id": "faq-pequenas-empresas",
        "text": "¿Las empresas pequeñas también tienen que fichar?"
      },
      {
        "type": "paragraph",
        "text": "Sí. La obligación de registrar la jornada no depende del tamaño de la empresa. Aplica igual a un negocio de 2 o 3 empleados que a una gran empresa. No existe una excepción por número de trabajadores."
      },
      {
        "type": "h3",
        "id": "faq-teletrabajo",
        "text": "¿Hay que fichar también en teletrabajo?"
      },
      {
        "type": "paragraph",
        "text": "Sí. La obligación de registro de jornada se aplica igualmente al trabajo a distancia. De hecho, un sistema digital accesible desde cualquier dispositivo es la forma más cómoda de cumplir cuando parte de la plantilla trabaja en remoto. Lo explicamos a fondo en el artículo del blog sobre si es obligatorio fichar en teletrabajo."
      },
      {
        "type": "h3",
        "id": "faq-cuanto-conservar",
        "text": "¿Cuánto tiempo hay que conservar los registros de jornada?"
      },
      {
        "type": "paragraph",
        "text": "El art. 34.9 ET obliga a conservar los registros durante **4 años**, y deben estar a disposición de la plantilla, de sus representantes legales y de la Inspección de Trabajo. Con un sistema digital, esa conservación es automática e inalterable, sin que tengas que archivar nada a mano."
      }
    ]
  },
  {
    "id": "12",
    "slug": "control-horario-digital-obligatorio-2026",
    "title": "Control horario digital obligatorio 2026: guía pymes",
    "description": "¿Es obligatorio el control horario digital en 2026? Qué exige la ley, la reforma en marcha, requisitos del sistema y sanciones. Guía clara para pymes.",
    "category": "Normativa",
    "date": "18 Jun 2026",
    "readTime": "9 min",
    "gradient": "from-primary/30 to-primary/10",
    "tableOfContents": [
      {
        "id": "es-obligatorio",
        "title": "¿Es obligatorio el control horario digital?"
      },
      {
        "id": "que-exige-la-ley",
        "title": "Qué exige la ley a las empresas"
      },
      {
        "id": "diferencia-control-registro",
        "title": "Diferencia entre control horario y registro de jornada"
      },
      {
        "id": "la-reforma",
        "title": "La reforma del control horario digital"
      },
      {
        "id": "requisitos-sistema",
        "title": "Requisitos de un sistema válido"
      },
      {
        "id": "sanciones",
        "title": "Sanciones por no llevar control horario"
      },
      {
        "id": "como-elegir",
        "title": "Cómo elegir un sistema de control horario"
      },
      {
        "id": "preguntas-frecuentes",
        "title": "Preguntas frecuentes"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Si diriges una pyme, seguramente te has hecho esta pregunta más de una vez: **¿el control horario digital es obligatorio en 2026?** La respuesta honesta tiene matices, y conviene que los conozcas bien antes de que aparezca la Inspección de Trabajo. Te lo resumimos sin rodeos: **controlar la jornada de tus empleados es obligatorio desde 2019**. Lo que todavía no es una obligación plena para todas las empresas es que ese control sea, por ley, en formato **digital**. Pero hay una reforma en marcha que va justo en esa dirección."
      },
      {
        "type": "paragraph",
        "text": "En esta guía te explicamos, desde el punto de vista de quien gestiona una empresa pequeña o un departamento de RRHH, qué te exige la norma hoy, qué cambia con la reforma del Ministerio de Trabajo, qué requisitos debe cumplir un sistema válido y a cuánto ascienden las multas si no haces nada. Sin tecnicismos innecesarios y con datos concretos."
      },
      {
        "type": "h2",
        "id": "es-obligatorio",
        "text": "¿Es obligatorio el control horario digital?"
      },
      {
        "type": "paragraph",
        "text": "Vamos al grano. El **Real Decreto-ley 8/2019, de 8 de marzo**, estableció la obligación de registrar la jornada, que entró en vigor el **12 de mayo de 2019**. Desde esa fecha, el artículo 34.9 del Estatuto de los Trabajadores obliga a **todas las empresas**, sin importar su tamaño ni su sector, a registrar diariamente la jornada de cada trabajador: hora de inicio y de finalización."
      },
      {
        "type": "paragraph",
        "text": "Ahora bien, conviene no confundir dos cosas distintas. **Llevar el control horario es obligatorio. Que ese control sea digital, hoy, todavía no lo es de forma plena para todas las empresas.** La ley vigente permite que el registro se lleve incluso en papel, siempre que sea fiable, esté firmado y se conserve. El problema es que el papel es **frágil ante una inspección**: se pierde, se rellena a posteriori, no deja rastro de cuándo se firmó y resulta muy difícil de defender."
      },
      {
        "type": "paragraph",
        "text": "Por eso, aunque hoy no exista una obligación legal cerrada de digitalizar, **el formato digital es la opción más recomendable** y la que mejor te protege. Y hay un motivo añadido de peso: hay una reforma en tramitación que pretende convertir el registro digital en obligatorio. Lo vemos en detalle más abajo."
      },
      {
        "type": "quote",
        "text": "Registro de jornada obligatorio = sí, desde 2019. Formato digital obligatorio para todos = todavía no, pero es muy recomendable y hay una reforma en camino que lo exigiría."
      },
      {
        "type": "h2",
        "id": "que-exige-la-ley",
        "text": "Qué exige la ley a las empresas"
      },
      {
        "type": "paragraph",
        "text": "La obligación recae sobre **la empresa**, no sobre el trabajador. Eres tú, como empresario o responsable de RRHH, quien debe garantizar que existe un sistema de control de la jornada y que funciona correctamente. Esto es lo que la norma vigente te exige hoy:"
      },
      {
        "type": "list",
        "items": [
          "**Registrar el horario de cada trabajador todos los días**: hora de entrada y hora de salida, de forma fiable e individualizada.",
          "**Incluir a toda la plantilla** sujeta a jornada, también a quienes trabajan a tiempo parcial y al personal en teletrabajo.",
          "**Conservar los registros durante 4 años** y tenerlos a disposición de los trabajadores, sus representantes y la Inspección de Trabajo.",
          "**Garantizar que los datos no se pueden alterar** una vez registrados, para que el registro sea creíble ante una posible revisión.",
          "**Respetar la normativa de protección de datos (RGPD)** al tratar la información horaria de tu plantilla."
        ]
      },
      {
        "type": "paragraph",
        "text": "Un punto que muchas pymes pasan por alto: el registro debe reflejar la **jornada efectiva real**, no el horario teórico del contrato. Si un empleado entra antes o sale más tarde, eso debe quedar reflejado. Es justamente lo que la Inspección busca cuando investiga horas extra no pagadas. Si quieres profundizar en el marco general de la norma, lo desarrollamos en nuestra guía completa del registro de jornada 2026, que encontrarás entre los artículos relacionados al final de esta página."
      },
      {
        "type": "h2",
        "id": "diferencia-control-registro",
        "text": "Diferencia entre control horario y registro de jornada"
      },
      {
        "type": "paragraph",
        "text": "Son términos que se usan casi como sinónimos, pero entender el matiz te ayuda a enfocar bien tus obligaciones."
      },
      {
        "type": "paragraph",
        "text": "El **registro de jornada** es el dato concreto: la anotación diaria de cuándo empieza y termina la jornada de cada persona. Es el documento, el apunte, la prueba."
      },
      {
        "type": "paragraph",
        "text": "El **control horario** es algo más amplio: es la **obligación de la empresa** de organizar, supervisar y garantizar que ese registro existe, es veraz y se mantiene en el tiempo. Incluye el sistema que usas, las reglas internas, la conservación de los datos y la capacidad de presentarlos cuando te los pidan."
      },
      {
        "type": "paragraph",
        "text": "Dicho de forma sencilla: **el registro es el qué (la anotación) y el control horario es el cómo y el quién responde (tu empresa).** Cuando la Inspección llama a tu puerta, no le basta con que existan unos apuntes sueltos: comprueba que tienes un **sistema de control** fiable, completo y conservado. Por eso un buen sistema digital cubre las dos caras a la vez."
      },
      {
        "type": "h2",
        "id": "la-reforma",
        "text": "La reforma del control horario digital"
      },
      {
        "type": "paragraph",
        "text": "Aquí está la novedad que más interesa de cara a los próximos meses. El **Ministerio de Trabajo impulsa una reforma para que el registro horario sea obligatoriamente digital**, accesible de forma remota y telemática para la Inspección. El objetivo declarado es combatir las horas extra no pagadas y acabar con los registros en papel rellenados a conveniencia."
      },
      {
        "type": "paragraph",
        "text": "Conviene ser preciso con el estado real de esta reforma, porque hay mucha información que la da por hecha y **todavía no lo es**:"
      },
      {
        "type": "list",
        "items": [
          "En **septiembre de 2025**, el control horario digital se intentó incluir en la gran reforma laboral junto a la reducción de jornada a 37,5 horas, pero **no salió adelante en el Congreso**.",
          "El Gobierno optó por tramitarlo por separado, en una norma específica y con carácter de urgencia.",
          "El **Consejo de Estado emitió observaciones críticas** al texto propuesto durante su tramitación, lo que ha retrasado su aprobación. En el debate público se ha estimado, además, un coste de implantación en torno a 55 euros anuales por trabajador, una cifra que circuló entre las patronales pero que no procede del propio dictamen.",
          "A día de hoy, **no hay un texto definitivo en vigor**, y se ha planteado dar un plazo de adaptación (en torno a un año) a las pymes cuando finalmente se apruebe."
        ]
      },
      {
        "type": "paragraph",
        "text": "¿Qué significa esto para ti? Que **el fichaje digital todavía no es una obligación legal consumada**, pero la dirección está clara y la reforma puede aprobarse con plazos ajustados. Adelantarte ahora, cuando aún no hay prisa, es mucho más cómodo que hacerlo a contrarreloj. Tienes el seguimiento de toda esta tramitación en nuestro artículo de novedades de la normativa laboral 2026, disponible entre los artículos relacionados."
      },
      {
        "type": "h2",
        "id": "requisitos-sistema",
        "text": "Requisitos de un sistema válido"
      },
      {
        "type": "paragraph",
        "text": "Tanto si la reforma se aprueba como si decides digitalizar por tu cuenta (lo recomendable), un sistema de control horario que aguante una inspección debe cumplir varios requisitos. Estos son los imprescindibles:"
      },
      {
        "type": "h3",
        "id": "inalterable",
        "text": "Registros inalterables y fiables"
      },
      {
        "type": "paragraph",
        "text": "Una vez que un empleado ficha, ese dato **no se puede manipular sin dejar rastro**. La inalterabilidad es lo que da credibilidad al registro: si cualquiera pudiera editar las horas a posteriori, no serviría como prueba. Un buen sistema digital marca fecha y hora de cada fichaje y registra cualquier modificación."
      },
      {
        "type": "h3",
        "id": "accesible",
        "text": "Accesible y conservado 4 años"
      },
      {
        "type": "paragraph",
        "text": "Debes **conservar los registros durante al menos 4 años** y poder mostrarlos a la plantilla, a la representación legal de los trabajadores y a la Inspección. Que estén guardados de forma segura y se puedan recuperar al instante es justo lo que un sistema en papel no garantiza."
      },
      {
        "type": "h3",
        "id": "disposicion-inspeccion",
        "text": "A disposición de la Inspección"
      },
      {
        "type": "paragraph",
        "text": "Cuando la Inspección de Trabajo lo solicite, debes poder **entregar los registros de forma clara y exportable** (por ejemplo, en PDF o Excel). Un sistema digital que genera informes listos para Inspección te ahorra horas de trabajo y reduce el riesgo de errores en un momento delicado."
      },
      {
        "type": "h3",
        "id": "rgpd",
        "text": "Conforme al RGPD"
      },
      {
        "type": "paragraph",
        "text": "Los datos de fichaje son datos personales. El sistema debe tratarlos conforme al RGPD: acceso restringido, finalidad limitada al control horario y conservación ajustada. Si usas **geolocalización**, recuerda que debe ser proporcionada e informada; es una opción, no una obligación."
      },
      {
        "type": "paragraph",
        "text": "Con **Fichados** cubres estos cuatro requisitos sin instalar nada: tus empleados fichan desde el móvil, la tablet o el ordenador, los registros quedan **inalterables y conservados más de 4 años**, y generas informes en PDF y Excel listos para la Inspección con un clic."
      },
      {
        "type": "h2",
        "id": "sanciones",
        "text": "Sanciones por no llevar control horario"
      },
      {
        "type": "paragraph",
        "text": "Las multas son el motivo por el que muchas pymes deciden ponerse al día. No llevar el registro de jornada, o llevarlo de forma defectuosa, está tipificado como **infracción grave** en la Ley sobre Infracciones y Sanciones en el Orden Social (LISOS). En resumen, según la normativa vigente:"
      },
      {
        "type": "list",
        "items": [
          "**Infracción grave por no registrar la jornada**: de **1.251 € a 6.250 €**, según la gravedad y el número de trabajadores afectados.",
          "**Infracción muy grave** en casos de incumplimiento reiterado o especialmente serio: puede escalar hasta los **187.515 €**.",
          "La sanción puede aplicarse **por cada centro de trabajo** afectado, lo que multiplica el coste para empresas con varias sedes."
        ]
      },
      {
        "type": "paragraph",
        "text": "Y hay un efecto colateral importante: la ausencia de registro suele destapar **horas extra no declaradas**, lo que arrastra reclamaciones de cotizaciones a la Seguridad Social y posibles recargos. El coste real acaba siendo muy superior a la multa inicial. Si quieres ver el desglose completo de tramos y supuestos, lo tienes en nuestro artículo sobre las sanciones por no fichar, entre los artículos relacionados. Y puedes estimar tu exposición concreta con nuestra **calculadora de multas por no fichar**, dentro de la sección de herramientas."
      },
      {
        "type": "h2",
        "id": "como-elegir",
        "text": "Cómo elegir un sistema de control horario"
      },
      {
        "type": "paragraph",
        "text": "No todos los sistemas valen lo mismo ni te protegen igual. Si vas a dar el paso (o a cambiar de herramienta), estos son los criterios que de verdad importan para una pyme:"
      },
      {
        "type": "list",
        "items": [
          "**Que no requiera instalar nada**: que tus empleados puedan fichar desde el navegador del móvil, la tablet o el ordenador. Cuanto menos fricción, más se usa.",
          "**Registros inalterables y conservación automática durante más de 4 años**, sin que tengas que preocuparte de archivar nada.",
          "**Informes en PDF y Excel listos para Inspección**, para no tener que montar nada a mano cuando te los pidan.",
          "**Gestión de ausencias, vacaciones y permisos** integrada, para tener todo el control de jornada en un único sitio.",
          "**Precio claro y sin permanencia**, adaptado al tamaño de tu plantilla. Desconfía de contratos largos y demos eternas.",
          "**Puesta en marcha rápida**: si tardas semanas en configurarlo, algo falla."
        ]
      },
      {
        "type": "paragraph",
        "text": "Antes de decidirte, te ayudará tener una **plantilla base** para entender qué datos debes registrar: en la sección de recursos puedes descargar gratis nuestra plantilla de control horario. Y si quieres ver cómo se compara una solución como Fichados frente a otras del mercado, tienes la comparativa de Fichados frente a Factorial en la sección de comparativas."
      },
      {
        "type": "paragraph",
        "text": "La diferencia entre un sistema válido y uno frágil no se nota en el día a día: se nota el día que llega la Inspección. Elige pensando en ese momento."
      },
      {
        "type": "h2",
        "id": "preguntas-frecuentes",
        "text": "Preguntas frecuentes"
      },
      {
        "type": "h3",
        "id": "faq-obligatorio-digital",
        "text": "¿Es obligatorio el control horario digital en 2026?"
      },
      {
        "type": "paragraph",
        "text": "El **control horario sí es obligatorio** para todas las empresas desde 2019. Que sea en formato **digital** todavía no es una obligación legal plena para todas: hay una reforma del Ministerio de Trabajo en tramitación que lo exigiría, pero a fecha de hoy no hay un texto definitivo en vigor. El registro en papel sigue siendo legal, aunque es frágil ante una inspección. Digitalizar es lo más recomendable."
      },
      {
        "type": "h3",
        "id": "faq-pymes",
        "text": "¿Las pymes y autónomos con empleados también están obligados?"
      },
      {
        "type": "paragraph",
        "text": "Sí. La obligación de registrar la jornada **no depende del tamaño de la empresa**. Cualquier negocio con trabajadores por cuenta ajena debe llevar el control horario, tenga 2 o 200 empleados. El autónomo sin empleados no está obligado a registrar su propia jornada, pero sí la de cualquier persona que contrate."
      },
      {
        "type": "h3",
        "id": "faq-papel",
        "text": "¿Puedo seguir fichando en papel?"
      },
      {
        "type": "paragraph",
        "text": "Hoy, legalmente, sí. El registro en papel sigue siendo válido si es fiable, está firmado y se conserva. El problema es práctico: es fácil de extraviar, difícil de defender ante la Inspección y no deja constancia de cuándo se rellenó. Además, la reforma en marcha apunta a hacer obligatorio el formato digital, así que adelantarte te evita prisas más adelante."
      },
      {
        "type": "h3",
        "id": "faq-cuanto-conservar",
        "text": "¿Cuánto tiempo debo conservar los registros?"
      },
      {
        "type": "paragraph",
        "text": "Debes conservar los registros de jornada durante **al menos 4 años** y tenerlos a disposición de los trabajadores, de sus representantes legales y de la Inspección de Trabajo. Un sistema digital los guarda y los recupera automáticamente, sin que tengas que archivar nada manualmente."
      },
      {
        "type": "h3",
        "id": "faq-cuanto-cuesta",
        "text": "¿Cuánto cuesta un sistema de control horario?"
      },
      {
        "type": "paragraph",
        "text": "Depende del proveedor y de tu plantilla. Fichados, por ejemplo, cuesta **9 €/mes para hasta 3 empleados** y 3 € por cada empleado adicional, sin permanencia y con un 20% de descuento en el pago anual. La puesta en marcha lleva unos 5 minutos, sin demos ni procesos de venta."
      },
      {
        "type": "cta",
        "text": "Pon el control horario digital de tu empresa en marcha en 5 minutos. Registros inalterables, conservados más de 4 años e informes listos para la Inspección, desde 9 €/mes y sin permanencia. Evita sanciones por no llevar el registro de jornada."
      }
    ]
  },
  {
    "id": "13",
    "slug": "fichar-en-el-trabajo-guia-completa",
    "title": "Fichar en el trabajo: guía 2026 y si es obligatorio",
    "description": "Qué significa fichar en el trabajo, si es obligatorio, las formas de fichar (papel, Excel, app, móvil) y cómo hacerlo bien para evitar multas. Guía 2026.",
    "category": "Guías",
    "date": "18 Jun 2026",
    "readTime": "9 min",
    "gradient": "from-[hsl(142,71%,45%)]/30 to-[hsl(142,71%,45%)]/10",
    "tableOfContents": [
      {
        "id": "que-significa-fichar",
        "title": "¿Qué significa fichar en el trabajo?"
      },
      {
        "id": "es-obligatorio-fichar",
        "title": "¿Es obligatorio fichar?"
      },
      {
        "id": "formas-de-fichar",
        "title": "Formas de fichar en el trabajo"
      },
      {
        "id": "apps-para-fichar",
        "title": "Apps para fichar: qué mirar"
      },
      {
        "id": "fichar-con-el-movil",
        "title": "Cómo fichar con el móvil"
      },
      {
        "id": "fichar-en-teletrabajo",
        "title": "Fichar en teletrabajo"
      },
      {
        "id": "preguntas-frecuentes",
        "title": "Preguntas frecuentes"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Fichar en el trabajo es algo que millones de personas hacen cada día en España, pero pocas tienen claro qué significa exactamente, si es obligatorio o cuál es la mejor forma de hacerlo. Y para una empresa, hacerlo mal no es un detalle menor: las multas de la Inspección de Trabajo por un registro de jornada defectuoso van de **60 € a 187.515 €**. En esta guía te explicamos, paso a paso, todo lo que necesitas saber para fichar bien en 2026."
      },
      {
        "type": "h2",
        "id": "que-significa-fichar",
        "text": "¿Qué significa fichar en el trabajo?"
      },
      {
        "type": "paragraph",
        "text": "Fichar en el trabajo significa **dejar constancia de la hora exacta en la que empiezas y terminas tu jornada laboral**, cada día. Es lo que la ley llama \"registro de jornada\". Antiguamente se hacía con una tarjeta de cartón que se metía en una máquina (de ahí viene la expresión \"fichar\"), pero hoy se hace de muchas formas distintas."
      },
      {
        "type": "paragraph",
        "text": "El objetivo es doble: por un lado, demostrar ante la Inspección de Trabajo que se respeta la jornada pactada; por otro, controlar las **horas extraordinarias** y garantizar que se pagan o compensan. Por eso un registro completo no solo anota la entrada y la salida, sino también las **pausas** (comida, descansos) que interrumpen la jornada."
      },
      {
        "type": "paragraph",
        "text": "En resumen, fichar es la prueba objetiva de cuánto trabaja realmente cada persona. Si quieres profundizar en el día a día, en esta [guía sobre el registro de jornada](/blog/guia-registro-jornada-2026) lo desarrollamos en detalle."
      },
      {
        "type": "h2",
        "id": "es-obligatorio-fichar",
        "text": "¿Es obligatorio fichar?"
      },
      {
        "type": "paragraph",
        "text": "Sí. Desde la entrada en vigor del **Real Decreto-ley 8/2019**, el artículo 34.9 del Estatuto de los Trabajadores obliga a **todas las empresas** a llevar un registro diario de la jornada de cada empleado, sin excepciones por tamaño ni sector. Da igual que tengas 2 empleados o 200: estás obligado a registrar la jornada y a conservar esos datos durante un mínimo de **4 años**."
      },
      {
        "type": "paragraph",
        "text": "Ahora bien, conviene aclarar un matiz importante porque circula mucha confusión: **lo que es obligatorio es registrar la jornada, no que ese registro sea digital**. Hoy, en 2026, fichar en papel sigue siendo legal. Lo que ocurre es que hay un anteproyecto del Ministerio de Trabajo en tramitación que busca hacer obligatorio el formato **digital y accesible a distancia** para la Inspección. No es ley todavía, pero la dirección está clara."
      },
      {
        "type": "quote",
        "text": "El registro de jornada es obligatorio desde 2019. Que sea digital aún no lo es para todas las empresas, pero la reforma va en camino y el papel es cada vez más frágil ante una inspección."
      },
      {
        "type": "paragraph",
        "text": "Negarse a fichar, por parte del trabajador, o no facilitar un sistema, por parte de la empresa, tiene consecuencias. Puedes ver el detalle de las cuantías en nuestro artículo sobre [sanciones por no fichar](/blog/sanciones-no-fichar-multas)."
      },
      {
        "type": "h2",
        "id": "formas-de-fichar",
        "text": "Formas de fichar en el trabajo"
      },
      {
        "type": "paragraph",
        "text": "Existen muchas maneras de fichar, y no todas dan la misma seguridad ante una inspección. Estas son las más habituales, de la más frágil a la más sólida:"
      },
      {
        "type": "h3",
        "id": "fichar-papel",
        "text": "Papel"
      },
      {
        "type": "paragraph",
        "text": "Una hoja firmada con las horas de entrada y salida. Es legal hoy, pero es la opción más débil: se pierde, se rellena \"a posteriori\" y es fácilmente cuestionable por un inspector. Si tienes más de un puñado de empleados, gestionar y archivar papeles durante 4 años se vuelve un infierno. De hecho, es una de las fuentes de problemas que repasamos en los [errores más comunes de las pymes con el control horario](/blog/errores-pymes-control-horario)."
      },
      {
        "type": "h3",
        "id": "fichar-excel",
        "text": "Excel"
      },
      {
        "type": "paragraph",
        "text": "Un paso por encima del papel, pero con un problema serio: una hoja de cálculo es **modificable**. Cualquiera puede cambiar una hora después, y eso resta valor probatorio frente a la Inspección, que valora que los registros sean inalterables. Funciona como apaño temporal para 2 o 3 personas, no como sistema serio. Lo comparamos a fondo en [Fichados frente a Excel](/blog/fichados-vs-excel-comparativa)."
      },
      {
        "type": "h3",
        "id": "fichar-tarjeta-huella",
        "text": "Tarjeta y huella (hardware)"
      },
      {
        "type": "paragraph",
        "text": "Los terminales físicos de **tarjeta** o **huella** que ves en algunas oficinas funcionan, pero arrastran inconvenientes: cuestan dinero (el aparato y su instalación), se averían, no sirven para quien trabaja fuera de la oficina y la huella implica tratar **datos biométricos**, lo que añade obligaciones de protección de datos. Para una pyme normal suelen ser más problema que solución. **Con Fichados no necesitas ningún hardware**: tus empleados fichan desde el dispositivo que ya tienen."
      },
      {
        "type": "h3",
        "id": "fichar-app",
        "text": "App o sistema digital"
      },
      {
        "type": "paragraph",
        "text": "La opción más cómoda y segura para la mayoría de empresas. Cada persona ficha desde su móvil, tablet u ordenador, los registros quedan **inalterables**, se guardan automáticamente durante más de 4 años y generas informes para la Inspección con un clic. Sin papeles, sin máquinas y sin hojas de cálculo que cuadrar a final de mes."
      },
      {
        "type": "list",
        "items": [
          "**Papel:** legal hoy, pero frágil, manual y fácil de cuestionar.",
          "**Excel:** modificable, poco fiable como prueba, solo para equipos minúsculos.",
          "**Tarjeta/huella:** requiere hardware, mantenimiento y, en el caso de la huella, gestión de datos biométricos.",
          "**App digital:** registros inalterables, informes automáticos y fichaje desde cualquier sitio. La opción recomendada."
        ]
      },
      {
        "type": "cta",
        "text": "Empieza a fichar bien hoy. Setup en 5 minutos, sin permanencia"
      },
      {
        "type": "h2",
        "id": "apps-para-fichar",
        "text": "Apps para fichar: qué mirar"
      },
      {
        "type": "paragraph",
        "text": "No todas las apps para fichar en el trabajo sirven igual. Muchas son suites enormes de recursos humanos con cincuenta módulos que no necesitas y un precio acorde. Antes de contratar nada, fíjate en esto:"
      },
      {
        "type": "list",
        "items": [
          "**Registros inalterables.** Que no se puedan editar a posteriori es lo que les da valor ante la Inspección.",
          "**Informes en PDF y Excel** listos para entregar, sin tener que montar nada a mano.",
          "**Fichaje desde cualquier dispositivo** (móvil, tablet, ordenador) y sin instalar programas.",
          "**Precio claro y sin permanencia.** Desconfía de los \"precio bajo consulta\" y de los contratos a 12 meses.",
          "**Que esté enfocado en fichaje**, no una suite de RRHH que te cobra por funciones que no vas a usar.",
          "**Setup rápido**, sin demo comercial obligatoria ni semanas de implantación."
        ]
      },
      {
        "type": "paragraph",
        "text": "Fichados cumple todo esto por **9 €/mes** (hasta 3 empleados) más 3 € por empleado adicional, sin permanencia y con un 20% de descuento si pagas el año. Si vienes de comparar opciones, échale un ojo a [Fichados frente a Factorial](/comparar/fichados-vs-factorial) o a nuestra comparativa de [Fichados, Factorial y Sesame](/blog/fichados-vs-factorial-vs-sesame)."
      },
      {
        "type": "h2",
        "id": "fichar-con-el-movil",
        "text": "Cómo fichar con el móvil"
      },
      {
        "type": "paragraph",
        "text": "Fichar con el móvil es, hoy, la forma más práctica de hacerlo, y no necesitas instalar ninguna aplicación pesada: basta con abrir el navegador. Con Fichados el proceso es así de simple:"
      },
      {
        "type": "list",
        "items": [
          "**Recibes una invitación por email** de tu empresa y creas tu acceso en menos de un minuto.",
          "**Al empezar la jornada, pulsas \"Entrada\"** desde el móvil. La hora queda registrada al instante.",
          "**Cuando paras a comer, marcas la pausa**; al volver, la reanudas. Todo queda anotado.",
          "**Al terminar, pulsas \"Salida\"** y listo. Tu jornada del día queda cerrada y guardada.",
          "**Puedes consultar tu propio historial** cuando quieras, para revisar tus horas."
        ]
      },
      {
        "type": "paragraph",
        "text": "Si tu equipo trabaja fuera de la oficina (comerciales, instaladores, obra), puedes activar la **geolocalización opcional** en cada fichaje para confirmar dónde se realizó. Es una función que se puede activar o no según lo necesites; no es obligatoria."
      },
      {
        "type": "h2",
        "id": "fichar-en-teletrabajo",
        "text": "Fichar en teletrabajo"
      },
      {
        "type": "paragraph",
        "text": "Una duda muy común: ¿quien teletrabaja también ficha? **Sí, rotundamente.** La Ley 10/2021 de trabajo a distancia, junto con el Real Decreto-ley 8/2019, deja claro que el registro de jornada es obligatorio para **todos** los trabajadores, estén en la oficina o en casa, y en **cualquier formato** válido."
      },
      {
        "type": "paragraph",
        "text": "Aquí es donde el fichaje digital resulta más cómodo: tu empleado ficha desde su ordenador o móvil sin importar dónde esté, y tú ves los registros en tiempo real desde el panel de administración. No es que el papel deje de ser legal en teletrabajo, es que el digital es, con diferencia, la opción más práctica y recomendable. Lo explicamos en detalle en [¿es obligatorio fichar en el teletrabajo?](/blog/obligatorio-fichar-teletrabajo). Y si gestionas horarios de equipo, te puede venir bien nuestra [plantilla de cuadrante horario](/recursos/plantilla-cuadrante-horario) para organizarlos antes de empezar."
      },
      {
        "type": "paragraph",
        "text": "Para profundizar en el contexto normativo y la reforma que viene, tienes nuestro análisis sobre las [novedades de la normativa laboral en 2026](/blog/novedades-normativa-laboral-2026)."
      },
      {
        "type": "h2",
        "id": "preguntas-frecuentes",
        "text": "Preguntas frecuentes"
      },
      {
        "type": "h3",
        "id": "faq-no-fichar",
        "text": "¿Qué pasa si me olvido de fichar un día?"
      },
      {
        "type": "paragraph",
        "text": "Un olvido puntual no es el fin del mundo: en un sistema digital, el administrador puede corregir o añadir el fichaje, dejando constancia de la modificación. Lo importante es que el registro refleje la realidad. El problema serio aparece cuando una empresa **no tiene ningún sistema** de registro: ahí es donde llegan las sanciones."
      },
      {
        "type": "h3",
        "id": "faq-empleado-niega",
        "text": "¿Puede un empleado negarse a fichar?"
      },
      {
        "type": "paragraph",
        "text": "No. Fichar es una obligación que deriva del contrato y de la ley. Si la empresa pone los medios y el trabajador se niega de forma reiterada, puede llegar a ser objeto de medidas disciplinarias, siempre con la proporcionalidad y el procedimiento que marquen la ley y el convenio. La empresa, por su parte, está obligada a facilitar un sistema de fichaje."
      },
      {
        "type": "h3",
        "id": "faq-cuanto-cuesta",
        "text": "¿Cuánto cuesta un sistema para fichar?"
      },
      {
        "type": "paragraph",
        "text": "Mucho menos que una multa. Con Fichados son **9 €/mes** para hasta 3 empleados y 3 € por cada empleado adicional, sin permanencia. Por no llevar el registro de jornada, las sanciones arrancan en 60 € las más leves y en 626 € las graves (el tramo más habitual), así que la cuenta sale sola. Para calcular tu riesgo concreto, prueba nuestra [calculadora de multas por no fichar](/herramientas/calculadora-multas-fichaje)."
      },
      {
        "type": "h3",
        "id": "faq-calcular-horas",
        "text": "¿Cómo calculo las horas trabajadas a partir de los fichajes?"
      },
      {
        "type": "paragraph",
        "text": "Un buen sistema lo hace por ti: suma automáticamente las horas de cada jornada descontando las pausas. Si necesitas hacer un cálculo rápido a mano, puedes usar nuestra [calculadora de horas y minutos](/herramientas/calculadora-horas-minutos) gratuita."
      },
      {
        "type": "h3",
        "id": "faq-fichar-papel-2026",
        "text": "¿Es legal fichar en papel en 2026?"
      },
      {
        "type": "paragraph",
        "text": "Hoy sí, fichar en papel sigue siendo legal porque la ley exige registrar la jornada, sin imponer todavía un formato concreto a todas las empresas. Pero es la opción más frágil ante una inspección y hay una reforma en tramitación que apunta hacia el formato digital. Lo más sensato es dar el salto al digital ahora, antes de que sea obligatorio."
      },
      {
        "type": "cta",
        "text": "Cumple la ley sin papeles ni complicaciones. Empieza gratis en 5 minutos"
      }
    ]
  },
  {
    "id": "14",
    "slug": "es-legal-fichar-con-geolocalizacion",
    "title": "¿Es legal fichar con geolocalización? Lo que dice la ley",
    "description": "Sí, fichar con geolocalización es legal si es proporcional, informada y limitada a la jornada. Te explicamos el art. 20.3 ET, el RGPD y si puedes negarte.",
    "category": "Normativa",
    "date": "18 Jun 2026",
    "readTime": "7 min",
    "gradient": "from-primary/30 to-primary/10",
    "content": [
      {
        "type": "verdict",
        "variant": "si",
        "title": "Sí, pero con condiciones",
        "text": "Sí: fichar con geolocalización es legal en España siempre que sea proporcional, el trabajador esté informado y se limite a la jornada y a la finalidad de control. Lo que NO se permite es el rastreo continuo ni fuera del horario laboral."
      },
      {
        "type": "paragraph",
        "text": "Es una de las dudas más frecuentes cuando una empresa decide digitalizar el control horario: ¿puedo saber **dónde** ficha mi equipo sin meterme en un problema legal? La respuesta corta es que sí, la geolocalización aplicada al fichaje es lícita, pero el matiz importa tanto como la respuesta. No es barra libre para vigilar al trabajador, y un uso desproporcionado puede acabar en una sanción de la Agencia Española de Protección de Datos (AEPD)."
      },
      {
        "type": "paragraph",
        "text": "En este artículo te explicamos qué dice exactamente la ley, los requisitos para que la geolocalización sea legal, qué prácticas están prohibidas y si un empleado puede negarse a que le localicen. Y, sobre todo, cómo plantearlo de forma que cumplas el [registro de jornada obligatorio](/blog/fichaje-digital-obligatorio-2026) sin pasarte de la raya."
      },
      {
        "type": "h2",
        "id": "es-legal",
        "text": "¿Es legal fichar con geolocalización?"
      },
      {
        "type": "paragraph",
        "text": "Sí. La empresa puede usar la geolocalización como medida de control de la actividad laboral, incluido el fichaje, porque la propia ley reconoce al empleador la facultad de adoptar medidas de vigilancia y control para verificar el cumplimiento de las obligaciones laborales. La clave está en que el dato de localización es un **dato personal** y, por tanto, su tratamiento queda sujeto al Reglamento General de Protección de Datos (RGPD)."
      },
      {
        "type": "paragraph",
        "text": "Esto significa que no basta con que la geolocalización sea \"útil\" para la empresa: tiene que superar un test de **necesidad y proporcionalidad**. Localizar a un comercial que visita clientes durante su jornada puede estar justificado; localizar a alguien que trabaja siempre en la misma oficina, probablemente no, porque hay medios menos invasivos para comprobar su presencia."
      },
      {
        "type": "callout",
        "variant": "clave",
        "text": "La geolocalización para fichar es legal, pero se valora caso por caso. Cuanto menos invasiva sea la medida y más justificada esté para tu actividad, más sólida es legalmente."
      },
      {
        "type": "h2",
        "id": "que-dice-la-ley",
        "text": "Qué dice la ley: art. 20.3 ET + RGPD"
      },
      {
        "type": "paragraph",
        "text": "Dos normas se combinan aquí. Por un lado, el **artículo 20.3 del Estatuto de los Trabajadores** habilita al empresario a \"adoptar las medidas que estime más oportunas de vigilancia y control para verificar el cumplimiento por el trabajador de sus obligaciones y deberes laborales\", siempre guardando la consideración debida a su dignidad."
      },
      {
        "type": "paragraph",
        "text": "Por otro, el **RGPD** y la Ley Orgánica 3/2018 de Protección de Datos (LOPDGDD) regulan cómo se puede tratar el dato de ubicación. De hecho, el **artículo 90 de la LOPDGDD** se ocupa específicamente de los sistemas de geolocalización en el ámbito laboral y obliga a informar de forma expresa, clara e inequívoca a los trabajadores —y a su representación legal— sobre la existencia y características de estos dispositivos."
      },
      {
        "type": "list",
        "items": [
          "**Base jurídica:** suele apoyarse en la ejecución de la relación laboral y en la facultad de control del art. 20.3 ET (y, en su caso, en el interés legítimo de la empresa), **no en el consentimiento**, que en el ámbito laboral se considera \"débil\" por el desequilibrio entre las partes.",
          "**Finalidad limitada:** los datos de ubicación solo pueden usarse para el control que justifica su recogida, no para otros fines.",
          "**Transparencia obligatoria:** hay que informar previamente al trabajador y, cuando exista, a la representación legal de los trabajadores."
        ]
      },
      {
        "type": "callout",
        "variant": "info",
        "text": "El mismo principio de proporcionalidad que rige la geolocalización es el que hace que otros métodos, como la huella o el reconocimiento facial, estén hoy vetados como sistema habitual de fichaje. Lo vemos en la [guía sobre fichaje biométrico](/blog/fichaje-biometrico-huella-reconocimiento-facial)."
      },
      {
        "type": "h2",
        "id": "requisitos",
        "text": "Requisitos para que sea lícita"
      },
      {
        "type": "paragraph",
        "text": "Para que la geolocalización al fichar sea legal y resista una inspección, debe cumplir estos requisitos de forma acumulativa:"
      },
      {
        "type": "list",
        "items": [
          "**Proporcionalidad:** la medida tiene que ser idónea, necesaria y equilibrada. Si existe una alternativa menos invasiva que cumpla la misma finalidad, hay que usarla.",
          "**Información previa y transparente:** el trabajador debe saber, antes de empezar, que se va a registrar su ubicación, con qué finalidad, durante cuánto tiempo y quién accede al dato.",
          "**Limitación a la jornada:** la localización solo puede activarse en el momento del fichaje o durante el tiempo de trabajo, nunca de forma permanente.",
          "**Finalidad de control laboral:** el dato no puede reutilizarse para nada distinto (marketing, perfilado, evaluación personal, etc.).",
          "**Minimización de datos:** registrar únicamente lo imprescindible. Un punto de ubicación al fichar es muy distinto de un seguimiento por GPS minuto a minuto.",
          "**Seguridad y conservación adecuada:** los datos deben protegerse y conservarse solo el tiempo necesario para la finalidad del control horario."
        ]
      },
      {
        "type": "quote",
        "text": "La diferencia entre una medida legal y una sancionable casi siempre se reduce a la misma pregunta: ¿es proporcional al fin que persigues, o estás vigilando más de lo que necesitas?"
      },
      {
        "type": "h2",
        "id": "que-no-se-puede",
        "text": "Qué NO se puede hacer con la geolocalización"
      },
      {
        "type": "paragraph",
        "text": "Aquí está la línea roja. Que puedas geolocalizar al fichar no significa que puedas convertir el móvil del empleado en una pulsera de seguimiento. Estas prácticas son ilícitas y exponen a la empresa a sanciones:"
      },
      {
        "type": "list",
        "items": [
          "**Rastreo continuo durante toda la jornada** cuando no es estrictamente necesario para el puesto. Saber que alguien ha entrado a trabajar no requiere seguir su recorrido todo el día.",
          "**Geolocalizar fuera del horario laboral**, en pausas, descansos o, evidentemente, cuando el trabajador ha terminado su jornada.",
          "**Vigilar la vida privada**: deducir hábitos, desplazamientos personales o conductas ajenas al trabajo a partir de los datos de ubicación.",
          "**Usar los datos para otros fines** distintos al control horario que se informó (por ejemplo, evaluaciones de desempeño encubiertas).",
          "**No informar** o esconder que se está recogiendo la ubicación. La geolocalización oculta es directamente ilegal."
        ]
      },
      {
        "type": "callout",
        "variant": "aviso",
        "text": "El rastreo permanente y fuera de jornada es una de las infracciones que la AEPD sanciona con más dureza. La ubicación al fichar debe ser un dato puntual, no un seguimiento."
      },
      {
        "type": "h2",
        "id": "puede-negarse",
        "text": "¿Puede el trabajador negarse a que le geolocalicen?"
      },
      {
        "type": "paragraph",
        "text": "Es una pregunta con matices. Si la empresa ha implantado la geolocalización cumpliendo todos los requisitos —es proporcional, está justificada para el puesto y se ha informado correctamente—, el trabajador, en principio, no puede oponerse con éxito de forma genérica a una medida legítima de control, aunque sí conserva su derecho de oposición del art. 21 RGPD."
      },
      {
        "type": "paragraph",
        "text": "Ahora bien, el empleado **sí conserva sus derechos**: puede ejercer el derecho de oposición y, sobre todo, puede negarse cuando la medida sea desproporcionada, no esté justificada o invada su esfera privada. Si la geolocalización no supera el test de proporcionalidad, la negativa del trabajador está amparada por la ley y la empresa no puede imponerla ni sancionarle por ello."
      },
      {
        "type": "callout",
        "variant": "clave",
        "text": "Si la geolocalización es proporcional, justificada e informada, la oposición genérica tiene poco recorrido. Si es desproporcionada o invade la vida privada, la negativa del trabajador está amparada por la ley."
      },
      {
        "type": "paragraph",
        "text": "Por eso, en la práctica, la solución más segura y menos conflictiva es ofrecer un sistema de fichaje que **no dependa** de la geolocalización para funcionar, y reservar la ubicación solo para los casos en los que de verdad aporta valor."
      },
      {
        "type": "h2",
        "id": "fichar-sin-geolocalizacion",
        "text": "Fichar sin geolocalización: una opción válida"
      },
      {
        "type": "paragraph",
        "text": "Mucha gente asume que un sistema de fichaje digital \"tiene que\" localizarte. No es cierto. La ley solo exige llevar un **registro fiable de la jornada** (hora de entrada, salida y pausas), no saber dónde está físicamente cada persona. La geolocalización es un complemento opcional, no un requisito del registro horario. Si quieres ver el contexto completo, te lo contamos en la [guía sobre el control horario digital obligatorio en 2026](/blog/control-horario-digital-obligatorio-2026)."
      },
      {
        "type": "paragraph",
        "text": "Para la inmensa mayoría de pymes con empleados en oficina, tienda o taller, **fichar sin geolocalización** es perfectamente válido y evita de raíz cualquier debate sobre privacidad. Un empleado [ficha desde su móvil, tablet u ordenador](/blog/fichar-en-el-trabajo-guia-completa), queda registrado con hora exacta y listo. La ubicación solo cobra sentido cuando hay desplazamientos: comerciales, técnicos de campo, repartidores o equipos que rotan entre centros de trabajo."
      },
      {
        "type": "table",
        "headers": [
          "Tipo de empresa",
          "¿Necesita geolocalización?",
          "Recomendación"
        ],
        "rows": [
          [
            "Oficina / centro fijo",
            "No",
            "Fichaje sin ubicación: más simple y sin riesgos de privacidad"
          ],
          [
            "Tienda o local comercial",
            "No (o muy puntual)",
            "Fichaje normal; ubicación solo si hay varios locales"
          ],
          [
            "Comerciales / técnicos de campo",
            "Sí, justificada",
            "Geolocalización puntual al fichar, informada y proporcional"
          ],
          [
            "Trabajo en cliente / multi-centro",
            "Recomendable",
            "Ubicación al fichar para verificar el centro, nunca rastreo continuo"
          ]
        ]
      },
      {
        "type": "h2",
        "id": "como-lo-hace-fichados",
        "text": "Cómo lo hace Fichados"
      },
      {
        "type": "paragraph",
        "text": "En **Fichados** hemos diseñado el control horario pensando justo en este equilibrio: cumplir la ley sin invadir la privacidad de nadie. Por eso la geolocalización es **opcional** y, cuando se activa, funciona de la forma más respetuosa posible."
      },
      {
        "type": "list",
        "items": [
          "**Opcional desde el primer día:** tú decides si la activas. Si tu equipo trabaja en un sitio fijo, puedes fichar sin geolocalización y no se registra ninguna ubicación.",
          "**Puntual, no rastreo:** cuando está activada, solo se captura la ubicación **en el momento exacto del fichaje**. Fichados no sigue al empleado durante la jornada ni recoge datos fuera del horario.",
          "**Transparente:** el trabajador sabe en todo momento cuándo se está registrando su ubicación, en línea con la transparencia que exige el RGPD.",
          "**Funciona desde cualquier dispositivo:** móvil, tablet u ordenador, mediante el navegador, sin instalar nada raro ni terminales de hardware.",
          "**Registros inalterables** y conservados más de 4 años, listos para una Inspección de Trabajo, con informes en PDF y Excel."
        ]
      },
      {
        "type": "callout",
        "variant": "clave",
        "text": "Nuestra filosofía es sencilla: la ubicación solo se usa cuando aporta valor y siempre de forma puntual e informada. El registro de jornada cumple la ley; el rastreo de personas no es parte del trato."
      },
      {
        "type": "cta",
        "text": "Empieza a registrar la jornada de tu equipo de forma legal y respetuosa, con geolocalización opcional y sin permanencia. Prueba Fichados y monta tu control horario en minutos."
      }
    ],
    "tableOfContents": [
      {
        "id": "es-legal",
        "title": "¿Es legal fichar con geolocalización?"
      },
      {
        "id": "que-dice-la-ley",
        "title": "Qué dice la ley: art. 20.3 ET + RGPD"
      },
      {
        "id": "requisitos",
        "title": "Requisitos para que sea lícita"
      },
      {
        "id": "que-no-se-puede",
        "title": "Qué NO se puede hacer con la geolocalización"
      },
      {
        "id": "puede-negarse",
        "title": "¿Puede el trabajador negarse a que le geolocalicen?"
      },
      {
        "id": "fichar-sin-geolocalizacion",
        "title": "Fichar sin geolocalización: una opción válida"
      },
      {
        "id": "como-lo-hace-fichados",
        "title": "Cómo lo hace Fichados"
      }
    ],
    "faqs": [
      {
        "question": "¿Es legal que mi empresa me geolocalice para fichar?",
        "answer": "Sí, es legal siempre que sea proporcional al puesto, te hayan informado previamente y se limite a la jornada y a la finalidad de control horario. Lo que no es legal es el rastreo continuo, la geolocalización fuera del horario laboral o hacerlo sin informarte. Si la medida es desproporcionada, puedes oponerte."
      },
      {
        "question": "¿Puede la empresa seguir mi ubicación todo el día?",
        "answer": "No. La geolocalización debe limitarse al momento del fichaje o al tiempo estrictamente necesario para el control de la jornada. El seguimiento continuo durante todo el día, en pausas o fuera del horario laboral es desproporcionado y la AEPD lo considera una infracción sancionable."
      },
      {
        "question": "¿Puedo negarme a que me geolocalicen en el trabajo?",
        "answer": "Si la medida es proporcional, está justificada para tu puesto y te han informado correctamente, la oposición genérica tiene poco recorrido, aunque conservas tu derecho de oposición del art. 21 RGPD. En cambio, sí puedes negarte con fundamento si la geolocalización es desproporcionada, no está justificada o invade tu vida privada: en ese caso tu negativa está amparada por la ley."
      },
      {
        "question": "¿Es obligatorio usar geolocalización para cumplir el registro de jornada?",
        "answer": "No. La ley solo exige llevar un registro fiable de la entrada, salida y pausas de cada empleado, no conocer su ubicación. Fichar sin geolocalización es perfectamente válido y, de hecho, es lo más recomendable para empresas con empleados en un centro de trabajo fijo."
      },
      {
        "question": "¿Cómo gestiona la geolocalización Fichados?",
        "answer": "En Fichados la geolocalización es opcional. Si la activas, solo se captura la ubicación en el momento exacto del fichaje, nunca hay rastreo continuo ni recogida de datos fuera de la jornada, y el trabajador siempre sabe cuándo se registra su ubicación. Puedes usar Fichados sin geolocalización si tu equipo trabaja en un sitio fijo."
      }
    ]
  },
  {
    "id": "15",
    "slug": "fichaje-biometrico-huella-reconocimiento-facial",
    "title": "¿Es legal fichar con huella o reconocimiento facial? (2026)",
    "description": "¿Es legal fichar con huella o reconocimiento facial? Tras la guía de la AEPD de 2023, no como método ordinario. Te explicamos por qué y la alternativa legal.",
    "category": "Normativa",
    "date": "18 Jun 2026",
    "readTime": "7 min",
    "gradient": "from-primary/30 to-primary/10",
    "content": [
      {
        "type": "verdict",
        "variant": "no",
        "title": "No, salvo casos muy excepcionales",
        "text": "No como método ordinario de fichaje. Tras la guía de la AEPD de noviembre de 2023, los datos biométricos (huella o cara) para control de jornada son **categoría especial**: el consentimiento del trabajador no los legitima y solo se permiten si una **norma con rango de ley** lo autoriza y superan los test de necesidad y proporcionalidad. En la práctica, hoy están vetados como sistema habitual."
      },
      {
        "type": "callout",
        "variant": "aviso",
        "title": "La posición de la AEPD (2023)",
        "text": "La Agencia Española de Protección de Datos considera que fichar con huella o reconocimiento facial implica tratar datos biométricos de **categoría especial** (art. 9 RGPD). El **consentimiento no es base válida** en el trabajo por el desequilibrio entre empresa y empleado, así que no basta con que el trabajador \"acepte\"."
      },
      {
        "type": "paragraph",
        "text": "**Respuesta directa: no, salvo casos muy excepcionales.** Desde la guía de la AEPD de noviembre de 2023, fichar con **huella dactilar** o **reconocimiento facial** está vetado como método ordinario de control horario. El consentimiento del trabajador no basta: haría falta una norma con rango de ley que lo autorice, algo que hoy no existe para el fichaje común."
      },
      {
        "type": "paragraph",
        "text": "Durante años, muchas empresas instalaron terminales de huella o de reconocimiento facial para fichar, convencidas de que pidiendo permiso al empleado quedaban cubiertas. **En 2026 esa creencia es un error caro.** La Agencia Española de Protección de Datos (AEPD) cerró la puerta a este uso en su guía de noviembre de 2023, y conviene entender bien por qué antes de comprar un solo lector de huellas."
      },
      {
        "type": "paragraph",
        "text": "En este artículo te explicamos, con rigor y sin medias verdades, qué dice la normativa sobre la biometría para control de jornada, qué riesgo asumes si la usas y cuál es la alternativa que sí cumple la ley."
      },
      {
        "type": "h2",
        "id": "es-legal-huella",
        "text": "¿Es legal fichar con huella dactilar?"
      },
      {
        "type": "paragraph",
        "text": "No, no como sistema habitual de fichaje. La huella dactilar es un **dato biométrico** y, cuando se usa para identificar de forma unívoca a una persona, el RGPD lo trata como **dato de categoría especial** (artículo 9). Estos datos tienen una protección reforzada y su tratamiento está, de partida, **prohibido**, salvo que se cumpla alguna de las excepciones tasadas de la ley."
      },
      {
        "type": "paragraph",
        "text": "El problema es que, para fichar, ninguna de esas excepciones encaja. La que las empresas suelen invocar —el **consentimiento del trabajador**— no sirve en el contexto laboral, y ahora veremos por qué. Sin una base válida, instalar un lector de huellas para el control horario es un tratamiento ilícito."
      },
      {
        "type": "quote",
        "text": "Dato clave: la huella no es \"ilegal\" en abstracto (puede usarse, por ejemplo, para acceder a una zona de alta seguridad con una justificación sólida y una habilitación legal). Lo que está vetado es usarla como método ordinario para registrar la jornada de toda la plantilla."
      },
      {
        "type": "h2",
        "id": "reconocimiento-facial",
        "text": "¿Y el reconocimiento facial?"
      },
      {
        "type": "paragraph",
        "text": "Exactamente lo mismo. El **reconocimiento facial** procesa rasgos del rostro para identificarte de forma única, así que también es un dato biométrico de categoría especial. El razonamiento jurídico es idéntico al de la huella: tratamiento prohibido por defecto, el consentimiento no levanta la prohibición y no hay una ley que autorice fichar la cara de los empleados."
      },
      {
        "type": "paragraph",
        "text": "Da igual que el sistema sea \"sin contacto\", que prometa más higiene o que la captura facial dure un segundo. **El método sigue siendo desproporcionado** para una finalidad —saber a qué hora entras y sales— que se puede cumplir con medios mucho menos invasivos. No es casualidad que algunos proveedores titulen su contenido directamente como \"prohibido fichar con huella dactilar\": refleja bien hasta qué punto ha cambiado el criterio."
      },
      {
        "type": "quote",
        "text": "El consentimiento no puede ser la base legal para tratar datos biométricos de los trabajadores: en la relación laboral no es libre, porque hay desequilibrio entre empresa y empleado."
      },
      {
        "type": "h2",
        "id": "por-que-categoria-especial",
        "text": "Por qué la biometría es \"categoría especial\""
      },
      {
        "type": "paragraph",
        "text": "La clave está en el **artículo 9 del RGPD**. Los datos biométricos destinados a identificar de manera unívoca a una persona se consideran una categoría especialmente sensible, junto a los datos de salud, origen racial o afiliación sindical. Su tratamiento parte de una **prohibición general**, y solo se puede levantar si concurre alguna excepción muy concreta."
      },
      {
        "type": "paragraph",
        "text": "Hay tres motivos por los que, para el fichaje, esa prohibición no se levanta:"
      },
      {
        "type": "list",
        "items": [
          "**El consentimiento no es válido.** El RGPD exige que el consentimiento sea libre. La AEPD entiende que, en la relación laboral, el trabajador no está en posición de negarse de verdad (hay un desequilibrio de poder). Por eso el \"sí\" del empleado no es una base legal sólida.",
          "**Falta una norma con rango de ley.** Para tratar datos biométricos de la plantilla haría falta una ley que lo habilite expresamente y que, además, supere los test de **necesidad y proporcionalidad**. Hoy esa norma específica para el fichaje no existe en España.",
          "**Hay alternativas menos invasivas.** Si puedes cumplir el control horario con un PIN, una tarjeta o el móvil, capturar la huella o la cara no supera el principio de proporcionalidad. La biometría debe ser el último recurso, no el primero."
        ]
      },
      {
        "type": "paragraph",
        "text": "En resumen: la biometría para fichar choca de frente con tres principios del RGPD a la vez —licitud, minimización y proporcionalidad—. Es difícil que cualquier empresa lo justifique para algo tan cotidiano como registrar la jornada."
      },
      {
        "type": "h2",
        "id": "que-paso-2023",
        "text": "Qué cambió con la guía de la AEPD de 2023"
      },
      {
        "type": "paragraph",
        "text": "En **noviembre de 2023**, la AEPD publicó una guía sobre tratamientos de control de presencia mediante sistemas biométricos que endureció de forma notable su postura. Hasta entonces existía cierta zona gris; a partir de ese documento, el criterio quedó mucho más claro."
      },
      {
        "type": "paragraph",
        "text": "La guía sostiene que el uso de biometría para control de presencia y de jornada implica tratar datos de categoría especial del artículo 9, que **el consentimiento no es base habilitante** en este contexto y que, sin una norma con rango de ley que lo autorice y supere el juicio de proporcionalidad, **el tratamiento no está permitido**. En la práctica, esto deja fuera de juego los terminales de huella y de reconocimiento facial como método por defecto para fichar."
      },
      {
        "type": "quote",
        "text": "Posición de la AEPD (guía de noviembre de 2023): los datos biométricos para control de presencia son de categoría especial (art. 9 RGPD); el consentimiento del trabajador no sirve como base legal; se exige una norma con rango de ley que lo habilite y supere los test de necesidad y proporcionalidad. Hoy, en la práctica, la huella y el reconocimiento facial no están permitidos como método ordinario de fichaje."
      },
      {
        "type": "paragraph",
        "text": "Por eso, si todavía tienes un lector biométrico funcionando, lo prudente no es \"esperar a ver\": es migrar a un sistema conforme cuanto antes."
      },
      {
        "type": "h2",
        "id": "sanciones-riesgo",
        "text": "Sanciones y riesgo real para tu empresa"
      },
      {
        "type": "paragraph",
        "text": "Tratar datos biométricos sin base legal es una infracción del RGPD, y las del **artículo 9** están entre las más graves. El marco sancionador contempla multas de hasta **20 millones de euros o el 4% de la facturación anual global**, la cifra que sea mayor. Para una pyme, claro, las sanciones reales son muy inferiores, pero pueden alcanzar varias decenas de miles de euros."
      },
      {
        "type": "paragraph",
        "text": "Y el riesgo no es solo teórico:"
      },
      {
        "type": "list",
        "items": [
          "**Una sola denuncia basta.** Un empleado descontento, un excompañero o un comité de empresa pueden poner el caso en conocimiento de la AEPD.",
          "**El coste oculto del hardware.** Si tienes que retirar los terminales biométricos y migrar deprisa, sumas el dinero ya invertido en lectores que no podrás usar.",
          "**Daño reputacional.** Aparecer en una resolución sancionadora por tratar mal los datos de tu propia plantilla no ayuda a tu marca como empleador."
        ]
      },
      {
        "type": "paragraph",
        "text": "La buena noticia es que evitar todo esto es sencillo y barato: basta con elegir un método de fichaje que no toque datos biométricos."
      },
      {
        "type": "h2",
        "id": "alternativa-legal",
        "text": "La alternativa legal: fichar desde el móvil"
      },
      {
        "type": "paragraph",
        "text": "La forma más segura y conforme de cumplir con el [registro horario obligatorio](/blog/control-horario-digital-obligatorio-2026) es un sistema de fichaje **desde el móvil, la tablet o el navegador**, sin huella ni cara. Cada empleado se identifica con su usuario y contraseña, ficha su entrada, salida y pausas, y la empresa obtiene un registro inalterable y exportable para la Inspección de Trabajo."
      },
      {
        "type": "paragraph",
        "text": "Esto es justo lo que hace **Fichados**: no usa ningún dato biométrico. La identificación se basa en credenciales, no en tu cuerpo, así que evitas de raíz el problema del artículo 9. Y si tu actividad requiere comprobar que el empleado ficha desde el centro de trabajo, puedes activar la **geolocalización opcional**, que es lícita siempre que sea proporcional, informada y limitada a la jornada. Te contamos [cómo funciona la geolocalización al fichar](/blog/fichados-geolocalizacion-fichajes) en el blog de Fichados."
      },
      {
        "type": "paragraph",
        "text": "Para que lo tengas de un vistazo, este es el veredicto legal de cada método de fichaje:"
      },
      {
        "type": "list",
        "items": [
          "**Huella dactilar.** Dato biométrico de categoría especial (art. 9 RGPD). No permitido como método ordinario tras la guía de la AEPD de 2023.",
          "**Reconocimiento facial.** Igualmente dato biométrico de categoría especial (art. 9 RGPD). No permitido como método ordinario tras la guía de la AEPD de 2023.",
          "**Móvil o navegador con usuario y contraseña.** No trata datos biométricos. Legal y suficiente como método ordinario de fichaje.",
          "**Geolocalización opcional al fichar.** Es un dato de ubicación, no biométrico. Lícita con condiciones: proporcional, informada, limitada a la jornada y sin rastreo continuo fuera del horario."
        ]
      },
      {
        "type": "quote",
        "text": "Resumen práctico: si quieres cumplir sin sustos, olvídate de la huella y la cara. Un fichaje basado en credenciales desde el móvil o el navegador es legal, suficiente y mucho más cómodo de desplegar en toda la plantilla."
      },
      {
        "type": "paragraph",
        "text": "Además, un sistema digital te resuelve de paso el resto de obligaciones: panel en tiempo real, control de ausencias y vacaciones, informes en PDF y Excel para una inspección y conservación de los registros durante más de cuatro años. Todo lo que pide la ley, sin tocar datos sensibles."
      },
      {
        "type": "cta",
        "text": "Cumple con el registro horario sin riesgos legales ni terminales biométricos. Prueba Fichados gratis y empieza a fichar desde el móvil en cinco minutos."
      },
      {
        "type": "h2",
        "id": "preguntas-frecuentes",
        "text": "Preguntas frecuentes"
      },
      {
        "type": "h3",
        "id": "faq-huella-legal",
        "text": "¿Es legal fichar con huella dactilar en España en 2026?"
      },
      {
        "type": "paragraph",
        "text": "No como método ordinario de control horario. La huella es un dato biométrico de categoría especial (art. 9 RGPD) y, tras la guía de la AEPD de noviembre de 2023, el consentimiento del trabajador no basta como base legal. Sin una norma con rango de ley que lo autorice y supere los test de necesidad y proporcionalidad, instalar un lector de huellas para fichar es un tratamiento ilícito."
      },
      {
        "type": "h3",
        "id": "faq-facial-legal",
        "text": "¿Y el reconocimiento facial para fichar es legal?"
      },
      {
        "type": "paragraph",
        "text": "Tampoco. El reconocimiento facial es igualmente un dato biométrico de categoría especial, así que se le aplica el mismo razonamiento que a la huella: tratamiento prohibido por defecto, consentimiento inválido en el contexto laboral y ausencia de una ley que lo habilite. No es un método legal de fichaje por defecto."
      },
      {
        "type": "h3",
        "id": "faq-consentimiento",
        "text": "¿No vale el consentimiento del trabajador para usar biometría?"
      },
      {
        "type": "paragraph",
        "text": "No. El RGPD exige que el consentimiento sea libre, y la AEPD entiende que en la relación laboral no lo es, porque existe un desequilibrio de poder entre empresa y empleado. Por eso el consentimiento no levanta la prohibición del artículo 9 para tratar datos biométricos en el control de jornada."
      },
      {
        "type": "h3",
        "id": "faq-sancion",
        "text": "¿Qué sanción puedo recibir por fichar con biometría sin base legal?"
      },
      {
        "type": "paragraph",
        "text": "Las infracciones relacionadas con datos de categoría especial (art. 9) están entre las más graves del RGPD, con multas de hasta 20 millones de euros o el 4% de la facturación anual global. Para una pyme las cuantías reales son menores, pero pueden alcanzar decenas de miles de euros, además del coste de retirar el hardware y del daño reputacional."
      },
      {
        "type": "h3",
        "id": "faq-alternativa",
        "text": "¿Cuál es la alternativa legal a la huella y la cara?"
      },
      {
        "type": "paragraph",
        "text": "Un sistema de fichaje desde el móvil, la tablet o el navegador con identificación por usuario y contraseña, como Fichados, que no trata ningún dato biométrico. Si necesitas verificar que el empleado ficha en el centro de trabajo, puedes activar la geolocalización opcional, que es lícita siempre que sea proporcional, esté informada y se limite a la jornada."
      }
    ],
    "tableOfContents": [
      {
        "id": "es-legal-huella",
        "title": "¿Es legal fichar con huella dactilar?"
      },
      {
        "id": "reconocimiento-facial",
        "title": "¿Y el reconocimiento facial?"
      },
      {
        "id": "por-que-categoria-especial",
        "title": "Por qué la biometría es \"categoría especial\""
      },
      {
        "id": "que-paso-2023",
        "title": "Qué cambió con la guía de la AEPD de 2023"
      },
      {
        "id": "sanciones-riesgo",
        "title": "Sanciones y riesgo real para tu empresa"
      },
      {
        "id": "alternativa-legal",
        "title": "La alternativa legal: fichar desde el móvil"
      },
      {
        "id": "preguntas-frecuentes",
        "title": "Preguntas frecuentes"
      }
    ],
    "faqs": [
      {
        "question": "¿Es legal fichar con huella dactilar en España en 2026?",
        "answer": "No como método ordinario de control horario. La huella es un dato biométrico de categoría especial (art. 9 RGPD) y, tras la guía de la AEPD de noviembre de 2023, el consentimiento del trabajador no basta como base legal. Sin una norma con rango de ley que lo autorice y supere los test de necesidad y proporcionalidad, instalar un lector de huellas para fichar es un tratamiento ilícito."
      },
      {
        "question": "¿Y el reconocimiento facial para fichar es legal?",
        "answer": "Tampoco. El reconocimiento facial es igualmente un dato biométrico de categoría especial, así que se le aplica el mismo razonamiento que a la huella: tratamiento prohibido por defecto, consentimiento inválido en el contexto laboral y ausencia de una ley que lo habilite. No es un método legal de fichaje por defecto."
      },
      {
        "question": "¿No vale el consentimiento del trabajador para usar biometría?",
        "answer": "No. El RGPD exige que el consentimiento sea libre, y la AEPD entiende que en la relación laboral no lo es, porque existe un desequilibrio de poder entre empresa y empleado. Por eso el consentimiento no levanta la prohibición del artículo 9 para tratar datos biométricos en el control de jornada."
      },
      {
        "question": "¿Qué sanción puedo recibir por fichar con biometría sin base legal?",
        "answer": "Las infracciones relacionadas con datos de categoría especial (art. 9) están entre las más graves del RGPD, con multas de hasta 20 millones de euros o el 4% de la facturación anual global. Para una pyme las cuantías reales son menores, pero pueden alcanzar decenas de miles de euros, además del coste de retirar el hardware y del daño reputacional."
      },
      {
        "question": "¿Cuál es la alternativa legal a la huella y la cara?",
        "answer": "Un sistema de fichaje desde el móvil, la tablet o el navegador con identificación por usuario y contraseña, como Fichados, que no trata ningún dato biométrico. Si necesitas verificar que el empleado ficha en el centro de trabajo, puedes activar la geolocalización opcional, que es lícita siempre que sea proporcional, esté informada y se limite a la jornada."
      }
    ]
  },
  {
    "id": "16",
    "slug": "sistemas-de-control-horario",
    "title": "Sistemas de control horario: tipos y cuál elegir en 2026",
    "description": "Comparamos 5 sistemas de control horario (papel, Excel, RFID, biométrico y app) por coste, legalidad RGPD y fiabilidad ante Inspección. Elige el tuyo.",
    "category": "Guías",
    "date": "18 Jun 2026",
    "readTime": "8 min",
    "gradient": "from-[hsl(142,71%,45%)]/30 to-[hsl(142,71%,45%)]/10",
    "content": [
      {
        "type": "verdict",
        "variant": "depende",
        "title": "Depende, pero hay un claro favorito",
        "text": "No todos los sistemas de control horario valen lo mismo ante una Inspección. Hoy el más seguro, barato y cómodo es el **digital (app o navegador)**: deja un registro inalterable, accesible y conservado más de 4 años sin papeleo ni hardware caro."
      },
      {
        "type": "paragraph",
        "text": "Elegir un **sistema de control horario** ya no es opcional: desde 2019 toda empresa en España está **obligada a registrar la jornada** de sus empleados (art. 34.9 del Estatuto de los Trabajadores). La pregunta ya no es *si* hay que fichar, sino *con qué sistema* hacerlo. Y aquí hay diferencias enormes: un cuaderno de papel y una app en el móvil cumplen la misma ley, pero te exponen a riesgos muy distintos cuando llama a la puerta la Inspección de Trabajo."
      },
      {
        "type": "paragraph",
        "text": "En esta guía comparamos los **cinco sistemas de control horario** (o sistemas de fichaje) más habituales por coste, fiabilidad, legalidad y comodidad, para que elijas con criterio según el tamaño de tu plantilla. Si lo que buscas es el detalle de cómo se ficha y qué dice la norma, tienes la [guía completa para fichar en el trabajo](/blog/fichar-en-el-trabajo-guia-completa)."
      },
      {
        "type": "h2",
        "id": "que-exige-la-ley",
        "text": "Qué le exige la ley a un sistema de control horario"
      },
      {
        "type": "paragraph",
        "text": "Antes de comparar, conviene saber qué tiene que cumplir cualquier sistema de fichaje para ser válido. La normativa (art. 34.9 ET y el RDL 8/2019) y los criterios de la Inspección marcan tres requisitos clave:"
      },
      {
        "type": "list",
        "items": [
          "**Registro fiable e inalterable**: el sistema debe reflejar la jornada real, sin que pueda modificarse a posteriori sin dejar rastro. Un Excel que cualquiera puede reescribir cojea aquí.",
          "**Conservación durante 4 años**: los registros deben guardarse y estar disponibles durante al menos cuatro años para empleados, sus representantes y la Inspección.",
          "**Accesible y exportable**: debes poder mostrar los registros en cualquier momento, idealmente exportados en un formato claro (PDF o Excel) que la Inspección pueda revisar sin fricción."
        ]
      },
      {
        "type": "callout",
        "variant": "clave",
        "text": "La clave no es solo *tener* un sistema, sino que sea **inalterable y conservable**. Un registro que se puede manipular o que se pierde tras unos meses no te protege: ante la Inspección equivale a no tener nada, con sanciones de **1.251 a 6.250 €** por infracción grave (LISOS). Lo detallamos en la guía de [sanciones por no fichar](/blog/sanciones-no-fichar-multas)."
      },
      {
        "type": "h2",
        "id": "tipos-de-sistemas",
        "text": "Los 5 tipos de sistema de fichaje"
      },
      {
        "type": "paragraph",
        "text": "En la práctica, las empresas españolas usan cinco grandes familias de sistema de fichaje para trabajadores. Estos son, de más rudimentario a más moderno:"
      },
      {
        "type": "list",
        "items": [
          "**Papel o firma**: una hoja o cuaderno donde cada empleado anota entrada y salida a mano.",
          "**Excel o plantilla digital**: una hoja de cálculo compartida donde se registran los horarios.",
          "**Tarjeta o RFID**: tarjetas de proximidad que se pasan por un lector físico en la entrada.",
          "**Biométrico (huella o reconocimiento facial)**: un terminal lee la huella o la cara del empleado.",
          "**App o navegador**: el trabajador ficha desde su móvil, tablet u ordenador, con geolocalización opcional."
        ]
      },
      {
        "type": "h2",
        "id": "tabla-comparativa",
        "text": "Tabla comparativa de un vistazo"
      },
      {
        "type": "table",
        "headers": [
          "Sistema",
          "Coste",
          "Fiabilidad ante Inspección",
          "Legalidad / RGPD",
          "Comodidad"
        ],
        "rows": [
          [
            "Papel / firma",
            "Muy bajo",
            "Baja: se pierde, se rellena a posteriori, ilegible",
            "Correcta, sin datos sensibles",
            "Baja: archivar y buscar a mano"
          ],
          [
            "Excel / plantilla",
            "Muy bajo",
            "Baja-media: alterable, sin trazabilidad",
            "Correcta",
            "Media: depende de la disciplina"
          ],
          [
            "Tarjeta / RFID",
            "Medio-alto (hardware)",
            "Media-alta: fiable si se mantiene",
            "Correcta, datos de presencia",
            "Media: hay que estar en la oficina"
          ],
          [
            "Biométrico (huella/facial)",
            "Alto (hardware)",
            "Alta técnica, pero ver Legalidad",
            "Muy restringida (AEPD 2023)",
            "Media: requiere terminal físico"
          ],
          [
            "App / navegador",
            "Bajo (desde 9 €/mes)",
            "Alta: inalterable, +4 años, exportable",
            "Correcta, geolocalización opcional informada",
            "Alta: ficha desde cualquier dispositivo"
          ]
        ]
      },
      {
        "type": "h2",
        "id": "papel-y-excel",
        "text": "Papel y Excel: baratos pero frágiles"
      },
      {
        "type": "paragraph",
        "text": "Son la opción de coste casi cero, y por eso muchas micropymes empiezan así. El problema es que son **los sistemas más frágiles ante una inspección**. Una hoja de papel se traspapela, se moja, se rellena el viernes de golpe (algo que la Inspección detecta enseguida) o se vuelve ilegible. Y un Excel es, por definición, alterable: cualquiera puede cambiar una hora sin que quede rastro, lo que choca de frente con el requisito de inalterabilidad. Si te estás planteando justo este salto, te interesa el [duelo Fichados vs Excel](/blog/fichados-vs-excel-comparativa)."
      },
      {
        "type": "paragraph",
        "text": "Si aun así quieres arrancar con algo sencillo y gratuito mientras decides, puedes descargar nuestra [plantilla de control horario](/recursos/plantilla-control-horario) lista para usar. Eso sí, considérala un punto de partida, no una solución definitiva: en cuanto tengas varios empleados, la fragilidad del papel y el Excel se nota, y conviene dar el salto a un sistema digital inalterable."
      },
      {
        "type": "h2",
        "id": "tarjeta-y-biometrico",
        "text": "Tarjeta RFID y biométrico: hardware y riesgos"
      },
      {
        "type": "paragraph",
        "text": "Las **tarjetas RFID** son fiables y dejan un registro digital decente, pero arrastran dos pegas: requieren comprar e instalar lectores físicos (coste de hardware y mantenimiento) y obligan a estar físicamente en la oficina, así que no sirven para teletrabajo, comerciales o personal en movimiento. Además, las tarjetas se prestan, se pierden y se olvidan."
      },
      {
        "type": "paragraph",
        "text": "El **biométrico** (huella dactilar o reconocimiento facial) parece la opción más moderna y a prueba de trampas, pero aquí hay un problema legal serio que muchas empresas desconocen."
      },
      {
        "type": "callout",
        "variant": "aviso",
        "text": "**La biometría para fichar está muy restringida.** La guía de la AEPD de noviembre de 2023 considera los datos biométricos para control de presencia un tratamiento de categoría especial (art. 9 RGPD). El consentimiento del trabajador **no sirve como base legal** (hay desequilibrio en la relación laboral) y se exige una norma con rango de ley que lo autorice. En la práctica, hoy **no está permitido como método ordinario de fichaje**."
      },
      {
        "type": "paragraph",
        "text": "Dicho de otro modo: instalar un terminal de huella o facial como sistema por defecto para fichar te coloca en una situación de alto riesgo sancionador, no de cumplimiento. Lo explicamos a fondo en nuestra guía sobre el [fichaje biométrico con huella o reconocimiento facial](/blog/fichaje-biometrico-huella-reconocimiento-facial)."
      },
      {
        "type": "h2",
        "id": "app-navegador",
        "text": "App o navegador: el estándar de 2026"
      },
      {
        "type": "paragraph",
        "text": "El fichaje digital desde **móvil, tablet u ordenador** se ha convertido en el estándar por una razón sencilla: cumple los tres requisitos legales sin esfuerzo y sin hardware. El registro es **inalterable**, se conserva automáticamente **más de 4 años** y se **exporta en PDF o Excel** para la Inspección con un clic. Y como funciona en cualquier dispositivo con navegador, vale igual para una oficina, una tienda, un equipo de comerciales o teletrabajo."
      },
      {
        "type": "paragraph",
        "text": "Frente al biométrico, el digital tiene otra ventaja decisiva: **no usa datos biométricos**, así que esquiva por completo el problema del art. 9 RGPD. Si necesitas verificar dónde ficha cada empleado, puedes activar la **geolocalización opcional**, que es lícita siempre que sea proporcional, esté informada y se limite a la jornada (sin rastreo continuo ni fuera del horario). Es decir: consigues control sin entrar en la zona vetada por la AEPD. Tienes el detalle en [¿es legal fichar con geolocalización?](/blog/es-legal-fichar-con-geolocalizacion)."
      },
      {
        "type": "paragraph",
        "text": "Esta es exactamente la propuesta de [Fichados](/blog/fichaje-digital-obligatorio-2026): fichaje desde cualquier dispositivo, panel en tiempo real, gestión de ausencias y vacaciones, informes listos para Inspección y registros inalterables conservados más de 4 años, desde 9 €/mes."
      },
      {
        "type": "h2",
        "id": "cual-elegir",
        "text": "Cuál elegir según el tamaño de tu empresa"
      },
      {
        "type": "paragraph",
        "text": "No hay una única respuesta correcta, pero sí una recomendación clara por perfil:"
      },
      {
        "type": "list",
        "items": [
          "**Autónomo con 1-3 empleados**: olvídate del papel. Una app de fichaje desde el móvil te cuesta menos que un café al día y te quita el riesgo de un registro frágil.",
          "**Pyme de 5-50 empleados**: el sistema digital es el más rentable. Centralizas toda la plantilla en un panel, exportas informes en segundos y olvidas el archivo en papel y los Excel descontrolados.",
          "**Equipos en movimiento o teletrabajo**: solo el fichaje por app o navegador (con geolocalización opcional) cubre a quien no está en una oficina fija. Tarjeta y biométrico se quedan cortos.",
          "**Empresa que sopesa biométrico**: descártalo como método por defecto hasta que cambie el marco legal. El riesgo sancionador del art. 9 RGPD no compensa."
        ]
      },
      {
        "type": "paragraph",
        "text": "Antes de decidir, conviene que sepas cuántas horas registras de verdad cada mes y si cuadran con la jornada pactada. Para eso te puede ayudar nuestra [calculadora de horas y minutos](/herramientas/calculadora-horas-minutos), que suma jornadas y pausas sin que tengas que pelearte con fórmulas."
      },
      {
        "type": "quote",
        "text": "Cualquier sistema cumple la ley sobre el papel. Pocos te protegen de verdad cuando la Inspección pide ver cuatro años de registros en cinco minutos."
      },
      {
        "type": "cta",
        "text": "Pásate al fichaje digital sin permanencia y deja de preocuparte por el papel, los Excel o el riesgo del biométrico. Registros inalterables, informes para Inspección y geolocalización opcional, desde 9 €/mes. Prueba Fichados con tu equipo hoy mismo."
      }
    ],
    "tableOfContents": [
      {
        "id": "que-exige-la-ley",
        "title": "Qué le exige la ley a un sistema de control horario"
      },
      {
        "id": "tipos-de-sistemas",
        "title": "Los 5 tipos de sistema de fichaje"
      },
      {
        "id": "tabla-comparativa",
        "title": "Tabla comparativa de un vistazo"
      },
      {
        "id": "papel-y-excel",
        "title": "Papel y Excel: baratos pero frágiles"
      },
      {
        "id": "tarjeta-y-biometrico",
        "title": "Tarjeta RFID y biométrico: hardware y riesgos"
      },
      {
        "id": "app-navegador",
        "title": "App o navegador: el estándar de 2026"
      },
      {
        "id": "cual-elegir",
        "title": "Cuál elegir según el tamaño de tu empresa"
      }
    ],
    "faqs": [
      {
        "question": "¿Cuál es el mejor sistema de control horario para una pyme?",
        "answer": "Para la mayoría de pymes (5-50 empleados), el sistema digital por app o navegador es el más recomendable. Cumple los tres requisitos legales (inalterabilidad, conservación de 4 años y accesibilidad), no requiere comprar hardware, funciona en cualquier dispositivo y cuesta desde 9 €/mes. Además, evita el riesgo legal del fichaje biométrico."
      },
      {
        "question": "¿Es legal fichar con huella dactilar o reconocimiento facial?",
        "answer": "Está muy restringido. Según la guía de la AEPD de noviembre de 2023, los datos biométricos para control de presencia son una categoría especial (art. 9 RGPD). El consentimiento del trabajador no es base legal válida por el desequilibrio de la relación laboral, y se exige una norma con rango de ley que lo autorice. En la práctica, hoy no está permitido como método ordinario de fichaje."
      },
      {
        "question": "¿Vale registrar la jornada en un Excel o en papel?",
        "answer": "Legalmente cumplen, pero son los sistemas más frágiles. El papel se pierde, se vuelve ilegible o se rellena a posteriori, y un Excel es alterable sin dejar rastro, lo que choca con el requisito de inalterabilidad. Ante una inspección rigurosa son los sistemas que más fácilmente se cuestionan. Sirven para empezar, no como solución definitiva."
      },
      {
        "question": "¿Qué requisitos debe cumplir un sistema de control horario para ser válido?",
        "answer": "Debe registrar la jornada de forma fiable e inalterable, conservar los registros durante al menos 4 años, y mantenerlos accesibles y exportables para empleados, sus representantes y la Inspección de Trabajo. Un sistema digital cumple los tres automáticamente; el papel y el Excel cumplen sobre el papel pero fallan en inalterabilidad y conservación."
      },
      {
        "question": "¿Puedo usar la geolocalización para controlar dónde ficha mi equipo?",
        "answer": "Sí, es lícita con condiciones. El art. 20.3 ET y el RGPD permiten la geolocalización para fichar siempre que sea proporcional, esté informada (transparencia con el trabajador) y se limite a la jornada y a la finalidad de control, sin rastreo continuo ni fuera del horario. En Fichados es una función opcional que puedes activar o no."
      }
    ]
  },
];

export const CATEGORIES: Array<ArticleCategory | "Todos"> = ["Todos", "Normativa", "Guías", "Comparativas", "Novedades"];
