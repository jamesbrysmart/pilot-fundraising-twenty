import ApplicationTriggerButton from "@/components/application/ApplicationTriggerButton";
import { useDetailsSheet } from "@/components/application/ApplicationSheetProvider";
import heroImage from "@/assets/hero.webp";

const HeroSection = () => {
  const { openDetails } = useDetailsSheet();

  return (
    <section className="container py-28 md:py-40">
      <div className="grid gap-14 md:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] md:items-center">
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
            <ApplicationTriggerButton>Apply for Cohort 1</ApplicationTriggerButton>
            <button
              type="button"
              onClick={openDetails}
              className="text-sm text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
            >
              More details
            </button>
          </div>
        </div>
        <div className="space-y-6 md:justify-self-end">
          <div className="rounded-lg border border-border bg-secondary/20 p-4 md:p-5">
            <img
              src={heroImage}
              alt="Monolithic office building with a green seedling emerging at its base"
              className="mx-auto h-auto w-full max-w-[360px] object-contain"
              loading="eager"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {["5-10 organizations", "4 weeks", "Free to participate"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
