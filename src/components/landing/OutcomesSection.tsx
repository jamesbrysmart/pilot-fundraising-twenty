const OutcomesSection = () => {
  return (
    <section className="container py-24 md:py-32">
      <div className="mb-12 max-w-2xl space-y-3">
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
          04 Decision
        </p>
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
              No obligation. Walk away with documented findings
              and an honest assessment of fit.
            </p>
          </div>
          <ul className="space-y-2.5">
            {[
              "No cost, no commitment",
              "Findings documented",
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
        <div className="bg-secondary/50 p-8 md:p-12 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Continue smoothly</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transition to an optional commercial phase.
              Build on everything you've already set up.
            </p>
          </div>
          <ul className="space-y-2.5">
            {[
              "No rework or restart",
              "Terms discussed after evaluation",
              "Roadmap shaped by your input",
            ].map((item) => (
              <li key={item} className="text-sm text-muted-foreground flex items-center gap-3">
                <span className="h-px w-4 bg-foreground/20 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
