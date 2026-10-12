export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 border-t border-[#1e1e2e]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Let&apos;s build something that matters
            </h2>
            <p className="text-[#777799] leading-relaxed mb-8">
              Whether you have a specific project in mind or you&apos;re still
              working out where AI fits in your business — reach out. The first
              conversation is always about understanding your problem, not
              pitching a solution.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:khadivi.homi@vertexmindai.com.au"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#0d0d16] border border-[#1e1e2e] rounded-lg text-[#7c6fcd] group-hover:border-[#7c6fcd44] transition-colors shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#44445a] mb-0.5">Email</div>
                  <div className="text-sm text-[#a0a0c0] group-hover:text-white transition-colors">
                    khadivi.homi@vertexmindai.com.au
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/homayoon-khadivi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#0d0d16] border border-[#1e1e2e] rounded-lg text-[#7c6fcd] group-hover:border-[#7c6fcd44] transition-colors shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2ZM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#44445a] mb-0.5">LinkedIn</div>
                  <div className="text-sm text-[#a0a0c0] group-hover:text-white transition-colors">
                    linkedin.com/in/homayoon-khadivi
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#0d0d16] border border-[#1e1e2e] rounded-xl p-8">
            <h3 className="text-white font-semibold text-sm mb-2">
              Currently available for
            </h3>
            <p className="text-[#666688] text-xs mb-6">
              Consulting engagements, fractional AI leadership, and project-based delivery.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "AI strategy and roadmap workshops",
                "Proof of concept builds",
                "End-to-end production AI systems",
                "MLOps and LLMOps implementation",
                "Team capability uplift and training",
                "Fractional Head of AI",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-[#8888aa]">
                  <span className="text-[#7c6fcd] mt-0.5 shrink-0">›</span>
                  {item}
                </div>
              ))}
            </div>
            <a
              href="mailto:khadivi.homi@vertexmindai.com.au"
              className="block text-center bg-[#7c6fcd] hover:bg-[#6a5db8] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
