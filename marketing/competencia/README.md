# Analisis de competidores

Los datos de competidores estan distribuidos en tres ubicaciones segun su proposito:

## 1. Datos estructurados para las paginas web

**Archivo:** `src/data/competidores.ts`

Contiene los datos que se renderizan en las paginas `/comparar/fichados-vs-[competidor]`. Incluye nombre, features, precios, pros, contras y diferenciadores de cada competidor frente a Fichados.

Estos datos los usa el equipo de desarrollo para generar las paginas comparativas.

## 2. Decisiones estrategicas y volumenes

**Archivo:** `SEO_PLAN.md` (seccion 3.3 — Comparativas por marca competidora)

Contiene:
- Volumen de busqueda por marca (SE Ranking + Ahrefs)
- Numero de keywords donde cada competidor rankea
- Decision de crear o no pagina `/comparar/` para cada uno
- Top keyword de cada marca

**Decision tomada:** Crear 6 comparativas para Factorial, Sesame, Bizneo, Personio, TramitApp y Kenjo.

No crear comparativas para OpenHR, Kronjop, KaiControl, TurnoDigital ni RegistraHora (sin volumen de busqueda relevante).

## 3. CSVs completos de keywords organicas

**Carpeta:** `marketing/keywords/competidores/`

12 archivos CSV con todas las keywords organicas de cada competidor, exportados de SE Ranking en marzo 2026. Total: 275.804 filas.

Ver `marketing/keywords/README.md` para documentacion detallada de columnas y ejemplos de uso.

## Competidores principales

| Competidor | Tipo | Pagina comparativa |
|-----------|------|-------------------|
| Factorial | Suite RRHH grande | Si - `/comparar/fichados-vs-factorial` |
| Sesame HR | Control horario + RRHH | Si - `/comparar/fichados-vs-sesame` |
| Bizneo HR | Suite RRHH completa | Si - `/comparar/fichados-vs-bizneo` |
| Personio | RRHH multinacional | Si - `/comparar/fichados-vs-personio` |
| TramitApp | Fichaje + gestion laboral | Si - `/comparar/fichados-vs-tramitapp` |
| Kenjo | Nicho fichaje | Si - `/comparar/fichados-vs-kenjo` |
| OpenHR | RRHH cloud | No (sin volumen) |
| Kronjop | Emergente | No (sin volumen) |
| KaiControl | Control horario | No (sin volumen) |
| TurnoDigital | Turnos | No (sin volumen) |
| RegistraHora | Nicho fichaje | No (sin volumen) |
