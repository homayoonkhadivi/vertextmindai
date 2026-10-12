"use client";

import { useState } from "react";
import { UseCase } from "@/types";

const steps = [
  { key: "problem" as const, label: "The Problem", color: "text-red-400" },
  { key: "idea" as const, label: "The Idea", color: "text-yellow-400" },
  { key: "vision" as const, label: "The Vision", color: "text-[#7c6fcd]" },
  { key: "outcome" as const, label: "The Outcome", color: "text-green-400" },
];

export default function UseCaseCards({ useCases }: { useCases: UseCase[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-16 border-t border-[#1e1e2e]">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-3">
          Ideas Worth Building
        </p>
        <h2 className="text-2xl font-bold text-white mb-10">
          What we imagine doing here
        </h2>

        <div className="space-y-3">
          {useCases.map((uc, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? "border-[#7c6fcd55] bg-[#0d0d16]"
                    : "border-[#1e1e2e] bg-[#0a0a0f] hover:border-[#2a2a3a]"
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div>
                    <p className="text-white font-semibold leading-snug mb-1">
                      {uc.title}
                    </p>
                    <p className="text-[#7777aa] text-sm leading-relaxed">
                      {uc.hook}
                    </p>
                  </div>
                  <span
                    className={`mt-1 flex-shrink-0 text-[#7c6fcd] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 3v12M3 9h12" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 pt-1 border-t border-[#1e1e2e]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
                      {steps.map(({ key, label, color }) => (
                        <div key={key} className="space-y-2">
                          <p className={`text-xs font-semibold tracking-wider uppercase ${color}`}>
                            {label}
                          </p>
                          <p className="text-[#9090b0] text-sm leading-relaxed">
                            {uc[key]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
