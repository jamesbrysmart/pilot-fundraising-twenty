import { ArrowRight } from "lucide-react";

const responsibilities = [
  {
    title: "System design",
    detail:
      "Decide how fundraising connects with grants, partnerships and wider relationships.",
  },
  {
    title: "Data and migration",
    detail:
      "Prepare, map and validate the information moving into Twenty.",
  },
  {
    title: "Implementation and improvement",
    detail:
      "Support setup, rollout, adoption and continued development.",
  },
];

const OutcomesSection = () => {
  return (
    <section className="container py-24 md:py-32">
      <div className="border-y border-border py-10 md:py-14">
        <div className="mb-10 max-w-3xl space-y-3 md:mb-12">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            Product + implementation
          </p>
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            A developed product, shaped around your organisation.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Fundraising for Twenty provides a strong fundraising starting point.
            3Trees Digital helps design and implement the wider CRM around how
            your organisation works.
          </p>
        </div>

        <div className="grid md:grid-cols-[0.38fr_0.62fr]">
          <div className="md:pr-10 lg:pr-14">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
              Fundraising for Twenty
            </p>
            <h3 className="mt-3 max-w-xs text-lg font-semibold leading-snug">
              Start with substantial fundraising capability.
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The core fundraising model and workflows are already developed on
              Twenty, so you are not starting from a blank CRM.
            </p>
          </div>

          <div className="mt-9 border-t border-border pt-9 md:mt-0 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-14">
            <p className="text-[11px] uppercase tracking-wider text-[hsl(var(--shoot))]">
              3Trees Digital
            </p>
            <h3 className="mt-3 text-lg font-semibold leading-snug">
              Shape the wider system around your organisation.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              3Trees works with your team to understand how the organisation
              operates and decide how Fundraising for Twenty, the wider CRM and
              connected systems should fit together.
            </p>

            <dl className="mt-7 divide-y divide-border border-y border-border">
              {responsibilities.map((responsibility) => (
                <div
                  key={responsibility.title}
                  className="grid gap-1 py-4 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-5"
                >
                  <dt className="text-sm font-medium text-foreground">
                    {responsibility.title}
                  </dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">
                    {responsibility.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <span
              aria-disabled="true"
              title="3Trees Digital website coming soon"
              className="mt-7 inline-flex cursor-not-allowed items-center text-sm text-muted-foreground opacity-55"
            >
              Learn more about 3Trees Digital and how we work
              <ArrowRight aria-hidden="true" className="ml-1.5 h-3.5 w-3.5" />
              <span className="sr-only"> (website coming soon)</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
