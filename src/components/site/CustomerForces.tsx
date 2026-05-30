import { Wind, Compass, ShieldQuestion, RotateCcw, type LucideIcon } from "lucide-react";

type Force = {
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

const forces: Force[] = [
  {
    label: "The Push",
    title: "Something feels unclear",
    body: "You have too many ideas, not enough direction, or a team that is still figuring out how to work together.",
    icon: Wind,
  },
  {
    label: "The Pull",
    title: "A clearer path forward",
    body: "Each tool gives you a simple way to make progress: discover your strengths, choose one direction, and package your concept.",
    icon: Compass,
  },
  {
    label: "The Anxiety",
    title: '"What if I choose wrong?"',
    body: "The tools help you think through your decision step by step, so you do not have to rely only on instinct.",
    icon: ShieldQuestion,
  },
  {
    label: "The Habit",
    title: "Waiting, discussing, and overthinking",
    body: "Instead of staying in endless discussion, use the tools to create outputs your team can act on.",
    icon: RotateCcw,
  },
];

export function CustomerForces() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Customer forces
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why students use these tools
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {forces.map(({ label, title, body, icon: Icon }) => (
            <article
              key={label}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-sm"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-muted text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {label}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
