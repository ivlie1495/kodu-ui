import { CTA } from '@/components/landing/cta'
import { Features } from '@/components/landing/features'
import { Hero } from '@/components/landing/hero'
import { ProductHighlight } from '@/components/landing/product-highlight'
import { TrustedBy } from '@/components/landing/trusted-by'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Features />
      <ProductHighlight />
      <CTA />
    </main>
  )
}
