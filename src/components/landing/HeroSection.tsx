import ApplicationTriggerButton from "@/components/application/ApplicationTriggerButton";
import { useDetailsSheet } from "@/components/application/ApplicationSheetProvider";
import GreenShootMark from "@/components/branding/GreenShootMark";

const pilotJourney = [
  {
    title: "Try a modern CRM in real workflow",
    detail:
      "See what modern donor management and campaign workflows feel like, at no cost.",
  },
  {
    title: "Leave with clarity and next steps",
    detail:
      "Get a clear assessment of fit and next-step options, even if you do not continue.",
  },
  {
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
              <span className="h-px w-8 bg-[hsl(var(--shoot))] opacity-60" />
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
            <div className="border-t border-border pt-8 lg:border-t-0 lg:pt-0">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Thinking about changing your CRM?
              </p>

              <div className="relative mt-5 md:mt-6">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-[calc(100%-16px)] w-px bg-[hsl(var(--shoot))] opacity-30"
                />
                <div className="space-y-6">
                  {pilotJourney.map((item, index) => {
                    const tickWidth = ["w-6", "w-10", "w-14"][index] ?? "w-10";
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className={`relative ${tickWidth} pt-2`}>
                          <span
                            aria-hidden="true"
                            className="block h-px w-full bg-[hsl(var(--shoot))] opacity-50"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute -right-2 top-[calc(0.5rem-0.55em)] text-sm leading-none text-[hsl(var(--shoot))] opacity-60"
                          >
                            ›
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium leading-tight">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
