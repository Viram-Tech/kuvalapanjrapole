import SectionHead from '../components/SectionHead.jsx'
import { useLang } from '../i18n.jsx'
import { STRUCTURES } from '../data/site.js'

export default function Sponsor() {
  const { t } = useLang()
  return (
    <section id="sponsor" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead index="A" kicker="Sponsor a Structure" title={<>Give a name to <em className="not-italic text-maroon">shelter.</em></>} />
        <p className="mt-6 max-w-2xl text-lg text-ink-2">
          Three permanent structures anchor the sanctuary. Endow one at ₹5,00,000 —
          your family or guru’s name carried on it in perpetuity, and a lasting
          part of the daily care of a thousand animals.
        </p>

        <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-24">
          {STRUCTURES.map((s, i) => {
            const funded = s.status === 'funded'
            const flip = i % 2 === 1
            return (
              <article key={s.id} className="group grid items-center gap-8 md:grid-cols-2 md:gap-14">
                {/* Image (zooms on hover) */}
                <div className={`relative overflow-hidden border border-line ${flip ? 'md:order-2' : ''}`}>
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 md:h-[26rem]"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${
                      funded ? 'bg-olive text-white' : 'bg-paper text-maroon'
                    }`}
                  >
                    {funded ? t('common.funded') : t('common.available')}
                  </span>
                </div>

                {/* Text */}
                <div className={flip ? 'md:order-1' : ''}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-3xl text-ink sm:text-4xl">{s.name}</h3>
                    <span className="font-display text-xl text-maroon">{s.amount}</span>
                  </div>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-2">{s.blurb}</p>
                  <a
                    href="#contact"
                    className={`mt-8 inline-block rounded-full px-6 py-3 font-semibold transition-colors ${
                      funded
                        ? 'pointer-events-none border border-line text-ink/40'
                        : 'bg-maroon text-paper hover:bg-maroon-dark'
                    }`}
                  >
                    {funded ? t('common.funded') : `Sponsor ${s.name}`}
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
