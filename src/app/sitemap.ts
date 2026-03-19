import type { MetadataRoute } from 'next'

const BASE_URL = 'https://fichados.es'

const articleSlugs = [
  'guia-registro-jornada-2026',
  'errores-pymes-control-horario',
  'fichados-vs-excel-comparativa',
  'sanciones-no-fichar-multas',
  'implementar-fichaje-digital-3-pasos',
  'novedades-normativa-laboral-2026',
  'obligatorio-fichar-teletrabajo',
  'fichados-vs-factorial-vs-sesame',
  'gestionar-vacaciones-equipo',
  'fichados-geolocalizacion-fichajes',
]

const sectorSlugs = [
  'hosteleria', 'construccion', 'comercio', 'transporte', 'industria',
  'educacion', 'sanidad', 'tecnologia', 'agricultura', 'turismo',
  'limpieza', 'seguridad', 'logistica', 'alimentacion', 'peluqueria',
  'gimnasios', 'veterinaria', 'farmacias', 'dentistas', 'abogados',
  'consultoras', 'inmobiliarias', 'asesorias', 'restaurantes', 'hoteles',
]

const citySlugs = [
  'madrid', 'barcelona', 'valencia', 'sevilla', 'zaragoza', 'malaga',
  'murcia', 'palma-de-mallorca', 'las-palmas', 'bilbao', 'alicante',
  'cordoba', 'valladolid', 'vigo', 'gijon', 'hospitalet', 'vitoria',
  'la-coruna', 'granada', 'elche', 'oviedo', 'santa-cruz-de-tenerife',
  'pamplona', 'almeria', 'san-sebastian', 'santander', 'castellon',
  'burgos', 'albacete', 'salamanca', 'logrono', 'huelva', 'badajoz',
  'tarragona', 'lleida', 'leon', 'cadiz', 'jaen', 'ourense', 'lugo',
  'girona', 'caceres', 'guadalajara', 'toledo', 'pontevedra', 'palencia',
  'ciudad-real', 'zamora', 'avila', 'cuenca', 'huesca', 'segovia',
  'soria', 'teruel',
]

const competitorSlugs = [
  'factorial', 'sesame', 'bizneo', 'personio', 'a3equipo',
  'sage', 'timify', 'clockify', 'toggl',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/politica-privacidad`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/terminos-y-condiciones`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/politica-cookies`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/aviso-legal`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
  ]

  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const sectorPages: MetadataRoute.Sitemap = sectorSlugs.map((slug) => ({
    url: `${BASE_URL}/sectores/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const cityPages: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${BASE_URL}/ciudades/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const competitorPages: MetadataRoute.Sitemap = competitorSlugs.map((slug) => ({
    url: `${BASE_URL}/comparar/fichados-vs-${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...articlePages,
    ...sectorPages,
    ...cityPages,
    ...competitorPages,
  ]
}
