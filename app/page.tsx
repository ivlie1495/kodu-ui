import { CTA } from '@/components/landing/cta'
import { Features } from '@/components/landing/features'
import { Footer } from '@/components/landing/footer'
import { Hero } from '@/components/landing/hero'
import { Navbar } from '@/components/landing/navbar'
import { ProductHighlight } from '@/components/landing/product-highlight'
import { TrustedBy } from '@/components/landing/trusted-by'

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <ProductHighlight />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
