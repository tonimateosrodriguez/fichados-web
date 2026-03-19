import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fichados – Control de fichajes laborales conforme a la ley",
    template: "%s | Fichados",
  },
  description:
    "Fichados es el sistema de fichaje online que cumple con la normativa laboral. Registra entradas y salidas, controla jornadas y automatiza estadísticas desde 19€/mes.",
  metadataBase: new URL("https://fichados.es"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Fichados",
    title: "Fichados – Control de fichajes laborales conforme a la ley",
    description:
      "Sistema de fichaje online obligatorio en España. Cumple el Real Decreto-ley 8/2019. Evita sanciones de hasta 187.515 €.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
