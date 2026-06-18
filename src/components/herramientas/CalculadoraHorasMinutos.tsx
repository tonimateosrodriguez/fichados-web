"use client";

import { useState } from "react";
import { Clock, Plus, Minus, Trash2, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Op = "+" | "-";
type Fila = { id: number; valor: string; op: Op };

function aMinutos(hm: string): number {
  if (!hm) return 0;
  const [h, m] = hm.split(":").map((n) => parseInt(n, 10));
  if (Number.isNaN(h)) return 0;
  return h * 60 + (Number.isNaN(m) ? 0 : m);
}

function formatear(min: number): { hm: string; decimal: string } {
  const negativo = min < 0;
  const abs = Math.abs(min);
  const hh = Math.floor(abs / 60);
  const mm = abs % 60;
  const signo = negativo ? "-" : "";
  return {
    hm: `${signo}${hh}h ${mm.toString().padStart(2, "0")}min`,
    decimal: `${signo}${(abs / 60).toFixed(2).replace(".", ",")} h`,
  };
}

const inputClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";

export default function CalculadoraHorasMinutos() {
  const [modo, setModo] = useState<"sumar" | "diferencia">("sumar");

  // Modo sumar / restar
  const [filas, setFilas] = useState<Fila[]>([
    { id: 1, valor: "08:30", op: "+" },
    { id: 2, valor: "01:15", op: "+" },
  ]);
  const [nextId, setNextId] = useState(3);

  // Modo diferencia entre dos horas
  const [inicio, setInicio] = useState("09:00");
  const [fin, setFin] = useState("17:30");

  const totalSumar = filas.reduce(
    (acc, f) => acc + (f.op === "+" ? aMinutos(f.valor) : -aMinutos(f.valor)),
    0,
  );

  const cruzaMedianoche = aMinutos(fin) < aMinutos(inicio);
  let difMin = aMinutos(fin) - aMinutos(inicio);
  if (difMin < 0) difMin += 24 * 60;

  const r = formatear(modo === "sumar" ? totalSumar : difMin);

  const actualizarFila = (id: number, patch: Partial<Fila>) =>
    setFilas((fs) => fs.map((f) => (f.id === id ? { ...f, ...patch } : f)));
  const anadirFila = () => {
    setFilas((fs) => [...fs, { id: nextId, valor: "00:00", op: "+" }]);
    setNextId((n) => n + 1);
  };
  const borrarFila = (id: number) =>
    setFilas((fs) => (fs.length > 1 ? fs.filter((f) => f.id !== id) : fs));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="size-5 text-primary" />
          Calculadora de horas y minutos
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Selector de modo */}
        <div className="mb-6 inline-flex flex-wrap rounded-lg border border-border p-1">
          <button
            type="button"
            onClick={() => setModo("sumar")}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              modo === "sumar"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sumar y restar horas
          </button>
          <button
            type="button"
            onClick={() => setModo("diferencia")}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              modo === "diferencia"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Diferencia entre dos horas
          </button>
        </div>

        {modo === "sumar" ? (
          <div className="space-y-3">
            {filas.map((f) => (
              <div key={f.id} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    actualizarFila(f.id, { op: f.op === "+" ? "-" : "+" })
                  }
                  aria-label={f.op === "+" ? "Cambiar a restar" : "Cambiar a sumar"}
                  className={`flex size-10 shrink-0 items-center justify-center rounded-md text-white ${
                    f.op === "+" ? "bg-primary" : "bg-red-500"
                  }`}
                >
                  {f.op === "+" ? (
                    <Plus className="size-4" />
                  ) : (
                    <Minus className="size-4" />
                  )}
                </button>
                <input
                  type="time"
                  value={f.valor}
                  onChange={(e) => actualizarFila(f.id, { valor: e.target.value })}
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => borrarFila(f.id)}
                  aria-label="Eliminar fila"
                  className="flex size-10 shrink-0 items-center justify-center rounded-md border border-input text-muted-foreground transition-colors hover:text-red-500"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={anadirFila}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Plus className="size-4" /> Añadir hora
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Hora de inicio</label>
              <input
                type="time"
                value={inicio}
                onChange={(e) => setInicio(e.target.value)}
                className={`mt-1 ${inputClass}`}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Hora de fin</label>
              <input
                type="time"
                value={fin}
                onChange={(e) => setFin(e.target.value)}
                className={`mt-1 ${inputClass}`}
              />
            </div>
          </div>
        )}

        {/* Resultado */}
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <h3 className="mb-4 text-lg font-semibold">Resultado</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Horas y minutos</p>
              <p className="text-2xl font-bold text-primary">{r.hm}</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">En decimal</p>
              <p className="text-2xl font-bold text-primary">{r.decimal}</p>
            </div>
          </div>
          {modo === "diferencia" && cruzaMedianoche && (
            <p className="mt-3 text-sm text-muted-foreground">
              * La hora de fin es anterior a la de inicio: se calcula cruzando la
              medianoche (turno de noche).
            </p>
          )}
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://app.fichados.es/registro-empresa"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Calcula las horas de tu equipo automáticamente con Fichados
            <ChevronRight className="size-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
