import { industries } from "@/data/industries";

const slugIcons: Record<string, React.ReactNode> = {
  healthcare: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Z" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  energy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2Z" />
    </svg>
  ),
  mining: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 3L2 12h3v8h6v-5h2v5h6v-8h3L12 3Z" />
    </svg>
  ),
  sports: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M3 17c3-3 5-5 9-5s6 2 9 5" />
      <path d="M3 12c3-3 5-5 9-5s6 2 9 5" />
      <path d="M3 7c3-3 5-2 9-2s6-1 9 2" />
    </svg>
  ),
  "digital-transformation": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M17.5 14v7M14 17.5h7" />
    </svg>
  ),
};

export default function IndustriesOverview() {
  return (
    <section id="services" className="px-6 py-20 border-t border-[#1e1e2e]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Five industries. Real deployments.
          </h2>
          <p className="text-[#8888aa] max-w-lg mx-auto leading-relaxed">
            Every capability listed here is backed by a production system we
            have designed and shipped — not a proof of concept that never left
            a notebook.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind) => (
            <a
              key={ind.slug}
              href={`#${ind.slug}`}
              className="group bg-[#0d0d16] border border-[#1e1e2e] hover:border-[#7c6fcd44] rounded-xl p-6 transition-all hover:bg-[#111120] block"
            >
              <div className="text-[#7c6fcd] mb-4 w-10 h-10 flex items-center justify-center bg-[#7c6fcd12] rounded-lg border border-[#7c6fcd22]">
                {slugIcons[ind.slug]}
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm leading-snug">
                {ind.name}
              </h3>
              <p className="text-[#666688] text-xs leading-relaxed mb-5">
                {ind.tagline}
              </p>
              <span className="text-[#7c6fcd] text-xs font-medium group-hover:underline">
                Explore →
              </span>
            </a>
          ))}

          <div className="bg-[#0d0d16] border border-dashed border-[#2a2a3a] rounded-xl p-6 flex flex-col justify-center items-center text-center">
            <p className="text-[#44445a] text-sm leading-relaxed mb-4">
              Don&apos;t see your industry? We work across any data-rich domain.
            </p>
            <a
              href="#contact"
              className="text-[#7c6fcd] text-xs font-medium hover:underline"
            >
              Let&apos;s talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
