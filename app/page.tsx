import AttractionsSection from "./components/AttractionsSection";
import BackgroundEffects from "./components/BackgroundEffects";
import CTASection from "./components/CTASection";
import DiningSection from "./components/DiningSection";
import EventsSection from "./components/EventsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LuxurySection from "./components/LuxurySection";
import Navbar from "./components/Navbar";
import RetailSection from "./components/RetailSection";
import ScrollProgress from "./components/ScrollProgress";
import WhySection from "./components/WhySection";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      <ScrollProgress />

      <BackgroundEffects />

      <Navbar />

      <HeroSection />
      <WhySection />
      <RetailSection />
      <LuxurySection />
      <DiningSection />
      <AttractionsSection />
      <EventsSection />
      <CTASection />

      <Footer />
    </main>
  );
}