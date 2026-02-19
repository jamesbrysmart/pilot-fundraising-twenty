const steps = [
  {
    number: "01",
    title: "Fit conversation + selection",
    detail: "Short call and cohort selection for a small group.",
  },
  {
    number: "02",
    title: "Workflow workshop + scope",
    detail: "Process mapping, in-scope agreement, and the data slice to use.",
  },
  {
    number: "03",
    title: "Pilot execution",
    detail:
      "Use it as a helpful mirror for real workflows: compare, iterate, and learn without running everything twice.",
  },
  {
    number: "04",
    title: "Review + decision",
    detail: "Documented findings and clear next steps: stop, or continue.",
  },
];

const PilotProcess = () => {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container py-24 md:py-32">
        <div className="mb-12 max-w-2xl space-y-3">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            <span
              aria-hidden="true"
              className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-0.08em] rounded-full bg-[hsl(var(--shoot))]"
            />
            Pilot operating model
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            After selection, everything below happens inside a single 4-week
            pilot designed to keep effort predictable and produce a clear
            decision.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative grid grid-cols-[auto_1fr] items-baseline gap-6 py-5 md:gap-10 ${
                i < steps.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {i < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-10 bg-[hsl(var(--shoot))] opacity-50"
                />
              ) : null}
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
