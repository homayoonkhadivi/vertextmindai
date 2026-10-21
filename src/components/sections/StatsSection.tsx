"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Years in enterprise AI/ML",
    detail: "Across healthcare, energy, mining, and beyond",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    value: 15,
    suffix: "+",
    label: "Production systems shipped",
    detail: "From PoC to live in AWS, Azure, and GCP",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3 5-5" />
      </svg>
    ),
  },
  {
    value: 5,
    suffix: "",
    label: "Industries served",
    detail: "Healthcare · Energy · Mining · Property · Finance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 4-6" />
      </svg>
    ),
  },
  {
    value: 50,
    prefix: "$",
    suffix: "M+",
    label: "In measurable business value",
    detail: "Cost savings, accuracy gains, time-to-decision",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const runCounter = () => {
      if (started.current) return;
      started.current = true;
      const duration = 1600;
      const steps = 60;
      let current = 0;
      const interval = setInterval(() => {
        current += value / steps;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    };

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) runCounter(); },
      { threshold: 0 }
    );
    observer.observe(el);

    // fallback: start after 600ms if already visible on load
    const fallback = setTimeout(runCounter, 600);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-black tabular-nums text-white">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-[#0d0d16] border border-[#1e1e2e] rounded-2xl p-6 overflow-hidden group hover:border-[#7c6fcd33] transition-colors duration-300 flex flex-col"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,111,205,0.06) 0%, transparent 70%)",
                }}
              />
              <div className="text-[#7c6fcd] mb-4">{stat.icon}</div>
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="text-white text-sm font-semibold mt-2 mb-1 leading-snug">
                {stat.label}
              </p>
              <p className="text-[#555577] text-xs leading-relaxed mt-auto pt-2">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
