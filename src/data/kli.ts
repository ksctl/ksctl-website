// ============================================================
// KLI PAGE — All content data
// ============================================================

export const meta = {
  title: "kli - Sustainable, Cloud-Agnostic Kubernetes Management",
};

export const hero = {
  logo: "/kli-logo.svg",
  productName: "kli",
  tagline: "Simplify K8s cluster Ops by single command",
  description: "One Command Highly Available Kubernetes cluster creation but also considers Cloud Region's carbon intensity and instancetype embodded carbon along with cost optimization.",
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
  badge: "Powerful Features",
  heading: "Smart Kubernetes Management",
  subheading: "Our latest features focus on sustainability and cost optimization, helping you reduce both your cloud expenses and environmental impact.",
  items: [
    {
      title: "Simplified Cluster Setup",
      description: "Create fully functional clusters with one command. Supports all major cloud providers and self-managed Kubernetes solutions.",
      command: "kli cluster create"
    },
    {
      title: "Developer Velocity",
      description: "Spin up clusters in minutes for faster workflows. Intuitive CLI reduces the learning curve for development teams.",
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
    description: "Our CLI is designed for simplicity without sacrificing power. Get started with kli in seconds and transform your Kubernetes workflow.",
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
  heading: "How kli Works",
  subheading: "From installation to production-ready Kubernetes clusters in minutes, not hours",
  steps: [
    {
      number: 1,
      title: "Install kli",
      description: "Quick installation with a single command. Works on Linux, macOS, and Windows through WSL.",
      command: "curl -sSfL https://get.kli.ksctl.com | python3 -",
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
  cta: { text: "Get Started Now", href: "https://docs.kli.ksctl.com/docs/getting-started/" }
};

export const sustainabilityVisual = {
  badge: "Eco-Friendly Infrastructure",
  heading: "Kubernetes that Loves Green Energy",
  subheading: "kli intelligently selects regions and instances with lower carbon footprints, helping you build sustainable infrastructure without compromising performance.",
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
  cta: { text: "Explore Our Green Features", href: "https://docs.kli.ksctl.com/docs/concepts/smart-optimization/" }
};

export const stats = {
  badge: "Powerful Simplicity",
  heading: "Create Kubernetes Clusters in Minutes",
  subheading: "Deploy production-ready Kubernetes with a single command - no complex configuration required",
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
    heading: "Why Choose kli?",
    subheading: "See how kli simplifies your workflow compared to other Kubernetes management tools",
    rows: [
      { feature: "Setup Time", kli: "5-10 minutes", others: "30-60+ minutes" },
      { feature: "Commands Required", kli: "Single Command", others: "Multiple Complex Commands" },
      { feature: "Required Knowledge", kli: "Minimal", others: "Extensive" },
      { feature: "Cloud Provider Support", kli: "Multiple with Unified API", others: "Limited or Provider-Specific" },
      { feature: "Carbon Aware Deployments", kli: "Built-in", others: "Not Available" }
    ],
    cta: { text: "See Detailed Comparison", href: "https://docs.kli.ksctl.com/docs/comparisons" }
  }
};

export const blog = {
  badge: "Latest Updates",
  heading: "What's New in kli",
  subheading: "Discover our newest sustainability and cost optimization features that help you reduce both infrastructure costs and environmental impact",
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
  subheading: "Everything you need to know about kli and sustainable Kubernetes management",
  items: [
    {
      question: "What is kli and how is it different?",
      answer: "kli is a cloud-agnostic Kubernetes management tool designed with sustainability and simplicity as core principles. Unlike other tools, kli prioritizes both cost optimization and environmental impact by intelligently selecting regions and instance types based on carbon intensity and renewable energy availability. It provides a unified interface across major cloud providers, making it easy to deploy, manage, and optimize your Kubernetes clusters regardless of where they're hosted. Can create clusters ranging from their own local machine to cloud provider managed (For ex. AKS, EKS) to Self Managed (For Ex. K3s, kubeadm), with no need for manual intervention."
    },
    {
      question: "What cloud providers does kli support?",
      answer: "kli currently supports AWS(EKS) and Azure(AKS) along with self-managed Kubernetes deployments. Our unified API approach means you can use the same commands and workflows across all providers, making multi-cloud management seamless. We're constantly adding support for additional cloud providers based on community feedback."
    },
    {
      question: "How does kli optimize for sustainability?",
      answerHtml: `<p class="text-muted-foreground mb-4">kli uses multiple strategies to optimize for sustainability:</p><ul class="list-disc pl-6 space-y-2 text-muted-foreground"><li><span class="font-medium">Carbon-aware region selection</span>: We analyze real-time and historical data about the carbon intensity of different cloud regions and prioritize those with higher renewable energy percentages.</li><li><span class="font-medium">Energy-efficient instance types</span>: Our algorithms select instance types that which tries to have lower emboddied carbon and also instance-group filteration for your specific workload requirements.</li><li><span class="font-medium">Dynamic region switching</span>: For non-latency-sensitive workloads, kli can dynamically move workloads to regions with lower carbon intensity as conditions change.</li></ul>`
    },
    {
      question: "How much can I save with kli?",
      answerHtml: `<p class="text-muted-foreground mb-4">Savings vary depending on your specific workloads and current setup, but our users typically see:</p><ul class="list-disc pl-6 space-y-2 text-muted-foreground"><li><span class="font-medium">20-40% cost reduction</span> through optimized instance selection and scaling</li><li><span class="font-medium">30-60% carbon footprint reduction</span> through intelligent region selection and workload specific Instance Type</li><li><span class="font-medium">50-70% time savings</span> on cluster management and operations</li></ul>`
    },
    {
      question: "How can I get started with kli?",
      answerHtml: `<p class="text-muted-foreground mb-4">Getting started is simple:</p><ol class="list-decimal pl-6 space-y-2 text-muted-foreground"><li>Install kli with our one-line installer: <code class="bg-muted px-2 py-0.5 rounded">curl -sSfL https://get.kli.ksctl.com | python3 -</code></li><li>Configure your cloud provider credentials <code class="bg-muted px-2 py-0.5 rounded">kli configure cloud</code></li><li>Create your first cluster with <code class="bg-muted px-2 py-0.5 rounded">kli cluster create</code></li></ol><p class="text-muted-foreground mt-4">Check out our <a href="https://docs.kli.ksctl.com/docs/getting-started/" class="text-primary hover:text-primary-dark dark:hover:text-primary-light font-medium">Getting Started guide</a> for detailed instructions and tutorials. We also offer free community support through our Discord channel.</p>`
    }
  ],
  ctas: [
    { text: "Check Documentation", href: "https://docs.kli.ksctl.com" },
    { text: "Join Discord Community", href: "https://discord.ksctl.com" }
  ]
};
