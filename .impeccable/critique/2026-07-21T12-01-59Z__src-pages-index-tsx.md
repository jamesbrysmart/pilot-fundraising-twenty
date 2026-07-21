---
target: the current landing page
total_score: 26
p0_count: 0
p1_count: 3
timestamp: 2026-07-21T12-01-59Z
slug: src-pages-index-tsx
---
Method: dual-agent (A: /root/critique_design_review · B: /root/critique_detector)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|------:|-----------|
| 1 | Visibility of System Status | 3/4 | Forms communicate sending, success, errors and completion, but enquiry progress is not explicit and network failure feedback is generic. |
| 2 | Match System / Real World | 3/4 | The nonprofit language is mostly candid, but “module,” “data model,” and the product/platform/service distinction still assume CRM fluency. |
| 3 | User Control and Freedom | 3/4 | Sheets can be dismissed and form drafts persist, but moving from evaluation details into enquiry removes the previous context without a clear return. |
| 4 | Consistency and Standards | 3/4 | Components are consistent, but the same evaluation route is called “Details,” “More details,” and “What to expect.” |
| 5 | Error Prevention | 3/4 | Required-field checks focus the first problem and preserve input, although visitors can jump to Confirm before completing earlier sections. |
| 6 | Recognition Rather Than Recall | 2/4 | Costs, fit and maturity are mostly hidden in the FAQ or side panel, requiring visitors to remember claims across a long evaluation path. |
| 7 | Flexibility and Efficiency | 2/4 | There is useful depth, but sparse navigation makes both executive scanning and targeted operational due diligence inefficient. |
| 8 | Aesthetic and Minimalist Design | 2/4 | The page is calm and coherent, but repetitive labels, rules and card structures dilute hierarchy while screenshot treatments reduce evidence legibility. |
| 9 | Error Recovery | 2/4 | Field-level errors are useful; request failures provide no specific recovery guidance or alternate contact route. |
| 10 | Help and Documentation | 3/4 | FAQ and details content are thorough, but the route is weakly signposted and the Details navigation item disappears on mobile. |
| **Total** | | **26/40** | **Acceptable — a sound foundation with material hierarchy and evaluation-flow issues.** |

## Anti-Patterns Verdict

**Does it look AI-generated? Moderate risk.** The page avoids loud gradients, fake social proof and decorative startup excess, but it leans on a familiar calm-SaaS grammar: Inter-only typography, near-monochrome surfaces, repeated tiny uppercase labels, interchangeable generous section spacing, fine rules and repeated bordered cards. It feels credible but not yet memorable as this specific fundraising product.

The repeated eyebrow pattern is the clearest tell. “Built on Twenty CRM,” “The trade-off,” workflow labels, “Product + implementation,” “FAQ,” and form metadata all use the same tiny uppercase/tracked treatment. Repetition that should create coherence instead flattens the hierarchy.

**Deterministic scan:** the entry-file scan returned zero findings because `src/pages/Index.tsx` only composes imports. A deliberately narrowed scan of the rendered landing-page components found one advisory: `design-system-font-size` at `src/components/landing/HeroSection.tsx:37`, where the large breakpoint uses `3.5rem`. This is a high-confidence metadata false positive: 3.5rem is 56px, which DESIGN.md explicitly documents in prose, but the frontmatter currently exposes only the compact 2.25rem display value. There were no warning- or error-level detector findings.

**Visual overlays:** no reliable browser overlay is available. This environment exposes no mutable browser automation surface, so injection was not attempted and no live server was started. The source review and direct asset inspection are the fallback evidence.

## Overall Impression

This is a disciplined, unusually candid foundation with real product proof and a thoughtful implementation story. Its biggest opportunity is not to add more polish; it is to align the visible hierarchy with the actual proposition. The hero currently sounds generic, and the proof section deliberately makes the real screenshots harder to inspect. The page becomes most uncertain exactly where it should become most convincing.

The emotional journey begins calm, recognizes the frustration of existing CRM trade-offs, and should peak at the product evidence. Instead, the proof treatment and “What we’re building” language create a maturity valley. The implementation sequence and FAQ recover confidence, but the generic “Interested?” close does not consolidate the developed-core/flexible-CRM promise or the reassurance that migration can be manageable.

Cognitive load is **moderate: 3 of 8 checklist items fail**. Chunking, minimal choices and progressive disclosure need attention. Five workflow links, five details sections, nine FAQ questions and nine current-system options each exceed the four-item working-memory guideline. Basic grouping, form sequencing and draft preservation are strong.

## What's Working

1. **Real product evidence is central.** Five distinct workflows cover donor records, donation processing, recurring giving, pipelines and reporting. This is the right proof portfolio for operational evaluation.
2. **Implementation is concrete and candid.** The four-step process names discovery, scoping, preparation and live improvement; cost separation is stated directly instead of hidden behind transformation language.
3. **The enquiry flow respects deliberative buyers.** It gives a time expectation, retains the draft when hidden, provides Back/Next controls, focuses missing fields and confirms completion.

## Priority Issues

### [P1] The hero does not express the strategic proposition

**Why it matters:** “A new fundraising CRM for nonprofits” and “modern tools” are generic category claims. They do not explain the developed fundraising core, flexible wider CRM, or why this is better than beginning with an empty general CRM. The ten-second takeaway therefore differs from PRODUCT.md.

**Fix:** Lead with “Start with a developed fundraising app. Shape the wider CRM around your nonprofit.” or an equally concrete formulation. Bring legible product evidence into the first viewport and add a compact factual availability/cost line.

**Suggested command:** `$impeccable clarify`

### [P1] Product evidence is visually degraded

**Why it matters:** The screenshots are squeezed into 21:9 frames, cropped with `object-cover`, reduced to 85% opacity, desaturated, lowered in contrast, rotated and covered by gradients. This directly contradicts the Evidence First rule and prevents operational visitors from inspecting the strongest proof available.

**Fix:** Show screenshots at a readable aspect ratio with native colour and contrast. Use restrained framing, intentional close-ups where helpful, and an accessible enlarge/detail treatment. Tie each claim to visible evidence within the image.

**Suggested command:** `$impeccable layout`

### [P1] Availability and maturity messaging conflict

**Why it matters:** The FAQ says the product is available now, while the proof section says “What we’re building,” mentions planned modules and asks “Want to help build it?” This can make a developed product sound like a concept-stage pilot.

**Fix:** Separate current capability from roadmap explicitly: “Available now: the fundraising workflows shown here” and “Future scope: additional nonprofit modules.” Replace the co-building CTA with a straightforward contact or demonstration route unless co-development is deliberately part of the offer.

**Suggested command:** `$impeccable clarify`

### [P2] The page does not genuinely support two reading speeds

**Why it matters:** Navigation offers only Details and Enquire, with Details hidden on mobile. Senior buyers cannot jump to proof, costs or implementation; operational users must scroll or discover a side panel. Repetition lengthens the page without creating a clear evaluation map.

**Fix:** Add a compact evaluation path covering Product, Workflows, Implementation and Costs/FAQ, or an equally concise visible “Evaluate fit” route. Surface availability and cost boundaries on-page while keeping deeper detail progressively disclosed.

**Suggested command:** `$impeccable distill`

### [P2] The visual system is coherent but too template-like

**Why it matters:** Repeated uppercase eyebrows, fine dividers, grey supporting copy, uniform section padding and Inter create refinement without strong brand memory. The shoot mark is recognizable but often behaves as a decorative separator rather than a meaningful product-grounded motif.

**Fix:** Reduce eyebrow use to a few meaningful contexts, vary section pacing and composition, and build one distinctive motif from growth, branching or connected relationships. Let the proof or strategic contrast section carry more compositional character while preserving the calm palette.

**Suggested command:** `$impeccable bolder`

## Persona Red Flags

**Maya — nonprofit CEO / executive scanner**

- The hero does not answer “why this instead of our current system?” in ten seconds.
- Cost is buried in the ninth FAQ item or fifth details section rather than appearing in her scan path.
- A disabled “Learn more about 3Trees Digital” treatment withholds delivery credibility and resembles a broken link.
- “What we’re building” introduces maturity doubt immediately after the product proof.

**Owen — fundraising operations / CRM evaluator**

- The five screenshots promise useful depth, but crop, filtering and overlays prevent close inspection of fields, statuses and workflow structure.
- Claims about matching, duplicates and error resolution are not connected to highlighted evidence in the screenshots.
- No visible route connects a workflow to a demonstration, deeper capability explanation or integration caveat.
- The five-item mobile details tab row scrolls horizontally without a clear overflow cue.

**Ruth — low-technical-confidence fundraiser using keyboard or zoom**

- Important explanation is predominantly 14px muted text across long passages, increasing reading effort even where token contrast is adequate.
- Required Select labels appear not to use explicit `htmlFor`/`id` associations, risking incomplete accessible naming.
- Global smooth scrolling, accordion movement and sheet movement have no reduced-motion override.
- The fixed vertical Enquire edge tab is unconventional and may compete with browser controls or content at zoom and compact sizes.

## Minor Observations

- The primary action is consistently emphasized without applying conversion pressure.
- “Interested?” is an under-confident ending and does not restate the distinctive promise.
- “Details,” “More details,” and “What to expect” should use one consistent label.
- Remove the disabled 3Trees link until it is actionable, or replace it with credibility evidence that exists today.
- Network errors should say that entered data remains intact and offer Contact us as a fallback.
- `src/assets/hero.webp` appears unused, suggesting a planned first-viewport visual anchor may have been dropped.
- Newsreader and IBM Plex Mono are imported even though Inter is the documented active voice, adding unused payload and design-system noise.
- Screenshot alt text identifies each view but not the specific evidence supporting the adjacent claim.
- The DESIGN.md frontmatter should represent the responsive 36/48/56px display scale so detector metadata matches the documented implementation.

## Questions to Consider

- What if the hero showed the product and stated the developed-core/flexible-CRM distinction before it used the word “new”?
- If screenshots are the strongest proof available, why are they deliberately made less legible?
- Is “Want to help build it?” intended to recruit design partners, or does it accidentally undermine “available now”?
- Could costs and maturity become a trust-building on-page fact pattern instead of information visitors must hunt for?
- What should a visitor remember visually besides a restrained Inter landing page with thin rules?
- If the disabled 3Trees link cannot establish implementation credibility, what evidence can replace it now?
