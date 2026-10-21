"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("mkjolvjn");

  return (
    <section id="contact" className="px-6 py-24 border-t border-[#1e1e2e]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Let&apos;s build something that matters
            </h2>
            <p className="text-[#777799] leading-relaxed mb-8">
              Whether you have a specific project in mind or you&apos;re still working out where AI fits in your business — reach out. The first conversation is always about understanding your problem, not pitching a solution.
            </p>

            <div className="space-y-4">
              <a href="mailto:khadivi.homi@vertexmindai.com.au" className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#0d0d16] border border-[#1e1e2e] rounded-lg text-[#7c6fcd] group-hover:border-[#7c6fcd44] transition-colors shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#44445a] mb-0.5">Email</div>
                  <div className="text-sm text-[#a0a0c0] group-hover:text-white transition-colors">khadivi.homi@vertexmindai.com.au</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/homayoon-khadivi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#0d0d16] border border-[#1e1e2e] rounded-lg text-[#7c6fcd] group-hover:border-[#7c6fcd44] transition-colors shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2ZM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#44445a] mb-0.5">LinkedIn</div>
                  <div className="text-sm text-[#a0a0c0] group-hover:text-white transition-colors">linkedin.com/in/homayoon-khadivi</div>
                </div>
              </a>
            </div>

            <div className="mt-10 bg-[#0d0d16] border border-[#1e1e2e] rounded-xl px-5 py-5">
              <h3 className="text-white font-semibold text-sm mb-2">How we can work together</h3>
              <p className="text-[#666688] text-xs mb-4">From a single workshop to a full production system. We meet you where you are.</p>
              <div className="space-y-2">
                {[
                  "AI strategy and roadmap workshops",
                  "Proof of concept builds",
                  "End to end production AI systems",
                  "MLOps and LLMOps implementation",
                  "Team capability uplift and training",
                  "Fractional Head of AI",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#8888aa]">
                    <span className="text-[#7c6fcd] mt-0.5 shrink-0">›</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#0d0d16] border border-[#1e1e2e] rounded-xl p-8">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-[#7c6fcd22] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#7c6fcd" strokeWidth="2" className="w-6 h-6">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Message sent</h3>
                <p className="text-[#666688] text-sm">I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs text-[#666688] mb-1.5">Your name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full bg-[#0a0a0f] border border-[#1e1e2e] focus:border-[#7c6fcd66] text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder:text-[#333355]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#666688] mb-1.5">Email address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full bg-[#0a0a0f] border border-[#1e1e2e] focus:border-[#7c6fcd66] text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder:text-[#333355]"
                  />
                  <ValidationError field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-xs text-[#666688] mb-1.5">What are you working on?</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, the problem you're trying to solve, or just say hello..."
                    className="w-full bg-[#0a0a0f] border border-[#1e1e2e] focus:border-[#7c6fcd66] text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder:text-[#333355] resize-none"
                  />
                  <ValidationError field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#7c6fcd] hover:bg-[#6a5db8] disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
