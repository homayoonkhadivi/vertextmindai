import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { industries } from "@/data/industries";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
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
      <Navigation />
      <main>
        {/* Hero */}
        <section className="px-6 py-28 border-b border-[#1e1e2e] max-w-4xl mx-auto">
          <Link
            href="/#services"
            className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-6 inline-block hover:underline"
          >
            ← Back to Services
          </Link>
          <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-4">
            {industry.name}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white mb-6">
            {industry.hero.headline}
          </h1>
          <p className="text-[#8888aa] text-lg leading-relaxed max-w-2xl">
            {industry.hero.subheadline}
          </p>
        </section>

        {/* Narrative sections */}
        <section className="px-6 py-16 max-w-4xl mx-auto">
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

        {/* Case Studies */}
        <section className="px-6 py-16 border-t border-[#1e1e2e]">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#7c6fcd] text-xs font-semibold tracking-widest uppercase mb-10">
              Case Studies
            </p>
            <div className="space-y-6">
              {industry.caseStudies.map((cs) => (
                <div
                  key={cs.title}
                  className="bg-[#0d0d16] border border-[#1e1e2e] rounded-xl p-8"
                >
                  <h3 className="text-white font-bold text-lg mb-3">{cs.title}</h3>
                  <p className="text-[#7777aa] leading-relaxed mb-5">{cs.description}</p>
                  <p className="text-[#7c6fcd] text-sm font-medium mb-5">
                    → {cs.outcome}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#1a1a2e] border border-[#7c6fcd33] text-[#7c6fcd] text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 border-t border-[#1e1e2e] text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Want to explore what this looks like for your organisation?
            </h2>
            <p className="text-[#8888aa] mb-8">
              The first conversation is always about understanding your problem, not pitching a solution.
            </p>
            <a
              href="mailto:khadivi.homi@vertexmindai.com.au"
              className="bg-[#7c6fcd] hover:bg-[#6a5db8] text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
