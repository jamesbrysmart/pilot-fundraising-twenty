import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is it really free?",
    a: "Yes. There's no cost to participate in the pilot. We're investing in learning alongside early adopters.",
  },
  {
    q: "How many organizations are selected?",
    a: "5–10 for Cohort 1. We're keeping the group small so every participant gets direct support and meaningful input into the roadmap.",
  },
  {
    q: "What level of effort is required?",
    a: "Expect a few hours for onboarding and setup, then normal usage during the 4-week pilot. Weekly check-ins are brief.",
  },
  {
    q: "Is this production-ready?",
    a: "It's early-stage software. The pilot is designed to evaluate fit and surface gaps — not to replace your existing systems on day one.",
  },
  {
    q: "What happens after the pilot?",
    a: "You'll have a clear assessment of whether this works for you. If it does, there's an optional path to continue. If not, you walk away with no obligations.",
  },
];

const FaqSection = () => {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="container py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
              FAQ
            </p>
            <h2 className="text-lg font-semibold">Common questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-sm font-medium text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
