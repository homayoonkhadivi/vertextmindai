const stats = [
  { value: "10+", label: "Years in AI/ML" },
  { value: "95%", label: "Diagnostic Accuracy" },
  { value: "92%", label: "Detection Accuracy" },
  { value: "5", label: "Industries Served" },
];

export default function Hero() {
  return (
    <section className="relative px-6 pt-28 pb-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(124,111,205,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#111120] border border-[#7c6fcd33] text-[#9988dd] text-xs font-medium px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7c6fcd] animate-pulse" />
          AI Consulting — Australia
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
          From raw data to{" "}
          <span className="text-[#7c6fcd]">decisions that matter</span>
        </h1>

        <p className="text-[#8888aa] text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Most businesses know AI can help. Few know how to get there.
        </p>
        <p className="text-[#6666888] text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          We bridge that gap — from strategy and proof of concept through to
          production systems that drive measurable outcomes in healthcare,
          energy, mining, and beyond.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap mb-20">
          <a
            href="#services"
            className="bg-[#7c6fcd] hover:bg-[#6a5db8] text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="border border-[#2e2e44] text-[#a0a0c0] hover:border-[#7c6fcd66] hover:text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            Start a Conversation
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-[#1e1e2e] rounded-xl overflow-hidden bg-[#1e1e2e]">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0d0d16] px-6 py-5 text-center">
              <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-xs text-[#6666888] tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
