import type { MetadataRoute } from 'next'

// Host canónico: www (es el que sirve 200 y el que Google ya indexó).
// El apex fichados.es hace 307 → www, así que el sitemap DEBE usar www
// para no listar URLs que redirigen.
const BASE_URL = 'https://www.fichados.es'

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
  'hosteleria', 'construccion', 'sanidad', 'educacion',
  'administracion-publica', 'comercio', 'autonomos',
]

const competitorSlugs = [
  'factorial', 'sesame', 'bizneo', 'personio', 'tramitapp', 'kenjo',
]

const herramientaSlugs = [
  'calculadora-horas-minutos',
  'calculadora-horas-extras', 'calculadora-horas-trabajadas',
  'calculadora-jornada-laboral', 'calculadora-multas-fichaje',
  'calculadora-coste-fichaje',
]

const recursoSlugs = [
  'plantilla-control-horario', 'modelo-registro-jornada',
  'plantilla-registro-horario-trabajadores', 'plantilla-turnos-trabajo',
  'plantilla-cuadrante-horario',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // Solo páginas indexables. Las legales son noindex → NO van en el sitemap.
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

  const competitorPages: MetadataRoute.Sitemap = competitorSlugs.map((slug) => ({
    url: `${BASE_URL}/comparar/fichados-vs-${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const herramientaPages: MetadataRoute.Sitemap = herramientaSlugs.map((slug) => ({
    url: `${BASE_URL}/herramientas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const recursoPages: MetadataRoute.Sitemap = recursoSlugs.map((slug) => ({
    url: `${BASE_URL}/recursos/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...articlePages,
    ...sectorPages,
    ...competitorPages,
    ...herramientaPages,
    ...recursoPages,
  ]
}
