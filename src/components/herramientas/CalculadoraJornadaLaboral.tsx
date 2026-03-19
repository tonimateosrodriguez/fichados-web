"use client";

import { useState } from "react";
import { CalendarDays, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TipoJornada = "completa" | "reducida" | "parcial";

export default function CalculadoraJornadaLaboral() {
  const [tipo, setTipo] = useState<TipoJornada>("completa");
  const [horasParcial, setHorasParcial] = useState(20);

  const horasSemanales =
    tipo === "completa" ? 40 : tipo === "reducida" ? 37.5 : horasParcial;
  const horasDiarias = horasSemanales / 5;
  const horasMensuales = horasDiarias * 22;
  // 52 semanas - 14 festivos (en dias) ajustados
  const diasLaborables = 220;
  const horasAnuales = horasDiarias * diasLaborables;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="size-5 text-primary" />
          Calculadora de jornada laboral
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium">Tipo de jornada</label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value as TipoJornada)}
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="completa">Completa (40h/semana)</option>
              <option value="reducida">Reducida (37,5h/semana)</option>
              <option value="parcial">Parcial (personalizada)</option>
            </select>
          </div>
          {tipo === "parcial" && (
            <div>
              <label className="text-sm font-medium">
                Horas semanales pactadas
              </label>
              <input
                type="number"
                min={1}
                max={40}
                value={horasParcial}
                onChange={(e) => setHorasParcial(Number(e.target.value))}
                className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          )}
        </div>

        {tipo === "reducida" && (
          <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-3">
            <p className="text-sm text-blue-800">
              La reforma de las 37,5 horas semanales esta prevista para 2026.
              Supondra trabajar unas 107 horas menos al año sin reduccion
              salarial.
            </p>
          </div>
        )}

        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <h3 className="mb-4 text-lg font-semibold">Resultado</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Horas / semana</p>
              <p className="text-2xl font-bold text-primary">
                {horasSemanales}h
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Horas / dia</p>
              <p className="text-2xl font-bold text-primary">
                {horasDiarias.toFixed(1)}h
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Horas / mes</p>
              <p className="text-2xl font-bold text-primary">
                {horasMensuales.toFixed(0)}h
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">
                Horas / año (~{diasLaborables} dias lab.)
              </p>
              <p className="text-2xl font-bold text-primary">
                {horasAnuales.toFixed(0)}h
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://app.fichados.es/registro-empresa"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Controla la jornada con Fichados
            <ChevronRight className="size-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
