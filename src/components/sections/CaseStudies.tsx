"use client";

import { useState } from "react";
import DemoModal from "@/components/ui/DemoModal";
import { CaseStudy } from "@/types";

export default function CaseStudies({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <>
      <div className="space-y-6">
        {caseStudies.map((cs) => (
          <div
            key={cs.title}
            className="bg-[#0d0d16] border border-[#1e1e2e] rounded-xl p-8"
          >
            <h3 className="text-white font-bold text-lg mb-3">{cs.title}</h3>
            <p className="text-[#7777aa] leading-relaxed mb-5">{cs.description}</p>
            <p className="text-[#7c6fcd] text-sm font-medium mb-5">
              → {cs.outcome}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#1a1a2e] border border-[#7c6fcd33] text-[#7c6fcd] text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {cs.demoUrl && (
                <button
                  onClick={() => setActive(cs)}
                  className="ml-auto flex items-center gap-2 bg-[#7c6fcd] hover:bg-[#6a5db8] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                  Live Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {active?.demoUrl && (
        <DemoModal
          title={active.title}
          description={active.description}
          url={active.demoUrl}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
