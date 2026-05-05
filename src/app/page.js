import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import DriveSection from "./sections/DriveSection";
import EatsSection from "./sections/EatsSection";
import BusinessSection from "./sections/BusinessSection";
import CtaBanner from "./sections/CtaBanner";
import ExploreSection from "./sections/ExploreSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <DriveSection />
      <EatsSection />
      <BusinessSection />
      <ExploreSection />
      <CtaBanner />
      <Footer />
      <ScrollToTop />
    </>
  );
}
