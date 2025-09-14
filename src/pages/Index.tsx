import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Render3DSection from "@/components/Render3DSection";
import VFXSection from "@/components/VFXSection";
import UnitySection from "@/components/UnitySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <Render3DSection />
        <VFXSection />
        <UnitySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
