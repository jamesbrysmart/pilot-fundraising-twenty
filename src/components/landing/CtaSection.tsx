import ApplicationTriggerButton from "@/components/application/ApplicationTriggerButton";
import { useDetailsSheet } from "@/components/application/ApplicationSheetProvider";

const CtaSection = () => {
  const { openDetails } = useDetailsSheet();

  return (
    <section className="border-t border-border">
      <div className="container py-24 md:py-32">
        <div className="max-w-md space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            <span
              aria-hidden="true"
              className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-0.08em] rounded-full bg-[hsl(var(--shoot))]"
            />
            Interested?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Applications are reviewed on a rolling basis. We're selecting
            5–10 organizations for the first cohort.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <ApplicationTriggerButton>Apply for Pilot</ApplicationTriggerButton>
            <button
              type="button"
              onClick={openDetails}
              className="text-sm text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
            >
              More details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
