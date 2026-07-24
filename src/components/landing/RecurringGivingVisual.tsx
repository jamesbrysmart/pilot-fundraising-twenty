import GreenShootMark from "@/components/branding/GreenShootMark";
import { CalendarDays, Check, CircleAlert, Repeat2 } from "lucide-react";

const payments = [
  { month: "April", date: "2 Apr", status: "Paid", complete: true },
  { month: "May", date: "2 May", status: "Paid", complete: true },
  { month: "June", date: "2 Jun", status: "Needs attention", attention: true },
  { month: "July", date: "2 Jul", status: "Upcoming" },
];

const RecurringGivingVisual = () => {
  return (
    <figure
      className="relative h-full w-full overflow-hidden bg-[hsl(var(--brand-wash))] p-4 sm:p-5"
      aria-labelledby="recurring-giving-visual-caption"
    >
      <figcaption
        id="recurring-giving-visual-caption"
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
            <span className="grid h-4 w-4 shrink-0 place-items-center rounded bg-[hsl(var(--brand-soft))] text-[hsl(var(--brand-strong))]">
              <Repeat2 className="h-2.5 w-2.5" strokeWidth={2} />
            </span>
            <span className="truncate text-muted-foreground">Recurring gifts</span>
            <span className="text-border">/</span>
            <span className="truncate font-medium text-foreground">
              Aiyana Okonkwo
            </span>
          </div>
          <span className="ml-3 hidden shrink-0 rounded bg-[hsl(var(--brand-soft))] px-2 py-1 text-[10px] font-medium text-[hsl(var(--brand-strong))] sm:inline">
            Active
          </span>
        </div>

        <div className="hidden h-[calc(100%-2.25rem)] grid-cols-[1fr_190px] sm:grid">
          <div className="border-r border-border p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-medium text-muted-foreground">
                  Recurring agreement
                </p>
                <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                  £25 <span className="text-xs font-medium text-muted-foreground">monthly</span>
                </p>
              </div>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-[hsl(var(--brand-line))] bg-[hsl(var(--brand-soft))] text-[hsl(var(--brand-strong))]">
                <CalendarDays className="h-4 w-4" strokeWidth={1.75} />
              </span>
            </div>

            <dl className="mt-3 grid grid-cols-3 gap-3 border-y border-border py-2.5 text-[10px]">
              <div>
                <dt className="text-muted-foreground">Started</dt>
                <dd className="mt-0.5 font-medium text-foreground">May 2021</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Fund</dt>
                <dd className="mt-0.5 font-medium text-foreground">General</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Next gift</dt>
                <dd className="mt-0.5 font-medium text-foreground">2 July</dd>
              </div>
            </dl>

            <div className="mt-3">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-medium text-foreground">This year</span>
                <span className="text-muted-foreground">5 of 6 expected gifts</span>
              </div>
              <div className="mt-2 grid grid-cols-6 gap-1.5">
                {[true, true, true, true, false, null].map((state, index) => (
                  <div key={index}>
                    <span
                      className={`block h-2 rounded-sm ${
                        state === true
                          ? "bg-[hsl(var(--brand-strong))]"
                          : state === false
                            ? "border border-border bg-secondary"
                            : "bg-border"
                      }`}
                    />
                    <span className="mt-1 block text-center text-[8px] text-muted-foreground">
                      {['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3">
            <p className="text-[10px] font-semibold text-foreground">Payment schedule</p>
            <div className="mt-2 divide-y divide-border">
              {payments.map((payment) => (
                <div
                  key={payment.month}
                  className="grid grid-cols-[18px_1fr_auto] items-center gap-2 py-2"
                >
                  <span
                    className={`grid h-[18px] w-[18px] place-items-center rounded-full ${
                      payment.complete
                        ? "bg-[hsl(var(--brand-soft))] text-[hsl(var(--brand-strong))]"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {payment.complete ? (
                      <Check className="h-2.5 w-2.5" strokeWidth={2} />
                    ) : payment.attention ? (
                      <CircleAlert className="h-2.5 w-2.5" strokeWidth={1.75} />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-border" />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-medium text-foreground">
                      {payment.month}
                    </p>
                    <p className="text-[9px] text-muted-foreground">{payment.date}</p>
                  </div>
                  <span
                    className={`text-[9px] ${
                      payment.complete
                        ? "text-[hsl(var(--brand-strong))]"
                        : "text-muted-foreground"
                    }`}
                  >
                    {payment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-3 sm:hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] text-muted-foreground">Recurring agreement</p>
              <p className="mt-0.5 text-base font-semibold">
                £25 <span className="text-[9px] font-normal text-muted-foreground">monthly</span>
              </p>
            </div>
            <span className="rounded bg-[hsl(var(--brand-soft))] px-2 py-1 text-[9px] font-medium text-[hsl(var(--brand-strong))]">
              Active
            </span>
          </div>
          <div className="mt-3 grid grid-cols-6 gap-1">
            {[true, true, true, true, false, null].map((state, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-sm ${
                  state === true
                    ? "bg-[hsl(var(--brand-strong))]"
                    : state === false
                      ? "border border-border bg-secondary"
                      : "bg-border"
                }`}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 border-t border-border pt-2 text-[9px]">
            <CircleAlert className="h-3 w-3 text-muted-foreground" />
            <span className="text-foreground">June payment needs attention</span>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default RecurringGivingVisual;
