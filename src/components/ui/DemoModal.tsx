"use client";

import { useEffect } from "react";

interface Props {
  title: string;
  description: string;
  url: string;
  onClose: () => void;
}

export default function DemoModal({ title, description, url, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Drawer — full height, right side */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-[#0a0a0f] border-l-2 border-[#7c6fcd] shadow-2xl flex flex-col overflow-hidden">

        {/* Header — always visible */}
        <div className="flex items-center justify-between gap-4 px-5 py-4 bg-[#0d0d1e] border-b-2 border-[#7c6fcd33] shrink-0" style={{ borderTop: "3px solid #7c6fcd" }}>
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c6fcd] animate-pulse shrink-0" />
              <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase">Live Demo</p>
            </div>
            <h2 className="text-white font-bold text-base truncate">{title}</h2>
            <p className="text-[#6666aa] text-xs mt-0.5 leading-relaxed line-clamp-2">{description}</p>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 flex items-center gap-2 text-sm font-medium text-white bg-[#2a2a3a] hover:bg-[#7c6fcd] px-4 py-2 rounded-lg transition-colors"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 1l10 10M11 1L1 11" />
            </svg>
            Close
          </button>
        </div>

        {/* Wake-up note */}
        <div className="px-5 py-2 bg-[#7c6fcd0d] border-b border-[#7c6fcd1a] shrink-0">
          <p className="text-[#9988dd] text-xs">
            App may take 20 seconds to wake up on first load — it runs on Streamlit Community Cloud.
          </p>
        </div>

        {/* Iframe fills remaining space */}
        <iframe
          src={url}
          className="flex-1 w-full border-0"
          title={title}
          allow="camera; microphone"
        />
      </div>
    </div>
  );
}
