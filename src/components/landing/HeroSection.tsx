import ApplicationTriggerButton from "@/components/application/ApplicationTriggerButton";
import { useDetailsSheet } from "@/components/application/ApplicationSheetProvider";
import GreenShootMark from "@/components/branding/GreenShootMark";

const pilotJourney = [
  {
    step: "01",
    title: "Try a modern CRM in real workflow",
    detail:
      "See what modern donor management and campaign workflows feel like, at no cost.",
  },
  {
    step: "02",
    title: "Leave with clarity and next steps",
    detail:
      "Get a clear assessment of fit and next-step options, even if you do not continue.",
  },
  {
    step: "03",
    title: "Help prove a better path forward",
    detail:
      "Open-source foundations now, with a community-led direction over time.",
  },
];

const HeroSection = () => {
  const { openDetails } = useDetailsSheet();

  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-foreground/30" />
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Launch pilot
              </p>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              A fundraising CRM
              <br />
              for nonprofits.
            </h1>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              A modern alternative to legacy nonprofit CRMs, built inside an
              open-source CRM (Twenty) and evaluated through a small, supported
              pilot.
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

          <aside className="lg:pt-10">
            <div className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Thinking about changing your CRM?
              </p>

              <div className="mt-4 space-y-5 md:mt-6 md:space-y-6">
                {pilotJourney.map((item) => (
                  <div key={item.step}>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p className="text-xs font-medium tabular-nums text-muted-foreground">
                        {item.step}
                      </p>
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0">
        <span className="relative left-1/2 block h-px w-screen -translate-x-1/2 bg-border" />

        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2">
          <div className="container relative">
            <div className="absolute left-[58%] top-0 -translate-x-1/2 -translate-y-[85%] md:left-auto md:right-12 md:translate-x-0">
              <GreenShootMark />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
