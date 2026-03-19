# Plan SEO Completo — Fichados.es

> Documento de referencia para toda la estrategia SEO de fichados.es
> Autor: Claude (SEO Senior) + Toni Mateos
> Fecha: 19 marzo 2026
> Estado: En planificación

---

## 1. Contexto y Oportunidad

### La oportunidad de mercado
España está procesando una **reforma del registro horario** que hará el fichaje digital **100% obligatorio** para TODAS las empresas, eliminando papel y Excel. Esto genera:
- Pico de búsquedas por "fichaje digital obligatorio", "nueva ley fichaje 2026"
- Empresas que nunca han buscado software de fichaje ahora NECESITAN uno
- Ventana temporal: primer semestre 2026 (aún no publicado en BOE como ley definitiva)

### Competidores principales (por tráfico orgánico)
| Competidor | Fortaleza SEO |
|-----------|---------------|
| **factorial.es** | Blog masivo (100+ artículos), landing pages por feature, plantillas descargables |
| **sesametime.com** | Contenido legal actualizado, comparativas, guías por sector |
| **bizneo.com** | Suite RRHH completa, blog de alto volumen |
| **personio.es** | Marca fuerte, contenido multinacional adaptado a España |
| **kenjo.io** | Nicho fichaje, contenido enfocado |
| **kronjop.com** | Emergente 2026, contenido ley nueva |
| **tramitapp.com** | Comparativas, blog activo |
| **registrahora.es** | Nicho puro fichaje, contenido legal |

### Nuestra ventaja competitiva
- Precio imbatible: 19€/mes + 3€/empleado (los competidores cobran 4-8€/empleado)
- Producto enfocado solo en fichaje (no suite RRHH genérica)
- Web técnicamente superior (Next.js SSG, Core Web Vitals perfectos)
- Podemos publicar 100+ páginas en días (pSEO), no meses

---

## 2. Keyword Research — Metodología

### 2.1 Herramientas a usar
- **Ahrefs** ($29/mes Starter): Keywords Explorer + Site Explorer (análisis competidores)
- **SE Ranking** (plan actual de Toni): Competitive Research + Keyword Grouper

### 2.2 Proceso paso a paso

#### Fase A: Espiar a los competidores (lo más valioso)
En **Ahrefs Site Explorer**, analizar cada dominio competidor:

1. **factorial.es** → Organic Keywords → Exportar CSV
2. **sesametime.com** → Organic Keywords → Exportar CSV
3. **bizneo.com** → Organic Keywords → Exportar CSV
4. **personio.es** → Organic Keywords → Exportar CSV
5. **kenjo.io** → Organic Keywords → Exportar CSV
6. **tramitapp.com** → Organic Keywords → Exportar CSV
7. **kronjop.com** → Organic Keywords → Exportar CSV
8. **registrahora.es** → Organic Keywords → Exportar CSV

**Filtros al exportar:**
- País: España
- Volumen: > 0 (queremos todo, luego filtramos)
- Posición: Top 50 (keywords donde ya hay demanda probada)

**En SE Ranking** (Competitive Research):
- Meter los mismos dominios
- Exportar keywords orgánicas
- Cruzar con Ahrefs para tener datos más completos

#### Fase B: Seed keywords propias
Buscar en Ahrefs Keywords Explorer (España):

**Cluster 1 — Producto/Software (transaccional)**
```
software fichaje, app fichaje, programa fichaje, sistema fichaje,
control horario software, app control horario, software registro jornada,
fichaje online, fichaje digital, fichaje electrónico, fichaje biométrico,
reloj fichaje, máquina fichar, terminal fichaje
```

**Cluster 2 — Legal/Normativa (informacional → transaccional)**
```
ley fichaje, obligación registro jornada, fichaje obligatorio,
nueva ley fichaje 2026, fichaje digital obligatorio, sanciones fichaje,
inspección trabajo fichaje, multas no fichar, real decreto 8/2019,
registro jornada obligatorio, normativa control horario,
jornada laboral 37.5 horas, reducción jornada 2026
```

**Cluster 3 — Por sector (long-tail transaccional)**
```
fichaje hostelería, control horario construcción, fichaje restaurantes,
fichaje comercio, control horario tiendas, fichaje hoteles,
fichaje clínicas, control horario fábricas, fichaje oficinas,
fichaje teletrabajo, fichaje obra, fichaje campo
```

**Cluster 4 — Por ciudad (long-tail transaccional, verificar volumen)**
```
software fichaje Madrid, control horario Barcelona, fichaje Valencia,
app fichaje Sevilla, software fichaje Málaga, control horario Bilbao
```

**Cluster 5 — Competidores (transaccional, alta conversión)**
```
factorial alternativa, sesame time alternativa, bizneo alternativa,
factorial vs sesame, factorial precio, sesame time precio,
factorial opiniones, sesame time opiniones, mejor software fichaje,
comparativa software fichaje
```

**Cluster 6 — Preguntas / How-to (informacional, blog)**
```
cómo fichar en el trabajo, qué pasa si no ficho, cómo funciona fichaje digital,
cómo elegir software fichaje, fichaje empleados cómo funciona,
qué es el registro de jornada, cómo cumplir ley fichaje,
plantilla control horario excel, plantilla registro jornada
```

**Cluster 7 — Recursos descargables (lead magnets)**
```
plantilla control horario, plantilla fichaje excel, modelo registro jornada,
plantilla registro horario trabajadores, descargar plantilla fichaje
```

Para cada cluster, en Ahrefs usar:
- **"Also rank for"** → keywords relacionadas que los resultados también rankean
- **"Questions"** → preguntas de usuarios (oro para blog y FAQs)
- **"Having same terms"** → variaciones exactas

#### Fase C: Consolidar y limpiar
1. Juntar todos los CSVs en un Google Sheet
2. Eliminar duplicados
3. Columnas: `keyword | volumen | KD | CPC | intención | URL competidor | cluster | tipo_página`

#### Fase D: Clasificar cada keyword

**Por intención de búsqueda:**
| Intención | Señal | Prioridad |
|-----------|-------|-----------|
| Transaccional | "software", "app", "comprar", "precio", "mejor" | ALTA |
| Comercial investigation | "comparativa", "vs", "alternativa", "opiniones" | ALTA |
| Informacional | "cómo", "qué es", "guía", "ley" | MEDIA |
| Navegacional | "[marca]", "[marca] login" | BAJA (no atacar) |

**Por tipo de página destino:**
| Tipo | Keyword pattern | URL |
|------|----------------|-----|
| Landing principal | "software fichaje", "app fichaje", genéricos | `/` |
| Sector | "[sector] + fichaje/control" | `/sectores/[sector]` |
| Ciudad | "[ciudad] + fichaje/control" | `/ciudades/[ciudad]` |
| Comparativa | "[competidor] alternativa", "vs", "opiniones" | `/comparar/fichados-vs-[x]` |
| Blog artículo | "cómo...", "qué es...", "ley...", guías | `/blog/[slug]` |
| Recurso/Lead magnet | "plantilla", "modelo", "descargar" | `/recursos/[slug]` |

#### Fase E: Priorizar
Ordenar por **potencial de impacto** = Volumen × (1/KD) × Factor_Intención

Donde Factor_Intención:
- Transaccional = 3
- Comercial investigation = 2.5
- Informacional = 1
- Navegacional = 0

**Criterios de corte:**
- Sectores: crear página solo si cluster tiene >50 búsquedas/mes totales
- Ciudades: crear página solo si "fichaje/control horario [ciudad]" tiene >10 búsquedas/mes
- Comparativas: crear para cada competidor que tenga >100 búsquedas/mes en su marca
- Blog: crear artículo si keyword principal tiene >50 búsquedas/mes o KD < 20

---

## 3. Resultados del Keyword Research (19 marzo 2026)

> Análisis de 12 CSVs de competidores exportados de SE Ranking.
> 275.792 filas brutas → 26.694 keywords únicas relevantes tras filtrar y deduplicar.

### 3.1 Resumen global

| Categoría | Total KWs | Vol>100 | Sweet Spot (v>100, KD<30) | Vol. Total |
|---|---|---|---|---|
| **Transaccional** (software/app/programa fichaje) | 973 | 60 | **57** | 30.260 |
| **Comparativa** (alternativa/vs/opiniones marca) | 1.951 | 212 | **195** | 218.870 |
| **Legal** (ley/normativa/sanción/inspección) | 1.086 | 144 | **127** | 79.120 |
| **Plantillas** (plantilla/modelo/excel/descargar) | 1.412 | 74 | **74** | 39.250 |
| **Herramientas** (calculadora/test/simulador) | 346 | 54 | **35** | 167.930 |
| **Sector** (hostelería, construcción, etc.) | 650 | 47 | **47** | 23.550 |
| **Ciudad** (Madrid, Barcelona, etc.) | 309 | 55 | **51** | 19.740 |
| **Blog informacional** (cómo/qué es/guía) | 2.514 | 192 | **191** | 96.410 |
| **RRHH general** (nóminas, vacaciones, turnos) | 18.176 | 1.473 | **1.356** | 975.930 |
| **TOTAL** | **26.694** | **2.239** | **2.062** | **1.619.250** |

**Cifras clave:**
- **2.062 keywords sweet spot** (vol>100 + KD<30) — atacables con contenido de calidad
- **3.354 easy wins** (vol>50 + KD<20) — ranking factible en 3-6 meses
- **166 keywords high-CPC** (>2€, vol>50) — las más monetizables

### 3.2 Top keywords transaccionales (las que convierten)

| Keyword | Vol. | KD | CPC | Tipo página |
|---------|------|-----|------|-------------|
| app control horario | 480 | 12 | 2,29€ | Landing `/` |
| software rrhh | 480 | 11 | 6,45€ | Landing `/` |
| mejor app control horario gratis | 390 | 10 | — | Blog comparativa |
| sistema de fichajes | 390 | 10 | 4,07€ | Landing `/` |
| programa control horario | 390 | 12 | 2,71€ | Landing `/` |
| software de control horario | 390 | 12 | 3,14€ | Landing `/` |
| sistema de fichaje para empresas | 320 | 12 | 2,37€ | Landing `/` |
| programa fichaje | 260 | 10 | 2,62€ | Landing `/` |
| software de fichaje | 260 | 12 | 3,14€ | Landing `/` |
| app fichaje empleados | 210 | 10 | — | Landing `/` |
| control horario digital | 170 | 8 | 1,89€ | Landing `/` |
| software registro jornada | 170 | 10 | 2,37€ | Landing `/` |
| fichaje online | 170 | 12 | — | Landing `/` |
| reloj fichaje online | 140 | 8 | — | Landing `/` |
| app para fichar en el trabajo | 110 | 10 | — | Landing `/` |

### 3.3 Comparativas por marca competidora

| Marca | KWs ranking | Vol. Total | Top keyword (vol) | **Crear `/comparar/`?** |
|---|---|---|---|---|
| **Factorial** | 17 | 1.510 | "factorial fichaje" (480) | ✅ SÍ — volumen alto |
| **Sesame** | 25 | 2.030 | "sesame control horario" (480) | ✅ SÍ — volumen alto |
| **Bizneo** | 41 | 29.480 | "bizneo" (27.100) | ✅ SÍ — marca gigante |
| **Personio** | 15 | 11.200 | "personio" (10.800) | ✅ SÍ — mucho brand search |
| **TramitApp** | 7 | 11.030 | "tramitapp" (10.800) | ✅ SÍ — mucho brand search |
| **Kenjo** | 13 | 4.170 | "kenjo" (3.600) | ✅ SÍ — brand search decente |
| **Jornada (jorn-ada)** | 1.792 | 156.300 | "jornada laboral" (27.800) | ⚠️ No es competidor directo |
| **OpenHR** | — | — | — | ❌ NO — sin volumen |
| **Kronjop** | — | — | — | ❌ NO — sin volumen |
| **KaiControl** | — | — | — | ❌ NO — sin volumen |
| **TurnoDigital** | — | — | — | ❌ NO — sin volumen |
| **RegistraHora** | — | — | — | ❌ NO — sin volumen |

**DECISIÓN: Crear 6 comparativas** → Factorial, Sesame, Bizneo, Personio, TramitApp, Kenjo

### 3.4 Sectores con volumen real

| Sector | KWs | Vol. Total | Top keyword | **Crear `/sectores/`?** |
|---|---|---|---|---|
| **Sanidad/salud** | 201 | 7.490 | "control horario sanitarios" | ✅ SÍ |
| **Construcción** | 134 | 5.870 | "control horario obra" | ✅ SÍ |
| **Educación** | 55 | 3.690 | "control horario centros educativos" | ✅ SÍ |
| **Admin. pública** | 49 | 1.470 | "fichaje funcionarios" | ✅ SÍ |
| **Autónomos** | 32 | 1.410 | "fichaje autónomos" | ✅ SÍ |
| **Hostelería** | 41 | 1.080 | "control horario hostelería" | ✅ SÍ |
| **Comercio/Retail** | ~30 | ~800 | "control horario tiendas" | ✅ SÍ |
| **Transporte** | ~25 | ~600 | "control horario transporte" | ⚠️ Evaluar |
| **Industria/fábricas** | ~20 | ~500 | "control horario fábrica" | ⚠️ Evaluar |
| **Limpieza** | ~15 | ~300 | "fichaje limpieza" | ❌ NO — poco volumen |
| **Agricultura** | ~10 | ~150 | — | ❌ NO |

**DECISIÓN: Crear 7-9 sectores** (los 7 con ✅ seguro, evaluar transporte e industria)

### 3.5 Ciudades — NO crear páginas

| Ciudad | KWs | Vol. Total | Mejor keyword |
|---|---|---|---|
| Madrid | 104 | 7.690 | "software rrhh madrid" (90) |
| Barcelona | 64 | 2.480 | "software rrhh barcelona" (70) |
| Valencia | 32 | 1.900 | "asesoria laboral valencia" (260) |
| Santander | 9 | 1.820 | genérico, no fichaje |
| Murcia | 5 | 830 | genérico |

**DECISIÓN: NO crear páginas de ciudades.** El volumen viene de keywords genéricas de RRHH con nombre de ciudad, no de "fichaje + [ciudad]". Las búsquedas tipo "software fichaje Madrid" tienen volumen 0-10. No hay intent local real para nuestro producto (es 100% cloud).

**Excepción posible**: Si en el futuro queremos atacar "software rrhh [ciudad]" (vol 70-90), podemos reconsiderar, pero no es prioridad vs. otras oportunidades.

### 3.6 Plantillas y recursos (lead magnets)

| Keyword | Vol. | KD | CPC | Tipo |
|---------|------|-----|------|------|
| plantilla control horario | 320 | 5 | — | Descargable Excel/PDF |
| modelo registro jornada | 260 | 3 | — | Descargable |
| plantilla registro horario trabajadores | 210 | 4 | — | Descargable |
| plantilla horario trabajo | 170 | 6 | — | Descargable |
| plantilla turnos de trabajo | 170 | 5 | — | Descargable |
| plantilla excel control horario | 140 | 4 | — | Descargable |
| modelo de registro de jornada laboral | 110 | 3 | — | Descargable |
| plantilla cuadrante horario | 110 | 6 | — | Descargable |
| plantilla control de horas trabajadas | 90 | 4 | — | Descargable |

**DECISIÓN: SÍ crear `/recursos/`** — 74 keywords con KD ultra-bajo (3-6). Son lead magnets perfectos: usuario descarga plantilla → le pedimos email → nurturing → conversión a Fichados.

**Páginas a crear:**
1. `/recursos/plantilla-control-horario` — target principal (320 vol)
2. `/recursos/modelo-registro-jornada` — (260 vol)
3. `/recursos/plantilla-registro-horario-trabajadores` — (210 vol)
4. `/recursos/plantilla-turnos-trabajo` — (170 vol)
5. `/recursos/plantilla-cuadrante-horario` — (110 vol)

### 3.7 Herramientas interactivas

| Keyword | Vol. | KD | CPC |
|---------|------|-----|------|
| calculadora horas extras | 480 | 3 | — |
| calculadora horas trabajadas | 390 | 6 | — |
| calculadora jornada laboral | 210 | 5 | — |
| calculadora salario neto | 1.900 | 10 | — |
| simulador nómina | 480 | 8 | — |
| calculadora vacaciones | 320 | 5 | — |

**DECISIÓN: SÍ crear `/herramientas/`** — Volumen MUY alto (480-1.900) con KD bajísimo (3-10). Las calculadoras generan tráfico recurrente, backlinks naturales y engagement altísimo.

**Herramientas a crear (por prioridad):**
1. `/herramientas/calculadora-horas-extras` — 480 vol, KD 3 🔥
2. `/herramientas/calculadora-horas-trabajadas` — 390 vol, KD 6
3. `/herramientas/calculadora-jornada-laboral` — 210 vol, KD 5
4. `/herramientas/calculadora-multas-fichaje` — vol bajo pero alta conversión (propio)
5. `/herramientas/calculadora-coste-fichaje` — comparativa de precios (propio, transaccional)

### 3.8 Blog informacional — Top oportunidades

| Keyword | Vol. | KD | Tipo artículo |
|---------|------|-----|---------------|
| jornada laboral | 27.800 | 24 | Pilar (mega-guía) |
| horas extra | 6.600 | 18 | Pilar legal |
| control horario | 2.900 | 12 | Pilar producto |
| registro de jornada | 1.300 | 8 | Guía legal |
| horario laboral en españa | 720 | 10 | Legal/informacional |
| ley de fichaje | 480 | 8 | Legal urgente |
| fichaje obligatorio | 390 | 6 | Legal urgente |
| sanciones fichaje | 260 | 5 | Legal urgente |
| inspección de trabajo fichaje | 170 | 4 | Legal |
| control horario obligatorio | 170 | 6 | Legal |
| reducción jornada laboral 2026 | 3.600 | 15 | Trending legal |
| teletrabajo normativa | 480 | 10 | Blog |
| absentismo laboral | 1.300 | 12 | Blog RRHH |
| turnos de trabajo | 2.400 | 8 | Blog RRHH |
| cuadrante de trabajo | 1.900 | 6 | Blog/herramienta |
| convenio hostelería | 1.600 | 10 | Blog sector |
| fichaje biométrico | 210 | 6 | Blog producto |
| fichaje digital | 170 | 5 | Blog producto |

**191 keywords sweet spot** para blog — suficiente contenido para 2+ años de publicación.

### 3.9 RRHH general — Oportunidad de expansión futura

La categoría más grande (18.176 KWs, 1.356 sweet spot) incluye:
- Nóminas, vacaciones, bajas, permisos, convenios
- Gestión de turnos, ausencias, absentismo
- Evaluación del desempeño, onboarding, clima laboral

**DECISIÓN: NO atacar ahora.** Fichados es una app de fichaje, no una suite RRHH. Pero hay oportunidades enormes si en el futuro el producto se expande. Guardar este dataset para cuando tenga sentido estratégicamente.

**Excepciones que sí atacamos** (relacionadas con fichaje):
- Turnos de trabajo, cuadrantes, horarios → Blog + herramientas
- Horas extra, jornada laboral, absentismo → Blog legal/informacional
- Teletrabajo, control horario remoto → Blog

### 3.10 Keywords high-CPC (>2€) — Oportunidades monetizables

| Keyword | Vol. | KD | CPC |
|---------|------|-----|------|
| software evaluación del desempeño | 210 | 11 | 9,53€ |
| software gestión personal | 170 | 27 | 9,32€ |
| software control de producción | 90 | 12 | 7,27€ |
| software rrhh | 480 | 11 | 6,45€ |
| software de rrhh | 260 | 30 | 4,63€ |
| sistema de fichaje | 390 | 10 | 4,07€ |
| software de control horario | 390 | 12 | 3,14€ |
| programa control horario | 390 | 12 | 2,71€ |
| sistema de fichaje para empresas | 320 | 12 | 2,37€ |
| app control horario | 480 | 12 | 2,29€ |

Estas keywords justifican inversión premium en contenido (artículos largos, herramientas, comparativas detalladas).

---

## 4. Arquitectura de Contenidos

### 4.1 Páginas transaccionales (conversión directa)

#### Landing principal `/`
- **Target**: "app control horario" (480), "software rrhh" (480), "sistema de fichajes" (390), "programa control horario" (390), "software de control horario" (390)
- **Ya creada** ✅
- Optimizar H1, meta title, meta description con estas keywords exactas

#### Sectores `/sectores/[sector]` — 7-9 páginas
- **Template**: Ya creado ✅ (ajustar contenido con datos reales)
- **DECISIÓN TOMADA**: Sanidad, construcción, educación, admin pública, autónomos, hostelería, comercio
- **Contenido por página**: ~800-1.200 palabras únicas
  - Pain points específicos del sector
  - Normativa aplicable al sector
  - Caso de uso / ejemplo real
  - FAQs del sector (3-5 preguntas)
  - CTA a registro

#### ~~Ciudades `/ciudades/[ciudad]`~~ — DESCARTADO
- **DECISIÓN TOMADA**: NO crear páginas de ciudades
- **Razón**: "fichaje + [ciudad]" tiene volumen 0-10. El producto es 100% cloud, no hay intent local.
- **Acción**: Eliminar las 54 páginas placeholder de ciudades que se desplegaron

#### Comparativas `/comparar/fichados-vs-[x]` — 6 páginas
- **Template**: Ya creado ✅ (ajustar contenido con datos reales)
- **Alta prioridad**: Las keywords de competidores tienen alta intención de compra
- **DECISIÓN TOMADA**: Factorial, Sesame, Bizneo, Personio, TramitApp, Kenjo
- **Contenido por página**: ~1.000-1.500 palabras
  - Tabla comparativa honesta (features, precio, pros/contras)
  - Diferenciadores de Fichados (precio, simplicidad)
  - FAQs comparativas
  - CTA a registro + prueba gratuita

### 4.2 Páginas informacionales (tráfico + autoridad)

#### Blog `/blog/[slug]`
- **Template**: Ya creado ✅ (diseñado en Lovable, migrado a Next.js)
- **Estrategia de contenido** (ver sección 4)
- **Frecuencia objetivo**: 2-4 artículos/semana las primeras 8 semanas, luego 1-2/semana
- **Longitud**: 1.500-3.000 palabras por artículo
- **Estructura**: H1 con keyword → Intro → TOC → Secciones con H2/H3 → CTA → FAQs

#### Recursos `/recursos/[slug]` — 5 páginas (DECISIÓN: SÍ CREAR)
- **Concepto**: Páginas de descarga de plantillas y guías
- **Objetivo**: Capturar leads (email a cambio de descarga) + rankear para "plantilla fichaje", etc.
- **74 keywords sweet spot, KD ultra-bajo (3-6)**
- **Páginas confirmadas**:
  1. `/recursos/plantilla-control-horario` — 320 vol, KD 5
  2. `/recursos/modelo-registro-jornada` — 260 vol, KD 3
  3. `/recursos/plantilla-registro-horario-trabajadores` — 210 vol, KD 4
  4. `/recursos/plantilla-turnos-trabajo` — 170 vol, KD 5
  5. `/recursos/plantilla-cuadrante-horario` — 110 vol, KD 6

### 4.3 Herramientas gratuitas `/herramientas/[slug]` — 5 herramientas (DECISIÓN: SÍ CREAR)
**35 keywords sweet spot. Volumen MUY alto (480-1.900) con KD bajísimo (3-10).**

| Herramienta | URL | Vol. | KD |
|-------------|-----|------|-----|
| Calculadora horas extras | `/herramientas/calculadora-horas-extras` | 480 | 3 🔥 |
| Calculadora horas trabajadas | `/herramientas/calculadora-horas-trabajadas` | 390 | 6 |
| Calculadora jornada laboral | `/herramientas/calculadora-jornada-laboral` | 210 | 5 |
| Calculadora multas fichaje | `/herramientas/calculadora-multas-fichaje` | Bajo (propio) | — |
| Calculadora coste fichaje | `/herramientas/calculadora-coste-fichaje` | Bajo (propio) | — |

- **Son componentes React interactivos**, no solo texto — exactamente lo que funciona en pSEO 2.0
- **Schema markup**: `SoftwareApplication` o `WebApplication` para herramientas
- **Lead capture opcional**: Ofrecer resultado detallado por email

### ~~4.4 Guías por tamaño de empresa `/guias/[slug]`~~ — POSPUESTO
- No hay volumen específico para "fichaje X empleados"
- Mejor cubrir este ángulo dentro de artículos de blog ("fichaje para pymes", etc.)

### 4.5 Páginas técnicas/legales
- **Ya creadas** ✅: aviso-legal, política-cookies, política-privacidad, términos, RGPD
- **noindex** ✅

---

## 4. Sistema pSEO 2.0 — Generación a escala (inspirado en Jake Ward / Byword)

### 5.1 Principio fundamental
> "Nunca pedir a la IA que escriba contenido libre. Pedirle que rellene un JSON schema estricto."
> — Jake Ward, +466% tráfico en 60 días con 13.000 páginas

### 5.2 Arquitectura del sistema

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  TAXONOMÍA      │     │  GENERACIÓN       │     │  PRESENTACIÓN    │
│  (contexto)     │────▶│  (IA + schema)    │────▶│  (React)         │
│                 │     │                   │     │                  │
│  sectores.ts    │     │  Claude/Gemini    │     │  [sector]/page   │
│  ciudades.ts    │     │  rellena JSON     │     │  [ciudad]/page   │
│  competidores.ts│     │  schema estricto  │     │  blog/[slug]     │
│  nichos.ts      │     │                   │     │  herramientas/   │
└─────────────────┘     └──────────────────┘     └─────────────────┘
        ▲                                                │
        │                                                │
        └────────── FEEDBACK LOOP ◀──────────────────────┘
              (qué rankea → mejorar taxonomía)
```

**Las 3 capas NUNCA se mezclan:**
1. **Taxonomía** = datos de contexto por nicho (TypeScript)
2. **Generación** = IA rellena schemas con datos del nicho
3. **Presentación** = componentes React especializados por tipo

### 5.3 Taxonomía rica de nichos (60% del esfuerzo aquí)
La clave según Jake Ward: dedicar el **60% del tiempo** a construir contexto rico por nicho.

**Estructura actual (básica):**
```typescript
{ slug: "hosteleria", name: "Hostelería", painPoints: [...] }
```

**Estructura objetivo (rica, niche-aware):**
```typescript
interface SectorContext {
  slug: string;
  name: string;
  context: {
    audience: string;           // "Gerentes de restaurante, directores de hotel"
    painPoints: string[];       // Problemas específicos del sector
    regulatoryContext: string;  // Normativa aplicable al sector
    commonSize: string;         // "5-50 empleados"
    specificChallenges: string; // "Turnos rotativos, alta rotación"
    searchIntent: string;       // Qué buscan y por qué
    competitors: string[];      // Soluciones que ya usan
    conversionAngle: string;   // Por qué Fichados es ideal para ellos
  };
  seo: {
    primaryKeyword: string;
    secondaryKeywords: string[];
    title: string;              // Template determinístico, NO generado por IA
    description: string;
  };
  faqs: FAQ[];                  // Preguntas específicas del sector
}
```

Mismo patrón para ciudades, comparativas, guías, etc.

### 5.4 Generación con IA via JSON schemas
En vez de "escríbeme un artículo sobre fichaje en hostelería", hacemos:

```typescript
// Schema que la IA debe rellenar
interface SectorPageContent {
  hero: {
    headline: string;        // max 60 chars
    subheadline: string;     // max 120 chars
    statistic: string;       // dato impactante del sector
  };
  problemSection: {
    title: string;
    problems: Array<{
      title: string;
      description: string;   // 50-100 palabras
      consequence: string;
    }>;                      // exactamente 4
  };
  solutionSection: {
    title: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;   // 30-50 palabras
    }>;                      // exactamente 6
  };
  socialProof: {
    testimonial: string;     // del sector si existe
    stat: string;            // "X empresas del sector ya usan Fichados"
  };
  faqs: Array<{
    question: string;
    answer: string;          // 50-150 palabras
  }>;                        // exactamente 5
  cta: {
    headline: string;
    subtext: string;
  };
}
```

**Reglas clave:**
- Títulos (SEO title, H1) son **templates determinísticos**, no generados por IA
- La IA rellena el schema inyectando el contexto del nicho
- Cantidades exactas por sección (4 problemas, 6 features, 5 FAQs)
- Límites de palabras por campo → consistencia

### 5.5 Componentes React especializados (renderers)
Cada tipo de página tiene su propio componente:

| Tipo de página | Componente | Funcionalidad especial |
|---------------|-----------|----------------------|
| Sector | `SectorPage` | Pain points, features, testimonial del sector |
| Ciudad | `CityPage` | Datos locales, mapa (futuro), empresas locales |
| Comparativa | `ComparisonPage` | Tabla de features, precio side-by-side |
| Blog | `ArticlePage` | TOC, breadcrumbs, artículos relacionados |
| Herramienta | `ToolPage` | Componente interactivo (calculadora, checklist) |
| Guía por tamaño | `SizeGuidePage` | Calculadora inline, features recomendadas |
| Recurso | `ResourcePage` | Preview + CTA descarga |

### 5.6 Rollout progresivo (no publicar todo de golpe)
1. **Lote 1** (Semana 3): Sectores top 5-10 + Comparativas top 3-5
2. **Lote 2** (Semana 4): Ciudades top 10-20 + Artículos legales
3. **Lote 3** (Semana 5-6): Herramientas + Guías por tamaño
4. **Monitorear** indexación y tráfico entre lotes
5. **Feedback loop**: Lo que rankea → mejorar taxonomía → regenerar contenido

### 5.7 Escala potencial
Con este sistema, escalar de 100 a 1.000+ páginas es cuestión de:
- Añadir más nichos a la taxonomía
- Añadir más tipos de contenido (cada uno con su schema + renderer)
- Ejecutar la generación (minutos, no semanas)
- Deploy automático via git push → Vercel

---

## 5. Estrategia de Contenido del Blog

### 6.1 Pilares temáticos (topic clusters)

**Pilar 1: Ley de fichaje y normativa** (MÁXIMA PRIORIDAD por timing)
- Artículo pilar: "Nueva ley de fichaje digital 2026: todo lo que necesitas saber"
- Cluster: sanciones, inspecciones, obligaciones por tamaño empresa, RGPD y fichaje, conservación registros
- Interlinking: cada artículo enlaza al pilar y entre sí

**Pilar 2: Cómo elegir software de fichaje**
- Artículo pilar: "Guía definitiva para elegir software de fichaje en 2026"
- Cluster: comparativas, reviews, criterios, integración con nómina, fichaje biométrico vs app
- Interlinking: enlaza a comparativas `/comparar/...`

**Pilar 3: Gestión del tiempo y productividad**
- Artículo pilar: "Control horario: beneficios más allá de cumplir la ley"
- Cluster: horas extra, teletrabajo, turnos, absentismo, productividad
- Más informacional, menos conversión directa, pero genera autoridad

**Pilar 4: Sectores específicos**
- Artículos: "Fichaje en hostelería: guía completa", "Control horario en construcción", etc.
- Interlinking: enlaza a `/sectores/[sector]`

### 6.2 Calendario editorial (primeras 8 semanas)

**Semana 1-2: Contenido legal urgente (aprovechar el momento)**
1. Nueva ley de fichaje digital 2026: qué cambia para tu empresa
2. Sanciones por no fichar: cuánto puedes pagar en 2026
3. Inspección de trabajo: cómo prepararte para una auditoría de fichaje
4. Fichaje digital obligatorio: fecha límite y qué hacer ahora

**Semana 3-4: Contenido transaccional**
5. Mejor software de fichaje 2026: comparativa completa
6. App de fichaje para móvil: las 5 mejores opciones
7. Fichaje para pymes: soluciones asequibles desde 19€/mes
8. Cómo elegir un sistema de fichaje: 7 criterios clave

**Semana 5-6: Contenido por sector**
9. Fichaje en hostelería: la guía completa
10. Control horario en construcción: normativa y soluciones
11. Fichaje para comercio y retail: cómo cumplir la ley
12. Control horario en clínicas y centros médicos

**Semana 7-8: Contenido de profundización**
13. Fichaje biométrico vs app: pros, contras y legalidad (RGPD)
14. Control horario y teletrabajo: cómo gestionar equipos remotos
15. Plantilla de control horario Excel vs software: por qué migrar
16. Horas extra: cómo registrarlas y qué dice la ley

### 6.3 Producción de contenido
- **Redacción**: Claude puede generar borradores optimizados para SEO
- **Revisión**: Toni revisa, ajusta tono, añade experiencia real
- **Publicación**: Push al repo → Vercel auto-despliega
- **Formato**: Artículos en archivos TypeScript (como `blogArticles.ts`) o migrar a MDX

---

## 6. SEO Técnico

### 7.1 Ya implementado ✅
- [x] Server-Side Rendering (Next.js SSG)
- [x] Meta tags dinámicos con `generateMetadata()`
- [x] JSON-LD structured data (SoftwareApplication, FAQPage, Article)
- [x] Sitemap dinámico `/sitemap.xml`
- [x] robots.txt
- [x] Canonical URLs (metadataBase)
- [x] Open Graph + Twitter Cards
- [x] Google Analytics 4

### 7.2 Pendiente de implementar
- [ ] **Google Search Console** — Verificar propiedad del dominio, monitorear indexación
- [ ] **Schema markup BreadcrumbList** — En todas las páginas interiores
- [ ] **Hreflang** — No necesario ahora (solo España), pero preparar para futuro
- [ ] **Internal linking automático** — Componente que enlace artículos relacionados
- [ ] **Tabla de contenidos (TOC)** — En artículos de blog (ya existe en el template)
- [ ] **Velocidad de carga** — Auditar con Lighthouse, optimizar imágenes (WebP/AVIF)
- [ ] **Core Web Vitals** — Medir LCP, FID, CLS en Search Console
- [ ] **Favicon y manifest** — PWA-ready

### 7.3 Link building (fase posterior)
- **Guest posts** en blogs de RRHH, asesorías laborales, gestorías
- **Directorios SaaS**: Capterra España, SoftDoit, ComparaSoftware
- **PR digital**: Notas de prensa sobre la nueva ley + mencionar Fichados
- **Partnerships**: Gestorías/asesorías que recomienden Fichados a sus clientes
- **HARO/Connectively**: Responder a periodistas que escriban sobre la ley de fichaje

---

## 7. GEO — Generative Engine Optimization (SEO para IA)

### 8.1 Por qué importa
- El tráfico desde plataformas IA (ChatGPT, Perplexity, Gemini, Claude) creció un **357% interanual** (junio 2025)
- El tráfico desde IA convierte a **4.4x** la tasa del orgánico tradicional
- Se estima que el tráfico LLM superará al de Google tradicional para finales de 2027
- **Google AI Overviews** ya responde directamente en el buscador, reduciendo clicks a resultados orgánicos
- Si un LLM recomienda Fichados cuando alguien pregunta "¿qué software de fichaje es mejor para pymes?", es una venta casi segura

### 8.2 Plataformas objetivo
| Plataforma | Cómo funciona | Cómo nos beneficia |
|-----------|---------------|-------------------|
| **ChatGPT** | 200M usuarios/semana, busca y sintetiza web | Que cite fichados.es al recomendar software de fichaje |
| **Perplexity** | Muy orientado a citas, usa búsqueda en tiempo real | Favorece contenido reciente y bien estructurado — nuestra ventaja |
| **Google AI Overviews** | Integra señales de SEO tradicional + IA | Lo que rankea bien en Google tiende a aparecer en AI Overviews |
| **Gemini** | Integrado con infraestructura Google | Buen SEO Google = buena visibilidad en Gemini |
| **Claude** | Conocimiento hasta training + búsqueda web | Presencia en fuentes autoritativas ayuda |

### 8.3 Tácticas de optimización GEO

#### A. Estructura del contenido (lo más impactante)
Los LLMs son **28-40% más propensos a citar contenido** con estructura clara:
- **Headings jerárquicos** (H1 → H2 → H3) con la pregunta/keyword en el heading
- **Listas y bullet points** para enumerar features, pasos, ventajas
- **Tablas comparativas** (los LLMs las extraen fácilmente)
- **Formato "respuesta primero"**: Empezar cada sección con la respuesta directa, luego desarrollar
- **Chunks de 75-225 palabras**: Cada sección debe ser autocontenida y extraíble

**Ejemplo práctico para Fichados:**
```
## ¿Cuánto cuesta un software de fichaje en 2026?

El precio medio de un software de fichaje en España oscila entre 2€ y 8€ por empleado/mes.
Fichados ofrece el precio más competitivo del mercado: **19€/mes de base + 3€ por empleado**,
sin permanencia y con todas las funcionalidades incluidas.

| Software | Precio base | Por empleado | Permanencia |
|----------|-------------|--------------|-------------|
| Fichados | 19€/mes | 3€/empleado | No |
| Factorial | Bajo consulta | ~4-6€/empleado | 12 meses |
| Sesame | Bajo consulta | ~4-8€/empleado | 12 meses |
```

Este formato es ideal porque:
1. Responde directamente a la pregunta (primer párrafo)
2. Tiene datos concretos y citables (precios exactos)
3. Tabla comparativa fácil de extraer para el LLM
4. Fichados aparece como la opción más económica

#### B. Schema markup ampliado
Ya tenemos JSON-LD básico. Ampliar con:
- **FAQPage** en TODAS las páginas (no solo landing) — los LLMs adoran extraer Q&A
- **HowTo** en artículos de guías paso a paso
- **Article** con `author`, `datePublished`, `dateModified` (señal de frescura)
- **Organization** en layout global (datos de la empresa)
- **SoftwareApplication** con `offers`, `aggregateRating` cuando tengamos reviews

#### C. Datos originales y estadísticas propias
El contenido con datos propios tiene un **41% más de probabilidad de ser citado** por LLMs:
- **Publicar datos propios**: "El 73% de nuestros clientes activan el fichaje en menos de 5 minutos"
- **Encuestas a clientes**: "Encuesta Fichados 2026: cómo fichan las pymes españolas"
- **Benchmarks**: Tiempo medio de implementación, ratio de adopción, etc.
- Los LLMs usan estos datos como "verdad de anclaje" y nos atribuyen la fuente

#### D. Frescura del contenido
Los LLMs tienen **sesgo de recencia** — contenido de más de 3 meses pierde citaciones:
- Añadir `dateModified` en schema y actualizarlo al editar artículos
- Incluir el año en títulos: "Guía de fichaje 2026" (no solo "Guía de fichaje")
- Actualizar artículos existentes cada 2-3 meses con datos nuevos
- Publicar contenido sobre cambios normativos en tiempo real

#### E. Autoridad y citabilidad
- **Autoría clara**: Nombre real del autor, bio, credenciales
- **Fuentes y citas**: Enlazar a BOE, Ministerio de Trabajo, fuentes oficiales
- **Lenguaje experto pero accesible**: Los LLMs priorizan fuentes que suenan autoritativas
- **Presencia en directorios y plataformas**: Capterra, G2, SoftDoit (los LLMs indexan estas fuentes)

#### F. Contenido "pregunta → respuesta" (Question Targeting)
Los usuarios de ChatGPT/Perplexity hacen preguntas conversacionales, no keywords:
- "¿Qué software de fichaje es más barato para una pyme de 10 empleados?"
- "¿Es obligatorio fichar en España en 2026?"
- "¿Qué pasa si me pillan sin registro de jornada?"

**Acción**: En cada artículo y página pSEO, incluir sección de FAQs con preguntas naturales (no keywords robóticas). Usar schema FAQPage para cada una.

### 8.4 Implementación técnica para GEO

| Acción | Archivo(s) | Prioridad |
|--------|-----------|-----------|
| FAQPage schema en todas las páginas | Templates de sector, ciudad, comparativa, blog | ALTA |
| Organization schema global | `layout.tsx` o componente compartido | ALTA |
| `dateModified` en Article schema | `blog/[slug]/page.tsx` | ALTA |
| Formato "respuesta primero" en todo el contenido | Todos los data files | ALTA |
| HowTo schema en artículos de guías | Artículos específicos del blog | MEDIA |
| Author schema con datos reales | Blog template | MEDIA |
| Datos propios / estadísticas | Contenido de artículos y landing | MEDIA |

### 8.5 Monitoreo GEO
- **Verificar manualmente**: Preguntar a ChatGPT, Perplexity, Gemini "¿qué software de fichaje recomiendas en España?" periódicamente
- **Buscar citas**: Buscar "fichados.es" en Perplexity para ver si nos citan
- **GA4 referrers**: Filtrar tráfico de `chatgpt.com`, `perplexity.ai`, `gemini.google.com`
- **Herramientas emergentes**: LLMrefs.com, Otterly.ai — monitorizan menciones en LLMs

---

## 8. Medición y KPIs

### Dashboard SEO tradicional (Google Search Console + GA4)
| KPI | Baseline | Objetivo 3 meses | Objetivo 6 meses |
|-----|----------|-------------------|-------------------|
| Páginas indexadas | ~10 | 50-100 | 150+ |
| Impresiones/mes | 0 | 10.000 | 50.000 |
| Clicks orgánicos/mes | 0 | 500 | 3.000 |
| Keywords top 10 | 0 | 20 | 100 |
| Keywords top 50 | 0 | 200 | 1.000 |
| Tráfico orgánico → registro | 0 | 50 | 300 |
| Posición media | — | <30 | <15 |

### Dashboard GEO (tráfico desde IA)
| KPI | Baseline | Objetivo 3 meses | Objetivo 6 meses |
|-----|----------|-------------------|-------------------|
| Sesiones desde chatgpt.com | 0 | 20 | 200 |
| Sesiones desde perplexity.ai | 0 | 10 | 100 |
| Sesiones desde gemini.google.com | 0 | 10 | 50 |
| Menciones en respuestas IA (manual check) | 0 | Aparecemos en 1 de 5 consultas | Aparecemos en 3 de 5 |
| Conversión tráfico IA → registro | — | Medir baseline | Optimizar |

### Herramientas de seguimiento
- **Google Search Console**: Impresiones, clicks, posición media, indexación
- **GA4**: Tráfico, conversiones (registro), comportamiento + filtro referrers IA
- **SE Ranking**: Tracking diario de posiciones
- **Verificación manual**: Preguntar a ChatGPT/Perplexity/Gemini mensualmente
- **LLMrefs.com / Otterly.ai**: Monitoreo automatizado de menciones en LLMs (evaluar)

---

## 9. Roadmap de Ejecución

### Semana 1 (ACTUAL)
- [ ] Completar fix visual (fuente + botones) ← EN CURSO
- [ ] Revisar landing desplegada vs original
- [ ] Configurar Google Search Console
- [ ] Comenzar keyword research con Ahrefs + SE Ranking

### Semana 2
- [ ] Completar keyword research
- [ ] Clasificar keywords por tipo de página y prioridad
- [ ] Decidir qué sectores, ciudades y comparativas crear
- [ ] Comenzar redacción de los 4 artículos legales urgentes

### Semana 3
- [ ] Actualizar datos de `sectores.ts`, `ciudades.ts`, `competidores.ts` con keywords reales
- [ ] Reescribir contenido de templates pSEO con copy optimizado
- [ ] Publicar primeros 4 artículos de blog
- [ ] Configurar Ahrefs Rank Tracker

### Semana 4
- [ ] Publicar artículos 5-8 (transaccionales)
- [ ] Dar de alta en Capterra, SoftDoit, ComparaSoftware
- [ ] Revisar indexación en Search Console
- [ ] Primer análisis de rendimiento

### Semana 5-8
- [ ] Publicar artículos 9-16 (sectores + profundización)
- [ ] Crear páginas de recursos/lead magnets si keyword research lo justifica
- [ ] Iniciar link building (guest posts, directorios)
- [ ] Iterar contenido según datos de Search Console

### Mes 3+
- [ ] Evaluar qué páginas rankean y cuáles no
- [ ] Optimizar páginas con impresiones altas pero CTR bajo (mejorar titles/descriptions)
- [ ] Expandir o podar páginas según rendimiento
- [ ] Escalar producción de contenido según ROI

---

## 10. Decisiones — Resueltas y Pendientes

### Resueltas (19 marzo 2026, basadas en keyword research)

| # | Decisión | Resultado | Datos |
|---|----------|-----------|-------|
| 1 | Qué sectores crear | **7-9 sectores**: sanidad, construcción, educación, admin pública, autónomos, hostelería, comercio + evaluar transporte/industria | Vol total 23.550. Sanidad (7.490) y construcción (5.870) lideran |
| 2 | Crear ciudades | **NO crear páginas de ciudades** | Vol real de "fichaje + [ciudad]" = 0-10. No hay intent local para producto cloud |
| 3 | Qué comparativas crear | **6 comparativas**: Factorial, Sesame, Bizneo, Personio, TramitApp, Kenjo | Todas con brand search >1.000 vol. Las 6 restantes sin volumen |
| 4 | Crear `/recursos/` | **SÍ — 5 páginas iniciales** | 74 KWs sweet spot, KD 3-6. "Plantilla control horario" = 320 vol, KD 5 |
| 5 | Crear `/herramientas/` | **SÍ — 5 herramientas** | "Calculadora horas extras" = 480 vol, KD 3. Engagement altísimo |
| 6 | Crear `/guias/` por tamaño | **POSPONER** — no hay volumen específico | Mejor cubrir tamaño dentro de artículos de blog |

### Pendientes

| # | Decisión | Depende de | Cuándo |
|---|----------|-----------|--------|
| 7 | Formato artículos: TS data files vs MDX | Complejidad contenido | Semana 2 |
| 8 | Lead magnet / email capture en recursos | Estrategia de funnel | Semana 4 |
| 9 | Enriquecer taxonomía de nichos (pSEO 2.0) | Ya podemos empezar | Semana 2-3 |
| 10 | Cambiar DNS a Vercel (fichados.es → Vercel) | Revisión visual completa | Semana 1-2 |
| 11 | Eliminar landing del SPA original | Después de DNS | Semana 3+ |
| 12 | Atacar keywords RRHH general (nóminas, vacaciones, etc.) | Expansión futura del producto | Mes 6+ |

---

## 11. Presupuesto

| Concepto | Coste | Frecuencia |
|----------|-------|------------|
| Vercel Pro | $20/mes | Mensual |
| Ahrefs Starter | $29/mes | Mensual (cancelar tras research si quieres) |
| SE Ranking | (plan actual) | Ya pagado |
| Capterra listing | Gratis (basic) | Una vez |
| Dominio | Ya pagado | — |
| **Total** | **~$49/mes** | — |

---

## Apéndice: Competidores a espiar en Ahrefs (URLs exactas)

```
factorial.es
sesametime.com
bizneo.com
personio.es
kenjo.io
tramitapp.com
kronjop.com
registrahora.es
turnodigital.es
kaicontrol.com
openhr.cloud
jorn-ada.com
```
