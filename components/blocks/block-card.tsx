import type { ReactNode } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

type Props = {
  title: string
  category: string
  description: string
  preview: ReactNode
}

export function BlockCard({ title, category, description, preview }: Props) {
  return (
    <Card className="overflow-hidden">
      <div className="bg-muted flex min-h-48 items-center justify-center overflow-hidden p-6">
        <div className="w-full origin-top scale-[0.85]">{preview}</div>
      </div>
      <CardContent className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <Badge variant="outline">{category}</Badge>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">
            Copy Code
          </Button>
          <Button variant="ghost" size="icon">
            ↗
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
