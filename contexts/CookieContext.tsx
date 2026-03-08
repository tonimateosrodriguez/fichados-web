"use client";

import { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { loadConsent, saveConsent, applyCookieConsent, CookieConsent } from '@/utils/cookieConsent';

interface CookieContextType {
  consent: CookieConsent;
  showBanner: boolean;
  showSettings: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: CookieConsent) => void;
  openSettings: () => void;
  closeSettings: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent>(() => loadConsent());
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Si no hay consentimiento previo, mostrar banner después de 5 segundos
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      // Aplicar el consentimiento guardado
      applyCookieConsent(consent);
    }
  }, []);

  const acceptAll = useCallback(() => {
    const newConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      thirdParty: true,
      marketing: true,
    };
    setConsent(newConsent);
    saveConsent(newConsent);
    applyCookieConsent(newConsent);
    setShowBanner(false);
  }, []);

  const rejectAll = useCallback(() => {
    const newConsent: CookieConsent = {
      necessary: true,
      analytics: false,
      thirdParty: false,
      marketing: false,
    };
    setConsent(newConsent);
    saveConsent(newConsent);
    applyCookieConsent(newConsent);
    setShowBanner(false);
  }, []);

  const savePreferences = useCallback((preferences: CookieConsent) => {
    const newConsent = { ...preferences, necessary: true };
    setConsent(newConsent);
    saveConsent(newConsent);
    applyCookieConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  const openSettings = useCallback(() => {
    setShowSettings(true);
    setShowBanner(false);
  }, []);

  const closeSettings = useCallback(() => {
    setShowSettings(false);
  }, []);

  // Memoizar el value para evitar re-renders innecesarios en consumidores
  const value = useMemo(() => ({
    consent,
    showBanner,
    showSettings,
    acceptAll,
    rejectAll,
    savePreferences,
    openSettings,
    closeSettings,
  }), [consent, showBanner, showSettings, acceptAll, rejectAll, savePreferences, openSettings, closeSettings]);

  return (
    <CookieContext.Provider value={value}>
      {children}
    </CookieContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
}
