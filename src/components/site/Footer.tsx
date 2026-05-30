export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} UniPreneur ToolHub</p>
        <p>Built for UniPreneur students — start where you are.</p>
      </div>
    </footer>
  );
}
