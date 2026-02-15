import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "trust",
    label: "Can we trust this?",
    content: (
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          This fundraising module is built on{" "}
          <strong className="text-foreground font-medium">Twenty</strong> — a modern,
          open-source CRM platform with a modular architecture, a modern tech
          stack, and an active open-source ecosystem.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The nonprofit extension is purpose-built on top of Twenty's
          infrastructure. It inherits the platform's data model, API layer, and
          extensibility — it's not a fork or a wrapper.
        </p>
        <div className="border-l-2 border-border pl-4 space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is early-stage software. We're transparent about that. The
            pilot exists specifically to validate fit, surface gaps, and build
            alongside real organizations.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The intent is long-term: a serious, community-driven nonprofit CRM
            built on modern open-source foundations. Cohort 1 is the beginning
            of that work, not a marketing exercise.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "capabilities",
    label: "Will this work for us?",
    content: (
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          The fundraising module covers core donor management workflows:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Donation tracking & history",
            "Recurring gift management",
            "Gift batching & processing",
            "Campaign & fund attribution",
            "Donor reporting & analytics",
            "Integration-ready architecture",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1 w-1 rounded-full bg-foreground/40 shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          These capabilities were designed around real fundraising workflows —
          not adapted from sales CRM patterns. Unlike legacy platforms, the
          underlying architecture is modern, extensible, and doesn't carry
          decades of technical debt.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The module is actively evolving. Pilot participants directly shape
          what gets built next based on their actual operational needs.
        </p>
      </div>
    ),
  },
  {
    id: "audience",
    label: "Who is this for?",
    content: (
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          This pilot is designed for a specific kind of organization:
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Active fundraising operations",
              desc: "You run campaigns, track donors, and manage recurring gifts as a core part of your work.",
            },
            {
              title: "Considering CRM migration",
              desc: "You're planning or actively evaluating a move within the next 12 months.",
            },
            {
              title: "Small-to-mid-sized team",
              desc: "Lean enough to move quickly, large enough to have real operational complexity.",
            },
            {
              title: "Willing to shape what comes next",
              desc: "Open to working with early infrastructure and providing direct feedback that influences the roadmap.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-1">
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/70 leading-relaxed">
          This is not positioned as fully mature enterprise software. If you
          need a drop-in replacement for an established platform today, this
          isn't the right fit yet.
        </p>
      </div>
    ),
  },
  {
    id: "reasons",
    label: "Why would we do this?",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          {[
            {
              title: "Influence the future of nonprofit CRM",
              desc: "Your feedback directly shapes the product roadmap. Cohort 1 participants have outsized input on what gets built.",
            },
            {
              title: "Early access to modern infrastructure",
              desc: "Work with tools built on a modern stack — not a legacy platform with layers of workarounds.",
            },
            {
              title: "Meaningful migration groundwork",
              desc: "Even if you don't continue, the pilot produces a concrete assessment of your data, workflows, and readiness.",
            },
            {
              title: "Clearer fundraising processes",
              desc: "The structured evaluation often surfaces operational improvements regardless of which CRM you choose.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-1">
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-md border border-border bg-secondary/40 p-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground font-medium">The asymmetry is intentional:</strong>{" "}
            the upside of finding the right platform early is significant. The
            downside is bounded — a few hours of your time with a clear exit at
            any point.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "involved",
    label: "What's involved?",
    content: (
      <div className="space-y-6">
        <div className="grid gap-px border border-border rounded-md overflow-hidden">
          {[
            { label: "Duration", value: "4 weeks" },
            { label: "Setup time", value: "A few hours with guided support" },
            { label: "Weekly commitment", value: "Normal usage + brief check-in" },
            { label: "Lock-in", value: "None" },
            { label: "Exit", value: "Stop at any point, no obligations" },
          ].map((row, i) => (
            <div
              key={row.label}
              className={cn(
                "grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] text-sm",
                i > 0 && "border-t border-border"
              )}
            >
              <div className="bg-secondary/60 px-4 py-3 font-medium text-foreground">
                {row.label}
              </div>
              <div className="px-4 py-3 text-muted-foreground">{row.value}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The pilot is designed with guardrails around effort. We handle setup
          and migration work. Your team focuses on evaluating the tools in
          real workflows.
        </p>
      </div>
    ),
  },
  {
    id: "catch",
    label: "Is there a catch?",
    content: (
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          We'd rather be direct about the trade-offs:
        </p>
        <div className="space-y-4">
          {[
            "This is a limited cohort — we're selecting 5–10 organizations, not running an open beta.",
            "The product is early-stage. Some features will be rough. Some workflows will need adjustment.",
            "We're building deliberately, not racing to ship features. Progress is steady but measured.",
            "You'll be working with a small team that's responsive but not a large support organization.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-foreground/40 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          There's no hidden agenda. The pilot is free because we need real
          organizations to build with. If it works, there's an optional path
          forward. If it doesn't, you walk away with a clear assessment and
          no obligations.
        </p>
      </div>
    ),
  },
];

interface PilotDetailsProps {
  open: boolean;
  onClose: () => void;
}

const PilotDetails = ({ open, onClose }: PilotDetailsProps) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setActiveSection(sections[0].id);
    }
  }, [open]);

  if (!open) return null;

  const current = sections.find((s) => s.id === activeSection)!;

  return (
    <div className="fixed inset-0 z-50 bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container flex h-14 items-center justify-between">
          <p className="text-sm font-semibold tracking-tight text-foreground">
            Pilot details
          </p>
          <button
            onClick={onClose}
            className="rounded-sm p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
      </div>

      <div className="container h-[calc(100vh-57px)] overflow-hidden">
        <div className="grid h-full md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
          {/* Sidebar nav — desktop */}
          <nav className="hidden md:flex flex-col gap-1 border-r border-border pr-6 py-8 overflow-y-auto">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={cn(
                  "text-left text-sm px-3 py-2 rounded-md transition-colors",
                  s.id === activeSection
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {s.label}
              </button>
            ))}
            <div className="mt-auto pt-6">
              <Button asChild size="sm" className="w-full">
                <Link to="/apply" onClick={onClose}>
                  Apply for Cohort 1
                </Link>
              </Button>
            </div>
          </nav>

          {/* Mobile tab bar */}
          <div className="md:hidden border-b border-border overflow-x-auto">
            <div className="flex gap-0 min-w-max">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={cn(
                    "text-xs px-3 py-3 whitespace-nowrap border-b-2 transition-colors",
                    s.id === activeSection
                      ? "border-foreground text-foreground font-medium"
                      : "border-transparent text-muted-foreground"
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto py-8 md:pl-8 lg:pl-12">
            <div className="max-w-lg">
              <h2 className="text-lg font-semibold tracking-tight mb-6">
                {current.label}
              </h2>
              {current.content}
            </div>

            {/* Mobile CTA */}
            <div className="md:hidden pt-8 pb-12">
              <Button asChild size="sm">
                <Link to="/apply" onClick={onClose}>
                  Apply for Cohort 1
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PilotDetails;
