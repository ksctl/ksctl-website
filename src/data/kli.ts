// ============================================================
// KLI PAGE — All content data
// ============================================================

export const meta = {
  title: "kli (archived) - Multi-cloud Kubernetes CLI",
  description: "kli is an archived multi-cloud Kubernetes provisioning CLI. No longer maintained. Source, docs and release binaries remain available as a record of the work.",
};

export const archive = {
  status: "ARCHIVED - OCT 2026",
  heading: "kli is archived.",
  lede: "kli was the CLI over the ksctl engine: one command, any cloud, carbon-aware region selection. It shipped 27 releases across AWS, Azure, Civo, and self-managed clusters. It is no longer maintained.",
  facts: ["27 releases", "AWS / Azure / Civo", "Apache-2.0", "No longer maintained"],
  reasons: {
    heading: "Why",
    subheading: "Three reasons, in order of how much they mattered.",
    items: [
      {
        title: "Kubmin took the question further.",
        body: "kli could pick an efficient region at create time. It could not tell you what your workloads actually cost or emitted afterwards, per release, per image tag. That turned out to be the part people needed.",
      },
      {
        title: "Provisioning whole clusters is a full-time commitment.",
        body: "New cloud APIs, new Kubernetes versions, new provider quirks. I cannot honestly give it that alongside everything else I build.",
      },
      {
        title: "Stopping is part of engineering.",
        body: "A tool that says it is unmaintained is more useful than one that quietly rots. Nobody should be shipping production on top of kli in 2026.",
      },
    ],
  },
  now: {
    heading: "What I build now",
    subheading: "The same questions, taken further. These are maintained.",
    items: [
      {
        name: "Kubmin",
        body: "Per-workload cost, efficiency and SCI/SEI tracking, including release-over-release diffs per image tag.",
        href: "/product/kubmin",
      },
      {
        name: "infai",
        body: "One profile shape for llama.cpp and vLLM, live tokens/sec plus CPU, RAM and VRAM telemetry.",
        href: "https://infai.dipankar-das.com",
      },
      {
        name: "infaiw",
        body: "A daemon-based harness where sidecar loops must pass an acceptance check and every event lands on a durable timeline.",
        href: "https://infai.dipankar-das.com",
      },
    ],
  },
  stillUsing: {
    heading: "Still using kli?",
    items: [
      "Source, documentation and release binaries stay available as they are.",
      "No support, no security updates, no new provider or Kubernetes version support.",
      "Bugs will not be fixed. If a cloud API changes and kli breaks, it stays broken.",
      "If you are migrating off: kubectl, kubeadm or K3s, and Terraform cover what kli was wrapping underneath anyway.",
    ],
  },
  maintainer: {
    heading: "Want to take over?",
    body: "If you still depend on kli and want to become its maintainer, say so. The code is Apache-2.0 and the surface area is small enough for one person.",
    ctas: [
      { text: "Reach out on Discord", href: "https://discord.ksctl.com" },
      { text: "Open an issue", href: "https://github.com/ksctl/kli/issues" },
    ],
  },
  history: {
    heading: "What kli did",
    body: "Everything below is kept as a record of what was built: multi-cloud provisioning, carbon-aware region selection, sustainability metrics, and the release notes. Read it as history, not as a feature list.",
  },
};

export const hero = {
  logo: "/kli-logo.svg",
  productName: "kli",
  tagline: "Simplify Kubernetes cluster Ops by single command, archived",
  description: "Single Command Highly Available Kubernetes cluster across cloud providers plus sustanability metrics and cost optimization strategies. Archived in November 2026.",
  trustPills: [
    "Single binary",
    "No Terraform",
    "No Ansible",
    "No YAML sprawl",
  ],
  primaryCta: { text: "Get started", href: "https://docs.kli.ksctl.com/docs/getting-started/" },
  secondaryCta: { text: "Explore Features", href: "https://docs.kli.ksctl.com/docs/features/" },
  githubLink: "https://github.com/ksctl/kli",
  installCommand: "curl -sSfL https://get.kli.ksctl.com | python3 -",
  terminal: {
    command: "kli cluster create",
    steps: [
      { text: "Finding most eco-friendly regions based on carbon intensity...", color: "blue" },
      { text: "Region eu-west-2 selected", color: "blue", details: "68% renewable energy | $0.043/hour" },
      { text: "Setting up network components with optimized configurations", color: "blue" },
      { text: "Provisioning control plane with energy-efficient settings", color: "blue" },
      { text: "Adding worker nodes with auto-scaling policies", color: "blue" }
    ],
    successText: "Cluster 'eco-cluster' successfully created!",
    stats: "Estimated cost: $31.03/month | Carbon reduction: 45% vs. standard"
  }
};

export const features = {
  badge: "Features",
  heading: "Smart Kubernetes Management",
  subheading: "What kli could do: one-command clusters across providers, with sustainability and cost built into the decision rather than bolted on afterwards.",
  items: [
    {
      title: "Simplified Cluster Setup",
      description: "Create fully functional clusters with one command. Supports all major cloud providers and self-managed Kubernetes solutions.",
      command: "kli cluster create"
    },
    {
      title: "Developer Velocity",
      description: "Spin up clusters in minutes for faster workflows. Intuitive CLI reduces the learning curve for development teams from learning terraform and juggling multiple tools to near zero configuration.",
      stats: { label: "Deployment speed", value: "80% faster", percentage: 80 }
    },
    {
      title: "Dynamic Region Switching",
      description: "Intelligently switches regions to optimize costs and reduce carbon footprint while maintaining your workload specifications.",
      stats: [
        { label: "Cost Reduction", value: "-35%" },
        { label: "Carbon Impact", value: "-42%" }
      ]
    },
    {
      title: "Eco-friendly Infrastructure",
      description: "Prioritize eco-friendly infrastructure with data-driven metrics on carbon intensity and renewable energy usage.",
      bullets: ["Carbon intensity tracking", "Renewable energy prioritization"],
      link: { text: "Learn more", href: "https://docs.kli.ksctl.com/docs/features/" }
    }
  ],
  cliDemo: {
    badge: "Command Line Interface",
    heading: "Simple Commands, Powerful Results",
    description: "The CLI was built for simplicity without sacrificing power: one binary, one command, no Terraform or Ansible to wire up first.",
    bullets: [
      "Create clusters across any cloud provider",
      "Scale up and down with a single command",
      "Intelligent resource optimization"
    ],
    cta: { text: "View All Commands", href: "https://docs.kli.ksctl.com/docs/commands/" },
    terminal: {
      command: "kli cluster create",
      steps: [
        { text: "Validating configuration...", color: "blue" },
        { text: "Setting up network components with optimized routes", color: "blue" },
        { text: "Provisioning control plane with high availability", color: "blue" },
        { text: "Adding worker nodes (3) with autoscaling enabled", color: "blue" },
        { text: "Installing kli services and optimizations", color: "blue" }
      ],
      successText: "Cluster 'prod-cluster' successfully created!",
      note: "Access kubeconfig saved to: ~/.kube/config"
    }
  }
};

export const howItWorks = {
  badge: "Simple Process",
  heading: "How kli Worked",
  subheading: "From installation to production-ready Kubernetes clusters in minutes, not hours",
  steps: [
    {
      number: 1,
      title: "Install kli",
      description: "Installed with a single command on Linux, macOS and Windows via WSL. Prebuilt binaries still exist on GitHub Releases; the install script is no longer maintained.",
      command: "# archived - releases remain on github.com/ksctl/kli/releases",
      terminal: [
        { text: "INFO Downloading kli...", color: "blue" },
        { text: "INFO Installing to /usr/local/bin/kli...", color: "blue" },
        { text: "SUCCESS kli installed! 🚀", color: "green" },
        { text: "kli v2.9.0", color: "default" }
      ]
    },
    {
      number: 2,
      title: "Define Your Cluster",
      description: "Specify your requirements with simple CLI flags or a configuration file. Let kli handle the complexity.",
      bullets: [
        "Select your cloud provider",
        "Choose eco-friendly regions",
        "Set node counts and sizes"
      ]
    },
    {
      number: 3,
      title: "Create Your Cluster",
      description: "Single command deployment with smart defaults. kli handles all the infrastructure provisioning.",
      command: "kli cluster create",
      terminal: [
        { text: "INFO Scanning for optimal deployment regions...", color: "blue" },
        { text: "INFO Selected eu-west-2 for lowest carbon intensity (67% renewable)", color: "blue" },
        { text: "INFO Creating VPC and networking components...", color: "blue" },
        { text: "INFO Deploying control plane...", color: "blue" },
        { text: "INFO Adding worker nodes...", color: "blue" },
        { text: "INFO Installing monitoring components...", color: "blue" },
        { text: "SUCCESS Cluster 'production' is ready! 🚀", color: "green" }
      ]
    },
    {
      number: 4,
      title: "Get Cluster Insights",
      description: "Use the powerful Cluster Summary feature to get a comprehensive view of your cluster's health, performance, and potential issues.",
      bullets: [
        "Real-time cluster health assessment",
        "Detailed node and workload metrics",
        "Automated problem detection",
        "Actionable recommendations for improvements",
        "Recent events and warning analysis"
      ],
      command: "kli cluster summary"
    }
  ],
  cta: { text: "Read the Documentation", href: "https://docs.kli.ksctl.com" }
};

export const sustainabilityVisual = {
  badge: "Eco-Friendly Infrastructure",
  heading: "Built Around Green Energy",
  subheading: "kli selected regions and instances based on carbon intensity and renewable mix, so sustainability was a property of the cluster rather than a report you ran later.",
  metrics: [
    {
      title: "Intelligent Region Selection",
      description: "Automatically selects regions with higher renewable energy mix based on real-time data.",
      percentage: 72,
      label: "72% Greener"
    },
    {
      title: "Energy-Efficient Resources",
      description: "Optimizes infrastructure for power usage without compromising on performance.",
      percentage: 38,
      label: "38% Less Energy"
    },
    {
      title: "Cost-Carbon Balance",
      description: "Finds the perfect balance between reduced carbon emissions and operational costs.",
      percentage: 45,
      label: "45% Cost Savings"
    }
  ],
  cta: { text: "Read the Methodology", href: "https://docs.kli.ksctl.com/docs/concepts/smart-optimization/" }
};

export const stats = {
  badge: "Powerful Simplicity",
  heading: "Clusters Created in Minutes",
  subheading: "Production-ready Kubernetes from a single command, with no Terraform or Ansible to wire up first",
  cards: [
    {
      title: "One Command Setup",
      description: "Create a fully functional production-ready Kubernetes cluster with a single command, no complex configurations needed.",
      command: "kli cluster create"
    },
    {
      title: "Ready in 5-10 Minutes",
      description: "Your Kubernetes environment is up and running in just 5-10 minutes, complete with all essential components.",
      time: "5-10 min",
      percentage: 70
    },
    {
      title: "Multi-Cloud Support",
      description: "Deploy across AWS, Azure, GCP and other providers with consistent experience and unified management."
    }
  ],
  comparison: {
    heading: "How kli Compared, Then",
    subheading: "Measured against the Kubernetes tooling of 2024. This is a record, not a recommendation.",
    rows: [
      { feature: "Setup Time", kli: "5-10 minutes", others: "30-60+ minutes" },
      { feature: "Commands Required", kli: "Single Command", others: "Multiple Complex Commands" },
      { feature: "Required Knowledge", kli: "Minimal", others: "Extensive" },
      { feature: "Cloud Provider Support", kli: "Multiple with Unified API", others: "Limited or Provider-Specific" },
      { feature: "Carbon Aware Deployments", kli: "Built-in", others: "Not Available" }
    ],
    cta: { text: "Read the Documentation", href: "https://docs.kli.ksctl.com" }
  }
};

export const blog = {
  badge: "Latest Updates",
  heading: "Highlights from kli",
  subheading: "The sustainability and cost features shipped across the project's lifetime",
  posts: [
    {
      version: "v2.5",
      image: "https://docs.kli.ksctl.com/img/blogs/new_selection_instance_type.png",
      date: "April 13, 2025",
      title: "Smart Region and Instance Selection",
      description: "This intelligent feature guides you in selecting the optimal region and instance type for your clusters by analyzing both emissions data and cost efficiency. It automatically ranks potential choices based on carbon intensity, renewable power percentage, and overall cost.",
      tags: ["Emission Optimization", "Cost Efficiency", "Embodied Emissions"],
      link: "https://docs.kli.ksctl.com/blog/2025/04/13/ksctl-v2.5-smart-region-and-instance-selection/"
    },
    {
      version: "v2.4",
      image: "https://docs.kli.ksctl.com/img/blogs/ksctl-new-recommendation.png",
      date: "April 10, 2025",
      title: "Dynamic Region Switching",
      description: "Dynamic Region Switching intelligently selects the most sustainable and cost-effective region for your Kubernetes clusters, minimizing expenses and emissions while maintaining the same instance type and performance characteristics.",
      tags: ["Carbon Reduction", "Automatic Optimization", "Renewable Energy"],
      link: "https://docs.kli.ksctl.com/blog/2025/04/10/ksctl-v2.4-smarter-optimization-with-dynamic-region-switching/"
    }
  ],
  cta: { text: "View All Blog Posts", href: "https://docs.kli.ksctl.com/blog/" }
};

export const faq = {
  badge: "Common Questions",
  heading: "Frequently Asked Questions",
  subheading: "What happens to kli now that it is archived",
  items: [
    {
      question: "Can I still use kli?",
      answer: "Yes, in the sense that nothing has been deleted. The source, the documentation and the published release binaries remain available. But it is not maintained: no bug fixes, no security updates, and no support for new cloud providers or Kubernetes versions. Treat it as a frozen snapshot, not a dependency."
    },
    {
      question: "Why was kli archived?",
      answer: "Two reasons. First, Kubmin took the problem further: kli could choose an efficient region at create time, but it could not tell you what your workloads actually cost or emitted afterwards, per release and per image tag. Second, provisioning whole clusters is a full-time commitment, and maintaining it honestly alongside everything else I build was not possible."
    },
    {
      question: "Should I migrate off it?",
      answer: "If you are running it in production, yes. What kli wrapped was kubectl, cloud provider APIs, Helm and Terraform. For kubeadm or K3s you can reproduce the cluster directly; for AWS and Azure the provider CLIs or Terraform do the same job. There is no migration tool and none is planned."
    },
    {
      question: "Is the sustainability work lost?",
      answer: "No. Carbon-aware region selection, embodied emissions and SCI/SEI measurement moved into Kubmin, where the same ideas are applied to running workloads rather than to region choice at creation time. The Green Software Foundation and CNCF TAG Green work continues there."
    },
    {
      question: "Can I become the maintainer?",
      answer: "You can ask. The code is Apache-2.0 and the surface area is small enough for one person. Reach out on Discord or open an issue on the repository and we can talk about what a handover would involve."
    }
  ],
  ctas: [
    { text: "Read the Documentation", href: "https://docs.kli.ksctl.com" },
    { text: "Join Discord Community", href: "https://discord.ksctl.com" }
  ]
};
