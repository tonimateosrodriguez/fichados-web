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
    slug: "factorial",
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
    slug: "sesame",
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
    slug: "bizneo",
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
    slug: "personio",
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
    slug: "a3equipo",
    nombre: "a3Equipo (Wolters Kluwer)",
    h1: "Fichados vs a3Equipo: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs a3Equipo de Wolters Kluwer. Fichados es más moderno, más económico y no requiere instalación ni consultoría.",
    precioCompetidor: "Precio bajo consulta (licencia + implantación)",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio transparente desde 19 €/mes", fichados: true, competidor: false },
      { feature: "100% cloud, sin instalación", fichados: true, competidor: "Híbrido" },
      { feature: "Setup en menos de 5 minutos sin consultoría", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Interfaz moderna y fácil de usar", fichados: true, competidor: false },
      { feature: "Informes de cumplimiento para Inspección de Trabajo", fichados: true, competidor: true },
      { feature: "Suite completa de nóminas y RRHH", fichados: false, competidor: true },
      { feature: "Sin periodo de permanencia ni compromiso", fichados: true, competidor: false },
      { feature: "Actualizaciones automáticas incluidas", fichados: true, competidor: "Con mantenimiento" },
    ],
  },
  {
    slug: "sage",
    nombre: "Sage HR",
    h1: "Fichados vs Sage HR: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Sage HR para el registro de jornada. Fichados es más sencillo, más económico y enfocado en lo que realmente necesitas.",
    precioCompetidor: "Desde 5 €/empleado/mes",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio desde 19 €/mes (tarifa plana)", fichados: true, competidor: false },
      { feature: "Sin coste por empleado", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Enfocado en fichaje sin funciones innecesarias", fichados: true, competidor: false },
      { feature: "Informes de cumplimiento para Inspección de Trabajo", fichados: true, competidor: true },
      { feature: "Integración con contabilidad Sage", fichados: false, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: "Consultar" },
      { feature: "Soporte en español incluido", fichados: true, competidor: true },
    ],
  },
  {
    slug: "timify",
    nombre: "Timify",
    h1: "Fichados vs Timify: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Timify para el control de fichajes. Fichados está especializado en registro de jornada laboral conforme a la ley española.",
    precioCompetidor: "Desde 29 €/mes (plan Premium)",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: false },
      { feature: "Diseñado específicamente para fichaje laboral", fichados: true, competidor: false },
      { feature: "Precio desde 19 €/mes (tarifa plana)", fichados: true, competidor: false },
      { feature: "Informes de cumplimiento para Inspección de Trabajo", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: "Limitado" },
      { feature: "Gestión de citas y reservas", fichados: false, competidor: true },
      { feature: "Calendario de recursos y servicios", fichados: false, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Soporte en español nativo", fichados: true, competidor: true },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: true },
    ],
  },
  {
    slug: "clockify",
    nombre: "Clockify",
    h1: "Fichados vs Clockify: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Clockify para el registro de jornada en España. Fichados cumple el RDL 8/2019 nativamente, Clockify es un tracker genérico.",
    precioCompetidor: "Gratis (básico) / desde 3,99 $/usuario/mes (Pro)",
    features: [
      { feature: "Cumplimiento nativo del RDL 8/2019 español", fichados: true, competidor: false },
      { feature: "Informes adaptados a Inspección de Trabajo", fichados: true, competidor: false },
      { feature: "Diseñado para el mercado español", fichados: true, competidor: false },
      { feature: "Fichaje sencillo (entrada/salida)", fichados: true, competidor: "Manual" },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: "Solo en planes de pago" },
      { feature: "Tracking de tiempo por proyecto", fichados: "Básico", competidor: true },
      { feature: "Soporte en español nativo", fichados: true, competidor: false },
      { feature: "Plan gratuito disponible", fichados: false, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: true },
      { feature: "Registros inalterables con validez legal", fichados: true, competidor: false },
    ],
  },
  {
    slug: "toggl",
    nombre: "Toggl Track",
    h1: "Fichados vs Toggl Track: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Toggl Track para el registro de jornada laboral en España. Fichados cumple la normativa española, Toggl es un time tracker genérico.",
    precioCompetidor: "Gratis (hasta 5) / desde 9 $/usuario/mes (Starter)",
    features: [
      { feature: "Cumplimiento nativo del RDL 8/2019 español", fichados: true, competidor: false },
      { feature: "Informes adaptados a Inspección de Trabajo", fichados: true, competidor: false },
      { feature: "Diseñado para pymes españolas", fichados: true, competidor: false },
      { feature: "Fichaje sencillo de entrada y salida", fichados: true, competidor: "Requiere configuración" },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: "Limitado" },
      { feature: "Tracking de tiempo por proyecto avanzado", fichados: false, competidor: true },
      { feature: "Soporte en español nativo", fichados: true, competidor: false },
      { feature: "Integraciones con 100+ herramientas", fichados: false, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: true },
      { feature: "Registros inalterables con validez legal", fichados: true, competidor: false },
    ],
  },
];

export function getCompetidorBySlug(slug: string): Competidor | undefined {
  return competidores.find((c) => c.slug === slug);
}
