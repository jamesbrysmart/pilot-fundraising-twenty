import ApplicationTriggerButton from "@/components/application/ApplicationTriggerButton";
import { useDetailsSheet } from "@/components/application/ApplicationSheetProvider";

const CtaSection = () => {
  const { openDetails } = useDetailsSheet();

  return (
    <section className="border-t border-border">
      <div className="container py-24 md:py-32">
        <div className="max-w-md space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Interested?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Applications are reviewed on a rolling basis. We&apos;re selecting 5–10 organisations and will close applications once the pilot is full.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <ApplicationTriggerButton>Apply for the pilot</ApplicationTriggerButton>
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
