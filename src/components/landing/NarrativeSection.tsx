const NarrativeSection = () => {
  return (
    <section className="container pt-24 pb-16 md:py-32">
      <div className="grid gap-16 md:grid-cols-[0.95fr_1.05fr] md:gap-8 lg:gap-10">
        {/* The problem */}
        <div className="space-y-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            The trade-off
          </p>
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Fundraising systems often
            <br />
            make you choose.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
            Small fundraising teams need software that understands their work,
            but the usual options involve a compromise.
          </p>
          <ul className="space-y-2.5 max-w-sm">
            {[
              {
                label: "Dedicated fundraising products",
                detail:
                  "Strong ready-made workflows, but less freedom when your organisation needs a different data model or wider CRM.",
              },
              {
                label: "Enterprise CRM platforms",
                detail:
                  "Highly configurable, but often complex and expensive to implement and maintain.",
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
        </div>

        {/* The response */}
        <div className="md:mt-8">
          <p className="text-[11px] uppercase tracking-wider text-[hsl(var(--shoot))]">
            A different starting point
          </p>
          <h2 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">
            Start with fundraising.
            <br />
            Shape the wider CRM.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Fundraising for Twenty combines a developed fundraising model with
            Twenty&apos;s flexible CRM foundation.
          </p>
          <ul className="mt-4 max-w-sm space-y-2.5">
            {[
              {
                label: "A developed fundraising core",
                detail:
                  "Begin with donor, gift, recurring giving, appeal and funding opportunity structures already in place.",
              },
              {
                label: "A wider CRM shaped around your organisation",
                detail:
                  "Shape the wider CRM's data, workflows and relationships around how your organisation works.",
              },
            ].map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-px w-4 shrink-0 bg-[hsl(var(--shoot))] opacity-45" />
                <span className="leading-relaxed">
                  <span className="font-medium text-foreground">{item.label}:</span>{" "}
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
