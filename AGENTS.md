# AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for **ksctl** - a cloud-agnostic Kubernetes management tool focused on sustainable and cost-efficient cluster deployment. Built with Astro 5, Tailwind CSS, and Alpine.js.

**Site URL:** https://ksctl.com

## Commands

### Development
```bash
# Start development server (default port 4321)
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build
npm run preview
```

### Package Management
This project uses **pnpm** as the package manager (configured in GitHub Actions). While npm works locally, prefer pnpm for consistency with CI/CD.

## Architecture

### Framework Stack
- **Astro 5**: Static site generator with component islands architecture
- **Tailwind CSS**: Utility-first CSS with dark mode support (`class` strategy)
- **Alpine.js**: Loaded via CDN (v3.x) for minimal client-side interactivity

### Directory Structure

```
src/
├── components/     # Astro components (23 components for various sections)
│   ├── AboutCompany.astro
│   ├── AppFooter.astro
│   ├── AppHeader.astro (navigation with product dropdown)
│   ├── Blog.astro
│   ├── CallToAction.astro
│   ├── ComingSoon.astro (reusable for unreleased products)
│   ├── CompanyValues.astro
│   ├── Container.astro
│   ├── FAQ.astro
│   ├── Features.astro
│   ├── HeroHome.astro
│   ├── HeroProduct.astro
│   ├── HowItWorks.astro
│   ├── MissionVision.astro
│   ├── ProductHighlights.astro
│   ├── StarButton.astro
│   ├── Stats.astro
│   ├── SustainabilityVisual.astro
│   └── TeamMembers.astro
├── layouts/        # Layout wrapper (Layout.astro with header/footer)
├── pages/          # File-based routing
│   ├── index.astro           # Home page
│   ├── aboutus.astro         # About Us page
│   └── product/
│       ├── ksctl.astro       # ksctl product page
│       └── kubmin.astro      # kubmin coming soon page
└── styles/         # Global CSS (custom animations, theme variables)
    └── global.css

public/
├── images/         # Static assets
│   └── avatars/    # Team member photos
├── ksctl-logo.svg
├── kubmin-logo.svg
└── *.ico, *.svg    # Favicons
```

### Key Architecture Patterns

**Multi-Page Application:** The site has evolved from a single-page to a multi-page structure with:
- **Home page** (`index.astro`): Company mission, vision, values, and product overview
- **Product pages** (`product/ksctl.astro`, `product/kubmin.astro`): Dedicated pages for each product with detailed features
- **About page** (`aboutus.astro`): Company information and team members

**Routing Structure:**
- `/` → Home page with company overview and product highlights
- `/aboutus` → About Us page with team members (Dipankar Das, Praful, Saiyam Pathak)
- `/product/ksctl` → ksctl CLI product page with features, how it works, sustainability info, stats, blog, and FAQ
- `/product/kubmin` → kubmin coming soon page

**Component Structure:** Each major section is a standalone `.astro` component in `src/components/`. Pages assemble these sections in sequence within the `Layout.astro` wrapper. Components are reusable and props-based (e.g., `ComingSoon`, `HeroProduct`).

**Layout System:** `Layout.astro` provides the global structure:
- Meta tags, fonts (Inter + Urbanist), and Alpine.js CDN
- Persistent `AppHeader` (with product dropdown navigation) and `AppFooter` (with social links and resources)
- Dark mode initialization (`darkMode: true` by default)
- Back-to-top button with scroll visibility logic
- Google Analytics integration (gtag.js with tracking ID `G-7PBL3S9S8W`)
- Brevo newsletter form integration (production-only)

**Styling Architecture:**
- Primary color: Teal (`#14b8a6`) defined in both Tailwind config and CSS variables
- Dark mode: Always enabled by default via `class="dark"` on `<html>`
- Custom animations in `tailwind.config.cjs`: float, blob, spin-reverse, underline-pulse
- Global styles in `src/styles/global.css`: gradient utilities, scrollbar styling, custom hover effects
- Typography: Urbanist for headings, Inter for body text

**State Management:** Minimal client-side state using Alpine.js for:
- Scroll-based interactions (back-to-top button)
- Mobile hamburger menu toggle in header
- Product dropdown navigation
- Any interactive components use `x-data` attributes

### Component Composition Pattern

Components are self-contained sections that can be composed in different page layouts:
- **Home page**: Uses `HeroHome`, `MissionVision`, `CompanyValues`, `ProductHighlights`
- **Product pages**: Use `HeroProduct`, `Features`, `HowItWorks`, `SustainabilityVisual`, `Stats`, `Blog`, `FAQ`
- **About page**: Uses `AboutCompany`, `MissionVision`, `TeamMembers`
- **Coming soon pages**: Use `ComingSoon` component with props

### Navigation Structure

**AppHeader** includes:
- Logo linking to home
- "Products" dropdown with ksctl (Available) and kubmin (Coming Soon) entries
- "About Us" link
- External links: Docs, Community (Google Groups), GitHub
- Mobile-responsive hamburger menu

## Development Notes

### Astro Specifics
- Components use `.astro` extension with frontmatter (`---`) for JS/TS logic
- Static by default; use `client:*` directives for hydration if needed (currently minimal)
- Props are typed via `Astro.props` destructuring

### Tailwind Customization
- Extended color palette with primary teal shades (50-950)
- Custom animations: `animate-float`, `animate-float-slow`, `animate-float-delayed`, `animate-blob`, `animate-spin-slow`, `animate-spin-reverse-slow`, `animate-underline-pulse`
- Custom shadows: `shadow-glass`, `shadow-glass-dark`
- Typography plugin configured for dark mode support

### Alpine.js Usage
- Loaded via CDN in `Layout.astro` (no build step required)
- Used for minimal interactivity (dark mode toggle, scroll handlers)
- Initialize with `x-data` on root HTML element

## Deployment

**GitHub Actions:** Automated deployment to GitHub Pages on:
- Push to `main` branch
- Daily schedule (midnight UTC)
- Manual workflow dispatch

**Build Process:**
1. Uses `withastro/action@v5` for building
2. Node 22 with pnpm
3. Deploys to GitHub Pages environment

## Important Context

**Brand Identity:** ksctl focuses on sustainability and cloud agnosticism. Visual design uses green/teal color scheme, eco-themed messaging, and emphasizes carbon footprint reduction.

**Design System:** The site uses a modern glass-morphism aesthetic with:
- Gradient backgrounds and animated geometric shapes
- Grid pattern overlays with low opacity
- Smooth transitions and hover effects on cards
- Responsive breakpoints following Tailwind's defaults

**External Links:**
- Documentation: https://docs.ksctl.com/
- GitHub: https://github.com/ksctl
- Community: Google Groups forum
- Social: Twitter/X (@ksctl_org), Discord (discord.ksctl.com), LinkedIn
- Analytics: Google Analytics tracking ID `G-7PBL3S9S8W`
- Newsletter: Brevo forms integration (production only)

**Products:**
- **ksctl**: Available - Cloud-agnostic Kubernetes CLI for multi-cloud deployments
- **kubmin**: Coming Soon - Kubernetes management tool (planned for Q2 2025)

## TypeScript Configuration

Extends `astro/tsconfigs/base`. Type checking available via Astro CLI but not enforced in build.
