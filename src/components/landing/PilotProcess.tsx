const steps = [
  {
    number: "01",
    title: "Understand your current setup",
    detail:
      "Discuss your goals, existing systems, fundraising processes, data and wider CRM needs.",
  },
  {
    number: "02",
    title: "Agree the first implementation",
    detail:
      "Decide what should be included first, how the system should be structured and how existing data will move across.",
  },
  {
    number: "03",
    title: "Prepare the data and team",
    detail:
      "Move and validate the agreed data, test the setup with real scenarios and prepare the team for day-to-day use.",
  },
  {
    number: "04",
    title: "Launch and improve",
    detail:
      "Move into live use with support, then refine the system as your organisation's needs evolve.",
  },
];

const PilotProcess = () => {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container py-24 md:py-32">
        <div className="mb-9 max-w-2xl space-y-3">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Getting started with Fundraising for Twenty
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Start with a developed fundraising app, then shape the data, setup
            and rollout around how your organisation works.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid grid-cols-[auto_1fr] items-baseline gap-6 py-5 md:min-h-[5.75rem] md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-6 ${
                i < steps.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="w-10 text-2xl font-semibold tabular-nums text-muted-foreground/40 md:w-auto md:text-3xl">
                {step.number}
              </span>
              <div className="flex flex-col gap-1 md:grid md:grid-cols-[320px_minmax(0,1fr)] md:items-baseline md:gap-x-4 md:gap-y-1">
                <h3 className="text-base font-medium md:whitespace-nowrap md:text-lg">
                  {step.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
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
