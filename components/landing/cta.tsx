import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="bg-primary text-primary-foreground py-24 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-3xl font-semibold">Ready to evolve your UI?</h2>
        <p className="mt-4 opacity-90">
          Join thousands of developers building the next generation of web
          applications with Kodu UI.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="secondary">Start Building Now</Button>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  )
}
