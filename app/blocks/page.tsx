import { BlockCard } from '@/components/blocks/block-card'
import { BlocksSidebar } from '@/components/blocks/blocks-sidebar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const blocks = [
  {
    title: 'Centered Hero',
    category: 'Hero',
    description:
      'Full-width hero with centered headline, subtext, and dual CTA buttons. Ideal for SaaS landing pages.',
    preview: (
      <div className="w-full space-y-3 text-center">
        <div className="bg-primary/10 text-primary mx-auto w-fit rounded-full px-3 py-0.5 text-[10px] font-semibold">
          New — v2.0 is here
        </div>
        <div className="bg-foreground/80 mx-auto h-4 w-56 rounded" />
        <div className="bg-muted-foreground/40 mx-auto h-2.5 w-44 rounded" />
        <div className="flex justify-center gap-2 pt-1">
          <div className="bg-primary h-6 w-20 rounded-lg" />
          <div className="bg-muted h-6 w-20 rounded-lg border" />
        </div>
      </div>
    ),
  },
  {
    title: 'Split Hero',
    category: 'Hero',
    description:
      'Two-column layout with text on the left and an image/illustration placeholder on the right.',
    preview: (
      <div className="flex w-full items-center gap-4">
        <div className="flex-1 space-y-2">
          <div className="bg-foreground/80 h-3 w-32 rounded" />
          <div className="bg-muted-foreground/40 h-2 w-28 rounded" />
          <div className="flex gap-2 pt-1">
            <div className="bg-primary h-5 w-16 rounded" />
          </div>
        </div>
        <div className="bg-muted h-20 w-24 rounded-lg border" />
      </div>
    ),
  },
  {
    title: 'SaaS Navbar',
    category: 'Header',
    description:
      'Sticky navigation bar with logo, nav links, and CTA button. Dark-mode ready.',
    preview: (
      <div className="bg-card flex w-full items-center justify-between rounded-lg border px-4 py-2 text-xs shadow-sm">
        <div className="bg-primary h-3 w-16 rounded" />
        <div className="flex gap-3">
          <div className="bg-muted h-2 w-8 rounded" />
          <div className="bg-muted h-2 w-8 rounded" />
          <div className="bg-muted h-2 w-8 rounded" />
        </div>
        <div className="bg-primary h-5 w-14 rounded-lg" />
      </div>
    ),
  },
  {
    title: 'Tiered Pricing',
    category: 'Pricing',
    description:
      'Three-column pricing table with feature lists, highlighted recommended plan, and CTA buttons.',
    preview: (
      <div className="flex w-full gap-2">
        {['Free', 'Pro', 'Team'].map((plan, i) => (
          <div
            key={plan}
            className={`flex flex-1 flex-col items-center gap-1.5 rounded-lg border p-2 ${
              i === 1 ? 'bg-primary/10 border-primary/30' : 'bg-card'
            }`}
          >
            <div className="bg-muted h-2 w-8 rounded" />
            <div
              className={`h-3 w-10 rounded ${i === 1 ? 'bg-primary' : 'bg-muted-foreground/40'}`}
            />
            <div className="w-full space-y-1">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-muted h-1.5 w-full rounded" />
              ))}
            </div>
            <div
              className={`h-4 w-full rounded ${i === 1 ? 'bg-primary' : 'bg-muted border'}`}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Stats Dashboard',
    category: 'Dashboard',
    description:
      'Overview panel with KPI cards, a bar chart placeholder, and a recent activity list.',
    preview: (
      <div className="w-full space-y-2">
        <div className="grid grid-cols-3 gap-2">
          {['Users', 'Revenue', 'Growth'].map((label) => (
            <div
              key={label}
              className="bg-card rounded-lg border p-2 text-center"
            >
              <div className="bg-primary/20 mx-auto mb-1 h-2.5 w-8 rounded" />
              <div className="bg-muted mx-auto h-1.5 w-6 rounded" />
            </div>
          ))}
        </div>
        <div className="bg-card rounded-lg border p-2">
          <div className="flex h-10 items-end gap-1 px-1">
            {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
              <div
                key={i}
                className="bg-primary/30 flex-1 rounded-t"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Feature Grid',
    category: 'Feature',
    description:
      'Three-column feature section with icon, title, and description per card. Great for product pages.',
    preview: (
      <div className="grid w-full grid-cols-3 gap-2">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-card space-y-1.5 rounded-lg border p-2">
            <div className="bg-primary/20 h-5 w-5 rounded" />
            <div className="bg-foreground/70 h-2 w-12 rounded" />
            <div className="space-y-0.5">
              <div className="bg-muted h-1.5 w-full rounded" />
              <div className="bg-muted h-1.5 w-3/4 rounded" />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'CTA Banner',
    category: 'CTA',
    description:
      'Full-width call-to-action band with headline, supporting text, and a prominent action button.',
    preview: (
      <div className="bg-primary w-full rounded-xl p-4 text-center">
        <div className="bg-primary-foreground/80 mx-auto mb-2 h-3 w-40 rounded" />
        <div className="bg-primary-foreground/40 mx-auto mb-3 h-2 w-32 rounded" />
        <div className="bg-primary-foreground mx-auto h-6 w-24 rounded-lg" />
      </div>
    ),
  },
  {
    title: 'Checkout Flow',
    category: 'Commerce',
    description:
      'Two-column checkout layout with order summary on the right and payment form on the left.',
    preview: (
      <div className="flex w-full gap-3">
        <div className="flex-1 space-y-2">
          <div className="bg-muted h-2 w-20 rounded" />
          <div className="h-5 w-full rounded border bg-transparent" />
          <div className="flex gap-2">
            <div className="h-5 flex-1 rounded border bg-transparent" />
            <div className="h-5 w-16 rounded border bg-transparent" />
          </div>
          <div className="bg-primary mt-1 h-5 w-full rounded" />
        </div>
        <div className="bg-card w-28 shrink-0 space-y-1.5 rounded-lg border p-2">
          <div className="bg-muted h-2 w-16 rounded" />
          {[1, 2].map((n) => (
            <div key={n} className="flex items-center gap-1">
              <div className="bg-muted h-5 w-5 rounded" />
              <div className="flex-1 space-y-0.5">
                <div className="bg-muted h-1.5 w-full rounded" />
                <div className="bg-muted h-1.5 w-2/3 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

const categories = [
  'All',
  'Hero',
  'Header',
  'Pricing',
  'Dashboard',
  'Feature',
  'CTA',
  'Commerce',
]

export default function BlocksPage() {
  return (
    <div className="mx-auto flex max-w-7xl gap-10 px-6 py-12">
      <BlocksSidebar active="Hero Sections" />

      <main className="flex-1">
        <nav className="text-muted-foreground mb-4 flex items-center gap-2 text-sm">
          <span>Blocks</span>
          <span>›</span>
          <span className="text-foreground">Hero Sections</span>
        </nav>
        <h1 className="text-4xl font-bold">Blocks</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          Production-ready layout sections for rapid assembly. Copy a block and
          drop it straight into your project.
        </p>

        <Tabs defaultValue="All" className="mt-8">
          <TabsList>
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="All">
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blocks.map((b) => (
                <BlockCard key={b.title} {...b} />
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {blocks
                  .filter((b) => b.category === cat)
                  .map((b) => (
                    <BlockCard key={b.title} {...b} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  )
}
