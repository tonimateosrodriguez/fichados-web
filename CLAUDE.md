# fichados-web

Web SEO de Fichados (fichados.es). Landing pages, blog, comparativas, paginas de sectores y herramientas orientadas a captar trafico organico y convertir visitas en registros.

**Stack:** Next.js 16 + Tailwind CSS + Vercel (deploy automatico al pushear a main).

**Dos publicos trabajan con este repo:**
- **Desarrolladores** -- tocan codigo, componentes, configuracion del framework.
- **Equipo de marketing** -- crean contenido, analizan keywords, gestionan el calendario editorial.

Las instrucciones estan separadas para cada perfil.

---

## Instrucciones tecnicas (desarrollo)

### Next.js 16

Esta version tiene breaking changes respecto a versiones anteriores. Antes de escribir cualquier codigo, consulta la documentacion en `node_modules/next/dist/docs/`. Presta atencion a los deprecation notices.

### Estructura del proyecto

| Carpeta | Contenido |
|---------|-----------|
| `src/app/` | Paginas y rutas (App Router de Next.js) |
| `src/components/` | Componentes React reutilizables |
| `src/data/` | Datos estaticos: articulos, sectores, competidores |
| `src/lib/` | Utilidades y helpers |
| `marketing/` | Documentos de marketing: keywords, briefs, calendario |

### Comandos

- `npm run dev` -- servidor local en puerto 3000
- `npm run build` -- build de produccion
- `npm run lint` -- linter

### Deploy

Vercel despliega automaticamente al pushear a la rama `main`. No se necesita ningun paso manual.

---

## Contexto de marketing

### Que es Fichados

SaaS espanol de fichaje laboral para pymes. Cumple el Real Decreto-ley 8/2019 que obliga a todas las empresas en Espana a registrar la jornada de sus empleados. Multas por incumplimiento: de 626 EUR a 187.515 EUR.

### Cliente ideal (ICP)

- Gerente o responsable de RRHH de una pyme de 5 a 50 empleados en Espana.
- Pain principal: evitar multas de la Inspeccion de Trabajo.
- Valora simplicidad por encima de todo. No quiere un software complejo de RRHH.
- Normalmente no tiene departamento de IT ni de RRHH dedicado.

### Tono de comunicacion

- Cercano pero profesional. Tutear al lector.
- Espanol de Espana (no latinoamericano).
- Sin tecnicismos innecesarios. Si se usa un termino legal, explicarlo.
- Orientado al beneficio, no a la funcionalidad. "Evita multas" en vez de "sistema de registro de jornada con trazabilidad".
- Datos concretos siempre que sea posible (precios, plazos, cifras de sanciones).

### Precios

- 9 EUR/mes (incluye hasta 3 empleados) + 3 EUR/empleado adicional.
- Sin permanencia. Cancelacion en cualquier momento.
- 20% de descuento en el plan anual.
- No hay proceso de ventas: el cliente se registra y empieza a usar la app directamente.

### Competidores principales

| Competidor | Tipo | Diferencia con Fichados |
|-----------|------|------------------------|
| Factorial | Suite RRHH grande | Mucho mas caro, requiere demo, permanencia 12 meses |
| Sesame HR | Control horario + RRHH | Mas caro, permanencia, mas complejo |
| Bizneo HR | Suite RRHH completa | Orientado a empresas grandes, precio bajo consulta |
| Personio | RRHH multinacional | Enfocado a empresas medianas-grandes, precio alto |
| TramitApp | Fichaje + gestion laboral | Precio similar pero mas funciones innecesarias |
| Kenjo | Nicho fichaje | Precio superior, permanencia |

### Diferenciadores de Fichados

1. **Precio mas bajo del mercado.** 9 EUR/mes + 3 EUR/empleado vs 4-8 EUR/empleado de la competencia.
2. **Setup en 5 minutos.** Sin implementacion, sin formacion, sin demo comercial.
3. **Sin proceso de ventas.** El cliente se registra solo. No hay que hablar con nadie.
4. **Sin permanencia.** Mes a mes, cancela cuando quieras.
5. **Enfocado solo en fichaje.** No es una suite RRHH generica con 50 modulos que no necesitas.

---

## Donde estan los datos

| Recurso | Ubicacion |
|---------|-----------|
| Keywords de competidores | `marketing/keywords/competidores/` (12 CSVs, 275.804 filas) |
| Plan SEO completo | `SEO_PLAN.md` (decisiones, clusters, roadmap, volumenes) |
| Datos de sectores | `src/data/sectores.ts` |
| Datos de competidores | `src/data/competidores.ts` |
| Articulos del blog | `src/data/blogArticles.ts` |
| Calendario editorial | `marketing/calendario/calendario_contenidos.md` |
| Briefs de articulos | `marketing/briefs/` |
| Plantilla de brief | `marketing/briefs/plantilla_brief.md` |
| Analisis de competencia | `marketing/competencia/README.md` |
| Documentacion de keywords | `marketing/keywords/README.md` |

---

## Instrucciones para el equipo de marketing

### Como crear un brief para un articulo nuevo

1. Copiar `marketing/briefs/plantilla_brief.md` con el nombre del articulo (ej. `fichaje-hosteleria.md`).
2. Rellenar todos los campos: keyword, volumen, estructura de H2s, competidores que rankean.
3. Consultar `SEO_PLAN.md` secciones 3.2 a 3.8 para encontrar keywords con volumen y KD.
4. Marcar el estado como "Brief creado".

### Como actualizar el calendario

Editar `marketing/calendario/calendario_contenidos.md`. Cambiar el estado del articulo segun avance:
- `[ ] Pendiente` -- aun no se ha empezado
- `[ ] Redactado` -- primer borrador listo
- `[ ] Revisado` -- revisado por Toni
- `[PUBLICADO]` -- live en fichados.es, con fecha

### Como analizar keywords con Claude Code

Ejemplos de prompts utiles:

**Buscar oportunidades faciles:**
```
En los CSVs de marketing/keywords/competidores/, busca keywords con volumen > 200, dificultad < 15 y que contengan "fichaje" o "control horario". Ordena por volumen descendente.
```

**Analizar un competidor concreto:**
```
Lee el CSV de factorial.es.csv y dame las 20 keywords con mas trafico estimado. Indica la URL que rankea para cada una.
```

**Encontrar gaps de contenido:**
```
Compara las keywords de los CSVs de competidores con los articulos que ya tenemos en src/data/blogArticles.ts. Que keywords con volumen > 100 no estamos cubriendo?
```

**Investigar un sector:**
```
En todos los CSVs, busca keywords relacionadas con "construccion" u "obra". Agrupa por keyword unica, muestra volumen y dificultad.
```

### Que NO hacer

- **No tocar** `src/app/`, `src/components/`, ni ningun archivo TypeScript de codigo.
- **No modificar** configuraciones del proyecto (next.config, tailwind.config, package.json).
- **Solo tocar:**
  - `marketing/` -- briefs, calendario, documentacion de keywords.
  - `src/data/blogArticles.ts` -- para anadir nuevos articulos del blog (siguiendo el formato existente).
  - `src/data/sectores.ts` -- para actualizar datos de sectores (siguiendo el formato existente).
  - `src/data/competidores.ts` -- para actualizar datos de comparativas (siguiendo el formato existente).

---

## Funcionalidades REALES de Fichados

Lista exacta de lo que Fichados hace y no hace. El equipo de marketing debe ceñirse a esta lista para no prometer funcionalidades inexistentes.

### Lo que Fichados SI hace

- Fichaje de entrada, salida y pausas desde cualquier dispositivo (movil, tablet, ordenador).
- Panel de administracion para ver fichajes de todos los empleados en tiempo real.
- Gestion de ausencias: vacaciones, permisos, bajas.
- Informes exportables en PDF y Excel, listos para una inspeccion de trabajo.
- Geolocalizacion opcional en cada fichaje (para equipos en movilidad).
- Registros inalterables conservados durante mas de 4 anos (cumplimiento legal).
- Invitacion de empleados por email (alta inmediata).
- Acceso del empleado a su propio historial de fichajes.

### Lo que Fichados NO hace

- Nominas ni gestion salarial.
- Reclutamiento ni seleccion de personal.
- Evaluaciones de desempeno.
- Onboarding de empleados.
- Modo offline (requiere conexion a internet).
- Gestion de turnos rotativos automatizada.
- Soporte para terminales biometricos fisicos (huella, facial en hardware dedicado).
- Integracion con ERPs o software de nominas.
