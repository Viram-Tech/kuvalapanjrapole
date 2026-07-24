import { ORG, TRUST } from '../data/site.js'

const MAP_QUERY = 'Shri Radhanpur Khodadhor Panjrapole Sanstha'
const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467554.0037228136!2d71.14152272128779!3d23.720061298339832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395b9f032b4a5ccd%3A0x13c1b19589c93bef!2sShri%20Radhanpur%20Khodadhor%20Panjrapole%20Sanstha!5e0!3m2!1sen!2sin!4v1784903735395!5m2!1sen!2sin'
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
            <span aria-hidden>📍</span> Shri Khodadhor Panjrapole, Kuvala — view on Google Maps
          </a>
        </div>

        {/* Town location */}
        <div className="overflow-hidden border border-line">
          <iframe
            title="Shri Radhanpur Khodadhor Panjrapole Sanstha on Google Maps"
            src={MAP_EMBED}
            className="h-56 w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
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
