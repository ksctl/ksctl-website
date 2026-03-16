# Kubmin Product Page — Implementation Spec
## AI-Ready Build Guide (Model-Agnostic)

> **Who this is for:** Any AI coding assistant (Gemini, Claude, GPT, Copilot, etc.)
> building the kubmin product page in an existing Astro project.
>
> **What this contains:** Exact copy, exact component structure, ASCII wireframes
> for every section, behavioral specs, responsive rules, and link targets.
> Nothing is left to interpretation.

---

## GLOBAL RULES

```
Framework:        Astro (static site generator)
Styling:          Tailwind CSS
Theme:            Dark mode ONLY (no light mode, no toggle)
Client-side JS:   ZERO on this page (except FAQ accordion — pure CSS/HTML if possible)
Page path:        /product/kubmin
Layout:           Uses existing Layout.astro wrapper
Images:           Static files in /public/kubmin/ directory
Links:            All external links open in new tab (target="_blank" rel="noopener")
```

### Link Targets (use these exact URLs)
```
PRIMARY CTA:      https://kubmin.ksctl.com
DISCORD:          https://discord.ksctl.com
KEPLER:           https://sustainable-computing.io/
GSF:              https://sci.greensoftware.foundation/
KSCTL GITHUB:     https://github.com/ksctl
BLOG POST:        https://dipankar-das.com/blog/kubelet-config-rabbit-hole-sizing-kubernetes-nodes/
```

### Scroll Behavior
```
"See how it works ↓" button → smooth scrolls to Section 6 (id="how-it-works")
```

---

## PAGE COMPOSITION

```astro
---
import Layout from "../../layouts/Layout.astro";
import "../../styles/global.css";

// Import all section components
import HeroKubmin from "../../components/kubmin/HeroKubmin.astro";
import ProblemStatement from "../../components/kubmin/ProblemStatement.astro";
import ProductDemo from "../../components/kubmin/ProductDemo.astro";
import CoreFeatures from "../../components/kubmin/CoreFeatures.astro";
import WhyEnergy from "../../components/kubmin/WhyEnergy.astro";
import HowItWorks from "../../components/kubmin/HowItWorks.astro";
import ComparisonTable from "../../components/kubmin/ComparisonTable.astro";
import Pricing from "../../components/kubmin/Pricing.astro";
import TrustSignals from "../../components/kubmin/TrustSignals.astro";
import FAQ from "../../components/kubmin/FAQ.astro";
import FinalCTA from "../../components/kubmin/FinalCTA.astro";
---

<Layout title="Kubmin — Track What Each Deploy Costs in Money and Efficiency">
  <meta
    slot="head"
    name="description"
    content="Kubmin reveals per-workload cost, energy consumption, and SCI scores across your Kubernetes clusters. Detect idle resources, compare deployments, and get actionable fixes. Free tier available."
  />
  <main>
    <HeroKubmin />
    <ProblemStatement />
    <ProductDemo />
    <CoreFeatures />
    <WhyEnergy />
    <HowItWorks />
    <ComparisonTable />
    <Pricing />
    <TrustSignals />
    <FAQ />
    <FinalCTA />
  </main>
</Layout>
```

---

## SECTION 1: HERO

### Component: `HeroKubmin.astro`

### ASCII Layout — Desktop (≥1024px)
```
┌──────────────────────────────────────────────────────────────────────┐
│ max-width: 1200px, centered, padding-top: 120px, padding-bottom: 80px│
│                                                                      │
│  ┌─LEFT 60%──────────────────────┐  ┌─RIGHT 40%──────────────────┐  │
│  │                               │  │                            │  │
│  │  [Beta — Free to Start]       │  │   ┌──────────────────────┐ │  │
│  │   ^ small pill badge, muted   │  │   │                      │ │  │
│  │                               │  │   │  Dashboard screenshot │ │  │
│  │  Ship fast. But know what     │  │   │  (version table view) │ │  │
│  │  each deploy costs in money   │  │   │  /kubmin/workload-    │ │  │
│  │  and efficiency.              │  │   │  compare-image.png    │ │  │
│  │   ^ h1, largest text          │  │   │  or version table     │ │  │
│  │                               │  │   │                      │ │  │
│  │  Everyone's shipping faster    │  │   └──────────────────────┘ │  │
│  │  with AI. Nobody's checking   │  │                            │  │
│  │  what that speed costs in     │  └────────────────────────────┘  │
│  │  resources and money.         │                                  │
│  │  Kubmin does.                 │                                  │
│  │   ^ punch line, medium text   │                                  │
│  │                               │                                  │
│  │  Per-workload efficiency      │                                  │
│  │  tracking across deployments, │                                  │
│  │  automated waste detection,   │                                  │
│  │  and ready-to-use kubectl     │                                  │
│  │  fixes. The layer between     │                                  │
│  │  your workloads and your      │                                  │
│  │  cloud bill that's been       │                                  │
│  │  missing.                     │                                  │
│  │   ^ explain, smallest text    │                                  │
│  │                               │                                  │
│  │  [Start Free →]  See how ↓   │                                  │
│  │   ^ solid btn    ^ text link  │                                  │
│  │                               │                                  │
│  │  Built on Kepler (CNCF) ·     │                                  │
│  │  SCI-aligned (GSF) ·          │                                  │
│  │  Powered by ksctl             │                                  │
│  │   ^ tiny muted proof line     │                                  │
│  │                               │                                  │
│  └───────────────────────────────┘                                  │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### ASCII Layout — Mobile (<768px)
```
┌────────────────────────────────┐
│  padding: 80px 16px 48px       │
│                                │
│  [Beta — Free to Start]        │
│                                │
│  Ship fast. But know what      │
│  each deploy costs in money    │
│  and efficiency.               │
│                                │
│  Everyone's shipping faster    │
│  with AI. Nobody's checking   │
│  what that speed costs in     │
│  resources and money.         │
│  Kubmin does.                 │
│                                │
│  Per-workload efficiency...    │
│  ...cloud bill that's been     │
│  missing.                      │
│                                │
│  [Start Free →]               │
│  See how it works ↓           │
│                                │
│  Built on Kepler · GSF · ksctl│
│                                │
│  ┌──────────────────────────┐ │
│  │  Dashboard screenshot     │ │
│  │  (full width)             │ │
│  └──────────────────────────┘ │
│                                │
└────────────────────────────────┘
```

### Content (exact copy — do NOT rewrite)
```
BADGE:    "Beta — Free to Start"
H1:       "Ship fast. But know what each deploy costs in money and efficiency."
PUNCH:    "Everyone's shipping faster with AI. Nobody's checking what that speed costs in resources and money. Kubmin does."
EXPLAIN:  "Per-workload efficiency tracking across deployments, automated waste detection, and ready-to-use kubectl fixes. The layer between your workloads and your cloud bill that's been missing."
CTA1:     "Start Free →"          → https://kubmin.ksctl.com
CTA2:     "See how it works ↓"    → #how-it-works (smooth scroll)
PROOF:    "Built on Kepler (CNCF) · SCI-aligned (Green Software Foundation) · Powered by ksctl"
IMAGE:    Optional — deployment comparison screenshot from /public/kubmin/
```

### Behavioral Rules
- H1 must be an actual `<h1>` tag (only one per page)
- Badge is a `<span>` with pill styling, NOT a heading
- Punch text must be visually distinct from Explain text (different size OR color)
- CTA1 is a `<a>` styled as a solid button
- CTA2 is a `<a>` styled as plain text with underline or arrow
- Proof line items are separated by ` · ` (middle dot with spaces)
- Screenshot is `loading="lazy"` and has proper `alt` text
- No `<br>` tags — use paragraph elements for text separation

---

## SECTION 2: PROBLEM STATEMENT

### Component: `ProblemStatement.astro`

### ASCII Layout — Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  max-width: 1200px, centered, padding: 96px 0                       │
│                                                                      │
│  The Problem                                                         │
│   ^ small label, muted, uppercase or small-caps                     │
│                                                                      │
│  You're spending thousands on Kubernetes. But do you                 │
│  know what each workload actually costs?                             │
│   ^ h2, centered                                                    │
│                                                                      │
│  ┌──CARD 1───────┐  ┌──CARD 2───────┐  ┌──CARD 3───────┐          │
│  │ [icon]        │  │ [icon]        │  │ [icon]        │          │
│  │               │  │               │  │               │          │
│  │ No Per-       │  │ Overprovisioned│  │ Deploys Make  │          │
│  │ Container     │  │ and Flying    │  │ It Worse      │          │
│  │ Visibility    │  │ Blind         │  │ (Silently)    │          │
│  │               │  │               │  │               │          │
│  │ AWS Cost      │  │ Most teams    │  │ You ship a    │          │
│  │ Explorer...   │  │ request 2-4x..│  │ new image...  │          │
│  │               │  │               │  │               │          │
│  └───────────────┘  └───────────────┘  └───────────────┘          │
│   ^ 3-column grid, equal width, gap: 24px                          │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### ASCII Layout — Mobile
```
┌────────────────────────────────┐
│                                │
│  The Problem                   │
│                                │
│  You're spending thousands...  │
│                                │
│  ┌──CARD 1──────────────────┐ │
│  │ [icon] No Per-Container  │ │
│  │ Visibility               │ │
│  │ AWS Cost Explorer...     │ │
│  └──────────────────────────┘ │
│                                │
│  ┌──CARD 2──────────────────┐ │
│  │ [icon] Overprovisioned   │ │
│  │ and Flying Blind         │ │
│  │ Most teams request...    │ │
│  └──────────────────────────┘ │
│                                │
│  ┌──CARD 3──────────────────┐ │
│  │ [icon] Deploys Make It   │ │
│  │ Worse (Silently)         │ │
│  │ You ship a new image...  │ │
│  └──────────────────────────┘ │
│                                │
└────────────────────────────────┘
```

### Content (exact copy)
```
LABEL:    "The Problem"
H2:       "You're spending thousands on Kubernetes. But do you know what each workload actually costs?"

CARD1_TITLE: "No Per-Container Visibility"
CARD1_BODY:  "AWS Cost Explorer shows you EC2 bills. Kubecost estimates pod costs. Neither tells you what a single container actually consumes in energy and compute — the real drivers of your bill."

CARD2_TITLE: "Overprovisioned and Flying Blind"
CARD2_BODY:  "Most teams request 2-4x the resources their workloads actually use. Without per-workload waste detection, you're paying for idle CPU and memory every hour of every day."

CARD3_TITLE: "Deploys Make It Worse (Silently)"
CARD3_BODY:  "You ship a new image version — maybe AI-generated, maybe hand-written. CPU goes up 15%. Memory creeps up. Nobody notices because no tool tracks efficiency changes between deployments. The waste compounds with every release."
```

### Behavioral Rules
- Cards are `<div>` not `<article>` (they're not standalone content)
- Icons are inline SVGs (no icon library imports)
- No "learn more" links on cards
- Cards have equal height on desktop (use flexbox or grid)
- Section label is NOT a heading — use `<span>` or `<p>`

---

## SECTION 3: PRODUCT DEMO

### Component: `ProductDemo.astro`

### ASCII Layout — Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  max-width: 1200px, centered, padding: 96px 0                       │
│                                                                      │
│  See It In Action                                                    │
│   ^ small label                                                     │
│                                                                      │
│  Three Redis versions. Same workload. Wildly different efficiency.  │
│   ^ h2                                                              │
│                                                                      │
│  We ran redis-benchmark across versions 8.6.1, 8.4.0, and 8.2.1.   │
│  Here's what kubmin found — no other tool surfaces this.            │
│   ^ sub-headline                                                    │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │                                                                │ │
│  │              SCREENSHOT: Multi-Version Comparison              │ │
│  │              /kubmin/multi-version-comparison.png              │ │
│  │              (the bar chart view with CPU, Memory,             │ │
│  │               Energy, SCI, SEE, Cost across 3 versions)       │ │
│  │                                                                │ │
│  └────────────────────────────────────────────────────────────────┘ │
│   ^ full-width image with subtle border/shadow, rounded corners     │
│                                                                      │
│  ┌──STAT 1───┐  ┌──STAT 2───┐  ┌──STAT 3───┐  ┌──STAT 4───┐     │
│  │ 63%       │  │ 31%       │  │ $0.11     │  │ 31%       │     │
│  │ more CPU  │  │ more      │  │ vs $0.18  │  │ more      │     │
│  │ 8.4.0 vs  │  │ energy    │  │ 8.6.1 vs  │  │ efficient │     │
│  │ 8.2.1     │  │ 8.4.0 vs  │  │ 8.4.0     │  │ 8.2.1 vs  │     │
│  │           │  │ 8.6.1     │  │           │  │ 8.4.0     │     │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘     │
│   ^ 4-column grid, each: large number on top, description below    │
│                                                                      │
│  ┌─INSIGHT CALLOUT──────────────────────────────────────────────┐  │
│  │ ▎ 8.4.0 uses 87.8% CPU but isn't the most expensive.        │  │
│  │ ▎ 8.2.1 uses 51.2% CPU but costs more. No single metric     │  │
│  │ ▎ tells the full story — you need cost, energy, and          │  │
│  │ ▎ efficiency together. That's what kubmin gives you.         │  │
│  └──────────────────────────────────────────────────────────────┘  │
│   ^ left-border accent bar, slightly different background           │
│                                                                      │
│  This is one workload. Imagine what kubmin finds across your        │
│  entire cluster.                                                     │
│   ^ caption, muted, centered                                        │
│                                                                      │
│  [Try It On Your Workloads →]                                       │
│   ^ CTA button, centered                                            │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### ASCII Layout — Mobile
```
┌────────────────────────────────┐
│  See It In Action              │
│                                │
│  Three Redis versions...       │
│                                │
│  We ran redis-benchmark...     │
│                                │
│  ┌──────────────────────────┐ │
│  │  SCREENSHOT              │ │
│  │  (horizontally scrollable│ │
│  │   if needed)             │ │
│  └──────────────────────────┘ │
│                                │
│  ┌──STAT 1──┐  ┌──STAT 2──┐  │
│  │ 63%      │  │ 31%      │  │
│  │ more CPU │  │ more     │  │
│  │ ...      │  │ energy   │  │
│  └──────────┘  └──────────┘  │
│                                │
│  ┌──STAT 3──┐  ┌──STAT 4──┐  │
│  │ $0.11    │  │ 31%      │  │
│  │ vs $0.18 │  │ more     │  │
│  │ ...      │  │ efficient│  │
│  └──────────┘  └──────────┘  │
│                                │
│  ┌─INSIGHT CALLOUT──────────┐ │
│  │ ▎ 8.4.0 uses 87.8%...   │ │
│  └──────────────────────────┘ │
│                                │
│  This is one workload...       │
│                                │
│  [Try It On Your Workloads →] │
│                                │
└────────────────────────────────┘
```

### Content (exact copy)
```
LABEL:      "See It In Action"
H2:         "Three Redis versions. Same workload. Wildly different efficiency."
SUB:        "We ran redis-benchmark across versions 8.6.1, 8.4.0, and 8.2.1. Here's what kubmin found — no other tool surfaces this."
IMAGE:      /kubmin/multi-version-comparison.png
IMAGE_ALT:  "Kubmin multi-version comparison showing CPU, memory, energy, SCI, SEE, and cost differences across Redis 8.6.1, 8.4.0, and 8.2.1"

STAT1_NUM:  "63%"
STAT1_DESC: "more CPU — 8.4.0 vs 8.2.1 (243m vs 149m)"

STAT2_NUM:  "31%"
STAT2_DESC: "more energy — 8.4.0 vs 8.6.1 (0.0085 vs 0.0064 kWh)"

STAT3_NUM:  "$0.11 vs $0.18"
STAT3_DESC: "cost gap — 8.6.1 vs 8.4.0 per tracked period"

STAT4_NUM:  "31%"
STAT4_DESC: "more efficient — 8.2.1 vs 8.4.0 on SEE score"

INSIGHT:    "8.4.0 uses 87.8% CPU but isn't the most expensive. 8.2.1 uses 51.2% CPU but costs more. No single metric tells the full story — you need cost, energy, and efficiency together. That's what kubmin gives you."

CAPTION:    "This is one workload. Imagine what kubmin finds across your entire cluster."

CTA:        "Try It On Your Workloads →" → https://kubmin.ksctl.com
```

### Behavioral Rules
- Screenshot must have `loading="lazy"` and descriptive `alt`
- Stat numbers are visually large (2-3x body text size)
- Stat descriptions are small muted text below the number
- Insight callout has a left border accent (3-4px solid, accent color)
- Stats are 4-col on desktop, 2x2 grid on mobile
- Image may overflow on small screens — use `overflow-x: auto` wrapper

---

## SECTION 4: CORE FEATURES

### Component: `CoreFeatures.astro`

### ASCII Layout — Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  max-width: 1200px, centered, padding: 96px 0                       │
│                                                                      │
│  What Kubmin Does                                                    │
│   ^ small label                                                     │
│                                                                      │
│  Four things no other Kubernetes tool does together                  │
│   ^ h2                                                              │
│                                                                      │
│  ┌──FEATURE 1────────────────┐  ┌──FEATURE 2────────────────┐      │
│  │                           │  │                           │      │
│  │  Find Idle &              │  │  kubectl Commands That    │      │
│  │  Overprovisioned          │  │  Save Money               │      │
│  │  Workloads                │  │                           │      │
│  │                           │  │  Every waste detection    │      │
│  │  Kubmin detects three     │  │  comes with a ready-to-   │      │
│  │  types of waste: idle     │  │  use kubectl command...   │      │
│  │  workloads burning...     │  │                           │      │
│  │                           │  │  "Fix waste in 30         │      │
│  │  "Know exactly what       │  │   seconds"                │      │
│  │   you're wasting"         │  │   ^ outcome tag           │      │
│  │   ^ outcome tag           │  │                           │      │
│  └───────────────────────────┘  └───────────────────────────┘      │
│                                                                      │
│  ┌──FEATURE 3────────────────┐  ┌──FEATURE 4────────────────┐      │
│  │                           │  │                           │      │
│  │  Compare Any Two          │  │  Same Workload,           │      │
│  │  Image Versions           │  │  Different Regions,       │      │
│  │                           │  │  Different Prices         │      │
│  │  Shipped a new release?   │  │                           │      │
│  │  Compare it against the   │  │  Running in us-east-1 by  │      │
│  │  previous version...      │  │  default? Kubmin compares │      │
│  │                           │  │  your workload's cost...  │      │
│  │  "Catch regressions       │  │                           │      │
│  │   before they compound"   │  │  "Find your cheapest      │      │
│  │   ^ outcome tag           │  │   region"                 │      │
│  └───────────────────────────┘  └───────────────────────────┘      │
│   ^ 2x2 grid, gap: 24px                                            │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### ASCII Layout — Mobile
```
┌────────────────────────────────┐
│  What Kubmin Does              │
│  Four things no other...       │
│                                │
│  ┌──FEATURE 1──────────────┐  │
│  │ Find Idle & Over...     │  │
│  │ Kubmin detects three... │  │
│  │ "Know exactly what..."  │  │
│  └─────────────────────────┘  │
│                                │
│  ┌──FEATURE 2──────────────┐  │
│  │ kubectl Commands...     │  │
│  │ ...                     │  │
│  └─────────────────────────┘  │
│                                │
│  ┌──FEATURE 3──────────────┐  │
│  │ Compare Any Two...      │  │
│  │ ...                     │  │
│  └─────────────────────────┘  │
│                                │
│  ┌──FEATURE 4──────────────┐  │
│  │ Same Workload...        │  │
│  │ ...                     │  │
│  └─────────────────────────┘  │
│                                │
└────────────────────────────────┘
```

### Content (exact copy)
```
LABEL:    "What Kubmin Does"
H2:       "Four things no other Kubernetes tool does together"

F1_TITLE:   "Find Idle & Overprovisioned Workloads"
F1_BODY:    "Kubmin detects three types of waste: idle workloads burning resources 24/7, overprovisioned containers using a fraction of their requests, and temporal patterns where waste spikes during off-hours. Each detection comes with dollar amounts attached."
F1_TAG:     "Know exactly what you're wasting"

F2_TITLE:   "kubectl Commands That Save Money"
F2_BODY:    "Every waste detection comes with a ready-to-use kubectl command. Scale down idle replicas, right-size resource requests, remove unused deployments — copy, paste, save. No guesswork."
F2_TAG:     "Fix waste in 30 seconds"

F3_TITLE:   "Compare Any Two Image Versions"
F3_BODY:    "Shipped a new release? Compare it against the previous version across cost, energy, CPU, memory, and SCI score. See exactly how your code change affected efficiency — before it hits your bill."
F3_TAG:     "Catch regressions before they compound"

F4_TITLE:   "Same Workload, Different Regions, Different Prices"
F4_BODY:    "Running in us-east-1 by default? Kubmin compares your workload's cost and carbon footprint across every available region. See exactly how much you'd save by moving — with the sustainability trade-offs laid out side by side."
F4_TAG:     "Find your cheapest region"
```

### Behavioral Rules
- 2x2 grid on desktop (≥1024px), single column on mobile
- Outcome tags are small text, accent colored, at bottom of each card
- Cards have equal height per row on desktop
- No links within cards
- Optional: pair each feature with a mini screenshot from existing dashboard images

---

## SECTION 5: WHY ENERGY

### Component: `WhyEnergy.astro`

### ASCII Layout — Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  max-width: 800px (narrower — editorial feel), centered              │
│  padding: 96px 0                                                     │
│                                                                      │
│  Why Energy Changes Everything                                       │
│   ^ small label                                                     │
│                                                                      │
│  CPU metrics lie. Energy doesn't.                                    │
│   ^ h2                                                              │
│                                                                      │
│  A workload can show 40% CPU utilization and still be wasting       │
│  energy. How? Polling loops, idle connections, inefficient memory    │
│  access patterns — they all consume power without producing value.  │
│  Traditional monitoring tools see "40% busy" and move on. Kubmin    │
│  sees the full picture — CPU usage alongside actual energy          │
│  consumption over time — so you can spot the workloads where high   │
│  utilization doesn't mean productive utilization.                    │
│   ^ body paragraph                                                  │
│                                                                      │
│  Kubmin uses Kepler — a CNCF project — to estimate energy           │
│  consumption at the container level...                               │
│                                                                      │
│  This energy data feeds into two key metrics:                        │
│  — SCI (Software Carbon Intensity): tracks the carbon cost...       │
│  — SEE (Software Energy Efficiency): catches pure efficiency...     │
│   ^ technical explanation                                           │
│                                                                      │
│  ┌─CALLOUT BOX─────────────────────────────────────────────────┐   │
│  │ ▎ Note on accuracy: In cloud environments, energy           │   │
│  │ ▎ measurements are estimates based on ML models trained     │   │
│  │ ▎ on real hardware data. They're highly reliable for        │   │
│  │ ▎ relative comparison and trend analysis — which is exactly │   │
│  │ ▎ what waste detection needs. The patterns matter more      │   │
│  │ ▎ than the absolute numbers.                                │   │
│  └─────────────────────────────────────────────────────────────┘   │
│   ^ left-border accent, muted background                           │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Content (exact copy)
```
LABEL:    "Why Energy Changes Everything"
H2:       "CPU metrics lie. Energy doesn't."

BODY:     "A workload can show 40% CPU utilization and still be wasting energy. How? Polling loops, idle connections, inefficient memory access patterns — they all consume power without producing value. Traditional monitoring tools see \"40% busy\" and move on. Kubmin sees the full picture — CPU usage alongside actual energy consumption over time — so you can spot the workloads where high utilization doesn't mean productive utilization."

TECH:     "Kubmin uses Kepler — a CNCF project — to estimate energy consumption at the container level. Kepler uses kernel-level instrumentation and ML-based models to attribute power usage per container, even in cloud environments where hardware counters aren't directly accessible.\n\nThis energy data feeds into two key metrics:\n— SCI (Software Carbon Intensity): tracks the carbon cost of your workloads, aligned with the Green Software Foundation specification.\n— SEE (Software Energy Efficiency): catches pure efficiency regressions that carbon intensity alone can mask.\n\nCombined with energy trend graphs over time, you get both the financial picture and the sustainability picture in one dashboard."

CALLOUT:  "Note on accuracy: In cloud environments, energy measurements are estimates based on ML models trained on real hardware data. They're highly reliable for relative comparison and trend analysis — which is exactly what waste detection needs. The patterns matter more than the absolute numbers."
```

### Behavioral Rules
- Narrower max-width than other sections (800px vs 1200px) for readability
- Callout box has left border accent and slightly different background
- SCI and SEE should be rendered with `—` em dash prefix, not bullet points
- This section has NO images, NO cards, NO grid — pure editorial text
- Mobile: same layout, just narrower padding

---

## SECTION 6: HOW IT WORKS

### Component: `HowItWorks.astro`
### HTML id: `id="how-it-works"` (scroll target from hero CTA)

### ASCII Layout — Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  max-width: 1200px, centered, padding: 96px 0                       │
│                                                                      │
│  Get Started                                                         │
│   ^ small label                                                     │
│                                                                      │
│  Three steps to see what you're wasting                              │
│   ^ h2                                                              │
│                                                                      │
│  ┌──(1)──────────────┐  ┌──(2)──────────────┐  ┌──(3)────────────┐│
│  │                   │  │                   │  │                  ││
│  │  ① Sign Up &      │  │  ② Label Your     │  │  ③ See Your     ││
│  │  Create a Cluster │  │  Workloads        │  │  Results         ││
│  │                   │  │                   │  │                  ││
│  │  Sign up at       │  │  Add one label    │  │  Kubmin          ││
│  │  kubmin.ksctl.com │  │  and one          │  │  aggregates data ││
│  │  and create your  │  │  annotation to    │  │  hourly and      ││
│  │  Kubernetes       │  │  the Deployments, │  │  surfaces waste  ││
│  │  cluster from     │  │  StatefulSets,    │  │  analysis...     ││
│  │  the dashboard... │  │  or DaemonSets... │  │                  ││
│  │                   │  │                   │  │                  ││
│  └───────────────────┘  └───────────────────┘  └──────────────────┘│
│   ^ 3-column grid, connected by line/arrow between circles          │
│                                                                      │
│                      [Start Free →]                                  │
│                       ^ centered CTA                                │
│                                                                      │
│  Currently, clusters are created via ksctl. Support for importing   │
│  existing clusters is coming soon.                                   │
│   ^ small muted note, centered                                      │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Content (exact copy)
```
LABEL:    "Get Started"
H2:       "Three steps to see what you're wasting"

STEP1_TITLE: "Sign Up & Create a Cluster"
STEP1_BODY:  "Sign up at kubmin.ksctl.com and create your Kubernetes cluster from the dashboard. Kubmin provisions the full monitoring stack automatically — Prometheus, Kepler, and the kubmin agent. You don't install anything manually.\n\nWorks with: EKS, AKS, GKE, K3s, Kubeadm — cloud managed and self-managed clusters via ksctl."

STEP2_TITLE: "Label Your Workloads"
STEP2_BODY:  "Add one label and one annotation to the Deployments, StatefulSets, or DaemonSets you want to monitor. The dashboard shows you exactly what to add. That's the only configuration you do."

STEP3_TITLE: "See Your Results"
STEP3_BODY:  "Kubmin aggregates data hourly and surfaces waste analysis, efficiency grades, cost breakdowns, and Quick Wins automatically. Open the dashboard and start saving."

CTA:        "Start Free →" → https://kubmin.ksctl.com

NOTE:       "Currently, clusters are created via ksctl. Support for importing existing clusters is coming soon."
```

### Behavioral Rules
- Must have `id="how-it-works"` on the section element
- Step numbers are prominent (large circled numbers or bold digits)
- Optional: horizontal connecting line between steps on desktop
- Mobile: vertical stack, numbers left-aligned
- Note below CTA is small, muted, and honest — do not hide it

---

## SECTION 7: COMPARISON TABLE

### Component: `ComparisonTable.astro`

### ASCII Layout — Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  max-width: 1200px, centered, padding: 96px 0                       │
│                                                                      │
│  The Gap                                                             │
│   ^ small label                                                     │
│                                                                      │
│  What your current tools can't tell you                              │
│   ^ h2                                                              │
│                                                                      │
│  ┌──────────────────┬──────────┬──────────┬──────────┬──────────┐  │
│  │ Capability       │ AWS Cost │ Kubecost │ Prom+    │ kubmin   │  │
│  │                  │ Explorer │          │ Grafana  │ ██████   │  │
│  ├──────────────────┼──────────┼──────────┼──────────┼──────────┤  │
│  │ Per-container    │ ✗ EC2    │ ✓ Est.   │ ✗ Manual │    ✓     │  │
│  │ cost tracking    │ only     │          │          │          │  │
│  ├──────────────────┼──────────┼──────────┼──────────┼──────────┤  │
│  │ Energy per       │    ✗     │    ✗     │    ✗     │    ✓     │  │
│  │ workload         │          │          │          │          │  │
│  ├──────────────────┼──────────┼──────────┼──────────┼──────────┤  │
│  │ Idle detection   │    ✗     │  Basic   │ ✗ Manual │  ✓ Auto  │  │
│  ├──────────────────┼──────────┼──────────┼──────────┼──────────┤  │
│  │ Deploy version   │    ✗     │    ✗     │    ✗     │    ✓     │  │
│  │ comparison       │          │          │          │          │  │
│  ├──────────────────┼──────────┼──────────┼──────────┼──────────┤  │
│  │ SCI + SEE        │    ✗     │    ✗     │    ✗     │    ✓     │  │
│  │ scoring          │          │          │          │          │  │
│  ├──────────────────┼──────────┼──────────┼──────────┼──────────┤  │
│  │ Regional cost    │ Partial  │    ✗     │    ✗     │    ✓     │  │
│  │ comparison       │          │          │          │          │  │
│  ├──────────────────┼──────────┼──────────┼──────────┼──────────┤  │
│  │ kubectl fixes    │    ✗     │    ✗     │    ✗     │    ✓     │  │
│  ├──────────────────┼──────────┼──────────┼──────────┼──────────┤  │
│  │ Instance type    │    ✗     │    ✗     │    ✗     │    ✓     │  │
│  │ optimization     │          │          │          │          │  │
│  ├──────────────────┼──────────┼──────────┼──────────┼──────────┤  │
│  │ Setup time       │   N/A    │  ~30 min │ Hrs/Days │  ~10 min │  │
│  └──────────────────┴──────────┴──────────┴──────────┴──────────┘  │
│   ^ kubmin column has subtle highlighted background                  │
│                                                                      │
│  Kubmin doesn't replace your monitoring stack. It sees what your    │
│  monitoring stack can't — the energy layer that drives real waste.  │
│   ^ caption below table                                             │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### ASCII Layout — Mobile
```
┌────────────────────────────────┐
│  The Gap                       │
│  What your current tools...    │
│                                │
│  ┌──CARD: Per-container cost─┐│
│  │ AWS Cost Explorer: ✗ EC2  ││
│  │ Kubecost: ✓ Estimated     ││
│  │ Prom+Grafana: ✗ Manual    ││
│  │ kubmin: ✓                 ││
│  └───────────────────────────┘│
│                                │
│  ┌──CARD: Energy per workload┐│
│  │ AWS: ✗  Kubecost: ✗      ││
│  │ Prom: ✗  kubmin: ✓       ││
│  └───────────────────────────┘│
│                                │
│  ... (one card per capability) │
│                                │
│  Kubmin doesn't replace...     │
│                                │
└────────────────────────────────┘
```

### Content (exact data for table)
```
LABEL:    "The Gap"
H2:       "What your current tools can't tell you"

TABLE_DATA (9 rows):
| Capability                  | AWS Cost Explorer | Kubecost | Prometheus + Grafana | kubmin   |
|-----------------------------|-------------------|----------|----------------------|----------|
| Per-container cost tracking | ✗ EC2 only        | ✓ Est.   | ✗ Manual             | ✓        |
| Energy consumption/workload | ✗                 | ✗        | ✗                    | ✓        |
| Idle workload detection     | ✗                 | Basic    | ✗ Manual             | ✓ Auto   |
| Deployment version compare  | ✗                 | ✗        | ✗                    | ✓        |
| SCI + SEE scoring           | ✗                 | ✗        | ✗                    | ✓        |
| Regional cost comparison    | Partial           | ✗        | ✗                    | ✓        |
| Ready-to-use kubectl fixes  | ✗                 | ✗        | ✗                    | ✓        |
| Instance type optimization  | ✗                 | ✗        | ✗                    | ✓        |
| Setup time                  | N/A               | ~30 min  | Hours/Days           | ~10 min  |

CAPTION:  "Kubmin doesn't replace your monitoring stack. It sees what your monitoring stack can't — the energy layer that drives real waste."
```

### Behavioral Rules
- Desktop: render as `<table>` element with proper `<thead>` and `<tbody>`
- kubmin column has a subtle accent background (entire column)
- ✓ marks are accent/green colored, ✗ marks are muted/gray
- Mobile (< 768px): convert table to stacked cards (one per capability row)
- Do NOT use a horizontally scrollable table on mobile — use cards instead

---

## SECTION 8: PRICING

### Component: `Pricing.astro`

### ASCII Layout — Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  max-width: 1200px, centered, padding: 96px 0                       │
│                                                                      │
│  Pricing                                                             │
│   ^ small label                                                     │
│                                                                      │
│  Start free. Scale when you need to.                                │
│   ^ h2                                                              │
│                                                                      │
│  Fixed monthly pricing. No per-node fees. No surprise bills.        │
│  All plans include auto-deployed Prometheus, Kepler, and Grafana.   │
│   ^ sub-headline                                                    │
│                                                                      │
│  ┌──EXPLORE────────┐  ┌──AFFORDABLE──────┐  ┌──PREMIUM──────────┐  │
│  │                 │  │ ★ Most Popular   │  │                   │  │
│  │  $0/mo          │  │                  │  │  $49.99/mo        │  │
│  │                 │  │  $19.99/mo       │  │                   │  │
│  │  • 1 cluster    │  │                  │  │  • 20 clusters    │  │
│  │  • 1 workload   │  │  • 5 clusters    │  │  • 20 workloads   │  │
│  │  • 1 member     │  │  • 5 workloads   │  │  • 50 members     │  │
│  │  • SCI (2d)     │  │  • 10 members    │  │  • Everything in  │  │
│  │  • Basic view   │  │  • Full waste    │  │    Affordable     │  │
│  │  • Community    │  │  • Instance opt. │  │  • Dedicated      │  │
│  │                 │  │  • Regional cost │  │    support        │  │
│  │ [Get Started    │  │  • Deploy compare│  │                   │  │
│  │  Free]          │  │  • Quick Wins    │  │ [Start Premium]   │  │
│  │                 │  │  • Regional comp.│  │                   │  │
│  └─────────────────┘  │  • Priority      │  └───────────────────┘  │
│                       │                  │                          │
│                       │ [Start           │                          │
│                       │  Affordable]     │                          │
│                       └──────────────────┘                          │
│   ^ Affordable card is visually elevated (border or scale)          │
│                                                                      │
│  No hidden fees · Cancel anytime · All plans include Prometheus     │
│  & Grafana                                                           │
│   ^ centered muted note                                             │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Content (exact copy)
```
LABEL:    "Pricing"
H2:       "Start free. Scale when you need to."
SUB:      "Fixed monthly pricing. No per-node fees. No surprise bills. All plans include auto-deployed Prometheus, Kepler, and Grafana."

TIER1_NAME:    "Explore"
TIER1_PRICE:   "$0/month"
TIER1_FEATURES: ["1 cluster", "1 workload", "1 team member", "SCI tracking (2-day retention)", "Basic workload overview", "Community support"]
TIER1_CTA:     "Get Started Free" → https://kubmin.ksctl.com

TIER2_NAME:    "Affordable"
TIER2_BADGE:   "Most Popular"
TIER2_PRICE:   "$19.99/month"
TIER2_FEATURES: ["5 clusters", "5 workloads", "10 team members", "Full waste analysis + SCI tracking", "Instance optimization", "Regional cost comparison", "Deployment comparison", "Quick Wins with kubectl commands", "Regional cost comparison", "Priority support"]
TIER2_CTA:     "Start Affordable" → https://kubmin.ksctl.com

TIER3_NAME:    "Premium"
TIER3_PRICE:   "$49.99/month"
TIER3_FEATURES: ["20 clusters", "20 workloads", "50 team members", "Everything in Affordable", "Dedicated support"]
TIER3_CTA:     "Start Premium" → https://kubmin.ksctl.com

NOTE:     "No hidden fees · Cancel anytime · All plans include Prometheus & Grafana"
```

### Behavioral Rules
- 3-column grid on desktop, stacked on mobile
- Affordable tier (middle) has visual emphasis: highlighted border or slight scale
- "Most Popular" badge on Affordable tier
- Feature lists use `<ul>` with `<li>` items
- All CTA buttons link to same URL (kubmin.ksctl.com)
- Price is the largest text in each card

---

## SECTION 9: TRUST SIGNALS

### Component: `TrustSignals.astro`

### ASCII Layout — Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  max-width: 1200px, centered, padding: 48px 0 (thin section)        │
│                                                                      │
│  Built on Proven Foundations                                         │
│   ^ small label, centered                                           │
│                                                                      │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐          │
│  │ [Kepler logo]│    │ [GSF logo]   │    │ [ksctl logo] │          │
│  │  CNCF Project│    │ Green SW     │    │ Open Source   │          │
│  │  Energy via  │    │ Foundation   │    │ Cluster mgmt  │          │
│  │  Kepler      │    │ SCI-aligned  │    │ on GitHub     │          │
│  └──────────────┘    └──────────────┘    └──────────────┘          │
│   ^ 3-column, inline, logos are small (32-48px height)              │
│   ^ each logo links to respective project                           │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Content (exact copy)
```
LABEL:    "Built on Proven Foundations"

TRUST1_LOGO:  Kepler logo (or text "Kepler" if logo unavailable)
TRUST1_TITLE: "CNCF Project"
TRUST1_DESC:  "Energy measurement powered by Kepler — kernel-level container energy attribution"
TRUST1_LINK:  https://sustainable-computing.io/

TRUST2_LOGO:  GSF logo (or text "GSF" if logo unavailable)
TRUST2_TITLE: "Green Software Foundation"
TRUST2_DESC:  "SCI-aligned sustainability scoring built on the GSF specification"
TRUST2_LINK:  https://sci.greensoftware.foundation/

TRUST3_LOGO:  ksctl logo (/ksctl-logo.svg — already in project)
TRUST3_TITLE: "Open Source"
TRUST3_DESC:  "Cluster management powered by ksctl — fully open source on GitHub"
TRUST3_LINK:  https://github.com/ksctl
```

### Behavioral Rules
- This is a THIN section — max 120px total height plus padding
- Logos are small (32-48px height), muted/grayscale
- Each logo+text group is an `<a>` linking to the project
- 3-column inline on desktop, stacked on mobile
- No cards, no borders — just logos and text inline

---

## SECTION 10: FAQ

### Component: `FAQ.astro`

### ASCII Layout — Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  max-width: 800px (narrower), centered, padding: 96px 0             │
│                                                                      │
│  Frequently Asked Questions                                          │
│   ^ h2                                                              │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │ ▸ What is kubmin?                                               ││
│  ├─────────────────────────────────────────────────────────────────┤│
│  │ ▸ How much money can kubmin save me?                            ││
│  ├─────────────────────────────────────────────────────────────────┤│
│  │ ▸ What are the alternatives to kubmin?                          ││
│  ├─────────────────────────────────────────────────────────────────┤│
│  │ ▸ Do I need to change my deployment workflow?                   ││
│  ├─────────────────────────────────────────────────────────────────┤│
│  │ ▸ How accurate are the energy measurements?                     ││
│  ├─────────────────────────────────────────────────────────────────┤│
│  │ ▸ What clusters does kubmin support?                            ││
│  └─────────────────────────────────────────────────────────────────┘│
│   ^ accordion — click question to expand answer below it            │
│   ^ all collapsed by default                                        │
│                                                                      │
│   EXPANDED STATE EXAMPLE:                                            │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │ ▾ What is kubmin?                                               ││
│  │                                                                 ││
│  │   Kubmin is a Kubernetes cost and energy optimization           ││
│  │   platform. It uses energy-powered analysis via Kepler          ││
│  │   to find idle workloads, overprovisioned resources, and        ││
│  │   inefficient deployments — waste that traditional monitoring   ││
│  │   misses. It also tracks SCI scores for sustainability          ││
│  │   reporting.                                                    ││
│  │                                                                 ││
│  ├─────────────────────────────────────────────────────────────────┤│
│  │ ▸ How much money can kubmin save me?                            ││
│  └─────────────────────────────────────────────────────────────────┘│
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Content (exact copy — 6 questions)
```
Q1: "What is kubmin?"
A1: "Kubmin is a Kubernetes cost and energy optimization platform. It uses energy-powered analysis via Kepler to find idle workloads, overprovisioned resources, and inefficient deployments — waste that traditional monitoring misses. It also tracks SCI scores for sustainability reporting."

Q2: "How much money can kubmin save me?"
A2: "There are two layers of savings:\n\nDirect waste: Kubmin detects idle workloads, overprovisioned resources, and suboptimal instance types — each with dollar amounts and ready-to-use kubectl commands to fix them. Typical findings range from $50-500/month per cluster.\n\nIndirect efficiency gains: When you right-size inefficient workloads, they consume less CPU and memory on the node. This reduces pressure on the cluster autoscaler and frees resources for other workloads — meaning you may not need that extra node at all. Understanding how Kubernetes node sizing and kubelet configuration affect scheduling is key to unlocking these savings.\n\nRead more: https://dipankar-das.com/blog/kubelet-config-rabbit-hole-sizing-kubernetes-nodes/"

Q3: "What are the alternatives to kubmin?"
A3: "The short answer: there isn't a direct alternative that does what kubmin does.\n\nKubecost tracks pod-level cost allocation based on resource requests — it's a FinOps tool, not an efficiency tool. Prometheus + Grafana gives you raw metrics but requires manual setup for any waste detection or version comparison. AWS Cost Explorer operates at the EC2 level and has no visibility into individual containers.\n\nNone of these tools track per-workload energy consumption, compare efficiency across deployment versions, or provide SCI/SEE sustainability scores. Kubmin was built specifically because this gap existed."

Q4: "Do I need to change my deployment workflow?"
A4: "No. Add one label and one annotation to the workloads you want to monitor. That's it. Kubmin works alongside your existing CI/CD pipeline. The full monitoring stack (Prometheus, Kepler, Grafana) is deployed automatically."

Q5: "How accurate are the energy measurements?"
A5: "Kubmin uses Kepler, which employs ML-based estimation models trained on real hardware data. In cloud environments, energy readings are estimates — but they're highly reliable for trend analysis and relative comparison between workloads, which is exactly what waste detection requires. The patterns matter more than absolute numbers."

Q6: "What clusters does kubmin support?"
A6: "Kubmin works with clusters created via ksctl — including EKS, AKS, GKE, K3s, and Kubeadm (both cloud-managed and self-managed). Support for importing existing clusters not created by ksctl is in active development."
```

### Behavioral Rules
- PREFER pure HTML/CSS accordion (`<details>` + `<summary>`) over JavaScript
- All items collapsed by default
- Only ONE item open at a time (use name attribute on details if supported, else JS)
- ▸ arrow rotates to ▾ on expand
- Narrower max-width (800px) for readability
- "Read more" link in Q2 answer opens in new tab
- Border between questions, no background colors on answers

---

## SECTION 11: FINAL CTA

### Component: `FinalCTA.astro`

### ASCII Layout — Desktop + Mobile (same layout)
```
┌──────────────────────────────────────────────────────────────────────┐
│  full-width section, padding: 96px 0                                 │
│  text-align: center                                                  │
│                                                                      │
│  Every hour you wait, your clusters keep wasting.                    │
│   ^ h2                                                              │
│                                                                      │
│  Sign up free. Connect a cluster. See your waste in minutes.        │
│   ^ sub-headline                                                    │
│                                                                      │
│                      [Start Free →]                                  │
│                       ^ primary CTA button                          │
│                                                                      │
│                Questions? Join our Discord →                         │
│                 ^ small muted text link                              │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Content (exact copy)
```
H2:         "Every hour you wait, your clusters keep wasting."
SUB:        "Sign up free. Connect a cluster. See your waste in minutes."
CTA:        "Start Free →" → https://kubmin.ksctl.com
SECONDARY:  "Questions? Join our Discord →" → https://discord.ksctl.com
```

### Behavioral Rules
- Full-width dark section (may have slightly different bg than page)
- All text centered
- Primary CTA is large and prominent
- Discord link is small, muted, below the CTA
- Generous vertical padding (96px+ top and bottom)

---

## FILE STRUCTURE

```
src/
├── pages/
│   └── product/
│       └── kubmin.astro              ← page composition (see above)
├── components/
│   └── kubmin/                       ← NEW directory for kubmin components
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
public/
└── kubmin/
    ├── multi-version-comparison.png  ← Screenshot 1 (bar charts)
    ├── version-table.png             ← Screenshot 2 (table view)
    └── (existing screenshots from current site)
```

---

## IMPLEMENTATION ORDER

Build in this exact order. Each component is independent.

```
1. HeroKubmin.astro          — most important, sets the page tone
2. ProblemStatement.astro    — simple 3-card grid
3. ProductDemo.astro         — screenshot + stats + insight callout
4. CoreFeatures.astro        — 2x2 feature grid
5. WhyEnergy.astro           — editorial text section (simplest to build)
6. HowItWorks.astro          — 3-step horizontal flow
7. ComparisonTable.astro     — table desktop, cards mobile
8. Pricing.astro             — 3-tier cards (can reuse existing PricingKubmin patterns)
9. TrustSignals.astro        — thin logo bar
10. FAQ.astro                — accordion with <details>/<summary>
11. FinalCTA.astro           — centered text + button (simplest component)
12. kubmin.astro page         — wire everything together
```

---

## VALIDATION CHECKLIST

After building, verify:

```
[ ] Page has exactly ONE <h1> (in the hero)
[ ] All other section headings are <h2>
[ ] All external links have target="_blank" rel="noopener"
[ ] All images have loading="lazy" and descriptive alt text
[ ] Zero client-side JavaScript (except FAQ accordion if needed)
[ ] Page renders correctly at 320px, 768px, 1024px, and 1440px widths
[ ] Primary CTA "Start Free →" appears in: hero, Section 3, Section 6, Section 11 (4 times total)
[ ] #how-it-works scroll target works from hero
[ ] Comparison table converts to cards on mobile
[ ] FAQ accordion works without JavaScript (uses <details>/<summary>)
[ ] No gradient text on the h1 headline
[ ] kubmin column in comparison table has accent background
[ ] Pricing "Most Popular" badge on Affordable tier
[ ] Blog link in FAQ Q2 opens in new tab
[ ] Proof snippet in hero has · separators (not bullets or pipes)
[ ] "Currently, clusters are created via ksctl" note is visible in How It Works
```
