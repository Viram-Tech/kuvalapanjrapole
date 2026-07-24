import { LANGS, useLang } from '../i18n.jsx'
import { ORG, STATS, STRUCTURES, TRUST } from '../data/site.js'

// Deliberately separate, stripped-down page for anyone scanning a QR code at
// the physical site. Mobile-first, no navbar, no desktop scaffolding.
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Shri Khodadhor Panjrapole Kuvala Bhabhar Banaskantha')}`

export default function QRLanding() {
  const { lang, setLang, t } = useLang()

  return (
    <div className="mx-auto min-h-screen max-w-md px-5 pb-16">
      {/* Header */}
      <div className="flex items-center justify-between pt-6">
        <img src="/logo.png" alt={ORG.nameEn} className="h-7 w-auto" />
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
      <div className="mt-5 overflow-hidden rounded-none border border-line">
        <img src="/images/xabout.jpg" alt="Rescued cows at the sanctuary" className="h-60 w-full object-cover" />
      </div>

      <h1 className="font-display mt-6 text-3xl font-semibold leading-tight text-ink">{t('hero.title')}</h1>
      <p className="mt-3 text-ink-2">{t('hero.body')}</p>

      {/* Stats */}
      <dl className="mt-6 grid grid-cols-2 gap-3">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-none border border-line px-4 py-4">
            <dt className="font-display text-3xl font-semibold text-ink">{s.value}</dt>
            <dd className="text-xs text-ink-2">{s.label}</dd>
          </div>
        ))}
      </dl>

      {/* Primary CTA — sponsor */}
      <a href="tel:+919979787262" className="mt-6 block rounded-none bg-maroon px-6 py-4 text-center font-semibold text-paper shadow-sm">
        {t('hero.donate')} · +91 99797 87262
      </a>

      {/* Sponsor structures — compact */}
      <div className="mt-6 space-y-3">
        {STRUCTURES.map((s) => (
          <div key={s.id} className="flex items-center gap-3 rounded-none border border-line p-3">
            <img src={s.image} alt={s.name} className="h-16 w-16 shrink-0 rounded-xl object-cover" />
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg text-ink">{s.name}</p>
              <p className="text-sm text-maroon">{s.amount} · {t('common.available')}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Directions + contact */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <a href={MAPS} target="_blank" rel="noopener" className="rounded-none border border-line px-4 py-4 text-center font-semibold text-ink">
          📍 Directions
        </a>
        <a href="tel:+919586588261" className="rounded-none border border-line px-4 py-4 text-center font-semibold text-ink">
          📞 Call
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
