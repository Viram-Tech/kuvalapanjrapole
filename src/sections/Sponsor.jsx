import { useContent } from '../i18n.jsx'
import { STRUCTURES } from '../data/site.js'

function Spark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-maroon" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M12 3l1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8z" />
    </svg>
  )
}

export default function Sponsor() {
  const { c } = useContent()
  return (
    <section id="sponsor" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl">
          {c.sponsor.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ink-2">{c.sponsor.intro}</p>

        <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
          {STRUCTURES.map((s, i) => {
            const funded = s.status === 'funded'
            const flip = i % 2 === 1
            const st = c.sponsor.structures[s.id] || {}
            return (
              <article key={s.id} className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                {/* Image */}
                <div className={`overflow-hidden rounded-2xl ${flip ? 'md:order-2' : ''}`}>
                  <img src={s.image} alt={st.name} className="h-64 w-full object-cover md:h-80" />
                </div>

                {/* Text */}
                <div className={flip ? 'md:order-1 md:px-2' : 'md:px-2'}>
                  <p className="flex items-center gap-2 text-sm text-ink-2">
                    <Spark />
                    {funded ? c.sponsor.funded : c.sponsor.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">{st.name}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-ink-2">{st.blurb}</p>
                  <a
                    href="#contact"
                    className={`mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                      funded
                        ? 'pointer-events-none bg-paper-2 text-ink-2'
                        : 'bg-maroon text-white hover:bg-maroon-dark'
                    }`}
                  >
                    {funded ? c.sponsor.funded : `${c.sponsor.cta} · ${s.amount}`}
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
