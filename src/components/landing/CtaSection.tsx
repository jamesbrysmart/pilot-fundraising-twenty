import ApplicationTriggerButton from "@/components/application/ApplicationTriggerButton";
import { useDetailsSheet } from "@/components/application/ApplicationSheetProvider";
import BrandCornerFade from "@/components/branding/BrandCornerFade";
import { useContactSheet } from "@/components/contact/ContactSheetProvider";

const CtaSection = () => {
  const { openDetails } = useDetailsSheet();
  const { openContact } = useContactSheet();

  return (
    <section className="relative overflow-hidden border-t border-[hsl(var(--brand-line))] bg-[hsl(var(--brand-strong))] text-[hsl(var(--brand-strong-foreground))]">
      <BrandCornerFade />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-md space-y-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Let&apos;s talk about the CRM your organisation needs.
          </h2>
          <p className="text-sm leading-relaxed text-[hsl(var(--brand-strong-foreground)/0.78)]">
            Tell us how your organisation works, what is getting in the way and
            what you want your CRM to support. We&apos;ll show you Fundraising for
            Twenty, work through how the wider CRM should fit together and
            explain what implementation with 3Trees involves.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <ApplicationTriggerButton className="bg-[hsl(var(--brand-strong-foreground))] text-[hsl(var(--brand-strong))] hover:bg-[hsl(var(--brand-strong-foreground)/0.9)] focus-visible:ring-[hsl(var(--brand-strong-foreground))] focus-visible:ring-offset-[hsl(var(--brand-strong))]">
              Tell us about your organisation
            </ApplicationTriggerButton>
            <button
              type="button"
              onClick={openDetails}
              className="text-sm text-[hsl(var(--brand-strong-foreground)/0.78)] underline underline-offset-2 transition-colors hover:text-[hsl(var(--brand-strong-foreground))]"
            >
              What to expect
            </button>
            <button
              type="button"
              onClick={() => openContact("closing-cta")}
              className="text-sm text-[hsl(var(--brand-strong-foreground)/0.78)] underline underline-offset-2 transition-colors hover:text-[hsl(var(--brand-strong-foreground))]"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
