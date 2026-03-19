"use client";

import { useState } from "react";
import { Timer, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CalculadoraHorasTrabajadas() {
  const [entrada, setEntrada] = useState("09:00");
  const [salida, setSalida] = useState("18:00");
  const [pausaMinutos, setPausaMinutos] = useState(30);

  const [hEntrada, mEntrada] = entrada.split(":").map(Number);
  const [hSalida, mSalida] = salida.split(":").map(Number);

  const totalMinutos =
    hSalida * 60 + mSalida - (hEntrada * 60 + mEntrada) - pausaMinutos;
  const horasNetas = Math.max(0, totalMinutos / 60);
  const horasSemana = horasNetas * 5;
  const horasMes = horasNetas * 22;

  const formatHoras = (h: number) => {
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    return `${hh}h ${mm}min`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Timer className="size-5 text-primary" />
          Calculadora de horas trabajadas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="text-sm font-medium">Hora de entrada</label>
            <input
              type="time"
              value={entrada}
              onChange={(e) => setEntrada(e.target.value)}
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Hora de salida</label>
            <input
              type="time"
              value={salida}
              onChange={(e) => setSalida(e.target.value)}
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Pausa (minutos)</label>
            <input
              type="number"
              min={0}
              max={180}
              value={pausaMinutos}
              onChange={(e) => setPausaMinutos(Number(e.target.value))}
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <h3 className="mb-4 text-lg font-semibold">Resultado</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Horas netas / día</p>
              <p className="text-2xl font-bold text-primary">
                {formatHoras(horasNetas)}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">
                Horas / semana (x5)
              </p>
              <p className="text-2xl font-bold text-primary">
                {formatHoras(horasSemana)}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">
                Horas / mes (x22)
              </p>
              <p className="text-2xl font-bold text-primary">
                {formatHoras(horasMes)}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://app.fichados.es/registro-empresa"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Registra horas automáticamente con Fichados
            <ChevronRight className="size-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
