import Image from "next/image";

export default function TrustLogos() {
  return (
    <section className="pt-8 sm:pt-12 pb-16 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Diseñado para cumplir el 100% de la normativa vigente en España
        </p>
        <div className="flex items-center justify-center gap-4 sm:gap-10 lg:gap-16">
          <Image
            src="/images/logo-ministerio-trabajo.png"
            alt="Ministerio de Trabajo y Economía Social"
            width={120}
            height={56}
            className="h-6 sm:h-10 lg:h-14 w-auto"
          />
          <Image
            src="/images/logo-union-europea.png"
            alt="Unión Europea - RGPD"
            width={120}
            height={56}
            className="h-6 sm:h-10 lg:h-14 w-auto"
          />
          <Image
            src="/images/logo-seguridad-social.png"
            alt="Tesorería General de la Seguridad Social"
            width={120}
            height={56}
            className="h-6 sm:h-10 lg:h-14 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
