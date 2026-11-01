"use client";

import { useEffect, useId, useRef, useState } from "react";

interface Props {
  title: string;
  description: string;
  url: string;
  onClose: () => void;
}

export default function DemoModal({ title, description, url, onClose }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [loaded, setLoaded] = useState(false);
  // Standalone URL for "open in new tab" (embed mode hides Streamlit chrome).
  const directUrl = url.replace(/[?&]embed=true/, "");

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Full-screen sheet on mobile, right-side drawer from md up */}
      <div className="absolute inset-0 md:left-auto md:w-[min(900px,60%)] bg-[#0a0a0f] md:border-l-2 border-[#7c6fcd] shadow-2xl flex flex-col overflow-hidden">
        <div
          className="flex items-start justify-between gap-3 px-4 sm:px-5 py-3 sm:py-4 bg-[#0d0d1e] border-b-2 border-[#7c6fcd33] shrink-0"
          style={{ borderTop: "3px solid #7c6fcd" }}
        >
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c6fcd] animate-pulse shrink-0" />
              <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase">Live Demo</p>
            </div>
            <h2 id={titleId} className="text-white font-bold text-sm sm:text-base leading-snug">
              {title}
            </h2>
            <p className="hidden sm:block text-[#8888bb] text-xs mt-0.5 leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium text-[#c4b8ff] border border-[#7c6fcd55] hover:bg-[#7c6fcd22] px-3 py-2 rounded-lg transition-colors"
            >
              Open ↗
            </a>
            <button
              ref={closeRef}
              onClick={onClose}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white bg-[#2a2a3a] hover:bg-[#7c6fcd] px-3 sm:px-4 py-2 rounded-lg transition-colors"
              aria-label="Close demo"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M1 1l10 10M11 1L1 11" />
              </svg>
              <span className="hidden sm:inline">Close</span>
            </button>
          </div>
        </div>

        <div className="relative flex-1">
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
              <span className="w-8 h-8 rounded-full border-2 border-[#7c6fcd] border-t-transparent animate-spin" />
              <p className="text-[#9988dd] text-sm">Starting the demo…</p>
              <p className="text-[#8888aa] text-xs max-w-xs">
                Hosted on Streamlit Community Cloud. If it was idle it can take up to 30 seconds to wake.
              </p>
            </div>
          )}
          <iframe
            src={url}
            className="absolute inset-0 w-full h-full border-0"
            title={title}
            allow="camera; microphone; clipboard-write"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
