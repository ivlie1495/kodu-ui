import type { Metadata } from 'next'
import { Geist, Geist_Mono, Nunito_Sans } from 'next/font/google'

import { Footer } from '@/components/landing/footer'
import { Navbar } from '@/components/landing/navbar'
import { cn } from '@/lib/ui'

import './globals.css'

const nunitoSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Kodu UI',
    template: '%s — Kodu UI',
  },
  description:
    'The Body and the Brain for your next web project. Copy-paste UI components, structural blocks, and TypeScript utilities built on shadcn/ui and Tailwind CSS.',
  keywords: [
    'UI components',
    'shadcn',
    'Tailwind CSS',
    'Next.js',
    'TypeScript',
    'React',
  ],
  authors: [{ name: 'Kodu UI' }],
  openGraph: {
    siteName: 'Kodu UI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        nunitoSans.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
