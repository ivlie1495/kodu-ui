import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { UtilsSidebar } from '@/components/utils/utils-sidebar'

const params = [
  {
    prop: 'value',
    type: 'T',
    default: '-',
    description: 'The value to debounce.',
  },
  {
    prop: 'delay',
    type: 'number',
    default: '500',
    description: 'Time in milliseconds to wait.',
  },
  {
    prop: 'options',
    type: 'object',
    default: '{}',
    description: 'Advanced timer configurations.',
  },
]

const code = `import { useState, useEffect } from 'react';
import { useDebounce } from '@kodu-ui/hooks';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  // Runs 500ms after the user stops typing
  useEffect(() => {
    if (debouncedSearch) {
      performSearch(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}`

export default function UtilsPage() {
  return (
    <div className="mx-auto flex max-w-7xl gap-10 px-6 py-12">
      <UtilsSidebar active="useDebounce" />

      <main className="flex-1 space-y-10">
        {/* Hero */}
        <div className="bg-card flex flex-col items-center gap-8 overflow-hidden rounded-xl border p-8 md:flex-row">
          <div className="flex-1 space-y-4">
            <p className="text-primary flex items-center gap-1 text-xs font-semibold tracking-widest uppercase">
              ⚡ State Hook
            </p>
            <h1 className="text-4xl font-bold">useDebounce</h1>
            <p className="text-muted-foreground">
              Delays updating a value until a specified period of inactivity has
              passed. Ideal for search inputs and auto-saving features to
              prevent excessive API calls.
            </p>
            <div className="flex gap-3">
              <Button>Copy Code</Button>
              <Button variant="outline">View GitHub</Button>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-xl md:w-1/3">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP5Qythgqu6nKOkINjfnX0U703a_mBG15LHj-pmfcikPXp1bue_TLXclhRxpaw5V_T1YBBBflW6NKYufXW9QV6gyT-8pslw_APo_5d9Kt35zpBqv2wzT7NOdHNtI5x9xJziShUQJL3rb7CWeTTgQdBcODObgvf_31mpIhrb9Y-wMLkrVC0exwixUZ4e4sU7wz7Ezib9-0BGwcgfaFZE9C3lBrpEg65BXH85RYOVuGFURW7sedWtyU-wP9V-3qMxsnW_LPgS4VatXs"
              alt="useDebounce visualization"
              width={400}
              height={400}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>

        {/* Code Block */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Quick Usage</h2>
          <div className="relative rounded-xl bg-[#1e1e1e] p-6">
            <span className="absolute top-4 right-4 font-mono text-xs text-zinc-500">
              TypeScript
            </span>
            <pre className="overflow-x-auto text-sm leading-relaxed text-zinc-300">
              <code>{code}</code>
            </pre>
          </div>
        </div>

        {/* Params + Pro Tip */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-card col-span-2 overflow-hidden rounded-xl border p-6">
            <h3 className="mb-6 text-lg font-semibold">Parameters</h3>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-muted-foreground border-b text-xs font-semibold uppercase">
                  <th className="pb-3">Prop</th>
                  <th className="pb-3">Type</th>
                  <th className="pb-3">Default</th>
                  <th className="pb-3">Description</th>
                </tr>
              </thead>
              <tbody>
                {params.map((p) => (
                  <tr key={p.prop} className="border-b last:border-0">
                    <td className="text-primary py-3 font-mono font-semibold">
                      {p.prop}
                    </td>
                    <td className="py-3">
                      <span className="bg-muted rounded px-2 py-0.5 font-mono text-xs">
                        {p.type}
                      </span>
                    </td>
                    <td className="text-muted-foreground py-3 font-mono">
                      {p.default}
                    </td>
                    <td className="text-muted-foreground py-3">
                      {p.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary text-primary-foreground flex flex-col justify-between rounded-xl p-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Pro Tip</h3>
              <p className="text-sm opacity-90">
                Always use a numeric delay that matches your typical backend
                latency. For search, 300ms–500ms is the sweet spot for user
                experience.
              </p>
            </div>
            <div className="mt-6 rounded-lg bg-white/10 px-4 py-3 text-xs font-medium">
              Compatible with React 18+
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
