// ============================================================
// KUBMIN PAGE — All content data
// ============================================================

export const meta = {
  title: "Kubmin — Track What Each Deploy Costs in Money and Efficiency",
  description:
    "Kubmin reveals per-workload cost, energy consumption, Running Efficiency, and SCI score. Compare release versions. The missing layer between your workloads and your bill.",
};

export const links = {
  app: "https://kubmin.ksctl.com",
  github: "https://github.com/ksctl",
  discord: "https://discord.ksctl.com",
  kepler: "https://sustainable-computing.io/",
  gsf: "https://sci.greensoftware.foundation/",
  blog: "https://dipankar-das.com/blog/kubelet-config-rabbit-hole-sizing-kubernetes-nodes/",
};

// ---- IMAGES ----
export const images = {
  logo: "/kubmin-logo-purple.svg",
  screenshots: {
    hero: "/kubmin/kubmin-workload-hero.png",
    redis: "/kubmin/kubmin-workload-redis.png",
  },
};

// ---- HERO ----
export const hero = {
  headline: "Deploy fast and know what each one costs in money and efficiency",
  punchline: "Everyone ships faster with AI. Nobody checks the cost. Kubmin does.",
  explain: "Per-workload cost and efficiency tracking across deployments. The missing layer between your workloads and your bill.",
  cta: { text: "Start Free", href: links.app },
  logo: images.logo,
  productName: "kubmin",

  trustBadges: [
    "Kepler (CNCF)",
    "SCI-aligned (GSF)",
    "Powered by ksctl",
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
  heading:
    "You're spending thousands on Kubernetes. But do you know what each workload actually costs?",
  problems: [
    {
      title: "No Per-Container Visibility",
      body: "AWS Cost Explorer shows you EC2 bills. Kubecost estimates pod costs. Neither tells you what a single container actually consumes in energy and compute — the real drivers of your bill.",
    },
    {
      title: "Overprovisioned and Flying Blind",
      body: "Most teams request 2-4x the resources their workloads actually use. Without per-workload waste detection, you're paying for idle CPU and memory every hour of every day.",
    },
    {
      title: "Deploys Make It Worse (Silently)",
      body: "You ship a new image version — maybe AI-generated, maybe hand-written. CPU goes up 15%. Memory creeps up. Nobody notices because no tool tracks efficiency changes between deployments. The waste compounds with every release.",
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
      value: "$0.11 vs $0.18",
      label: "cost gap — 8.6.1 vs 8.4.0",
      detail: "per tracked period",
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
  label: "What Kubmin Does",
  heading: "Six things no other tool does together",
  features: [
    {
      title: "Per-Image-Version Deep Profile",
      body: "Point kubmin at a specific image tag and get hourly SCI, energy consumption, CPU, memory, and cost — plus the full trend across that version's lifetime. Not generic pod metrics. Version-scoped visibility into what each build actually costs and consumes in production.",
      tag: "Your deploy's real footprint",
    },
    {
      title: "Release-over-Release Efficiency Diff",
      body: "Compare any two image versions across CPU, memory, energy, SCI, SEE, and runtime cost — per functional unit of work. Ship a new release and see within hours whether it regressed 30% on efficiency, before the regression compounds into your bill.",
      tag: "Release diff for efficiency, not code",
    },
    {
      title: "Workload Profile Classifier",
      body: "Kubmin classifies each workload as CPU-bound, memory-bound, general, or resource-starved — automatically, from runtime behavior. Idle-time percentage and hourly heatmaps show exactly when waste spikes. No more right-sizing blind.",
      tag: "Know what your workload actually is",
    },
    {
      title: "Smart Cluster Setup",
      body: "Spinning up a new cluster? Kubmin filters instance types against your workload profile and shows spec, hourly cost, and embodied carbon for each option. Region picker surfaces real grid carbon intensity and % renewable energy — so cluster decisions are informed, not guessed.",
      tag: "Right cluster before the first pod",
    },
    {
      title: "Placement & Region Recommender",
      body: "Running on the default instance type in us-east-1? Kubmin surfaces alternative instance types with similar or better performance at lower cost, plus alternative regions that cut your workload's running cost and run on a cleaner grid. Side-by-side tradeoffs, not guesswork.",
      tag: "Move once, save every hour",
    },
    {
      title: "Quick Wins — Ranked by Savings",
      body: "Kubmin turns every finding — idle replicas, overprovisioned limits, cheaper instance types, greener regions — into a ranked action list with estimated monthly cost savings and efficiency gains attached. Each wins ships with a copy-paste kubectl command. Open the dashboard, act on the top three.",
      tag: "Dollar-ranked actions, not alerts",
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

// ---- HOW IT WORKS ----
export const howItWorks = {
  label: "Get Started",
  heading: "Three steps to see",
  headingAccent: "what you're wasting",
  steps: [
    {
      title: "Sign Up & Create a Cluster",
      body: "Sign up at kubmin.ksctl.com and create your Kubernetes cluster from the dashboard. Kubmin provisions the full monitoring stack automatically — Prometheus, Kepler, and the kubmin agent. You don't install anything manually.",
    },
    {
      title: "Label Your Workloads",
      body: "Add one label and one annotation to the Deployments, StatefulSets, or DaemonSets you want to monitor. The dashboard shows you exactly what to add. That's the only configuration you do.",
    },
    {
      title: "See Your Results",
      body: "Kubmin aggregates data hourly and surfaces waste analysis, efficiency grades, cost breakdowns, and Quick Wins automatically. Open the dashboard and start saving.",
    },
  ],
  cta: { text: "Start Free", href: links.app },
  disclaimer:
    "Currently, clusters are created via ksctl. Support for importing existing clusters is coming soon.",
};

// ---- COMPARISON TABLE ----
export const comparisonTable = {
  label: "The Gap",
  heading: "What your current tools",
  headingAccent: "can't tell you",
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
      values: ["N/A", "~30 min", "Hours/Days", "~10 min"],
    },
  ],
  footer:
    "Kubmin doesn't replace your monitoring stack. It sees what your monitoring stack can't — the energy layer that drives real waste.",
};

// ---- PRICING ----
export const pricing = {
  label: "Pricing",
  heading: "Start free.",
  headingAccent: "Scale when you need to.",
  subheading:
    "Fixed monthly pricing. No per-node fees. No surprise bills. All plans include auto-deployed Prometheus, Kepler, and Grafana.",
  tiers: [
    {
      name: "Explore",
      price: "$0",
      period: "/month",
      features: [
        "1 cluster",
        "1 workload",
        "1 team member",
        "SCI tracking (2-day retention)",
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
        "5 clusters",
        "5 workloads",
        "10 team members",
        "Full waste analysis + SCI tracking",
        "Instance optimization",
        "Regional cost comparison",
        "Deployment comparison",
        "Quick Wins with kubectl commands",
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
        "20 clusters",
        "20 workloads",
        "50 team members",
        "Everything in Affordable",
        "Dedicated support",
      ],
      cta: "Start Premium",
      popular: false,
    },
  ],
  footer:
    "No hidden fees · Cancel anytime · All plans include Prometheus & Grafana",
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

None of these tools track per-workload energy consumption, compare efficiency across deployment versions, or provide SCI/SEE sustainability scores. Kubmin was built specifically because this gap existed.`,
    },
    {
      q: "Do I need to change my deployment workflow?",
      a: "No. Add one label and one annotation to the workloads you want to monitor. That's it. Kubmin works alongside your existing CI/CD pipeline. The full monitoring stack (Prometheus, Kepler, Grafana) is deployed automatically.",
    },
    {
      q: "How accurate are the energy measurements?",
      a: "Kubmin uses Kepler, which employs ML-based estimation models trained on real hardware data. In cloud environments, energy readings are estimates — but they're highly reliable for trend analysis and relative comparison between workloads, which is exactly what waste detection requires. The patterns matter more than absolute numbers.",
    },
    {
      q: "What clusters does kubmin support?",
      a: "Kubmin works with clusters created via ksctl — including EKS, AKS, GKE, K3s, and Kubeadm (both cloud-managed and self-managed). Support for importing existing clusters not created by ksctl is in active development.",
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
};

