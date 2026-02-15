const steps = [
  {
    number: "01",
    title: "Fit conversation",
    detail: "Short call to assess alignment.",
  },
  {
    number: "02",
    title: "Scoped setup",
    detail: "Controlled migration of bounded data.",
  },
  {
    number: "03",
    title: "4-week pilot",
    detail: "Real workflow. Weekly check-ins.",
  },
  {
    number: "04",
    title: "Your decision",
    detail: "Stop cleanly, or continue.",
  },
];

const PilotProcess = () => {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container py-24 md:py-32">
        <div className="mb-12 max-w-2xl space-y-3">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            03 Structure
          </p>
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Pilot operating model
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A bounded sequence from fit check to decision, designed to keep risk
            visible and workload predictable.
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
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                <h3 className="text-base md:text-lg font-medium min-w-[200px]">
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
