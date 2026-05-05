import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const colors = [
  {
    name: 'Primary',
    hex: '#1976D2',
    swatches: [
      'bg-primary/20',
      'bg-primary/40',
      'bg-primary/60',
      'bg-primary',
      'bg-primary/90',
    ],
  },
  {
    name: 'Secondary',
    hex: '#9C27B0',
    swatches: [
      'bg-secondary/20',
      'bg-secondary/40',
      'bg-secondary/60',
      'bg-secondary',
      'bg-secondary/90',
    ],
  },
]

const typography = [
  {
    name: 'Heading 1',
    cls: 'text-4xl font-bold',
    sample: 'The quick brown fox',
  },
  {
    name: 'Heading 2',
    cls: 'text-2xl font-semibold',
    sample: 'The quick brown fox',
  },
  {
    name: 'Heading 3',
    cls: 'text-xl font-medium',
    sample: 'The quick brown fox',
  },
  {
    name: 'Body',
    cls: 'text-base',
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    name: 'Small',
    cls: 'text-sm text-muted-foreground',
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
]

const surfaces = [
  { label: 'Background', cls: 'bg-background' },
  { label: 'Card', cls: 'bg-card' },
  { label: 'Muted', cls: 'bg-muted' },
  { label: 'Accent', cls: 'bg-accent' },
]

export default function ThemePage() {
  return (
    <main className="bg-background text-foreground min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-16">
        <div>
          <p className="text-primary text-sm font-medium tracking-widest uppercase">
            Design System
          </p>
          <h1 className="mt-2 text-4xl font-bold">Theme</h1>
          <p className="text-muted-foreground mt-3">
            Core visual tokens — colors, typography, and UI states.
          </p>
        </div>

        {/* Colors */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Colors</h2>
          {colors.map((color) => (
            <div key={color.name}>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="font-medium">{color.name}</span>
                <span className="text-muted-foreground font-mono text-xs">
                  {color.hex}
                </span>
              </div>
              <div className="flex h-12 overflow-hidden rounded-lg">
                {color.swatches.map((cls) => (
                  <div key={cls} className={`flex-1 ${cls}`} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outlined</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Typography</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Style</TableHead>
                <TableHead>Sample</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {typography.map((t) => (
                <TableRow key={t.name}>
                  <TableCell className="text-muted-foreground w-28 text-xs">
                    {t.name}
                  </TableCell>
                  <TableCell>
                    <span className={t.cls}>{t.sample}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Surfaces */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Surfaces</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {surfaces.map((s) => (
              <Card key={s.label} className={s.cls}>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-xs font-medium">
                    {s.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
