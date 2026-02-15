import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onOpenDetails?: () => void;
}

const HeroSection = ({ onOpenDetails }: HeroSectionProps) => {
  return (
    <section className="container py-28 md:py-40">
      <div className="grid gap-16 md:grid-cols-[1fr_auto] md:items-end">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-foreground/30" />
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Cohort 1
            </p>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            Fundraising tools
            <br />
            for nonprofits.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground max-w-md">
            A structured pilot for organizations ready to evaluate
            donor management, gift tracking, and campaign tools
            inside an open-source CRM.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <Button asChild size="default">
              <Link to="/apply">Apply for Cohort 1</Link>
            </Button>
            {onOpenDetails && (
              <button
                onClick={onOpenDetails}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                More details
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
        <div className="hidden md:block text-right space-y-1 pb-2">
          <p className="text-xs text-muted-foreground">5–10 organizations</p>
          <p className="text-xs text-muted-foreground">4 weeks</p>
          <p className="text-xs text-muted-foreground">Free to participate</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
