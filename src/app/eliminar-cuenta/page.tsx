"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingFooter from "@/components/landing/LandingFooter";

export default function EliminarCuenta() {
  const [email, setEmail] = useState("");
  const [motivo, setMotivo] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/eliminar-cuenta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, motivo }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al enviar la solicitud");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error inesperado");
    }
  }

  return (
    <>
      <LandingHeader showSectionLinks={false} />
      <div className="min-h-screen bg-background py-12 px-4 pt-28 sm:pt-32">
        <div className="container max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center mb-6 text-sm font-medium hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Solicitar eliminación de cuenta
              </CardTitle>
            </CardHeader>
            <CardContent>
              {status === "success" ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <CheckCircle2 className="size-12 text-green-600" />
                  <h2 className="text-xl font-semibold text-foreground">
                    Solicitud recibida
                  </h2>
                  <p className="text-muted-foreground max-w-md">
                    Hemos recibido tu solicitud de eliminación de cuenta. Te
                    hemos enviado un email de confirmación. Procesaremos tu
                    solicitud en un plazo máximo de 30 días.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-8">
                    <p className="text-muted-foreground text-sm">
                      Si deseas eliminar tu cuenta de Fichados, rellena el
                      siguiente formulario. Procesaremos tu solicitud en un
                      plazo máximo de <strong className="text-foreground">30 días</strong>.
                    </p>

                    <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground space-y-2">
                      <p><strong className="text-foreground">¿Qué datos se eliminan?</strong></p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Datos de perfil (nombre, email, avatar)</li>
                        <li>Datos biométricos (Face ID, si se configuró)</li>
                        <li>Preferencias y configuración</li>
                        <li>Datos de facturación y suscripción</li>
                      </ul>
                      <p className="pt-2"><strong className="text-foreground">¿Qué datos se conservan?</strong></p>
                      <p>
                        Por obligación legal (artículo 34.9 del Estatuto de los
                        Trabajadores), los registros de jornada laboral deben
                        conservarse durante 4 años. Estos registros se
                        anonimizarán para que no estén vinculados a tu identidad.
                      </p>
                    </div>

                    <p className="text-sm text-red-600 font-medium">
                      Esta acción es irreversible. Una vez eliminada la cuenta,
                      no se podrán recuperar los datos.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                        Email de tu cuenta *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>

                    <div>
                      <label htmlFor="motivo" className="block text-sm font-medium text-foreground mb-1.5">
                        Motivo (opcional)
                      </label>
                      <textarea
                        id="motivo"
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}
                        rows={3}
                        placeholder="¿Por qué deseas eliminar tu cuenta?"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-600">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 disabled:opacity-50"
                    >
                      {status === "loading" && <Loader2 className="size-4 animate-spin" />}
                      Solicitar eliminación
                    </button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <LandingFooter />
    </>
  );
}
