"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marta R.",
    role: "RRHH",
    company: "Empresa de servicios",
    text: "Lo configuramos en minutos y por fin dejamos de perseguir fichajes. Muy cómodo.",
    rating: 5,
    image: "/images/testimonial-marta.jpg",
  },
  {
    name: "David L.",
    role: "Gerente",
    company: "Restauración",
    text: "La inspección ya no me quita el sueño. Simple y directo.",
    rating: 5,
    image: "/images/testimonial-david.jpg",
  },
  {
    name: "Laura S.",
    role: "Administración",
    company: "Despacho profesional",
    text: "Informes claros y todo ordenado. Antes era un caos en Excel.",
    rating: 5,
    image: "/images/testimonial-laura.jpg",
  },
  {
    name: "Javier M.",
    role: "Propietario",
    company: "Comercio local",
    text: "Mis empleados fichan desde el móvil y yo lo veo todo en un clic.",
    rating: 5,
    image: "/images/testimonial-javier.jpg",
  },
  {
    name: "Ana G.",
    role: "Office Manager",
    company: "Pyme",
    text: "Vacaciones y ausencias centralizadas. Menos mensajes y más control.",
    rating: 5,
    image: "/images/testimonial-ana.jpg",
  },
  {
    name: "Sergio P.",
    role: "CEO",
    company: "Startup",
    text: "Onboarding rápido. Lo que prometen: cumplir sin líos.",
    rating: 5,
    image: "/images/testimonial-sergio.jpg",
  },
  {
    name: "Carmen V.",
    role: "RRHH",
    company: "Logística",
    text: "Pausas y jornadas bien registradas. Mucha tranquilidad.",
    rating: 5,
    image: "/images/testimonial-carmen.jpg",
  },
  {
    name: "Raúl F.",
    role: "Director",
    company: "Construcción",
    text: "Fichaje sencillo para equipos en movimiento. Nos encaja perfecto.",
    rating: 5,
    image: "/images/testimonial-raul.jpg",
  },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex-shrink-0 w-[180px] sm:w-[260px] lg:w-[300px] bg-card border border-border/50 rounded-lg sm:rounded-xl p-2.5 sm:p-4 lg:p-5 mx-1 sm:mx-2">
    <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
      <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
        <AvatarImage
          src={testimonial.image}
          alt={testimonial.name}
          className="object-cover"
        />
        <AvatarFallback className="bg-primary/20 text-primary font-medium text-[10px] sm:text-xs">
          {getInitials(testimonial.name)}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground text-xs sm:text-sm">
          {testimonial.name}
        </p>
        <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
          {testimonial.role} · {testimonial.company}
        </p>
      </div>
    </div>
    <p className="text-foreground text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
      &ldquo;{testimonial.text}&rdquo;
    </p>
    <div className="flex gap-0.5">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star
          key={i}
          className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>
  </div>
);

interface ScrollRowProps {
  items: Testimonial[];
  direction: "left" | "right";
  duration?: number;
}

const ScrollRow = ({ items, direction, duration = 25 }: ScrollRowProps) => {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden py-2">
      <div
        className="flex"
        style={{
          animation: `scroll-${direction} ${duration}s linear infinite`,
        }}
      >
        {duplicatedItems.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default function TestimonialsCarousel() {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Empresarios que ya duermen tranquilos
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Lee lo fácil que es cumplir con la ley.
          </p>
        </div>

        <div className="max-w-6xl mx-auto border border-border/40 rounded-xl sm:rounded-2xl overflow-hidden bg-muted/10 py-2 sm:py-4">
          <ScrollRow items={row1} direction="left" duration={12} />
          <ScrollRow items={row2} direction="right" duration={15} />
        </div>
      </div>
    </section>
  );
}
