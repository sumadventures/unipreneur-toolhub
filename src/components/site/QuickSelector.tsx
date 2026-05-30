import { ArrowRight, Fingerprint, Target, Package, type LucideIcon } from "lucide-react";
import { toolLinks } from "@/lib/tool-links";

type Option = {
  intent: string;
  tool: string;
  href: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
};

const options: Option[] = [
  {
    intent: "Understand my founder strengths",
    tool: "FounderTraits",
    href: toolLinks.founderTraits,
    icon: Fingerprint,
    accent: "var(--tool-founder)",
    soft: "var(--tool-founder-soft)",
  },
  {
    intent: "Choose between several ideas",
    tool: "PickOne",
    href: toolLinks.pickOne,
    icon: Target,
    accent: "var(--tool-pick)",
    soft: "var(--tool-pick-soft)",
  },
  {
    intent: "Make my idea clearer and ready to present",
    tool: "PackConcept",
    href: toolLinks.packConcept,
    icon: Package,
    accent: "var(--tool-pack)",
    soft: "var(--tool-pack-soft)",
  },
];

export function QuickSelector() {
  return (
    <section id="quick-selector" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Quick selector
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            I want to…
          </h2>
          <p className="mt-3 text-muted-foreground">
            Pick the sentence that matches your situation right now.
          </p>
        </div>

        <ul className="mt-8 space-y-3">
          {options.map(({ intent, tool, href, icon: Icon, accent, soft }) => (
            <li key={tool}>
              <a
                href={href}
                className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-sm sm:p-5"
              >
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-lg"
                  style={{ backgroundColor: soft, color: accent }}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="flex-1">
                  <p className="text-base font-medium text-foreground sm:text-lg">{intent}</p>
                  <p className="text-sm text-muted-foreground">
                    Go to <span className="font-medium" style={{ color: accent }}>{tool}</span>
                  </p>
                </div>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
