const HeroPreview = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-br from-[hsl(var(--shoot)/0.18)] via-transparent to-transparent blur-2xl opacity-70" />
      <div className="rounded-xl border border-border bg-card text-card-foreground shadow-[0_1px_0_rgba(0,0,0,0.02),0_20px_40px_-24px_rgba(15,23,42,0.15)]">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <div className="ml-3 flex items-center gap-2 text-[0.72rem] text-muted-foreground">
            <span className="grid h-4 w-4 place-items-center rounded-sm bg-primary text-[0.55rem] font-bold text-primary-foreground">
              20
            </span>
            Fundraising for Twenty · Flagship product
          </div>
        </div>

        <div className="grid grid-cols-[110px_1fr]">
          <aside className="border-r border-border bg-secondary p-3 text-[0.72rem]">
            <p className="mb-2 text-[0.6rem] font-medium uppercase tracking-wider text-muted-foreground">
              Workspace
            </p>
            {["Donors", "Gifts", "Appeals", "Grants", "Imports"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded px-2 py-1.5 ${
                    index === 1
                      ? "bg-[hsl(var(--shoot)/0.14)] text-foreground"
                      : "text-foreground/70"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index === 1
                        ? "bg-[hsl(var(--shoot))]"
                        : "bg-border"
                    }`}
                  />
                  {item}
                </div>
              ),
            )}
          </aside>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground">
                  Gifts
                </p>
                <p className="mt-1 text-lg font-semibold">This month</p>
              </div>
              <span className="rounded-md border border-border px-2 py-1 text-[0.7rem] text-muted-foreground">
                Nov 2026
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: "Total", value: "£48,210" },
                { label: "Gifts", value: "312" },
                { label: "Recurring", value: "£6,940" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-border bg-secondary p-2.5"
                >
                  <p className="text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex h-16 items-end gap-1.5">
              {[40, 55, 30, 68, 45, 82, 58, 74, 62, 90, 70, 84].map(
                (height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t ${
                      index === 9
                        ? "bg-[hsl(var(--shoot))]"
                        : "bg-primary/85"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>

            <div className="mt-4 divide-y divide-border overflow-hidden rounded-lg border border-border">
              {[
                { name: "Aiyana Okonkwo", type: "Recurring · £25", date: "Today" },
                { name: "Marlow Trust", type: "Grant · £12,000", date: "Yesterday" },
                { name: "R. Fitzgerald", type: "One-off · £150", date: "2d ago" },
              ].map((record) => (
                <div
                  key={record.name}
                  className="flex items-center justify-between px-3 py-2 text-[0.78rem]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[hsl(var(--shoot)/0.14)] text-[0.65rem] font-semibold text-foreground">
                      {record.name[0]}
                    </span>
                    <div>
                      <p className="font-medium">{record.name}</p>
                      <p className="text-[0.68rem] text-muted-foreground">
                        {record.type}
                      </p>
                    </div>
                  </div>
                  <span className="text-[0.68rem] text-muted-foreground">
                    {record.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPreview;
