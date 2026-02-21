import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDetailsSheet } from "@/components/application/ApplicationSheetProvider";

const faqs = [
  {
    q: "Is it really free?",
    a: "Yes. Pilot participation is free, including Twenty licenses plus the workshops and configuration support during the pilot.",
  },
  {
    q: "Do we have to switch CRMs during the pilot?",
    a: "No. The pilot runs alongside your current system so you can evaluate without a forced switch.",
  },
  {
    q: "What does “real data” mean?",
    a: "It means you’ll use a realistic sample of your own data, so you can compare against your current system and make a confident decision.",
  },
  {
    q: "How much effort is required?",
    a: "We’ll keep the timeline predictable: a workflow workshop up front, then normal usage during the pilot with brief weekly catch-ups. You’ll want one internal owner (a main contact) to run the pilot on your side.",
  },
  {
    q: "What about data privacy and access?",
    a: "We’ll agree what’s included up front and keep access limited to what’s needed. We suggest using a small sample of your data so you can test real workflows and see how ready a move would be, without pulling everything in.",
    moreDetails: true,
  },
  {
    q: "How are organizations selected, and when will we hear back?",
    a: "We’re selecting a small pilot group (5–10 orgs) and looking for teams with active fundraising workflows and someone able to own the pilot internally. Applications are reviewed on a rolling basis.",
  },
  {
    q: "What happens after the pilot?",
    a: "You can stop cleanly with what you learned, or continue into full migration + additional customization if it’s a good fit. Pricing and terms are discussed after evaluation.",
    moreDetails: true,
  },
];

const FaqSection = () => {
  const { openDetails } = useDetailsSheet();

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
                  <p>{faq.a}</p>
                  {faq.moreDetails ? (
                    <button
                      type="button"
                      onClick={openDetails}
                      className="mt-3 text-sm text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
                    >
                      More details
                    </button>
                  ) : null}
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
