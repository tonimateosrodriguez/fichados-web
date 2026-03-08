export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fichados",
  legalName: "Groove Factory Studios S.L.",
  url: "https://fichados.es",
  logo: "https://fichados.es/images/logo-fichados.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@fichados.es",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Mosteruelo, 2",
    addressLocality: "Ferreras de Abajo",
    postalCode: "49334",
    addressRegion: "Zamora",
    addressCountry: "ES",
  },
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fichados",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Sistema de fichaje online obligatorio en España. Cumple el Real Decreto-ley 8/2019. Control horario para empresas.",
  url: "https://fichados.es",
  offers: {
    "@type": "Offer",
    price: "9",
    priceCurrency: "EUR",
    priceValidUntil: "2027-12-31",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Es obligatorio fichar en España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Desde 2019, todas las empresas y autónomos con empleados están obligados a registrar la jornada laboral según el Real Decreto-ley 8/2019.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si no tengo un sistema de fichaje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Inspección de Trabajo puede sancionar a la empresa con multas que van desde 60 € hasta 187.515 €, dependiendo de la gravedad y reincidencia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Fichados cumple con la normativa laboral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Fichados cumple el Real Decreto-ley 8/2019, permite registrar entrada, salida y pausas, y conserva los registros durante más de 4 años, tal y como exige la ley.",
      },
    },
    {
      "@type": "Question",
      name: "¿Sirve Fichados en una inspección de trabajo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Puedes exportar los registros oficiales en PDF en cualquier momento y presentarlos directamente ante la Inspección de Trabajo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mis empleados tienen que instalar algo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Tus empleados pueden fichar desde cualquier navegador, en móvil, tablet o ordenador. Sin apps ni instalaciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mis empleados pueden modificar fichajes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Los registros son inalterables por el empleado, garantizando su validez legal.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tiene permanencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Sin permanencia ni compromiso. Puedes darte de baja cuando quieras.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tardo en empezar a cumplir la ley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Menos de 1 minuto. Creas la cuenta, invitas a tu equipo y ya cumples la normativa desde el primer día.",
      },
    },
  ],
};
