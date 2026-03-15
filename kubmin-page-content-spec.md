# Kubmin Product Page — Complete Content Spec
## Every section, every word, ready for Gemini implementation

---

## Page Title & Meta

```
<title>Kubmin — Track What Each Deploy Costs in Money and Efficiency</title>
<meta name="description" content="Kubmin reveals per-workload cost, energy consumption, and SCI scores across your Kubernetes clusters. Detect idle resources, compare deployments, and get actionable fixes. Free tier available.">
```

---

## Section 1: HERO

**Goal:** In 5 seconds, an engineer knows what kubmin does, who it's for, and why they should care.

**Structure:** Claim → Punch → Explain (inspired by HydraDB pattern)

### Content

**Badge:** `Beta — Free to Start`

**Headline (The Claim):**
```
Ship fast. But know what each deploy costs in money and efficiency.
```

**Punch (one-liner that lands the problem):**
```
Version 2.1 uses 30% more energy than 2.0. Your monitoring didn't
catch that. Kubmin would have.
```

**Explain (what kubmin actually does):**
```
Per-workload efficiency tracking across deployments, automated waste
detection, and ready-to-use kubectl fixes. The layer between your
workloads and your cloud bill that's been missing.
```

**Primary CTA:** `Start Free →` → links to kubmin.ksctl.com
**Secondary CTA:** `See how it works ↓` → smooth scroll to How It Works section

**Proof snippet (below CTAs, smaller text):**
```
Built on Kepler (CNCF) · SCI-aligned (Green Software Foundation) · Powered by ksctl
```

### Design Notes
- Three distinct text layers with clear visual hierarchy:
  - Headline: largest, boldest, white
  - Punch: medium size, slightly muted or accent-colored to stand out as a "hook"
  - Explain: smallest of the three, gray-400, max 2 lines
- No product logo in the hero. The headline IS the hook.
- Dark background, clean typography. No gradients on the headline text.
- CTAs side by side. Primary = solid green button. Secondary = ghost/text link.
- Proof snippet = small, muted text with subtle separator dots. Not a banner.
- NO background illustrations, particles, or gradients.
- Optional: place a kubmin dashboard screenshot (deployment comparison view)
  to the right of the text on desktop, or below on mobile. This reinforces
  the "version comparison" message visually.

---

## Section 2: THE PROBLEM

**Goal:** Make the reader nod "yes, that's me" before you pitch anything.

### Content

**Section label (small, above headline):** `The Problem`

**Headline:**
```
You're spending thousands on Kubernetes. But do you know what each workload actually costs?
```

**Three problem cards:**

**Card 1: No Per-Container Visibility**
```
AWS Cost Explorer shows you EC2 bills. Kubecost estimates pod costs.
Neither tells you what a single container actually consumes in energy
and compute — the real drivers of your bill.
```

**Card 2: Overprovisioned and Flying Blind**
```
Most teams request 2-4x the resources their workloads actually use.
Without per-workload waste detection, you're paying for idle CPU
and memory every hour of every day.
```

**Card 3: Deploys Make It Worse (Silently)**
```
You ship a new image version. CPU goes up 15%. Memory creeps up.
Nobody notices because no tool tracks efficiency changes between
deployments. The waste compounds with every release.
```

### Design Notes
- 3 columns on desktop, stacked on mobile.
- Each card: icon (simple inline SVG) + bold title + 3-line description.
- No "learn more" links. These are context-setters.
- Muted borders or subtle background differentiation between cards.

---

## Section 3: PRODUCT DEMO (The "Aha" Moment)

**Goal:** Show real product, real data. This section builds trust instantly.

### Content

**Section label:** `See It In Action`

**Headline:**
```
Three Redis versions. Same workload. Wildly different efficiency.
```

**Sub-headline:**
```
We ran redis-benchmark across versions 8.6.1, 8.4.0, and 8.2.1.
Here's what kubmin found — no other tool surfaces this.
```

**Screenshot: Multi-Version Comparison (Screenshot 1 — the bar chart view)**
→ Use the uploaded Multi-Version Comparison screenshot showing CPU, Memory,
  Energy, SCI, SEE, and Median Hourly Cost bars across all 3 versions.

**Below screenshot, 4 stat callouts (real data):**
```
[CPU Gap]               [Energy Gap]            [Cost Gap]              [SEE Gap]
8.4.0 uses 63%          8.4.0 burns 31%         8.6.1 costs $0.11      8.2.1 is 31% more
more CPU than 8.2.1     more energy than 8.6.1  vs 8.4.0 at $0.18      efficient than 8.4.0
(243m vs 149m)          (0.0085 vs 0.0064 kWh)  per tracked period     on SEE score
```

**Insight callout (this is the "aha" moment — bold or accent-colored):**
```
8.4.0 uses 87.8% CPU but isn't the most expensive. 8.2.1 uses 51.2% CPU
but costs more. No single metric tells the full story — you need cost,
energy, and efficiency together. That's what kubmin gives you.
```

**Caption below:**
```
This is one workload. Imagine what kubmin finds across your entire cluster.
```

**CTA:** `Try It On Your Workloads →` → kubmin.ksctl.com

### Design Notes
- Screenshot is the centerpiece. Full-width, with a subtle browser chrome frame.
- The 4 stat callouts below as inline metrics (large number + label below).
- The "insight callout" should be visually distinct — a bordered card or
  accent-left bar — because this is where the engineer goes "oh, I need this."
- Dark card background behind the screenshot to make it pop.
- On mobile: stats stack 2x2, screenshot scrolls horizontally if needed.
- ALSO USE Screenshot 2 (the version table) in Section 4 alongside the
  Deployment Comparison feature card — it shows the clean table view.

---

## Section 4: CORE FEATURES

**Goal:** The 4 things kubmin does, each with a concrete outcome — not a vague benefit.

### Content

**Section label:** `What Kubmin Does`

**Headline:**
```
Four things no other Kubernetes tool does together
```

**Feature 1: Waste Detection Engine**
```
Title: Find Idle & Overprovisioned Workloads
Body: Kubmin detects three types of waste: idle workloads burning resources 24/7,
overprovisioned containers using a fraction of their requests, and temporal
patterns where waste spikes during off-hours. Each detection comes with
dollar amounts attached.
Outcome tag: "Know exactly what you're wasting"
```

**Feature 2: Quick Wins**
```
Title: kubectl Commands That Save Money
Body: Every waste detection comes with a ready-to-use kubectl command.
Scale down idle replicas, right-size resource requests, remove unused
deployments — copy, paste, save. No guesswork.
Outcome tag: "Fix waste in 30 seconds"
```

**Feature 3: Deployment Comparison**
```
Title: Compare Any Two Image Versions
Body: Shipped a new release? Compare it against the previous version across
cost, energy, CPU, memory, and SCI score. See exactly how your code change
affected efficiency — before it hits your bill.
Outcome tag: "Catch regressions before they compound"
```

**Feature 4: Regional Cost Comparison**
```
Title: Same Workload, Different Regions, Different Prices
Body: Running in us-east-1 by default? Kubmin compares your workload's
cost and carbon footprint across every available region. See exactly how
much you'd save by moving — with the sustainability trade-offs laid out
side by side.
Outcome tag: "Find your cheapest region"
```

### Design Notes
- 2x2 grid on desktop, stacked on mobile.
- Each feature: bold title + 3-4 line description + small green "outcome tag" below.
- Consider alternating: feature text left / mini-screenshot right, then swap.
- Use the existing screenshots from the current page:
  - Waste Analysis → Feature 1
  - Quick Wins → Feature 2
  - Deployment Comparison → Feature 3
  - Regional Cost Analysis → Feature 4

---

## Section 5: WHY ENERGY? (The Moat)

**Goal:** Explain why energy-based detection catches things CPU/memory metrics miss. Medium technical depth — explain Kepler briefly, focus on what energy data reveals.

### Content

**Section label:** `Why Energy Changes Everything`

**Headline:**
```
CPU metrics lie. Energy doesn't.
```

**Body paragraph:**
```
A workload can show 40% CPU utilization and still be wasting energy.
How? Polling loops, idle connections, inefficient memory access patterns —
they all consume power without producing value. Traditional monitoring
tools see "40% busy" and move on. Kubmin sees the full picture — CPU
usage alongside actual energy consumption over time — so you can spot
the workloads where high utilization doesn't mean productive utilization.
```

**How it works (brief, not a deep-dive):**
```
Kubmin uses Kepler — a CNCF project — to estimate energy consumption
at the container level. Kepler uses kernel-level instrumentation and
ML-based models to attribute power usage per container, even in cloud
environments where hardware counters aren't directly accessible.

This energy data feeds into two key metrics:
— SCI (Software Carbon Intensity): tracks the carbon cost of your workloads,
  aligned with the Green Software Foundation specification.
— SEE (Software Energy Efficiency): catches pure efficiency regressions
  that carbon intensity alone can mask.

Combined with energy trend graphs over time, you get both the financial
picture and the sustainability picture in one dashboard.
```

**Callout box:**
```
Note on accuracy: In cloud environments, energy measurements are
estimates based on ML models trained on real hardware data. They're
highly reliable for relative comparison and trend analysis — which
is exactly what waste detection needs. The patterns matter more
than the absolute numbers.
```

### Design Notes
- This section should feel different from the feature cards. More editorial.
- Consider a dark card with the headline in a slightly larger, bolder style.
- The "Note on accuracy" should be a subtle callout (border-left accent, muted text) — it builds trust by being honest.
- Optional: small Kepler logo + CNCF logo + GSF logo as badges.

---

## Section 6: HOW IT WORKS (User Journey to Value)

**Goal:** Show the engineer that going from "never heard of kubmin" to "seeing my waste" takes 3 steps.

### Content

**Section label:** `Get Started`

**Headline:**
```
Three steps to see what you're wasting
```

**Step 1: Sign Up & Create a Cluster**
```
Sign up at kubmin.ksctl.com and create your Kubernetes cluster
from the dashboard. Kubmin provisions the full monitoring stack
automatically — Prometheus, Kepler, and the kubmin agent.
You don't install anything manually.

Works with: EKS, AKS, GKE, K3s, Kubeadm — cloud managed
and self-managed clusters via ksctl.
```

**Step 2: Label Your Workloads**
```
Add one label and one annotation to the Deployments, StatefulSets,
or DaemonSets you want to monitor. The dashboard shows you exactly
what to add. That's the only configuration you do.
```

**Step 3: See Your Results**
```
Kubmin aggregates data hourly and surfaces waste analysis,
efficiency grades, cost breakdowns, and Quick Wins automatically.
Open the dashboard and start saving.
```

**CTA:** `Start Free →` → kubmin.ksctl.com

**Small note below CTA:**
```
Currently, clusters are created via ksctl. Support for importing
existing clusters is coming soon.
```

### Design Notes
- Horizontal 3-step flow with numbered circles (1, 2, 3) connected by a line/arrow.
- Each step: number + title + 2-3 line description.
- Step 1 should mention "you don't install anything" prominently — this is a huge selling point vs. Kubecost.
- The "import existing clusters" note should be small and honest, not hidden. Engineers respect transparency.
- Mobile: vertical stack with step numbers.

---

## Section 7: WHAT YOU'RE CURRENTLY MISSING (Comparison)

**Goal:** Show the gap that kubmin fills. Not a "vs" comparison — a "here's what none of them do" framing.

### Content

**Section label:** `The Gap`

**Headline:**
```
What your current tools can't tell you
```

**Comparison table:**

```
Capability                    | AWS Cost    | Kubecost | Prometheus | kubmin
                              | Explorer    |          | + Grafana  |
──────────────────────────────┼─────────────┼──────────┼────────────┼────────
Per-container cost tracking   | ✗ EC2 only  | ✓ Est.   | ✗ Manual   | ✓
Energy consumption per        | ✗           | ✗        | ✗          | ✓
workload                      |             |          |            |
Idle workload detection       | ✗           | Basic    | ✗ Manual   | ✓ Auto
Deployment version comparison | ✗           | ✗        | ✗          | ✓
SCI + SEE sustainability      | ✗           | ✗        | ✗          | ✓
scoring                       |             |          |            |
Regional cost comparison      | Partial     | ✗        | ✗          | ✓
Ready-to-use kubectl fixes    | ✗           | ✗        | ✗          | ✓
Instance type optimization    | ✗           | ✗        | ✗          | ✓
Setup time                    | N/A         | ~30 min  | Hours/Days | ~10 min
```

**Below table:**
```
Kubmin doesn't replace your monitoring stack. It sees what your
monitoring stack can't — the energy layer that drives real waste.
```

### Design Notes
- Clean table with clear visual hierarchy. kubmin column highlighted (subtle green background).
- Check marks in green, X marks in muted red/gray.
- On mobile: convert to a "kubmin vs the rest" card format instead of a table.
- Don't bash competitors. The table speaks for itself.

---

## Section 8: PRICING

**Goal:** Clear, simple, no surprises. Keep the current 3-tier structure.

### Content

**Section label:** `Pricing`

**Headline:**
```
Start free. Scale when you need to.
```

**Sub-headline:**
```
Fixed monthly pricing. No per-node fees. No surprise bills.
All plans include auto-deployed Prometheus, Kepler, and Grafana.
```

**Tier 1: Explore — $0/month**
```
- 1 cluster
- 1 workload
- 1 team member
- SCI tracking (2-day retention)
- Basic workload overview
- Community support
CTA: [Get Started Free]
```

**Tier 2: Affordable — $19.99/month** (mark as "Most Popular")
```
- 5 clusters
- 5 workloads
- 10 team members
- Full waste analysis + SCI tracking
- Instance optimization
- Regional cost comparison
- Deployment comparison
- Quick Wins with kubectl commands
- Regional cost comparison
- Priority support
CTA: [Start Affordable]
```

**Tier 3: Premium — $49.99/month**
```
- 20 clusters
- 20 workloads
- 50 team members
- Everything in Affordable
- Dedicated support
CTA: [Start Premium]
```

**Below pricing:**
```
No hidden fees · Cancel anytime · All plans include Prometheus & Grafana
```

### Design Notes
- 3 columns, Affordable tier visually elevated (border highlight or slight scale).
- Keep exactly as-is from current page — it works well enough for now.
- Ensure pricing cards have enough whitespace. Current page is slightly cramped.

---

## Section 9: TRUST SIGNALS

**Goal:** Borrow credibility from established projects and standards.

### Content

**Section label:** `Built on Proven Foundations`

**Three trust blocks (inline, not cards):**

```
[Kepler Logo]                    [GSF Logo]                [ksctl Logo]
CNCF Project                     Green Software            Open Source
                                 Foundation
Energy measurement               SCI-aligned               Cluster management
powered by Kepler —              sustainability             powered by ksctl —
kernel-level container           scoring built on           fully open source
energy attribution               the GSF specification      on GitHub
```

### Design Notes
- Single horizontal row. Logos + short description.
- Muted/grayscale logos that colorize on hover (optional).
- This section is thin — max 100px height. It's a trust bar, not a feature section.
- Link each logo to the respective project (kepler.gl, greensoftware.foundation, github.com/ksctl).

---

## Section 10: FAQ

**Goal:** Handle remaining objections. Keep from current page but trim.

### Content

Keep these 6 questions (trimmed from current page):

**Q1: What is kubmin?**
```
Kubmin is a Kubernetes cost and energy optimization platform. It uses
energy-powered analysis via Kepler to find idle workloads, overprovisioned
resources, and inefficient deployments — waste that traditional monitoring misses.
It also tracks SCI scores for sustainability reporting.
```

**Q2: How much money can kubmin save me?**
```
There are two layers of savings:

Direct waste: Kubmin detects idle workloads, overprovisioned resources,
and suboptimal instance types — each with dollar amounts and ready-to-use
kubectl commands to fix them. Typical findings range from $50-500/month
per cluster.

Indirect efficiency gains: When you right-size inefficient workloads,
they consume less CPU and memory on the node. This reduces pressure on
the cluster autoscaler and frees resources for other workloads — meaning
you may not need that extra node at all. Understanding how Kubernetes
node sizing and kubelet configuration affect scheduling is key to
unlocking these savings.

Read more: https://dipankar-das.com/blog/kubelet-config-rabbit-hole-sizing-kubernetes-nodes/
```

**Q3: What are the alternatives to kubmin?**
```
The short answer: there isn't a direct alternative that does what kubmin does.

Kubecost tracks pod-level cost allocation based on resource requests —
it's a FinOps tool, not an efficiency tool. Prometheus + Grafana gives
you raw metrics but requires manual setup for any waste detection or
version comparison. AWS Cost Explorer operates at the EC2 level and
has no visibility into individual containers.

None of these tools track per-workload energy consumption, compare
efficiency across deployment versions, or provide SCI/SEE sustainability
scores. Kubmin was built specifically because this gap existed.
```

**Q4: Do I need to change my deployment workflow?**
```
No. Add one label and one annotation to the workloads you want to monitor.
That's it. Kubmin works alongside your existing CI/CD pipeline. The full
monitoring stack (Prometheus, Kepler, Grafana) is deployed automatically.
```

**Q5: How accurate are the energy measurements?**
```
Kubmin uses Kepler, which employs ML-based estimation models trained on
real hardware data. In cloud environments, energy readings are estimates —
but they're highly reliable for trend analysis and relative comparison
between workloads, which is exactly what waste detection requires.
The patterns matter more than absolute numbers.
```

**Q6: What clusters does kubmin support?**
```
Kubmin works with clusters created via ksctl — including EKS, AKS, GKE,
K3s, and Kubeadm (both cloud-managed and self-managed). Support for
importing existing clusters not created by ksctl is in active development.
```

### Design Notes
- Accordion style (click to expand). Only Q visible by default.
- Clean borders between questions. No background colors on expanded answers.

---

## Section 11: FINAL CTA

**Goal:** One last push. Different headline than the hero.

### Content

**Headline:**
```
Every hour you wait, your clusters keep wasting.
```

**Sub-headline:**
```
Sign up free. Connect a cluster. See your waste in minutes.
```

**CTA:** `Start Free →` → kubmin.ksctl.com

**Secondary:** `Questions? Join our Discord →` → discord.ksctl.com

### Design Notes
- Full-width dark section with centered text.
- Single primary CTA button. Discord link as small text below.
- Generous vertical padding (80px+ top and bottom).

---

## Complete Page Flow Summary

```
1.  HERO                → Hook them (5 seconds to understand value)
2.  THE PROBLEM         → Make them nod ("that's me")
3.  PRODUCT DEMO        → Prove it's real (redis comparison screenshot)
4.  CORE FEATURES       → What it does (4 capabilities with outcomes)
5.  WHY ENERGY          → Why this approach is better (the moat)
6.  HOW IT WORKS        → How easy it is (3 steps to value)
7.  COMPARISON TABLE    → What they're missing (gap analysis)
8.  PRICING             → What it costs (simple, transparent)
9.  TRUST SIGNALS       → Who backs it (Kepler, GSF, ksctl)
10. FAQ                 → Remaining objections (6 questions)
11. FINAL CTA           → Last push
```

---

## Action Items Before Design

1. [x] Share the redis deployment comparison screenshot — DONE (2 screenshots received)
2. [x] Fill in real numbers for Section 3 — DONE (extracted from screenshots)
3. [x] FAQ reframed — Q2 updated with efficiency savings + blog link, Q3 changed to "alternatives" framing
4. [ ] Final review — read through the full doc one more time, flag anything that feels off

Once item 4 is done, we move to design and implementation.
