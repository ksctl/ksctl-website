// ============================================================
// HOME PAGE — All content data
// ============================================================

export const meta = {
  title: "ksctl - Efficient and Sustainable Cloud Tooling",
};

export const hero = {
  badge: "Building the future of efficient solutions",
  headline: "Fast and Efficient Computing",
  subheadline: "We build tools that help teams deploy and manage cloud workloads with minimal environmental impact and maximum efficiency.",
  primaryCta: { text: "Explore Products", href: "#products" },
  secondaryCta: { text: "About Our Mission", href: "#mission" },
};

export const missionVision = {
  heading: "Our Mission & Vision",
  subheading: "Strive towards Fast, Efficient and Sustainable Computing",
  mission: {
    title: "Our Mission",
    description: "To democratize sustainable deployment by providing tools that reduce both costs and carbon footprint, making eco-friendly infrastructure accessible to every organization irrespective of their size or technical expertise."
  },
  vision: {
    title: "Our Vision",
    description: "A world where every system is deployed with sustainability and efficiency as default, not an afterthought. A world where developers focus on building great applications while infrastructure automatically optimizes for cost and environmental impact."
  }
};

export const coreValues = {
  heading: "Our Core Values",
  subheading: "The principles that guide everything we build and every decision we make",
  values: [
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>`,
      title: "Sustainability First",
      description: "Every decision we make prioritizes environmental impact. From region selection to resource optimization, sustainability is baked into our core."
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>`,
      title: "Cloud Agnosticism",
      description: "True freedom means choice. Work with AWS, Azure, GCP, or any cloud provider without vendor lock-in or proprietary dependencies."
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>`,
      title: "Open Source",
      description: "Transparency and collaboration drive innovation. Our tools are open source, community-driven, and built in the open."
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
      title: "Simplicity",
      description: "Powerful doesn't mean complicated. We abstract complexity while maintaining full control, making Kubernetes accessible to everyone."
    }
  ]
};

export const products = {
  heading: "Our Products",
  subheading: "Purpose-built tools for sustainable and efficient Kubernetes infrastructure",
  items: [
    {
      name: "kli",
      logo: "/kli-logo.svg",
      tagline: "Simplify K8s cluster Ops by single command",
      description: "One Command Highly Available Kubernetes cluster creation but also considers Cloud Region's carbonintensity and instancetype embodded carbon along with cost optimization.",
      features: [
        "Cloud-agnostic deployment",
        "Carbon-aware region selection and instance type recommendations",
        "Cost optimization recommendations",
        "Choice of Bootstrap, CNI to monitoring add-ons"
      ],
      ctaText: "Explore kli",
      ctaLink: "/product/kli",
      available: true
    },
    {
      name: "kubmin",
      logo: "/kubmin-logo.svg",
      tagline: "Workload Intelligence",
      description: "Brings workload intelligence provisioned on runners. Monitor, analyze, and optimize your workloads with energy-powered intelligence.",
      features: [
        "Multi-cluster management",
        "Advanced monitoring & workload sustainability insights",
        "Reduce Operational Overheads but letting you focus on your workloads",
        "Cost and Resource optimization"
      ],
      ctaText: "Explore kubmin",
      ctaLink: "/product/kubmin",
      available: true
    }
  ]
};
