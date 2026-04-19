import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf = 0;
    const FADE = 0.5;

    const tick = () => {
      const d = video.duration;
      const t = video.currentTime;
      if (!isNaN(d) && d > 0) {
        let opacity = 1;
        if (t < FADE) {
          opacity = t / FADE;
        } else if (d - t < FADE) {
          opacity = Math.max(0, (d - t) / FADE);
        }
        video.style.opacity = String(opacity);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const handleEnded = () => {
      video.style.opacity = '0';
      window.setTimeout(() => {
        video.currentTime = 0;
        void video.play();
      }, 100);
    };
    video.addEventListener('ended', handleEnded);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        src="/hero-video.webm"
        muted
        playsInline
        autoPlay
        preload="auto"
        className="absolute w-full h-full object-cover"
        style={{ top: '300px', inset: 'auto 0 0 0', opacity: 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
}
