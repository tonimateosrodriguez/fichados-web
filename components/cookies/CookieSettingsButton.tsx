"use client";

import { useCookieConsent } from '@/contexts/CookieContext';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

export function CookieSettingsButton() {
  const { openSettings } = useCookieConsent();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={openSettings}
      className="fixed bottom-4 right-4 z-40 rounded-full shadow-lg"
      title="Configurar cookies"
    >
      <Cookie className="h-4 w-4" />
    </Button>
  );
}
