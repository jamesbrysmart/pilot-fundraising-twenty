const signals = [
  {
    label: "Built on",
    value: "Twenty CRM",
    href: "https://twenty.com",
    iconSrc: "/twenty-logo.svg",
    iconAlt: "Twenty",
  },
  { label: "Pilot size", value: "5–10 orgs" },
  { label: "Duration", value: "4 weeks" },
  { label: "Cost", value: "Free" },
];

const SignalStrip = () => {
  return (
    <section className="relative border-b border-border">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[hsl(var(--shoot))] opacity-40"
      />
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {signals.map((signal, i) => (
            <div
              key={signal.label}
              className={`py-6 md:py-8 ${
                i % 2 === 1 ? "border-l border-border pl-6 md:pl-8" : ""
              }`}
            >
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                {signal.label}
              </p>
              <p className="text-sm font-medium">
                {"href" in signal ? (
                  <a
                    href={signal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    {"iconSrc" in signal ? (
                      <img
                        src={signal.iconSrc}
                        alt={signal.iconAlt}
                        className="h-5 w-5 shrink-0 rounded-[5px]"
                        loading="lazy"
                      />
                    ) : null}
                    <span className="underline underline-offset-2">
                      {signal.value}
                    </span>
                  </a>
                ) : (
                  signal.value
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignalStrip;
