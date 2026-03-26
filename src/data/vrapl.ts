// ============================================================
// Open VM Energy Manifesto — vRAPL
// An open letter to cloud providers
// Status: DRAFT
// ============================================================

export const meta = {
  title: "Open VM Energy Manifesto — ksctl",
  description:
    "An open call to cloud providers to expose real energy measurements to virtual machines. Replace estimates with real measurements. Make sustainability measurable.",
};

// ---- HERO ----
export const hero = {
  label: "An Open Letter",
  headline: "The hardware measures it. The hypervisor has it.",
  headlineAccent: "Your VM doesn't.",
  subheadline:
    "An open call to every cloud provider: let tenants see exactly how much energy their VMs consume in real time. Once that data exists, tools like Kepler can break it down to every container and process.",
};

// ---- THE PROBLEM ----
export const problem = {
  heading: "The gap between intention and measurement",
  paragraphs: [
    "Every major cloud provider has a sustainability pledge. Every one publishes a carbon dashboard — monthly, aggregated, weeks delayed. Yet not a single one gives tenants the one thing that would make software carbon intensity actionable: real-time energy measurements for the workloads they run.",
    "The best the ecosystem can offer today is estimation. Projects like Kepler use ML models to infer energy from CPU counters. Tools like Cloud Carbon Footprint reverse-engineer consumption from billing line items. These are impressive engineering efforts — and they are fundamentally limited by the absence of ground truth.",
    "The hardware already knows. On x86 servers, RAPL (Running Average Power Limit) reads energy at the socket level with hardware-grade accuracy. The hypervisor has this data. It is being withheld from the tenants who need it most.",
  ],
};

// ---- PRINCIPLES ----
export const principles = {
  heading: "Principles",
  headingAccent: "of Open VM Energy Telemetry",
  items: [
    {
      number: 1,
      title: "Measure, don't model",
      description:
        "Energy data exposed to tenants must originate from hardware counters, not from billing-derived estimates. Any hardware measurement — even imperfect — is closer to reality than reverse-engineering energy from cloud bills.",
    },
    {
      number: 2,
      title: "Per-VM, not per-account",
      description:
        "Aggregate carbon dashboards cannot drive workload-level optimization. Energy telemetry must be attributable to individual VM instances and consumable by existing observability stacks like Prometheus and OpenTelemetry.",
    },
    {
      number: 3,
      title: "Secure by design",
      description:
        "Rate limiting, noise injection, and domain aggregation are non-negotiable. Energy telemetry must never become a side-channel vector.",
    },
    {
      number: 4,
      title: "Opt-in, not mandatory",
      description:
        "Energy telemetry should be a configuration flag on VM creation — available to those who need it, invisible to those who don't.",
    },
    {
      number: 5,
      title: "Open format, open spec",
      description:
        "The telemetry format should be standardized across providers — OpenMetrics-compatible, documented publicly, and governed by a neutral body. No vendor lock-in on sustainability data.",
    },
    {
      number: 6,
      title: "Start with what exists",
      description:
        "Begin with CPU package energy on x86 where hardware measurement exists and the proportional attribution model is validated. Network, storage, and accelerator attribution should follow as separate, honest specifications.",
    },
  ],
};

// ---- WHAT WE'VE BUILT ----
export const whatWeveDone = {
  heading: "Why we wrote this",
  before: "We built ",
  kubminLabel: "kubmin",
  kubminHref: "/product/kubmin",
  after: " — a Kubernetes observability tool that tracks per-workload cost, energy consumption, and Software Carbon Intensity scores. It works. But in cloud environments, every energy number it shows is an estimate. The ML models behind tools like Kepler are the best available — and they're still models. We have no way to validate them against ground truth because ground truth is locked inside the hypervisor. Real energy measurements would transform estimates into auditable metrics — not just for kubmin, but for every tool in the ecosystem.",
};

// ---- THE ASK ----
export const theAsk = {
  heading: "What we're asking",
  items: [
    {
      title: "To cloud providers",
      points: [
        "Implement per-VM energy attribution at the hypervisor level using hardware energy counters and CPU scheduling data.",
        "Expose it as an opt-in VM configuration flag — default off, documented in public API references.",
        "Deliver readings via a secure, rate-limited channel at no more than one sample per 30 seconds with calibrated noise injection.",
        "Publish the attribution methodology, security model, and measurement source openly.",
      ],
    },
    {
      title: "To the ecosystem",
      points: [
        "If you build tools that estimate energy — co-sign this manifesto. The more tools that would consume this data, the stronger the case for providers to produce it.",
        "If you run workloads on public cloud and care about energy transparency — tell your provider. Feature requests from paying customers move roadmaps.",
      ],
    },
  ],
};

// ---- CALL TO ACTION ----
export const cta = {
  heading: "This is a conversation starter, not a finished standard.",
  description:
    "We're applying the principle of the Open Cloud Manifesto to the one resource cloud providers measure but don't share — energy. Join the discussion.",
  actions: [
    {
      text: "Join the Discussion",
      href: "https://github.com/ksctl/vrapl/discussions/6",
      variant: "primary" as const,
    },
    {
      text: "View on GitHub",
      href: "https://github.com/ksctl/vrapl",
      variant: "secondary" as const,
    },
  ],
};

// ---- SIGNATORIES ----
export const signatories = {
  heading: "Signatories",
  description:
    "Organizations and projects that support open VM energy telemetry.",
  list: [{ name: "ksctl", role: "Author", url: "https://ksctl.com" }],
};

// ---- REFERENCES ----
export const references = {
  heading: "References",
  items: [
    {
      title: "RAPL in Action: Experiences in Using RAPL for Power Measurements",
      authors: "Khan et al., ACM TOMPECS 2018",
      url: "https://dl.acm.org/doi/10.1145/3177754",
    },
    {
      title: "PLATYPUS: Software-based Power Side-Channel Attacks on x86",
      authors: "Lipp et al., 2020",
      url: "https://platypusattack.com/",
    },
    {
      title:
        "Kepler: Kubernetes-based Efficient Power Level Exporter",
      authors: "CNCF Sandbox Project",
      url: "https://sustainable-computing.io/",
    },
    {
      title: "ISO/IEC 21031:2024 — Software Carbon Intensity (SCI)",
      authors: "Green Software Foundation / ISO",
      url: "https://sci.greensoftware.foundation/",
    },
    {
      title: "Container-level Energy Observability in Kubernetes Clusters",
      authors: "Pijnacker et al., 2025",
      url: "https://arxiv.org/html/2504.10702v1",
    },
    {
      title:
        "Real-Time Energy and Carbon Standard for Cloud Providers",
      authors: "Green Software Foundation",
      url: "https://greensoftware.foundation/articles/real-time-cloud-ratified-a-major-step-toward-transparent-sustainable-cloud-comput/",
    },
    {
      title: "EP-003: VM CPU Power Modeling for Kepler — Proposal for ML estimation when RAPL is unavailable",
      authors: "Kepler / CNCF",
      url: "https://github.com/sustainable-computing-io/kepler/pull/2291",
    },
  ],
};
