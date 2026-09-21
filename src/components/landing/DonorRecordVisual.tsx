import GreenShootMark from "@/components/branding/GreenShootMark";
import { Gift, Mail, Users } from "lucide-react";

const fields = [
  ["Lifetime giving", "£4,850"],
  ["Regular gift", "£25 monthly"],
  ["Household", "Okonkwo household"],
  ["Preference", "Email"],
];

const activity = [
  {
    icon: Gift,
    title: "£25 regular gift received",
    detail: "Community programme · Direct debit",
    accent: true,
  },
  {
    icon: Mail,
    title: "Appeal response recorded",
    detail: "Spring appeal · Email reply",
  },
  {
    icon: Users,
    title: "Household relationship reviewed",
    detail: "Okonkwo household · Updated by Maya",
  },
];

const DonorRecordVisual = () => {
  return (
    <figure
      className="relative h-full w-full overflow-hidden bg-[hsl(var(--brand-wash))] p-4 sm:p-5"
      aria-labelledby="donor-record-visual-caption"
    >
      <figcaption
        id="donor-record-visual-caption"
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
            <span className="truncate text-muted-foreground">Supporters</span>
            <span className="text-border">/</span>
            <span className="truncate font-medium text-foreground">
              Aiyana Okonkwo
            </span>
          </div>
          <span className="ml-3 hidden shrink-0 rounded bg-[hsl(var(--brand-soft))] px-2 py-1 text-[10px] font-medium text-[hsl(var(--brand-strong))] sm:inline">
            Active donor
          </span>
        </div>

        <div className="hidden h-[calc(100%-2.25rem)] grid-cols-[0.9fr_1.1fr] sm:grid">
          <div className="border-r border-border p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[hsl(var(--brand-soft))] text-xs font-semibold text-[hsl(var(--brand-strong))]">
                AO
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">
                  Aiyana Okonkwo
                </p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Regular giver · Since 2021
                </p>
              </div>
            </div>

            <dl className="mt-4 space-y-1.5">
              {fields.map(([label, value]) => (
                <div
                  key={label}
                  className="grid min-h-6 grid-cols-[88px_1fr] items-center gap-2 text-[11px]"
                >
                  <dt className="truncate text-muted-foreground">{label}</dt>
                  <dd className="truncate font-medium text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="min-w-0">
            <div className="flex h-9 items-center gap-5 border-b border-border px-4 text-[11px]">
              <span className="relative flex h-full items-center font-medium text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-foreground">
                Activity
              </span>
              <span className="text-muted-foreground">Notes</span>
              <span className="text-muted-foreground">Tasks</span>
            </div>

            <div className="px-4 py-3">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-medium text-muted-foreground">
                <span>Recent activity</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="space-y-1">
                {activity.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="grid grid-cols-[24px_1fr] gap-2 py-1.5"
                    >
                      <span
                        className={`grid h-6 w-6 place-items-center rounded-md border ${
                          item.accent
                            ? "border-[hsl(var(--brand-line))] bg-[hsl(var(--brand-soft))] text-[hsl(var(--brand-strong))]"
                            : "border-border bg-secondary text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-3 w-3" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-medium text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-0.5 truncate text-[10px] text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 sm:hidden">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[hsl(var(--brand-soft))] text-[10px] font-semibold text-[hsl(var(--brand-strong))]">
              AO
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold">Aiyana Okonkwo</p>
              <p className="text-[9px] text-muted-foreground">
                Regular giver · £4,850 lifetime
              </p>
            </div>
          </div>
          <div className="mt-3 border-t border-border pt-2">
            {activity.slice(0, 2).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-2 py-1.5 text-[9px]"
                >
                  <Icon
                    className="h-3 w-3 shrink-0 text-[hsl(var(--brand-strong))]"
                    strokeWidth={1.75}
                  />
                  <span className="truncate text-foreground">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </figure>
  );
};

export default DonorRecordVisual;
