export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  thirdParty: boolean;
  marketing: boolean;
}

const CONSENT_KEY = 'cookie-consent';

export function loadConsent(): CookieConsent {
  if (typeof window === 'undefined') return getDefaultConsent();
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return getDefaultConsent();
    }
  }
  return getDefaultConsent();
}

export function saveConsent(consent: CookieConsent): void {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

export function getDefaultConsent(): CookieConsent {
  return {
    necessary: true,
    analytics: false,
    thirdParty: false,
    marketing: false,
  };
}

export function applyCookieConsent(consent: CookieConsent): void {
  // Aplicar configuración de Google Analytics
  if (consent.analytics) {
    enableGoogleAnalytics();
  } else {
    disableGoogleAnalytics();
  }

  // Aquí puedes añadir más servicios según las categorías
  if (consent.marketing) {
    // Activar cookies de marketing
  }

  if (consent.thirdParty) {
    // Activar cookies de terceros
  }
}

function enableGoogleAnalytics(): void {
  // @ts-ignore
  if (window.gtag) {
    // @ts-ignore
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  }
}

function disableGoogleAnalytics(): void {
  // @ts-ignore
  if (window.gtag) {
    // @ts-ignore
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  }
}
