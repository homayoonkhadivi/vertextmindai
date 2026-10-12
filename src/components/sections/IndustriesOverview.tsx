import { industries } from "@/data/industries";

const slugImages: Record<string, string> = {
  healthcare: "/images/healthcare_cards.jpg",
  energy: "/images/energy_card.jpg",
  mining: "/images/mining_card.jpg",
  sports: "/images/sports_card.jpg",
  "digital-transformation": "/images/digital_card.jpg",
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
              href={`/${ind.slug}`}
              className="group relative overflow-hidden rounded-xl border border-[#1e1e2e] hover:border-[#7c6fcd55] transition-all block h-64"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${slugImages[ind.slug]})` }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 transition-all" />
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white font-bold text-base leading-snug mb-1">
                  {ind.name}
                </h3>
                <p className="text-[#aaaacc] text-xs leading-relaxed mb-3">
                  {ind.tagline}
                </p>
                <span className="text-[#7c6fcd] text-xs font-semibold group-hover:underline">
                  Explore →
                </span>
              </div>
            </a>
          ))}

          <div className="rounded-xl border border-dashed border-[#2a2a3a] p-6 flex flex-col justify-center items-center text-center h-64">
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
