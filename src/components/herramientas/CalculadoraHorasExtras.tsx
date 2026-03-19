"use client";

import { useState } from "react";
import { Clock, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CalculadoraHorasExtras() {
  const [horasSemanales, setHorasSemanales] = useState(45);
  const [salarioHora, setSalarioHora] = useState(12);

  const horasExtraSemanales = Math.max(0, horasSemanales - 40);
  const horasExtraAnuales = horasExtraSemanales * 52;

  // Primeras 80h/año al 25%, resto al 50%
  const horasPrimer80 = Math.min(horasExtraAnuales, 80);
  const horasResto = Math.max(0, horasExtraAnuales - 80);

  const costePrimer80 = horasPrimer80 * salarioHora * 1.25;
  const costeResto = horasResto * salarioHora * 1.5;
  const costeAnual = costePrimer80 + costeResto;
  const costeMensual = costeAnual / 12;
  const costeSemanal = costeAnual / 52;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="size-5 text-primary" />
          Calculadora de horas extras
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium">
              Horas semanales trabajadas
            </label>
            <input
              type="number"
              min={0}
              max={80}
              value={horasSemanales}
              onChange={(e) => setHorasSemanales(Number(e.target.value))}
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium">
              Salario bruto/hora (euros)
            </label>
            <input
              type="number"
              min={0}
              step={0.5}
              value={salarioHora}
              onChange={(e) => setSalarioHora(Number(e.target.value))}
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <h3 className="mb-4 text-lg font-semibold">Resultado</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">
                Horas extra / semana
              </p>
              <p className="text-2xl font-bold text-primary">
                {horasExtraSemanales}h
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">
                Coste extra / semana
              </p>
              <p className="text-2xl font-bold text-primary">
                {costeSemanal.toFixed(2)} euros
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">
                Coste extra / mes
              </p>
              <p className="text-2xl font-bold text-primary">
                {costeMensual.toFixed(2)} euros
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">
                Coste extra / año
              </p>
              <p className="text-2xl font-bold text-primary">
                {costeAnual.toFixed(2)} euros
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            * Calculo basado en el art. 35 del Estatuto de los Trabajadores:
            recargo del 25% para las primeras 80h/año y del 50% para el resto.
          </p>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://app.fichados.es/registro-empresa"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Controla las horas extras con Fichados
            <ChevronRight className="size-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
