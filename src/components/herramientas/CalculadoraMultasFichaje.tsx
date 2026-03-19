"use client";

import { useState } from "react";
import { ShieldAlert, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TipoInfraccion = "leve" | "grave" | "muy-grave";

const rangos: Record<TipoInfraccion, { min: number; max: number; label: string }> = {
  leve: { min: 60, max: 625, label: "Leve" },
  grave: { min: 626, max: 6250, label: "Grave" },
  "muy-grave": { min: 6251, max: 187515, label: "Muy grave" },
};

export default function CalculadoraMultasFichaje() {
  const [empleados, setEmpleados] = useState(10);
  const [tipo, setTipo] = useState<TipoInfraccion>("grave");

  const rango = rangos[tipo];
  const multaMin = rango.min * empleados;
  const multaMax = rango.max * empleados;
  const costeFichados = 19 + 3 * empleados;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldAlert className="size-5 text-primary" />
          Calculadora de multas por no fichar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium">Numero de empleados</label>
            <input
              type="number"
              min={1}
              max={500}
              value={empleados}
              onChange={(e) => setEmpleados(Math.max(1, Number(e.target.value)))}
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Tipo de infraccion</label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value as TipoInfraccion)}
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="leve">Leve (60 - 625 euros)</option>
              <option value="grave">Grave (626 - 6.250 euros)</option>
              <option value="muy-grave">
                Muy grave (6.251 - 187.515 euros)
              </option>
            </select>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <h3 className="mb-4 text-lg font-semibold">
            Riesgo para tu empresa ({rango.label})
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Multa minima total</p>
              <p className="text-2xl font-bold text-red-600">
                {multaMin.toLocaleString("es-ES")} euros
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Multa maxima total</p>
              <p className="text-2xl font-bold text-red-600">
                {multaMax.toLocaleString("es-ES")} euros
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4">
            <p className="text-sm font-medium text-green-800">
              Fichados te costaria solo {costeFichados} euros/mes vs una multa
              de hasta {multaMax.toLocaleString("es-ES")} euros
            </p>
            <p className="mt-1 text-xs text-green-700">
              Es decir, {Math.round(multaMax / costeFichados)} meses de Fichados
              equivalen a la multa maxima. Evita el riesgo desde hoy.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://app.fichados.es/registro-empresa"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Evita multas con Fichados
            <ChevronRight className="size-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
