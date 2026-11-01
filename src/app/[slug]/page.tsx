import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ParallaxBackground from "@/components/layout/ParallaxBackground";
import UseCaseCards from "@/components/sections/UseCaseCards";
import CaseStudies from "@/components/sections/CaseStudies";
import BookCallButton from "@/components/ui/BookCallButton";
import { mailto } from "@/config/site";
import { industries } from "@/data/industries";

const slugImages: Record<string, string> = {
  healthcare: "/images/healthcare_background.webp",
  energy: "/images/energy_card.webp",
  mining: "/images/mining_card.webp",
  sports: "/images/sports_card.webp",
  "digital-transformation": "/images/digital_card.webp",
};

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  const title = `AI for ${industry.name}`;
  const description = industry.hero.subheadline;
  return {
    title,
    description,
    alternates: { canonical: `/${slug}/` },
    openGraph: { title, description, url: `/${slug}/`, images: ["/og.png"] },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <ParallaxBackground src={slugImages[slug] ?? "/images/digital_card.webp"} />
      <Navigation />
      <main id="main">
        {/* Hero */}
        <section className="px-6 pt-16 pb-12 sm:py-28 border-b border-[#1e1e2e] max-w-4xl mx-auto">
          <Link
            href="/#services"
            className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-6 inline-block hover:underline"
          >
            ← Back to Services
          </Link>
          <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-4">
            {industry.name}
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-white mb-6">
            {industry.hero.headline}
          </h1>
          <p className="text-[#8888aa] text-lg leading-relaxed max-w-2xl">
            {industry.hero.subheadline}
          </p>
        </section>

        {/* Narrative sections */}
        <section className="px-6 py-16 max-w-4xl mx-auto bg-[#0a0a0f]/85 backdrop-blur-sm">
          <div className="space-y-16">
            {industry.narrative.map((section, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
                <h2 className="text-[#7c6fcd] text-sm font-semibold leading-snug pt-1">
                  {section.title}
                </h2>
                <p className="text-[#a0a0c0] leading-relaxed text-[1.05rem]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <UseCaseCards useCases={industry.useCases} />

        {/* Case Studies */}
        <section className="px-6 py-16 border-t border-[#1e1e2e] bg-[#0a0a0f]/85 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-10">
              Case Studies
            </p>
            <CaseStudies caseStudies={industry.caseStudies} />
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 border-t border-[#1e1e2e] text-center bg-[#0a0a0f]/85 backdrop-blur-sm">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Want to explore what this looks like for your organisation?
            </h2>
            <p className="text-[#8888aa] mb-8">
              The first conversation is always about understanding your problem, not pitching a solution.
            </p>
            <a
              href={mailto}
              className="bg-[#7c6fcd] hover:bg-[#6a5db8] text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Get in Touch
            </a>
            <BookCallButton className="mt-3 sm:mt-0 sm:ml-3" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
