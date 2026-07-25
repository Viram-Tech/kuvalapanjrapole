import { useContent } from '../i18n.jsx'
import SevaChart from '../components/SevaChart.jsx'

export default function SevaReport() {
  const { c } = useContent()
  return (
    <section id="seva" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl">
              {c.seva.title}
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink-2">{c.seva.intro}</p>
          </div>
          <SevaChart />
        </div>
      </div>
    </section>
  )
}
