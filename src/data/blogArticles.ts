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
];

export const CATEGORIES: Array<ArticleCategory | "Todos"> = ["Todos", "Normativa", "Guías", "Comparativas", "Novedades"];
