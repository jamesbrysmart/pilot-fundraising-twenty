import { useContactSheet } from "@/components/contact/ContactSheetProvider";
import { useEffect, useMemo, useRef, useState } from "react";

const scenarios = [
  {
    id: "01",
    anchorId: "workflow-donor-360",
    thesis: "Donor profile + history",
    headline: "A complete view of every supporter.",
    description:
      "See giving history, household relationships, and every interaction, from emails to events, on a single unified record.",
    imageSrc: "/images/proof/fundraising-donor-360.webp",
    imageAlt: "Donor profile view showing giving history and interactions.",
  },
  {
    id: "02",
    anchorId: "workflow-gift-intake",
    thesis: "Donation processing",
    headline: "Process donations with confidence.",
    description:
      "Handle large volumes, prevent duplicates, and resolve errors before donations ever hit your records.",
    imageSrc: "/images/proof/fundraising-gift-intake-batch.webp",
    imageAlt: "Gift intake and batch processing view showing grouped gifts and workflow actions.",
  },
  {
    id: "03",
    anchorId: "workflow-recurring",
    thesis: "Recurring donations",
    headline: "Stay in control of recurring donations.",
    description:
      "See what’s paid, what’s missed, and what needs attention - all in one place.",
    imageSrc: "/images/proof/fundraising-recurring-lifecycle.webp",
    imageAlt: "Recurring gift lifecycle view showing status and timeline for a donor.",
  },
  {
    id: "04",
    anchorId: "workflow-pipeline",
    thesis: "Major gifts + grants",
    headline: "Structured tracking for high-value fundraising.",
    description:
      "Manage major donors and grant applications through clear stages, with full visibility into progress and next steps.",
    imageSrc: "/images/proof/fundraising-pipeline-kanban.webp",
    imageAlt: "Fundraising pipeline board showing opportunities in stages.",
  },
  {
    id: "05",
    anchorId: "workflow-dashboard",
    thesis: "Fundraising dashboard",
    headline: "Real-time fundraising insight.",
    description:
      "Customizable dashboards with clear metrics, goal tracking, and instant visibility across income and pipeline.",
    imageSrc: "/images/proof/fundraising-performance-dashboard.webp",
    imageAlt: "Fundraising performance dashboard showing key metrics and charts.",
  },
];

const ProofSection = () => {
  const { openContact } = useContactSheet();
  const [activeAnchorId, setActiveAnchorId] = useState(scenarios[0]?.anchorId);
  const scenarioAnchorIds = useMemo(
    () => scenarios.map((scenario) => scenario.anchorId),
    [],
  );
  const observedElementsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const elements = scenarioAnchorIds
      .map((id) => observedElementsRef.current[id])
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            if (b.intersectionRatio !== a.intersectionRatio) {
              return b.intersectionRatio - a.intersectionRatio;
            }
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });

        const next = visible[0]?.target?.id;
        if (next && typeof next === "string") setActiveAnchorId(next);
      },
      {
        root: null,
        // Bias "active" toward what's near the top of the viewport as you scroll.
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [scenarioAnchorIds]);

  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="container pt-16 pb-24 md:py-32">
        <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-12">
          <aside className="xl:sticky xl:top-24 xl:self-start">
            <h2 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
              Modern fundraising workflows
            </h2>
            <nav className="relative mt-6 border-l border-border pl-4">
              <div className="space-y-1">
                {scenarios.map((scenario) => (
                  <a
                    key={scenario.anchorId}
                    href={`#${scenario.anchorId}`}
                    onClick={() => setActiveAnchorId(scenario.anchorId)}
                    className={`relative block rounded-md px-2 py-2 text-sm transition-colors hover:bg-background hover:text-foreground ${
                      activeAnchorId === scenario.anchorId
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {activeAnchorId === scenario.anchorId ? (
                      <span
                        aria-hidden="true"
                        className="absolute -left-4 top-1 bottom-1 w-px bg-[hsl(var(--shoot))] opacity-70"
                      />
                    ) : null}
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
                ref={(node) => {
                  observedElementsRef.current[scenario.anchorId] = node;
                }}
                className="scroll-mt-24 overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="border-b border-border">
                  <div className="border-b border-border bg-background px-4 py-3 md:px-5">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {scenario.thesis}
                    </p>
                  </div>

                  <div className="relative aspect-[21/9] w-full overflow-hidden bg-[hsl(var(--shoot)/0.08)] ring-2 ring-inset ring-[hsl(var(--shoot)/0.55)]">
                    {scenario.imageSrc ? (
                      <div
                        className={`absolute inset-0 scale-[1.015] ${
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
                      className="pointer-events-none absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-background/60 via-background/20 to-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-3 p-5 md:p-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium leading-relaxed">
                      {scenario.headline}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {scenario.description}
                    </p>
                  </div>
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
