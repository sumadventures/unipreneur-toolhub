import { HelpCircle } from "lucide-react";

const questions = [
  "What kind of founder am I?",
  "Which idea should I choose?",
  "Is my concept strong enough?",
  "How do I explain my idea clearly?",
  "What should I do next?",
];

export function Problem() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            When building a startup idea feels messy
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            You may have energy, ideas, and ambition, but still feel stuck.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {questions.map((q) => (
            <li
              key={q}
              className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
            >
              <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span className="text-sm text-foreground sm:text-base">{q}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-base text-muted-foreground">
          That uncertainty can slow your team down.{" "}
          <span className="text-foreground">UniPreneur ToolHub helps you move from guessing to deciding.</span>
        </p>
      </div>
    </section>
  );
}
