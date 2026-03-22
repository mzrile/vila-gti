import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import RulesSection from "@/components/RulesSection";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { lang, t } = useLanguage();
  const footerText = t.footer[lang].replace("{year}", new Date().getFullYear().toString());

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AmenitiesSection />
        <GallerySection />
        <PricingSection />
        <RulesSection />
        <ContactSection />
      </main>
      <footer className="bg-secondary py-6 text-center">
        <p className="text-secondary-foreground/40 font-body text-xs">
          {footerText}
        </p>
      </footer>
    </>
  );
};

export default Index;
