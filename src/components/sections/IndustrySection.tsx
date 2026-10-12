"use client";

import { useState } from "react";
import { Industry } from "@/types";
import DemoModal from "@/components/ui/DemoModal";

interface Props {
  industry: Industry;
  index: number;
}

export default function IndustrySection({ industry, index }: Props) {
  const [activeDemo, setActiveDemo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const bg = index % 2 === 1 ? "bg-[#0d0d14]" : "";

  return (
    <>
      <section
        id={industry.slug}
        className={`px-6 py-24 border-t border-[#1e1e2e] ${bg}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-3">
                {industry.name}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-5">
                {industry.tagline}
              </h2>
              <p className="text-[#777799] leading-relaxed text-sm mb-8">
                {industry.description}
              </p>

              <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">
                Capabilities
              </h3>
              <ul className="space-y-2.5">
                {industry.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2.5 text-sm text-[#8888aa]"
                  >
                    <span className="text-[#7c6fcd] mt-0.5 shrink-0 text-base leading-none">
                      ›
                    </span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-xs text-[#44445a] font-semibold tracking-widest uppercase mb-5">
                Case Studies
              </h3>
              {industry.caseStudies.map((cs) => (
                <div
                  key={cs.title}
                  className="bg-[#0d0d16] border border-[#1e1e2e] rounded-xl p-6 hover:border-[#7c6fcd33] transition-colors"
                >
                  <h4 className="text-white font-semibold text-sm mb-3 leading-snug">
                    {cs.title}
                  </h4>
                  <p className="text-[#777799] text-sm leading-relaxed mb-4">
                    {cs.description}
                  </p>

                  <div className="bg-[#7c6fcd0d] border border-[#7c6fcd22] rounded-lg px-4 py-3 mb-4">
                    <span className="text-xs text-[#7c6fcd] font-semibold tracking-wide uppercase mr-2">
                      Outcome
                    </span>
                    <span className="text-sm text-[#b8b0ee]">{cs.outcome}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-[#1a1a2e] border border-[#2a2a3e] text-[#6666888] px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {cs.demoUrl && (
                      <button
                        onClick={() =>
                          setActiveDemo({ url: cs.demoUrl!, title: cs.title })
                        }
                        className="shrink-0 bg-[#7c6fcd] hover:bg-[#6a5db8] text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors"
                      >
                        Try Live Demo →
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DemoModal
        url={activeDemo?.url ?? null}
        title={activeDemo?.title ?? ""}
        onClose={() => setActiveDemo(null)}
      />
    </>
  );
}
