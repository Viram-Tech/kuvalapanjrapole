import { useLang } from '../i18n.jsx'
import { STRUCTURES } from '../data/site.js'

function Spark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-paper/50" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M12 3l1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8z" />
    </svg>
  )
}

export default function Sponsor() {
  const { t } = useLang()
  return (
    <section id="sponsor" className="bg-ink px-4 py-24 text-paper sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-paper sm:text-5xl md:text-6xl">
          Give a name to shelter.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-paper/60">
          Three permanent structures anchor the sanctuary. Endow one at ₹5,00,000 —
          your family or guru’s name carried on it in perpetuity.
        </p>

        <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
          {STRUCTURES.map((s, i) => {
            const funded = s.status === 'funded'
            const flip = i % 2 === 1
            return (
              <article
                key={s.id}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                {/* Image */}
                <div className={`overflow-hidden rounded-2xl ${flip ? 'md:order-2' : ''}`}>
                  <img src={s.image} alt={s.name} className="h-64 w-full object-cover md:h-80" />
                </div>

                {/* Text */}
                <div className={flip ? 'md:order-1 md:px-2' : 'md:px-2'}>
                  <p className="flex items-center gap-2 text-sm text-paper/50">
                    <Spark />
                    {funded ? t('common.funded') : 'Naming opportunity'}
                  </p>
                  <h3 className="mt-3 font-display text-3xl tracking-tight text-paper sm:text-4xl">{s.name}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-paper/60">{s.blurb}</p>
                  <a
                    href="#contact"
                    className={`mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                      funded
                        ? 'pointer-events-none bg-paper/5 text-paper/40'
                        : 'bg-paper/10 text-paper hover:bg-paper/20'
                    }`}
                  >
                    {funded ? t('common.funded') : `Sponsor · ${s.amount}`}
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
