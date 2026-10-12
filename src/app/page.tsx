import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import IndustriesOverview from "@/components/sections/IndustriesOverview";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <IndustriesOverview />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
