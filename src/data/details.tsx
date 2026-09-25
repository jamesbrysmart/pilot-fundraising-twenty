type DetailsSection = {
  id: string;
  label: string;
  content: JSX.Element;
};

const DetailList = ({ items }: { items: Array<{ title: string; detail: string }> }) => (
  <div className="space-y-4">
    {items.map((item) => (
      <div key={item.title} className="space-y-1">
        <p className="text-sm font-medium text-foreground">{item.title}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
      </div>
    ))}
  </div>
);

export const sections: DetailsSection[] = [
  {
    id: "starting-point",
    label: "What you start with",
    content: (
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Fundraising for Twenty is a developed specialist fundraising app built
          on{" "}
          <a
            href="https://twenty.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-foreground/80"
          >
            Twenty CRM
          </a>
          . Its core model covers donors, gifts, recurring giving, appeals and
          funding opportunities.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          This provides a strong starting point rather than a finished
          organisation-specific implementation. Data migration, reporting,
          integrations and the wider CRM are shaped around what your organisation
          needs.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Fundraising for Twenty is developed and supported by{" "}
          <a
            href="https://3trees.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-foreground/80"
          >
            3Trees Digital
          </a>
          . It is built on Twenty CRM but is not an official Twenty product.
        </p>
      </div>
    ),
  },
  {
    id: "fit",
    label: "Is it a good fit?",
    content: (
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Fundraising for Twenty is designed for small and mid-sized nonprofits,
          but fit depends more on your needs and working approach than organisation
          size alone.
        </p>
        <DetailList
          items={[
            {
              title: "You need a stronger fundraising foundation",
              detail:
                "Your current CRM, spreadsheets or separate tools do not give the team a coherent view of fundraising work and relationships.",
            },
            {
              title: "You need flexibility around the core",
              detail:
                "You want fundraising to connect with volunteer coordination, membership management, programme participation or other organisational workflows, rather than operating as an isolated system.",
            },
            {
              title: "You are prepared to take part in implementation",
              detail:
                "Someone in the organisation can explain current processes, help make decisions and test the setup against real scenarios.",
            },
          ]}
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          If you need a completely self-service product or depend on advanced
          integrations that have not yet been scoped, we should discuss that
          before deciding whether this is the right route.
        </p>
      </div>
    ),
  },
  {
    id: "getting-started",
    label: "How getting started works",
    content: (
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          We begin with a conversation about your current systems, fundraising
          processes, data and wider CRM needs. From there, 3Trees proposes a
          proportionate first implementation.
        </p>
        <DetailList
          items={[
            {
              title: "Agree the first scope",
              detail:
                "Decide what should be included first, how the system should be structured and what needs to connect.",
            },
            {
              title: "Prepare and validate",
              detail:
                "Move the agreed data, configure the setup and test it against real fundraising scenarios.",
            },
            {
              title: "Launch and improve",
              detail:
                "Support the team into live use, then refine the system as needs evolve.",
            },
          ]}
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          The scope and pace depend on your starting point. There is no fixed
          programme or standard migration timeline.
        </p>
      </div>
    ),
  },
  {
    id: "working-together",
    label: "How we work together",
    content: (
      <div className="space-y-7">
        <div className="space-y-4">
          <p className="text-sm font-medium text-foreground">What 3Trees does</p>
          <ul className="space-y-2.5">
            {[
              "Understand your workflows, data and wider system needs.",
              "Decide what belongs in Fundraising for Twenty, wider Twenty configuration, integrations or tailored functionality.",
              "Support setup, data migration, testing, rollout and continued improvement.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-px w-4 shrink-0 bg-border" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 border-t border-border pt-6">
          <p className="text-sm font-medium text-foreground">What we need from you</p>
          <ul className="space-y-2.5">
            {[
              "A main contact who can coordinate decisions and involve the right people.",
              "Practical knowledge of current fundraising processes, priorities and constraints.",
              "Access to the agreed data and time to test the system against real scenarios.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-px w-4 shrink-0 bg-border" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "costs-scope",
    label: "Costs and current scope",
    content: (
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          The Fundraising for Twenty app is free for nonprofits. Any Twenty
          workspace or hosting costs, and 3Trees implementation and support
          services, are separate.
        </p>
        <DetailList
          items={[
            {
              title: "The app",
              detail:
                "There is no separate product or licence fee from 3Trees Digital for nonprofits to use Fundraising for Twenty.",
            },
            {
              title: "Twenty",
              detail:
                "You may still need to pay for a Twenty workspace, hosting or related infrastructure.",
            },
            {
              title: "3Trees services",
              detail:
                "Implementation, data migration, configuration, integrations and training are scoped and charged separately. Ongoing support or further development can also be agreed where needed.",
            },
          ]}
        />
        <div className="border-t border-border pt-6">
          <p className="text-sm font-medium text-foreground">Current scope</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The core fundraising model and workflows are available now through
            implementations with 3Trees. Integrations, advanced reporting and
            organisation-specific functionality are scoped where needed rather
            than included automatically.
          </p>
        </div>
      </div>
    ),
  },
];
