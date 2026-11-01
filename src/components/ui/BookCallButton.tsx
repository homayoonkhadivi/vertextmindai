import { site } from "@/config/site";

interface Props {
  className?: string;
  label?: string;
}

// Renders only when NEXT_PUBLIC_BOOKING_URL is configured at build time.
export default function BookCallButton({ className = "", label = "Book a free 30-min call" }: Props) {
  if (!site.bookingUrl) return null;
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics="book-call"
      className={`inline-flex items-center justify-center gap-2 bg-[#7c6fcd] hover:bg-[#6a5db8] text-white font-semibold px-7 py-3 rounded-lg transition-colors ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
      {label}
    </a>
  );
}
