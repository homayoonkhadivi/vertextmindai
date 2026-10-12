"use client";

interface DemoModalProps {
  url: string | null;
  title: string;
  onClose: () => void;
}

export default function DemoModal({ url, title, onClose }: DemoModalProps) {
  if (!url) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[85vh] bg-[#111120] border border-[#1e1e2e] rounded-xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#1e1e2e]">
          <span className="text-sm font-medium text-[#e8e8f0]">{title}</span>
          <button
            onClick={onClose}
            className="text-[#8888aa] hover:text-white text-xl leading-none transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <iframe
          src={url}
          className="flex-1 w-full border-0"
          allow="fullscreen"
          title={title}
        />
      </div>
    </div>
  );
}
