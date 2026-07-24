---
target: Product + implementation section
total_score: 22
p0_count: 0
p1_count: 2
timestamp: 2026-07-21T14-40-55Z
slug: src-components-landing-outcomessection-tsx
---
Method: dual-agent (A: /root/outcomes_design_review · B: /root/outcomes_detector)

## Design Health Score

| # | Heuristic | Score | Section-level finding |
|---|---|---:|---|
| 1 | Visibility of system status | 2/4 | “Coming soon” is hidden in title and screen-reader text; the visible disabled styling is ambiguous. |
| 2 | Match with the real world | 3/4 | Migration and rollout are recognizable, but “wider system” and “connected systems” remain abstract. |
| 3 | User control and freedom | 2/4 | The only apparent onward route cannot be used and provides no alternative. |
| 4 | Consistency and standards | 3/4 | Typography and rules fit the design system; the faux-link treatment conflicts with web conventions. |
| 5 | Error prevention | 2/4 | Disabling the route prevents broken navigation, but its link-like appearance invites a failed attempt. |
| 6 | Recognition rather than recall | 3/4 | Side-by-side labels and responsibilities aid recognition; the product/service boundary still requires inference. |
| 7 | Flexibility and efficiency | 2/4 | The section supports scanning and reading but provides no working route for due diligence. |
| 8 | Aesthetic and minimalist design | 2/4 | Clean and restrained, but redundant labels, repeated language and imbalanced space weaken purposeful minimalism. |
| 9 | Error recognition and recovery | 1/4 | Discovering the disabled route provides neither an explanation nor a recovery path. |
| 10 | Help and documentation | 2/4 | The section provides orientation, but its promised deeper help is unavailable. |
| **Total** | | **22/40** | **Acceptable; important trust and hierarchy issues remain.** |

## Anti-Patterns Verdict

**Does it look AI-generated? Moderate risk.** It avoids gradients, giant metrics, glass, pill-card grids and decorative illustrations, but falls into the quieter SaaS-consultancy pattern: Inter, pale grey text, three uppercase eyebrows, generous whitespace, a safe split column and ruled service rows. The distinctive relationship exists in the words but not in the art direction.

**Deterministic scan:** zero findings for `src/components/landing/OutcomesSection.tsx`. This supports the visual diagnosis: the weakness is not a detectable code or token violation.

**Visual evidence:** the supplied desktop screenshot was inspected directly. Native browser automation and mutable overlay injection were unavailable, so no user-visible overlay or live server was used.

## Overall Impression

The section is calm, legible and strategically accurate, but its composition quietly contradicts its message. The developed product occupies a sparse 38% column, while 3Trees receives the dominant 62% column, the only green accent, three detailed responsibility rows and the apparent next action. The visible result reads more like a restrained CRM-consultancy services block than evidence of a substantial product with implementation around it.

The central unresolved question is the section’s emotional job. It currently tries to prove the product exists, make implementation manageable and define the product/partner boundary without deciding which should lead.

Cognitive load is moderate, with two checklist failures: visual hierarchy and progressive disclosure. Chunking is otherwise sound—two conceptual groups and three responsibilities remain within working-memory limits. Repetition with the preceding implementation section creates an additional page-level burden.

## What's Working

1. The underlying message correctly expresses the developed fundraising core and shapeable wider CRM.
2. The semantic definition list is easier to scan than three generic cards would be.
3. Fine rules, whitespace, flat surfaces and rare green emphasis remain calm and consistent with the current design system.

## Priority Issues

### [P1] Visual weighting makes the product the supporting act

**Why it matters:** The 38/62 split gives Fundraising for Twenty one short paragraph, while 3Trees gets most of the area, detail, accent and onward affordance. The section therefore approaches the explicit anti-reference of a corporate CRM consultancy page.

**Fix:** Before choosing a replacement layout, decide whether the two parts are peers, a handoff, or product plus enablement—and what concrete specificity makes the product earn “substantial.” Rebalance emphasis around that decision.

**Suggested command:** `$impeccable shape`

### [P1] The closing Learn more affordance is a trust-breaking dead end

**Why it matters:** It looks like a faint link but is a disabled span. Keyboard and touch users cannot discover the hover title, its low opacity is unlikely to meet contrast requirements, and it fails exactly when a cautious buyer asks for implementation reassurance.

**Fix:** Provide a real internal destination or remove link styling and state the availability visibly and honestly. Never present disabled navigation as a promise.

**Suggested command:** `$impeccable harden`

### [P2] Repeated eyebrows and split-panel grammar feel generic

**Why it matters:** Three uppercase tracked labels plus a safe two-column split and ruled service list create a familiar generated consultancy scaffold rather than the Clear Working Model.

**Fix:** Decide which single label is useful metadata and remove the others. Derive the structure from the actual product/implementation boundary.

**Suggested command:** `$impeccable distill`

### [P2] Essential explanation is too muted and diffuse

**Why it matters:** Nearly every explanatory sentence is 14px muted text. The long right-hand measure loses authority even though it carries important buying information.

**Fix:** Strengthen the role of essential copy, shorten its measure and distinguish commitments from supporting detail.

**Suggested command:** `$impeccable typeset`

### [P2] The intermediate responsive state is likely to become cramped

**Why it matters:** At 768px the 38/62 split, 40px internal padding and fixed 190px term column all activate together. Labels already wrap in the wide screenshot and will fragment further at tablet widths or zoom.

**Fix:** Test 768–1024px and 200% zoom. Delay the dense split until sufficient width exists and let responsibility labels size more naturally.

**Suggested command:** `$impeccable adapt`

## Persona Red Flags

**Jordan — first-time CRM buyer:** “Substantial capability,” “wider system” and “connected systems” remain abstract. The apparent Learn more route then fails.

**Riley — due-diligence stakeholder:** Activities are named, but boundaries and outputs are not. The disabled route prevents Riley from verifying what implementation and continued development mean.

**Casey — distracted mobile visitor:** The content stacks, but Casey must read several similar abstract sentences before reaching a non-working endpoint. Intermediate widths risk making the short responsibility list feel much longer.

## Minor Observations

- “Organisation” is repeated in the headline, introduction, subheading and body.
- “Strong fundraising starting point” and “substantial fundraising capability” perform nearly identical work.
- Making 3Trees the only green label makes the partner the section’s only living signal.
- The bright yellow vertical mark in the screenshot is not present in the component source and should be treated as a browser/capture artifact unless reproduced.
- Heading and definition-list semantics are sound.

## Questions to Consider

1. Is the section primarily meant to prove the product is substantial, make migration manageable, or clarify who owns what?
2. Is 3Trees an equal half of the proposition, an implementation layer around the product, or a guide engaged after product evaluation?
3. What concrete product specificity can support “substantial” without repeating the screenshot gallery?
4. Should the three rows describe service categories, tangible deliverables, or buyer questions answered?
5. If the 3Trees site is unavailable, what useful route should implementation-focused visitors receive now?
