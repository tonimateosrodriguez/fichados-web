"use client";

import { useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HERO_VIDEO_URL = "https://gudtttoksedpkaxwdurp.supabase.co/storage/v1/object/public/videos/Hero%20Demo%20Fichados.mp4";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const isMobile = useIsMobile();

  const handlePlayClick = useCallback(() => {
    setIsVideoLoading(true);
    const video = videoRef.current;
    if (!video) return;

    video.src = HERO_VIDEO_URL;
    video.load();

    const onReady = () => {
      setIsVideoLoading(false);
      video.removeEventListener("canplay", onReady);

      // Mobile: open fullscreen
      if (isMobile && video.requestFullscreen) {
        video.requestFullscreen().catch(() => {});
      } else if (isMobile && (video as any).webkitEnterFullscreen) {
        (video as any).webkitEnterFullscreen();
      }

      setIsPlaying(true);
      video.play().catch(() => {});
    };
    video.addEventListener("canplay", onReady);
  }, [isMobile]);

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Cumple la ley de fichaje en 1 minuto <span className="text-foreground">y</span>{" "}
              <span className="text-primary">duerme tranquilo.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              El sistema de fichaje online obligatorio en España. Evita sanciones de hasta 187.515 &euro;
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <a href="https://app.fichados.es/registro-empresa" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6">
                  Cumple la ley hoy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base px-8 py-6"
                onClick={handlePlayClick}
              >
                <Play className="mr-2 h-5 w-5" />
                Ver demo
              </Button>
            </div>

            {/* Social Proof inside Hero */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
              <div className="flex items-center -space-x-3">
                <img src="/avatars/avatar-1.jpg" alt="Empresario" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
                <img src="/avatars/avatar-2.jpg" alt="Empresaria" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
                <img src="/avatars/avatar-3.jpg" alt="Empresario" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
                <img src="/avatars/avatar-4.jpg" alt="Empresaria" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
                <img src="/avatars/testimonial-sergio.jpg" alt="Empresario" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
              </div>
              <p className="text-sm text-muted-foreground flex items-center h-10">
                +1.000 empresarios ya duermen tranquilos
              </p>
            </div>
          </div>

          {/* Right Column - Demo Video */}
          <div id="demo-video" className="relative">
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg relative aspect-video" style={{ backgroundColor: "#fafafa" }}>
              {!isPlaying && (
                <img
                  src="/images/hero-video-poster.png"
                  alt="Vista previa de la demo de Fichados"
                  className="absolute inset-0 w-full h-full object-cover object-bottom"
                />
              )}
              <video
                ref={videoRef}
                controls={isPlaying}
                playsInline
                // @ts-ignore -- webkit-playsinline needed for older iOS
                webkit-playsinline="true"
                preload="none"
                className={`absolute inset-0 w-full h-full ${isPlaying ? "object-contain bg-black" : "object-cover invisible"}`}
                onEnded={() => setIsPlaying(false)}
                onPause={(e) => {
                  // Reset state when exiting fullscreen on mobile
                  const video = e.currentTarget;
                  if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
                    // Small delay to distinguish pause from fullscreen exit
                    setTimeout(() => {
                      if (video.paused && isMobile) {
                        setIsPlaying(false);
                        video.src = "";
                      }
                    }, 300);
                  }
                }}
              />
              {!isPlaying && (
                <button
                  onClick={handlePlayClick}
                  disabled={isVideoLoading}
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group transition-all"
                  aria-label="Reproducir vídeo demo"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    {isVideoLoading ? (
                      <div className="w-8 h-8 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    )}
                  </div>
                  <span className="mt-4 text-sm font-medium text-muted-foreground">
                    {isVideoLoading ? "Cargando..." : "Ver demo · 1 min"}
                  </span>
                </button>
              )}
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
