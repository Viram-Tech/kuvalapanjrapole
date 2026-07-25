import SectionHead from '../components/SectionHead.jsx'
import SevaChart from '../components/SevaChart.jsx'

export default function SevaReport() {
  return (
    <section id="seva" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <SectionHead index="B" kicker="Seva Report" title={<>Where every rupee goes.</>} />
            <p className="mt-6 max-w-md text-lg text-ink-2">
              An aggregate, monthly view of the trust’s spending — no names, no
              spreadsheet dump. Fodder is the largest and most seasonal cost;
              medical and shelter carry the rest of daily care.
            </p>
          </div>
          <SevaChart />
        </div>
      </div>
    </section>
  )
}
