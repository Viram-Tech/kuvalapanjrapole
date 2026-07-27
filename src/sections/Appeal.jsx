import { useContent } from '../i18n.jsx'

export default function Appeal() {
  const { c } = useContent()
  const ap = c.appeal

  return (
    <section id="appeal" className="px-4 py-24 sm:px-6 md:py-32 bg-paper">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Emergency Help Card */}
          <div className="relative overflow-hidden rounded-3xl border border-line bg-paper-2 p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-maroon/20">
            <span className="eyebrow text-[10px] text-maroon font-semibold tracking-wider bg-maroon/10 px-3 py-1 rounded-full">
              {ap.title}
            </span>
            <h3 className="font-display text-3xl font-bold tracking-tight text-ink mt-6 mb-4">
              {ap.title}
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-ink-2">
              <p>{ap.body1}</p>
              <p className="font-semibold text-ink/90 border-l-2 border-maroon pl-4">
                {ap.body2}
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-maroon-dark shadow-sm"
              >
                {c.nav.donate}
              </a>
            </div>
          </div>

          {/* Join Us Card */}
          <div className="relative overflow-hidden rounded-3xl border border-line bg-paper-2 p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-saffron/20">
            <span className="eyebrow text-[10px] text-saffron font-semibold tracking-wider bg-saffron/10 px-3 py-1 rounded-full">
              {ap.joinTitle}
            </span>
            <h3 className="font-display text-3xl font-bold tracking-tight text-ink mt-6 mb-4">
              {ap.joinTitle}
            </h3>
            <p className="text-base leading-relaxed text-ink-2 mb-6">
              {ap.joinBody}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-line aspect-[4/3]">
                <img 
                  src="/images/joining1.webp" 
                  alt="Rescue shelter" 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-line aspect-[4/3]">
                <img 
                  src="/images/xjoining2.jpg" 
                  alt="Cattle feeding" 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
