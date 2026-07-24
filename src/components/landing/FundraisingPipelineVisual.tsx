import GreenShootMark from "@/components/branding/GreenShootMark";

const lanes = [
  {
    label: "Research",
    count: 2,
    total: "£38k",
    cards: [{ title: "Youth wellbeing fund", funder: "North Star Trust", amount: "£22k" }],
  },
  {
    label: "Drafting",
    count: 3,
    total: "£86k",
    cards: [
      { title: "Community health programme", funder: "Carter Foundation", amount: "£40k" },
      { title: "STEM bursary expansion", funder: "Lumen Trust", amount: "£24k" },
    ],
  },
  {
    label: "Submitted",
    count: 4,
    total: "£154k",
    cards: [
      { title: "Children’s respite grant", funder: "Harper Family Office", amount: "£60k" },
    ],
  },
  {
    label: "Decision",
    count: 2,
    total: "£92k",
    cards: [
      { title: "Winter shelter programme", funder: "Nora Khan", amount: "£52k" },
    ],
  },
  {
    label: "Awarded",
    count: 2,
    total: "£118k",
    awarded: true,
    cards: [
      { title: "Crisis support response", funder: "Haven Partners", amount: "£68k" },
    ],
  },
];

const OpportunityCard = ({
  card,
}: {
  card: { title: string; funder: string; amount: string };
}) => (
  <div className="rounded border border-border bg-secondary p-2">
    <p className="line-clamp-2 text-[9px] font-medium leading-tight text-foreground sm:text-[10px]">
      {card.title}
    </p>
    <p className="mt-1 truncate text-[8px] text-muted-foreground sm:text-[9px]">
      {card.funder}
    </p>
    <p className="mt-1 text-[9px] font-medium text-foreground sm:text-[10px]">
      {card.amount}
    </p>
  </div>
);

const FundraisingPipelineVisual = () => {
  const mobileLanes = [lanes[0], lanes[2], lanes[4]];

  return (
    <figure
      className="relative h-full w-full overflow-hidden bg-[hsl(var(--brand-wash))] p-4 sm:p-5"
      aria-labelledby="fundraising-pipeline-visual-caption"
    >
      <figcaption
        id="fundraising-pipeline-visual-caption"
        className="relative z-10 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-[hsl(var(--brand-strong))]"
      >
        <GreenShootMark className="h-4 w-4 md:h-4 md:w-4" />
        Illustrative product view
      </figcaption>

      <div
        aria-hidden="true"
        className="absolute inset-x-4 -bottom-3 top-11 overflow-hidden rounded-t-lg border border-border bg-card sm:inset-x-7 sm:top-12"
      >
        <div className="flex h-8 items-center justify-between border-b border-border px-3 text-[10px] sm:h-9 sm:px-4 sm:text-xs">
          <div className="flex min-w-0 items-center gap-2">
            <span className="grid h-4 w-4 shrink-0 place-items-center rounded bg-[hsl(var(--brand-soft))] text-[8px] font-semibold text-[hsl(var(--brand-strong))]">
              F
            </span>
            <span className="truncate text-muted-foreground">Fundraising pipelines</span>
            <span className="text-border">/</span>
            <span className="truncate font-medium text-foreground">Grant applications</span>
          </div>
          <span className="ml-3 hidden shrink-0 text-[10px] text-muted-foreground sm:inline">
            13 active · £488k
          </span>
        </div>

        <div className="hidden h-[calc(100%-2.25rem)] grid-cols-5 px-2 sm:grid">
          {lanes.map((lane, laneIndex) => (
            <div
              key={lane.label}
              className={`min-w-0 py-2 ${
                laneIndex < lanes.length - 1 ? "border-r border-border" : ""
              }`}
            >
              <div className="px-2">
                <div className="flex items-center justify-between gap-1">
                  <span
                    className={`truncate rounded px-1.5 py-1 text-[9px] font-medium ${
                      lane.awarded
                        ? "bg-[hsl(var(--brand-soft))] text-[hsl(var(--brand-strong))]"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {lane.label}
                  </span>
                  <span className="text-[9px] text-muted-foreground">{lane.count}</span>
                </div>
                <p className="mt-1.5 text-[9px] font-medium text-muted-foreground">
                  {lane.total}
                </p>
              </div>
              <div className="mt-2 space-y-1.5 px-2">
                {lane.cards.map((card) => (
                  <OpportunityCard card={card} key={card.title} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid h-[calc(100%-2rem)] grid-cols-3 px-1.5 sm:hidden">
          {mobileLanes.map((lane, laneIndex) => (
            <div
              key={lane.label}
              className={`min-w-0 py-2 ${
                laneIndex < mobileLanes.length - 1 ? "border-r border-border" : ""
              }`}
            >
              <div className="px-1.5">
                <span
                  className={`block truncate rounded px-1.5 py-1 text-[8px] font-medium ${
                    lane.awarded
                      ? "bg-[hsl(var(--brand-soft))] text-[hsl(var(--brand-strong))]"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {lane.label} · {lane.count}
                </span>
                <p className="mt-1.5 text-[8px] text-muted-foreground">{lane.total}</p>
              </div>
              <div className="mt-2 px-1.5">
                <OpportunityCard card={lane.cards[0]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
};

export default FundraisingPipelineVisual;
