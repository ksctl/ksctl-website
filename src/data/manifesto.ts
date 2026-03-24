// ============================================================
// MANIFESTO — Open Energy Telemetry for Virtual Machines
// ============================================================

export const meta = {
  title: "The Open VM Energy Manifesto — ksctl",
  description:
    "An open call to cloud providers to expose real energy measurements to virtual machines. Replace estimates with physics. Make sustainability measurable.",
};

// ---- HERO ----
export const hero = {
  label: "A Manifesto",
  headline: "You can't optimize what you can't measure.",
  headlineAccent: "Give VMs their energy data.",
  subheadline:
    "An open call to AWS, Azure, GCP, and every cloud provider: expose real energy telemetry to tenants. Replace ML estimates with physics. Make sustainability auditable.",
};

// ---- THE PROBLEM ----
export const problem = {
  heading: "The gap between intention and measurement",
  paragraphs: [
    "Every major cloud provider has a sustainability pledge. Every one publishes a carbon dashboard — monthly, aggregated, weeks delayed. Yet not a single one gives tenants the one thing that would make software carbon intensity actionable: real-time energy measurements for the workloads they run.",
    "Today, the best the ecosystem can offer is estimation. Projects like Kepler (CNCF) use ML models trained on bare-metal hardware data to infer energy from CPU performance counters. Tools like Cloud Carbon Footprint reverse-engineer consumption from billing line items. These are impressive engineering efforts — and they are fundamentally limited by the absence of ground truth.",
    "The hardware already knows. Intel RAPL reads energy counters at the socket level every millisecond — package, core, and DRAM domains with ~3–4% accuracy via integrated voltage regulator current sensing. AMD RAPL provides package and per-core counters through a power model using over 1,300 on-die monitors. On Intel Xeon servers, the hypervisor has measured energy data. On AMD EPYC, it has modeled data. On ARM (Graviton, Ampere Altra), nothing — no equivalent interface exists. In every case, what data is available is being withheld from the tenants who need it most.",
  ],
};

// ---- THE PHYSICS ----
export const physics = {
  heading: "The math is straightforward",
  headingAccent: "— the hypervisor already has every input",
  intro:
    "A hypervisor that reads RAPL counters and tracks per-VM scheduling has everything it needs to produce a weighted energy attribution:",
  formula: {
    expression:
      "E_vm = E_host × (T_vm / T_total) + ε",
    terms: [
      {
        symbol: "E_host",
        meaning:
          "Total host energy from RAPL Package domain (MSR 0x611 on Intel, 0xC001029B on AMD). On Intel Xeon, DRAM energy (MSR 0x619) can be added separately. On AMD EPYC, memory controller energy is already included in the Package counter since it resides on the I/O die.",
      },
      {
        symbol: "T_vm",
        meaning: "CPU time consumed by the VM's vCPU threads in the scheduling interval",
      },
      {
        symbol: "T_total",
        meaning: "Total CPU time across all vCPU threads and host processes",
      },
      {
        symbol: "ε",
        meaning:
          "Non-deterministic noise injected to prevent side-channel information leakage between tenants",
      },
    ],
  },
  details: [
    {
      title: "CPU energy (Intel and AMD)",
      description:
        "The strongest signal. CPU power correlates directly with active time. The proportional model is used by Kepler, Scaphandre, and the academic EPAVE framework. On Intel Xeon (Haswell+), Package RAPL is hardware-measured via FIVR current sensing (~3–4% MAPE vs external power meters, validated by Khan et al. 2018). On AMD EPYC, Package RAPL is model-based using 1,300+ on-die monitors — less validated but includes memory controller energy since it sits on the I/O die.",
    },
    {
      title: "DRAM energy (Intel Xeon only)",
      description:
        "Intel Xeon exposes a separate DRAM domain (MSR 0x619) measured via voltage regulator current sensing, with 5–8% MAPE under load. AMD EPYC does not implement DRAM RAPL at all — the MSR does not exist (GP fault). However, on AMD the memory controller's energy is baked into the Package counter. The practical difference: Intel gives you a CPU + DRAM breakdown, AMD gives you a single combined number. Both capture the energy — the granularity differs.",
    },
    {
      title: "What this doesn't cover",
      description:
        "Network I/O, storage I/O, fans, PSU conversion losses, and accelerator energy are outside RAPL's measurement perimeter. Validated studies show RAPL reads ~17–18% lower than external wall-power meters — that gap is these components. This manifesto starts with CPU package energy — the domain where RAPL provides direct measurement, the proportional model is validated, and the data is actionable for workload-level optimization. Absolute system power is not the goal; relative per-VM trends are.",
    },
    {
      title: "ARM servers (Graviton, Ampere Altra)",
      description:
        "ARM has no RAPL equivalent. The SCMI (System Control and Management Interface) protocol depends entirely on SoC vendor implementation, and no cloud provider exposes power data from ARM instances. AWS Graviton does not support IPMI, BMC, or any power monitoring interface. For ARM, the ask is different: providers must expose BMC or smart-PDU level measurements via instance metadata, even if the granularity is coarser than x86 RAPL.",
    },
  ],
};

// ---- SECURITY ----
export const security = {
  heading: "We know why this hasn't happened",
  headingAccent: "— and we have mitigations",
  intro:
    "The PLATYPUS attack (2020) demonstrated that high-frequency, high-precision RAPL readings are a side-channel vector — capable of recovering AES keys from co-located workloads. This is the legitimate reason cloud providers restrict MSR access. But withholding all energy data is overcorrection. The attack requires microsecond-resolution sampling over sustained periods. The defense is straightforward:",
  mitigations: [
    {
      title: "Rate limiting",
      description:
        "Expose readings at most once per 30 seconds. PLATYPUS requires thousands of samples per second — 0.033 Hz is a ~30,000× reduction in temporal resolution, destroying the statistical signal. The 30-second interval also safely handles RAPL 32-bit counter overflow: even AMD EPYC at 1.5× TDP burst (540W) overflows in ~121 seconds, giving 4× safety margin. Intel's larger counters (262 kJ range vs AMD's 65.5 kJ) overflow even slower.",
    },
    {
      title: "Noise injection",
      description:
        "Add calibrated non-deterministic noise (ε) to each reading. This makes it computationally infeasible to isolate a co-tenant's workload signature while preserving the tenant's own energy trends.",
    },
    {
      title: "Aggregation",
      description:
        "Report per-VM totals (CPU + DRAM combined), not per-domain breakdowns. Reducing dimensionality limits the attacker's ability to correlate specific operations.",
    },
    {
      title: "Opt-in by default",
      description:
        "Expose energy telemetry as a VM creation flag (Terraform, cloud API, console) — default off. Only tenants who need it, get it. This limits the attack surface to self-selected workloads.",
    },
  ],
  closing:
    "These mitigations are not theoretical. Intel already deploys energy filtering in microcode (IPU 2024.3) that adds proportional noise to RAPL readings — active on cloud bare-metal instances today. Our proposal adds rate limiting and aggregation on top. The resulting signal is strictly less informative to an attacker than the CPU performance counters (instructions retired, cache misses, branch mispredictions) that cloud providers already expose to every VM via perf.",
};

// ---- WHAT EXISTS TODAY ----
export const currentState = {
  heading: "What exists today — and why it's not enough",
  tools: [
    {
      name: "Kepler (CNCF)",
      what: "ML-model-based energy estimation from performance counters",
      limitation:
        "Models are trained on bare-metal data that may not match the target hardware. Recent independent evaluation (Pijnacker et al., 2025) found container-level accuracy insufficient for absolute measurement. Patterns are reliable; magnitudes are not.",
    },
    {
      name: "Scaphandre",
      what: "Open-source agent that reads RAPL and attributes per-process. Already supports QEMU virtiofs passthrough for VM energy data.",
      limitation:
        "Requires hypervisor-side installation — impossible on public cloud without provider cooperation.",
    },
    {
      name: "AWS Customer Carbon Footprint Tool",
      what: "Monthly aggregate carbon emissions at the billing account level",
      limitation:
        "2–3 month data lag. No per-workload granularity. No energy data — only derived carbon.",
    },
    {
      name: "Azure Carbon Optimization",
      what: "Per-resource emissions with REST API access",
      limitation:
        "Carbon derived from billing, not measured energy. No real-time signal.",
    },
    {
      name: "GCP Carbon Footprint",
      what: "Hourly carbon data per project and region — most granular of the three",
      limitation:
        "Still carbon-from-billing, not energy-from-hardware. No per-VM energy breakdown.",
    },
    {
      name: "QEMU RAPL Passthrough (v9.1.0, Sept 2024)",
      what: "MSR-level passthrough via KVM_X86_SET_MSR_FILTER — guest reads MSR 0x611, KVM exits to QEMU, QEMU returns computed Package energy based on vCPU time ratios. Uses qemu-vmsr-helper privileged daemon.",
      limitation:
        "Package domain only — no DRAM, no Core, no PSys. Intel only (AMD support unmerged). 1-second polling granularity. No noise injection, no rate limiting. Works on bare metal with QEMU/KVM only — proves the mechanism but not suitable for multi-tenant public cloud as-is.",
    },
  ],
  summary:
    "The open-source ecosystem has built the estimation layer. The cloud providers have the measurement layer. The gap between them is a policy decision, not a technical one.",
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
        "Energy data exposed to tenants must originate from hardware counters (RAPL on x86, BMC/IPMI on ARM), not from billing-derived estimates. On Intel Xeon, this means hardware-measured energy with ~3–4% accuracy. On AMD EPYC, this means on-die-model-based energy — imperfect but far closer to reality than ML estimation from performance counters. On ARM, this means system-level power from the baseboard management controller. Any origin is better than reverse-engineering energy from cloud bills.",
    },
    {
      number: 2,
      title: "Per-VM, not per-account",
      description:
        "Aggregate carbon dashboards cannot drive workload-level optimization. Energy telemetry must be attributable to individual VM instances, exposable as a time series, and consumable by existing observability stacks (Prometheus, OpenTelemetry).",
    },
    {
      number: 3,
      title: "Secure by design",
      description:
        "Rate limiting (≤1 sample per 30 seconds), noise injection, and domain aggregation are non-negotiable. Energy telemetry must never become a side-channel vector. Security review should be continuous and public.",
    },
    {
      number: 4,
      title: "Opt-in, not mandatory",
      description:
        "Energy telemetry should be a configuration flag on VM creation — available to those who need it, invisible to those who don't. Default off. Expressible in Terraform, cloud SDKs, and console UIs.",
    },
    {
      number: 5,
      title: "Open format, open spec",
      description:
        "The telemetry format should be standardized across providers — OpenMetrics-compatible, documented publicly, and governed by a neutral body (CNCF, Green Software Foundation, or equivalent). No vendor lock-in on sustainability data.",
    },
    {
      number: 6,
      title: "Start with Package energy on x86",
      description:
        "The RAPL Package domain is where hardware measurement exists (Intel) or on-die modeling is best (AMD), and the CPU-time proportional attribution model is scientifically validated. On Intel Xeon, DRAM can be added as a separate domain. On AMD EPYC, memory controller energy is already in the Package counter. Network, storage, and accelerator attribution should follow as separate, honest specifications. ARM servers need a different approach entirely — system-level BMC power divided by VM share.",
    },
  ],
};

// ---- WHAT WE'VE DONE ----
export const whatWeveDone = {
  heading: "What we've built",
  headingAccent: "— and where we hit the wall",
  intro:
    "At ksctl, we built kubmin — a Kubernetes observability tool that tracks per-workload cost, energy consumption, and SCI scores. It uses Kepler for energy estimation and aligns with the Green Software Foundation's SCI specification.",
  points: [
    "kubmin shows teams exactly which deployments waste energy and money — per container, per namespace, per cluster.",
    "It calculates Software Carbon Intensity (SCI) and Software Energy Efficiency (SEE) scores that make efficiency regressions visible alongside cost regressions.",
    "But in cloud environments, every energy number kubmin shows is an estimate. The ML model behind Kepler is the best available — and it's still a model. We have no way to validate it against ground truth because ground truth is locked inside the hypervisor.",
    "Real energy measurements would transform kubmin's estimates into auditable metrics. It would do the same for every tool in the ecosystem — Kepler, Cloud Carbon Footprint, Scaphandre, and the dozens of internal tools enterprises build for ESG reporting.",
  ],
};

// ---- THE ASK ----
export const theAsk = {
  heading: "What we're asking",
  items: [
    {
      title: "To cloud providers",
      points: [
        "Implement per-VM energy attribution at the hypervisor level using RAPL (or equivalent hardware counters) and CPU scheduling data.",
        "Expose it as an opt-in VM configuration flag — default off, documented in public API references.",
        "Deliver readings via a lightweight channel (virtio-console, instance metadata endpoint, or equivalent) at ≤1 sample per 30 seconds with calibrated noise injection.",
        "Publish the attribution methodology, security model, noise parameters, and measurement source (hardware-measured vs model-based) openly. Disclose which RAPL domains are used and what the ~17–18% gap to wall power represents.",
        "For ARM-based instances (Graviton, Ampere Altra) where no RAPL equivalent exists: expose system-level power from BMC or smart PDU, attributed proportionally. Coarser granularity is acceptable — any measurement beats no measurement.",
      ],
    },
    {
      title: "To the CNCF and Green Software Foundation",
      points: [
        "Charter a joint working group on VM-level energy telemetry standards.",
        "Define an OpenMetrics-compatible schema for energy readings (joules, watts, attribution method, confidence interval).",
        "Maintain a public test suite that validates provider implementations against the spec.",
      ],
    },
    {
      title: "To the ecosystem",
      points: [
        "If you build tools that estimate energy — Kepler, Scaphandre, Cloud Carbon Footprint, or internal platforms — co-sign this manifesto. The more tools that would consume this data, the stronger the case for providers to produce it.",
        "If you run workloads on public cloud and care about energy transparency — tell your provider. Feature requests from paying customers move roadmaps.",
      ],
    },
  ],
};

// ---- CALL TO ACTION ----
export const cta = {
  heading: "This is a conversation starter, not a finished standard.",
  description:
    "The Open Cloud Manifesto said it best in 2009: 'This document is meant to begin the conversation, not define it.' We're applying that principle to the one resource cloud providers measure but don't share — energy.",
  actions: [
    {
      text: "Read the Technical Appendix",
      href: "#technical-appendix",
      variant: "primary" as const,
    },
    {
      text: "View on GitHub",
      href: "https://github.com/ksctl",
      variant: "secondary" as const,
    },
  ],
};

// ---- TECHNICAL APPENDIX ----
export const technicalAppendix = {
  heading: "Technical Appendix",
  headingAccent: "— for those who want the details",
  sections: [
    {
      title: "RAPL domains: Intel vs AMD vs ARM",
      content:
        "Intel RAPL exposes energy counters via MSRs updated every ~1ms. On Intel Xeon (Haswell+): Package (MSR 0x611, entire socket — measured via FIVR current sensing, ~3–4% MAPE), Core/PP0 (MSR 0x639), Uncore/PP1 (MSR 0x641), DRAM (MSR 0x619, measured via VR IMON, 5–8% MAPE), and PSys/Platform (MSR 0x64D, OEM-dependent). Energy unit: 61 µJ/tick (ESU=14), 32-bit counters with 262 kJ range. AMD RAPL uses different MSR addresses: Package (0xC001029B), Per-Core (0xC001029A — unique to AMD, per physical core not aggregate). Energy unit: 15.3 µJ/tick (ESU=16), 64-bit counters on Zen 4+ (no overflow concern). AMD has NO DRAM domain — reading Intel's DRAM MSR (0x619) on AMD triggers a GP fault. AMD RAPL is model-based using on-die monitors, not hardware-measured. ARM (Graviton, Ampere Altra) has no RAPL equivalent — SCMI exists but no cloud provider exposes power sensors from it.",
    },
    {
      title: "The proportional attribution model",
      content:
        "Given N VMs on a host, each VM's energy share is: E_vm(i) = E_active × (T_vm(i) / Σ T_vm) + E_idle × (R_vm(i) / Σ R_vm), where T is CPU time consumed (dynamic/active attribution) and R is resource reservation in cores (static/idle attribution). This two-component model (EPAVE, Kurpicz et al. 2016) separates the energy cost of doing work from the energy cost of existing. For DRAM, replace CPU time with last-level cache misses or memory bandwidth as the weighting metric.",
    },
    {
      title: "Why 30-second sampling defeats PLATYPUS and handles overflow",
      content:
        "The PLATYPUS attack (Lipp et al., 2020, CVE-2020-8694/8695) requires ~1000 Hz RAPL sampling. At 1 sample per 30 seconds (0.033 Hz), temporal resolution drops ~30,000×, destroying the statistical signal. Intel already deploys microcode energy filtering (IPU 2024.3) that adds proportional noise — observed active on AWS bare-metal instances. The 30-second interval also solves counter overflow: RAPL uses 32-bit energy counters that wrap based on power draw and energy unit. AMD EPYC (ESU=16, 65.5 kJ range) at 360W TDP overflows in ~182 seconds; at peak burst (540W) in ~121 seconds. Intel Xeon (ESU=14, 262 kJ range) at 500W overflows in ~524 seconds. A 30-second sample rate provides 4× safety margin even for the worst case (AMD at burst). AMD Zen 4+ uses 64-bit package counters, eliminating overflow entirely for that domain. For comparison: perf counters already exposed to every VM (instructions, cache misses) leak more per sample than a noised, rate-limited energy reading.",
    },
    {
      title: "Delivery mechanisms",
      content:
        "Three viable options, ordered by implementation complexity: (1) Instance metadata endpoint — HTTP GET to a well-known IP (like 169.254.169.254/latest/energy), simplest for providers already running IMDS. (2) Virtio-console port — host writes to a Unix socket, guest reads from /dev/vportXpY, no network stack needed. Already used by QEMU for guest-host communication. (3) Virtiofs mount — host writes metrics to a shared directory, guest mounts it read-only. This is what Scaphandre uses today for QEMU/KVM.",
    },
    {
      title: "Reference: existing implementations",
      content:
        "QEMU RAPL MSR passthrough (QEMU 9.1.0, Sept 2024): uses KVM_X86_SET_MSR_FILTER to trap guest RDMSR on 0x611, a dedicated thread polls host RAPL every 1 second, distributes energy to vCPUs by utime+stime ratio. Only Package domain — no DRAM, no PP0, no PSys. Intel only (AMD patch submitted, not merged). qemu-vmsr-helper: privileged daemon to overcome post-CVE-2020-8694 root-only RAPL restriction. Scaphandre QEMU exporter: computes per-VM energy on the hypervisor, shares via virtiofs mount. Kepler (CNCF): CPU-time proportional model in production, but Pijnacker et al. (2025) found container-level attribution 'not at a satisfactory level'. EPAVE (IEEE, 2016): formalizes the two-component model. VAMPIRE (CMU, 2018): validates DRAM modeling at ~7% MAPE (DDR3 only, unvalidated for DDR4/DDR5).",
    },
  ],
};

// ---- SIGNATORIES (placeholder for future use) ----
export const signatories = {
  heading: "Signatories",
  description:
    "Organizations and projects that support open VM energy telemetry. If your project would benefit from real energy measurements in cloud VMs, add your name.",
  list: [
    { name: "ksctl", role: "Author", url: "https://ksctl.com" },
  ],
};

// ---- REFERENCES ----
export const references = {
  heading: "References & Further Reading",
  items: [
    {
      title: "PLATYPUS: Software-based Power Side-Channel Attacks on x86",
      authors: "Lipp et al., 2020",
      url: "https://platypusattack.com/",
    },
    {
      title: "EPAVE: Energy-Proportional Accounting in VM-based Environments",
      authors: "Kurpicz et al., IEEE 2016",
      url: "https://ieeexplore.ieee.org/document/7445404/",
    },
    {
      title: "VAMPIRE: Variation-Aware Model of Memory Power",
      authors: "Ghose et al., CMU 2018",
      url: "https://www.pdl.cmu.edu/PDL-FTP/associated/18sigmetrics_vampire.pdf",
    },
    {
      title: "Kepler: Kubernetes-based Efficient Power Level Exporter",
      authors: "CNCF Sandbox Project",
      url: "https://sustainable-computing.io/",
    },
    {
      title: "Scaphandre: Energy Consumption Metrology Agent",
      authors: "Hubblo",
      url: "https://github.com/hubblo-org/scaphandre",
    },
    {
      title: "ISO/IEC 21031:2024 — Software Carbon Intensity (SCI)",
      authors: "Green Software Foundation / ISO",
      url: "https://sci.greensoftware.foundation/",
    },
    {
      title: "QEMU RAPL MSR Passthrough Documentation",
      authors: "QEMU Project",
      url: "https://www.qemu.org/docs/master/specs/rapl-msr.html",
    },
    {
      title: "Idle Power Matters: Kepler Metrics for Public Cloud",
      authors: "CNCF TAG Environmental Sustainability",
      url: "https://tag-env-sustainability.cncf.io/blog/2024-06-idle-power-matters-kepler-metrics-for-public-cloud-energy-efficiency/",
    },
    {
      title: "Container-level Energy Observability in Kubernetes Clusters",
      authors: "Pijnacker et al., 2025",
      url: "https://arxiv.org/html/2504.10702v1",
    },
    {
      title: "Real-Time Energy and Carbon Standard for Cloud Providers",
      authors: "Green Software Foundation",
      url: "https://greensoftware.foundation/articles/real-time-cloud-ratified-a-major-step-toward-transparent-sustainable-cloud-comput/",
    },
    {
      title: "RAPL in Action: Experiences in Using RAPL for Power Measurements",
      authors: "Khan et al., ACM TOMPECS 2018",
      url: "https://dl.acm.org/doi/10.1145/3177754",
    },
    {
      title: "A Validation of DRAM RAPL Power Measurements",
      authors: "Desrochers et al., MEMSYS 2016",
      url: "https://dl.acm.org/doi/abs/10.1145/2989081.2989088",
    },
    {
      title: "An Experimental Comparison of Software-Based Power Meters",
      authors: "Ostapenco, Jay, Lefevre — CCGrid 2023",
      url: "https://inria.hal.science/hal-04030223",
    },
    {
      title: "Intel RAPL Energy Reporting Advisory (PLATYPUS Mitigations)",
      authors: "Intel — INTEL-SA-00389",
      url: "https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/advisory-guidance/running-average-power-limit-energy-reporting.html",
    },
    {
      title: "Linux Kernel Powercap Framework Documentation",
      authors: "Linux Kernel",
      url: "https://docs.kernel.org/power/powercap/powercap.html",
    },
  ],
};
