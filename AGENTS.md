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
├── components/     # Astro components (all sections of the landing page)
├── layouts/        # Layout wrapper (Layout.astro with header/footer)
├── pages/          # Routes (currently only index.astro)
└── styles/         # Global CSS (custom animations, theme variables)

public/
├── images/         # Static assets
└── *.svg, *.ico    # Favicons and logos
```

### Key Architecture Patterns

**Single Page Application:** The site is currently a single-page marketing site (`index.astro`) that imports and composes multiple section components.

**Component Structure:** Each major section (Features, FAQ, Stats, etc.) is a standalone `.astro` component in `src/components/`. The main page at `src/pages/index.astro` assembles these sections in sequence within the `Layout.astro` wrapper.

**Layout System:** `Layout.astro` provides the global structure:
- Meta tags, fonts (Inter + Urbanist), and Alpine.js CDN
- Persistent `AppHeader` and `AppFooter` components
- Dark mode initialization (`darkMode: true` by default)
- Back-to-top button with scroll visibility logic
- Google Analytics integration (gtag.js)

**Styling Architecture:**
- Primary color: Teal (`#14b8a6`) defined in both Tailwind config and CSS variables
- Dark mode: Always enabled by default via `class="dark"` on `<html>`
- Custom animations in `tailwind.config.cjs`: float, blob, spin-reverse, underline-pulse
- Global styles in `src/styles/global.css`: gradient utilities, scrollbar styling, custom hover effects
- Typography: Urbanist for headings, Inter for body text

**State Management:** Minimal client-side state using Alpine.js for:
- Dark mode toggling (though currently forced to dark)
- Scroll-based interactions (back-to-top button)
- Any interactive components use `x-data` attributes

### Component Composition Pattern

Components are self-contained sections that can be commented out in `index.astro` if not needed (see existing commented sections like `DashboardPreview`, `ComparisonTabs`, `Testimonials`, `Pricing`).

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
- Documentation: https://docs.ksctl.com/docs/getting-started/
- GitHub repository: Links to ksctl org via StarButton component
- Analytics: Google Analytics tracking ID `G-7PBL3S9S8W`

## TypeScript Configuration

Extends `astro/tsconfigs/base`. Type checking available via Astro CLI but not enforced in build.
