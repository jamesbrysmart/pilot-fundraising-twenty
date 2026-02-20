const NarrativeSection = () => {
  return (
    <section className="container pt-24 pb-16 md:py-32">
      <div className="grid gap-20 md:grid-cols-2">
        {/* The problem */}
        <div className="space-y-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            The problem
          </p>
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            CRM migrations are
            <br />
            high-stakes decisions.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
            Small fundraising teams are stuck:
          </p>
          <ul className="space-y-2.5 max-w-sm">
            {[
              "A legacy CRM that creates messy data you can't fully trust",
              "A complex, expensive migration to another tool with features you don't need",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-px w-4 bg-border shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
            Without real evidence, the decision stays uncertain and a migration
            feels like gambling with donor relationships and team trust.
          </p>
        </div>

        {/* The response */}
        <div className="space-y-4 md:pt-12">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            This pilot
          </p>
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Evaluate a modern CRM
            <br />
            with zero commitment.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
            A supported evaluation that lets you test your fundraising workflows,
            without forcing a switch.
          </p>
          <ul className="space-y-2.5 max-w-sm">
            {[
              {
                label: "No cost",
                detail: "Free Twenty licenses, plus workshops, consulting, and configuration.",
              },
              {
                label: "Zero risk",
                detail:
                  "Runs alongside your current system during the pilot. Clean stop when you choose.",
              },
              {
                label: "Real data",
                detail:
                  "You'll leave with clearer workflow requirements and a sharper view of gaps and readiness.",
              },
            ].map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-px w-4 bg-border shrink-0" />
                <span className="leading-relaxed">
                  <span className="font-medium text-foreground">{item.label}:</span>{" "}
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
            We're looking for real-world feedback; if it's a fit, we hope you'll
            want to continue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
