---
name: "POLYTREND TTK-3700E"
description: "Reusable tokens and evidence-first patterns for the multilingual TTK-3700E static site."
colors:
  primary: "#1565d8"
  primary-hover: "#0d51b1"
  primary-on-dark: "#a9caff"
  selected: "#e3efff"
  ink: "#10233f"
  ink-soft: "#142f50"
  paper: "#f3f6f8"
  surface: "#ffffff"
  surface-subtle: "#eaf0f6"
  muted: "#53677e"
  line: "#c9d8e8"
  focus: "#3b82e6"
  qualification: "#85450f"
  qualification-soft: "#fff0df"
  result-positive: "#25623f"
  scene-hygiene: "#0d775f"
  scene-medical: "#4e6173"
typography:
  display:
    fontFamily: '"Archivo", "PingFang SC", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Segoe UI", sans-serif'
    fontSize: "clamp(44px, 4.5vw, 68px)"
    fontWeight: 680
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  display-cjk:
    fontFamily: '"Archivo", "PingFang SC", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Segoe UI", sans-serif'
    fontSize: "clamp(42px, 4.2vw, 61px)"
    fontWeight: 680
    lineHeight: 1.16
    letterSpacing: "-0.025em"
  headline:
    fontFamily: '"Archivo", "PingFang SC", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Segoe UI", sans-serif'
    fontSize: "36px"
    fontWeight: 620
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: '"Archivo", "PingFang SC", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Segoe UI", sans-serif'
    fontSize: "21px"
    fontWeight: 650
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Archivo", "PingFang SC", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Segoe UI", sans-serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  body-small:
    fontFamily: '"Archivo", "PingFang SC", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Segoe UI", sans-serif'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: '"Archivo", "PingFang SC", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Segoe UI", sans-serif'
    fontSize: "12px"
    fontWeight: 650
    lineHeight: 1.4
  navigation:
    fontFamily: '"Archivo", "PingFang SC", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Segoe UI", sans-serif'
    fontSize: "12px"
    fontWeight: 550
    lineHeight: 1.55
  data:
    fontFamily: '"Archivo", "PingFang SC", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Segoe UI", sans-serif'
    fontSize: "clamp(54px, 5.6vw, 76px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "12px"
  pill: "30px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-desktop: "72px"
  section-tablet: "60px"
  section-mobile: "52px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "11px 15px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "11px 15px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "11px 15px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "11px 15px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "#425a74"
    typography: "{typography.navigation}"
    padding: "0"
  scenario-tab:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0"
  scenario-tab-selected:
    backgroundColor: "{colors.selected}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0"
  spec-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  field-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.sm}"
    padding: "10px 12px"
  badge-qualification:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.qualification}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "5px 8px"
  download-link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "10px 12px"
  report-preview:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "0"
    width: "96px"
---

# Design System: POLYTREND TTK-3700E

## Overview

**Creative North Star: "The Film Inspection Light Table"**

The system treats the page as a compact technical workbench: white and ice-grey surfaces hold real application photographs, measured data and report previews, while deep navy separates evidence-heavy regions. Cobalt is reserved for actions, selected states and the product data series. The source of truth is the built static site; there is no approved visual comp.

Density comes from aligned grids, fine rules and reusable 12px functional text rather than miniaturized metadata. Photography supplies concrete context, not product-use proof. The same evidence hierarchy must survive all five interface languages and the no-JavaScript, reduced-motion, mobile and print presentations.

**Key Characteristics:**
- Cold white and ice-grey work surfaces with navy structure and cobalt actions.
- Archivo variable Latin type with native CJK fallbacks and locale-specific line breaking.
- Compact grids, 1px rules, shallow 6–12px radii and no persistent shadows.
- Real scene, sample and report imagery with traceable provenance.
- Keyboard-operable scene tabs, original PDF downloads and a local-only technical brief.

## Colors

The palette is deliberately cool and procedural; semantic orange and green appear only where a qualification or measured result needs to be distinguished from navigation and product data.

### Primary
- **Cobalt Action** (`{colors.primary}`): Buttons, links, selected tabs, focus accents, report actions, icons and the TTK-3700E chart series.
- **Cobalt Hover** (`{colors.primary-hover}`): Hover background for primary actions; do not use it as a second decorative accent.
- **Ice Blue on Navy** (`{colors.primary-on-dark}`): Icons, values and links on navy where the stronger cobalt would lose separation.
- **Selected Wash** (`{colors.selected}`): Selected application-tab background, always paired with a cobalt border.
- **Focus Blue** (`{colors.focus}`): The global 3px keyboard-focus outline with a 3px offset.

### Secondary
- **Qualification Brown-Orange** (`{colors.qualification}`): Food-scene qualification headings, badges and notes; never an approval signal.
- **Qualification Wash** (`{colors.qualification-soft}`): Safety and qualification-note backgrounds.
- **Measured Result Green** (`{colors.result-positive}`): Report-result text only; it does not mean certification.
- **Hygiene Teal** (`{colors.scene-hygiene}`): The hygiene scenario's local heading, badge, focus-chip and note accent.
- **Medical Slate** (`{colors.scene-medical}`): The medical scenario's local accent, deliberately quieter than an approval green. Protective-film scenes reuse cobalt.

### Neutral
- **Deep Navy Ink** (`{colors.ink}`): Primary text, dark buttons, performance and proof regions, and the page theme color.
- **Soft Navy Ink** (`{colors.ink-soft}`): Contact and performance-result surfaces.
- **Ice Grey Paper** (`{colors.paper}`): Body background, chart canvas and brief-generator surface.
- **Calibrated White** (`{colors.surface}`): Navigation, cards, report pages, inputs and evidence media.
- **Section Ice** (`{colors.surface-subtle}`): Application and resource bands.
- **Muted Blue Grey** (`{colors.muted}`): Secondary reading text; do not use it for disabled-only semantics.
- **Fine Rule Blue** (`{colors.line}`): Dividers and card borders, normally at 1px.

**The Action and Qualification Rule.** Use cobalt for actions, selection and the product data series; use orange only for qualifications or safety boundaries. Neither color may turn an illustrative scene or an SGS result into an end-use approval or certification.

## Typography

**Display and Body Font:** Archivo variable, self-hosted with `font-display: swap`, followed by PingFang SC, Hiragino Kaku Gothic ProN, Yu Gothic, Segoe UI and the generic sans-serif fallback. The single stack supports Latin, Simplified Chinese and Japanese without introducing a separate display face.

**Character:** Compact engineered Latin headings sit above restrained reading text. Numerical data uses tabular figures; CJK headings prioritize natural wrapping and line height over tight Latin tracking.

### Hierarchy
- **Display** (`typography.display`): Hero headline only; weight and width remain restrained rather than ultra-black or expanded.
- **CJK Display** (`typography.display-cjk`): Simplified Chinese and Japanese hero headline variant.
- **Headline** (`typography.headline`): Section titles; compact but not all-caps.
- **Title** (`typography.title`): Repeated card and document titles.
- **Body** (`typography.body`): Base reading text and longer introductions.
- **Small Functional Body** (`typography.body-small`): Inputs, metadata and supporting functional text.
- **Label** (`typography.label`): Buttons, tabs, badges and downloads.
- **Navigation** (`typography.navigation`): Desktop section-navigation links.
- **Data** (`typography.data`): Large measured or dosage values; pair with a visible unit and source context.

### Localization
- Interfaces remain English, Simplified Chinese, Spanish, German and Japanese. Original PDFs and report previews remain Chinese or English: Simplified Chinese selects the Chinese set; the other four interfaces select the English set.
- Chinese and Japanese headings use ordinary wrapping instead of balanced wrapping. Their section and contact headlines use a 1.28 line height; hero display tracking and size use the CJK token rather than the Latin token.
- German navigation reduces the gap to 18px and explicitly sets link text to 12px.
- At 680px and below, form controls use 16px to avoid mobile input zoom. Long report IDs use anywhere-wrapping, tables scroll horizontally, and download rows become stacked actions.

**The Functional Floor Rule.** New functional labels, navigation, tab text, metadata, download actions, notes and form copy use at least 12px; form controls use 16px at 680px and below. The brand microtagline and legacy sub-12px declarations are not reusable type-scale steps.

## Layout

The desktop container is `min(1320px, calc(100% - 80px))`, centered. At the 1160px, 960px, 680px and 360px breakpoints, the container calculation becomes `100% - 56px`, `100% - 48px`, `100% - 32px` and `100% - 24px` respectively. Hero, standard sections and the proof strip add an 8px inline safety pad outside the inner container.

Standard sections use the three section-spacing tokens rather than viewport-height empty space. The hero starts with 40px top padding and ends with 20px bottom padding; its two-column content uses a 1.35fr / 0.65fr grid with a 48px gap and a 338px minimum height. Four application photographs sit directly beneath it, followed by the measurement rail and proof strip.

Reusable grids are explicit: section headings use 1.15fr / 0.85fr, product data uses 1.08fr / 0.92fr, the performance chart/result pair uses 1.9fr / 1fr with a 250px minimum result track, and contact uses 0.85fr / 1.15fr. Cards use 16–18px gaps in dense evidence grids; 24px is the default substantial card pad, not a universal section spacer.

### Responsive Behavior
- **1160px and below:** Reduce gutters and major gaps, hide the navigation CTA, retain the four-column application tabs, and stack each report row's action buttons.
- **960px and below:** Switch to the 68px menu header and JavaScript-driven navigation; stack hero, performance, process and contact layouts. Application panels become one column, compliance cards become one column, and the filmstrip becomes two columns. Without JavaScript, navigation remains visible and all scenario panels render in sequence.
- **680px and below:** Use a 64px header, 52px section spacing, one-column data and form grids, full-width hero and download actions, two-column hero metrics, and two-column application tabs. Sticky packaging and multi-column report rows become static or stacked.
- **360px and below:** Reduce only the container and display sizing further; do not create a smaller functional-text tier.
- **Print:** Hide navigation, interactive actions, contact and footer; show every scenario panel, avoid breaking panels across pages, and flatten dark hero/performance backgrounds to white.

## Elevation & Depth

The final cascade is flat by default. Earlier menu shadows are explicitly removed from both the language menu and mobile navigation. Depth comes from white/ice-grey tonal boundaries, navy evidence bands, 1px rules, cropped photography and the dark-to-transparent label gradient on application images.

Focus is an outline, not a shadow. Sticky positioning is limited to the site header and desktop packaging card; the packaging card becomes static at 960px and below.

**The Flat-by-Default Rule.** Do not add ambient card shadows or floating glass panels. Use a tonal surface change or a 1px rule first, and reserve outlines for keyboard and field focus.

## Shapes

Controls and report previews use a gentle 6px radius; photographic tabs, compact notes and language surfaces use 10px; evidence, chart, document and brief cards use 12px. Status badges use a 30px pill radius and scene-focus chips use 20px; circular geometry is reserved for process-step numbers.

Most containers have a 1px solid border using the line token. Selected tabs replace the border color with cobalt rather than adding elevation. Images use `object-fit: cover`; report previews retain their 720 / 1018 aspect ratio, and scene panel photography uses a 4 / 3 crop on desktop.

## Components

### Buttons
- **Shape and size:** Inline-flex, 45px minimum height, 6px radius, 11px 15px padding and the label type role.
- **Primary:** Cobalt background and border with white text; hover uses the hover token. Use for the main scene exploration action.
- **Ghost:** Transparent with navy text and a 1px `#9fb6ce` border; hover uses a pale blue fill and cobalt border. Use for the hero TDS download.
- **Dark:** Navy with white text; hover uses `#244a72`. Use for brief generation and copying on the ice-grey form surface.
- **Focus and motion:** Global keyboard focus is a 3px focus-blue outline. Background, text and border transitions run for 0.2s; there is no press translation or decorative lift.

### Navigation and Language Selection
- The header is sticky at 70px, 68px and 64px across the desktop, tablet and mobile ranges. Desktop links use a 2px cobalt underline that scales in on hover; the selected language uses a pale-blue row and a check icon.
- At 960px and below, the menu button exposes `aria-expanded`; opening reveals a bordered full-width menu. Selecting a section closes it. Escape closes the menu or language picker and returns focus to its trigger; moving to the 961px desktop range closes the mobile menu.
- Language links preserve the current hash on initial load, hash changes and picker toggles. Outside click closes the language picker. The five locale links also have `hreflang`, with English as `x-default`.

### Application Filmstrip and Tabs
- Four photographic windows link to the application section and activate their matching panel. Each has a text alternative through its link label; repeated tab thumbnails have empty alt text, while the main panel photograph has localized descriptive alt text.
- Tabs form a four-column desktop and two-column mobile grid. The selected state uses the selected wash, cobalt border and visible arrow. The default tab is the only tab stop.
- Desktop application panels use a `1.08fr / .92fr` text-to-media split with 24px gaps and 22px padding. Panel photographs are capped at 260px to keep the five subapplication rows and process note in the same reading viewport; mobile photographs retain the 4:3 ratio with a 280px maximum height.
- Arrow Right/Down and Left/Up move with wraparound; Home and End select the first and last tab. Activation moves focus only for keyboard navigation. Without JavaScript, tab controls disappear and every panel remains available.
- In no-preference motion mode, the filmstrip reveals once over 0.65s with `cubic-bezier(.16, 1, .3, 1)` and a right-to-left `clip-path` expansion. Photograph hover scales to 1.025 over 0.35s. Reduced-motion mode removes smooth scrolling and reduces animation/transition durations to 0.01ms; generated-brief scrolling also becomes instant.

### Evidence Media and Provenance
- `content/media.mjs` is the scene-image dimension/source mapping; `src/assets/images/sources.json` is the canonical provenance ledger. Keep both synchronized with any replacement raster and with the copied files in `dist/assets/images/`.
- The SGS sample is eager/high-priority in the hero. Filmstrip images are eager; in-panel scenes and report previews are lazy and asynchronously decoded. Always preserve intrinsic dimensions to limit layout movement.
- Pexels photographs are third-party illustrative scenes. The sample is extracted from the submitted-sample report, and report previews are first-page renders of the actual local PDFs. A source link or report ID stays adjacent to the image.

| Shipping raster | Intrinsic size | Provenance and permitted meaning |
|---|---:|---|
| `hygiene.jpg` | 1200×900 | [Pexels 6849259](https://www.pexels.com/photo/baby-diapers-on-a-basket-6849259/), Pexels License; illustrative hygiene products, not a customer site or TTK-3700E-use evidence. |
| `protective.jpg` | 1200×914 | [Pexels 10126665](https://www.pexels.com/photo/a-man-wrapping-a-car-hood-10126665/), Pexels License; illustrative film installation, not evidence of product use or film chemistry. |
| `food.jpg` | 1200×900 | [Pexels 27405286](https://www.pexels.com/photo/coffee-pack-27405286/), Pexels License; illustrative flexible packaging, not food-contact eligibility or product-use evidence. |
| `medical.jpg` | 1200×900 | [Pexels 6627665](https://www.pexels.com/photo/view-of-a-medical-sterilizer-6627665/), Pexels License; illustrative sterilization packaging, not medical approval or product-use evidence. |
| `sample-sgs.jpg` | 835×626 | `documents/ttk-3700e-total-fluorine-en.pdf`, PDF page 3, embedded image xref 44; report `CANEC26013330503`, sample `CAN26-0133305-0001.C001`. Actual submitted-sample photograph. |
| `report-pfas.jpg` | 720×1018 | `documents/ttk-3700e-targeted-pfas-en.pdf`, page 1; report `CANEC26013330501`. |
| `report-fluorine.jpg` | 720×1018 | `documents/ttk-3700e-total-fluorine-en.pdf`, page 1; report `CANEC26013330503`. |
| `report-rohs.jpg` | 720×1018 | `documents/ttk-3700e-rohs-en.pdf`, page 1; report `CANEC26013330505`. |
| `report-pfas-cn.jpg` | 720×1018 | `documents/ttk-3700e-targeted-pfas-cn.pdf`, page 1; report `CANEC26013330502`. |
| `report-fluorine-cn.jpg` | 720×1018 | `documents/ttk-3700e-total-fluorine-cn.pdf`, page 1; report `CANEC26013330504`. |
| `report-rohs-cn.jpg` | 720×1018 | `documents/ttk-3700e-rohs-cn.pdf`, page 1; report `CANEC26013330506`. |

### Reports and Downloads
- Compliance cards pair a 96px report-preview column with the report metric, method, ID and source link. Preview and source links open the corresponding local PDF in a new tab with `rel="noopener"`; library download actions use the `download` attribute.
- Keep English and Chinese TDS, performance and SGS files available in resources regardless of interface language. The hero TDS and compliance previews follow the locale rule in Typography.
- Do not restyle a report preview as a generic certificate badge. Report IDs, dates, methods, test conditions and scope notes remain adjacent to their claims.

### Technical Brief Form
- Inputs and selects have a 44px minimum height, 6px radius, white background and 1px `#bdcede` border. The main textarea starts at 96px; the generated output starts at 220px. Focus uses a cobalt border and a 2px `#b7d3f5` outline with no offset.
- Application, process and challenge are required and use native validity reporting. Name, company, region and resin are optional. Submission generates a localized plain-text brief locally, reveals the result, scrolls it into view and focuses the output.
- Copy first focuses and selects the output, tries the local copy path, then the secure Clipboard API with a 1200ms timeout. The status element uses `role="status"`; fallback leaves text selected for manual copying.
- `content/channels.mjs` holds the optional `whatsappNumber` and five-language WhatsApp labels and notices. With the default empty number, `https://wa.me/` opens WhatsApp's share flow and the visitor chooses the recipient; a configured digits-only number creates a direct chat instead. Never invent a manufacturer number or imply a direct company channel.
- The manufacturer-area share link carries the localized product introduction. After brief generation, `#whatsapp-brief` receives the complete localized brief through `encodeURIComponent`. Both links open in a new tab with `rel="noopener"` and only after a user click. The visitor chooses the contact and confirms sending in WhatsApp; the site does not initiate transmission.
- There are no sending, uploading, subscription or remote-success states. The site neither transmits nor stores an inquiry, and no receiving channel is implied.

## Do's and Don'ts

### Do:
- **Do** keep new functional text at 12px or larger and mobile form controls at 16px; treat remaining smaller declarations as debt.
- **Do** preserve intrinsic image dimensions, localized alternatives, loading priority and the provenance ledger whenever media changes.
- **Do** keep report IDs, scope, method context and original Chinese/English PDFs close to the claims they support.
- **Do** preserve keyboard tabs, visible focus, reduced motion, no-JavaScript content access and the local-only brief across all five locales.
- **Do** retain the documented Chinese/English TDS moisture-specification difference until the source documents themselves change.

### Don't:
- **Don't** present Pexels scenes as customer production, TTK-3700E use, film-chemistry evidence, food-contact eligibility or medical approval.
- **Don't** describe SGS reports as certifications, ND as absolute zero, or sample-scoped results as universal performance guarantees.
- **Don't** turn food flexible packaging or medical packaging into approved end uses; the current TDS limits the product to industrial use and excludes food contact and medical implants.
- **Don't** add inquiry sending, remote-success or storage claims to the technical brief; no public recipient is configured.
- **Don't** treat the current brand mark or custom illustrations as a verified official logo, customer endorsement or approval asset.
- **Don't** replace inspectable media with decorative scene illustrations or introduce unoccupied viewport-height spacers.

**Not canonized:** Decorative microtype such as the brand microtagline (7px / 6px, hidden at 360px and below) is not functional body copy or a reusable type-scale step. The independent reviewer's resolved material fixes and ship disposition are not a whole-surface quality certification.
