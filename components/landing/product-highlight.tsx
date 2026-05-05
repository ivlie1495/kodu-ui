import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

const checklist = [
  'Type-safe properties for every component',
  'Atomic design principles out of the box',
  'Universal theme support with CSS variables',
]

export function ProductHighlight() {
  return (
    <section className="py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 lg:flex-row">
        <div className="lg:w-1/2">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3O6n5AEZSS00EZ-5lPG9JFAGtmCWIvJ_C3Ou2LAqWoGMrUkomy5E-ehabGrxPk3vdgixEECWmbtAlsHcgdejnCt0pQtLjPvamnY53aDyxcTR9klcl8ur_cHGNCEGPqnykhvDwnPfqXGvgxdNgSztb9DVmxzeWQ5DU_VqpYHRq7It-_QAsxtrd3q2EXi_75-cyF5BSlFDigomQro_zf70lXp2PnpjBPjWwE9w_Gl1F-BPgkA4bUU2-Yubh67dkf_e6B8LL4DQnJXA"
            alt="Code Integration"
            width={640}
            height={480}
            loading="eager"
            className="w-full rounded-xl border shadow-lg"
          />
        </div>
        <div className="space-y-6 lg:w-1/2">
          <Badge variant="secondary">THE BRAIN</Badge>
          <h2 className="text-3xl font-semibold">Logic-First Architecture</h2>
          <p className="text-muted-foreground">
            Our library isn&apos;t just about pixels. With built-in state
            management hooks and performance-optimized rendering, Kodu UI acts
            as the nervous system for your front-end.
          </p>
          <ul className="space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-primary">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
