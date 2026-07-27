import { useContent } from '../i18n.jsx'
import { FACILITIES } from '../data/site.js'

export default function Facilities() {
  const { c } = useContent()
  
  return (
    <section id="facilities" className="px-4 py-24 sm:px-6 md:py-32 bg-paper-2/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="eyebrow text-xs text-maroon mb-3">{c.nav.explore}</p>
          <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
            {c.facilities.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-2 italic border-l-2 border-saffron pl-4 md:pl-6 text-left max-w-2xl mx-auto">
            “{c.facilities.quote}”
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FACILITIES.map((f) => {
            const name = c.facilities[f.id]
            return (
              <div 
                key={f.id} 
                className="group relative overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-all duration-300 hover:shadow-md hover:border-saffron/40"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-paper-2">
                  <img 
                    src={f.image} 
                    alt={name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                    {name}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
