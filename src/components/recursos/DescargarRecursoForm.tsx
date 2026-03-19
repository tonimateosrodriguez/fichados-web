"use client";

import { useState } from "react";
import { Download, CheckCircle2, Loader2 } from "lucide-react";

interface DescargarRecursoFormProps {
  recursoSlug: string;
  fileLabel: string;
}

export default function DescargarRecursoForm({
  recursoSlug,
  fileLabel,
}: DescargarRecursoFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/download-recurso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, recursoSlug }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al procesar la solicitud");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error inesperado");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-green-200 bg-green-50/50 p-6">
        <CheckCircle2 className="size-8 text-green-600" />
        <p className="text-center text-base font-semibold text-foreground">
          ¡Revisa tu email!
        </p>
        <p className="text-center text-sm text-muted-foreground">
          Te hemos enviado la plantilla a <strong>{email}</strong>. Revisa tu
          bandeja de entrada (y spam, por si acaso).
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">
        Introduce tu email y te enviamos la plantilla al instante
      </p>
      <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          placeholder="tu@empresa.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Download className="size-4" />
          )}
          {status === "loading" ? "Enviando..." : `Recibir ${fileLabel} gratis`}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}
    </form>
  );
}
