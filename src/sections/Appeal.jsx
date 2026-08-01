import { useContent } from '../i18n.jsx'

// Appeal — the sanctuary's donor letter, translated per language (institution
// and guru names are kept in Gujarati script within every language).
export default function Appeal() {
  const { c } = useContent()
  const ap = c.appeal

  return (
    <section id="appeal" className="bg-paper px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-stretch lg:gap-8">
          {/* Letter */}
          <div className="rounded-3xl border border-line bg-paper-2 p-8 shadow-sm md:p-10">
            <p className="text-xl font-semibold text-ink sm:text-2xl">{ap.salutation}</p>
            <p className="mt-4 text-lg text-maroon sm:text-xl">{ap.greeting}</p>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-2 sm:text-xl">
              {ap.paras.map((p, i) =>
                i === ap.paras.length - 1 ? (
                  <p key={p} className="border-l-2 border-maroon pl-4 font-semibold text-ink/90">
                    {p}
                  </p>
                ) : (
                  <p key={p}>{p}</p>
                ),
              )}
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-maroon-dark"
              >
                {c.nav.donate}
              </a>
            </div>
          </div>

          {/* Images — on large screens they sit at the top and bottom of the
              letter's height, with a decorative divider filling the space between,
              so the second image ends near the Donate button. */}
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:flex lg:h-full lg:flex-col lg:gap-0">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <img
                src="/images/joining1.webp"
                alt="Rescue shelter"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Divider — only in the tall gap on large screens */}
            <div className="hidden flex-1 flex-col items-center justify-center py-4 lg:flex" aria-hidden>
              <span className="w-px flex-1 bg-line" />
              <svg viewBox="0 0 24 24" className="my-3 h-4 w-4 text-maroon" fill="currentColor">
                <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z" />
              </svg>
              <span className="w-px flex-1 bg-line" />
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <img
                src="/images/xjoining2.jpg"
                alt="Cattle feeding"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
