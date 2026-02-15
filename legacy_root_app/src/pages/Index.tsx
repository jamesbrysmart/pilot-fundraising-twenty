import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import SignalStrip from "@/components/landing/SignalStrip";
import NarrativeSection from "@/components/landing/NarrativeSection";
import PilotProcess from "@/components/landing/PilotProcess";
import OutcomesSection from "@/components/landing/OutcomesSection";
import FaqSection from "@/components/landing/FaqSection";
import CtaSection from "@/components/landing/CtaSection";
import PilotDetails from "@/components/landing/PilotDetails";

const Index = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection onOpenDetails={() => setDetailsOpen(true)} />
        <SignalStrip />
        <NarrativeSection />
        <PilotProcess />
        <OutcomesSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <PilotDetails open={detailsOpen} onClose={() => setDetailsOpen(false)} />
    </div>
  );
};

export default Index;
