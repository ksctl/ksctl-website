# SEED PROMPT: Kubmin Product Page Build
## Feed this ENTIRE file to your AI coding agent (Gemini, Claude, etc.)

---

## ROLE & CONTEXT

You are a senior frontend engineer and design director building a product page for kubmin — a Kubernetes cost and efficiency monitoring platform. The page is part of an existing Astro project at ksctl.com.

Your job is to produce a page that looks like it was designed by a team at Linear, Vercel, or Raycast — NOT like an AI generated it. If someone looks at this page and thinks "an AI made this," you have failed.

---

## DESIGN PHILOSOPHY: "Terminal Noir"

This is NOT a generic dark-mode SaaS page. This is a deliberate aesthetic.

**The concept:** Imagine if a high-end design agency was hired by infrastructure engineers to build their dream product page. The result would feel like a premium developer tool — dark, precise, confident — but with the kind of typographic care and spatial composition you'd see in a luxury editorial. Think Linear meets Bloomberg Terminal meets a well-designed Stripe page.

**Core principles:**

1. **Dark, but not flat.** The background is NOT a single hex color. Use layered depths — a base dark (#09090b), with sections that shift subtly between shades (#0a0a0f, #0c0c14, #111118). Subtle noise texture or grain overlay on the body gives it materiality. The page should feel like it has physical depth, not like a flat dark rectangle.

2. **Typography that commands.** Choose TWO fonts — a display font for headlines and a body font for everything else.
   - Display: Something with character. NOT Inter, NOT Roboto, NOT Space Grotesk. Consider: "Satoshi" (geometric, clean, modern), "General Sans" (confident, slightly industrial), "Cabinet Grotesk" (distinctive, editorial), "Clash Display" (bold, unique). Pick ONE.
   - Body: Something highly readable at small sizes. Consider: "Switzer", "Synonym", "Satoshi" at lighter weights, or "Plus Jakarta Sans". Pick ONE.
   - Self-host the fonts (download from fontsource.org or similar). Do NOT use Google Fonts CDN.
   - Headlines should be LARGE. The h1 should feel like it owns the viewport — 48-64px on desktop, 32-40px on mobile. Letter-spacing: slightly tight (-0.02em to -0.03em). This creates the "premium" feel.

3. **Color with restraint.** One accent color. ONE. Not a gradient palette. The accent appears on: primary CTA buttons, checkmarks in the comparison table, stat numbers, outcome tags, and active FAQ items. Everything else is white, gray, and the dark background shades.
   - Primary accent: a warm green that feels alive, not neon. Try #4ade80 (Tailwind green-400) or #34d399 (emerald-400). Or go warmer: #a3e635 (lime-400) for something more distinctive.
   - Secondary tint: the accent color at 10% opacity, used for: kubmin column background in comparison table, hover states, subtle card borders.
   - NEVER use purple, blue, or gradient backgrounds. Those are the #1 AI slop indicator.

4. **Spacing that breathes.** Sections should have 120-160px of vertical padding on desktop (80-96px on mobile). Between elements within a section, use 32-48px. The page should feel spacious, not cramped. Generous whitespace signals confidence. When in doubt, add more space, not less.

5. **Borders and cards done right.** Cards don't have solid borders. They have:
   - A 1px border in rgba(255,255,255,0.06) — barely visible, just enough to define the edge
   - A subtle background shift (slightly lighter than the section background)
   - On hover: border brightens to rgba(255,255,255,0.12) with a smooth 200ms transition
   - Optional: a faint top-border gradient glow (like Linear's cards) — a 1px top border that fades from accent-color to transparent across the width. This is the signature "premium" touch.

6. **Motion with purpose.** Astro ships zero JS by default, so most animation is CSS-only:
   - Sections fade-in + translate-up (20px) on scroll using CSS `@keyframes` + `animation` with `IntersectionObserver` in a tiny `<script>` tag (this is the ONE piece of JS allowed besides FAQ)
   - Stat numbers in Section 3 can have a subtle countup animation (CSS or tiny JS)
   - Hover states on cards: border glow + slight translateY(-2px)
   - Hero text: staggered fade-in on load (pure CSS animation-delay)
   - NOTHING bounces, wiggles, or pulses. Every animation is smooth, subtle, and directional.

7. **Grid-breaking moments.** Not every section should be a centered container:
   - The product screenshot in Section 3 should break out of the content width — go wider than the max-width container, maybe 110% width with a subtle fade at the edges. This creates a "wow" moment.
   - The insight callout in Section 3 can be slightly offset from center — shifted left with a thick accent left-border.
   - The "Why Energy" section (Section 5) is narrower (800px max) to feel editorial — like reading a well-crafted blog post amid the wider product sections.

8. **Icons that feel custom.** Do NOT use an icon library. Create 6-7 simple inline SVGs:
   - Problem cards: 3 icons (eye/visibility, server/provision, deploy/arrow)
   - Feature cards: 4 icons (search/detect, terminal/command, compare/diff, globe/region)
   - Step numbers: styled as outlined circles with numbers inside
   - These should be monoline, 24x24, stroke-width 1.5-2, using currentColor. Think Lucide style but hand-drawn for this project.

9. **The screenshot treatment.** Product screenshots should NOT just be `<img>` tags dropped in. They need:
   - A subtle browser chrome frame (dark, minimal — just the three dots and a URL bar with "kubmin.ksctl.com")
   - Rounded corners (8-12px)
   - A box shadow that creates depth: `0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)`
   - Optional: a very faint reflection/glow beneath the screenshot (radial gradient, accent color at 3-5% opacity)

10. **The comparison table is a design moment.** This isn't a boring HTML table. It's a visual statement:
    - Alternating row backgrounds with barely-there stripes
    - The kubmin column has a persistent subtle accent glow (background + top header highlight)
    - ✓ marks are the accent color, ✗ marks are rgba(255,255,255,0.2)
    - On mobile, this converts to stacked cards (NOT a horizontally scrollable table)

---

## ASTRO-SPECIFIC INSTRUCTIONS

### Project Structure
```
src/
├── pages/
│   └── product/
│       └── kubmin.astro                ← page composition
├── components/
│   └── kubmin/                         ← ALL new components go here
│       ├── HeroKubmin.astro
│       ├── ProblemStatement.astro
│       ├── ProductDemo.astro
│       ├── CoreFeatures.astro
│       ├── WhyEnergy.astro
│       ├── HowItWorks.astro
│       ├── ComparisonTable.astro
│       ├── Pricing.astro
│       ├── TrustSignals.astro
│       ├── FAQ.astro
│       └── FinalCTA.astro
├── styles/
│   └── kubmin.css                      ← page-specific styles + CSS variables
└── layouts/
    └── Layout.astro                    ← existing layout wrapper
```

### CSS Architecture
Create `src/styles/kubmin.css` with CSS custom properties:

```css
:root {
  /* Background layers (darkest to lightest) */
  --bg-base: #09090b;
  --bg-raised: #0c0c14;
  --bg-surface: #111118;
  --bg-elevated: #18181f;

  /* Text hierarchy */
  --text-primary: #f0f0f3;
  --text-secondary: #8b8b9e;
  --text-tertiary: #5a5a6e;

  /* Accent — CHOOSE ONE, do not use multiple accent colors */
  --accent: #4ade80;          /* adjust this to your chosen green */
  --accent-muted: rgba(74, 222, 128, 0.1);
  --accent-border: rgba(74, 222, 128, 0.3);

  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-hover: rgba(255, 255, 255, 0.12);

  /* Spacing scale */
  --section-padding: 160px;
  --section-padding-mobile: 80px;
  --content-gap: 48px;
  --card-gap: 24px;

  /* Typography */
  --font-display: 'YOUR_DISPLAY_FONT', sans-serif;
  --font-body: 'YOUR_BODY_FONT', sans-serif;

  /* Layout */
  --max-width: 1200px;
  --max-width-narrow: 800px;
}
```

### Astro Best Practices for This Page
- Each component is a `.astro` file — NO React, NO Vue, NO client-side frameworks
- Use `<style>` blocks inside each component for scoped styles
- Use `class:list` for conditional classes
- Use `<Fragment>` to avoid unnecessary wrapper divs
- Import the kubmin.css in the page layout for global variables
- For the FAQ accordion, use `<details>` + `<summary>` (native HTML, zero JS)
- For scroll-triggered animations, use ONE tiny `<script>` at the page level:

```html
<script>
  // Intersection Observer for scroll-reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
</script>
```

- Pair this with CSS:
```css
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

### Font Loading
Self-host fonts. Download WOFF2 files and place in `public/fonts/`:

```css
@font-face {
  font-family: 'YourDisplayFont';
  src: url('/fonts/display-bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: 'YourBodyFont';
  src: url('/fonts/body-regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'YourBodyFont';
  src: url('/fonts/body-medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}
```

---

## WHAT TO BUILD

Build ALL 11 sections as described in the implementation spec document (attached separately as `kubmin-implementation-spec.md`). That document contains:

- Exact copy for every section (headlines, body text, CTAs, stats)
- ASCII wireframes for desktop and mobile layouts
- Behavioral rules for each component
- Link targets
- Validation checklist

**CRITICAL: Use the EXACT copy from the implementation spec. Do not rewrite any headlines, body text, or CTAs. The copy has been carefully written and approved. Your job is design and code, not copywriting.**

---

## DESIGN REFERENCE SITES

Study these before building. Note their restraint, typography, and spatial composition:

- **linear.app** — Dark theme, bold typography, subtle card glows, product screenshots with depth
- **vercel.com** — Color-shifting backgrounds, clean hierarchy, grid-breaking hero visuals
- **raycast.com** — Accent color discipline, keyboard-first UX reflected in design
- **stripe.com** — Editorial quality copy layout, section depth variation, gradient restraint
- **planetscale.com** — Technical product, dark theme, data-forward design

These are for VISUAL INSPIRATION only. Do not copy their layouts.

---

## ANTI-PATTERNS — THINGS THAT WILL MAKE IT LOOK AI-GENERATED

Reject ALL of the following:

1. ❌ Purple or blue gradient backgrounds
2. ❌ Inter, Roboto, Arial, or any system font as display font
3. ❌ Gradient text on the h1 headline (one small gradient accent elsewhere is fine)
4. ❌ Decorative abstract SVG illustrations (circles, blobs, waves)
5. ❌ Cards with uniform rounded corners (16px+) and solid borders
6. ❌ Evenly-spaced icon + title + text cards with no visual variation
7. ❌ "Hero image" that's a generic mockup or illustration instead of real product
8. ❌ Background patterns that are purely decorative (dots, grids) with no purpose
9. ❌ Multiple accent colors or rainbow gradient elements
10. ❌ Excessive bold text or ALL CAPS on body copy
11. ❌ Padding that's too tight (< 80px between sections on desktop)
12. ❌ Cookie-cutter pricing cards that look like every other SaaS pricing page
13. ❌ Chatbot widgets, floating CTAs, or modal popups
14. ❌ Animations that bounce, pulse, or feel "playful" — everything is smooth and directional

---

## QUALITY GATES

Before considering the page complete, verify:

### Design Quality
```
[ ] The page looks like it was designed by the team behind linear.app
[ ] Typography has clear hierarchy (h1 > h2 > body > caption) with intentional sizing
[ ] One accent color used consistently — no secondary colors
[ ] Cards have subtle glass-like borders, not solid colored borders
[ ] Screenshots have browser chrome frames and depth shadows
[ ] Section backgrounds have subtle variation (not all the same shade)
[ ] The comparison table kubmin column has accent highlighting
[ ] Spacing feels generous and intentional
[ ] Mobile layout is not just "stacked desktop" — it's thoughtfully adapted
[ ] No element looks like it was placed by default — every element has been considered
```

### Technical Quality
```
[ ] Zero client-side JS except IntersectionObserver script and FAQ details/summary
[ ] All fonts self-hosted (no CDN calls to Google Fonts)
[ ] All images have loading="lazy" and descriptive alt text
[ ] Page has exactly ONE h1, all section headings are h2
[ ] Lighthouse Performance: 95+
[ ] Lighthouse Accessibility: 95+
[ ] All external links: target="_blank" rel="noopener"
[ ] CSS custom properties used for all colors, spacing, fonts
[ ] Page works at 320px, 768px, 1024px, 1440px
```

### Content Accuracy
```
[ ] ALL copy matches the implementation spec EXACTLY (no AI rewrites)
[ ] All links point to correct URLs (check kubmin.ksctl.com, discord, GSF, Kepler, GitHub)
[ ] Redis stats are accurate: 63% CPU gap, 31% energy gap, $0.11 vs $0.18, 31% SEE gap
[ ] FAQ Q2 includes the blog post link
[ ] "Currently, clusters are created via ksctl" note is visible in How It Works
[ ] Pricing tiers match exactly: $0, $19.99, $49.99
```

---

## IMPLEMENTATION ORDER

Build components in this sequence:

```
1.  kubmin.css           — CSS variables, font faces, global styles, animation classes
2.  HeroKubmin.astro     — Sets the entire page tone — get this right first
3.  ProblemStatement.astro
4.  ProductDemo.astro    — The hero screenshot moment
5.  CoreFeatures.astro
6.  WhyEnergy.astro      — Narrower editorial section
7.  HowItWorks.astro
8.  ComparisonTable.astro — Table on desktop, cards on mobile
9.  Pricing.astro
10. TrustSignals.astro
11. FAQ.astro            — Pure HTML details/summary accordion
12. FinalCTA.astro
13. kubmin.astro page    — Wire everything together
```

Build each component fully before moving to the next. Do not stub components.

---

## ATTACHED FILES

The following files should be provided alongside this prompt:

1. **kubmin-implementation-spec.md** — Contains ALL section copy, wireframes, behavioral rules, and validation checklist
2. **multi-version-comparison.png** — Screenshot 1 (bar chart comparison of Redis versions)
3. **version-table.png** — Screenshot 2 (version table with CPU, SEE, SCI, cost)
4. **Existing Layout.astro** — The current layout wrapper for consistent page structure
5. **Existing global.css** — Current global styles (Tailwind config)

---

## FINAL INSTRUCTION

Take your time. Read the implementation spec fully before writing any code. Design each section as if it were the only thing on the page. The quality bar is: would a senior designer at Linear or Vercel approve this? If the answer is "maybe" — iterate until it's "yes."
