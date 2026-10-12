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
        <a href="/" className="flex items-center gap-2">
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
