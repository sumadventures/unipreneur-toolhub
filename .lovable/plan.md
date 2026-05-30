
## Plan: UniPreneur ToolHub Landing Page

A polished, responsive single-page landing for UniPreneur students to discover three tools (FounderTraits, PickOne, PackConcept), built on the existing TanStack Start template.

### Scope
Single route (`/`) with anchor-based in-page navigation — this is genuinely one scrolling landing page, so hash anchors are appropriate.

### Design tokens (update `src/styles.css`)
- Background `#F8FAFC`, surface `#FFFFFF`, text `#172033`, muted `#64748B`, border `#E2E8F0`
- Primary `#2563EB` / hover `#1D4ED8`
- Tool accents: `--tool-founder` `#0F766E` (teal), `--tool-pick` `#2563EB` (blue), `--tool-pack` `#EA580C` (coral)
- All colors as `oklch()` semantic tokens; Inter font via Google Fonts in `__root.tsx` head

### File structure
- `src/lib/tool-links.ts` — centralized `toolLinks` constant so URLs are easy to swap later
- `src/components/site/Navbar.tsx` — sticky top nav, mobile sheet menu
- `src/components/site/Hero.tsx` — headline + 2 CTAs + scattered-to-clear SVG visual
- `src/components/site/Problem.tsx` — heading + question list
- `src/components/site/CustomerForces.tsx` — 4-card grid (Push, Pull, Anxiety, Habit) with lucide icons
- `src/components/site/ToolCards.tsx` — 3-column grid, accent border-top per tool, time + output + CTA
- `src/components/site/Journey.tsx` — horizontal stepper desktop / vertical timeline mobile
- `src/components/site/QuickSelector.tsx` — 3 clickable rows mapping student intent → tool
- `src/components/site/ClosingCTA.tsx` — final motivation + primary CTA
- `src/components/site/Footer.tsx` — minimal
- `src/routes/index.tsx` — assemble sections; update SEO `head()`
- `src/routes/__root.tsx` — add Inter font link, update default title/description

### Interactions
- Hero "Find the Right Tool" smooth-scrolls to `#tools`
- Hero "Start with FounderTraits" → `toolLinks.founderTraits`
- Nav links scroll to `#tools`, `#journey`, `#quick-selector`
- Mobile nav uses shadcn `Sheet`
- Hover lift on cards, focus rings preserved for a11y

### Tasks (executed in order during build)
1. Update design tokens + fonts in `styles.css` and `__root.tsx`
2. Create `tool-links.ts` + all section components
3. Wire sections into `src/routes/index.tsx` with proper SEO metadata
4. QA against the supplied checklist (content, mobile, a11y, accent colors)

No backend, no Lovable Cloud — purely frontend/presentation.
