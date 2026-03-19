"use client";

import { useState } from "react";
import { BarChart3, ChevronRight, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Software {
  nombre: string;
  calcular: (empleados: number) => number;
  color: string;
  highlight?: boolean;
}

const softwares: Software[] = [
  {
    nombre: "Fichados",
    calcular: (n) => 19 + 3 * n,
    color: "bg-primary text-primary-foreground",
    highlight: true,
  },
  {
    nombre: "Sesame HR",
    calcular: (n) => Math.max(50, 4.5 * n),
    color: "bg-muted text-foreground",
  },
  {
    nombre: "Factorial",
    calcular: (n) => Math.max(50, 5.25 * n),
    color: "bg-muted text-foreground",
  },
  {
    nombre: "Bizneo",
    calcular: (n) => Math.max(60, 6 * n),
    color: "bg-muted text-foreground",
  },
];

export default function CalculadoraCosteFichaje() {
  const [empleados, setEmpleados] = useState(10);

  const precios = softwares.map((s) => ({
    ...s,
    mensual: s.calcular(empleados),
    anual: s.calcular(empleados) * 12,
  }));

  const precioFichados = precios[0].anual;
  const precioMax = Math.max(...precios.slice(1).map((p) => p.anual));
  const ahorroMax = precioMax - precioFichados;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="size-5 text-primary" />
          Comparador de precios de software de fichaje
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <label className="text-sm font-medium">
            Número de empleados: {empleados}
          </label>
          <input
            type="range"
            min={1}
            max={100}
            value={empleados}
            onChange={(e) => setEmpleados(Number(e.target.value))}
            className="mt-2 w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <h3 className="mb-4 text-lg font-semibold">
            Comparativa para {empleados} empleados
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left font-medium">Software</th>
                  <th className="py-2 text-right font-medium">euros/mes</th>
                  <th className="py-2 text-right font-medium">euros/año</th>
                </tr>
              </thead>
              <tbody>
                {precios.map((p) => (
                  <tr
                    key={p.nombre}
                    className={
                      p.highlight
                        ? "border-b bg-primary/10 font-semibold"
                        : "border-b"
                    }
                  >
                    <td className="py-3 text-left">
                      <span className="flex items-center gap-1.5">
                        {p.highlight && (
                          <Check className="size-4 text-primary" />
                        )}
                        {p.nombre}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      {p.mensual.toFixed(2)} euros
                    </td>
                    <td className="py-3 text-right">
                      {p.anual.toFixed(2)} euros
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {ahorroMax > 0 && (
            <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4 text-center">
              <p className="text-lg font-bold text-green-800">
                Ahorra hasta {ahorroMax.toFixed(0)} euros/año con Fichados
              </p>
              <p className="mt-1 text-sm text-green-700">
                Comparado con la opción más cara del mercado
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://app.fichados.es/registro-empresa"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Empieza con Fichados desde 19 euros/mes
            <ChevronRight className="size-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
