import Link from "next/link";

const LandingFooter = () => {
  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Columnas principales */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-16">
          {/* Columna 1 – Marca */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold text-foreground mb-4 block">Fichados</span>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Control de fichajes online conforme a la normativa laboral española.
            </p>
            <p className="text-sm text-foreground font-medium italic">
              Cumple la ley. Duerme tranquilo.
            </p>
          </div>

          {/* Columna 2 – Producto */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Producto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/#demo-video" className="hover:text-foreground transition-colors">Demo</a></li>
              <li><a href="/#como-funciona" className="hover:text-foreground transition-colors">Cómo funciona</a></li>
              <li><a href="/#precios" className="hover:text-foreground transition-colors">Precios</a></li>
              <li><a href="/#testimonios" className="hover:text-foreground transition-colors">Testimonios</a></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Columna 3 – Herramientas */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Herramientas</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/herramientas/calculadora-horas-extras" className="hover:text-foreground transition-colors">Calculadora horas extras</Link></li>
              <li><Link href="/herramientas/calculadora-horas-trabajadas" className="hover:text-foreground transition-colors">Calculadora horas trabajadas</Link></li>
              <li><Link href="/herramientas/calculadora-jornada-laboral" className="hover:text-foreground transition-colors">Calculadora jornada laboral</Link></li>
              <li><Link href="/herramientas/calculadora-multas-fichaje" className="hover:text-foreground transition-colors">Calculadora multas fichaje</Link></li>
              <li><Link href="/herramientas/calculadora-coste-fichaje" className="hover:text-foreground transition-colors">Comparador de precios</Link></li>
            </ul>
          </div>

          {/* Columna 4 – Recursos */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Recursos</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/recursos/plantilla-control-horario" className="hover:text-foreground transition-colors">Plantilla control horario</Link></li>
              <li><Link href="/recursos/modelo-registro-jornada" className="hover:text-foreground transition-colors">Modelo registro jornada</Link></li>
              <li><Link href="/recursos/plantilla-turnos-trabajo" className="hover:text-foreground transition-colors">Plantilla turnos trabajo</Link></li>
              <li><Link href="/recursos/plantilla-cuadrante-horario" className="hover:text-foreground transition-colors">Plantilla cuadrante horario</Link></li>
            </ul>
          </div>

          {/* Columna 5 – Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/aviso-legal" className="hover:text-foreground transition-colors">Aviso legal</Link></li>
              <li><Link href="/terminos-condiciones" className="hover:text-foreground transition-colors">Términos y condiciones</Link></li>
              <li><Link href="/politica-privacidad" className="hover:text-foreground transition-colors">Política de privacidad</Link></li>
              <li><Link href="/politica-cookies" className="hover:text-foreground transition-colors">Política de cookies</Link></li>
              <li><Link href="/cumplimiento-rgpd" className="hover:text-foreground transition-colors">Cumplimiento RGPD</Link></li>
            </ul>
          </div>
        </div>

        {/* Bloque de confianza */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-8 mb-8 border-y border-border/50">
          <span className="text-xs text-muted-foreground text-center">Cumple el Real Decreto-ley 8/2019</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/40"></span>
          <span className="text-xs text-muted-foreground text-center">Registros inalterables conservados durante 4 años</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/40"></span>
          <span className="text-xs text-muted-foreground text-center">Datos alojados en la Unión Europea (RGPD)</span>
        </div>

        {/* Cierre del footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; 2026 Fichados. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Hecho por <a href="https://cardeseo.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Cardeseo</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
