"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground({ src }: { src: string }) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax is decorative: skip it on touch devices (janky on iOS) and for
    // users who prefer reduced motion.
    const disabled = window.matchMedia(
      "(prefers-reduced-motion: reduce), (hover: none), (max-width: 767px)",
    ).matches;
    if (disabled) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (imgRef.current) {
          imgRef.current.style.transform = `translate3d(0, ${-window.scrollY * 0.06}px, 0) scale(1.6)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        ref={imgRef}
        className="absolute inset-0 md:scale-[1.6] will-change-transform"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
      <div className="absolute inset-0 bg-[#0a0a0f]/80" />
    </div>
  );
}
