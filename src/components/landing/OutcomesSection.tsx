import { useDetailsSheet } from "@/components/application/ApplicationSheetProvider";

const OutcomesSection = () => {
  const { openDetails } = useDetailsSheet();

  const openAfterPilotDetails = () => {
    openDetails("involved");
  };

  return (
    <section className="container py-24 md:py-32">
      <div className="mb-12 max-w-2xl space-y-3">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          Clear next-step outcomes
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
        {/* Stop */}
        <div className="bg-background p-8 md:p-12 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Stop cleanly</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No obligation. Walk away with documented findings and an honest assessment of fit.
            </p>
          </div>
          <ul className="space-y-2.5">
            {[
              "No cost, no commitment",
              "What you learned about your process and data",
              "Your data stays yours",
            ].map((item) => (
              <li key={item} className="text-sm text-muted-foreground flex items-center gap-3">
                <span className="h-px w-4 bg-border shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Continue */}
        <div className="relative bg-secondary/50 p-8 md:p-12 space-y-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[hsl(var(--shoot))] opacity-50"
          />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Continue smoothly</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If it's a good fit for the team, continue without restarting or rework.
            </p>
          </div>
          <ul className="space-y-2.5">
            <li className="text-sm text-muted-foreground flex items-center gap-3">
              <span className="h-px w-4 bg-foreground/20 shrink-0" />
              Build on what's already set up
            </li>
            <li className="text-sm text-muted-foreground flex items-center gap-3">
              <span className="h-px w-4 bg-foreground/20 shrink-0" />
              Move more data over and tailor setup if needed
            </li>
            <li className="text-sm text-muted-foreground flex items-center gap-3">
              <span className="h-px w-4 bg-foreground/20 shrink-0" />
              <button
                type="button"
                onClick={openAfterPilotDetails}
                className="underline underline-offset-2 transition-colors hover:text-foreground"
              >
                After the pilot: continuation and commercials
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
