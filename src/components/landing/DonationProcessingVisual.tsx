import GreenShootMark from "@/components/branding/GreenShootMark";
import { Check, CircleAlert, Search } from "lucide-react";

const stages = [
  { label: "Imported", state: "complete" },
  { label: "Match donors", state: "complete" },
  { label: "Review", state: "active" },
  { label: "Commit", state: "pending" },
];

const donations = [
  { donor: "Aiyana Okonkwo", amount: "£25", status: "Matched", ready: true },
  { donor: "Marlow Trust", amount: "£12,000", status: "Ready", ready: true },
  {
    donor: "Nora Fitzpatrick",
    amount: "£80",
    status: "Possible duplicate",
    attention: true,
  },
  { donor: "Anonymous donor", amount: "£45", status: "Needs fund" },
];

const DonationProcessingVisual = () => {
  return (
    <figure
      className="relative h-full w-full overflow-hidden bg-[hsl(var(--brand-wash))] p-4 sm:p-5"
      aria-labelledby="donation-processing-visual-caption"
    >
      <figcaption
        id="donation-processing-visual-caption"
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
            <span className="truncate text-muted-foreground">Donation intake</span>
            <span className="text-border">/</span>
            <span className="truncate font-medium text-foreground">Review batch</span>
          </div>
          <span className="ml-3 hidden shrink-0 text-[10px] text-muted-foreground sm:inline">
            12 gifts
          </span>
        </div>

        <div className="hidden h-[calc(100%-2.25rem)] grid-rows-[52px_1fr] sm:grid">
          <div className="grid grid-cols-4 border-b border-border px-4">
            {stages.map((stage, index) => (
              <div
                key={stage.label}
                className="relative flex items-center gap-2 text-[10px]"
              >
                {index > 0 ? (
                  <span
                    className={`absolute right-full top-1/2 h-px w-[calc(100%-24px)] -translate-y-1/2 ${
                      stage.state === "pending"
                        ? "bg-border"
                        : "bg-[hsl(var(--brand-line))]"
                    }`}
                  />
                ) : null}
                <span
                  className={`relative z-10 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                    stage.state === "complete"
                      ? "border-[hsl(var(--brand-strong))] bg-[hsl(var(--brand-strong))] text-[hsl(var(--brand-strong-foreground))]"
                      : stage.state === "active"
                        ? "border-[hsl(var(--brand-strong))] bg-[hsl(var(--brand-soft))] text-[hsl(var(--brand-strong))]"
                        : "border-border bg-background text-muted-foreground"
                  }`}
                >
                  {stage.state === "complete" ? (
                    <Check className="h-3 w-3" strokeWidth={2} />
                  ) : (
                    index + 1
                  )}
                </span>
                <span
                  className={`truncate ${
                    stage.state === "pending"
                      ? "text-muted-foreground"
                      : "font-medium text-foreground"
                  }`}
                >
                  {stage.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid min-h-0 grid-cols-[1fr_168px]">
            <div className="min-w-0 border-r border-border">
              <div className="grid h-7 grid-cols-[1fr_64px_96px] items-center border-b border-border px-3 text-[9px] font-medium text-muted-foreground">
                <span>Donor</span>
                <span>Amount</span>
                <span>Status</span>
              </div>
              {donations.map((donation) => (
                <div
                  key={`${donation.donor}-${donation.amount}`}
                  className="grid h-8 grid-cols-[1fr_64px_96px] items-center border-b border-border px-3 text-[10px]"
                >
                  <span className="truncate font-medium text-foreground">
                    {donation.donor}
                  </span>
                  <span className="text-foreground">{donation.amount}</span>
                  <span
                    className={`flex w-fit max-w-[90px] items-center gap-1 truncate rounded px-1.5 py-0.5 ${
                      donation.ready
                        ? "bg-[hsl(var(--brand-soft))] text-[hsl(var(--brand-strong))]"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {donation.attention ? (
                      <CircleAlert className="h-2.5 w-2.5 shrink-0" />
                    ) : donation.ready ? (
                      <Check className="h-2.5 w-2.5 shrink-0" />
                    ) : null}
                    <span className="truncate">{donation.status}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3">
              <p className="text-[10px] font-semibold text-foreground">Batch review</p>
              <div className="mt-3 space-y-2.5 text-[10px]">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Ready</span>
                  <span className="font-medium text-[hsl(var(--brand-strong))]">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Needs review</span>
                  <span className="font-medium text-foreground">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Possible duplicate</span>
                  <span className="font-medium text-foreground">1</span>
                </div>
              </div>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-2/3 rounded-full bg-[hsl(var(--brand-strong))]" />
              </div>
              <p className="mt-2 text-[9px] leading-relaxed text-muted-foreground">
                Review exceptions before creating committed gift records.
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 sm:hidden">
          <div className="flex items-center gap-2 border-b border-border pb-2 text-[9px]">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-[hsl(var(--brand-strong))] text-[hsl(var(--brand-strong-foreground))]">
              <Check className="h-2.5 w-2.5" />
            </span>
            <span className="text-muted-foreground">Matched</span>
            <span className="h-px flex-1 bg-[hsl(var(--brand-line))]" />
            <span className="grid h-4 w-4 place-items-center rounded-full border border-[hsl(var(--brand-strong))] bg-[hsl(var(--brand-soft))] text-[8px] text-[hsl(var(--brand-strong))]">
              3
            </span>
            <span className="font-medium text-foreground">Review</span>
          </div>
          <div className="mt-2 space-y-1">
            {donations.slice(0, 3).map((donation) => (
              <div
                key={`${donation.donor}-mobile`}
                className="grid grid-cols-[1fr_auto] items-center gap-2 py-1.5 text-[9px]"
              >
                <span className="truncate text-foreground">{donation.donor}</span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  {donation.attention ? (
                    <Search className="h-2.5 w-2.5" />
                  ) : (
                    <Check className="h-2.5 w-2.5 text-[hsl(var(--brand-strong))]" />
                  )}
                  {donation.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
};

export default DonationProcessingVisual;
