const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We map your data landscape, understand the business problem, and identify where AI can deliver the highest return — fast wins and long-term architecture.",
  },
  {
    number: "02",
    title: "Proof of Concept",
    description:
      "Before committing to a full build, we validate the core assumption with a scoped prototype. You see results in weeks, not quarters.",
  },
  {
    number: "03",
    title: "Production Build",
    description:
      "End-to-end engineering: data pipelines, model training, API development, cloud infrastructure, CI/CD, and observability — built to enterprise standards.",
  },
  {
    number: "04",
    title: "Handover & Uplift",
    description:
      "We document, train your team, and hand over systems that your engineers can own and extend. No dependency on us to keep the lights on.",
  },
];

export default function ProcessSection() {
  return (
    <section className="px-6 py-24 border-t border-[#1e1e2e] bg-[#0d0d14]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            From first conversation to production
          </h2>
          <p className="text-[#8888aa] max-w-lg mx-auto leading-relaxed">
            A structured engagement that moves fast, de-risks early, and leaves
            you with something your team can own.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl p-6"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-2 w-4 h-px bg-[#2a2a3a] z-10" />
              )}
              <div className="text-3xl font-black text-[#1e1e30] mb-4 select-none">
                {step.number}
              </div>
              <h3 className="text-white font-semibold text-sm mb-3">
                {step.title}
              </h3>
              <p className="text-[#666688] text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
