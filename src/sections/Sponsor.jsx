import { useContent } from '../i18n.jsx'
import { DONATION_TIERS } from '../data/site.js'

// Donation section — the sanctuary's full 14-tier giving list, in Gujarati
// (matches the poster's donation box). The heading is the poster's own line.
export default function Sponsor() {
  const { c } = useContent()
  return (
    <section id="sponsor" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-guj text-center font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
          આપની લક્ષ્મીનું તર્પણ કરશે અબોલ જીવોને અર્પણ
        </h2>

        {/* 14-tier list */}
        <div className="mt-12 grid gap-x-10 gap-y-0 sm:grid-cols-2 md:mt-16">
          {DONATION_TIERS.map((t) => (
            <div
              key={`${t.amount}-${t.label}`}
              className="font-guj flex items-baseline justify-between gap-4 border-b border-line py-4"
            >
              <span className="text-lg text-ink">{t.label}</span>
              <span className="shrink-0 font-semibold tabular-nums text-maroon">{t.amount}</span>
            </div>
          ))}
        </div>

        {/* Invitation note (from the poster, below the tier box) */}
        <div className="font-guj mx-auto mt-12 max-w-3xl space-y-3 text-center leading-relaxed text-ink-2">
          <p>
            આપને અમારું ભાવભર્યું નિમંત્રણ છે, કે આપ આ સંસ્થાની મુલાકાત લઈ અબોલ જીવોને યાદ કરી આ જીવદયાનું કાર્યમાં સહભાગી બનશો. સંસ્થાને મોકલાવી રકમ ફાસ્ટ ડ્રાફ્ટ થી શ્રી કુવાળા ખોડાઢોર પાંજરાપોળના નામે મોકલવો.
          </p>
          <p>વધુ જાણકારી માટે નિચેના સંપર્ક સૂત્રોનો સંપર્ક કરવા વિનંતી.</p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-maroon px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-maroon-dark"
          >
            {c.nav.donate}
          </a>
        </div>

        {/* 80G tax-exemption note */}
        <p className="font-guj mx-auto mt-8 max-w-xl rounded-2xl bg-paper-2 px-6 py-3 text-center text-sm text-ink-2">
          સંસ્થાને અપાતી રકમ 80જી ની કલમ અનુસાર કરમુક્ત છે.
        </p>
      </div>
    </section>
  )
}
