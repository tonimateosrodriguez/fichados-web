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
      "Calcula las horas extras de tus empleados y su coste con recargos del 25% y 50% segun el Estatuto de los Trabajadores. Herramienta online gratuita.",
    intro:
      "Calcula al instante cuantas horas extras realizan tus empleados y cuanto te cuestan realmente. Incluye los recargos legales del 25% y 50% segun el articulo 35 del Estatuto de los Trabajadores.",
    componentKey: "horas-extras",
    faq: [
      {
        question: "¿Cual es el recargo legal por horas extras en España?",
        answer:
          "Segun el articulo 35 del Estatuto de los Trabajadores, el recargo minimo por horas extraordinarias es del 25% sobre el salario hora ordinario para las primeras 80 horas anuales. Por encima de ese limite, el recargo habitual es del 50%, aunque el convenio colectivo puede establecer condiciones distintas.",
      },
      {
        question: "¿Cuantas horas extras puede hacer un trabajador al año?",
        answer:
          "El maximo legal de horas extraordinarias es de 80 al año por trabajador, segun el articulo 35.2 del Estatuto de los Trabajadores. Superarlas es una infraccion grave que puede acarrear multas de entre 626 y 6.250 euros por empleado afectado.",
      },
      {
        question:
          "¿Es obligatorio registrar las horas extras de los empleados?",
        answer:
          "Si. Desde el Real Decreto-ley 8/2019, todas las empresas estan obligadas a registrar la jornada diaria de cada trabajador, incluyendo las horas extras. El registro debe conservarse durante 4 años y estar disponible para la Inspeccion de Trabajo.",
      },
    ],
  },
  {
    slug: "calculadora-horas-trabajadas",
    nombre: "Calculadora de horas trabajadas",
    h1: "Calculadora de horas trabajadas online",
    description:
      "Calcula las horas netas trabajadas al dia, semana y mes descontando pausas. Herramienta gratuita para el control horario de empleados.",
    intro:
      "Introduce la hora de entrada, salida y el tiempo de pausa para obtener al instante las horas netas trabajadas al dia, a la semana y al mes. Ideal para el control horario de tu equipo.",
    componentKey: "horas-trabajadas",
    faq: [
      {
        question: "¿Como se calculan las horas netas trabajadas?",
        answer:
          "Las horas netas se calculan restando las pausas al tiempo total entre la entrada y la salida. Por ejemplo, si un empleado entra a las 9:00 y sale a las 18:00 con 30 minutos de pausa, trabaja 8 horas y 30 minutos netos al dia.",
      },
      {
        question: "¿Es obligatorio descontar la pausa para comer?",
        answer:
          "Si la jornada es continuada y supera las 6 horas, el trabajador tiene derecho a un descanso minimo de 15 minutos. Para menores de 18 años, el descanso es de 30 minutos si la jornada supera 4 horas y media. La pausa para comer en jornada partida se descuenta del computo de horas.",
      },
      {
        question: "¿Cuantas horas se trabajan al mes de media en España?",
        answer:
          "Con una jornada completa de 40 horas semanales y una media de 22 dias laborables al mes, se trabajan aproximadamente 176 horas mensuales. Con la reforma de 37,5 horas semanales prevista para 2026, serian unas 165 horas mensuales.",
      },
    ],
  },
  {
    slug: "calculadora-jornada-laboral",
    nombre: "Calculadora de jornada laboral",
    h1: "Calculadora de jornada laboral 2026",
    description:
      "Calcula tu jornada laboral semanal, diaria y anual segun la legislacion española de 2026. Incluye la reforma de las 37,5 horas semanales.",
    intro:
      "Calcula las horas diarias, semanales, mensuales y anuales segun tu tipo de jornada. Incluye la reforma de las 37,5 horas semanales prevista para 2026 y ten en cuenta los festivos nacionales.",
    componentKey: "jornada-laboral",
    faq: [
      {
        question: "¿Cual es la jornada maxima legal en España en 2026?",
        answer:
          "Actualmente la jornada maxima es de 40 horas semanales en computo anual, segun el articulo 34 del Estatuto de los Trabajadores. En 2026 esta prevista la entrada en vigor de la reduccion a 37,5 horas semanales sin reduccion salarial.",
      },
      {
        question: "¿En que consiste la reforma de las 37,5 horas?",
        answer:
          "La reforma de la jornada laboral reduce la jornada maxima de 40 a 37,5 horas semanales sin reduccion de salario. Esto equivale a unas 1.645 horas anuales frente a las 1.752 actuales, lo que supone trabajar aproximadamente 107 horas menos al año.",
      },
      {
        question: "¿Cuantos dias festivos hay al año en España?",
        answer:
          "En España hay 14 dias festivos al año: 8 nacionales fijados por el Gobierno y 2 autonómicos mas 2 locales fijados por cada comunidad y municipio. A esto se suman las vacaciones minimas legales de 30 dias naturales (22 laborables).",
      },
    ],
  },
  {
    slug: "calculadora-multas-fichaje",
    nombre: "Calculadora de multas por fichaje",
    h1: "Calculadora de multas por no fichar",
    description:
      "Calcula la multa que puede recibir tu empresa por no tener sistema de fichaje. Sanciones de 60 a 187.515 euros segun la LISOS. Herramienta gratis.",
    intro:
      "Descubre cuanto podria costarte una sancion por no cumplir con el registro de jornada obligatorio. Calcula las multas segun el numero de empleados y el tipo de infraccion conforme a la LISOS.",
    componentKey: "multas-fichaje",
    faq: [
      {
        question:
          "¿Cuanto es la multa por no tener sistema de fichaje en la empresa?",
        answer:
          "Las multas por no cumplir con el registro de jornada obligatorio van desde 60 euros para infracciones leves hasta 187.515 euros para las muy graves, segun la Ley de Infracciones y Sanciones del Orden Social (LISOS). La cuantia depende de la gravedad y las circunstancias.",
      },
      {
        question:
          "¿Que tipos de infracciones existen por no fichar?",
        answer:
          "Existen tres tipos: leve (60-625 euros), por errores formales en el registro; grave (626-6.250 euros), por no tener sistema de fichaje o no conservar los registros 4 años; y muy grave (6.251-187.515 euros), por reincidencia o falsificacion de registros.",
      },
      {
        question:
          "¿La Inspeccion de Trabajo puede multar a cada empleado por separado?",
        answer:
          "Si. La Inspeccion de Trabajo puede abrir un acta de infraccion por cada trabajador afectado. Esto significa que en una empresa con 20 empleados sin fichar, la multa total puede multiplicarse por 20, alcanzando importes muy elevados.",
      },
    ],
  },
  {
    slug: "calculadora-coste-fichaje",
    nombre: "Comparador de precios de fichaje",
    h1: "Comparador de precios de software de fichaje",
    description:
      "Compara precios de Fichados, Factorial, Sesame HR y Bizneo. Calcula cuanto cuesta el software de fichaje segun tus empleados. Herramienta gratis.",
    intro:
      "Compara en tiempo real el coste mensual y anual de los principales softwares de fichaje en España segun tu numero de empleados. Descubre cual es la opcion mas economica para tu empresa.",
    componentKey: "coste-fichaje",
    faq: [
      {
        question: "¿Cuanto cuesta un software de fichaje para empresas?",
        answer:
          "El precio varia segun el proveedor y el numero de empleados. Fichados parte desde 19 euros al mes mas 3 euros por empleado. Otros competidores como Factorial, Sesame HR o Bizneo parten desde 50-60 euros al mes con tarifas por usuario de entre 4,50 y 6 euros.",
      },
      {
        question: "¿Que debe incluir un buen software de fichaje?",
        answer:
          "Un buen software de fichaje debe incluir: registro de entrada y salida desde movil y web, geolocalizacion, informes automaticos para la Inspeccion de Trabajo, gestion de turnos y vacaciones, notificaciones a empleados, y exportacion de datos. Fichados incluye todo esto desde su plan basico.",
      },
      {
        question: "¿Fichados es el software de fichaje mas barato?",
        answer:
          "Si. Fichados es la opcion mas economica del mercado con una tarifa plana de 19 euros al mes mas 3 euros por empleado. Para una empresa de 10 empleados, Fichados cuesta 49 euros al mes frente a los 52-60 euros de la competencia, con un ahorro anual significativo.",
      },
    ],
  },
];

export function getHerramientaBySlug(slug: string): Herramienta | undefined {
  return herramientas.find((h) => h.slug === slug);
}
