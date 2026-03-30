"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

interface LandingHeaderProps {
  /** Navigation items for the landing page sections */
  showSectionLinks?: boolean;
}

const sectionItems = [
  { href: "#demo-video", label: "Demo" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#pricing", label: "Precios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
];

const LandingHeader = (_props: LandingHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-foreground">
            Fichados
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {sectionItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a href="https://app.fichados.es">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                Iniciar sesión
              </Button>
            </a>
            <a href="https://app.fichados.es/registro-empresa" className="hidden sm:block">
              <Button size="sm" className="text-xs sm:text-sm">
                Empezar ahora
              </Button>
            </a>

            {/* Mobile Hamburger Menu */}
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" className="lg:hidden" />
                }
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {sectionItems.map((item) => (
                    <SheetClose
                      key={item.href}
                      render={
                        <a
                          href={item.href}
                          className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                        />
                      }
                    >
                      {item.label}
                    </SheetClose>
                  ))}

                  <div className="border-t border-border pt-4 mt-4 space-y-3">
                    <SheetClose
                      render={
                        <a href="https://app.fichados.es" className="block" />
                      }
                    >
                      <Button variant="outline" className="w-full pointer-events-none">
                        Iniciar sesión
                      </Button>
                    </SheetClose>
                    <SheetClose
                      render={
                        <a href="https://app.fichados.es/registro-empresa" className="block" />
                      }
                    >
                      <Button className="w-full pointer-events-none">
                        Empezar ahora
                      </Button>
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
};

export default LandingHeader;
