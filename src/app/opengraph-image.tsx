import { ImageResponse } from "next/og";

// Imagen Open Graph por defecto para TODO el sitio (1200x630).
// Vive en src/app/ → se aplica como og:image de cualquier ruta que no
// defina la suya. Resuelve el "Open Graph tags incomplete" del Site Audit.
export const alt =
  "Fichados – Control de fichajes laborales conforme a la ley";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1f33 0%, #1e3a8a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: "-1px",
          }}
        >
          <span style={{ color: "#3b82f6" }}>●</span>
          <span style={{ marginLeft: 16 }}>Fichados</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Control de fichajes que cumple la ley
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "#cbd5e1",
            maxWidth: 900,
          }}
        >
          Registro de jornada (RDL 8/2019) desde 9 EUR/mes. Sin permanencia.
        </div>
      </div>
    ),
    { ...size },
  );
}
