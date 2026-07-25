import { useLang } from '../i18n.jsx'
import { STATS } from '../data/site.js'

const SHELTERS = ['Cows', 'Oxen', 'Buffalo calves', 'Goats', 'Sheep', 'Nilgai', 'Birds', 'Disabled & stray']

// Approach principles — a 2×2 grid of heading + description.
const APPROACH = [
  { t: 'Rescue & shelter', d: 'Animals bound for slaughter or abandoned on the road are brought in and given a permanent home — no matter their condition.' },
  { t: 'Veterinary care', d: 'An on-site hospital treats the sick, the injured, and the lame — the animals this sanctuary is named for.' },
  { t: 'Fodder & water', d: 'Year-round hay and fodder, and 20+ water sources, keep every trough full through the long dry months.' },
  { t: 'Dignified last rites', d: 'Care does not end when a life does — the tabut shelter gives animals dignity in their final days and rites.' },
]

// Scattered photo band shown between the intro and the approach (stays dark).
const COLLAGE = [
  { src: '/images/xservices-img1.jpg', cls: 'right-[6%] top-[8%] w-[32%] aspect-[4/3]' },
  { src: '/images/watertank.jpg', cls: 'left-[7%] top-[42%] w-[27%] aspect-[4/3]' },
  { src: '/images/chabutra.jpg', cls: 'left-[41%] top-[54%] w-[23%] aspect-[3/4]' },
]

function Collage() {
  return (
    <div className="relative left-1/2 my-24 w-screen -translate-x-1/2 overflow-hidden bg-ink md:my-32">
      {/* mobile — simple row */}
      <div className="grid grid-cols-2 gap-3 px-5 py-14 md:hidden">
        {COLLAGE.map((im) => (
          <img key={im.src} src={im.src} alt="" aria-hidden="true" className="h-40 w-full object-cover" />
        ))}
      </div>
      {/* desktop — scattered */}
      <div className="relative mx-auto hidden h-[88vh] max-w-7xl md:block">
        {COLLAGE.map((im) => (
          <img key={im.src} src={im.src} alt="" aria-hidden="true" className={`absolute object-cover shadow-2xl ${im.cls}`} />
        ))}
      </div>
    </div>
  )
}

export default function Overview() {
  const { t } = useLang()

  return (
    <section id="overview" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Mission intro */}
        <p className="max-w-4xl font-display text-3xl leading-[1.12] tracking-tight text-ink sm:text-4xl md:text-5xl">
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

      {/* Scattered photo band */}
      <Collage />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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

        {/* What we shelter — heading + tag chips (dark panel) */}
        <div className="mt-24 grid gap-x-14 gap-y-10 md:mt-32 md:grid-cols-[150px_1fr] md:gap-x-16">
          <p className="eyebrow text-xs text-ink-2">Shelter</p>
          <div>
            <h3 className="font-display text-2xl tracking-tight text-ink">What we shelter</h3>
            <p className="mt-4 max-w-lg leading-relaxed text-ink-2">
              Not one kind of animal, but every kind that needs refuge — cattle turned away, and the lame, blind and
              abandoned that no one else will keep.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 bg-ink p-8">
              {SHELTERS.map((a) => (
                <span
                  key={a}
                  className="border border-paper/25 px-4 py-2.5 text-sm uppercase tracking-[0.1em] text-paper transition-colors hover:border-paper/60"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
