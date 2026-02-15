const scenarios = [
  {
    id: "01",
    title: "Donation intake and gift tracking",
    context:
      "Capture incoming gifts and keep donor context visible across channels.",
    signals: [
      "Gift records and donor history stay connected",
      "Campaign attribution remains consistent",
    ],
    proof:
      "You can evaluate whether day-to-day fundraising activity stays organized without spreadsheet drift.",
  },
  {
    id: "02",
    title: "Campaign execution with team visibility",
    context:
      "Review pipeline movement and donor touchpoints in one operating view.",
    signals: [
      "Shared campaign status for weekly check-ins",
      "Consistent updates across program and development roles",
    ],
    proof:
      "You can test team alignment and reporting confidence before making a larger platform decision.",
  },
  {
    id: "03",
    title: "Integration readiness and workflow fit",
    context:
      "Assess how this setup can fit with your existing tools and operating model.",
    signals: [
      "Scope assumptions and integration dependencies are surfaced early",
      "Boundaries stay explicit during pilot evaluation",
    ],
    proof:
      "You leave with a practical fit signal and clear next-step options, not ambiguity.",
  },
];

const ProofSection = () => {
  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="container py-24 md:py-32">
        <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-12">
          <aside className="xl:sticky xl:top-24 xl:self-start">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
              02 Structure
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
              Evidence gallery
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Visual snapshots of three core scenarios teams can evaluate in the
              pilot. Designed to keep proof concrete and scannable.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Fundraising workflows",
                "Integrations",
                "Decision confidence",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>

          <div className="space-y-6">
            {scenarios.map((scenario) => (
              <article
                key={scenario.id}
                className="overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="border-b border-border bg-secondary/30 p-3">
                  <div className="flex min-h-[220px] items-center justify-center rounded-md border border-dashed border-border bg-background md:min-h-[260px]">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Screenshot placeholder {scenario.id}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 p-5 md:p-6">
                  <div className="flex items-center gap-3">
                    <p className="text-xs tabular-nums uppercase tracking-wider text-muted-foreground">
                      Workflow {scenario.id}
                    </p>
                    <span className="h-px w-6 bg-border" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight md:text-lg">
                    {scenario.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {scenario.context}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {scenario.signals.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed">
                    <span className="font-medium">What this proves:</span>{" "}
                    <span className="text-muted-foreground">{scenario.proof}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
