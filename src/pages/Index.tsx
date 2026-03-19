import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ActivitySection from "@/components/ActivitySection";

const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const PrizeSection = lazy(() => import("@/components/PrizeSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const TrustComparisonSection = lazy(() => import("@/components/TrustComparisonSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ActivitySection />
        <Suspense fallback={null}>
          <BenefitsSection />
          <PrizeSection />
          <HowItWorksSection />
          <TrustComparisonSection />
          <FAQSection />
          <FinalCTASection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
