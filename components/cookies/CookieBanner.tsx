"use client";

import { useCookieConsent } from '@/contexts/CookieContext';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

export function CookieBanner() {
  const { showBanner, acceptAll, rejectAll, openSettings } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50 p-3 bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg animate-fade-in">
      <div className="flex items-center gap-3">
        <Cookie className="w-5 h-5 text-primary flex-shrink-0" />
        <p className="text-xs text-muted-foreground flex-1">
          Usamos cookies.{" "}
          <a href="/politica-cookies" className="text-primary hover:underline">
            Más info
          </a>
        </p>
        <div className="flex gap-1.5 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={openSettings}
            className="h-7 px-2 text-xs"
          >
            Configurar
          </Button>
          <Button
            size="sm"
            onClick={acceptAll}
            className="h-7 px-2.5 text-xs"
          >
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
}
