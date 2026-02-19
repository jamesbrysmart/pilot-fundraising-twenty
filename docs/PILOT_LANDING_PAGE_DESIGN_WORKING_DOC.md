# Pilot Landing Page Design Working Doc (Baseline Optimization)

Status: Active  
Owner: Design Lead  
Purpose: Operating brief for improving the baseline landing page through small, high-impact changes.

Guidance note:
- This document sets direction, not rigid layout rules.
- Preserve what is already working in the control baseline.
- Prefer targeted improvements that increase qualified applications.

## 0) Current Iteration Model (Routes)
Active implementation model:
- Landing page baseline: `/`
- Application surface: in-page application sheet/panel on `/`

Notes:
- Variant exploration is paused.
- We are iterating the single baseline directly.

## 1) Objective
Design and iterate a landing page that makes qualified nonprofit teams feel:
- this is worth senior team time,
- this is operationally real,
- this is bounded-risk,
- and we should apply now.

Primary KPI:
- qualified applications, not raw volume.

## 2) Strategy: Baseline-First, Targeted Improvements
Working approach:
- No full redesign of the landing page.
- No parallel variant tracks for now.
- Keep the current calm baseline as control.
- Make small, deliberate improvements to the decision journey.

Iteration unit:
- each pass should focus on one or two conversion bottlenecks,
- ship quickly, review the artifact, and iterate.

## 3) What Stays Stable
These are the baseline strengths we should preserve:
- calm and credible tone,
- strong spacing and scanability,
- restrained visual system (quiet borders, low ornament),
- truthful claims and explicit uncertainty where needed.

Baseline rule:
- the current implementation is a canvas for refinement, not a constraint on quality.
- section order and composition can change when it clearly improves clarity and momentum.

## 4) Priority Improvement Areas
We optimize in this order unless leadership changes priorities:

1. Claims-to-proof adjacency
- add or reposition proof so major claims are validated immediately.

2. Early risk clarity
- surface safety rails earlier (no forced cutover, clean exit, scope clarity).

3. CTA system completeness
- maintain Hero and final CTA,
- add one mid-page checkpoint CTA near proof/value,
- include one low-friction "More details" secondary action placeholder.

4. Fit and qualification clarity
- help high-fit teams self-identify quickly,
- reduce low-fit applications without exclusionary tone.

5. Application friction tuning
- keep the application sheet aligned with qualification quality goals,
- adjust form depth only when it improves applicant quality.

## 5) Improvement Levers (Small Scope)
Use these levers to make targeted changes:
- tighten headline/subhead clarity in Hero,
- convert dense paragraphs into structured panels or short lists,
- insert or refine one proof module (scenario + media + what it proves),
- add compact guardrail callouts near high-stakes claims,
- improve CTA placement/copy consistency across sections,
- refine section rhythm (spacing/banding) without global restyle.

What we avoid by default:
- broad visual re-themes,
- large structural rewrites in a single pass,
- adding many new components before validating impact.

## 6) Change Budget Per Iteration
Default budget for one iteration:
- touch up to 2 existing sections, and
- add at most 1 new section/module.

Escalate to a larger pass only when:
- a small pass cannot resolve the core conversion issue, or
- CEO/PO explicitly asks for a broader shift.

## 7) Baseline Visual System
Typography:
- modern sans for body and most headings,
- optional selective serif only where it improves emphasis,
- optional mono for metadata labels.

Color:
- neutral base with one controlled accent family,
- avoid high-chroma marketing gradients,
- allow selective contrast spikes where the copy benefits (Hero, Proof, Final CTA).

Surfaces:
- light panels, quiet borders, low elevation,
- structured containers for proof and boundaries.

Motion:
- minimal only (hover/focus/subtle reveal),
- no scroll choreography or media swapping on scroll.

Green shoot motif (subtle brand signal):
- Purpose: symbolize early momentum and practical hope without introducing a campaign aesthetic.
- Primary placement: one motif on a single full-width horizontal seam between Hero and Signal Strip.
- Structural rule: this seam should do real layout work (section transition), not act as decoration.
- Frequency rule: default to one instance on the full landing page. Add a second instance only if the first is too easy to miss after usability review.
- If a second instance is used: keep it tiny and functional (for example near final CTA metadata), never as another large line-and-icon composition.
- Visual rule: neutral hairline + small green shoot; remove heavy shadow/gradient effects that compete with the motif.
- Responsive rule: keep the seam full-width on all breakpoints; on desktop align shoot to the right content rhythm, on mobile place center or slightly right of center.
- Implementation note: keep shoot as SVG, but drive stroke/fill from CSS variables so color/weight can be tuned without editing path geometry.

## 8) Proof System Guidance
Goal:
- make the offer feel operationally real with observable evidence.

Allowed proof types:
- screenshots (default),
- short walkthrough video (only if crisp),
- artifact previews (requirements baseline, decision brief, outputs).

Default proof structure:
- 2-3 named scenarios,
- each includes concise context and "what this proves",
- proof appears adjacent to major claims, not isolated at the bottom.

If assets are not ready:
- use explicit placeholders rather than implied proof.

## 9) CTA System Guidance
Default CTA moments:
- Hero primary CTA,
- mid-page checkpoint CTA near proof/value,
- final CTA with reassurance and timeline signal.

CTA posture:
- assertive, calm, application-focused.

Secondary action:
- include one low-friction "More details" action as a placeholder,
- destination can be decided later (`/details` vs in-page sheet/dialog).

## 10) Workflow: Small-Diff Iteration Loop
For each iteration:
1. Identify the highest-priority conversion bottleneck.
2. Define the smallest viable change set.
3. Implement directly on `/`.
4. Keep unresolved facts explicit with `[CONFIRM: ...]`.
5. Validate mobile readability and accessibility basics.
6. Review by section with PO/CEO (keep, cut, merge, next test).

## 11) Publish-Readiness Checklist
- decision journey remains intact (classification -> trust -> proof -> value -> fit -> next step),
- no contradiction in pilot framing,
- proof artifacts are present or explicitly placeholdered,
- safety rails are visible without overwhelming the page,
- CTA path is clear across Hero, mid-page, and close,
- Twenty context is clear but not visually dominant.

## 12) Open Decisions (Need CEO/PO Input)
1. Tone target: strictly calm, or calm with selective energy spikes?
2. Proof launch priority: screenshots-first, or video plus screenshots?
3. Qualification friction: keep current short form, or add stronger qualification fields?
4. Details depth: future `/details` page, or in-page sheet/dialog?

## 13) Source Of Truth
- Design operating brief: `docs/PILOT_LANDING_PAGE_DESIGN_WORKING_DOC.md`
- Messaging working doc: `docs/LANDING_PAGE_MESSAGING_WORKING_DOC.md`
- Planning context: `docs/LANDING_PAGE_PLAN.md`
