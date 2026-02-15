import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import SignalStrip from "@/components/landing/SignalStrip";
import NarrativeSection from "@/components/landing/NarrativeSection";
import ProofSection from "@/components/landing/ProofSection";
import PilotProcess from "@/components/landing/PilotProcess";
import OutcomesSection from "@/components/landing/OutcomesSection";
import FaqSection from "@/components/landing/FaqSection";
import CtaSection from "@/components/landing/CtaSection";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SignalStrip />
        <NarrativeSection />
        <ProofSection />
        <PilotProcess />
        <OutcomesSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
