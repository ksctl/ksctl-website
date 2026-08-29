// ============================================================
// KUBMIN PAGE — All content data
// ============================================================

export const meta = {
  title: "Kubmin — Release Intelligence for Cost, Energy, and Carbon",
  description:
    "After a release runs, Kubmin uses your cluster's runtime evidence to show which image version increased estimated workload cost, energy per unit of work, or resource waste.",
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
  },
};

// ---- HERO ----
export const hero = {
  displayHeadline: {
    lines: ["Your release passed", "the pipeline."],
    bridge: "Now find",
    accent: "what got worse",
    terminal: ".",
  },
  punchline:
    "Which image version raised estimated workload cost, used more energy per request, or wasted more resources? Kubmin shows you after it runs.",
  punchlineAccent: "Kubmin shows you after it runs.",
  explain:
    "Within hours, Kubmin compares estimated workload cost, CPU, and memory by image version, alongside energy, SCI, and SEI per request, job, or transaction. Then it ranks fixes by estimated impact.",
  cta: { text: "Start Free", href: links.app },
  secondaryCta: { text: "See the Redis comparison", href: "#demo" },
  logo: images.logo,
  productName: "kubmin",
  dispatch: {
    title: "The kubmin dispatch",
    meta: "Vol. 02 · Runtime Evidence",
  },
  releaseReport: {
    label: "runtime release evidence",
    release: "checkout-api · v2.4.1",
    rows: [
      { name: "unit tests", value: "482 passed", pass: true },
      { name: "integration", value: "61 passed", pass: true },
      { name: "chaos drill", value: "survived", pass: true },
      { name: "estimated workload $ / hr", value: "collecting runtime", pass: false },
      { name: "kWh / request", value: "collecting runtime", pass: false },
      { name: "gCO₂e · SCI", value: "collecting runtime", pass: false },
    ],
    caption:
      "The pipeline checks whether it ships. Kubmin shows what changed after it runs.",
  },
  trustBadges: [
    "Kepler (CNCF)",
    "SCI-aligned · SEI provisional",
    "EKS/AKS/GKE/K3s/Kubeadm",
    "OpenTelemetry",
  ],
  proofPoints: [
    "estimated workload cost",
    "runtime evidence by image version",
    "SCI carbon + SEI energy",
    "ranked fixes, kubectl-ready",
  ],
  screenshot: {
    src: images.screenshots.hero,
    alt: "Kubmin dashboard showing estimated workload cost, energy, and efficiency metrics",
    browserUrl: "kubmin.ksctl.com",
  },
};

// ---- PROBLEM STATEMENT ----
export const problemStatement = {
  label: "The Problem",
  heading: "A green pipeline can hide runtime regressions.",
  headingAccent: "runtime regressions",
  prompt: "Which image version raised estimated workload cost, energy per unit of work, or idle waste? Billing totals don't isolate it.",
  promptAccent: "Which image version",
  summary: "Three gaps Kubmin closes after deployment.",
  problems: [
    {
      title: "Green Tests, Costlier Runtime",
      body: "Tests check behavior before deploy. Kubmin compares CPU, memory, energy, and estimated workload cost after each version runs.",
    },
    {
      title: "Your Workload, Your Numbers",
      body: "Generic calculators start with assumptions. Kubmin uses your cluster, region, instance types, and workload telemetry to build a runtime cost estimate.",
    },
    {
      title: "Every Metric, Per Unit of Work",
      body: "CPU alone cannot show efficiency. Kubmin normalizes energy and carbon by requests, jobs, transactions, or your own functional unit, with estimated workload cost alongside.",
    },
  ],
};

// ---- PRODUCT DEMO ----
export const productDemo = {
  label: "See It In Action",
  heading: "Three Redis versions. Same workload.",
  headingAccent: "Wildly different efficiency.",
  body: "Same benchmark, three image versions. Kubmin exposes the tradeoffs across CPU, memory, energy, SCI, SEI, and estimated workload cost.",
  repoLink: {
    label: "reproduce this demo yourself",
    href: "https://github.com/ksctl/kubmin-demos/tree/main/redis-8-4-version-compare",
  },
  screenshot: {
    src: images.screenshots.redis,
    alt: "Kubmin comparison showing CPU, memory, energy, SCI, SEI, and estimated workload cost across Redis 8.6.1, 8.4.0, and 8.2.1",
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
      label: "annualized runtime cost estimate gap — 8.6.1 vs 8.4.0",
      detail: "($0.0389 vs $0.0297/hr median)",
    },
    {
      value: "29%",
      label: "lower energy intensity — 8.2.1 vs 8.4.0",
      detail: "on SEI (0.007197 vs 0.010104 kWh/container-hour)",
    }
  ],
  insight:
    "CPU alone misses the tradeoff. Redis 8.4.0 recorded the highest P95 CPU at 243m yet the lowest median cost estimate at $0.0297/hr. Redis 8.2.1 recorded 149m CPU but $0.0388/hr. Kubmin puts cost estimates, energy, and efficiency side by side.",
  caption:
    "One reproducible workload. The same release-level view for every version you track.",
  cta: { text: "Try It On Your Workloads", href: links.app },
};

// ---- CORE FEATURES (five chapters) ----
export const coreFeatures = {
  label: "The capability index",
  heading: "What kubmin does.",
  headingAccent: "does.",
  sideLabel: "The kubmin moat",
  description:
    "Five capabilities, one release ledger: estimated workload cost, energy, and carbon by image version in your environment.",
  crossRef: {
    text: "per measurement unit · see ch. 03b",
    href: "#measurement-unit",
  },
  features: [
    {
      id: "deep-profile",
      chapter: "02a",
      title: "Image Version Deep Profile",
      tag: "the full runtime footprint",
      body: "Open any image tag to see hourly SCI, SEI, energy, CPU, memory, and its runtime cost estimate since Kubmin first observed it.",
      metric: "hourly SCI · SEI · kWh · estimated $",
      hasCrossRef: true,
      glow: "primary",
      screenshot: {
        src: "/kubmin/workload-detail-hourly.webp",
        alt: "Kubmin hourly profile for Redis 8.2.1 showing SCI, SEI, energy, carbon, and P95 utilization",
        browserUrl: "kubmin.ksctl.com/workloads/details",
      },
    },
    {
      id: "version-comparison",
      chapter: "02b",
      title: "Version-over-Version Comparison",
      tag: "runtime evidence per release",
      body: "Compare image versions after they run. Kubmin puts estimated workload cost, CPU, and memory beside energy efficiency per request, job, or transaction.",
      metric: "found +63% CPU between Redis tags",
      hasCrossRef: true,
      glow: "energy",
      screenshot: {
        src: "/kubmin/compare-redis-casestudy.webp",
        alt: "Kubmin image-version comparison showing SEI, SCI, and energy per tracked version",
        browserUrl: "kubmin.ksctl.com/workloads/compareall",
      },
    },
    {
      id: "placement-intelligence",
      chapter: "02c",
      title: "Placement & Region Intelligence",
      tag: "see the tradeoff before you move",
      body: "Compare instance types and regions by estimated workload cost, grid carbon intensity, renewable-energy share, and embodied carbon.",
      metric: "estimated −$52.71/mo on one workload",
      hasCrossRef: false,
      glow: "energy",
      screenshot: {
        src: "/kubmin/workload-optimization-instancetype.webp",
        alt: "Kubmin region recommendation comparing estimated workload cost and grid carbon intensity",
        browserUrl: "kubmin.ksctl.com/workloads/analyse",
      },
    },
    {
      id: "quick-wins",
      chapter: "02d",
      title: "Quick Wins, Ranked by Impact",
      tag: "estimated savings, not just alerts",
      body: "Turn idle replicas, overprovisioned limits, and placement options into a ranked list of estimated monthly savings. Kubmin includes a kubectl command when a Kubernetes change applies.",
      metric: "ranked by estimated $/mo · kubectl-ready",
      hasCrossRef: false,
      glow: "cost",
      screenshot: {
        src: "/kubmin/workload-analyse-quickwins.webp",
        alt: "Kubmin Quick Wins showing ranked estimated savings and kubectl commands",
        browserUrl: "kubmin.ksctl.com/workloads/analyse",
      },
    },
    {
      id: "guided-observability",
      chapter: "02e",
      title: "Guided Observability",
      tag: "bring your stack or create one",
      body: "Keep Prometheus, Tempo, Loki, and Grafana, or let Kubmin deploy what is missing. OpenTelemetry and Kepler feed one release-level view of estimated workload cost and energy.",
      metric: "prometheus · tempo · loki · grafana · otel",
      hasCrossRef: false,
      glow: "primary",
      screenshot: {
        src: "/kubmin/guided-observability.webp",
        alt: "Kubmin guided observability setup — connect existing backends or let Kubmin deploy the missing pieces",
        browserUrl: "kubmin.ksctl.com/clusters/import/observability",
      },
    },
  ],
};

// ---- WHY ENERGY ----
export const whyEnergy = {
  displayHeading: {
    line1: { text: "CPU tracks", accent: "activity." },
    line2: { text: "Energy reveals", accent: "consumption." },
  },
  intro:
    "CPU tells you how busy a workload was, not how much useful work it completed. Put CPU, energy, and requests on the same timeline and idle loops, polling, and zero-work periods stand out.",
  kepler:
    "Kubmin uses Kepler — a CNCF project — for container-level energy attribution. Kepler reads hardware counters when available and uses hardware-trained models when they are not, which is common in cloud environments.",
  metricsIntro: "That energy feeds two different metrics:",
  metrics: [
    {
      name: "SCI",
      full: "Software Carbon Intensity",
      description:
        "the ISO/IEC 21031:2024 standard for carbon emissions per functional unit. SCI combines energy, carbon intensity, and embodied emissions within the declared software boundary.",
    },
    {
      name: "SEI",
      full: "Software Energy Intensity",
      description:
        "a provisional GSF pre-draft metric for facility energy per functional unit, with IT energy adjusted by PUE. SEI excludes grid carbon intensity and is not part of ISO/IEC 21031.",
    },
  ],
  combined:
    "Together, runtime cost estimates, SCI, SEI, and energy trends show efficiency and carbon impact in one view.",
  exhibit: {
    figLabel: "fig. 03 · one node, 24 hours",
    figMeta: "utilization vs energy vs work",
    bandLabel: ["idle baseline", "zero work · energy still used"],
    legend: [
      { key: "energy", label: "energy — demand over time" },
      { key: "cpu", label: "cpu — resource activity" },
      { key: "work", label: "requests served — useful work" },
    ],
    caption:
      "CPU and energy move together, but energy does not fall to zero when requests stop. Nodes still power memory, system services, and the platform. Divide that baseline by work completed and idle waste becomes visible.",
  },
  accuracyNote:
    "Energy is observed from hardware counters where available and modeled elsewhere. Compare like-for-like workloads, infrastructure, sampling windows, and model versions; treat modeled values as estimates, not meter-grade measurements.",
};

// ---- MEASUREMENT UNITS (interlude) ----
export const measurementUnit = {
  label: "interlude · ch. 03b",
  heading: "An hourly cost estimate is generic.",
  headingAccent: "Per request, it's yours.",
  intro:
    "Define the work your app does — request, job, transaction, or custom metric — with one annotation. Kubmin returns energy, SCI, and SEI per unit, with its workload cost estimate alongside.",
  sciNote:
    "ISO/IEC 21031:2024 calls this the functional unit — R in the SCI formula. Kubmin calls it your measurement unit and computes each result beside the workload from cluster energy, carbon, and pricing inputs.",
  unitsLabel: "declare work in your own vocabulary",
  units: ["request", "transaction", "job", "container-hour", "custom"],
  annotationTitle: "one annotation on your workload",
  annotationFile: "deployment.yaml",
  prLink: {
    label: "see how we added it to the Redis demo · PR #1",
    href: "https://github.com/ksctl/kubmin-demos/pull/1",
  },
  annotation: `kubmin.ksctl.com/measure: |
  version: 1
  containers:
    webserver:
      unit: container-hour
    api:
      unit: request
      scope: pod
      metric: http_requests_total
      match:
        pod: $KUBMIN_POD_NAME
        container: $KUBMIN_CONTAINER_NAME`,
  outputsTitle: "what you read back, per release",
  outputs: [
    { value: "kWh / request", note: "SEI — energy per measurement unit (PUE-adjusted)" },
    { value: "gCO₂e / request", note: "SCI — carbon per measurement unit" },
    { value: "$ / hour", note: "estimated workload cost" },
  ],
  insightCharts: {
    heading: "Two metrics. Two questions.",
    headingAccent: "Two questions.",
    intro:
      "Same workload, same moment; only the grid changes. SCI moves. SEI doesn't. Here's why.",
    charts: [
      {
        id: "sci",
        label: "SCI · carbon per request",
        tag: "gCO₂e / request",
        legend: [
          { key: "grid", label: "grid carbon intensity — where you run" },
          { key: "sci", label: "SCI — follows the grid" },
        ],
        caption:
          "The grid gets cleaner, so SCI falls. SCI includes where you run: carbon per request within the declared software boundary.",
        takeaway:
          "How carbon-efficient is this release? A cleaner grid or a more efficient image can both improve SCI.",
      },
      {
        id: "sei",
        label: "SEI · energy per request",
        tag: "kWh / request",
        legend: [
          { key: "grid", label: "grid carbon intensity — excluded from SEI" },
          { key: "sei", label: "SEI — energy per functional unit" },
        ],
        caption:
          "SEI stays flat because grid carbon is not part of the metric. It tracks facility energy per request.",
        takeaway:
          "Did this release use more energy for the same work? SEI isolates energy efficiency from the grid.",
      },
    ],
  },
};

// ---- HOW IT WORKS ----
export const howItWorks = {
  label: "Get Started",
  heading: "Three steps to",
  headingAccent: "release intelligence",
  steps: [
    {
      title: "Create or Import a Cluster",
      body: "Create a ksctl cluster or import EKS, AKS, GKE Standard, or self-managed Kubernetes with kubeconfig.",
    },
    {
      title: "Choose Your Observability Path",
      body: "Connect Prometheus, Tempo, Loki, and Grafana, or let Kubmin deploy what is missing. Kubmin adds its agent, Kepler, Gateway API, and OpenTelemetry Collector.",
    },
    {
      title: "Run a Release. See What Changed.",
      body: "Send OTLP telemetry to Kubmin, then run your workload. Kubmin compares image versions and ranks changes in estimated workload cost, energy, and resource efficiency.",
    },
  ],
  cta: { text: "Start Free", href: links.app },
  disclaimer:
    "Imported clusters must have cert-manager installed and healthy. Kubmin installs Gateway API CRDs during import and configures the Kubmin agent, Kepler, and OpenTelemetry Collector automatically.",
};

// ---- COMPARISON TABLE ----
export const comparisonTable = {
  label: "The Fit",
  heading: "How Kubmin fits",
  headingAccent: "after deployment",
  intro:
    "Kubmin complements billing, Kubernetes cost, and observability tools with a release-level runtime view.",
  competitors: [
    "Cloud billing tools",
    "Kubernetes cost tools",
    "Metrics dashboards",
    "kubmin",
  ],
  rows: [
    {
      capability: "Primary operating view",
      values: ["Account/service spend", "Cluster/workload allocation", "Configured telemetry", "✓ Image-version runtime evidence"],
    },
    {
      capability: "Source of cost figures",
      values: ["Provider billing records", "Pricing + allocation model", "Configured data source", "✓ Runtime cost estimate"],
    },
    {
      capability: "Release-level comparison",
      values: ["Map releases to billing", "Label-driven", "Build with labels + queries", "✓ Built around image versions"],
    },
    {
      capability: "Energy evidence",
      values: ["Add energy data", "Integration-dependent", "Configure energy metrics", "✓ Kepler built in"],
    },
    {
      capability: "Carbon & energy intensity",
      values: ["Varies by tool", "Varies by tool", "Build formulas", "✓ SCI carbon · SEI energy"],
    },
    {
      capability: "Placement analysis",
      values: ["Provider options", "Varies by tool", "Build data + rules", "✓ Region/instance tradeoffs"],
    },
    {
      capability: "Idle analysis",
      values: ["Billing/resource signals", "Varies by tool", "Build queries + rules", "✓ Workload-level detection"],
    },
    {
      capability: "Remediation path",
      values: ["Provider actions", "Varies by tool", "Build automation", "✓ Ranked estimates + kubectl"],
    },
    {
      capability: "Functional-unit normalization",
      values: ["Custom allocation", "Varies by tool", "Build queries", "✓ Annotation + application metric"],
    },
    {
      capability: "Observability approach",
      values: ["Separate integration", "Cluster-metrics integration", "Telemetry dashboard layer", "✓ Connect or deploy backends"],
    },
    {
      capability: "Setup approach",
      values: ["Connect billing scope", "Deploy/connect tooling", "Configure sources + queries", "✓ Create/import; collect runtime data"],
    },
  ],
  footer:
    "Kubmin's edge is the combined release view: estimated workload cost by image version alongside energy, SCI, and SEI per unit of work — after the release runs.",
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
      price: "$20.00",
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
      price: "$50.00",
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
      body: "Kepler attributes container energy from hardware counters where available and model-based estimates elsewhere",
      href: links.kepler,
    },
    {
      title: "OpenTelemetry-native",
      body: "Kubmin installs an OpenTelemetry Collector bridge for OTLP metrics, logs, and traces while keeping Prometheus, Tempo, Loki, and Grafana optional.",
      href: links.otel,
    },
    {
      title: "Green Software Foundation",
      body: "SCI-aligned carbon reporting with provisional SEI energy efficiency",
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
      a: "Kubmin is release intelligence for Kubernetes. After an image version runs, it shows estimated workload cost, CPU, and memory by version alongside energy, SCI, and SEI per unit of work — then ranks the next actions.",
    },
    {
      q: "How much money can kubmin save me?",
      a: `Kubmin finds savings opportunities in idle workloads, overprovisioning, and instance or region choices. Each finding includes an estimated monthly impact and, when applicable, a kubectl command.

These are workload cost estimates, not invoice data or guaranteed savings. Your bill changes only when a recommendation lets you reduce or change paid infrastructure.`,
      link: {
        text: "Read more",
        href: links.blog,
      },
    },
    {
      q: "What are the alternatives to kubmin?",
      a: `AWS Cost Explorer explains AWS billing. Kubernetes cost tools allocate cluster spend. Prometheus and Grafana collect and visualize telemetry.

Kubmin connects those views around the release: image-version comparisons, Kepler energy, estimated workload cost, SCI, SEI, functional units, and ranked fixes after the workload runs.`,
    },
    {
      q: "Do I need to change my deployment workflow?",
      a: "No. Kubmin is not a pre-deploy gate today. Label and annotate the workloads you want to track, then let the release run while Kubmin collects its runtime evidence. Keep your observability stack or let Kubmin deploy the missing pieces.",
    },
    {
      q: "How accurate are the energy measurements?",
      a: "Kepler uses hardware counters where available and models trained on hardware measurements elsewhere. Cloud readings are often estimates. Compare like-for-like workloads and infrastructure with the same sampling window and model; do not treat modeled energy as a meter reading.",
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
  headlinePrefix: "Every release leaves a",
  headlineAccent: "runtime footprint.",
  subtitle: "Connect a cluster. Run a release. See which image version raised estimated workload cost, energy, or waste.",
  journeyNote: "Join us on this journey — the future of software is measured.",
  primaryAction: { text: "Get Started", href: links.app },
  secondaryAction: { text: "Join Discord", href: links.discord },
  footerNote: "kubmin.ksctl.com · runtime evidence by image version · after it runs",
};
