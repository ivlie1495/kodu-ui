import { Footer } from '@/components/landing/footer'
import { Navbar } from '@/components/landing/navbar'
import { ComponentCard } from '@/components/sections/component-card'
import { ComponentsSidebar } from '@/components/sections/components-sidebar'

const components = [
  {
    title: 'Primary Button',
    version: 'v1.2.0',
    description:
      'High-emphasis button for the most important actions in a specific journey.',
    preview: (
      <button className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-medium shadow">
        Primary Action
      </button>
    ),
  },
  {
    title: 'Text Input',
    version: 'v2.0.4',
    description:
      'Standardized text entry field with clear labeling and focus state indicators.',
    preview: (
      <div className="relative w-full max-w-xs">
        <label className="bg-muted text-primary absolute -top-2 left-3 px-1 text-xs font-medium">
          Username
        </label>
        <input
          className="border-primary w-full rounded-lg border-2 bg-transparent px-4 py-3 text-sm focus:outline-none"
          defaultValue="johndoe_ui"
          readOnly
        />
      </div>
    ),
  },
  {
    title: 'Checkbox',
    version: 'v1.1.0',
    description:
      'Selection control for multiple-choice scenarios with intuitive touch targets.',
    preview: (
      <div className="flex gap-6">
        <div className="flex items-center gap-2 text-sm">
          <div className="bg-primary text-primary-foreground flex h-5 w-5 items-center justify-center rounded text-xs font-bold">
            ✓
          </div>
          Checked
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="border-muted-foreground h-5 w-5 rounded border-2" />
          Unchecked
        </div>
      </div>
    ),
  },
  {
    title: 'Chips & Tags',
    version: 'v3.0.1',
    description:
      'Pill-shaped containers used for filtering, inputting, or representing discrete information.',
    preview: (
      <div className="flex gap-2">
        <span className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs">
          Design System
        </span>
        <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">
          ★ Featured
        </span>
      </div>
    ),
  },
  {
    title: 'Slider',
    version: 'v1.4.2',
    description:
      'Range selectors that allow users to select a single value or a range of values along a bar.',
    preview: (
      <div className="bg-muted relative h-2 w-full max-w-xs overflow-hidden rounded-full">
        <div className="bg-primary absolute top-0 left-0 h-full w-[65%]" />
        <div className="bg-primary absolute top-1/2 left-[65%] h-4 w-4 -translate-y-1/2 rounded-full shadow" />
      </div>
    ),
  },
  {
    title: 'Elevation Tiers',
    version: 'v1.0.0',
    description:
      'Shadow utility classes that define depth levels following the Material light-source logic.',
    preview: (
      <div className="bg-card w-40 rounded-xl border p-4 shadow-lg">
        <div className="bg-muted mb-2 h-2 w-20 rounded" />
        <div className="bg-muted mb-3 h-2 w-28 rounded" />
        <div className="flex justify-end">
          <div className="bg-primary/20 h-5 w-10 rounded" />
        </div>
      </div>
    ),
  },
]

export default function ComponentsPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <div className="mx-auto flex max-w-7xl gap-10 px-6 py-12">
        <ComponentsSidebar active="Colors" />
        <main className="flex-1">
          <nav className="text-muted-foreground mb-4 flex items-center gap-2 text-sm">
            <span>Components</span>
            <span>›</span>
            <span className="text-foreground">Base Components</span>
          </nav>
          <h1 className="text-4xl font-bold">Base Components</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            A collection of fundamental UI building blocks designed with
            Material 3 principles, optimized for Kodu UI&apos;s professional
            design aesthetic.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {components.map((c) => (
              <ComponentCard key={c.title} {...c} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
