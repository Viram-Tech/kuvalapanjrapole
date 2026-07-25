import { TRUST, ORG } from '../data/site.js'

function Row({ label, value }) {
  return (
    <div className="flex flex-col gap-1 border-b border-paper/15 py-4 sm:flex-row sm:items-baseline sm:justify-between">
      <dt className="eyebrow text-[11px] text-paper/50">{label}</dt>
      <dd className="font-medium text-paper sm:text-right">{value}</dd>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="bg-ink px-4 py-24 text-paper sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-paper sm:text-5xl md:text-6xl">
          Registered, transparent, reachable.
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1fr]">
          {/* Trust info */}
          <div>
            <dl>
              <Row label="Trust" value={ORG.nameEn} />
              <Row label="80G Registration" value={<span className="tabular-nums">{TRUST.reg80G}</span>} />
              <Row label="Address" value={<span className="max-w-xs">{TRUST.addressEn}</span>} />
              <Row
                label="Phone"
                value={
                  <span className="flex flex-wrap gap-x-4 gap-y-1 tabular-nums">
                    {TRUST.primaryPhones.map((p) => (
                      <a key={p} href={`tel:+91${p}`} className="transition-colors hover:text-white">
                        +91 {p}
                      </a>
                    ))}
                  </span>
                }
              />
            </dl>

            {/* Bank — placeholder note */}
            <div className="mt-8">
              <p className="eyebrow text-[11px] text-paper/50">Bank / Donation</p>
              <p className="mt-2 text-sm text-paper/60">
                A dedicated giving flow is being finalised. For now, donations by
                bank transfer:
              </p>
              <dl className="mt-4 space-y-1 text-sm text-paper">
                <div className="flex justify-between gap-4"><dt className="text-paper/50">A/c name</dt><dd className="text-right">{TRUST.bank.name}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-paper/50">Bank</dt><dd>{TRUST.bank.bank}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-paper/50">A/c no.</dt><dd className="tabular-nums">{TRUST.bank.account}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-paper/50">IFSC</dt><dd className="tabular-nums">{TRUST.bank.ifsc}</dd></div>
              </dl>
            </div>
          </div>

          {/* Representatives */}
          <div>
            <p className="eyebrow mb-4 text-[11px] text-paper/50">Trustees & representatives</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {TRUST.representatives.map((r) => (
                <li key={r.phone}>
                  <a
                    href={`tel:+91${r.phone}`}
                    className="flex flex-col py-1.5 transition-colors hover:text-white"
                  >
                    <span className="font-medium text-paper">{r.name}</span>
                    <span className="text-sm tabular-nums text-paper/60">+91 {r.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
