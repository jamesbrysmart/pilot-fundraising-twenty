import ApplicationTriggerButton from "@/components/application/ApplicationTriggerButton";
import { useDetailsSheet } from "@/components/application/ApplicationSheetProvider";
import BrandCornerFade from "@/components/branding/BrandCornerFade";
import GreenShootMark from "@/components/branding/GreenShootMark";
import HeroPreview from "@/components/landing/HeroPreview";

const HeroSection = () => {
  const { openDetails } = useDetailsSheet();

  return (
    <section className="relative overflow-hidden border-b border-[hsl(var(--brand-line))] bg-[hsl(var(--brand-strong))] py-24 text-[hsl(var(--brand-strong-foreground))] md:py-32">
      <BrandCornerFade />

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[hsl(var(--brand-strong-foreground))] opacity-55" />
              <p className="text-xs font-medium uppercase tracking-widest text-[hsl(var(--brand-strong-foreground)/0.72)]">
                Built on Twenty CRM
              </p>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              A new fundraising
              <br />
              CRM for nonprofits.
            </h1>
            <p className="max-w-md text-base leading-relaxed text-[hsl(var(--brand-strong-foreground)/0.78)]">
              Give your team the modern tools they need to manage donations and
              build donor relationships you can trust.
            </p>
            <p className="text-sm text-[hsl(var(--brand-strong-foreground)/0.78)]">
              Available with setup and implementation support from 3Trees Digital.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <ApplicationTriggerButton className="bg-[hsl(var(--brand-strong-foreground))] text-[hsl(var(--brand-strong))] hover:bg-[hsl(var(--brand-strong-foreground)/0.9)] focus-visible:ring-[hsl(var(--brand-strong-foreground))] focus-visible:ring-offset-[hsl(var(--brand-strong))]">
                Tell us about your organisation
              </ApplicationTriggerButton>
              <button
                type="button"
                onClick={openDetails}
                className="text-sm text-[hsl(var(--brand-strong-foreground)/0.78)] underline underline-offset-2 transition-colors hover:text-[hsl(var(--brand-strong-foreground))]"
              >
                More details
              </button>
            </div>
          </div>

          <HeroPreview />
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0">
        <span className="relative left-1/2 block h-px w-screen -translate-x-1/2 bg-[hsl(var(--brand-strong-foreground)/0.2)]" />

        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2">
          <div className="container relative">
            <div className="absolute left-[58%] top-0 -translate-x-1/2 -translate-y-[85%] md:left-auto md:right-12 md:translate-x-0">
              <GreenShootMark className="text-[hsl(var(--shoot))]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
