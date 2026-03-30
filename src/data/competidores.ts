export interface Competidor {
  slug: string;
  nombre: string;
  h1: string;
  description: string;
  precioCompetidor: string;
  features: {
    feature: string;
    fichados: boolean | string;
    competidor: boolean | string;
  }[];
}

export const competidores: Competidor[] = [
  {
    slug: "fichados-vs-factorial",
    nombre: "Factorial",
    h1: "Fichados vs Factorial: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Factorial para el registro de jornada. Descubre por qué Fichados es más sencillo, más económico y 100% enfocado en fichaje.",
    precioCompetidor: "Desde 5,25 €/empleado/mes (plan Starter)",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio desde 19 €/mes (tarifa plana)", fichados: true, competidor: false },
      { feature: "Sin coste por empleado", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Enfocado 100% en fichaje (sin módulos innecesarios)", fichados: true, competidor: false },
      { feature: "Informes de cumplimiento para Inspección de Trabajo", fichados: true, competidor: true },
      { feature: "Gestión de RRHH completa (nóminas, vacaciones, etc.)", fichados: false, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Soporte en español incluido", fichados: true, competidor: true },
    ],
  },
  {
    slug: "fichados-vs-sesame",
    nombre: "Sesame HR",
    h1: "Fichados vs Sesame HR: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Sesame HR para el control de fichajes. Fichados es más económico, más sencillo y sin costes ocultos por empleado.",
    precioCompetidor: "Desde 4,50 €/empleado/mes (plan Starter)",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio desde 19 €/mes (tarifa plana)", fichados: true, competidor: false },
      { feature: "Sin coste por empleado", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Fichaje offline con sincronización automática", fichados: true, competidor: "Limitado" },
      { feature: "Informes de cumplimiento para Inspección de Trabajo", fichados: true, competidor: true },
      { feature: "Gestión de vacaciones y ausencias", fichados: false, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Interfaz sencilla sin curva de aprendizaje", fichados: true, competidor: false },
    ],
  },
  {
    slug: "fichados-vs-bizneo",
    nombre: "Bizneo HR",
    h1: "Fichados vs Bizneo HR: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Bizneo HR para el registro de jornada. Fichados ofrece fichaje más sencillo, más económico y sin módulos que no necesitas.",
    precioCompetidor: "Precio bajo consulta (modular)",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio transparente desde 19 €/mes", fichados: true, competidor: false },
      { feature: "Sin coste por empleado", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Sin necesidad de contactar con ventas para empezar", fichados: true, competidor: false },
      { feature: "Informes de cumplimiento para Inspección de Trabajo", fichados: true, competidor: true },
      { feature: "Suite completa de RRHH (reclutamiento, evaluación, etc.)", fichados: false, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: "Consultar" },
      { feature: "Autoservicio: empieza sin hablar con nadie", fichados: true, competidor: false },
    ],
  },
  {
    slug: "fichados-vs-personio",
    nombre: "Personio",
    h1: "Fichados vs Personio: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Personio para el control de fichajes en España. Fichados es más económico, en español y pensado para pymes españolas.",
    precioCompetidor: "Precio bajo consulta (desde ~3,50 €/empleado/mes)",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio transparente desde 19 €/mes", fichados: true, competidor: false },
      { feature: "Sin coste por empleado", fichados: true, competidor: false },
      { feature: "Diseñado para el mercado español", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Soporte en español nativo", fichados: true, competidor: "Limitado" },
      { feature: "Informes adaptados a la Inspección de Trabajo española", fichados: true, competidor: "Genérico" },
      { feature: "Gestión de RRHH internacional", fichados: false, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
    ],
  },
  {
    slug: "fichados-vs-tramitapp",
    nombre: "TramitApp",
    h1: "Fichados vs TramitApp: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs TramitApp para el registro de jornada. Fichados es más económico, más sencillo y sin módulos innecesarios.",
    precioCompetidor: "Desde 4,50 €/empleado/mes",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio desde 19 €/mes (tarifa plana)", fichados: true, competidor: false },
      { feature: "Sin coste por empleado", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Gestión de turnos y cuadrantes", fichados: true, competidor: true },
      { feature: "Informes de cumplimiento para Inspección de Trabajo", fichados: true, competidor: true },
      { feature: "Control de ausencias y vacaciones", fichados: false, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Soporte en español incluido", fichados: true, competidor: true },
    ],
  },
  {
    slug: "fichados-vs-kenjo",
    nombre: "Kenjo",
    h1: "Fichados vs Kenjo: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Kenjo para el control de fichajes. Fichados es más económico, más sencillo y 100% enfocado en el mercado español.",
    precioCompetidor: "Desde 4,50 €/empleado/mes (plan Starter)",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio desde 19 €/mes (tarifa plana)", fichados: true, competidor: false },
      { feature: "Sin coste por empleado", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: "Limitado" },
      { feature: "Gestión de turnos y cuadrantes", fichados: true, competidor: true },
      { feature: "Informes de cumplimiento para Inspección de Trabajo", fichados: true, competidor: true },
      { feature: "Gestión de RRHH completa (nóminas, vacaciones, etc.)", fichados: false, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Soporte en español incluido", fichados: true, competidor: true },
    ],
  },
];

export function getCompetidorBySlug(slug: string): Competidor | undefined {
  return competidores.find((c) => c.slug === slug);
}
