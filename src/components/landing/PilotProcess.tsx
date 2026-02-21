const steps = [
  {
    number: "01",
    title: "Intro call + selection",
    detail:
      "A short call to understand your goals and confirm whether this pilot is right for your team.",
  },
  {
    number: "02",
    title: "Week 1: plan together",
    detail: "Agree what to test, what’s included, and which sample data to use.",
  },
  {
    number: "03",
    title: "Weeks 2-4: run and compare",
    detail:
      "Use the pilot alongside your current system in day-to-day fundraising work, with brief weekly check-ins.",
  },
  {
    number: "04",
    title: "Final review + decision",
    detail:
      "Get written findings and clear next steps, then decide whether to stop or continue.",
  },
];

const PilotProcess = () => {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container py-24 md:py-32">
        <div className="mb-12 max-w-2xl space-y-3">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            How the pilot works
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            From intro call to final review, this is a single 4-week pilot
            designed to keep effort predictable and lead to a clear decision.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid grid-cols-[auto_1fr] items-baseline gap-6 py-5 md:gap-10 ${
                i < steps.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-2xl md:text-3xl font-semibold text-muted-foreground/40 tabular-nums w-10 md:w-14">
                {step.number}
              </span>
              <div className="flex flex-col gap-1 md:grid md:grid-cols-[260px_1fr] md:items-baseline md:gap-x-6 md:gap-y-1">
                <h3 className="text-base md:text-lg font-medium">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilotProcess;
