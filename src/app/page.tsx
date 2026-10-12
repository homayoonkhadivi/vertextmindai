import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import IndustriesOverview from "@/components/sections/IndustriesOverview";
import IndustrySection from "@/components/sections/IndustrySection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
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
