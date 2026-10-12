"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground({ src }: { src: string }) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${-window.scrollY * 0.06}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={imgRef}
        className="absolute inset-0 scale-[2.2]"
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
