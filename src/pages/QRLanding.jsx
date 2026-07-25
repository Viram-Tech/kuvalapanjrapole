import { LANGS, useContent } from '../i18n.jsx'
import { ORG, STATS, STRUCTURES, TRUST } from '../data/site.js'

// Deliberately separate, stripped-down page for anyone scanning a QR code at
// the physical site. Mobile-first, no navbar, no desktop scaffolding.
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Shri Radhanpur Khodadhor Panjrapole Sanstha')}`

export default function QRLanding() {
  const { lang, setLang, c } = useContent()

  return (
    <div className="mx-auto min-h-screen max-w-md px-5 pb-16">
      {/* Header */}
      <div className="flex items-center justify-between pt-6">
        <div className="flex items-center gap-2">
          <img src="/favicon.png" alt="" aria-hidden="true" className="h-7 w-auto" />
          <span lang="en" className="font-display text-sm font-semibold text-ink">{ORG.brand}</span>
        </div>
        <div className="flex items-center rounded-full bg-white p-1 shadow-sm">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              aria-pressed={lang === l.code}
              className={`min-w-8 rounded-full px-2 py-1 text-xs font-semibold ${
                lang === l.code ? 'bg-maroon text-paper' : 'text-ink/55'
              }`}
            >
              {l.short}
            </button>
          ))}
        </div>
      </div>

      {/* Hero photo */}
      <div className="mt-5 overflow-hidden border border-line">
        <img src="/images/xabout.jpg" alt="Rescued cows at the sanctuary" className="h-60 w-full object-cover" />
      </div>

      <p lang="en" className="font-display mt-6 text-2xl font-semibold leading-tight text-ink">{ORG.nameEn}</p>
      <p className="mt-3 text-ink-2">{c.hero.mission}</p>

      {/* Stats */}
      <dl className="mt-6 grid grid-cols-2 gap-3">
        {STATS.map((s, i) => (
          <div key={s.label} className="border border-line px-4 py-4">
            <dt className="font-display text-3xl font-semibold text-ink">{s.value}</dt>
            <dd className="text-xs text-ink-2">{c.statLabels[i]}</dd>
          </div>
        ))}
      </dl>

      {/* Primary CTA — sponsor */}
      <a href="tel:+919979787262" className="mt-6 block bg-maroon px-6 py-4 text-center font-semibold text-paper shadow-sm">
        {c.qr.sponsorCta} · +91 99797 87262
      </a>

      {/* Sponsor structures — compact */}
      <div className="mt-6 space-y-3">
        {STRUCTURES.map((s) => {
          const st = c.sponsor.structures[s.id] || {}
          return (
            <div key={s.id} className="flex items-center gap-3 border border-line p-3">
              <img src={s.image} alt={st.name} className="h-16 w-16 shrink-0 object-cover" />
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg text-ink">{st.name}</p>
                <p className="text-sm text-maroon">{s.amount} · {c.sponsor.available}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Directions + contact */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <a href={MAPS} target="_blank" rel="noopener" className="border border-line px-4 py-4 text-center font-semibold text-ink">
          {c.qr.directions}
        </a>
        <a href="tel:+919586588261" className="border border-line px-4 py-4 text-center font-semibold text-ink">
          {c.qr.call}
        </a>
      </div>

      <p className="mt-6 text-center text-xs text-ink-2">
        {TRUST.addressEn}
        <br />
        80G · {TRUST.reg80G}
      </p>
    </div>
  )
}
