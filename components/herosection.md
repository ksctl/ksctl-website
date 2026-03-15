Since you already have the prompt/code for the **Infinite Grid** from 21st.dev, this master prompt tells the AI exactly how to integrate it, match your specific typography, and nail that premium **huly.io** glow.

***

### Copy & Paste this prompt:

> Act as an expert frontend developer specializing in Astro and Tailwind CSS. Build a premium, high-converting Hero Section for a developer tool called "Kubmin". 
> 
> **Overall Vibe & Background (Huly.io style):**
> - The theme is dark mode. The main background should be a rich, pitch black or very dark UI color (e.g., `bg-[#090A0F]`).
> - I will be providing a background component called `<InfiniteGrid />`. Please place this in the absolute background with a very low opacity (e.g., `opacity-10` or `opacity-[0.15]`) so it adds technical texture without being distracting.
> - **The Huly Glow:** Add an absolute positioned, large, soft radial blur/gradient behind the right side of the screen (where the dashboard image will be). This should be an emerald green glow (`#00E599`) with very low opacity (`opacity-20` or `opacity-30`) and massive blur (`blur-3xl`) to make the dashboard image look like it's illuminating the background.
> 
> **Layout:**
> - Use a standard max-width container (`max-w-7xl mx-auto px-6`).
> - Mobile: Stacked layout (text on top, image on bottom) with a standard top padding (`pt-24`).
> - Desktop (`lg` breakpoint): Two-column layout using Grid or Flex. Left side for content (approx 55% width), right side for the dashboard mockup (approx 45% width). Center them vertically.
> 
> **Left Column Content (Typography & Spacing):**
> 1. **Badge:** A pill-shaped div at the top. Dark background, extremely subtle green border (`border-[#00E599]/30`), with the text "BETA — FREE TO START" in uppercase, tracking-wide, text-xs, using the exact emerald green (`text-[#00E599]`).
> 2. **Main Headline (Crucial font mixing):** Use a massive font size (`text-5xl lg:text-7xl`, `leading-tight`). 
>    - The text "Ship fast. But know what each deploy" MUST use a beautiful, elegant **Serif** font class (like `font-serif tracking-tight text-white`).
>    - The text "costs in money and efficiency." MUST use a modern **Sans-serif** font class, styled in the emerald green (`text-[#00E599]`). 
> 3. **Sub-headline:** "Version 2.1 uses 30% more energy than 2.0. Your monitoring didn't catch that. Kubmin would have." Use a medium font size (`text-lg lg:text-xl`), Sans-serif, color emerald green (`text-[#00E599]`).
> 4. **Body Text:** "Per-workload efficiency tracking across deployments, automated waste detection, and ready-to-use kubectl fixes. The layer between your workloads and your cloud bill that's been missing." Use standard paragraph size (`text-base lg:text-lg`), color muted gray (`text-gray-400`).
> 5. **Call to Action Buttons (Flex row, gap-4):**
>    - **Primary:** "Start Free →". Background color emerald (`bg-[#00E599]`), text color black (`text-black`), font-medium, rounded-md or slightly rounded pill, nice hover transition (e.g., `hover:bg-[#00E599]/90`).
>    - **Secondary:** "See how it works ↓". Transparent background, text color gray-300, hover to text-white.
> 6. **Footer Note:** Small text (`text-xs text-gray-600`) at the very bottom: "Built on Kepler (CNCF) • SCI-aligned (Green Software Foundation) • Powered by ksctl".
> 
> **Right Column (Dashboard Mockup):**
> - Create an image wrapper container.
> - Give the wrapper a subtle, glassy border to make it pop against the dark background (`border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm p-2`). 
> - Inside, place an `<img src="/dashboard-mockup.png" alt="Kubmin Dashboard" class="rounded-lg shadow-2xl" />`.
> - Ensure this right column sits right on top of that subtle green radial glow we created in the background.
>
> Please output the complete Astro component code (`.astro` file), including the necessary Tailwind classes. Assume I will import the `<InfiniteGrid />` component at the top.

----

You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
the-infinite-grid.tsx
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  motion, 
  useMotionValue, 
  useTransform, 
  useMotionTemplate, 
  useAnimationFrame 
} from "framer-motion";

export const Component = () => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5; 
  const speedY = 0.5;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % 40);
    gridOffsetY.set((currentY + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
      )}
    >
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>
      <motion.div 
        className="absolute inset-0 z-0 opacity-40"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-orange-500/40 dark:bg-orange-600/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-500/40 dark:bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto space-y-6 pointer-events-none">
         <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            The Infinite Grid
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Move your cursor to reveal the active grid layer. <br/>
            The pattern scrolls infinitely in the background.
          </p>
        </div>
        
        <div className="flex gap-4 pointer-events-auto">
          <button 
              onClick={() => setCount(count + 1)}
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all shadow-md active:scale-95"
          >
              Interact ({count})
          </button>
          <button 
              className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/80 transition-all active:scale-95"
          >
              Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const GridPattern = ({ offsetX, offsetY }: { offsetX: any, offsetY: any }) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground" 
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};

demo.tsx
import { Component } from "@/components/ui/the-infinite-grid";

export default function DemoOne() {
  return <Component />;
}

```

Install NPM dependencies:
```bash
framer-motion
```
