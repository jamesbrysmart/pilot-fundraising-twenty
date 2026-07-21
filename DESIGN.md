---
name: "Fundraising for Twenty"
description: "A calm, product-led design system for confident nonprofit CRM evaluation."
colors:
  product-ink: "#14181F"
  clear-canvas: "#FCFCFC"
  card-white: "#FFFFFF"
  quiet-surface: "#F4F4F6"
  soft-accent: "#EBEDEF"
  muted-copy: "#6A7181"
  structural-line: "#E3E5E8"
  shoot-green: "#4FA168"
  error-red: "#EF4343"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.375
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "96px"
  section-lg: "128px"
components:
  button-primary:
    backgroundColor: "{colors.product-ink}"
    textColor: "{colors.clear-canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#2C3037"
    textColor: "{colors.clear-canvas}"
  button-outline:
    backgroundColor: "{colors.clear-canvas}"
    textColor: "{colors.product-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
    height: "36px"
  input-default:
    backgroundColor: "{colors.clear-canvas}"
    textColor: "{colors.product-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: "40px"
  card-default:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.product-ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  label-eyebrow:
    textColor: "{colors.muted-copy}"
    typography: "{typography.label}"
---

# Design System: Fundraising for Twenty

## Overview

**Creative North Star: "The Clear Working Model"**

Fundraising for Twenty should feel like a functioning product laid out clearly for inspection. Real workflows, implementation relationships and next steps are arranged with the care of a working model: visitors can grasp the whole quickly, then move closer to examine the evidence. The atmosphere is calm, capable and considered—quiet product confidence rather than sales theatre.

The system uses generous whitespace, a disciplined type hierarchy, fine structural rules and a rare green signal. Warmth comes through clarity, candid explanations and manageable interactions rather than soft illustration or sentimental nonprofit conventions. Layouts support fast strategic scanning and deeper operational inspection; neither reading speed should compromise the other.

The visual language explicitly rejects generic nonprofit softness, loud SaaS spectacle, dark developer-tool exclusivity, abstract corporate CRM consultancy language, overly editorial concepts that hide the product, and feature-heavy card inventories. Product evidence remains the centre of gravity.

**Key Characteristics:**

- Quiet product confidence with high information clarity.
- Generous section rhythm (96px on compact layouts; 128px from medium screens).
- Fine 1px rules and subtle tonal surfaces instead of decorative effects.
- Real screenshots treated as legible evidence, not background decoration.
- One restrained green accent used to guide attention and express growth.
- Familiar, accessible controls with visible states and low-pressure calls to action.

## Colors

The palette is an almost-monochrome working surface interrupted by one living green signal. Color establishes hierarchy without competing with product evidence.

### Primary

- **Shoot Green** (`#4FA168`): the single brand accent. Use it for the shoot mark, active indicators, fine emphasis lines and selective link feedback—not as a large decorative field.

### Neutral

- **Product Ink** (`#14181F`): primary text, filled actions, focus rings and the strongest interface statements.
- **Clear Canvas** (`#FCFCFC`): the main page background and default control surface; warmer than pure white without appearing tinted.
- **Card White** (`#FFFFFF`): contained product evidence and elevated content surfaces that need a slight distinction from the canvas.
- **Quiet Surface** (`#F4F4F6`): section bands, subdued controls and selected navigation states.
- **Soft Accent** (`#EBEDEF`): restrained hover and active backgrounds where a stronger tonal distinction is required.
- **Muted Copy** (`#6A7181`): supporting text, labels and secondary actions. Never use it where contrast or comprehension becomes marginal.
- **Structural Line** (`#E3E5E8`): borders, dividers, timelines and layout structure. Lines remain fine and quiet.

### Semantic

- **Error Red** (`#EF4343`): destructive actions and validation errors only. Pair it with explicit text or iconography; color alone never communicates status.

**The One Living Signal Rule.** Shoot Green is the only expressive accent and should occupy less than 10% of any view. Its rarity is what gives it meaning.

**The Evidence First Rule.** Color must frame and clarify screenshots, never tint, obscure or overpower the evidence they contain.

## Typography

**Display Font:** Inter (with system-ui and sans-serif fallbacks)  
**Body Font:** Inter (with system-ui and sans-serif fallbacks)  
**Label Font:** Inter (with system-ui and sans-serif fallbacks)

**Character:** A single assured sans-serif keeps the page modern, direct and cognitively light. Hierarchy comes from scale, weight, line-height and spacing rather than a decorative font pairing.

### Hierarchy

- **Display** (600, 36px compact / 48px medium / 56px large, 1.1 line-height, tight tracking): the hero proposition only. Keep line breaks purposeful and the message immediately understandable.
- **Headline** (600, 20px compact / 24px medium, 1.25 line-height, tight tracking): section-level arguments and major evaluation points.
- **Title** (500–600, 16–18px, 1.375 line-height): workflow claims, component headings and compact explanatory structure.
- **Body** (400, 14px by default; 16px for the hero lead, 1.625 line-height): evidence, implementation detail and explanatory copy. Keep readable measures generally between 45 and 70 characters.
- **Label** (500, 11px, 0.05em tracking, uppercase): short eyebrows, evidence categories and metadata only. Labels never carry essential explanation alone.

**The One Voice Rule.** Inter is the active interface voice. Imported but unused display or mono fonts are not part of the design system unless a later, deliberate redesign establishes a clear role for them.

**The Plain Language Rule.** Typographic polish never compensates for vague copy. Important product and implementation information must remain understandable without dense terminology or ornamental presentation.

## Elevation

The system is structurally layered and flat by default. Depth comes from spacing, 1px borders and small shifts between Clear Canvas, Card White and Quiet Surface. A low shadow is acceptable on small contained cards or persistent utility controls; stronger shadows are reserved for sheets, dialogs, menus and other interfaces that genuinely sit above the page.

### Shadow Vocabulary

- **Surface Low** (`0 1px 2px 0 rgb(0 0 0 / 0.05)`): the maximum resting shadow for an ordinary card or small fixed utility control.
- **Overlay Medium** (`0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)`): menus, popovers and compact floating panels.
- **Overlay High** (`0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)`): sheets and dialogs that must be visibly separated from the page.

**The Flat-by-Default Rule.** If an ordinary section needs a shadow to be understood, its spacing, border or tonal hierarchy is unresolved.

**The Honest Layer Rule.** Elevation communicates actual interface layering, never prestige or decoration.

## Components

Components are restrained, precise and quietly responsive. Their structure should feel familiar on first use, while careful alignment, compact radii and clear state changes convey capability.

### Buttons

- **Shape:** gently compact corners (6px radius), with a 40px default height and 36px compact height.
- **Primary:** Product Ink fill with Clear Canvas text, medium-weight 14px type and 16px horizontal padding. Reserve it for the primary enquiry action.
- **Hover / Focus:** a subtle 10% lightening on hover; a high-contrast 2px Product Ink focus ring with a 2px canvas offset on keyboard focus. State transitions are brief and limited to color or opacity.
- **Outline:** Clear Canvas fill, Structural Line border and Product Ink text. Use for quieter navigation-level actions such as the compact enquiry control.
- **Text link:** Muted Copy with a fine underline that changes from Structural Line to Shoot Green on hover or keyboard focus. It must remain visibly interactive without hover.
- **Disabled:** preserve the control's shape and label while reducing opacity to 50%; suppress pointer interaction without removing it from the explanatory context.

### Cards / Containers

- **Corner Style:** gently curved (8px radius) for product evidence; many narrative sections remain square and are structured by horizontal rules.
- **Background:** Card White for evidence cards, Clear Canvas for controls and Quiet Surface at low opacity for section bands.
- **Shadow Strategy:** flat by default; borders carry the structure. Use Surface Low only for small floating utilities, not for repeated content-card grids.
- **Border:** one Structural Line rule (1px). Never stack ornamental borders.
- **Internal Padding:** 20px compact and 24px from medium screens.

### Inputs / Fields

- **Style:** Clear Canvas background, one Structural Line border, 6px corners, 40px minimum height and 12px horizontal padding. Body text is 16px on compact screens to support mobile input, reducing to 14px where appropriate on larger screens.
- **Focus:** a visible 2px Product Ink ring with a 2px background offset. Focus must never rely on a faint border-color change alone.
- **Error / Disabled:** show errors with Error Red plus explicit text; disabled controls retain readable labels at 50% opacity and use the expected unavailable cursor.
- **Instructions / Validation:** labels are persistent, required information is explicit, and errors identify both the problem and its resolution.

### Navigation

- The header is a compact 56px band with a single Structural Line divider, the Shoot Green mark, a 14px semibold product name and restrained actions.
- Default navigation text uses Muted Copy; hover, focus and active states move to Product Ink. Active state can use a Quiet Surface fill or a fine Shoot Green indicator, always paired with a non-color cue.
- Side-panel navigation remains visible and familiar: a bordered vertical list on larger screens and a horizontally scrollable tab row on compact screens.

### Product Evidence Cards

- Treat each screenshot as the primary evidence within an 8px bordered Card White frame. Give it a short categorical label, a concrete claim and contextual explanation.
- Preserve screenshot legibility. The current slight alternating rotation (1.25 degrees), restrained desaturation and soft edge gradients may create cohesion, but none may obscure interface detail.
- A fine inset Shoot Green ring and active navigation marker connect the evidence to the brand. They are signals, not decoration.
- Use the sticky workflow index only where every destination remains keyboard-accessible and the active state is understandable without color alone.

### Accordions and Side Panels

- Accordion rows use simple dividers, 14px labels and a familiar rotating chevron. The full trigger is keyboard operable and its open state is programmatically exposed.
- Sheets use Overlay High elevation, an explicit close control, trapped focus and labelled Radix dialog semantics. Content must remain usable at browser zoom and on narrow screens.
- Motion is restrained: 200ms ease-out for accordion disclosure; panel entrances may use 300–500ms only when reduced-motion preferences are respected.

## Do's and Don'ts

### Do:

- **Do** make the ten-second proposition, real workflow evidence and next step legible at a glance.
- **Do** support fast strategic scanning and deeper operational inspection with clear heading levels, concise labels and generous section rhythm.
- **Do** use Shoot Green (`#4FA168`) sparingly for active indicators, fine emphasis and the growth mark.
- **Do** let borders, whitespace and tonal surfaces establish hierarchy before introducing shadow.
- **Do** present screenshots at a size and contrast that allows visitors to inspect real product detail.
- **Do** keep the primary enquiry action prominent while preserving a genuinely visible “What to expect” evaluation route.
- **Do** maintain WCAG 2.2 AA contrast, keyboard access, visible focus, reduced-motion support and understandable non-color states.
- **Do** be visually direct about costs, implementation, scope, availability and maturity.

### Don't:

- **Don't** create a generic nonprofit site that relies on soft colors, friendly illustrations and emotional campaign language while underplaying the product, workflows and implementation reality.
- **Don't** create a loud startup or SaaS page with gradients, oversized claims, urgency, decorative motion and conversion pressure.
- **Don't** use a dark developer-tool aesthetic that makes the product feel technical, exclusive or inaccessible.
- **Don't** turn the page into a corporate CRM consultancy site dominated by abstract promises, service language and generic transformation claims.
- **Don't** create an overly editorial or typographic concept that looks sophisticated but hides the product evidence.
- **Don't** create a feature-heavy CRM page with too many cards, labels and capability inventories competing for attention.
- **Don't** imply testimonials, quantified outcomes, customer logos, marketplace traction or official Twenty endorsement through decorative trust treatments.
- **Don't** rely on hover, animation, color alone or dense technical language to communicate important product and implementation information.
- **Don't** use large green fields, repeated green buttons or ornamental green decoration; if the accent stops feeling rare, the signal has been lost.
