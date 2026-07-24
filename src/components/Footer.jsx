import { ORG, TRUST } from '../data/site.js'

const MAP_QUERY = 'Shree Khodadhor Panjrapol Kuvala'
const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=15&output=embed`
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <img src="/logo-transparent.png" alt={ORG.nameEn} className="h-9 w-auto" />
          <p className="mt-5 max-w-sm text-sm text-ink-2">
            {ORG.nameEn} — a Jain animal sanctuary in {ORG.place}. 80G tax-exempt
            registered trust ({TRUST.reg80G}).
          </p>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex items-center gap-2 text-sm text-ink underline underline-offset-4 transition-colors hover:text-maroon"
          >
            <span aria-hidden>📍</span> Shree Khodadhor Panjrapol, Kuvala — view on Google Maps
          </a>
        </div>

        {/* Town location */}
        <div className="overflow-hidden border border-line">
          <iframe
            title="Kuvala location on Google Maps"
            src={MAP_EMBED}
            className="h-56 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-line pt-6 text-sm text-ink-2 sm:flex-row sm:items-center sm:justify-between">
        <p lang="gu" className="font-guj text-base text-ink">{ORG.nameGu}</p>
        <p>Serving animals with compassion · ahimsa parmo dharma</p>
      </div>
    </footer>
  )
}
