const signals = [
  { label: "Built on", value: "Twenty CRM" },
  { label: "Pilot size", value: "5–10 orgs" },
  { label: "Duration", value: "4 weeks" },
  { label: "Cost", value: "Free" },
];

const SignalStrip = () => {
  return (
    <section className="border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {signals.map((signal, i) => (
            <div
              key={signal.label}
              className={`py-6 md:py-8 ${
                i > 0 ? "border-l border-border pl-6 md:pl-8" : ""
              }`}
            >
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                {signal.label}
              </p>
              <p className="text-sm font-medium">{signal.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignalStrip;
