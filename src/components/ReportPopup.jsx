import { useEffect, useState } from 'react'
import { useContent } from '../i18n.jsx'

const PDF = '/seva-report-2024.pdf'
const IMAGE = '/images/seva-report-2024.jpg'
const SESSION_KEY = 'reportPopupSeen'
const MIN_DWELL_MS = 8000 // must spend at least this long on the page

// True once the visitor has scrolled past the full-height hero/video section.
function pastHero() {
  const hero = document.getElementById('top')
  if (hero) return hero.getBoundingClientRect().bottom <= 0
  return window.scrollY > window.innerHeight // fallback: one viewport
}

// A one-time-per-session announcement modal for the annual seva report.
// Surfaces only once the visitor has both scrolled into the page and spent a
// little time on it — an engaged reader, not someone who just landed.
export default function ReportPopup() {
  const { c } = useContent()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Dev/testing override: ?popup=1 forces it open, bypassing the once-per-
    // session flag and the scroll/dwell triggers.
    if (new URLSearchParams(window.location.search).has('popup')) {
      setOpen(true)
      return
    }

    try {
      if (sessionStorage.getItem(SESSION_KEY)) return
    } catch {
      /* sessionStorage unavailable — fall through and still show once */
    }

    let scrolled = false
    let dwelled = false

    const trigger = () => {
      if (!scrolled || !dwelled) return
      window.removeEventListener('scroll', onScroll)
      setOpen(true)
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch {
        /* ignore */
      }
    }

    const onScroll = () => {
      if (pastHero()) {
        scrolled = true
        trigger()
      }
    }

    const timer = setTimeout(() => {
      dwelled = true
      trigger()
    }, MIN_DWELL_MS)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Lock body scroll and wire Escape while the modal is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (!open) return null
  const t = c.popup

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.title}
      className="fixed inset-0 z-50 flex flex-col bg-wine/70 backdrop-blur-sm animate-[fadeIn_0.3s_ease]"
    >
      {/* Slim top bar with actions */}
      <div className="flex shrink-0 items-center justify-end gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <a
            href={PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-4 py-2 text-xs font-semibold text-paper transition-colors hover:bg-maroon-dark sm:text-sm"
          >
            {t.open} <span aria-hidden>↗</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.close}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/15 text-2xl leading-none text-paper transition-colors hover:bg-paper/30"
          >
            <span aria-hidden>×</span>
          </button>
        </div>
      </div>

      {/* Full-page report image (scrollable, links to the PDF) */}
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-6 sm:px-6">
        <a
          href={PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto block w-full max-w-2xl animate-[popIn_0.35s_cubic-bezier(0.16,1,0.3,1)]"
        >
          <img
            src={IMAGE}
            alt={t.title}
            className="w-full rounded-xl border border-line bg-paper shadow-2xl"
          />
        </a>
      </div>
    </div>
  )
}
