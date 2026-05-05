# Kodu UI

> The Body and the Brain for your next web project.

A developer resource hub providing enhanced UI components, structural blocks, and TypeScript utilities — all copy-paste ready, no sign-up required.

---

## Stack

| Layer      | Technology                     |
| ---------- | ------------------------------ |
| Framework  | Next.js (App Router)           |
| Styling    | Tailwind CSS v4                |
| Components | shadcn/ui (Base UI primitives) |
| Language   | TypeScript                     |
| Database   | Supabase + Prisma _(planned)_  |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
  layout.tsx              # Root layout — Navbar + Footer live here
  page.tsx                # Landing page
  components/page.tsx     # Component library browser
  theme/page.tsx          # Design system tokens (colors, typography)
  blocks/page.tsx         # Structural blocks
  utils/page.tsx          # TypeScript utilities

components/
  ui/                     # shadcn/ui primitives (Button, Card, Badge, Table, Tabs…)
  landing/                # Landing page sections (Hero, Features, CTA…)
  library/                # /components page (ComponentCard, Sidebar…)
  blocks/                 # /blocks page (BlockCard, BlocksSidebar)
  utils/                  # /utils page (UtilsSidebar)

lib/
  ui.ts                   # cn() utility (clsx + tailwind-merge)
```

---

## Design System

Tokens are defined as CSS custom properties in `app/globals.css` using `oklch` color space.

| Token         | Light                           | Dark       |
| ------------- | ------------------------------- | ---------- |
| `--primary`   | `#1976D2` (Material Blue 700)   | Blue 300   |
| `--secondary` | `#9C27B0` (Material Purple 600) | Purple 200 |

Typography uses **Inter** for UI text, **Geist Mono** for code, and **Space Grotesk** for labels/badges.

---

## Adding a Component

1. Create `components/ui/your-component.tsx` using Base UI primitives from `@base-ui/react`
2. Use `cva` for variants and `cn()` for class merging
3. Add a preview card in `app/components/page.tsx`

---

## Contributing

PRs welcome. Keep components copy-paste friendly — no required wrappers or context providers.
