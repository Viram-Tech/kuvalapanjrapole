import { useLang } from '../i18n.jsx'
import { STATS } from '../data/site.js'

// Approach principles — a 2×2 grid of heading + description.
const APPROACH = [
  { t: 'Rescue & shelter', d: 'Animals bound for slaughter or abandoned on the road are brought in and given a permanent home — no matter their condition.' },
  { t: 'Veterinary care', d: 'An on-site hospital treats the sick, the injured, and the lame — the animals this sanctuary is named for.' },
  { t: 'Fodder & water', d: 'Year-round hay and fodder, and 20+ water sources, keep every trough full through the long dry months.' },
  { t: 'Dignified last rites', d: 'Care does not end when a life does — the tabut shelter gives animals dignity in their final days and rites.' },
]

export default function Overview() {
  const { t } = useLang()

  return (
    <section id="overview" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Mission intro */}
        <p className="font-display text-3xl leading-[1.12] tracking-tight text-ink sm:text-4xl md:text-5xl">
          {t('hero.body')}
        </p>

        {/* Stats — clean, borderless */}
        <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 md:mt-16">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-4xl font-semibold text-ink sm:text-5xl">{s.value}</dt>
              <dd className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-2">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-32">
        {/* Approach — small label + 2×2 grid of principles */}
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-[150px_1fr] md:gap-x-16">
          <p className="eyebrow text-xs text-ink-2">Approach</p>
          <div className="grid gap-x-16 gap-y-14 sm:grid-cols-2">
            {APPROACH.map((c) => (
              <div key={c.t}>
                <h3 className="font-display text-2xl tracking-tight text-ink">{c.t}</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-ink-2">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What we shelter — a paragraph */}
        <div className="mt-24 grid gap-x-12 gap-y-6 md:mt-32 md:grid-cols-[150px_1fr] md:gap-x-16">
          <p className="eyebrow text-xs text-ink-2">Shelter</p>
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl tracking-tight text-ink">What we shelter</h3>
            <p className="mt-4 text-lg leading-relaxed text-ink-2">
              Not one kind of animal, but every kind that needs refuge. Cows, oxen, buffalo calves, goats, sheep,
              nilgai and birds — alongside the lame, blind and stray that no one else will keep — are all taken in and
              cared for here.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
