import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IndustriesOverview from "@/components/IndustriesOverview";
import IndustrySection from "@/components/IndustrySection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { industries } from "@/data/industries";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <IndustriesOverview />
        {industries.map((industry, i) => (
          <IndustrySection key={industry.slug} industry={industry} index={i} />
        ))}
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
