import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toolLinks } from "@/lib/tool-links";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 20% 0%, color-mix(in oklab, var(--tool-pick) 14%, transparent), transparent 70%), radial-gradient(50% 40% at 90% 10%, color-mix(in oklab, var(--tool-pack) 12%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
            UniPreneur Season 4 toolkit
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Turn confusion into a clear startup direction.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            UniPreneur ToolHub brings together practical tools that help you understand
            yourself, choose the right idea, and shape your concept into something ready to
            present.
          </p>
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Start where you are. Whether you are still exploring, comparing ideas, or
            preparing your concept, choose the tool that matches your next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <a href="#tools">
                Find the Right Tool
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={toolLinks.founderTraits}>Start with FounderTraits</a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Start where you are. No need to have everything figured out.
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
      <div className="relative aspect-square w-full max-w-[420px]">
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full"
          role="img"
          aria-label="A scatter of ideas converging into a clear three-step journey"
        >
          {/* Scattered idea dots (left) */}
          <g opacity="0.7">
            {[
              [30, 60],
              [70, 110],
              [20, 180],
              [90, 220],
              [50, 300],
              [110, 70],
              [140, 160],
              [60, 250],
              [120, 320],
              [30, 340],
            ].map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={i % 3 === 0 ? 6 : 4}
                fill="var(--muted-foreground)"
                opacity={0.45}
              />
            ))}
          </g>

          {/* Converging arrows */}
          <path
            d="M120 200 Q 180 200 220 200"
            stroke="var(--border)"
            strokeWidth="2"
            strokeDasharray="4 6"
            fill="none"
          />

          {/* Clear three-step path on the right */}
          <g transform="translate(220 90)">
            <rect width="150" height="60" rx="12" fill="var(--tool-founder-soft)" />
            <circle cx="22" cy="30" r="10" fill="var(--tool-founder)" />
            <rect x="42" y="20" width="90" height="8" rx="4" fill="var(--tool-founder)" opacity="0.55" />
            <rect x="42" y="34" width="60" height="6" rx="3" fill="var(--tool-founder)" opacity="0.3" />
          </g>
          <g transform="translate(220 170)">
            <rect width="150" height="60" rx="12" fill="var(--tool-pick-soft)" />
            <circle cx="22" cy="30" r="10" fill="var(--tool-pick)" />
            <rect x="42" y="20" width="90" height="8" rx="4" fill="var(--tool-pick)" opacity="0.55" />
            <rect x="42" y="34" width="60" height="6" rx="3" fill="var(--tool-pick)" opacity="0.3" />
          </g>
          <g transform="translate(220 250)">
            <rect width="150" height="60" rx="12" fill="var(--tool-pack-soft)" />
            <circle cx="22" cy="30" r="10" fill="var(--tool-pack)" />
            <rect x="42" y="20" width="90" height="8" rx="4" fill="var(--tool-pack)" opacity="0.55" />
            <rect x="42" y="34" width="60" height="6" rx="3" fill="var(--tool-pack)" opacity="0.3" />
          </g>

          {/* Connector line */}
          <path
            d="M295 150 V 170 M295 230 V 250"
            stroke="var(--border)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
