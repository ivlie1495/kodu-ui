const items = ['Next.js', 'Tailwind', 'Vercel', 'Cloudflare']

export function TrustedBy() {
  return (
    <section className="bg-muted py-12 text-center">
      <p className="text-muted-foreground mb-6 text-xs font-medium tracking-widest uppercase">
        Trusted by the industry&apos;s best
      </p>
      <div className="flex flex-wrap justify-center gap-10 opacity-60">
        {items.map((name) => (
          <span key={name} className="font-bold">
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
