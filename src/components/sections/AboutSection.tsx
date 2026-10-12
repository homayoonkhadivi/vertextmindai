const credentials = [
  { label: "Kaggle Expert", detail: "Gold Medal — Medical Imaging" },
  { label: "Major ASX Energy Co.", detail: "Senior Advanced Analytics Engineer" },
  { label: "10+ Years", detail: "Enterprise AI/ML delivery" },
  { label: "AWS · Azure · GCP", detail: "Multi-cloud architecture" },
  { label: "National Swimmer", detail: "Former Australian competitive athlete" },
  { label: "DeepLearning.AI", detail: "Mentor, 2021" },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 border-t border-[#1e1e2e]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Built by an engineer who has shipped it
            </h2>
            <p className="text-[#777799] leading-relaxed mb-5">
              I&apos;m Homayoon Khadivi — a Senior AI/ML Engineer with over a decade
              of experience architecting and delivering enterprise AI systems
              across AWS, Azure, and GCP. I&apos;ve worked at the intersection of
              research and production — from training cancer detection models
              to building real-time video inference systems recognised by
              executive leadership.
            </p>
            <p className="text-[#777799] leading-relaxed mb-5">
              My recent work at a major ASX-listed energy company involved multimodal document pipelines
              achieving 95%+ accuracy, agentic RAG systems, multi-agent
              platforms integrating Microsoft 365 and Snowflake, and
              semi-real-time inspection AI. Before that: geospatial ML for
              property analytics, predictive maintenance at one of the
              world&apos;s largest copper mines, and healthcare AI at a radiology
              practice.
            </p>
            <p className="text-[#777799] leading-relaxed">
              VertexMind AI is how I work with Australian businesses directly —
              bringing enterprise-grade thinking to organisations that want AI
              to drive real, measurable outcomes.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://www.linkedin.com/in/homayoon-khadivi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#8888aa] hover:text-white border border-[#2a2a3a] hover:border-[#7c6fcd44] px-4 py-2 rounded-lg transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2ZM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/homayoonkhadivi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#8888aa] hover:text-white border border-[#2a2a3a] hover:border-[#7c6fcd44] px-4 py-2 rounded-lg transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.kaggle.com/homayoonkhadivi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#8888aa] hover:text-white border border-[#2a2a3a] hover:border-[#7c6fcd44] px-4 py-2 rounded-lg transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.234.118-.353.354-.353h2.431c.234 0 .351.119.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334Z" />
                </svg>
                Kaggle Expert
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs text-[#44445a] font-semibold tracking-widest uppercase mb-5">
              Credentials
            </h3>
            <div className="space-y-3">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start justify-between bg-[#0d0d16] border border-[#1e1e2e] rounded-xl px-5 py-4"
                >
                  <span className="text-white text-sm font-medium">{c.label}</span>
                  <span className="text-[#555577] text-xs text-right ml-4 leading-relaxed max-w-[50%]">
                    {c.detail}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#7c6fcd0d] border border-[#7c6fcd22] rounded-xl px-5 py-5">
              <p className="text-[#9988dd] text-sm font-medium mb-1">
                Master of Computer & Data Science
              </p>
              <p className="text-[#555577] text-xs">
                Bachelor of Mining Engineering — AmirKabir University of Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
