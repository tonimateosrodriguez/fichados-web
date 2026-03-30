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
  ventajas: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  ctaFinal: { title: string; subtitle: string };
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
      { feature: "Precio desde 9 €/mes", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Informes para Inspección de Trabajo", fichados: true, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Soporte en español", fichados: true, competidor: true },
      { feature: "Enfocado 100% en fichaje", fichados: true, competidor: false },
      { feature: "Registros inalterables (+4 años)", fichados: true, competidor: true },
      { feature: "Panel de administración en tiempo real", fichados: true, competidor: true },
      { feature: "Gestión de RRHH completa (nóminas, vacaciones, etc.)", fichados: false, competidor: true },
    ],
    ventajas: [
      { title: "Más económico", description: "Fichados desde 9 €/mes. Factorial desde 5,25 €/empleado/mes — con 10 empleados ya pagas 52,50 €/mes frente a los 30 €/mes de Fichados." },
      { title: "Setup inmediato", description: "Crea tu cuenta y empieza a fichar en menos de 5 minutos. Sin proceso de ventas ni demos obligatorias." },
      { title: "Sin permanencia", description: "Cancela cuando quieras. Sin contratos anuales obligatorios." },
      { title: "Enfocado en fichaje", description: "Fichados hace una cosa y la hace bien. Sin módulos de RRHH que no necesitas ni pagas. Factorial es una suite completa de RRHH, lo que implica más coste y más complejidad." },
    ],
    faq: [
      { question: "¿Puedo migrar de Factorial a Fichados?", answer: "Sí. El cambio es inmediato. Crea tu cuenta en Fichados, invita a tus empleados y empiezan a fichar al instante. No necesitas exportar datos de Factorial." },
      { question: "¿Cuánto ahorro con Fichados frente a Factorial?", answer: "Con 10 empleados, Factorial cuesta 52,50 €/mes. Con Fichados pagas 30 €/mes. Eso es un ahorro de 22,50 €/mes (270 €/año)." },
      { question: "¿Qué tiene Fichados que Factorial no?", answer: "Precio transparente y predecible, setup en 5 minutos sin hablar con nadie, sin permanencia y una interfaz sencilla enfocada solo en fichaje. Si solo necesitas cumplir la ley del registro de jornada, Fichados es la opción más directa y económica." },
    ],
    ctaFinal: {
      title: "Cambia de Factorial a Fichados hoy",
      subtitle: "Setup en 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
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
      { feature: "Precio desde 9 €/mes", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Informes para Inspección de Trabajo", fichados: true, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Soporte en español", fichados: true, competidor: true },
      { feature: "Enfocado 100% en fichaje", fichados: true, competidor: false },
      { feature: "Registros inalterables (+4 años)", fichados: true, competidor: true },
      { feature: "Panel de administración en tiempo real", fichados: true, competidor: true },
      { feature: "Gestión de vacaciones y ausencias", fichados: false, competidor: true },
    ],
    ventajas: [
      { title: "Más económico", description: "Fichados desde 9 €/mes. Sesame HR desde 4,50 €/empleado/mes — con 10 empleados ya pagas 45 €/mes frente a los 30 €/mes de Fichados." },
      { title: "Setup inmediato", description: "Crea tu cuenta y empieza a fichar en menos de 5 minutos. Sin proceso de ventas ni demos obligatorias." },
      { title: "Sin permanencia", description: "Cancela cuando quieras. Sin contratos anuales obligatorios." },
      { title: "Interfaz más sencilla", description: "Fichados está diseñado solo para fichaje, sin curva de aprendizaje. Sesame HR incluye módulos de RRHH adicionales que añaden complejidad si solo necesitas control horario." },
    ],
    faq: [
      { question: "¿Puedo migrar de Sesame HR a Fichados?", answer: "Sí. El cambio es inmediato. Crea tu cuenta en Fichados, invita a tus empleados y empiezan a fichar al instante. No necesitas exportar datos de Sesame HR." },
      { question: "¿Cuánto ahorro con Fichados frente a Sesame HR?", answer: "Con 10 empleados, Sesame HR cuesta 45 €/mes. Con Fichados pagas 30 €/mes. Eso es un ahorro de 15 €/mes (180 €/año)." },
      { question: "¿Qué tiene Fichados que Sesame HR no?", answer: "Precio más bajo y predecible, setup en 5 minutos sin hablar con nadie y sin permanencia. Si lo que necesitas es cumplir la ley del registro de jornada sin complicaciones, Fichados es más directo y económico." },
    ],
    ctaFinal: {
      title: "Cambia de Sesame HR a Fichados hoy",
      subtitle: "Setup en 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
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
      { feature: "Precio desde 9 €/mes", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Informes para Inspección de Trabajo", fichados: true, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: "Consultar" },
      { feature: "Soporte en español", fichados: true, competidor: true },
      { feature: "Enfocado 100% en fichaje", fichados: true, competidor: false },
      { feature: "Registros inalterables (+4 años)", fichados: true, competidor: true },
      { feature: "Panel de administración en tiempo real", fichados: true, competidor: true },
      { feature: "Sin necesidad de contactar con ventas para empezar", fichados: true, competidor: false },
      { feature: "Suite completa de RRHH (reclutamiento, evaluación, etc.)", fichados: false, competidor: true },
    ],
    ventajas: [
      { title: "Precio transparente", description: "Fichados desde 9 €/mes con precio público. Bizneo HR no publica precios — necesitas hablar con ventas para saber cuánto pagarás." },
      { title: "Setup inmediato", description: "Crea tu cuenta y empieza a fichar en menos de 5 minutos. Sin proceso de ventas, sin demos obligatorias, sin esperas." },
      { title: "Sin permanencia", description: "Cancela cuando quieras. Sin contratos anuales obligatorios." },
      { title: "Autoservicio total", description: "Con Fichados empiezas sin hablar con nadie. Bizneo HR requiere contactar con su equipo comercial para obtener acceso y precio." },
    ],
    faq: [
      { question: "¿Puedo migrar de Bizneo HR a Fichados?", answer: "Sí. El cambio es inmediato. Crea tu cuenta en Fichados, invita a tus empleados y empiezan a fichar al instante. No necesitas exportar datos de Bizneo HR." },
      { question: "¿Cuánto ahorro con Fichados frente a Bizneo HR?", answer: "Bizneo HR no publica precios, pero al ser una suite modular de RRHH su coste suele ser significativamente mayor. Fichados cuesta 30 €/mes para 10 empleados con un precio totalmente transparente." },
      { question: "¿Qué tiene Fichados que Bizneo HR no?", answer: "Precio público y transparente, setup en 5 minutos sin hablar con ventas, sin permanencia y una interfaz simple enfocada solo en fichaje. Bizneo HR es una suite completa de RRHH, ideal si necesitas reclutamiento o evaluación de desempeño, pero excesiva si solo necesitas control horario." },
    ],
    ctaFinal: {
      title: "Cambia de Bizneo HR a Fichados hoy",
      subtitle: "Setup en 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
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
      { feature: "Precio desde 9 €/mes", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Informes para Inspección de Trabajo", fichados: true, competidor: "Genérico" },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Soporte en español", fichados: true, competidor: "Limitado" },
      { feature: "Enfocado 100% en fichaje", fichados: true, competidor: false },
      { feature: "Registros inalterables (+4 años)", fichados: true, competidor: true },
      { feature: "Panel de administración en tiempo real", fichados: true, competidor: true },
      { feature: "Diseñado para el mercado español", fichados: true, competidor: false },
      { feature: "Gestión de RRHH internacional", fichados: false, competidor: true },
    ],
    ventajas: [
      { title: "Más económico", description: "Fichados desde 9 €/mes. Personio desde ~3,50 €/empleado/mes — con 10 empleados ya pagas 35 €/mes frente a los 30 €/mes de Fichados." },
      { title: "Hecho para España", description: "Fichados está diseñado para el mercado español: soporte nativo en español e informes adaptados a la Inspección de Trabajo. Personio es una plataforma alemana con soporte en español limitado." },
      { title: "Setup inmediato", description: "Crea tu cuenta y empieza a fichar en menos de 5 minutos. Sin proceso de ventas ni demos obligatorias." },
      { title: "Sin permanencia", description: "Cancela cuando quieras. Sin contratos anuales obligatorios." },
    ],
    faq: [
      { question: "¿Puedo migrar de Personio a Fichados?", answer: "Sí. El cambio es inmediato. Crea tu cuenta en Fichados, invita a tus empleados y empiezan a fichar al instante. No necesitas exportar datos de Personio." },
      { question: "¿Cuánto ahorro con Fichados frente a Personio?", answer: "Con 10 empleados, Personio cuesta unos 35 €/mes. Con Fichados pagas 30 €/mes. Eso es un ahorro de 5 €/mes (60 €/año). Además, Fichados no requiere hablar con ventas para empezar." },
      { question: "¿Qué tiene Fichados que Personio no?", answer: "Soporte nativo en español, informes específicos para la Inspección de Trabajo española, setup en 5 minutos sin proceso comercial y sin permanencia. Personio es ideal si tienes equipos internacionales, pero si operas solo en España, Fichados es más directo y adaptado." },
    ],
    ctaFinal: {
      title: "Cambia de Personio a Fichados hoy",
      subtitle: "Setup en 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
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
      { feature: "Precio desde 9 €/mes", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Informes para Inspección de Trabajo", fichados: true, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Soporte en español", fichados: true, competidor: true },
      { feature: "Enfocado 100% en fichaje", fichados: true, competidor: false },
      { feature: "Registros inalterables (+4 años)", fichados: true, competidor: true },
      { feature: "Panel de administración en tiempo real", fichados: true, competidor: true },
      { feature: "Control de ausencias y vacaciones", fichados: false, competidor: true },
    ],
    ventajas: [
      { title: "Más económico", description: "Fichados desde 9 €/mes. TramitApp desde 4,50 €/empleado/mes — con 10 empleados ya pagas 45 €/mes frente a los 30 €/mes de Fichados." },
      { title: "Setup inmediato", description: "Crea tu cuenta y empieza a fichar en menos de 5 minutos. Sin proceso de ventas ni demos obligatorias." },
      { title: "Sin permanencia", description: "Cancela cuando quieras. Sin contratos anuales obligatorios." },
      { title: "Enfocado en fichaje", description: "Fichados hace una cosa y la hace bien. TramitApp incluye módulos de ausencias y vacaciones que añaden coste y complejidad si solo necesitas control horario." },
    ],
    faq: [
      { question: "¿Puedo migrar de TramitApp a Fichados?", answer: "Sí. El cambio es inmediato. Crea tu cuenta en Fichados, invita a tus empleados y empiezan a fichar al instante. No necesitas exportar datos de TramitApp." },
      { question: "¿Cuánto ahorro con Fichados frente a TramitApp?", answer: "Con 10 empleados, TramitApp cuesta 45 €/mes. Con Fichados pagas 30 €/mes. Eso es un ahorro de 15 €/mes (180 €/año)." },
      { question: "¿Qué tiene Fichados que TramitApp no?", answer: "Precio más bajo y transparente, setup en 5 minutos sin proceso comercial y sin permanencia. Si solo necesitas cumplir la ley del registro de jornada, Fichados es más directo y económico." },
    ],
    ctaFinal: {
      title: "Cambia de TramitApp a Fichados hoy",
      subtitle: "Setup en 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
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
      { feature: "Precio desde 9 €/mes", fichados: true, competidor: false },
      { feature: "Setup en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: "Limitado" },
      { feature: "Informes para Inspección de Trabajo", fichados: true, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Soporte en español", fichados: true, competidor: true },
      { feature: "Enfocado 100% en fichaje", fichados: true, competidor: false },
      { feature: "Registros inalterables (+4 años)", fichados: true, competidor: true },
      { feature: "Panel de administración en tiempo real", fichados: true, competidor: true },
      { feature: "Gestión de RRHH completa (nóminas, vacaciones, etc.)", fichados: false, competidor: true },
    ],
    ventajas: [
      { title: "Más económico", description: "Fichados desde 9 €/mes. Kenjo desde 4,50 €/empleado/mes — con 10 empleados ya pagas 45 €/mes frente a los 30 €/mes de Fichados." },
      { title: "Setup inmediato", description: "Crea tu cuenta y empieza a fichar en menos de 5 minutos. Sin proceso de ventas ni demos obligatorias." },
      { title: "Sin permanencia", description: "Cancela cuando quieras. Sin contratos anuales obligatorios." },
      { title: "Enfocado en fichaje", description: "Fichados hace una cosa y la hace bien. Kenjo es una suite de RRHH con nóminas, vacaciones y más — útil si lo necesitas, pero excesiva si solo quieres control horario." },
    ],
    faq: [
      { question: "¿Puedo migrar de Kenjo a Fichados?", answer: "Sí. El cambio es inmediato. Crea tu cuenta en Fichados, invita a tus empleados y empiezan a fichar al instante. No necesitas exportar datos de Kenjo." },
      { question: "¿Cuánto ahorro con Fichados frente a Kenjo?", answer: "Con 10 empleados, Kenjo cuesta 45 €/mes. Con Fichados pagas 30 €/mes. Eso es un ahorro de 15 €/mes (180 €/año)." },
      { question: "¿Qué tiene Fichados que Kenjo no?", answer: "Precio más bajo y predecible, setup en 5 minutos sin proceso comercial, sin permanencia y geolocalización completa en fichaje móvil. Si solo necesitas cumplir la ley del registro de jornada, Fichados es la opción más directa." },
    ],
    ctaFinal: {
      title: "Cambia de Kenjo a Fichados hoy",
      subtitle: "Setup en 5 minutos. Sin permanencia. Desde solo 9 €/mes.",
    },
  },
];

export function getCompetidorBySlug(slug: string): Competidor | undefined {
  return competidores.find((c) => c.slug === slug);
}
