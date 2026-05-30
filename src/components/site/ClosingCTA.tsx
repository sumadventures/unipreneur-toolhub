import { Button } from "@/components/ui/button";

export function ClosingCTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Build with more clarity
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Good ideas do not become strong by accident. They become strong when you
          understand the founder, choose the right direction, and explain the concept
          clearly.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
          Use UniPreneur ToolHub to take the next step with confidence.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <a href="#tools">Explore Tools</a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Your next step is clearer than you think.
        </p>
      </div>
    </section>
  );
}
