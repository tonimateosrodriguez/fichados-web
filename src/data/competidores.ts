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
  // ─── 1. FACTORIAL ───────────────────────────────────────────────
  {
    slug: "fichados-vs-factorial",
    nombre: "Factorial",
    h1: "Fichados vs Factorial: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Factorial para el registro de jornada. Precio, funciones y facilidad de uso. Descubre cuál se adapta mejor a tu pyme.",
    precioCompetidor: "Desde 5,50 €/empleado/mes. Módulos adicionales à la carte. 10% dto anual.",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio transparente en la web", fichados: true, competidor: true },
      { feature: "Coste para 10 empleados", fichados: "30 €/mes", competidor: "55 €/mes" },
      { feature: "Alta y fichaje en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Informes específicos para Inspección de Trabajo (PDF/Excel)", fichados: true, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Soporte en español", fichados: true, competidor: true },
      { feature: "Registros inalterables conservados +4 años", fichados: true, competidor: true },
      { feature: "Panel de administración en tiempo real", fichados: true, competidor: true },
      { feature: "Sin proceso de ventas ni onboarding obligatorio", fichados: true, competidor: false },
      { feature: "Gestión de nóminas integrada", fichados: false, competidor: true },
      { feature: "Reclutamiento y ATS", fichados: false, competidor: true },
      { feature: "Evaluación de desempeño", fichados: false, competidor: true },
      { feature: "Onboarding de empleados", fichados: false, competidor: true },
    ],
    ventajas: [
      {
        title: "Ahorra un 43 % frente a Factorial",
        description:
          "Para 10 empleados, Factorial cuesta 55 €/mes (plan Business anual). Fichados cuesta 30 €/mes. Son 25 €/mes menos, es decir, 270 € de ahorro al año. Si eliges el plan Enterprise de Factorial (8 €/empleado), la diferencia sube a 50 €/mes (600 €/año).",
      },
      {
        title: "Empieza a fichar en 5 minutos, sin hablar con nadie",
        description:
          "Factorial requiere un proceso de ventas con demo comercial y un onboarding asistido antes de poder usar la plataforma. Con Fichados te registras, invitas a tu equipo y empiezas a fichar en minutos. Sin llamadas, sin esperas.",
      },
      {
        title: "Sin permanencia ni contratos anuales",
        description:
          "Factorial incentiva fuertemente el contrato anual con sus precios. Fichados funciona mes a mes: cancelas cuando quieras sin penalizaciones ni compromisos a largo plazo. Solo pagas mientras lo usas.",
      },
      {
        title: "Solo fichaje, sin complejidad innecesaria",
        description:
          "Factorial es una suite completa de RRHH con nóminas, ATS, evaluaciones y onboarding. Si solo necesitas cumplir con el RDL 8/2019, estás pagando por módulos que no vas a usar. Fichados hace una cosa y la hace bien: registro de jornada legal y sencillo.",
      },
      {
        title: "Interfaz simple, sin curva de aprendizaje",
        description:
          "Al ser una herramienta enfocada exclusivamente en fichaje, Fichados no requiere formación ni configuración compleja. Tus empleados fichan desde el primer día sin tutoriales ni manuales.",
      },
    ],
    faq: [
      {
        question: "¿Puedo migrar de Factorial a Fichados fácilmente?",
        answer:
          "Sí. El cambio es inmediato. Crea tu cuenta en Fichados, invita a tus empleados por email y empiezan a fichar al instante. No necesitas exportar datos de Factorial ni hacer ningún trámite previo. En menos de 5 minutos estarás operativo.",
      },
      {
        question: "¿Cuánto ahorro con Fichados frente a Factorial?",
        answer:
          "Con 10 empleados en el plan Business anual, Factorial cuesta 55 €/mes. Fichados cuesta 30 €/mes. Eso supone un ahorro de 25 €/mes, o 270 € al año. Con el plan Enterprise de Factorial (80 €/mes), el ahorro sube a 600 €/año.",
      },
      {
        question: "¿Qué tiene Factorial que Fichados no ofrece?",
        answer:
          "Factorial es una suite completa de RRHH: incluye nóminas, reclutamiento (ATS), evaluación de desempeño, onboarding y gestión de gastos. Si necesitas todo eso, Factorial puede ser una buena opción. Si solo necesitas control horario legal, Fichados te da exactamente eso a un precio mucho menor.",
      },
      {
        question: "¿Fichados cumple con la ley igual que Factorial?",
        answer:
          "Sí. Fichados cumple al 100 % con el RDL 8/2019: registro de entrada, salida y pausas, registros inalterables conservados durante más de 4 años, informes en PDF y Excel preparados para la Inspección de Trabajo, y geolocalización opcional.",
      },
      {
        question: "¿Necesito contratar un plan anual en Fichados?",
        answer:
          "No. Fichados funciona mes a mes sin permanencia. Si prefieres el plan anual, obtienes un 20 % de descuento, pero no es obligatorio. Cancelas cuando quieras sin penalización.",
      },
    ],
    ctaFinal: {
      title: "Cambia de Factorial a Fichados hoy",
      subtitle:
        "Ahorra hasta 300 €/año con 10 empleados. Alta en 5 minutos, sin permanencia. Desde 9 €/mes.",
    },
  },

  // ─── 2. SESAME HR ──────────────────────────────────────────────
  {
    slug: "fichados-vs-sesame",
    nombre: "Sesame HR",
    h1: "Fichados vs Sesame HR: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Sesame HR para el control horario. Precios, funciones y diferencias clave. Encuentra la mejor opcion para tu empresa.",
    precioCompetidor: "HR Time 5,25 €/empleado/mes (4,75 € anual). HR Starter 6 €. HR Professional 6,75 €. Mínimo 15 empleados (78,75 €/mes).",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio público y transparente", fichados: true, competidor: true },
      { feature: "Coste para 10 empleados", fichados: "30 €/mes", competidor: "Mínimo 78,75 €/mes (pago mínimo obligatorio para 15 empleados)" },
      { feature: "Alta y fichaje en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Informes específicos para Inspección de Trabajo (PDF/Excel)", fichados: true, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Soporte en español", fichados: true, competidor: true },
      { feature: "Registros inalterables conservados +4 años", fichados: true, competidor: true },
      { feature: "Panel de administración en tiempo real", fichados: true, competidor: true },
      { feature: "Sin proceso comercial ni demo obligatoria", fichados: true, competidor: false },
      { feature: "Gestión de vacaciones y ausencias", fichados: "Básica", competidor: true },
      { feature: "Evaluación de desempeño", fichados: false, competidor: true },
      { feature: "Gestión documental y firma electrónica", fichados: false, competidor: true },
      { feature: "Onboarding de empleados", fichados: false, competidor: true },
    ],
    ventajas: [
      {
        title: "Ahorra un 33 % frente a Sesame HR",
        description:
          "Sesame HR tiene un pago mínimo de 78,75 €/mes (equivalente a 15 empleados), incluso si solo tienes 10. Fichados cuesta 30 €/mes para 10 empleados. Eso es un ahorro de 48,75 €/mes (585 €/año). Para 20 empleados: Sesame 105 €/mes vs Fichados 60 €/mes.",
      },
      {
        title: "Alta inmediata sin proceso comercial",
        description:
          "Sesame HR requiere una demo comercial para darte acceso a la plataforma, con tiempos de espera variables. Fichados es autoservicio: te registras, configuras tu empresa e invitas a tus empleados en minutos. Sin intermediarios.",
      },
      {
        title: "Sin permanencia ni compromisos anuales",
        description:
          "Los precios de Sesame HR están asociados a planes anuales. Fichados funciona mes a mes sin permanencia. Si quieres plan anual, tienes un 20 % de descuento, pero nunca es obligatorio.",
      },
      {
        title: "Fichaje puro, sin funciones que no usas",
        description:
          "Sesame HR incluye evaluación de desempeño, firma electrónica, gestión documental y onboarding. Si tu necesidad es solo cumplir con el registro horario obligatorio, Fichados te ofrece exactamente eso sin coste ni complejidad adicional.",
      },
      {
        title: "Curva de aprendizaje cero",
        description:
          "Al centrarse solo en fichaje, Fichados tiene una interfaz minimalista que cualquier empleado entiende a la primera. No hay menús escondidos, configuraciones avanzadas ni módulos que confundan. Fichaje y punto.",
      },
    ],
    faq: [
      {
        question: "¿Puedo migrar de Sesame HR a Fichados fácilmente?",
        answer:
          "Sí. Crea tu cuenta en Fichados, invita a tus empleados por email y empiezan a fichar al instante. No necesitas exportar datos de Sesame HR. En menos de 5 minutos tu equipo está fichando.",
      },
      {
        question: "¿Cuánto ahorro con Fichados frente a Sesame HR?",
        answer:
          "Sesame HR tiene un mínimo de facturación de 78,75 €/mes (15 empleados), incluso si tienes menos. Fichados para 10 empleados cuesta 30 €/mes. Ahorro: 48,75 €/mes (585 €/año). Para 20 empleados: Sesame 105 €/mes vs Fichados 60 €/mes, un ahorro de 540 €/año.",
      },
      {
        question: "¿Qué tiene Sesame HR que Fichados no ofrece?",
        answer:
          "Sesame HR es una suite de RRHH con evaluación de desempeño, onboarding, gestión documental y firma electrónica. Son funciones valiosas si las necesitas. Si tu prioridad es solo el control horario legal, Fichados cubre esa necesidad a menor coste y con menos complejidad.",
      },
      {
        question: "¿Sesame HR es de España?",
        answer:
          "Sí, Sesame HR tiene sede en Valencia y más de 10.000 empresas cliente. Fichados también es 100 % español y está igualmente adaptado a la normativa española. La diferencia principal es que Fichados se centra exclusivamente en fichaje, mientras que Sesame HR abarca más funciones de RRHH.",
      },
      {
        question: "¿Fichados incluye gestión de vacaciones?",
        answer:
          "Fichados incluye gestión básica de ausencias. Si necesitas un sistema avanzado de vacaciones con flujos de aprobación complejos, Sesame HR es más completo en esa área. Pero si lo que necesitas es el registro horario obligatorio con un control simple de ausencias, Fichados es suficiente y más económico.",
      },
    ],
    ctaFinal: {
      title: "Cambia de Sesame HR a Fichados hoy",
      subtitle:
        "Ahorra hasta 180 €/año con 10 empleados. Alta en 5 minutos, sin permanencia. Desde 9 €/mes.",
    },
  },

  // ─── 3. BIZNEO HR ──────────────────────────────────────────────
  {
    slug: "fichados-vs-bizneo",
    nombre: "Bizneo HR",
    h1: "Fichados vs Bizneo HR: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Bizneo HR para el registro de jornada. Precio transparente vs presupuesto a medida. Descubre la mejor opcion para ti.",
    precioCompetidor: "Desde 6 €/empleado/mes (Essential, mínimo 55 €/mes). Professional desde 9 €/empleado/mes. Control horario es módulo adicional.",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio público y transparente", fichados: true, competidor: true },
      { feature: "Coste para 10 empleados", fichados: "30 €/mes", competidor: "Mínimo 60 €/mes (Essential) o 90 €/mes (Professional)" },
      { feature: "Alta y fichaje en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Geofencing avanzado y terminales biométricos", fichados: false, competidor: true },
      { feature: "Informes específicos para Inspección de Trabajo (PDF/Excel)", fichados: true, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Pago mínimo mensual", fichados: "9 €/mes", competidor: "55 €/mes mínimo" },
      { feature: "Soporte en español", fichados: true, competidor: true },
      { feature: "Registros inalterables conservados +4 años", fichados: true, competidor: true },
      { feature: "Panel de administración en tiempo real", fichados: true, competidor: true },
      { feature: "Sin proceso de ventas para empezar", fichados: true, competidor: false },
      { feature: "Suite modular de RRHH (+10 módulos)", fichados: false, competidor: true },
      { feature: "Reclutamiento y ATS", fichados: false, competidor: true },
      { feature: "Evaluación de desempeño y formación", fichados: false, competidor: true },
    ],
    ventajas: [
      {
        title: "Precio transparente desde el minuto uno",
        description:
          "Fichados cuesta 9 €/mes hasta 3 empleados + 3 €/empleado extra. Bizneo HR parte de 6 €/empleado/mes (Essential) con un mínimo de 55 €/mes, y el control horario es un módulo adicional. Para 10 empleados: Fichados 30 €/mes vs Bizneo mínimo 60 €/mes. El doble.",
      },
      {
        title: "Empieza en 5 minutos, sin demo ni esperas",
        description:
          "Bizneo HR requiere solicitar una demo, hablar con un comercial y pasar por un proceso de onboarding. Con Fichados te registras online, invitas a tu equipo y empiezas a fichar en minutos. Cero fricción.",
      },
      {
        title: "Sin permanencia ni compromisos ocultos",
        description:
          "Bizneo HR trabaja con suscripciones y un pago mínimo mensual de 55 €. Fichados funciona mes a mes desde 9 €/mes: cancelas cuando quieras. Si prefieres plan anual, obtienes un 20% de descuento, pero siempre es tu elección.",
      },
      {
        title: "Sin complejidad modular innecesaria",
        description:
          "Bizneo HR ofrece más de 10 módulos de RRHH (reclutamiento, evaluación, formación, nómina, portal del empleado...). Si solo necesitas cumplir con el registro horario, toda esa funcionalidad suma coste y complejidad. Fichados es directo: fichaje legal y nada más.",
      },
      {
        title: "Ideal para pymes que quieren simplicidad",
        description:
          "Bizneo HR cuenta con clientes como Adecco, Burger King o AirEuropa. Su plataforma está diseñada para grandes organizaciones con procesos complejos. Fichados está pensado para pymes que quieren cumplir la ley de forma rápida y económica, sin necesitar un departamento de RRHH dedicado.",
      },
    ],
    faq: [
      {
        question: "¿Puedo migrar de Bizneo HR a Fichados fácilmente?",
        answer:
          "Sí. Crea tu cuenta en Fichados, invita a tus empleados y empiezan a fichar al instante. No necesitas exportar datos de Bizneo HR ni gestionar ninguna migración técnica.",
      },
      {
        question: "¿Cuánto ahorro con Fichados frente a Bizneo HR?",
        answer:
          "Bizneo HR parte de 6 €/empleado/mes (Essential, mínimo 55 €/mes) y 9 €/empleado/mes (Professional). El control horario es un módulo adicional. Para 10 empleados: Bizneo mínimo 60 €/mes vs Fichados 30 €/mes. Un ahorro de 30 €/mes (360 €/año). Para 25 empleados: Bizneo mínimo 150 €/mes vs Fichados 75 €/mes.",
      },
      {
        question: "¿Qué tiene Bizneo HR que Fichados no ofrece?",
        answer:
          "Bizneo HR es una suite modular con más de 10 módulos: reclutamiento, evaluación de desempeño, formación, nómina, portal del empleado y más. También soporta terminales biométricos y geofencing avanzado. Si necesitas una solución integral de RRHH, Bizneo es potente. Si solo necesitas fichaje, Fichados lo cubre a menor coste.",
      },
      {
        question: "¿Bizneo HR tiene terminales biométricos y Fichados no?",
        answer:
          "Correcto. Bizneo HR soporta terminales biométricos (huella, reconocimiento facial) y geofencing avanzado. Fichados funciona sin hardware: fichaje desde móvil o navegador con geolocalización opcional. Para la mayoría de pymes, el fichaje digital sin hardware es suficiente y más económico.",
      },
      {
        question: "¿Fichados cumple la normativa igual que Bizneo HR?",
        answer:
          "Sí. Ambos cumplen con el RDL 8/2019. Fichados ofrece registro de entrada, salida y pausas, registros inalterables conservados +4 años, informes en PDF y Excel para la Inspección de Trabajo, y geolocalización opcional. Todo lo que la ley exige.",
      },
    ],
    ctaFinal: {
      title: "Cambia de Bizneo HR a Fichados hoy",
      subtitle:
        "Precio claro: 30 €/mes para 10 empleados vs un presupuesto a medida. Alta en 5 minutos, sin permanencia.",
    },
  },

  // ─── 4. PERSONIO ───────────────────────────────────────────────
  {
    slug: "fichados-vs-personio",
    nombre: "Personio",
    h1: "Fichados vs Personio: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Personio para el control horario en Espana. Precio, adaptacion local y funciones. Encuentra la mejor opcion para tu pyme.",
    precioCompetidor: "No público. Estimado ~3,50 €/empleado/mes (Core). Control horario es módulo extra de pago",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio público y transparente", fichados: true, competidor: false },
      { feature: "Coste para 10 empleados (solo control horario)", fichados: "30 €/mes", competidor: "~35 €/mes + módulo extra" },
      { feature: "Alta y fichaje en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: false },
      { feature: "Informes específicos para Inspección de Trabajo española", fichados: true, competidor: "Genéricos europeos" },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: false },
      { feature: "Soporte nativo en español", fichados: true, competidor: "Disponible, no nativo" },
      { feature: "Registros inalterables conservados +4 años", fichados: true, competidor: true },
      { feature: "Panel de administración en tiempo real", fichados: true, competidor: true },
      { feature: "Diseñado para el mercado y la normativa española", fichados: true, competidor: false },
      { feature: "Sin proceso de ventas para empezar", fichados: true, competidor: false },
      { feature: "Gestión de nóminas integrada", fichados: false, competidor: true },
      { feature: "Reclutamiento y ATS", fichados: false, competidor: true },
      { feature: "Gestión de RRHH internacional (multi-país)", fichados: false, competidor: true },
    ],
    ventajas: [
      {
        title: "Hecho para el mercado español",
        description:
          "Personio es una plataforma alemana diseñada para el mercado europeo en general. Sus informes de control horario son genéricos y no están optimizados para la Inspección de Trabajo española. Fichados genera informes en PDF y Excel 100 % adaptados a los requisitos del RDL 8/2019.",
      },
      {
        title: "Geolocalización incluida, sin módulos extra",
        description:
          "Personio no ofrece geolocalización nativa en su módulo de fichaje. Si necesitas verificar desde dónde fichan tus empleados, necesitarás integraciones adicionales. Fichados incluye geolocalización opcional de serie, sin coste extra.",
      },
      {
        title: "Precio claro y sin módulos de pago adicionales",
        description:
          "Personio no publica precios y el control horario es un módulo extra sobre el precio base (~3,50 €/empleado/mes Core). Con Fichados, 10 empleados cuestan 30 €/mes con todo incluido. Sin sorpresas, sin módulos adicionales.",
      },
      {
        title: "Sin contrato anual obligatorio",
        description:
          "Personio requiere contrato anual obligatorio. Fichados funciona mes a mes: cancelas cuando quieras. Plan anual disponible con 20 % de descuento, pero siempre es opcional.",
      },
      {
        title: "Setup inmediato vs proceso de ventas",
        description:
          "Personio requiere contactar con su equipo comercial, recibir una propuesta personalizada y pasar por un onboarding. Fichados es autoservicio: registro, configuración e invitación a empleados en menos de 5 minutos.",
      },
    ],
    faq: [
      {
        question: "¿Puedo migrar de Personio a Fichados fácilmente?",
        answer:
          "Sí. Crea tu cuenta en Fichados, invita a tus empleados y empiezan a fichar al instante. No necesitas exportar datos de Personio ni coordinarte con su soporte para la migración.",
      },
      {
        question: "¿Cuánto ahorro con Fichados frente a Personio?",
        answer:
          "Personio no publica precios, pero se estima ~3,50 €/empleado/mes para el Core más un módulo extra para control horario. Para 10 empleados, el coste total de Personio supera fácilmente los 35-50 €/mes. Fichados cuesta 30 €/mes con fichaje completo incluido.",
      },
      {
        question: "¿Qué tiene Personio que Fichados no ofrece?",
        answer:
          "Personio es una suite completa de RRHH con nóminas, reclutamiento (ATS), evaluaciones de desempeño y onboarding. También soporta gestión multi-país para empresas con equipos internacionales. Si operas solo en España y necesitas fichaje, Fichados es más directo, más barato y mejor adaptado.",
      },
      {
        question: "¿Personio cumple con la normativa española de fichaje?",
        answer:
          "Personio permite registrar jornada, pero sus informes son genéricos para el mercado europeo, no están específicamente diseñados para la Inspección de Trabajo española. Fichados genera informes en PDF y Excel adaptados al formato que exige la normativa española (RDL 8/2019).",
      },
      {
        question: "¿Personio tiene soporte en español?",
        answer:
          "Personio ofrece soporte en varios idiomas, incluido español, pero su equipo principal está en Alemania. Fichados es 100 % español con soporte nativo, lo que se nota en la velocidad de respuesta y el conocimiento de la normativa local.",
      },
    ],
    ctaFinal: {
      title: "Cambia de Personio a Fichados hoy",
      subtitle:
        "Fichaje adaptado a la normativa española, desde 30 €/mes para 10 empleados. Sin contrato anual obligatorio.",
    },
  },

  // ─── 5. TRAMITAPP ──────────────────────────────────────────────
  {
    slug: "fichados-vs-tramitapp",
    nombre: "TramitApp",
    h1: "Fichados vs TramitApp: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs TramitApp para el registro horario. Precios, funciones y facilidad de uso. Descubre cual es mejor para tu empresa.",
    precioCompetidor: "No público. Modelo por empleado/mes. Estimado ~4-6 €/empleado/mes",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio público y transparente", fichados: true, competidor: false },
      { feature: "Coste para 10 empleados", fichados: "30 €/mes", competidor: "~40-60 €/mes" },
      { feature: "Alta y fichaje en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Informes específicos para Inspección de Trabajo (PDF/Excel)", fichados: true, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: "No público" },
      { feature: "Soporte en español", fichados: true, competidor: true },
      { feature: "Registros inalterables conservados +4 años", fichados: true, competidor: true },
      { feature: "Panel de administración en tiempo real", fichados: true, competidor: true },
      { feature: "Sin proceso comercial para empezar", fichados: true, competidor: false },
      { feature: "Planificación avanzada de turnos", fichados: false, competidor: true },
    ],
    ventajas: [
      {
        title: "Precio transparente y más económico",
        description:
          "TramitApp no publica precios en su web. Fuentes del sector estiman entre 4 y 6 €/empleado/mes. Para 10 empleados, eso supone 40-60 €/mes. Fichados cuesta 30 €/mes para 10 empleados con precio público y sin sorpresas: un ahorro de al menos 10 €/mes (120 €/año).",
      },
      {
        title: "Alta inmediata sin contactar con ventas",
        description:
          "TramitApp requiere solicitar acceso a través de su equipo comercial. Con Fichados te registras en la web, configuras tu empresa e invitas a tus empleados en menos de 5 minutos. Sin llamadas, sin esperas, sin demos obligatorias.",
      },
      {
        title: "Simplicidad frente a funcionalidad innecesaria",
        description:
          "TramitApp incluye planificación de turnos y automatización de procesos de RRHH. Si tu empresa no necesita gestión de turnos complejos, esas funciones solo añaden complejidad a la interfaz. Fichados se centra en lo esencial: fichaje legal, limpio y rápido.",
      },
      {
        title: "Sin permanencia ni ataduras",
        description:
          "TramitApp no publica sus condiciones de permanencia. Fichados funciona mes a mes: cancelas cuando quieras sin penalizaciones. Plan anual disponible con 20 % de descuento, pero siempre opcional.",
      },
    ],
    faq: [
      {
        question: "¿Puedo migrar de TramitApp a Fichados fácilmente?",
        answer:
          "Sí. Crea tu cuenta en Fichados, invita a tus empleados por email y empiezan a fichar al instante. No necesitas exportar datos de TramitApp ni coordinar ninguna migración técnica.",
      },
      {
        question: "¿Cuánto ahorro con Fichados frente a TramitApp?",
        answer:
          "TramitApp no publica precios, pero se estima entre 4 y 6 €/empleado/mes. Para 10 empleados, eso supone 40-60 €/mes. Fichados cuesta 30 €/mes: un ahorro mínimo de 120 €/año y potencialmente hasta 360 €/año.",
      },
      {
        question: "¿Qué tiene TramitApp que Fichados no ofrece?",
        answer:
          "TramitApp destaca en planificación de turnos y automatización de procesos de RRHH. También soporta varios idiomas (español, inglés, francés). Si gestionas turnos complejos, TramitApp tiene ventaja ahí. Si solo necesitas control horario, Fichados lo cubre a menor precio.",
      },
      {
        question: "¿TramitApp es de España?",
        answer:
          "Sí, TramitApp es un software español fundado en Madrid en 2016 con más de 3.000 empresas cliente y 150.000 empleados registrados. Fichados también es 100 % español. La diferencia es el enfoque: TramitApp abarca más funciones de RRHH, Fichados se centra exclusivamente en fichaje.",
      },
      {
        question: "¿Fichados sirve para empresas con turnos?",
        answer:
          "Fichados registra entrada, salida y pausas independientemente del turno. Si necesitas planificación avanzada de turnos con rotaciones y asignación automática, TramitApp ofrece esa funcionalidad. Pero si tus turnos son simples y solo necesitas el registro horario obligatorio, Fichados es suficiente y más asequible.",
      },
    ],
    ctaFinal: {
      title: "Cambia de TramitApp a Fichados hoy",
      subtitle:
        "Ahorra al menos 120 €/año con 10 empleados. Precio público, alta en 5 minutos, sin permanencia.",
    },
  },

  // ─── 6. KENJO ──────────────────────────────────────────────────
  {
    slug: "fichados-vs-kenjo",
    nombre: "Kenjo",
    h1: "Fichados vs Kenjo: comparativa de fichaje 2026",
    description:
      "Compara Fichados vs Kenjo para el control horario. Precio, funciones y diferencias clave. Descubre cual se adapta mejor a tu empresa.",
    precioCompetidor: "No público. Estimado ~4,50-9 €/empleado/mes según fuentes de review",
    features: [
      { feature: "Registro de jornada obligatorio (RDL 8/2019)", fichados: true, competidor: true },
      { feature: "Precio público y transparente", fichados: true, competidor: false },
      { feature: "Coste para 10 empleados", fichados: "30 €/mes", competidor: "~45-90 €/mes" },
      { feature: "Alta y fichaje en menos de 5 minutos", fichados: true, competidor: false },
      { feature: "Fichaje móvil con geolocalización", fichados: true, competidor: true },
      { feature: "Kioscos físicos de fichaje", fichados: false, competidor: true },
      { feature: "Informes específicos para Inspección de Trabajo (PDF/Excel)", fichados: true, competidor: true },
      { feature: "Sin periodo de permanencia", fichados: true, competidor: "No público" },
      { feature: "Soporte en español", fichados: true, competidor: true },
      { feature: "Registros inalterables conservados +4 años", fichados: true, competidor: true },
      { feature: "Panel de administración en tiempo real", fichados: true, competidor: true },
      { feature: "Sin proceso comercial para empezar", fichados: true, competidor: false },
    ],
    ventajas: [
      {
        title: "Precio transparente y hasta un 67 % más económico",
        description:
          "Kenjo no publica precios. Fuentes de review estiman entre 4,50 y 9 €/empleado/mes. Para 10 empleados, eso supone entre 45 y 90 €/mes. Fichados cuesta 30 €/mes: un ahorro de entre 15 y 60 €/mes (180-720 €/año).",
      },
      {
        title: "Alta inmediata sin proceso comercial",
        description:
          "Kenjo requiere solicitar una demo para obtener acceso y precio. Con Fichados te registras, configuras tu empresa e invitas a tu equipo en menos de 5 minutos. Sin llamadas, sin esperas.",
      },
      {
        title: "Pensado para pymes españolas, no para corporaciones",
        description:
          "Kenjo es una empresa alemana con foco en empleados sin escritorio de grandes marcas como Jaguar Land Rover o Domino's. Fichados está diseñado para pymes españolas que quieren cumplir la ley de forma simple y económica, sin la complejidad de una plataforma enterprise.",
      },
      {
        title: "Sin hardware ni kioscos necesarios",
        description:
          "Kenjo ofrece kioscos físicos de fichaje, útiles en entornos industriales. Fichados funciona 100 % digital desde móvil o navegador, sin comprar ni mantener hardware. Para la mayoría de pymes, el fichaje digital es suficiente y más económico.",
      },
    ],
    faq: [
      {
        question: "¿Puedo migrar de Kenjo a Fichados fácilmente?",
        answer:
          "Sí. Crea tu cuenta en Fichados, invita a tus empleados y empiezan a fichar al instante. No necesitas exportar datos de Kenjo ni coordinar ninguna migración técnica.",
      },
      {
        question: "¿Cuánto ahorro con Fichados frente a Kenjo?",
        answer:
          "Kenjo no publica precios, pero se estima entre 4,50 y 9 €/empleado/mes. Para 10 empleados, eso son 45-90 €/mes. Fichados cuesta 30 €/mes: un ahorro de entre 180 y 720 €/año dependiendo del plan de Kenjo.",
      },
      {
        question: "¿Qué tiene Kenjo que Fichados no ofrece?",
        answer:
          "Kenjo es una suite de RRHH completa con gestión de turnos, nóminas, evaluaciones de desempeño, onboarding, firma electrónica y kioscos físicos de fichaje. Está orientado a sectores con empleados sin escritorio (retail, sanidad, manufactura). Si necesitas todo eso, Kenjo es más completo. Si solo necesitas fichaje, Fichados lo resuelve a menor coste.",
      },
      {
        question: "¿Kenjo tiene oficina en España?",
        answer:
          "Kenjo es una empresa alemana (Berlín) con oficinas en Zúrich y Madrid. Fichados es 100 % español. Ambos ofrecen soporte en español, pero Fichados está diseñado desde el inicio para la normativa y el mercado español.",
      },
      {
        question: "¿Necesito kioscos físicos para fichar?",
        answer:
          "No. La normativa española (RDL 8/2019) no exige kioscos ni terminales físicos. El registro digital desde móvil o navegador es perfectamente válido. Fichados ofrece fichaje digital con geolocalización opcional, que es suficiente para cumplir la ley sin invertir en hardware.",
      },
    ],
    ctaFinal: {
      title: "Cambia de Kenjo a Fichados hoy",
      subtitle:
        "Ahorra entre 180 y 720 €/año con 10 empleados. Precio público, alta en 5 minutos, sin permanencia.",
    },
  },
];

export function getCompetidorBySlug(slug: string): Competidor | undefined {
  return competidores.find((c) => c.slug === slug);
}
