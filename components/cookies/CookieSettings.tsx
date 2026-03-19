"use client";

import { useState, useEffect } from 'react';
import { useCookieConsent } from '@/contexts/CookieContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export function CookieSettings() {
  const { showSettings, closeSettings, consent, savePreferences } = useCookieConsent();
  const [preferences, setPreferences] = useState(consent);

  // Sync preferences when consent changes or dialog opens
  useEffect(() => {
    if (showSettings) {
      setPreferences(consent);
    }
  }, [showSettings, consent]);

  const handleSave = () => {
    savePreferences(preferences);
  };

  return (
    <Dialog open={showSettings} onOpenChange={closeSettings}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Configuración de cookies</DialogTitle>
          <DialogDescription>
            Personaliza qué cookies quieres permitir. Las cookies técnicas son necesarias para el funcionamiento del sitio.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Cookies Técnicas */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1 flex-1">
                <Label className="text-base font-medium">
                  Cookies técnicas
                  <span className="ml-2 text-xs text-muted-foreground">(Necesarias)</span>
                </Label>
                <p className="text-sm text-muted-foreground">
                  Cookies esenciales para el correcto funcionamiento del sitio web. Incluyen cookies de autenticación y preferencias de interfaz.
                </p>
              </div>
              <Switch checked={true} disabled />
            </div>
          </div>

          <Separator />

          {/* Cookies de Análisis */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1 flex-1 pr-4">
                <Label htmlFor="analytics" className="text-base font-medium">
                  Cookies de análisis
                </Label>
                <p className="text-sm text-muted-foreground">
                  Nos permiten analizar el uso del sitio web para mejorar el rendimiento y la experiencia del usuario. Incluye Google Analytics.
                </p>
              </div>
              <Switch
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, analytics: checked })
                }
              />
            </div>
          </div>

          <Separator />

          {/* Cookies de Terceros */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1 flex-1 pr-4">
                <Label htmlFor="thirdParty" className="text-base font-medium">
                  Cookies de terceros
                </Label>
                <p className="text-sm text-muted-foreground">
                  Cookies establecidas por servicios externos integrados en nuestro sitio web.
                </p>
              </div>
              <Switch
                id="thirdParty"
                checked={preferences.thirdParty}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, thirdParty: checked })
                }
              />
            </div>
          </div>

          <Separator />

          {/* Cookies de Marketing */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1 flex-1 pr-4">
                <Label htmlFor="marketing" className="text-base font-medium">
                  Cookies de marketing
                </Label>
                <p className="text-sm text-muted-foreground">
                  Utilizadas para mostrar publicidad personalizada basada en tu navegación y preferencias.
                </p>
              </div>
              <Switch
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, marketing: checked })
                }
              />
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={closeSettings} className="w-full sm:w-auto">
            Cancelar
          </Button>
          <Button onClick={handleSave} className="w-full sm:w-auto">
            Guardar preferencias
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
