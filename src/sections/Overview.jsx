import { useContent } from '../i18n.jsx'
import { STATS } from '../data/site.js'

export default function Overview() {
  const { c } = useContent()

  return (
    <section id="overview" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Mission intro */}
        <p className="font-display text-3xl leading-[1.12] tracking-tight text-ink sm:text-4xl md:text-5xl">
          {c.hero.mission}
        </p>

        {/* Stats — clean, borderless */}
        <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 md:mt-16">
          {STATS.map((s, i) => (
            <div key={s.label}>
              <dt className="font-display text-4xl font-semibold text-ink sm:text-5xl">{s.value}</dt>
              <dd className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-2">{c.statLabels[i]}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 md:mt-32">
        {/* Approach — small label + 2×2 grid of principles */}
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-[150px_1fr] md:gap-x-16">
          <p className="eyebrow text-xs text-ink-2">{c.approach.label}</p>
          <div className="grid gap-x-16 gap-y-14 sm:grid-cols-2">
            {c.approach.items.map((it) => (
              <div key={it.title}>
                <h3 className="font-display text-2xl tracking-tight text-ink">{it.title}</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-ink-2">{it.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What we shelter — a paragraph */}
        <div className="mt-24 grid gap-x-12 gap-y-6 md:mt-32 md:grid-cols-[150px_1fr] md:gap-x-16">
          <p className="eyebrow text-xs text-ink-2">{c.shelter.label}</p>
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl tracking-tight text-ink">{c.shelter.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-ink-2">{c.shelter.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
