---
target: three 3Trees themes in src/components/landing/OutcomesSection.tsx
total_score: 25
p0_count: 0
p1_count: 3
timestamp: 2026-07-22T08-29-39Z
slug: src-components-landing-outcomessection-tsx
---
Method: dual-agent (A: three_themes_design_review · B: three_themes_detector)

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of system status | 2 | The future 3Trees destination currently appears as a disabled link-like element. |
| 2 | Match with the real world | 3 | The language is clear overall, although the three canonical labels remain fairly abstract without their outcomes. |
| 3 | User control and freedom | 3 | The section is passive and easy to leave, but offers no current route for deeper inspection. |
| 4 | Consistency and standards | 3 | It matches the page system, although its arrow-bearing disabled `span` does not behave like a conventional link. |
| 5 | Error prevention | 3 | There is little interaction risk; the unavailable destination cannot be activated accidentally. |
| 6 | Recognition rather than recall | 3 | All three themes are visible together and easy to compare. |
| 7 | Flexibility and efficiency | 2 | It supports fast scanning but not deeper inspection of scope or working method. |
| 8 | Aesthetic and minimalist design | 2 | It is clean, but visually flat and too similar to the preceding process list. |
| 9 | Error recovery | 2 | The future learn-more treatment currently provides no alternative route. |
| 10 | Help and documentation | 2 | The following FAQ adds detail, but the section itself provides little 3Trees-specific evidence. |
| **Total** |  | **25/40** | **Acceptable foundation; hierarchy and differentiation need work.** |

## Anti-Patterns Verdict

**LLM assessment:** Moderate AI-slop risk. The section avoids gradients, decorative spectacle, excessive cards and other obvious tells. Its risk is safer and subtler: a repeated uppercase eyebrow, neutral heading and three ruled title/detail rows form a generic consultancy pattern. Because `PilotProcess` immediately before it also uses horizontal ruled rows, the three themes read like a second process list rather than a deliberately art-directed statement of 3Trees' value.

**Deterministic scan:** Clean. The detector returned exit code 0 and `[]`: zero findings, zero rule violations and no false positives for `src/components/landing/OutcomesSection.tsx`.

**Visual overlays:** Browser automation and a mutable browser surface were unavailable, so no reliable user-visible overlay was created. The successful local CLI scan is the fallback signal.

## Overall Impression

The messaging simplification has produced a strong content foundation: one subject, three themes and low cognitive load. The biggest opportunity is to make those themes the unmistakable visual peak of the section while giving them a presentation grammar different from the preceding implementation journey.

## What's Working

- The three canonical themes are concise, concrete enough to scan, and semantically grouped with a `dl`.
- The supporting copy makes migration and adoption sound manageable while preserving the developed-core/wider-CRM distinction.
- Three items sit comfortably within working-memory limits; the section is calm, accessible and free from unnecessary interaction.

## Priority Issues

### P1 — The canonical themes do not command attention

**Why it matters:** The 14px titles and 14px descriptions carry almost equal visual weight. Visitors see three ordinary rows before they see the core of 3Trees' offer.

**Fix:** Make `System design`, `Data and migration`, and `Implementation and improvement` the dominant scan layer through scale, space and one restrained green structural signal. Avoid defaulting to three interchangeable icon cards.

**Suggested command:** `$impeccable typeset`

### P1 — The section looks like a second implementation process

**Why it matters:** `PilotProcess` already uses full-width ruled title/detail rows. Repeating that device immediately afterwards makes thematic capabilities look like more sequential steps and creates scroll fatigue.

**Fix:** Give the themes a non-sequential composition: three capability territories, an asymmetric typographic arrangement, or another structure that reads as three areas of expertise rather than steps 5–7.

**Suggested command:** `$impeccable layout`

### P1 — Activities currently carry more weight than outcomes

**Why it matters:** Configure, move, validate and support describe 3Trees' labour, but visitors are evaluating the result for their organisation.

**Fix:** Keep the canonical labels, but give each a short, memorable outcome statement: a CRM shaped around the whole organisation; trusted data at launch; and a system that improves with the team. Supporting detail can remain quieter.

**Suggested command:** `$impeccable clarify`

### P2 — 3Trees lacks a distinctive proof or visual signature

**Why it matters:** The content could currently describe many CRM consultancies. The section needs specificity without implying testimonials, deployments or outcomes that are not available publicly.

**Fix:** Use green with semantic purpose and consider a genuine working-method artifact—such as a system relationship, migration checkpoint or improvement loop—only if it can be made concrete and legible.

**Suggested command:** `$impeccable delight`

### P2 — The current future link treatment appears actionable

**Why it matters:** An arrow and link-like sentence create an interaction expectation, while the disabled `span` is unfocusable and relies on `title` for sighted explanation.

**Fix:** Before deployment, replace it with the real 3Trees URL as already planned. This is a known temporary state, not a reason to redesign the section now.

**Suggested command:** `$impeccable harden`

## Persona Red Flags

**Senior nonprofit decision-maker:** The three themes are visible but do not yield three memorable reasons to trust 3Trees. The section produces an informational plateau where it should create reassurance about delivery.

**Fundraising or operations lead:** The category names make sense, but the present layout does not help distinguish what each theme changes for day-to-day work. They must read every description at equal depth.

**Data or technical reviewer:** Migration and implementation are named, but there is no tangible checkpoint or scope cue to test delivery credibility. The future 3Trees link is not yet available for deeper inspection.

## Minor Observations

- The section's inner border, list borders and neighbouring section borders create a dense run of horizontal rules.
- The 190px title column may wrap `Implementation and improvement` while the shorter titles remain on one line, weakening their parallel treatment.
- `Make the wider CRM work for your organisation` still echoes earlier page language; this is acceptable as orientation but should remain visually subordinate to the three themes if those are now the section's focus.
- The link issue should be judged against the stated deployment plan: the page will not ship until the 3Trees site and destination are live.

## Questions to Consider

- Should the three theme names themselves be the memorable language, or should quieter theme labels introduce stronger outcome statements?
- Should all three areas have equal weight, or is `System design` the framing idea with migration and improvement nested beneath it?
- Can a real 3Trees working artifact make one theme tangible, or should the first iteration remain purely typographic and structural?
