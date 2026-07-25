import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { LANGS, useLang } from '../i18n.jsx'

const MENU = [
  { key: 'home', href: '#top', icon: 'home' },
  { key: 'sponsor', href: '#sponsor', icon: 'heart' },
  { key: 'seva', href: '#seva', icon: 'chart' },
  { key: 'about', href: '#about', icon: 'info' },
  { key: 'contact', href: '#contact', icon: 'phone' },
]

function Icon({ name }) {
  const props = {
    viewBox: '0 0 24 24',
    className: 'h-5 w-5 shrink-0 text-ink-2',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  switch (name) {
    case 'home':
      return <svg {...props}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>
    case 'heart':
      return <svg {...props}><path d="M12 21s-7-4.4-9.3-8.6A4.6 4.6 0 0 1 12 6.5a4.6 4.6 0 0 1 9.3 5.9C19 16.6 12 21 12 21Z" /></svg>
    case 'chart':
      return <svg {...props}><path d="M4 4v16h16" /><path d="M8 16v-4" /><path d="M13 16V8" /><path d="M18 16v-6" /></svg>
    case 'info':
      return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M12 11.5v4.5M12 8h.01" /></svg>
    case 'phone':
      return <svg {...props}><path d="M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
    default:
      return null
  }
}

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
          {/* Language (left) */}
          <div className="justify-self-start">
            <LangRow />
          </div>

          {/* Center left empty — the shared BrandMark shrinks into this space */}
          <span aria-hidden />

          {/* Menu (right) */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-2 justify-self-end text-sm text-ink transition-colors hover:text-maroon"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            Menu
          </button>
        </div>
      </motion.header>

      {/* Dashboard drawer menu — partial width, dimmed backdrop */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[65] bg-ink/40 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed left-0 top-0 z-[70] flex h-full w-[84%] max-w-xs flex-col border-r border-line bg-paper shadow-2xl"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* drawer header */}
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <img src="/favicon.png" alt="" aria-hidden="true" className="h-6 w-auto" />
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">Menu</span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="text-ink-2 transition-colors hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 6l12 12M6 18 18 6" />
                  </svg>
                </button>
              </div>

              {/* nav groups */}
              <nav className="flex-1 overflow-y-auto px-3 py-5">
                <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-2">Explore</p>
                <ul className="space-y-0.5">
                  {MENU.map((m) => (
                    <li key={m.key}>
                      <a
                        href={m.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-ink transition-colors hover:bg-paper-2"
                      >
                        <Icon name={m.icon} />
                        <span className="font-medium">{t(`nav.${m.key}`)}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="px-3 pb-2 pt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-2">Language</p>
                <div className="px-3">
                  <LangRow />
                </div>
              </nav>

              {/* footer CTA */}
              <div className="border-t border-line p-4">
                <a
                  href="#sponsor"
                  onClick={() => setOpen(false)}
                  className="block rounded-md bg-maroon px-5 py-3 text-center font-semibold text-paper transition-colors hover:bg-maroon-dark"
                >
                  {t('nav.donate')}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
