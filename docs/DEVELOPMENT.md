# Kodu UI — Development Guide

## Folder Structure

```
app/
  layout.tsx          # Root layout. Navbar and Footer are rendered here — do NOT add them to individual pages.
  page.tsx            # Landing page (composed from components/landing/)
  components/         # /components route — component library browser
  theme/              # /theme route — design system token showcase
  blocks/             # /blocks route (scaffold)
  utils/              # /utils route (scaffold)

components/
  ui/                 # shadcn/ui primitives. Built on @base-ui/react + cva + cn().
  landing/            # One file per landing page section (hero, navbar, cta, etc.)
  sections/           # Reusable page-level components shared across routes.

lib/
  ui.ts               # Exports cn() — always use this for conditional class merging.

docs/                 # Project documentation
```

## Conventions

### Components

- Use `@base-ui/react` primitives, `cva` for variants, `cn()` from `lib/ui` for merging classes.
- Keep Tailwind classes minimal — use semantic tokens (`bg-primary`, `text-muted-foreground`) over raw colors.
- No default exports from `components/` — always named exports.
- JSX data arrays (static lists, nav items) live in the same file as the component that renders them.

### Pages

- Pages only compose section components — no inline JSX sections longer than ~10 lines.
- Landing sections go in `components/landing/`, page-specific shared pieces go in `components/sections/`.

### Styling

- Colors are CSS custom properties in `app/globals.css` using `oklch`.
- Primary: `#1976D2` (Material Blue 700) / Secondary: `#9C27B0` (Material Purple 600).
- Use Tailwind semantic tokens — never hardcode hex values in components.
- `--radius: 0` — sharp corners by default.

### Fonts

- Inter → UI text (`--font-sans`)
- Geist Mono → code (`--font-mono`)
- Space Grotesk → labels/badges (apply manually where needed)

## Key Dependencies

| Package                    | Purpose                                      |
| -------------------------- | -------------------------------------------- |
| `@base-ui/react`           | Headless UI primitives for shadcn components |
| `class-variance-authority` | Variant management in UI components          |
| `tailwind-merge` + `clsx`  | Class merging via `cn()`                     |
| `tw-animate-css`           | Animation utilities                          |
| `shadcn`                   | Component scaffolding CLI                    |

## What's Built

| Route         | Status   | Notes                                 |
| ------------- | -------- | ------------------------------------- |
| `/`           | Done     | Full landing page with 5 sections     |
| `/components` | Done     | Base Components grid with sidebar     |
| `/theme`      | Done     | Colors, buttons, typography, surfaces |
| `/blocks`     | Scaffold | Empty page                            |
| `/utils`      | Scaffold | Empty page                            |

## Adding a New UI Component

1. `npx shadcn add <component>` — or create manually in `components/ui/`
2. Use `@base-ui/react` as the primitive, wrap with `cva` for variants
3. Export as named export
4. Add a preview card to `app/components/page.tsx`

## Adding a New Page Section

1. Create `components/landing/<section-name>.tsx` or `components/sections/<section-name>.tsx`
2. Keep data arrays co-located in the same file
3. Import and compose in the relevant `app/.../page.tsx`
