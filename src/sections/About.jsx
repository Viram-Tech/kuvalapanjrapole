import SectionHead from '../components/SectionHead.jsx'
import { ABOUT, ORG, GALLERY } from '../data/site.js'

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead index="C" kicker="About" title={<>A lineage of compassion.</>} />

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1fr] md:items-start">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-ink">{ABOUT.lineage}</p>
            <p className="text-lg leading-relaxed text-ink-2">{ABOUT.land}</p>
            <p className="border-l-2 border-maroon pl-5 text-lg italic text-ink-2">
              Run by the {ORG.sangh}, in service of ahimsa — non-violence toward
              every living being.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {GALLERY.slice(0, 4).map((g) => (
              <figure key={g.src} className="overflow-hidden rounded-none border border-line">
                <img src={g.src} alt={g.caption} className="h-40 w-full object-cover sm:h-48" />
              </figure>
            ))}
          </div>
        </div>

        {/* Gallery strip */}
        <div id="gallery" className="mt-16">
          <p className="eyebrow mb-5 text-xs text-ink-2">Gallery</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {GALLERY.map((g) => (
              <figure key={g.src} className="group overflow-hidden rounded-none border border-line">
                <img
                  src={g.src}
                  alt={g.caption}
                  className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
