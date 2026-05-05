import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="bg-card sticky top-0 z-50 flex items-center justify-between border-b px-6 py-3">
      <div className="flex items-center gap-8">
        <span className="text-primary text-xl font-bold">Kodu UI</span>
        <nav className="hidden gap-6 md:flex">
          {['Components', 'Utils', 'Blocks'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
      <Button>Get Started</Button>
    </header>
  )
}
