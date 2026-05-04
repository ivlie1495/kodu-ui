import Link from 'next/link'

const sections = [
  {
    href: '/components',
    label: 'Components',
    description: 'Refined UI elements built on shadcn/ui.',
  },
  {
    href: '/blocks',
    label: 'Blocks',
    description: 'Hero sections, headers, pricing tables, and dashboards.',
  },
  {
    href: '/utils',
    label: 'Utils',
    description: 'TypeScript helpers and custom hooks. Copy. Paste. Ship.',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 dark:bg-zinc-950">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Kodu UI
        </h1>
        <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
          The body and the brain for your next web project.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {sections.map(({ href, label, description }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
            >
              <div className="font-medium text-zinc-900 group-hover:text-black dark:text-zinc-50 dark:group-hover:text-white">
                {label}
              </div>
              <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
