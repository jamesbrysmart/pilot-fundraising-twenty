import { useContactSheet } from "@/components/contact/ContactSheetProvider";

const scenarios = [
  {
    id: "01",
    anchorId: "workflow-donor-360",
    thesis: "Donor 360 + history",
    title: "Donor 360 with giving history",
    context:
      "Open a donor record and see gifts, recurring status, notes, and campaign attribution in one place.",
    proof:
      "You can judge whether the system keeps donor context trustworthy and usable for day-to-day fundraising.",
    headline: "A complete view of every supporter.",
    description:
      "See giving history, household relationships, and every interaction - from emails to events - on a single, unified record.",
    imageSrc: "/images/proof/fundraising-donor-360.png",
    imageAlt: "Donor 360 view showing donor profile and giving history.",
  },
  {
    id: "02",
    anchorId: "workflow-gift-intake",
    thesis: "Gift intake + batches",
    title: "Gift intake and batch processing",
    context:
      "Process incoming gifts in batches, handle cleanup, and keep downstream reporting consistent.",
    proof:
      "You can evaluate whether real-world intake and cleanup feel manageable without spreadsheet drift.",
    headline: "Process donations with confidence.",
    description:
      "Handle large volumes, prevent duplicates, and resolve errors before donations ever hit your records.",
    imageSrc: "/images/proof/fundraising-gift-intake-batch.png",
    imageAlt: "Gift intake and batch processing view showing grouped gifts and workflow actions.",
  },
  {
    id: "03",
    anchorId: "workflow-recurring",
    thesis: "Recurring lifecycle",
    title: "Recurring giving lifecycle",
    context:
      "Track recurring gifts end-to-end, including status changes, payment outcomes, and retention signals.",
    proof:
      "You can judge whether recurring revenue workflows feel reliable enough for production use.",
    headline: "Stay in control of recurring donations.",
    description:
      "See what’s paid, what’s missed, and what needs attention - all in one place.",
    imageSrc: "/images/proof/fundraising-recurring-lifecycle.png",
    imageAlt: "Recurring gift lifecycle view showing status and timeline for a donor.",
  },
  {
    id: "04",
    anchorId: "workflow-pipeline",
    thesis: "Pipeline kanban",
    title: "Pipeline visibility for major gifts",
    context:
      "Use a shared kanban to keep opportunities, stages, and next actions visible across the team.",
    proof:
      "You can test whether pipeline visibility improves team alignment without adding admin overhead.",
    headline: "Structured tracking for high-value fundraising.",
    description:
      "Manage major donors and grant applications through clear stages, with full visibility into progress and next steps.",
    imageSrc: "/images/proof/fundraising-pipeline-kanban.png",
    imageAlt: "Fundraising pipeline kanban showing opportunities in stages.",
  },
  {
    id: "05",
    anchorId: "workflow-dashboard",
    thesis: "Performance dashboard",
    title: "Performance dashboard and reporting",
    context:
      "Scan core fundraising performance signals without stitching together multiple exports.",
    proof:
      "You can assess whether reporting feels coherent enough to support decisions and board-facing updates.",
    headline: "Real-time fundraising insight.",
    description:
      "Customisable dashboards with clear metrics, goal tracking, and instant visibility across income and pipeline.",
    imageSrc: "/images/proof/fundraising-performance-dashboard.png",
    imageAlt: "Fundraising performance dashboard showing key metrics and charts.",
  },
];

const ProofSection = () => {
  const { openContact } = useContactSheet();

  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="container pt-16 pb-24 md:py-32">
        <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-12">
          <aside className="xl:sticky xl:top-24 xl:self-start">
            <h2 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
              <span
                aria-hidden="true"
                className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-0.08em] rounded-full bg-[hsl(var(--shoot))]"
              />
              Modern fundraising workflows
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Five core workflows to scan in minutes. Click to jump to each
              scenario.
            </p>
            <nav className="relative mt-6 border-l border-border pl-4">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-10 w-px bg-[hsl(var(--shoot))] opacity-55"
              />
              <div className="space-y-1">
                {scenarios.map((scenario) => (
                  <a
                    key={scenario.anchorId}
                    href={`#${scenario.anchorId}`}
                    className="block rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                  >
                    {scenario.thesis}
                  </a>
                ))}
              </div>
            </nav>

            <div className="mt-6 border-t border-border pt-6">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                What we're building
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Fundraising is the first module. More nonprofit workflows are
                planned over time, built on open-source foundations.
              </p>
              <button
                type="button"
                onClick={() => openContact("proof-section")}
                className="mt-3 text-sm text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
              >
                Want to help build it? Contact us.
              </button>
            </div>
          </aside>

          <div className="space-y-6">
            {scenarios.map((scenario, index) => (
              <article
                key={scenario.id}
                id={scenario.anchorId}
                className="scroll-mt-24 overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="border-b border-border">
                  <div className="border-b border-border bg-background px-4 py-3 md:px-5">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      <span
                        aria-hidden="true"
                        className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-0.08em] rounded-full bg-[hsl(var(--shoot))]"
                      />
                      {scenario.thesis}
                    </p>
                  </div>

                  <div className="relative aspect-[21/9] w-full overflow-hidden bg-secondary/10">
                    {scenario.imageSrc ? (
                      <div
                        className={`absolute inset-0 scale-[1.035] ${
                          index % 2 === 0 ? "rotate-[-1.25deg]" : "rotate-[1.25deg]"
                        } will-change-transform`}
                      >
                        <img
                          src={scenario.imageSrc}
                          alt={scenario.imageAlt}
                          className="h-full w-full object-cover pointer-events-none select-none opacity-85 saturate-75 contrast-90"
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width: 1536px) 760px, (min-width: 1280px) 690px, (min-width: 1024px) 936px, 90vw"
                          draggable={false}
                        />
                      </div>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          Screenshot placeholder {scenario.id}
                        </p>
                      </div>
                    )}

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[hsl(var(--shoot))] opacity-60"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-background/15 to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/45 via-background/10 to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-background/60 via-background/20 to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,hsl(var(--foreground)/0.06),transparent_52%)]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,hsl(var(--foreground)/0.05),transparent_55%)]"
                    />
                  </div>
                </div>

                <div className="space-y-3 p-5 md:p-6">
                  {scenario.headline && scenario.description ? (
                    <div className="space-y-2">
                      <p className="text-sm font-medium leading-relaxed">
                        {scenario.headline}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {scenario.description}
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-base font-semibold tracking-tight md:text-lg">
                        {scenario.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {scenario.context}
                      </p>
                      <p className="text-sm leading-relaxed">
                        <span className="font-medium">What this proves:</span>{" "}
                        <span className="text-muted-foreground">{scenario.proof}</span>
                      </p>
                    </>
                  )}
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
