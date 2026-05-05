import Image from 'next/image'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="flex flex-col items-center py-24 text-center">
      <h1 className="max-w-3xl text-5xl font-bold tracking-tight">
        Kodu UI: The Body and the Brain
      </h1>
      <p className="text-muted-foreground mt-6 max-w-xl text-lg">
        Build professional interfaces with a library designed for methodical
        precision. Combine visual elegance with functional utility.
      </p>
      <div className="mt-8 flex gap-3">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">
          View Docs
        </Button>
      </div>
      <div className="mt-16 w-full max-w-5xl px-6">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdEngxjek76twxrm2YliNg9KqKaUsWLTElWSrMfOxxJBs1UGBjHN0ZcPpY8CN5xMMh0yfwvA0X7phxtWVXaAdPtR5gKbtEotFtVLYxrwt-Fs1w2a3WVn7HswiE7Ji-g7behnksbqpNqF8epk6pM_lvrWZy4jbvx8koi66rAadKumVhsnl9SqranK9CqXLW4XRRkyc5oOjvlfW_otOKcy5uXjhWZgTtNO6bEztQQ0QaaI5WeWzxcyS9H8YRXXQq92SghytEt1Ouc54"
          alt="Kodu UI Dashboard Preview"
          width={1280}
          height={720}
          loading="eager"
          className="w-full rounded-xl border shadow-xl"
        />
      </div>
    </section>
  )
}
