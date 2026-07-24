import GreenShootMark from "@/components/branding/GreenShootMark";
import { ArrowRight } from "lucide-react";

const partnershipThemes = [
  {
    title: "Understand how you work",
    detail:
      "Understand your people, processes, data and wider priorities—not fundraising in isolation.",
  },
  {
    title: "Shape the right system",
    detail:
      "Design a coherent CRM: how information connects, what belongs in Twenty and where specialist workflows are needed.",
  },
  {
    title: "Grow it with you",
    detail:
      "Stay involved after launch to support, improve and extend the CRM as your organisation’s needs change.",
  },
];

const OutcomesSection = () => {
  return (
    <section className="border-y border-[hsl(var(--brand-line))] bg-background">
      <div className="container pt-20 md:pt-24">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            Working with 3Trees Digital
          </p>
          <h2 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">
            A developed fundraising product is the starting point.
            <br />
            Your CRM should grow from there.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Fundraising for Twenty provides the foundation. 3Trees brings
            nonprofit CRM, data, migration and implementation experience to
            shape the wider system—and help it grow with you.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Beyond fundraising, that might include volunteer coordination,
            membership management, programme participation and other workflows
            particular to your organisation.
          </p>
        </div>
      </div>

      <div className="relative mt-10 border-y border-[hsl(var(--brand-line))] bg-[hsl(var(--brand-wash))]">
        <span
          aria-hidden="true"
          className="absolute bottom-7 left-0 right-12 hidden h-px bg-[hsl(var(--shoot))] lg:block"
        />
        <GreenShootMark className="absolute bottom-4 right-4 hidden h-14 w-14 lg:block" />
        <div className="container">
          <ol className="relative grid divide-y divide-[hsl(var(--brand-line))] lg:grid-cols-3 lg:divide-y-0">
            {partnershipThemes.map((theme, index) => (
              <li
                key={theme.title}
                className="relative px-6 py-6 sm:px-8 lg:px-8 lg:pb-16 lg:pt-7"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-soft))] text-xs font-semibold text-[hsl(var(--brand-soft-foreground))]"
                  >
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {theme.title}
                  </h3>
                </div>
                <p className="ml-10 mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {theme.detail}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-7 left-1/2 hidden h-5 w-px -translate-x-1/2 bg-[hsl(var(--brand-transition))] lg:block"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-6 left-1/2 z-10 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-[hsl(var(--shoot))] lg:block"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="container pb-20 md:pb-24">
        <span
          aria-disabled="true"
          className="mt-6 inline-flex items-center text-sm text-[hsl(var(--brand-soft-foreground))]"
        >
          Learn more about 3Trees Digital and how we work
          <ArrowRight aria-hidden="true" className="ml-1.5 h-3.5 w-3.5" />
        </span>
      </div>
    </section>
  );
};

export default OutcomesSection;
