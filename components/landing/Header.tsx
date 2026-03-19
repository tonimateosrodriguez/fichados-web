"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <span className="text-xl sm:text-2xl font-bold text-foreground">
            Fichados
          </span>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#demo-video"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </a>
            <a
              href="#riesgos"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Riesgos
            </a>
            <a
              href="#como-funciona"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#como-empezar"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cómo empezar
            </a>
            <a
              href="#pricing"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Precios
            </a>
            <a
              href="#testimonios"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonios
            </a>
            <a
              href="#faq"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a href="https://app.fichados.es">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                Iniciar sesión
              </Button>
            </a>
            <a
              href="https://app.fichados.es/registro-empresa"
              className="hidden sm:block"
            >
              <Button size="sm" className="text-xs sm:text-sm">
                Empezar ahora
              </Button>
            </a>

            {/* Mobile Hamburger Menu */}
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                }
              />
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <SheetClose
                    render={
                      <a
                        href="#demo-video"
                        className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        Demo
                      </a>
                    }
                  />
                  <SheetClose
                    render={
                      <a
                        href="#riesgos"
                        className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        Riesgos
                      </a>
                    }
                  />
                  <SheetClose
                    render={
                      <a
                        href="#como-funciona"
                        className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        Cómo funciona
                      </a>
                    }
                  />
                  <SheetClose
                    render={
                      <a
                        href="#como-empezar"
                        className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        Cómo empezar
                      </a>
                    }
                  />
                  <SheetClose
                    render={
                      <a
                        href="#pricing"
                        className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        Precios
                      </a>
                    }
                  />
                  <SheetClose
                    render={
                      <a
                        href="#testimonios"
                        className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        Testimonios
                      </a>
                    }
                  />
                  <SheetClose
                    render={
                      <a
                        href="#faq"
                        className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        FAQ
                      </a>
                    }
                  />

                  <div className="border-t border-border pt-4 mt-4 space-y-3">
                    <SheetClose>
                      <a href="https://app.fichados.es" className="block">
                        <Button variant="outline" className="w-full">
                          Iniciar sesión
                        </Button>
                      </a>
                    </SheetClose>
                    <SheetClose>
                      <a
                        href="https://app.fichados.es/registro-empresa"
                        className="block"
                      >
                        <Button className="w-full">Empezar ahora</Button>
                      </a>
                    </SheetClose>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
