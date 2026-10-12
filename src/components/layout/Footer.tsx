export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2e] px-6 py-8 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[#7c6fcd] font-bold text-sm tracking-tight">
            VertexMind<span className="text-white">AI</span>
          </span>
          <span className="text-[#2a2a3a] text-xs">·</span>
          <span className="text-[#666688] text-xs">Australia</span>
        </div>

        <p className="text-[#666688] text-xs">
          &copy; {new Date().getFullYear()} VertexMind AI — Homayoon Khadivi. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/homayoon-khadivi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8888aa] hover:text-[#7c6fcd] transition-colors"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2ZM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
            </svg>
          </a>
          <a
            href="https://github.com/homayoonkhadivi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8888aa] hover:text-[#7c6fcd] transition-colors"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
          </a>
          <a
            href="mailto:khadivi.homi@vertexmindai.com.au"
            className="text-[#8888aa] hover:text-[#7c6fcd] transition-colors"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 7 10-7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
