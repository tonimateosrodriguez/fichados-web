"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Check,
  Shield,
  Users,
  Building2,
  HelpCircle,
} from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const BASE_PRICE = 9;
export const INCLUDED_EMPLOYEES = 3;
export const EXTRA_EMPLOYEE_PRICE = 3;
export const ANNUAL_DISCOUNT = 0.2;

export const calculateMonthlyPrice = (employees: number): number => {
  if (employees <= INCLUDED_EMPLOYEES) {
    return BASE_PRICE;
  }
  return BASE_PRICE + (employees - INCLUDED_EMPLOYEES) * EXTRA_EMPLOYEE_PRICE;
};

export const calculateAnnualPrice = (employees: number): number => {
  const monthly = calculateMonthlyPrice(employees);
  return monthly * (1 - ANNUAL_DISCOUNT);
};

const allFeatures = [
  "Cumple el Real Decreto-ley 8/2019",
  "Informes para Inspección de Trabajo",
  "Fichaje ilimitado",
  "Gestión de empleados",
  "Ausencias y vacaciones",
  "Panel de administración",
  "Estadísticas y reportes",
  "Soporte por email",
];

const FeatureItem = ({
  feature,
  hasTooltip,
  tooltipText,
}: {
  feature: string;
  hasTooltip?: boolean;
  tooltipText?: string;
}) => (
  <div className="flex items-start gap-2 mb-2">
    <div className="h-4 w-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="h-2.5 w-2.5 text-green-600 dark:text-green-400" />
    </div>
    <span className="text-xs text-muted-foreground leading-tight flex items-center gap-1">
      {feature}
      {hasTooltip && tooltipText && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              render={
                <HelpCircle className="h-3 w-3 text-muted-foreground/60 cursor-help" />
              }
            />
            <TooltipContent className="max-w-xs">
              <p className="text-xs">{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </span>
  </div>
);

const SmallPlanFeatures = () => (
  <div className="mt-4 pt-4 border-t border-border/40">
    {allFeatures.map((feature, index) => (
      <FeatureItem key={index} feature={feature} />
    ))}
  </div>
);

const MediumPlanFeatures = () => (
  <div className="mt-4 pt-4 border-t border-border/40">
    <p className="text-xs text-muted-foreground mb-3 font-medium">
      Todo lo del plan Pequeña empresa, más:
    </p>
    <FeatureItem feature="Soporte prioritario" />
  </div>
);

const EnterprisePlanFeatures = () => (
  <div className="mt-4 pt-4 border-t border-border/40">
    <p className="text-xs text-muted-foreground mb-3 font-medium">
      Todo lo del plan Mediana empresa, más:
    </p>
    <FeatureItem
      feature="Gestor de cuenta dedicado"
      hasTooltip
      tooltipText="Tendrás un gestor asignado que será tu persona de contacto directa para cualquier consulta o petición."
    />
    <FeatureItem feature="Integración de Fichados en tu negocio" />
    <FeatureItem feature="White Label" />
  </div>
);

export default function PricingCalculator() {
  const [employees, setEmployees] = useState(10);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly"
  );

  const monthlyPrice = calculateMonthlyPrice(employees);
  const annualMonthlyPrice = monthlyPrice * (1 - ANNUAL_DISCOUNT);
  const annualTotalPrice = annualMonthlyPrice * 12;
  const annualSavings = monthlyPrice * 12 - annualTotalPrice;

  const displayPrice =
    billingPeriod === "monthly" ? monthlyPrice : annualMonthlyPrice;

  // For the small plan
  const smallPlanMonthly = BASE_PRICE;
  const smallPlanAnnual = smallPlanMonthly * (1 - ANNUAL_DISCOUNT);
  const smallPlanAnnualTotal = smallPlanAnnual * 12;
  const smallPlanSavings = smallPlanMonthly * 12 - smallPlanAnnualTotal;
  const smallDisplayPrice =
    billingPeriod === "monthly" ? smallPlanMonthly : smallPlanAnnual;

  return (
    <div className="space-y-8">
      {/* Subtitle */}
      <p className="text-center text-muted-foreground text-lg">
        Sin permanencia. Cancela cuando quieras.
      </p>

      {/* Billing toggle */}
      <div className="flex justify-center">
        <div className="inline-flex items-center bg-muted rounded-full p-1">
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all",
              billingPeriod === "monthly"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Mensual
          </button>
          <button
            onClick={() => setBillingPeriod("annual")}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all relative",
              billingPeriod === "annual"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Anual
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              -20%
            </span>
          </button>
        </div>
      </div>

      {/* Three pricing boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
        {/* Box 1: Small (1-5 employees) */}
        <Card className="border border-border/60 bg-card relative flex flex-col md:transition-all md:duration-300 md:hover:shadow-lg md:hover:-translate-y-1">
          <CardContent className="p-3 sm:p-4 lg:p-6 flex flex-col flex-1">
            {/* Header section */}
            <div className="text-center mb-2 sm:mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 mb-2 sm:mb-3">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-0.5 sm:mb-1">
                Pequeña empresa
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Hasta 3 empleados
              </p>
            </div>

            {/* Spacer for slider alignment */}
            <div className="h-8 sm:h-10 mb-2" />

            {/* Price section */}
            <div className="text-center mb-3 sm:mb-4">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl sm:text-4xl font-bold text-foreground">
                  {formatPrice(smallDisplayPrice, 0)}
                </span>
                <span className="text-lg sm:text-xl font-bold text-foreground">
                  €
                </span>
                <span className="text-muted-foreground text-sm">/mes</span>
              </div>

              {billingPeriod === "annual" ? (
                <div className="mt-1 space-y-0.5">
                  <p className="text-xs text-muted-foreground line-through">
                    {formatPrice(smallPlanMonthly, 0)}€/mes
                  </p>
                  <p className="text-xs font-semibold text-green-600 dark:text-green-400">
                    Ahorras {formatPrice(smallPlanSavings, 0)}€/año
                  </p>
                </div>
              ) : (
                <div className="mt-1 h-8" />
              )}
            </div>

            {/* Button */}
            <a
              href="https://app.fichados.es/registro-empresa"
              className="block mb-2 sm:mb-4"
            >
              <Button
                className="w-full h-10 sm:h-12 text-sm sm:text-base"
                variant="outline"
              >
                Cumple la ley hoy
              </Button>
            </a>

            {/* Features - grows to fill space */}
            <div className="flex-1">
              <SmallPlanFeatures />
            </div>
          </CardContent>
        </Card>

        {/* Box 2: Medium (6-50 employees with slider) */}
        <Card className="border border-border/60 bg-card relative flex flex-col md:transition-all md:duration-300 md:hover:shadow-lg md:hover:-translate-y-1">
          <CardContent className="p-3 sm:p-4 lg:p-6 flex flex-col flex-1">
            {/* Header section */}
            <div className="text-center mb-2 sm:mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 mb-2 sm:mb-3">
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-0.5 sm:mb-1">
                Mediana empresa
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                De 4 a 50 empleados
              </p>
            </div>

            {/* Slider section */}
            <div className="h-8 sm:h-10 mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-muted-foreground">
                  Empleados
                </span>
                <span className="text-sm font-bold text-primary">
                  {employees}
                </span>
              </div>
              <Slider
                value={[employees]}
                onValueChange={(value) =>
                  setEmployees(Array.isArray(value) ? value[0] : value)
                }
                min={4}
                max={50}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground/70 mt-1">
                <span>4</span>
                <span>50</span>
              </div>
            </div>

            {/* Price section */}
            <div className="text-center mb-3 sm:mb-4">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl sm:text-4xl font-bold text-foreground">
                  {formatPrice(displayPrice, 0)}
                </span>
                <span className="text-lg sm:text-xl font-bold text-foreground">
                  €
                </span>
                <span className="text-muted-foreground text-sm">/mes</span>
              </div>

              {billingPeriod === "annual" ? (
                <div className="mt-1 space-y-0.5">
                  <p className="text-xs text-muted-foreground line-through">
                    {formatPrice(monthlyPrice, 0)}€/mes
                  </p>
                  <p className="text-xs font-semibold text-green-600 dark:text-green-400">
                    Ahorras {formatPrice(annualSavings, 0)}€/año
                  </p>
                </div>
              ) : (
                <div className="mt-1 h-8" />
              )}
            </div>

            {/* Button */}
            <a
              href="https://app.fichados.es/registro-empresa"
              className="block mb-2 sm:mb-4"
            >
              <Button
                size="lg"
                className="w-full h-10 sm:h-12 font-semibold text-sm sm:text-base"
              >
                Cumple la ley hoy
              </Button>
            </a>

            {/* Features - grows to fill space */}
            <div className="flex-1">
              <MediumPlanFeatures />
            </div>
          </CardContent>
        </Card>

        {/* Box 3: Enterprise (50+ employees) */}
        <Card className="border border-border/60 bg-card relative flex flex-col md:transition-all md:duration-300 md:hover:shadow-lg md:hover:-translate-y-1">
          <CardContent className="p-3 sm:p-4 lg:p-6 flex flex-col flex-1">
            {/* Header section */}
            <div className="text-center mb-2 sm:mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 mb-2 sm:mb-3">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-0.5 sm:mb-1">
                Gran empresa
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Más de 50 empleados
              </p>
            </div>

            {/* Spacer for slider alignment */}
            <div className="h-8 sm:h-10 mb-2" />

            {/* Price section */}
            <div className="text-center mb-3 sm:mb-4">
              <p className="text-base sm:text-lg font-semibold text-foreground">
                Precio personalizado
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Contacta para un plan a medida
              </p>
              <div className="mt-1 h-8" />
            </div>

            {/* Button */}
            <a
              href="mailto:info@fichados.es"
              className="block mb-2 sm:mb-4"
            >
              <Button
                className="w-full h-10 sm:h-12 text-sm sm:text-base"
                variant="outline"
              >
                Contactar
              </Button>
            </a>

            {/* Features - grows to fill space */}
            <div className="flex-1">
              <EnterprisePlanFeatures />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
