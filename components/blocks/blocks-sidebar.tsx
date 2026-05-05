const nav = [
  {
    label: 'Marketing',
    items: ['Hero Sections', 'Feature Sections', 'CTA Sections'],
  },
  {
    label: 'Application',
    items: ['SaaS Headers', 'Dashboards', 'Stats Panels'],
  },
  {
    label: 'Commerce',
    items: ['Pricing Tables', 'Product Cards', 'Checkout Flows'],
  },
]

export function BlocksSidebar({
  active = 'Hero Sections',
}: {
  active?: string
}) {
  return (
    <aside className="hidden w-64 shrink-0 space-y-8 lg:block">
      {nav.map((section) => (
        <div key={section.label}>
          <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
            {section.label}
          </p>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    item === active
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
