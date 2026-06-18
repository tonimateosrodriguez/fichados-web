# Análisis SEO + keyword gap de fichados.es — junio 2026

**Fecha:** 18/06/2026 · **Datos:** Ahrefs Keywords Explorer (ES) + inventario del repo.
**Dataset:** [`marketing/keywords/ahrefs-bulk-2026-06/`](../marketing/keywords/ahrefs-bulk-2026-06/).

---

## 0. Resumen ejecutivo

fichados.es **empieza a rankear y a convertir**: #1 en "plantilla cuadrante horario",
descargas constantes de plantillas por email (Resend) y **2 ventas orgánicas**. El sitio
ya está muy construido (≈46 páginas: landing, 10 blog, 7 sectores, 6 comparativas, 5
recursos, 5 herramientas) con schema, sitemap, funnel de lead magnet y todo el tooling.

**El problema NO es falta de páginas: es indexación + exprimir lo que ya funciona.**
Ahrefs solo ve **1 página rankeando** (la de cuadrante horario) — retraso de índice típico
de un dominio joven. El rendimiento real está en **Google Search Console**, no en Ahrefs.

**Las 5 jugadas de mayor ROI** (detalle abajo):
1. **Herramienta "calculadora de horas / sumar horas y minutos"** — el mayor hueco del
   dataset: ~16.000 búsquedas/mes (8.500 + 3.400 + 2.700 + 1.000) a **KD 1-4**. No
   existe. Imán de tráfico + backlinks + retargeting.
2. **Landing/pillar de normativa "fichaje digital obligatorio" (1.400, KD 0)** y
   **"control horario digital obligatorio" (800, KD 0)** — volumen alto, KD 0, intención
   comercial. Ventana de la reforma 2026.
3. **Recurso nuevo "plantilla horario semanal" (800, KD 1)** — otro lead magnet que
   convierte, distinto del cuadrante.
4. **Cluster blog "fichar en el trabajo"** (800 KD2 + "app/aplicaciones para fichar" +
   "es obligatorio fichar" ≈ 2.500/mes más) — sin página propia hoy.
5. **Comparativas que faltan**: intratime (600), woffu (250), "mejor app control horario
   gratis" (400, KD 4).

---

## 1. Estado del SEO actual (lo que ya se hizo)

| Tipo | Nº | Cobertura | Notas |
|------|----|-----------|-------|
| Landing `/` | 1 | control horario / software / app | schema SoftwareApplication + FAQ |
| Blog `/blog` | 10 | normativa/registro jornada muy bien | huecos en "fichar en el trabajo" y apps |
| Sectores `/sectores` | 7 | hostelería, construcción, sanidad, educación, admin pública, comercio, autónomos | OK |
| Comparativas `/comparar` | 6 | factorial, sesame, bizneo, personio, tramitapp, kenjo | faltan intratime/woffu/mejor-app |
| Recursos `/recursos` | 5 | control horario, registro jornada, registro horario, turnos, cuadrante | falta "horario semanal" + variantes PDF |
| Herramientas `/herramientas` | 5 | horas extras, horas trabajadas, jornada, multas, coste | **falta "calculadora de horas" genérica** |

**Funnel vivo:** descarga plantilla → email (Resend `recursos@fichados.es`) → lead en
Supabase (`leads`) → CTA a `app.fichados.es`. **Sin secuencia de nurturing** todavía
(hoy 1 email y fin) — palanca directa para multiplicar las 2 ventas.

**Dato real Ahrefs (18/06):** `fichados.es` org_keywords=6, tráfico=17, **1 sola página
indexada con rankings** (`/recursos/plantilla-cuadrante-horario`, posiciones 4-10 para 6
variantes de "cuadrante"). El resto del sitio aún no aparece en el índice de Ahrefs →
**hay que mirar GSC para saber qué está realmente indexado** (Fase 1).

---

## 2. Fase 1 — Conectar datos reales (pasos para Toni)

Ahrefs no tiene a fichados.es como proyecto (solo Cardeseo), por eso sus tools de GSC
devuelven vacío. Dos pasos manuales que **desbloquean el dato real** y el seguimiento:

1. **Añadir fichados.es como proyecto en Ahrefs** (gratis, está incluido):
   Ahrefs → Dashboard → *New project* → `fichados.es` (modo *subdomains*) →
   conectar **Google Search Console** y **Google Analytics 4** cuando lo pida.
   Esto activa `gsc-pages`, `gsc-keywords`, `gsc-performance-*` y el Rank Tracker, y
   permite que en próximas sesiones yo tire el rendimiento real desde aquí.
2. **Export rápido de GSC** (mientras tanto): Search Console → fichados.es →
   *Rendimiento* → últimos 28 días → exportar **Consultas** y **Páginas**; y
   *Indexación → Páginas* para ver cuántas están **Indexadas** vs **Detectada/Rastreada
   no indexada**. Pásame el export (o dime los números) y completo el análisis de
   indexación + las keywords "a tiro" (posiciones 5-20) para optimizar títulos.

> Con eso sabremos exactamente **qué páginas faltan por indexar** (para re-enviarlas) y
> **qué páginas ya traen las descargas/ventas** (para clonar el patrón).

---

## 3. Backlog priorizado (el "posicionar más")

Prioridad = volumen × winnability (KD bajo) × encaje en el funnel (lead magnet o intención
comercial). **P0 = hacer ya.**

### P0 — Quick wins de máximo impacto
| # | Acción | Keyword principal | Vol/KD | Tipo |
|---|--------|-------------------|--------|------|
| 1 | **Herramienta "Calculadora de horas y minutos"** (sumar/restar horas) | calculadora de horas | 8.500 / 1 | `/herramientas` nueva |
| 2 | **Landing/pillar "Fichaje digital obligatorio 2026"** | fichaje digital obligatorio | 1.400 / 0 | landing normativa |
| 3 | **Recurso "Plantilla horario semanal" (Excel)** | plantilla horario semanal | 800 / 1 | `/recursos` nuevo (lead magnet) |
| 4 | **Pillar "Control horario digital obligatorio"** | control horario digital obligatorio | 800 / 0 | landing/post normativa |
| 5 | **Post pilar "Fichar en el trabajo: guía"** + interlink | fichar en el trabajo | 800 / 2 | blog |

### P1 — Alto valor, segunda oleada
| # | Acción | Keyword(s) | Vol/KD |
|---|--------|-----------|--------|
| 6 | Post "Apps para fichar en el trabajo (gratis y de pago)" | aplicaciones/app para fichar en el trabajo | 450/4 + 350/16 + 200/3 |
| 7 | Comparativa **vs Intratime** | intratime control horario / fichaje web | 600/0 + 600/0 |
| 8 | Post/hub "Mejor app de control horario gratis" | mejor app control horario gratis | 400/4 |
| 9 | Post "Nueva ley de control horario 2026 (BOE)" | nueva ley control horario trabajadores / ley fichaje digital boe | 300/5 + 350 |
| 10 | Post/landing "Control horario para pymes y empresas pequeñas" (ICP) | control horario empresas pequeñas / pymes | 300/0 + 100/0 |
| 11 | Comparativa **vs Woffu** | woffu control horario | 250/1 |
| 12 | Variantes PDF imprimibles en recursos de registro jornada | registro diario de jornada pdf / hoja para imprimir | 300/0 + 150/0 |

### P2 — Cola larga / GEO (lotes baratos)
- Posts long-tail "control horario gratuito / software gratuito / programas de control
  horario" (150-350, KD 3-7).
- Posts "fichar con el móvil", "formas de fichar en el trabajo", "máquina/aparato para
  fichar" (hardware vs app) — 150-200, KD 0.
- **GEO / FAQ** (respuestas en IA y featured snippets), llevar al cuerpo visible:
  "es obligatorio fichar en el trabajo", "es válido el registro en papel", "cuánto tiempo
  guardar el registro", "desde cuándo es obligatorio", "cómo rellenar la hoja de registro".
- Evaluar comparativas vs Sage / Holded / Day.control / Bixpe (brand, intención mixta).

> **Nota de cobertura:** las plantillas de control horario, cuadrante, turnos y registro
> jornada **ya están cubiertas** (una sola página rankea para muchas variantes — la de
> cuadrante ya rankea para 6). El hueco de recursos real es **"horario semanal"** + ofrecer
> versiones **PDF imprimibles** en las plantillas existentes (muchas búsquedas piden "pdf"
> / "para imprimir").

---

## 4. ⚠️ Flags de precisión de copy (corregir antes de escalar)

El `CLAUDE.md` del repo dice que Fichados **NO hace** "gestión de turnos rotativos
automatizada" ni "terminales biométricos físicos". Pero el copy actual promete de más:

- `recursos.ts` → `plantilla-turnos-trabajo`, FAQ 3: *"Fichados permite crear patrones de
  turnos rotativos que se asignan automáticamente."* → **contradice** la lista de funciones.
- `recursos.ts` → `plantilla-cuadrante-horario`, FAQ 3: *"Con Fichados puedes crear
  cuadrantes horarios digitales… el fichaje queda vinculado al horario planificado."* →
  revisar si el producto lo hace de verdad.

**Acción:** ajustar esas FAQ a lo que el producto sí hace (fichaje, panel, informes,
geolocalización, gestión de ausencias) — coherente con la regla de honestidad de copy. No
prometer funcionalidades inexistentes en una empresa cuyo gancho es "cumplir la ley".

---

## 5. Próximas oleadas (ejecución)

1. **Oleada 1 (P0):** herramienta calculadora de horas + recurso plantilla horario semanal
   + landing fichaje/control horario digital obligatorio + post "fichar en el trabajo".
   Todo programático vía `src/data/*.ts` (+ Excel real en `/public/recursos/` para el
   recurso). Build → sitemap → solicitar indexación en GSC.
2. **Oleada 2 (P1):** apps para fichar, comparativa Intratime/Woffu, normativa 2026, ICP
   pymes, variantes PDF.
3. **Oleada 3 (P2 + conversión):** cola larga + GEO/FAQ + **secuencia de nurturing**
   (Resend, 3-4 emails desde los leads de Supabase) + reforzar interlinking para que el
   resto del sitio se indexe.

**Verificación de cada oleada:** `npm run build` OK · URLs nuevas en `/sitemap.xml` ·
schema válido (Rich Results Test) · indexación solicitada en GSC · (recursos) email de
descarga probado en privado antes de publicar.
