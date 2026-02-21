import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useContactSheet } from "@/components/contact/ContactSheetProvider";

type DetailsSection = {
  id: string;
  label: string;
  content: JSX.Element;
};

const sections: DetailsSection[] = [
  {
    id: "trust",
    label: "Can we trust this?",
    content: (
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          This fundraising module is built on{" "}
          <a
            href="https://twenty.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-foreground/80"
          >
            Twenty
          </a>{" "}
          - a modern open-source CRM platform. This pilot is a community-built
          extension, not an official Twenty product.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          This is early-stage software. We&apos;re being direct about that, and
          we&apos;re keeping the pilot group small so support stays responsive and the
          experience stays real.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The pilot is designed to be safe to evaluate: it runs alongside your
          current system, with a clean stop whenever you choose. No forced
          cutover during the pilot.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We&apos;ll agree the data scope up front and keep access limited to
          what&apos;s needed for the pilot.
        </p>
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
          These capabilities were designed around real fundraising workflows -
          unlike legacy platforms, the
          underlying architecture is modern, extensible, and doesn&apos;t carry
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
              desc: "Excited to be part of the next generation of open-source, community-owned nonprofit CRM (this pilot is the start).",
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
          If your CRM is also a full system of record for volunteers, grants, or
          programs/services, this pilot may not be the right fit yet. That scope
          is on the roadmap, but fundraising is the first module.
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
              title: "Meaningful migration groundwork",
              desc: "Even if you don't continue, you leave with clearer workflow requirements, data readiness takeaways, and a sharper view of gaps.",
            },
            {
              title: "Clearer fundraising processes",
              desc: "The workshop and side-by-side trial often surface process improvements you can apply regardless of which CRM you choose.",
            },
            {
              title: "Early access to modern infrastructure",
              desc: "Evaluate tools built on a modern foundation, without taking on the risk of a forced switch.",
            },
            {
              title: "Be part of what comes next",
              desc: "Fundraising is the first module. The longer-term goal is a series of nonprofit tools built on open-source foundations, with a community-owned direction over time.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-1">
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-md border border-border bg-secondary/40 p-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground font-medium">
              The trade is simple:
            </strong>{" "}
            we get real-world feedback from teams running real workflows. In
            exchange, you get a supported, time-bounded evaluation that produces
            clear next-step findings and options. If it's not a fit,
            you stop cleanly. If it is, you can continue without restarting.
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
        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">Timeline (4 weeks)</p>
          <ul className="space-y-2.5">
            {[
              "Week 1: planning workshop, agree what to test, and set up with sample data.",
              "Weeks 2-4: run day-to-day fundraising work in the pilot, with short weekly check-ins.",
              "End: review what you learned and decide whether to stop or continue.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-px w-4 bg-border shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">What we need from you</p>
          <ul className="space-y-2.5">
            {[
              "One main contact to coordinate the pilot.",
              "A sample of your data that matches what you want to test.",
              "Willingness to use the system enough to compare it with your current setup.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-px w-4 bg-border shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">What we do</p>
          <ul className="space-y-2.5">
            {[
              "Set up Twenty licenses and configure the fundraising setup.",
              "Run the workshop and keep the plan clear and focused.",
              "Support weekly check-ins and provide a clear end-of-pilot summary.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-px w-4 bg-border shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 border-t border-border pt-5">
          <p className="text-sm font-medium text-foreground">After the pilot</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you want to continue, we&apos;ll discuss next steps, including
            commercial terms, based on what you learned in the pilot.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "catch",
    label: "Is there a catch?",
    content: (
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          We&apos;d rather be direct about the trade-offs:
        </p>
        <div className="space-y-4">
          {[
            "This is a limited pilot group - we're selecting 5–10 organisations, not opening this to everyone.",
            "The product is early-stage. Some features will be rough. Some workflows will need adjustment.",
            "We're building deliberately, not racing to ship features. Progress is steady but measured.",
            "You'll be working with a small team that's responsive but not a large support organization.",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1 w-1 rounded-full bg-foreground/40 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          There&apos;s no hidden agenda. The pilot is free because we want to work
          closely with organisations that can share practical feedback from real
          fundraising work. If it works, there&apos;s a path to continue. If it
          doesn&apos;t, you walk away with clear findings and no obligation.
        </p>
      </div>
    ),
  },
];

type DetailsSheetPanelProps = {
  open: boolean;
  initialSectionId?: string;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
  onOpenApplication: () => void;
};

const DetailsSheetPanel = ({
  open,
  initialSectionId,
  onOpenChange,
  onClose: _onClose,
  onOpenApplication,
}: DetailsSheetPanelProps) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const { openContact } = useContactSheet();

  useEffect(() => {
    if (open) {
      const requested = initialSectionId
        ? sections.find((section) => section.id === initialSectionId)?.id
        : undefined;
      setActiveSection(requested ?? sections[0].id);
    }
  }, [initialSectionId, open]);

  const current = sections.find((section) => section.id === activeSection);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto border-l border-border p-0 sm:max-w-5xl"
      >
        <SheetHeader className="space-y-2 border-b border-border px-6 py-6 text-left">
          <div className="space-y-2">
            <SheetTitle className="text-xl tracking-tight">
              Pilot details
            </SheetTitle>
            <SheetDescription>
              Structured answers for key fit, risk, and commitment questions.
            </SheetDescription>
          </div>
        </SheetHeader>

        <div className="h-[calc(100vh-88px)] overflow-hidden px-6 pb-8 pt-6">
          <div className="grid h-full gap-8 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
            <nav className="hidden overflow-y-auto border-r border-border pr-4 md:flex md:flex-col md:gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveSection(section.id)}
                  className={cn(
                    "rounded-md px-3 py-2 text-left text-sm transition-colors",
                    section.id === activeSection
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                  )}
                >
                  {section.label}
                </button>
              ))}
              <div className="mt-auto border-t border-border pt-4">
                <Button className="w-full" onClick={onOpenApplication}>
                  Apply for Pilot
                </Button>
                <button
                  type="button"
                  onClick={() => openContact("details-sheet")}
                  className="mt-3 w-full text-center text-sm text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
                >
                  Contact us
                </button>
              </div>
            </nav>

            <div className="overflow-y-auto">
              <div className="mb-5 overflow-x-auto border-b border-border md:hidden">
                <div className="flex min-w-max gap-1 pb-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => setActiveSection(section.id)}
                      className={cn(
                        "whitespace-nowrap rounded-md px-3 py-2 text-xs transition-colors",
                        section.id === activeSection
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="max-w-2xl space-y-6 pb-8">
                <h2 className="text-lg font-semibold tracking-tight">
                  {current?.label}
                </h2>
                {current?.content}
                <div className="border-t border-border pt-6 md:hidden">
                  <div className="flex items-center gap-3">
                    <Button onClick={onOpenApplication}>Apply for Pilot</Button>
                    <button
                      type="button"
                      onClick={() => openContact("details-sheet")}
                      className="text-sm text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
                    >
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DetailsSheetPanel;
