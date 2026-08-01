import { useContent } from '../i18n.jsx'
import { DONATION_TIERS } from '../data/site.js'

// Amounts are stored once (Latin digits); on the Gujarati page they render in
// Gujarati numerals so the /gu experience stays fully in-script.
const GUJ_DIGITS = '૦૧૨૩૪૫૬૭૮૯'
const toGujaratiDigits = (s) => s.replace(/[0-9]/g, (d) => GUJ_DIGITS[+d])

// Donation section — the sanctuary's full 14-tier giving list. Heading, tier
// labels and notes are translated per language; amounts come from shared data.
export default function Sponsor() {
  const { c, lang } = useContent()
  const s = c.sponsor
  const amount = (amt) => (lang === 'gu' ? toGujaratiDigits(`₹${amt}`) : `₹${amt}`)

  return (
    <section id="sponsor" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
          {s.heading}
        </h2>

        {/* 14-tier list */}
        <div className="mt-12 grid gap-x-10 gap-y-0 sm:grid-cols-2 md:mt-16">
          {DONATION_TIERS.map((amt, i) => (
            <div
              key={s.tiers[i]}
              className="flex items-baseline justify-between gap-4 border-b border-line py-4"
            >
              <span className="text-lg text-ink">{s.tiers[i]}</span>
              <span className="shrink-0 font-semibold tabular-nums text-maroon">{amount(amt)}</span>
            </div>
          ))}
        </div>

        {/* Invitation note */}
        <div className="mx-auto mt-12 max-w-3xl space-y-3 text-center leading-relaxed text-ink-2">
          {s.invite.map((p) => (
            <p key={p}>{p}</p>
          ))}
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
        <p className="mx-auto mt-8 max-w-xl rounded-2xl bg-paper-2 px-6 py-3 text-center text-sm text-ink-2">
          {s.tax80g}
        </p>
      </div>
    </section>
  )
}
