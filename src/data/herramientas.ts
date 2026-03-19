export interface Herramienta {
  slug: string;
  nombre: string;
  h1: string;
  description: string;
  intro: string;
  componentKey: string;
  faq: { question: string; answer: string }[];
}

export const herramientas: Herramienta[] = [
  {
    slug: "calculadora-horas-extras",
    nombre: "Calculadora de horas extras",
    h1: "Calculadora de horas extras online gratis",
    description:
      "Calcula las horas extras de tus empleados y su coste con recargos del 25% y 50% según el Estatuto de los Trabajadores. Herramienta online gratuita.",
    intro:
      "Calcula al instante cuántas horas extras realizan tus empleados y cuánto te cuestan realmente. Incluye los recargos legales del 25% y 50% según el artículo 35 del Estatuto de los Trabajadores.",
    componentKey: "horas-extras",
    faq: [
      {
        question: "¿Cuál es el recargo legal por horas extras en España?",
        answer:
          "Según el artículo 35 del Estatuto de los Trabajadores, el recargo mínimo por horas extraordinarias es del 25% sobre el salario hora ordinario para las primeras 80 horas anuales. Por encima de ese límite, el recargo habitual es del 50%, aunque el convenio colectivo puede establecer condiciones distintas.",
      },
      {
        question: "¿Cuántas horas extras puede hacer un trabajador al año?",
        answer:
          "El máximo legal de horas extraordinarias es de 80 al año por trabajador, según el artículo 35.2 del Estatuto de los Trabajadores. Superarlas es una infracción grave que puede acarrear multas de entre 626 y 6.250 euros por empleado afectado.",
      },
      {
        question:
          "¿Es obligatorio registrar las horas extras de los empleados?",
        answer:
          "Sí. Desde el Real Decreto-ley 8/2019, todas las empresas están obligadas a registrar la jornada diaria de cada trabajador, incluyendo las horas extras. El registro debe conservarse durante 4 años y estar disponible para la Inspección de Trabajo.",
      },
    ],
  },
  {
    slug: "calculadora-horas-trabajadas",
    nombre: "Calculadora de horas trabajadas",
    h1: "Calculadora de horas trabajadas online",
    description:
      "Calcula las horas netas trabajadas al día, semana y mes descontando pausas. Herramienta gratuita para el control horario de empleados.",
    intro:
      "Introduce la hora de entrada, salida y el tiempo de pausa para obtener al instante las horas netas trabajadas al día, a la semana y al mes. Ideal para el control horario de tu equipo.",
    componentKey: "horas-trabajadas",
    faq: [
      {
        question: "¿Cómo se calculan las horas netas trabajadas?",
        answer:
          "Las horas netas se calculan restando las pausas al tiempo total entre la entrada y la salida. Por ejemplo, si un empleado entra a las 9:00 y sale a las 18:00 con 30 minutos de pausa, trabaja 8 horas y 30 minutos netos al día.",
      },
      {
        question: "¿Es obligatorio descontar la pausa para comer?",
        answer:
          "Si la jornada es continuada y supera las 6 horas, el trabajador tiene derecho a un descanso mínimo de 15 minutos. Para menores de 18 años, el descanso es de 30 minutos si la jornada supera 4 horas y media. La pausa para comer en jornada partida se descuenta del cómputo de horas.",
      },
      {
        question: "¿Cuántas horas se trabajan al mes de media en España?",
        answer:
          "Con una jornada completa de 40 horas semanales y una media de 22 días laborables al mes, se trabajan aproximadamente 176 horas mensuales. Con la reforma de 37,5 horas semanales prevista para 2026, serían unas 165 horas mensuales.",
      },
    ],
  },
  {
    slug: "calculadora-jornada-laboral",
    nombre: "Calculadora de jornada laboral",
    h1: "Calculadora de jornada laboral 2026",
    description:
      "Calcula tu jornada laboral semanal, diaria y anual según la legislación española de 2026. Incluye la reforma de las 37,5 horas semanales.",
    intro:
      "Calcula las horas diarias, semanales, mensuales y anuales según tu tipo de jornada. Incluye la reforma de las 37,5 horas semanales prevista para 2026 y ten en cuenta los festivos nacionales.",
    componentKey: "jornada-laboral",
    faq: [
      {
        question: "¿Cuál es la jornada máxima legal en España en 2026?",
        answer:
          "Actualmente la jornada máxima es de 40 horas semanales en cómputo anual, según el artículo 34 del Estatuto de los Trabajadores. En 2026 está prevista la entrada en vigor de la reducción a 37,5 horas semanales sin reducción salarial.",
      },
      {
        question: "¿En qué consiste la reforma de las 37,5 horas?",
        answer:
          "La reforma de la jornada laboral reduce la jornada máxima de 40 a 37,5 horas semanales sin reducción de salario. Esto equivale a unas 1.645 horas anuales frente a las 1.752 actuales, lo que supone trabajar aproximadamente 107 horas menos al año.",
      },
      {
        question: "¿Cuántos días festivos hay al año en España?",
        answer:
          "En España hay 14 días festivos al año: 8 nacionales fijados por el Gobierno y 2 autonómicos más 2 locales fijados por cada comunidad y municipio. A esto se suman las vacaciones mínimas legales de 30 días naturales (22 laborables).",
      },
    ],
  },
  {
    slug: "calculadora-multas-fichaje",
    nombre: "Calculadora de multas por fichaje",
    h1: "Calculadora de multas por no fichar",
    description:
      "Calcula la multa que puede recibir tu empresa por no tener sistema de fichaje. Sanciones de 60 a 187.515 euros según la LISOS. Herramienta gratis.",
    intro:
      "Descubre cuánto podría costarte una sanción por no cumplir con el registro de jornada obligatorio. Calcula las multas según el número de empleados y el tipo de infracción conforme a la LISOS.",
    componentKey: "multas-fichaje",
    faq: [
      {
        question:
          "¿Cuánto es la multa por no tener sistema de fichaje en la empresa?",
        answer:
          "Las multas por no cumplir con el registro de jornada obligatorio van desde 60 euros para infracciones leves hasta 187.515 euros para las muy graves, según la Ley de Infracciones y Sanciones del Orden Social (LISOS). La cuantía depende de la gravedad y las circunstancias.",
      },
      {
        question:
          "¿Qué tipos de infracciones existen por no fichar?",
        answer:
          "Existen tres tipos: leve (60-625 euros), por errores formales en el registro; grave (626-6.250 euros), por no tener sistema de fichaje o no conservar los registros 4 años; y muy grave (6.251-187.515 euros), por reincidencia o falsificación de registros.",
      },
      {
        question:
          "¿La Inspección de Trabajo puede multar a cada empleado por separado?",
        answer:
          "Sí. La Inspección de Trabajo puede abrir un acta de infracción por cada trabajador afectado. Esto significa que en una empresa con 20 empleados sin fichar, la multa total puede multiplicarse por 20, alcanzando importes muy elevados.",
      },
    ],
  },
  {
    slug: "calculadora-coste-fichaje",
    nombre: "Comparador de precios de fichaje",
    h1: "Comparador de precios de software de fichaje",
    description:
      "Compara precios de Fichados, Factorial, Sesame HR y Bizneo. Calcula cuánto cuesta el software de fichaje según tus empleados. Herramienta gratis.",
    intro:
      "Compara en tiempo real el coste mensual y anual de los principales softwares de fichaje en España según tu número de empleados. Descubre cuál es la opción más económica para tu empresa.",
    componentKey: "coste-fichaje",
    faq: [
      {
        question: "¿Cuánto cuesta un software de fichaje para empresas?",
        answer:
          "El precio varía según el proveedor y el número de empleados. Fichados parte desde 19 euros al mes más 3 euros por empleado. Otros competidores como Factorial, Sesame HR o Bizneo parten desde 50-60 euros al mes con tarifas por usuario de entre 4,50 y 6 euros.",
      },
      {
        question: "¿Qué debe incluir un buen software de fichaje?",
        answer:
          "Un buen software de fichaje debe incluir: registro de entrada y salida desde móvil y web, geolocalización, informes automáticos para la Inspección de Trabajo, gestión de turnos y vacaciones, notificaciones a empleados, y exportación de datos. Fichados incluye todo esto desde su plan básico.",
      },
      {
        question: "¿Fichados es el software de fichaje más barato?",
        answer:
          "Sí. Fichados es la opción más económica del mercado con una tarifa plana de 19 euros al mes más 3 euros por empleado. Para una empresa de 10 empleados, Fichados cuesta 49 euros al mes frente a los 52-60 euros de la competencia, con un ahorro anual significativo.",
      },
    ],
  },
];

export function getHerramientaBySlug(slug: string): Herramienta | undefined {
  return herramientas.find((h) => h.slug === slug);
}
