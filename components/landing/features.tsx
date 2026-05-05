const items = [
  {
    title: 'Enhanced Components',
    description:
      'A rich set of high-performance components including charts, tables, and complex forms ready for production.',
  },
  {
    title: 'Structural Blocks',
    description:
      'Pre-built layout shells and navigation systems that adapt perfectly to any screen size or orientation.',
  },
  {
    title: 'Developer Utils',
    description:
      'A suite of helper functions designed to accelerate your development workflow.',
  },
]

export function Features() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold">Engineered for Efficiency</h2>
          <p className="text-muted-foreground mt-4">
            Focus on your business logic while we handle the intricate details
            of the UI.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((f) => (
            <div key={f.title} className="bg-card rounded-xl border p-6">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
