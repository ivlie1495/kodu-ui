import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'

type Props = {
  title: string
  version: string
  description: string
  preview: ReactNode
}

export function ComponentCard({ title, version, description, preview }: Props) {
  return (
    <div className="bg-card overflow-hidden rounded-xl border">
      <div className="bg-muted flex min-h-40 items-center justify-center p-8">
        {preview}
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <span className="bg-secondary/10 text-secondary rounded-full px-2 py-0.5 text-xs font-medium">
            {version}
          </span>
        </div>
        <p className="text-muted-foreground mb-6 text-sm">{description}</p>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">
            Copy Code
          </Button>
          <Button variant="ghost" size="icon">
            ↗
          </Button>
        </div>
      </div>
    </div>
  )
}
