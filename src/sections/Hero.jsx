import { motion } from 'motion/react'
import { useLang } from '../i18n.jsx'
import { STATS, ANIMALS, ORG } from '../data/site.js'

// Horizon-style opening: a small centered window opens (clip-path reveal) onto
// the video. The video keeps its original size/framing the whole time — the
// window uncovers more of it, it does NOT zoom.
export default function Hero() {
  const { t } = useLang()

  return (
    <>
      <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black">
        {/* Clipped layer — everything inside is revealed by the opening window */}
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: 'inset(62% 38% 38% 38%)' }}
          animate={{
            clipPath: [
              'inset(62% 38% 38% 38%)', // 1 — a thin horizontal line
              'inset(38% 38% 38% 38%)', // 2 — grows upward into a screen-aspect rectangle
              'inset(0% 0% 0% 0%)', //     3 — scales up uniformly to fill the screen
            ],
          }}
          transition={{ duration: 3, ease: [0.76, 0, 0.24, 1], times: [0, 0.27, 1], delay: 0.3 }}
        >
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="/hero-poster.jpg">
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/35" />

          {/* Poster — the name sits at the TOP and the mark is centered; the
              whole poster scales up out of the rectangle, so the name grows and
              settles at the top (Horizon-style). The video never scales. */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ scale: 0.24, opacity: 0 }}
            /* Same timeline as the clip reveal: stay small (and fade in) while
               the rectangle forms, then grow from small→full in lockstep with
               the video's expansion. */
            animate={{ scale: [0.24, 0.24, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 3, ease: [0.76, 0, 0.24, 1], times: [0, 0.27, 1], delay: 0.3 }}
            style={{ transformOrigin: 'center center' }}
          >
            {/* name, pinned near the top */}
            <div className="absolute inset-x-0 top-[9vh] flex flex-col items-center px-6 text-center text-paper">
              <p className="eyebrow mb-4 text-[11px] text-paper/70">{t('hero.eyebrow')}</p>
              <h1 className="font-display text-[clamp(2.2rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tight">
                {ORG.brand}
              </h1>
              <p lang="gu" className="font-guj mt-3 text-lg text-paper/85">{ORG.nameGu}</p>
            </div>

            {/* horizon mark, centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                className="text-paper/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.05, times: [0, 0.15, 0.6, 1], delay: 1.1 }}
              >
                <circle cx="36" cy="36" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="17" y1="36" x2="55" y2="36" stroke="currentColor" strokeWidth="1" />
              </motion.svg>
            </div>
          </motion.div>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-paper/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 0.8 }}
        >
          <span className="eyebrow text-[10px]">Scroll</span>
        </motion.div>
      </section>

      {/* Aggregate stats band — first content of the "normal site" */}
      <section className="px-4 pt-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-3xl text-2xl leading-snug text-ink sm:text-3xl">{t('hero.body')}</p>
          <dl className="mt-12 grid grid-cols-2 divide-line border-y border-line md:grid-cols-4 md:divide-x">
            {STATS.map((s) => (
              <div key={s.label} className="px-2 py-7 md:px-6">
                <dt className="font-display text-4xl font-semibold text-ink sm:text-5xl">{s.value}</dt>
                <dd className="mt-1 text-sm text-ink-2">{s.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-3xl text-sm text-ink-2">
            <span className="text-ink">Sheltering:</span> {ANIMALS}
          </p>
        </div>
      </section>
    </>
  )
}
