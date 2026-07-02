// ============================================================
// KUBMIN PAGE — All content data
// ============================================================

export const meta = {
  title: "Kubmin — The Test Your Pipeline Is Missing: What Each Release Costs to Run",
  description:
    "Every release is tested; almost none are measured. Kubmin tracks cost, energy, and SCI/SEE carbon per release — in your environment, on your configuration, divided by your app's own functional unit like the HTTP requests it served.",
};

export const links = {
  app: "https://kubmin.ksctl.com",
  github: "https://github.com/ksctl",
  discord: "https://discord.ksctl.com",
  kepler: "https://sustainable-computing.io/",
  gsf: "https://sci.greensoftware.foundation/",
  otel: "https://opentelemetry.io/",
  blog: "https://dipankar-das.com/blog/kubelet-config-rabbit-hole-sizing-kubernetes-nodes/",
};

// ---- IMAGES ----
export const images = {
  logo: "/kubmin-logo-purple.svg",
  screenshots: {
    hero: "/kubmin/cover.webp",
    redis: "/kubmin/compare-redis-casestudy.webp",
    guidedObservability: "/kubmin/guided-observability.webp",
  },
};

// ---- HERO ----
export const hero = {
  headline: "Every release is tested. Almost none are measured.",
  displayHeadline: {
    lines: ["Every release", "is tested."],
    bridge: "Almost none are",
    accent: "measured",
    terminal: ".",
  },
  punchline:
    "Unit tests pass. Chaos drills survive. Nobody measures what the release costs to run. Kubmin is that missing check.",
  punchlineAccent: "Kubmin is that missing check.",
  explain:
    "Kubmin measures every release in your environment, on your configuration — cost, energy, and SCI/SEE carbon, divided by your application's own functional unit: the requests it served, the jobs it ran. Then it points at the fix — idle time, a better region, a better instance type.",
  cta: { text: "Start Free", href: links.app },
  secondaryCta: { text: "See the Redis comparison", href: "#demo" },
  logo: images.logo,
  productName: "kubmin",
  dispatch: {
    title: "The kubmin dispatch",
    meta: "Vol. 02 · The Missing Test",
  },
  releaseReport: {
    label: "release check",
    release: "checkout-api · v2.4.1",
    rows: [
      { name: "unit tests", value: "482 passed", pass: true },
      { name: "integration", value: "61 passed", pass: true },
      { name: "chaos drill", value: "survived", pass: true },
      { name: "cost / release", value: "unmeasured", pass: false },
      { name: "kWh / request", value: "unmeasured", pass: false },
      { name: "gCO₂e · SCI", value: "unmeasured", pass: false },
    ],
    caption:
      "The checks every pipeline runs — and the three it never does. Kubmin runs the last three.",
  },
  trustBadges: [
    "Kepler (CNCF)",
    "SCI-aligned (GSF)",
    "EKS/AKS/GKE/K3s/Kubeadm",
    "OpenTelemetry",
  ],
  proofPoints: [
    "cost per release",
    "measured in your environment",
    "SCI + SEE per functional unit",
    "quick wins, kubectl-ready",
  ],
  screenshot: {
    src: images.screenshots.hero,
    alt: "Kubmin dashboard showing workload cost, energy, and efficiency metrics",
    browserUrl: "kubmin.ksctl.com",
  },
};

// ---- PROBLEM STATEMENT ----
export const problemStatement = {
  label: "The Problem",
  heading: "You're spending thousands on Kubernetes.",
  headingAccent: "thousands",
  prompt: "But which release made the bill worse? You can't answer that.",
  promptAccent: "which release",
  summary: "Three blind spots, every release, every cluster.",
  problems: [
    {
      title: "Tested, Never Measured",
      body: "Unit tests, integration suites, even chaos drills — every release clears the pipeline. But no stage measures what that release consumes: CPU, memory, energy, money. Efficiency regressions ship behind green checkmarks, and the waste compounds with every deploy.",
    },
    {
      title: "Someone Else's Numbers",
      body: "Cloud calculators and vendor benchmarks price an idealized app. Your bill comes from your environment — your configuration, your instance types, your region, your traffic. A cost model that wasn't measured there is a guess.",
    },
    {
      title: "Metrics Without a Unit",
      body: "40% CPU says nothing about work done. Cost per request does. Without a functional unit, dashboards are trivia — you can't compare two releases honestly, justify an optimization, or report carbon the way SCI intends.",
    },
  ],
};

// ---- PRODUCT DEMO ----
export const productDemo = {
  label: "See It In Action",
  heading: "Three Redis versions. Same workload.",
  headingAccent: "Wildly different efficiency.",
  body: "We ran redis-benchmark across versions 8.6.1, 8.4.0, and 8.2.1. Here's what kubmin found — no other tool surfaces this.",
  screenshot: {
    src: images.screenshots.redis,
    alt: "Kubmin multi-version comparison showing CPU, memory, energy, SCI, SEE, and cost differences across Redis 8.6.1, 8.4.0, and 8.2.1",
    browserUrl: "kubmin.ksctl.com/workloads/compareall",
  },
  stats: [
    {
      value: "63%",
      label: "more CPU — 8.4.0 vs 8.2.1",
      detail: "(243m vs 149m)",
    },
    {
      value: "31%",
      label: "more energy — 8.4.0 vs 8.6.1",
      detail: "(0.0085 vs 0.0064 kWh)",
    },
    {
      value: "$81",
      label: "/year wasted — 8.6.1 vs 8.4.0",
      detail: "($0.0297 vs $0.0389/hr median)",
    },
    {
      value: "31%",
      label: "more efficient — 8.2.1 vs 8.4.0",
      detail: "on SEE score",
    },
  ],
  insight:
    "8.4.0 uses 87.8% CPU but isn't the most expensive. 8.2.1 uses 51.2% CPU but costs more. No single metric tells the full story — you need cost, energy, and efficiency together. That's what kubmin gives you.",
  caption:
    "This is one workload. Imagine what kubmin finds across your entire cluster.",
  cta: { text: "Try It On Your Workloads", href: links.app },
};

// ---- CORE FEATURES ----
export const coreFeatures = {
  label: "The capability index",
  heading: "What kubmin does.",
  headingAccent: "does.",
  sideLabel: "The kubmin moat",
  description:
    "Each capability ships standalone. Together they form a unified ledger — cost, energy, and efficiency, per workload, per release, across clusters you create or import.",
  features: [
    {
      title: "Per-Image-Version Deep Profile",
      body: "Point kubmin at a specific image tag and get hourly SCI, energy consumption, CPU, memory, and cost — plus the full trend across that version's lifetime. Not generic pod metrics. Version-scoped visibility into what each build actually costs and consumes in production.",
      tag: "Your deploy's real footprint",
      metric: "hourly SCI · kWh · $ · P95 utilization",
      screenshot: {
        src: "/kubmin/workload-detail-hourly.webp",
        alt: "Kubmin hourly deep profile for redis 8.2.1 — SCI score, SEE score, operational and embodied carbon, energy, and P95 utilization",
        browserUrl: "kubmin.ksctl.com/workloads/details",
      },
    },
    {
      title: "Release-over-Release Efficiency Diff",
      body: "Compare any two image versions across CPU, memory, energy, SCI, SEE, and runtime cost — per functional unit of work. Ship a new release and see within hours whether it regressed 30% on efficiency, before the regression compounds into your bill.",
      tag: "Efficiency measured per release",
      metric: "caught +63% CPU drift between tags",
      screenshot: {
        src: "/kubmin/workload-compare-image.webp",
        alt: "Kubmin image version comparison — SEE, overall carbon, energy, and SCI per tracked version",
        browserUrl: "kubmin.ksctl.com/workloads/compareall",
      },
    },
    {
      title: "Workload Profile Classifier",
      body: "Kubmin classifies each workload as CPU-bound, memory-bound, general, or resource-starved — automatically, from runtime behavior. Idle-time percentage and hourly heatmaps show exactly when waste spikes. No more right-sizing blind.",
      tag: "Actually know your workload",
      metric: "cpu-intensive · idle % · waste $/mo",
      screenshot: {
        src: "/kubmin/workload-analyse-idle-overprovision-instancetype.webp",
        alt: "Kubmin waste analysis — workload classified CPU-intensive, idle time, overprovisioning ratios, energy efficiency grade",
        browserUrl: "kubmin.ksctl.com/workloads/analyse",
      },
    },
    {
      title: "Existing Cluster Import",
      body: "Bring existing EKS, AKS, GKE Standard, or self-managed Kubernetes clusters into Kubmin. Managed imports discover clusters by cloud and region; self-managed imports use kubeconfig. Imported clusters keep their infrastructure ownership while Kubmin adds workload intelligence on top.",
      tag: "Use the clusters you already run",
      metric: "EKS · AKS · GKE · kubeconfig",
      screenshot: {
        src: "/kubmin/kubmin-dashboard.webp",
        alt: "Kubmin dashboard — clusters, workloads, resource utilization, and carbon hotspots across your fleet",
        browserUrl: "kubmin.ksctl.com/dashboard",
      },
    },
    {
      title: "Guided Observability",
      body: "Use your existing Prometheus, Tempo, Loki, and Grafana stack, or let Kubmin deploy the missing pieces. Kubmin configures an OpenTelemetry Collector bridge for metrics, logs, and traces, plus Kepler for energy attribution.",
      tag: "Bring your stack or create one",
      metric: "prometheus · tempo · loki · grafana · otel",
      screenshot: {
        src: "/kubmin/guided-observability.webp",
        alt: "Kubmin guided observability setup — connect existing backends or let Kubmin deploy the missing pieces",
        browserUrl: "kubmin.ksctl.com/clusters/import/observability",
      },
    },
    {
      title: "Smart Cluster Setup and Import",
      body: "Spinning up a new cluster or importing an existing one? Kubmin filters instance types against your workload profile and shows spec, hourly cost, and embodied carbon for each option. Region picker surfaces real grid carbon intensity and % renewable energy — so cluster decisions are informed, not guessed.",
      tag: "Right cluster before the first pod",
      metric: "178 instances ranked · cost + embodied carbon",
      screenshot: {
        src: "/kubmin/create-runner-k8s-instancetype.webp",
        alt: "Kubmin cluster setup — worker node instance types filtered by workload category with monthly cost and embodied carbon",
        browserUrl: "kubmin.ksctl.com/runners/create",
      },
    },
    {
      title: "Placement & Region Recommender",
      body: "Running on the default instance type in us-east-1? Kubmin surfaces alternative instance types with similar or better performance at lower cost, plus alternative regions that cut your workload's running cost and run on a cleaner grid. Side-by-side tradeoffs, not guesswork.",
      tag: "Move once, save every hour",
      metric: "found −$52.71/mo on one workload",
      screenshot: {
        src: "/kubmin/workload-analyse-region.webp",
        alt: "Kubmin region recommendation — alternative regions compared on running cost and grid carbon intensity",
        browserUrl: "kubmin.ksctl.com/workloads/analyse",
      },
    },
    {
      title: "Quick Wins — Ranked by Savings",
      body: "Kubmin turns every finding — idle replicas, overprovisioned limits, cheaper instance types, greener regions — into a ranked action list with estimated monthly cost savings and efficiency gains attached. Each win ships with a copy-paste kubectl command. Open the dashboard, act on the top three.",
      tag: "Dollar-ranked actions, not alerts",
      metric: "ranked by $/mo · kubectl-ready",
      screenshot: {
        src: "/kubmin/workload-analyse-quickwins.webp",
        alt: "Kubmin quick wins — ranked actions with estimated monthly savings and copy-paste kubectl commands",
        browserUrl: "kubmin.ksctl.com/workloads/analyse",
      },
    },
  ],
};

// ---- WHY ENERGY ----
export const whyEnergy = {
  heading: "CPU metrics lie.",
  headingAccent: "Energy doesn't.",
  intro:
    "A workload can show 40% CPU utilization and still be wasting energy. How? Polling loops, idle connections, inefficient memory access patterns — they all consume power without producing value. Traditional monitoring tools see 40% busy and move on. Kubmin sees the full picture — CPU usage alongside actual energy consumption over time — so you can spot the workloads where high utilization doesn't mean productive utilization.",
  kepler:
    "Kubmin uses Kepler — a CNCF project — to estimate energy consumption at the container level. Kepler uses kernel-level instrumentation and ML-based models to attribute power usage per container, even in cloud environments where hardware counters aren't directly accessible.",
  metricsIntro: "This energy data feeds into two key metrics:",
  metrics: [
    {
      name: "SCI",
      full: "Software Carbon Intensity",
      description:
        "tracks the carbon cost of your workloads, aligned with the Green Software Foundation specification.",
    },
    {
      name: "SEE",
      full: "Software Energy Efficiency",
      description:
        "catches pure efficiency regressions that carbon intensity alone can mask.",
    },
  ],
  combined:
    "Combined with energy trend graphs over time, you get both the financial picture and the sustainability picture in one dashboard.",
  accuracyNote:
    "In cloud environments, energy measurements are estimates based on ML models trained on real hardware data. They're highly reliable for relative comparison and trend analysis — which is exactly what kubmin needs. The patterns matter more than the absolute numbers.",
};

// ---- FUNCTIONAL UNITS (interlude) ----
export const functionalUnit = {
  label: "interlude · ch. 03b",
  heading: "Cost per container-hour is generic.",
  headingAccent: "Per request, it's yours.",
  intro:
    "Every application does one thing that matters — serves a request, processes a job, settles a transaction. Kubmin lets you declare that unit with a single annotation, then divides everything by it: energy, carbon, cost.",
  sciNote:
    "This is SCI the way the Green Software Foundation defines it — carbon per functional unit — computed next to your application, from your cluster's real energy data. Not an industry average pasted into a slide.",
  unitsLabel: "declare work in your own vocabulary",
  units: ["request", "transaction", "job", "container-hour", "custom"],
  annotationTitle: "one annotation on your workload",
  annotationFile: "deployment.yaml",
  annotation: `kubmin.ksctl.com/functional-units: |
  version: 1
  containers:
    api:
      unit: request
      metric: http_server_request_duration_seconds_count
      scope: workload
    worker:
      unit: container-hour`,
  outputsTitle: "what you read back, per release",
  outputs: [
    { value: "kWh / request", note: "SEE — energy per unit of work" },
    { value: "gCO₂e / request", note: "SCI — carbon per unit of work" },
    { value: "$ / 1M requests", note: "runtime cost, in your units" },
  ],
  formula: {
    lead: "SCI",
    numerator: "operational + embodied carbon",
    denominator: "R — your functional unit",
    caption:
      "R is whatever your application calls work: requests served, jobs processed, transactions settled. You declare it once — kubmin divides by it forever.",
  },
};

// ---- HOW IT WORKS ----
export const howItWorks = {
  label: "Get Started",
  heading: "Three steps to see",
  headingAccent: "what you're wasting",
  steps: [
    {
      title: "Create or Import a Cluster",
      body: "Start with a new ksctl-managed cluster or import an existing EKS, AKS, GKE Standard, or self-managed Kubernetes cluster. Managed imports discover clusters by cloud and region; self-managed imports use kubeconfig.",
    },
    {
      title: "Choose Your Observability Path",
      body: "Connect existing Prometheus, Tempo, Loki, and Grafana endpoints, or let Kubmin deploy the missing pieces. Kubmin always installs the agent, Kepler, Gateway API, and an OpenTelemetry Collector bridge.",
    },
    {
      title: "Instrument Apps and See Results",
      body: "Point your apps at Kubmin's in-cluster OTLP gRPC or HTTP endpoint. Kubmin turns metrics, logs, traces, and Kepler energy data into workload cost, efficiency, SCI/SEE, and Quick Wins.",
    },
  ],
  cta: { text: "Start Free", href: links.app },
  disclaimer:
    "Imported clusters must have cert-manager installed and healthy. Kubmin installs Gateway API CRDs during import and configures the Kubmin agent, Kepler, and OpenTelemetry Collector automatically.",
};

// ---- GUIDED OBSERVABILITY ----
export const guidedObservability = {
  label: "New capability",
  heading: "Guided Observability",
  headingAccent: "without glue work",
  body:
    "Keep your Prometheus, Tempo, Loki, and Grafana stack, or let Kubmin deploy the missing pieces during create/import. Kubmin wires telemetry back to the cost and energy ledger, so metrics, logs, traces, and Kepler data support the same workload decisions.",
  bullets: [
    "Bring existing Prometheus, Tempo, Loki, and Grafana endpoints",
    "Use Kubmin's in-cluster OpenTelemetry Collector for OTLP gRPC and HTTP",
    "Let Kubmin deploy missing backends while always installing the agent, Kepler, Gateway API, and collector",
  ],
  note:
    "For imported clusters, cert-manager must already be installed and healthy. Kubmin installs Gateway API CRDs during import.",
  screenshot: {
    src: images.screenshots.guidedObservability,
    alt: "Kubmin Guided Observability setup showing choices for existing or Kubmin-managed telemetry backends",
    browserUrl: "kubmin.ksctl.com/clusters/import/observability",
  },
};

// ---- COMPARISON TABLE ----
export const comparisonTable = {
  label: "The Gap",
  heading: "What your current tools",
  headingAccent: "can't tell you",
  intro:
    "Kubmin doesn't replace your monitoring stack. It connects cluster onboarding, OpenTelemetry, energy, and workload cost intelligence around it.",
  competitors: [
    "AWS Cost Explorer",
    "Kubecost",
    "Prometheus + Grafana",
    "kubmin",
  ],
  rows: [
    {
      capability: "Per-container cost tracking",
      values: ["EC2 only", "Est.", "Manual", "✓"],
    },
    {
      capability: "Energy consumption per workload",
      values: ["✗", "✗", "✗", "✓"],
    },
    {
      capability: "Existing cluster import",
      values: ["✗", "Manual", "Manual", "✓ EKS/AKS/GKE + kubeconfig"],
    },
    {
      capability: "Guided observability setup",
      values: ["✗", "✗", "Manual", "✓ Bring yours or deploy"],
    },
    {
      capability: "OpenTelemetry logs/traces/metrics bridge",
      values: ["✗", "✗", "Manual", "✓ OTEL Collector"],
    },
    {
      capability: "GKE Standard import",
      values: ["✗", "✗", "Manual", "✓"],
    },
    {
      capability: "Idle workload detection",
      values: ["✗", "Basic", "Manual", "✓ Auto"],
    },
    {
      capability: "Deployment version comparison",
      values: ["✗", "✗", "✗", "✓"],
    },
    {
      capability: "SCI + SEE sustainability scoring",
      values: ["✗", "✗", "✗", "✓"],
    },
    {
      capability: "Regional cost comparison",
      values: ["Partial", "✗", "✗", "✓"],
    },
    {
      capability: "Ready-to-use kubectl fixes",
      values: ["✗", "✗", "✗", "✓"],
    },
    {
      capability: "Instance type optimization",
      values: ["✗", "✗", "✗", "✓"],
    },
    {
      capability: "Setup time",
      values: ["N/A", "~30 min", "Hours/Days", "Minutes to create/import"],
    },
  ],
  footer:
    "Kubmin doesn't replace your monitoring stack. It sees what your monitoring stack can't — the energy layer that drives real waste, plus the release context that turns metrics into action.",
};

// ---- PRICING ----
export const pricing = {
  label: "Pricing",
  heading: "Start free.",
  headingAccent: "Scale when you need to.",
  subheading:
    "Fixed monthly pricing. No per-node fees. No surprise bills. All plans include the Kubmin agent, Kepler energy insights, and Guided Observability with OpenTelemetry Collector.",
  ctaHref: links.app,
  tiers: [
    {
      name: "Explore",
      price: "$0",
      period: "/month",
      features: [
        "1 cluster to create or import",
        "1 workload",
        "1 team member",
        "Guided Observability setup",
        "6h hourly metrics retention",
        "Basic workload overview",
        "Community support",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Affordable",
      price: "$19.99",
      period: "/month",
      features: [
        "5 clusters to create or import",
        "5 workloads",
        "10 team members",
        "72h (3d) hourly metrics retention",
        "Full workload analysis",
        "Deployment comparison",
        "Quick Wins with kubectl commands",
        "Bring or deploy observability backends",
        "Priority support",
      ],
      cta: "Start Affordable",
      popular: true,
    },
    {
      name: "Premium",
      price: "$49.99",
      period: "/month",
      features: [
        "20 clusters to create or import",
        "20 workloads",
        "50 team members",
        "168h (7d) hourly metrics retention",
        "Everything in Affordable",
        "Dedicated support",
      ],
      cta: "Start Premium",
      popular: false,
    },
  ],
  footer:
    "No hidden fees · Cancel anytime · Bring your stack or let Kubmin deploy one",
};

// ---- TRUST SIGNALS ----
export const trustSignals = {
  label: "Built on Proven Foundations",
  items: [
    {
      title: "CNCF Project",
      body: "Energy measurement powered by Kepler — kernel-level container energy attribution",
      href: links.kepler,
    },
    {
      title: "OpenTelemetry-native",
      body: "Kubmin installs an OpenTelemetry Collector bridge for OTLP metrics, logs, and traces while keeping Prometheus, Tempo, Loki, and Grafana optional.",
      href: links.otel,
    },
    {
      title: "Green Software Foundation",
      body: "SCI-aligned sustainability scoring built on the GSF specification",
      href: links.gsf,
    },
    {
      title: "Open Source",
      body: "Cluster management powered by ksctl — fully open source on GitHub",
      href: links.github,
    },
  ],
};

// ---- FAQ ----
export const faq = {
  items: [
    {
      q: "What is kubmin?",
      a: "Kubmin is a Kubernetes cost and energy optimization platform. It uses energy-powered analysis via Kepler to find idle workloads, overprovisioned resources, and inefficient deployments — waste that traditional monitoring misses. It also tracks SCI scores for sustainability reporting.",
    },
    {
      q: "How much money can kubmin save me?",
      a: `There are two layers of savings:

Direct waste: Kubmin detects idle workloads, overprovisioned resources, and suboptimal instance types — each with dollar amounts and ready-to-use kubectl commands to fix them. Typical findings range from $50-500/month per cluster.

Indirect efficiency gains: When you right-size inefficient workloads, they consume less CPU and memory on the node. This reduces pressure on the cluster autoscaler and frees resources for other workloads — meaning you may not need that extra node at all. Understanding how Kubernetes node sizing and kubelet configuration affect scheduling is key to unlocking these savings.`,
      link: {
        text: "Read more",
        href: links.blog,
      },
    },
    {
      q: "What are the alternatives to kubmin?",
      a: `The short answer: there isn't a direct alternative that does what kubmin does.

Kubecost tracks pod-level cost allocation based on resource requests — it's a FinOps tool, not an efficiency tool. Prometheus + Grafana gives you raw metrics but requires manual setup for any waste detection or version comparison. AWS Cost Explorer operates at the EC2 level and has no visibility into individual containers.

None of these tools track per-workload energy consumption, compare efficiency across deployment versions, import existing clusters with guided observability, or provide SCI/SEE sustainability scores. Kubmin was built specifically because this gap existed.`,
    },
    {
      q: "Do I need to change my deployment workflow?",
      a: "No. For workload intelligence, add the Kubmin label and annotation to the workloads you want to track. For observability, either keep your existing Prometheus, Tempo, Loki, and Grafana endpoints or let Kubmin deploy them. Applications can send OTLP telemetry to Kubmin's in-cluster OpenTelemetry Collector endpoints.",
    },
    {
      q: "How accurate are the energy measurements?",
      a: "Kubmin uses Kepler, which employs ML-based estimation models trained on real hardware data. In cloud environments, energy readings are estimates — but they're highly reliable for trend analysis and relative comparison between workloads, which is exactly what waste detection requires. The patterns matter more than absolute numbers.",
    },
    {
      q: "What clusters does kubmin support?",
      a: "Kubmin supports clusters created through ksctl and imported existing clusters. Managed import supports EKS, AKS, and GKE Standard. Self-managed import supports Kubernetes clusters on AWS, Azure, or Google Cloud via kubeconfig. GKE Autopilot is not included in the current import path.",
    },
    {
      q: "What does Kubmin install on imported clusters?",
      a: "Imported clusters must already have cert-manager installed and healthy. During import, Kubmin installs Gateway API CRDs and configures the Kubmin agent, Kepler, and OpenTelemetry Collector. If you do not provide Prometheus, Tempo, Loki, or Grafana endpoints, Kubmin can deploy the missing observability backends for you.",
    },
  ],
};

// ---- FINAL CTA ----
export const finalCta = {
  headlinePrefix: "Every hour you wait, your clusters",
  headlineAccent: "keep wasting.",
  subtitle: "Sign up free. Connect a cluster. See your waste in minutes.",
  primaryAction: { text: "Get Started", href: links.app },
  secondaryAction: { text: "Join Discord", href: links.discord },
  footerNote: "kubmin.ksctl.com · sign in with github · setup in minutes",
};
