"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Clock, LayoutDashboard, CalendarOff, FileText } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const VIDEO_BASE = process.env.NEXT_PUBLIC_VIDEO_CDN_URL || "";
const VIDEO_URLS = {
  fichaje: `${VIDEO_BASE}/bento-fichaje-v2.mp4`,
  panel: `${VIDEO_BASE}/bento-panel-admin-v2.mp4`,
  ausencias: `${VIDEO_BASE}/bento-ausencias.mp4`,
  informes: `${VIDEO_BASE}/bento-informes-v2.mp4`,
} as const;

const tabs = [
  {
    id: "fichaje" as const,
    icon: Clock,
    title: "Fichaje en un clic",
    description:
      "Entrada, salida y pausas en segundos desde cualquier dispositivo.",
  },
  {
    id: "panel" as const,
    icon: LayoutDashboard,
    title: "Panel de administrador",
    description:
      "Visión global del equipo: horas, incidencias y estado en tiempo real.",
  },
  {
    id: "ausencias" as const,
    icon: CalendarOff,
    title: "Ausencias y vacaciones",
    description:
      "Vacaciones, bajas y permisos centralizados y actualizados.",
  },
  {
    id: "informes" as const,
    icon: FileText,
    title: "Informes para inspección",
    description:
      "Exporta registros oficiales en PDF y Excel en segundos, listos para presentar ante una inspección.",
  },
];

function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isVisible };
}

/**
 * Video component that shows a first-frame thumbnail (via preload="metadata")
 * and autoplays when visible in viewport.
 */
function AutoplayVideo({
  src,
  eager = false,
}: {
  src: string;
  eager?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Observe visibility for autoplay
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !loaded) return;
    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, loaded]);

  return (
    <div className="relative w-full" style={{ backgroundColor: "#fafafa" }}>
      {!loaded && (
        <Skeleton className="absolute inset-0 w-full aspect-video rounded-none" />
      )}
      <video
        ref={videoRef}
        src={eager ? src : undefined}
        data-src={!eager ? src : undefined}
        muted
        loop
        playsInline
        // @ts-ignore — needed for older iOS
        webkit-playsinline="true"
        preload="metadata"
        onLoadedData={() => setLoaded(true)}
        className={`w-full h-auto transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

function MobileCard({ tab }: { tab: (typeof tabs)[number] }) {
  const { ref, isVisible } = useInView();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const Icon = tab.icon;

  // Track if card is in view for autoplay
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !loaded) return;
    if (inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, loaded]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border/50 bg-card shadow-sm overflow-hidden"
    >
      <div
        className="overflow-hidden relative"
        style={{ backgroundColor: "#fafafa" }}
      >
        {!loaded && <Skeleton className="w-full aspect-video" />}
        {isVisible && (
          <video
            ref={videoRef}
            src={VIDEO_URLS[tab.id]}
            muted
            loop
            playsInline
            // @ts-ignore — needed for older iOS
            webkit-playsinline="true"
            preload="metadata"
            onLoadedData={() => setLoaded(true)}
            className={`w-full h-auto transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
      <div className="p-4 flex items-start gap-3">
        <Icon className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-foreground text-sm">
            {tab.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
            {tab.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BentoFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const { ref: sectionRef, isVisible: sectionVisible } = useInView();

  const handleVideoRef = useCallback(
    (el: HTMLVideoElement | null) => {
      videoRef.current = el;
      if (el) {
        el.currentTime = 0;
        el.play().catch(() => {});
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeTab]
  );

  // Reset loaded state when switching tabs
  useEffect(() => {
    setLoaded(false);
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Descubre cómo funciona Fichados por dentro
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para cumplir la ley, explicado con hechos y
            pantallas reales.
          </p>
        </div>

        {/* Desktop: vertical tabs + video */}
        <div className="hidden md:grid md:grid-cols-[280px_1fr] gap-6 items-start">
          <div className="flex flex-col gap-1">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              const isActive = activeTab === i;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-start gap-3 text-left px-4 py-3.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 border border-primary/20"
                      : "hover:bg-muted/60 border border-transparent"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 mt-0.5 flex-shrink-0 transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <div>
                    <p
                      className={`font-medium text-sm transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {tab.title}
                    </p>
                    <p
                      className={`text-xs mt-0.5 leading-relaxed transition-opacity ${
                        isActive
                          ? "text-muted-foreground opacity-100"
                          : "opacity-0 h-0 overflow-hidden"
                      }`}
                    >
                      {tab.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div
            className="rounded-2xl overflow-hidden border border-border/50 shadow-sm relative"
            style={{ backgroundColor: "#fafafa" }}
          >
            {!loaded && <Skeleton className="w-full aspect-video" />}
            {sectionVisible && (
              <video
                ref={handleVideoRef}
                key={tabs[activeTab].id}
                src={VIDEO_URLS[tabs[activeTab].id]}
                muted
                loop
                playsInline
                // @ts-ignore — needed for older iOS
                webkit-playsinline="true"
                autoPlay
                preload="metadata"
                onLoadedData={() => setLoaded(true)}
                className={`w-full h-auto transition-opacity duration-300 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tabs.map((tab) => (
            <MobileCard key={tab.id} tab={tab} />
          ))}
        </div>
      </div>
    </section>
  );
}
