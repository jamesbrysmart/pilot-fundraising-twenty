import GreenShootMark from "@/components/branding/GreenShootMark";
import { TrendingUp } from "lucide-react";

const kpis = [
  { label: "YTD raised", value: "£1.84M", trend: "+12.4%" },
  { label: "Recurring monthly", value: "£24.8k", trend: "+3.1%" },
  { label: "Pipeline", value: "£488k", detail: "13 live" },
];

const incomeBars = [42, 58, 50, 72, 66, 84];

const FundraisingDashboardVisual = () => {
  return (
    <figure
      className="relative h-full w-full overflow-hidden bg-[hsl(var(--brand-wash))] p-4 sm:p-5"
      aria-labelledby="fundraising-dashboard-visual-caption"
    >
      <figcaption
        id="fundraising-dashboard-visual-caption"
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
            <span className="truncate text-muted-foreground">Dashboards</span>
            <span className="text-border">/</span>
            <span className="truncate font-medium text-foreground">
              Fundraising performance
            </span>
          </div>
          <span className="ml-3 hidden shrink-0 text-[10px] text-muted-foreground sm:inline">
            YTD snapshot
          </span>
        </div>

        <div className="hidden h-[calc(100%-2.25rem)] grid-cols-[142px_1fr_142px] grid-rows-2 gap-2 p-2 sm:grid">
          <div className="grid min-h-0 grid-rows-3 gap-2">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="flex min-h-0 flex-col justify-center rounded-md border border-border bg-secondary px-2.5 py-1.5"
              >
                <p className="truncate text-[9px] font-medium text-foreground">
                  {kpi.label}
                </p>
                <div className="mt-0.5 flex items-baseline justify-between gap-2">
                  <span className="text-sm font-semibold tracking-tight text-foreground">
                    {kpi.value}
                  </span>
                  {kpi.trend ? (
                    <span className="flex items-center gap-0.5 text-[8px] font-medium text-[hsl(var(--brand-strong))]">
                      <TrendingUp className="h-2.5 w-2.5" strokeWidth={2} />
                      {kpi.trend}
                    </span>
                  ) : (
                    <span className="text-[8px] text-muted-foreground">{kpi.detail}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-2 flex min-h-0 flex-col rounded-md border border-border bg-secondary p-2.5">
            <p className="text-[9px] font-medium text-foreground">Income over time</p>
            <div className="relative mt-1.5 min-h-0 flex-1 overflow-hidden">
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3].map((line) => (
                  <span key={line} className="block border-t border-dashed border-border" />
                ))}
              </div>
              <svg
                className="relative h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 240 70"
              >
                <path
                  d="M4 60 L42 51 L80 54 L118 36 L156 30 L194 18 L236 10 L236 70 L4 70 Z"
                  fill="hsl(var(--brand-soft))"
                />
                <path
                  d="M4 60 L42 51 L80 54 L118 36 L156 30 L194 18 L236 10"
                  fill="none"
                  stroke="hsl(var(--brand-strong))"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>

          <div className="col-span-2 flex min-h-0 flex-col rounded-md border border-border bg-secondary p-2.5">
            <p className="text-[9px] font-medium text-foreground">Income by source</p>
            <div className="mt-1.5 flex min-h-0 flex-1 items-end gap-2">
              {incomeBars.map((height, index) => (
                <div key={index} className="flex h-full flex-1 items-end">
                  <span
                    className="block w-full rounded-t-sm bg-[hsl(var(--brand-strong))]"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-h-0 flex-col rounded-md border border-border bg-secondary p-2.5">
            <p className="text-[9px] font-medium text-foreground">Donor mix</p>
            <div className="flex min-h-0 flex-1 items-center justify-center gap-2">
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full"
                style={{
                  background:
                    "conic-gradient(hsl(var(--brand-strong)) 0 62%, hsl(var(--brand-line)) 62% 100%)",
                }}
              >
                <div className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-[9px] font-semibold text-foreground">
                  62%
                </div>
              </div>
              <div className="min-w-0 text-[8px] text-muted-foreground">
                <p className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-sm bg-[hsl(var(--brand-strong))]" />
                  Returning
                </p>
                <p className="mt-1 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-sm bg-[hsl(var(--brand-line))]" />
                  New
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid h-[calc(100%-2rem)] grid-cols-2 grid-rows-[auto_1fr] gap-2 p-2 sm:hidden">
          {kpis.slice(0, 2).map((kpi) => (
            <div
              key={`${kpi.label}-mobile`}
              className="rounded-md border border-border bg-secondary p-2"
            >
              <p className="truncate text-[8px] text-muted-foreground">{kpi.label}</p>
              <p className="mt-1 text-xs font-semibold text-foreground">{kpi.value}</p>
            </div>
          ))}
          <div className="col-span-2 flex min-h-0 flex-col rounded-md border border-border bg-secondary p-2.5">
            <p className="text-[9px] font-medium text-foreground">Income over time</p>
            <div className="mt-2 flex min-h-0 flex-1 items-end gap-1.5">
              {incomeBars.map((height, index) => (
                <span
                  key={index}
                  className="block flex-1 rounded-t-sm bg-[hsl(var(--brand-strong))]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default FundraisingDashboardVisual;
