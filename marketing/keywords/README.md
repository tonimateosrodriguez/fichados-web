# Keywords organicas de competidores

## Contenido

Esta carpeta contiene 12 CSVs exportados de SE Ranking (Competitive Research) en marzo de 2026. Cada archivo corresponde a las keywords organicas de un competidor directo o indirecto de Fichados en el mercado espanol de software de fichaje.

**Total: 275.804 filas** (antes de deduplicar).

## Archivos

| Archivo | Competidor | Perfil |
|---------|-----------|--------|
| factorial.es.csv | Factorial | Suite RRHH, blog masivo |
| sesametime.com.csv | Sesame HR | Contenido legal, comparativas |
| bizneo.com.csv | Bizneo HR | Suite RRHH, alto volumen |
| personio.es.csv | Personio | Marca fuerte, multinacional |
| kenjo.io.csv | Kenjo | Nicho fichaje |
| tramitapp.com.csv | TramitApp | Comparativas, blog activo |
| openhr.cloud.csv | OpenHR | RRHH cloud |
| kronjop.com.csv | Kronjop | Emergente 2026 |
| jorn-ada.com.csv | Jorn-ada | Gestion jornada |
| kaicontrol.com.csv | KaiControl | Control horario |
| turnodigital.es.csv | TurnoDigital | Turnos digitales |
| registrahora.es.csv | RegistraHora | Nicho puro fichaje |

## Columnas de SE Ranking

Cada CSV tiene las siguientes columnas:

| Columna | Descripcion |
|---------|------------|
| Palabra clave | La keyword por la que el competidor rankea |
| Dificultad | Keyword Difficulty (0-100) segun SE Ranking |
| Posicion | Posicion actual en Google.es |
| Posicion anterior | Posicion en el periodo anterior |
| Posicion de las Funciones SERP | Posicion dentro de features SERP (si aplica) |
| Vol. de busqueda | Volumen de busqueda mensual estimado (Espana) |
| Intencion de busqueda | Tipo de intencion (informacional, transaccional, etc.) |
| Funciones SERP | Que features SERP aparecen (featured snippet, PAA, etc.) |
| Competencia | Nivel de competencia en paid search (0-1) |
| CPC | Coste por clic estimado en Google Ads |
| URL | La URL del competidor que rankea para esa keyword |
| Trafico | Trafico organico estimado que recibe esa URL por esa keyword |
| Cuota del trafico | Porcentaje del trafico total del dominio que aporta esa keyword |
| Coste del trafico | Valor equivalente en CPC del trafico organico recibido |

## Como usar estos datos con Claude Code

### Ver las columnas de un CSV
```
Lee las primeras 5 lineas de marketing/keywords/competidores/factorial.es.csv
```

### Encontrar keywords de un competidor con volumen alto
```
En el CSV de factorial.es, busca todas las keywords con volumen de busqueda > 500 y dificultad < 20. Ordenalas por volumen descendente.
```

### Comparar keywords entre competidores
```
Compara las keywords de factorial.es.csv y sesametime.com.csv. Encuentra las keywords que ambos tienen en top 10 y que tengan volumen > 100.
```

### Buscar oportunidades por intencion
```
En los CSVs de competidores, busca keywords transaccionales (que contengan "software", "app", "programa", "precio", "mejor") con KD < 15 y volumen > 50.
```

### Analizar un sector especifico
```
Busca en todos los CSVs keywords que contengan "hosteleria", "restaurante" o "hotel". Agrupa por keyword unica, sumando el volumen.
```

## Contexto adicional

- Los datos se cruzaron con Ahrefs para las top 66 keywords (ver SEO_PLAN.md seccion 3)
- El analisis completo con decisiones esta en SEO_PLAN.md
- Los datos procesados y deduplicados (26.694 keywords unicas) se resumen en SEO_PLAN.md seccion 3.1
