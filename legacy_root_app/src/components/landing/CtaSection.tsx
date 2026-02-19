import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="border-t border-border">
      <div className="container py-24 md:py-32">
        <div className="max-w-md space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Interested?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Applications are reviewed on a rolling basis. We're selecting
            5–10 organizations for the first cohort.
          </p>
          <div className="pt-2">
            <Button asChild size="default">
              <Link to="/">Apply for Cohort 1</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
