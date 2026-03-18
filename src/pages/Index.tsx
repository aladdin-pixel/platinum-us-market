import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ActivitySection from "@/components/ActivitySection";
import BenefitsSection from "@/components/BenefitsSection";
import PrizeSection from "@/components/PrizeSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustComparisonSection from "@/components/TrustComparisonSection";

import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ActivitySection />
        <BenefitsSection />
        <PrizeSection />
        <HowItWorksSection />
        <TrustComparisonSection />
        <ScarcitySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
