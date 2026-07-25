import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { STATS } from '../data/site.js'

const SHELTERS = ['Cows', 'Oxen', 'Buffalo calves', 'Goats', 'Sheep', 'Nilgai', 'Birds', 'Disabled & stray']

const CARE = [
  { t: 'Rescue & shelter', d: 'Animals bound for slaughter or abandoned on the road are brought in and given a permanent home — no matter their condition.' },
  { t: 'Veterinary care', d: 'An on-site hospital treats the sick, the injured, and the lame — the animals this sanctuary is named for.' },
  { t: 'Fodder & water', d: 'Year-round hay and fodder, and 20+ water sources, keep every trough full through the long dry months.' },
  { t: 'Dignified last rites', d: 'Care does not end when a life does — the tabut shelter gives animals dignity in their final days and rites.' },
]

// A label framed by four corner ticks (RRE-style bracketed button).
function Bracket({ children }) {
  const corner = 'pointer-events-none absolute h-2.5 w-2.5 border-ink'
  return (
    <span className="relative inline-flex items-center px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors group-hover:text-maroon">
      <span className={`${corner} left-0 top-0 border-l border-t`} />
      <span className={`${corner} right-0 top-0 border-r border-t`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} bottom-0 right-0 border-b border-r`} />
      {children}
    </span>
  )
}

function Heading({ title, body, cta }) {
  return (
    <div className="md:py-4">
      <h3 className="font-display text-3xl leading-[1.05] tracking-tight text-ink sm:text-4xl">{title}</h3>
      <p className="mt-5 max-w-md text-ink-2">{body}</p>
      {cta && (
        <a href={cta.href} className="group mt-8 inline-block">
          <Bracket>{cta.label}</Bracket>
        </a>
      )}
    </div>
  )
}

export default function Overview() {
  const { t } = useLang()
  const [open, setOpen] = useState(0)

  return (
    <section id="overview" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Mission intro */}
        <p className="max-w-4xl font-display text-3xl leading-[1.12] tracking-tight text-ink sm:text-4xl md:text-5xl">
          {t('hero.body')}
        </p>

        <div className="mt-16 grid gap-x-14 gap-y-16 md:mt-24 md:grid-cols-[0.85fr_1.15fr] md:items-start md:gap-y-24">
          {/* Row 1 — mission + stat cards */}
          <Heading
            title={<>The rescue<br />that can’t wait</>}
            body="Every day counts. Animals arrive from the road and the market, and the sanctuary takes them in — the strong and the broken alike."
            cta={{ href: '#sponsor', label: 'Sponsor a structure' }}
          />
          <div className="border border-line">
            {STATS.map((s, i) => (
              <div key={s.label} className={`px-8 py-8 ${i > 0 ? 'border-t border-line' : ''}`}>
                <p className="font-display text-4xl font-semibold text-ink sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-2">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — what we shelter + grid */}
          <Heading
            title="What we shelter"
            body="Not one kind of animal, but every kind that needs refuge — cattle turned away, and the lame, blind and abandoned that no one else will keep."
          />
          <div className="grid grid-cols-2 border border-line">
            {SHELTERS.map((a, i) => (
              <div
                key={a}
                className={`px-6 py-5 text-sm uppercase tracking-[0.08em] text-ink ${i % 2 ? 'border-l border-line' : ''} ${i >= 2 ? 'border-t border-line' : ''}`}
              >
                {a}
              </div>
            ))}
          </div>

          {/* Row 3 — depth + accordion */}
          <Heading
            title={<>Our care<br />runs deep.</>}
            body="Rescue is only the beginning. Food, medicine, water and dignity carry each animal through the whole of its life."
            cta={{ href: '#contact', label: 'Visit the sanctuary' }}
          />
          <div className="border border-line">
            {CARE.map((c, i) => {
              const isOpen = open === i
              return (
                <div key={c.t} className={i > 0 ? 'border-t border-line' : ''}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors hover:text-maroon"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl tracking-tight text-ink sm:text-2xl">{c.t}</span>
                    <span className="shrink-0 text-2xl font-light text-ink-2">{isOpen ? '–' : '+'}</span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-md px-6 pb-6 text-sm leading-relaxed text-ink-2">{c.d}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
