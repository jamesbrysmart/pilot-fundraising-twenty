import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Fundraising for Twenty?",
    a: [
      "Fundraising for Twenty is a specialist fundraising app built on Twenty CRM. It provides a developed fundraising model while leaving room to shape the wider CRM around your organisation.",
    ],
  },
  {
    q: "Who is it designed for?",
    a: [
      "Small and mid-sized nonprofits that need substantial fundraising capability alongside flexibility for wider relationships, workflows and data.",
    ],
  },
  {
    q: "Do we need to use Twenty CRM?",
    a: [
      "Yes. Fundraising for Twenty is built on Twenty and can be implemented in a new or existing Twenty workspace.",
    ],
  },
  {
    q: "Is it available to use now?",
    a: [
      "Yes. Fundraising for Twenty is available now for nonprofits implementing it with 3Trees Digital. The core fundraising model and workflows are already developed, while migration, integrations, reporting and organisation-specific requirements are agreed during implementation.",
    ],
  },
  {
    q: "Can it be adapted to our organisation?",
    a: [
      "Yes. The fundraising core is reusable, while its data, workflows and connections can be shaped around how your organisation works.",
    ],
  },
  {
    q: "Can it support more than fundraising?",
    a: [
      "Yes. Fundraising for Twenty sits within the wider Twenty CRM. 3Trees can help design and implement related areas such as grants, partnerships, memberships, volunteers and other stakeholder relationships.",
      "These wider areas are shaped during implementation and are not all packaged features within Fundraising for Twenty itself.",
    ],
  },
  {
    q: "Can you migrate our existing data?",
    a: [
      "Where migration is needed, 3Trees works with you to prepare, map and validate the agreed donor, gift and relationship data before rollout.",
    ],
  },
  {
    q: "Who builds and supports Fundraising for Twenty?",
    a: [
      "Fundraising for Twenty is developed and supported by 3Trees Digital. It is built on Twenty CRM but is not an official Twenty product.",
    ],
  },
  {
    q: "How much does it cost?",
    a: [
      "The Fundraising for Twenty app is free for nonprofits, with no separate product or licence fee from 3Trees Digital.",
      "You may still need to pay for your Twenty workspace or hosting. 3Trees charges separately for agreed services such as implementation, data migration, configuration, integrations and training. Ongoing support or further development can also be agreed where needed.",
    ],
  },
];

const FaqSection = () => {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="container py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-wider text-muted-foreground">
              FAQ
            </p>
            <h2 className="text-lg font-semibold">Common questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  <div className="space-y-3">
                    {faq.a.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
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
