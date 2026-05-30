import { Button } from "@/components/ui/button";
import { toolLinks } from "@/lib/tool-links";

const steps = [
  {
    n: 1,
    title: "Discover yourself",
    body: "Start with FounderTraits to understand your founder profile and how you may contribute to a team.",
    cta: "Start FounderTraits",
    href: toolLinks.founderTraits,
    accent: "var(--tool-founder)",
    soft: "var(--tool-founder-soft)",
  },
  {
    n: 2,
    title: "Choose your direction",
    body: "Use PickOne to select the idea or challenge your team should focus on.",
    cta: "Open PickOne",
    href: toolLinks.pickOne,
    accent: "var(--tool-pick)",
    soft: "var(--tool-pick-soft)",
  },
  {
    n: 3,
    title: "Package your concept",
    body: "Use PackConcept to turn your chosen idea into a clear concept.",
    cta: "Build with PackConcept",
    href: toolLinks.packConcept,
    accent: "var(--tool-pack)",
    soft: "var(--tool-pack-soft)",
  },
];

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Recommended journey
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mt-3 text-muted-foreground">Follow this path.</p>
        </div>

        {/* Desktop: horizontal stepper */}
        <ol className="mt-10 hidden gap-6 md:grid md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-1/2 top-6 hidden h-px w-full -translate-y-1/2 bg-border md:block"
                />
              )}
              <div
                className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6"
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-full text-lg font-semibold"
                  style={{ backgroundColor: s.soft, color: s.accent }}
                >
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.body}</p>
                <Button asChild variant="outline" className="mt-5 w-full">
                  <a href={s.href}>{s.cta}</a>
                </Button>
              </div>
            </li>
          ))}
        </ol>

        {/* Mobile: vertical timeline */}
        <ol className="mt-10 space-y-4 md:hidden">
          {steps.map((s, i) => (
            <li key={s.n} className="relative pl-12">
              <div
                className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full text-base font-semibold"
                style={{ backgroundColor: s.soft, color: s.accent }}
              >
                {s.n}
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-5 top-10 h-[calc(100%-1rem)] w-px bg-border"
                />
              )}
              <div className="rounded-2xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                  <a href={s.href}>{s.cta}</a>
                </Button>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <a href={toolLinks.founderTraits}>Start the Journey</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
