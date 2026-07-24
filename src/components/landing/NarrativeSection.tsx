import GreenShootMark from "@/components/branding/GreenShootMark";

const NarrativeSection = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="grid items-stretch gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-8 lg:gap-10">
        {/* The problem */}
        <div className="space-y-4 py-3 md:px-3 md:py-10 lg:px-6">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            The trade-off
          </p>
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Fundraising systems often
            <br />
            make you choose.
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Small fundraising teams need software that understands their work,
            but the usual options involve a compromise.
          </p>
          <ul className="max-w-lg space-y-2.5">
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
        <div
          className="relative overflow-hidden rounded-lg p-7 pb-16 text-foreground md:p-10 md:pb-16 lg:p-12 lg:pb-16"
          style={{
            backgroundImage:
              "linear-gradient(145deg, hsl(var(--brand-wash)) 0%, hsl(var(--brand-wash)) 45%, hsl(var(--brand-soft)) 78%, hsl(var(--background)) 100%)",
          }}
        >
          <p className="relative z-10 text-[11px] uppercase tracking-wider text-[hsl(var(--shoot))]">
            A different starting point
          </p>

          <div className="relative z-10 mt-4">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Start with fundraising.
              <br />
              Shape the wider CRM.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Fundraising for Twenty combines a developed fundraising model with
              Twenty&apos;s flexible CRM foundation.
            </p>
          </div>

          <ul className="relative z-10 mt-4 max-w-lg space-y-2.5">
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
                  <span className="font-medium text-foreground">
                    {item.label}:
                  </span>{" "}
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>

          <GreenShootMark className="pointer-events-none absolute bottom-1 right-2 h-14 w-14 text-[hsl(var(--shoot))] md:h-16 md:w-16" />
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
