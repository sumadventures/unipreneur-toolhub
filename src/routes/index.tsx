import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { CustomerForces } from "@/components/site/CustomerForces";
import { ToolCards } from "@/components/site/ToolCards";
import { Journey } from "@/components/site/Journey";
import { QuickSelector } from "@/components/site/QuickSelector";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UniPreneur ToolHub — Turn confusion into a clear startup direction" },
      {
        name: "description",
        content:
          "A guided toolkit for UniPreneur students: discover your founder traits, pick the right idea, and pack your concept for presentation.",
      },
      { property: "og:title", content: "UniPreneur ToolHub" },
      {
        property: "og:description",
        content:
          "Three practical tools that help students understand themselves, choose a direction, and shape their concept.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <CustomerForces />
        <ToolCards />
        <Journey />
        <QuickSelector />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
