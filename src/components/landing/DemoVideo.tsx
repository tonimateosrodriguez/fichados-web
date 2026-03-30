"use client";

import { useRef, useState, useCallback } from "react";
import { Play } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const DEMO_VIDEO_URL =
  "https://gudtttoksedpkaxwdurp.supabase.co/storage/v1/object/public/videos/Hero%20Demo%20Fichados.mp4";

const DemoVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const isMobile = useIsMobile();

  const handlePlayClick = useCallback(() => {
    setIsVideoLoading(true);
    const video = videoRef.current;
    if (!video) return;

    video.src = DEMO_VIDEO_URL;
    video.load();

    const onReady = () => {
      setIsVideoLoading(false);
      video.removeEventListener("canplay", onReady);

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
          const video = e.currentTarget;
          if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
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
          className="absolute inset-0 flex items-center justify-center cursor-pointer group transition-all"
          aria-label="Reproducir vídeo demo"
        >
          <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
            {isVideoLoading ? (
              <div className="w-8 h-8 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            ) : (
              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
            )}
          </div>
        </button>
      )}
    </div>
  );
};

export default DemoVideo;
