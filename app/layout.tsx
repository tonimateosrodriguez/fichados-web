import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CookieProvider } from "@/contexts/CookieContext";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { CookieSettings } from "@/components/cookies/CookieSettings";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { organizationSchema, softwareApplicationSchema, faqSchema } from "@/lib/schema";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fichados.es"),
  title: {
    default: "Fichados — Control de fichajes laborales conforme a la ley",
    template: "%s | Fichados",
  },
  description:
    "El sistema de fichaje online obligatorio en España. Cumple el Real Decreto-ley 8/2019. Evita sanciones de hasta 187.515 €. Desde 9€/mes.",
  keywords: [
    "fichaje",
    "control horario",
    "registro jornada",
    "fichaje online",
    "fichaje digital",
    "control de fichajes",
    "ley fichaje",
    "inspección de trabajo",
    "Real Decreto-ley 8/2019",
  ],
  authors: [{ name: "Fichados", url: "https://fichados.es" }],
  creator: "Groove Factory Studios S.L.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://fichados.es",
    siteName: "Fichados",
    title: "Fichados — Cumple la ley de fichaje en 1 minuto",
    description:
      "El sistema de fichaje online obligatorio en España. Evita sanciones de hasta 187.515 €.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fichados — Control de fichajes laborales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fichados — Cumple la ley de fichaje en 1 minuto",
    description:
      "El sistema de fichaje online obligatorio en España. Evita sanciones de hasta 187.515 €.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, softwareApplicationSchema, faqSchema]),
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <CookieProvider>
          {children}
          <CookieBanner />
          <CookieSettings />
        </CookieProvider>
      </body>
    </html>
  );
}
