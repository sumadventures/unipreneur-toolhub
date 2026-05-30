import { ArrowRight, Clock, FileOutput, Fingerprint, Target, Package, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toolLinks, type ToolKey } from "@/lib/tool-links";

type Tool = {
  key: ToolKey;
  name: string;
  promise: string;
  description: string;
  bestFor: string;
  benefits: string[];
  time: string;
  output: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  accentVar: string;
  accentSoftVar: string;
};

const tools: Tool[] = [
  {
    key: "founderTraits",
    name: "FounderTraits",
    promise: "Understand yourself as a founder.",
    description:
      "Use FounderTraits to discover your entrepreneurial traits, strengths, working style, and possible role in a team.",
    bestFor: "I want to understand what kind of founder I am.",
    benefits: [
      "Identify your founder strengths.",
      "Reflect on your mindset and behavior.",
      "Understand how you may contribute to a startup team.",
      "Start team conversations with more self-awareness.",
    ],
    time: "10–15 minutes",
    output: "Founder profile and reflection points",
    cta: "Start FounderTraits",
    href: toolLinks.founderTraits,
    icon: Fingerprint,
    accentVar: "var(--tool-founder)",
    accentSoftVar: "var(--tool-founder-soft)",
  },
  {
    key: "pickOne",
    name: "PickOne",
    promise: "Choose the idea worth focusing on.",
    description:
      "Use PickOne when you have several ideas, challenges, or directions and need to decide which one has the strongest potential.",
    bestFor: "We have many ideas, but we need to choose one.",
    benefits: [
      "Compare different ideas.",
      "Evaluate options more clearly.",
      "Reduce debate and confusion.",
      "Select one direction to move forward with.",
    ],
    time: "15–25 minutes",
    output: "Selected idea with clearer reasoning",
    cta: "Open PickOne",
    href: toolLinks.pickOne,
    icon: Target,
    accentVar: "var(--tool-pick)",
    accentSoftVar: "var(--tool-pick-soft)",
  },
  {
    key: "packConcept",
    name: "PackConcept",
    promise: "Turn your idea into a clear concept.",
    description:
      "Use PackConcept after you have selected an idea and need to shape it into a stronger, more presentable concept.",
    bestFor: "We chose our idea, but we need to explain it better.",
    benefits: [
      "Clarify the problem and solution.",
      "Organize your concept.",
      "Prepare for feedback or presentation.",
      "Build a stronger foundation for pitching.",
    ],
    time: "20–30 minutes",
    output: "Structured concept summary",
    cta: "Build with PackConcept",
    href: toolLinks.packConcept,
    icon: Package,
    accentVar: "var(--tool-pack)",
    accentSoftVar: "var(--tool-pack-soft)",
  },
];

function trackClick(toolKey: ToolKey) {
  // Analytics hook point. Replace with real tracker (e.g., gtag, PostHog).
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log("[analytics] tool_click", toolKey);
  }
}

export function ToolCards() {
  return (
    <section id="tools" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Tools</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Choose the tool you need now
          </h2>
          <p className="mt-3 text-muted-foreground">
            Three focused tools. Pick the one that fits your team's next step.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.key} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-0.5 hover:shadow-md"
      style={{ borderTop: `4px solid ${tool.accentVar}` }}
    >
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <div
            className="grid h-11 w-11 place-items-center rounded-xl"
            style={{ backgroundColor: tool.accentSoftVar, color: tool.accentVar }}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{tool.name}</h3>
        </div>

        <p className="mt-4 text-base font-medium text-foreground">{tool.promise}</p>
        <p className="mt-2 text-sm text-muted-foreground">{tool.description}</p>

        <blockquote
          className="mt-4 rounded-lg border-l-2 bg-muted/60 px-3 py-2 text-sm italic text-muted-foreground"
          style={{ borderColor: tool.accentVar }}
        >
          “{tool.bestFor}”
        </blockquote>

        <ul className="mt-4 space-y-2">
          {tool.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-foreground">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: tool.accentVar }}
                aria-hidden
              />
              {b}
            </li>
          ))}
        </ul>

        <dl className="mt-5 grid grid-cols-1 gap-3 rounded-lg bg-muted/50 p-3 text-sm sm:grid-cols-2">
          <div className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" aria-hidden />
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Time
              </dt>
              <dd className="text-foreground">{tool.time}</dd>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <FileOutput className="mt-0.5 h-4 w-4 text-muted-foreground" aria-hidden />
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Output
              </dt>
              <dd className="text-foreground">{tool.output}</dd>
            </div>
          </div>
        </dl>

        <div className="mt-6 flex-1" />
        <Button
          asChild
          className="w-full"
          style={{ backgroundColor: tool.accentVar, color: "white" }}
          onClick={() => trackClick(tool.key)}
        >
          <a href={tool.href} aria-label={`${tool.cta} – opens ${tool.name}`}>
            {tool.cta}
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </article>
  );
}
