# Bulk keyword research — Ahrefs (junio 2026)

Investigación de keywords en bulk para fichados.es, hecha con Ahrefs Keywords Explorer
(`keywords-explorer-matching-terms`, country=ES) el 18/06/2026. Mismo método que el
sprint de Cardeseo: tirar volumen/KD/CPC/intención frescos de Ahrefs y cruzarlos con las
páginas que ya existen para encontrar huecos.

## Qué hay aquí
- `keywords-cluster-fichados.csv` — dataset **curado y deduplicado** (~105 keywords
  relevantes, filtrado el ruido: fútbol "fichaje Real Madrid", dental "cuadrante",
  "fichar el paro", "plantilla horario escolar", Gartner, etc.). Columnas:
  `keyword, volume, kd, cpc_usd_cents, intent, cluster, status, target_page`.
  - `status`: COVERED (ya hay página) · PARTIAL (la cubre una página pero mejorable) ·
    GAP (sin página).
- El análisis y el **backlog priorizado** están en
  `../../../docs/keyword-gap-fichados-2026-06.md`.

## Seeds usados (match_mode=terms)
`cuadrante` · `plantilla horario` · `registro jornada` · `control horario` · `fichaje` ·
`fichar` · `calculadora horas` · `registro jornada` (terms=questions).

## Notas de método
- CPC viene de Ahrefs en **céntimos de USD** (250 = 2,50 $). Divídelo entre 100.
- KD = Keyword Difficulty (0-100). El cluster de Fichados es casi todo **KD < 15**:
  dominio joven puede rankear sin backlinks agresivos.
- `volume` = media mensual últimos 12 meses (España).
- El índice de Ahrefs va **retrasado** para fichados.es (solo ve 1 página rankeando a
  18/06/2026), así que estos volúmenes/KD son del mercado, no del rendimiento del sitio.
  El rendimiento real (posiciones, impresiones, CTR) está en **Google Search Console**.

## No re-hacer
El research de competidores (26.694 keywords de 12 CSVs) ya está en `SEO_PLAN.md` y
`marketing/keywords/competidores/`. Este bulk **valida y prioriza** con datos Ahrefs
frescos; no lo sustituye.
