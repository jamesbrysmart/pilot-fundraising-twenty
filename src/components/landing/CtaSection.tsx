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
            Tell us what you use today, what is getting in the way and what you
            need your fundraising CRM to support. We&apos;ll help you assess whether
            Fundraising for Twenty is the right fit and what a sensible first
            implementation could look like.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <ApplicationTriggerButton>Tell us about your organisation</ApplicationTriggerButton>
            <button
              type="button"
              onClick={openDetails}
              className="text-sm text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
            >
              What to expect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
