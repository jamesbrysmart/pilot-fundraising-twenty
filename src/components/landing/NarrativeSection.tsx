const NarrativeSection = () => {
  return (
    <section className="container py-24 md:py-32">
      <div className="mb-12 flex flex-wrap items-center gap-2">
        {["01 Opportunity", "02 Structure", "03 Decision"].map((stage) => (
          <span
            key={stage}
            className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground"
          >
            {stage}
          </span>
        ))}
      </div>
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
            Switching costs are real — in time, data, and team trust. Most
            organizations can't commit to a new platform without evidence
            it works for their workflow.
          </p>
        </div>

        {/* The response */}
        <div className="space-y-4 md:pt-12">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            This pilot
          </p>
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Designed to reduce
            <br />
            that uncertainty.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
            A bounded, supported evaluation — enough to learn what you
            need, without the risk of a full commitment. The first
            fundraising module built as a community extension for Twenty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
