import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { LANGS, useLang } from '../i18n.jsx'

const MENU = [
  { key: 'sponsor', href: '#sponsor', idx: 'A' },
  { key: 'seva', href: '#seva', idx: 'B' },
  { key: 'about', href: '#about', idx: 'C' },
  { key: 'contact', href: '#contact', idx: 'D' },
]

function LangRow({ className = '' }) {
  const { lang, setLang } = useLang()
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {LANGS.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-ink/30">/</span>}
          <button
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={lang === l.code}
            className={`text-sm transition-colors ${lang === l.code ? 'text-ink' : 'text-ink/40 hover:text-ink'}`}
          >
            {l.short}
          </button>
        </span>
      ))}
    </div>
  )
}

export default function HorizonHeader() {
  const { t } = useLang()
  const [show, setShow] = useState(false) // revealed after the hero (page 2+)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.5
      setShow(past)
      if (!past) setOpen(false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 border-b border-ink/15 bg-paper"
        initial={false}
        animate={show ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: show ? 'auto' : 'none' }}
        aria-hidden={!show}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-3 items-center px-4 py-4 sm:px-8">
          {/* Menu (left) */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="justify-self-start text-sm text-ink transition-colors hover:text-maroon"
          >
            {open ? 'Close' : 'Menu'}
          </button>

          {/* Center left empty — the shared BrandMark shrinks into this space */}
          <span aria-hidden />


          {/* Language (right) */}
          <div className="justify-self-end">
            <LangRow />
          </div>
        </div>
      </motion.header>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-paper px-4 pb-10 pt-24 sm:px-8"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mx-auto w-full max-w-[1600px]">
              <ul className="divide-y divide-line border-y border-line">
                {MENU.map((m) => (
                  <li key={m.key}>
                    <a
                      href={m.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-6 py-6 sm:py-8"
                    >
                      <span className="eyebrow w-8 text-xs text-ink-2">/{m.idx}</span>
                      <span className="font-display text-4xl font-semibold tracking-tight text-ink transition-colors group-hover:text-maroon sm:text-6xl">
                        {t(`nav.${m.key}`)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex items-center justify-between">
                <LangRow />
                <a
                  href="#sponsor"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-maroon px-6 py-3 font-semibold text-paper transition-colors hover:bg-maroon-dark"
                >
                  {t('nav.donate')}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
