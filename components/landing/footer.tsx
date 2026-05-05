const links = ['GitHub', 'Documentation', 'Support']

export function Footer() {
  return (
    <footer className="bg-card border-t px-8 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <span className="font-semibold">Kodu UI</span>
          <p className="text-muted-foreground mt-1 text-xs">
            © 2024 Kodu UI. Built with Material precision.
          </p>
        </div>
        <div className="text-muted-foreground flex gap-6 text-xs">
          {links.map((link) => (
            <a key={link} href="#" className="hover:text-foreground">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
