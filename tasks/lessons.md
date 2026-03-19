# Lecciones Aprendidas — Fichados Web

## Reglas OBLIGATORIAS para cada página nueva

### 1. Tildes y ñ — SIEMPRE
- Todo texto en español DEBE llevar tildes correctas (á, é, í, ó, ú, ñ, ü)
- Palabras frecuentes: según, artículo, número, información, gestión, móvil, automático, más, días, reducción, inspección
- Preguntas: ¿Cuál?, ¿Cuánto?, ¿Cómo?, ¿Qué?, ¿Por qué?
- "Sí" (afirmación) lleva tilde. "Si" (condicional) no.

### 2. Pricing de Fichados — NO es gratis
- **19 €/mes** hasta 5 empleados
- **+3 €/empleado** adicional
- NO usar: "Prueba gratis", "free trial", "gratis" (excepto "crear cuenta gratis" que se refiere al registro)

### 3. CTAs — Usar los de la homepage, no inventar
- "Cumple la ley hoy" (hero principal)
- "Empezar ahora" (header)
- "Quiero dormir tranquilo" (FAQ)
- "Crear cuenta gratis" (bottom CTA — gratis = el registro, no el servicio)
- Link siempre: `https://app.fichados.es/registro-empresa`

### 4. FAQ — Estilo idéntico a homepage
```
section: bg-muted/30
Accordion: className="space-y-4"
AccordionItem: className="bg-card rounded-lg border border-border px-6"
AccordionTrigger: className="text-left text-foreground hover:no-underline py-5"
AccordionContent: className="text-muted-foreground pb-5"
```

### 5. Header en sub-páginas
- Siempre: `<LandingHeader showSectionLinks={false} />`
- Añadir `pt-20 sm:pt-24` al `<main>` para compensar header fixed

### 6. Consistencia visual
- Alternar secciones: `bg-background` y `bg-muted/30` (como homepage)
- No cambiar estilos entre páginas — mantener coherencia
- Ante la duda, consultar al usuario
