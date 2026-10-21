"use client";

import { useState } from "react";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Energy", href: "/energy" },
  { label: "Mining", href: "/mining" },
  { label: "Sports", href: "/sports" },
  { label: "Transformation", href: "/digital-transformation" },
  { label: "About", href: "/#about" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-[#1e1e2e] bg-[#0a0a0f]/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7 shrink-0">
            <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" stroke="#7c6fcd" strokeWidth="1.5" fill="rgba(124,111,205,0.08)" />
            <circle cx="14" cy="14" r="3" fill="#7c6fcd">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
            </circle>
            <line x1="14" y1="11" x2="14" y2="2" stroke="#7c6fcd" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="14" y1="17" x2="14" y2="26" stroke="#7c6fcd" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="11.4" y1="12.5" x2="5.4" y2="9" stroke="#7c6fcd" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="16.6" y1="15.5" x2="22.6" y2="19" stroke="#7c6fcd" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="11.4" y1="15.5" x2="5.4" y2="19" stroke="#7c6fcd" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="16.6" y1="12.5" x2="22.6" y2="9" stroke="#7c6fcd" strokeWidth="1" strokeOpacity="0.4" />
          </svg>
          <span className="text-[#7c6fcd] font-bold text-lg tracking-tight">
            VertexMind<span className="text-white">AI</span>
          </span>
          <span className="hidden sm:block text-[#2a2a3a] text-sm select-none">|</span>
          <span className="hidden sm:block text-[#44445a] text-xs">Australia</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#8888aa] hover:text-white text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-[#7c6fcd] hover:bg-[#6a5db8] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="lg:hidden text-[#a0a0b8] hover:text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#1e1e2e] px-6 pb-5 pt-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-[#a0a0b8] hover:text-white text-sm transition-colors border-b border-[#1e1e2e] last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-[#7c6fcd] hover:bg-[#6a5db8] text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
