import { useEffect, useState } from 'react'

// Horizon's "on top ↑" — appears once you've scrolled past the hero.
export default function OnTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 eyebrow flex items-center gap-1.5 text-[11px] text-ink-2 transition-opacity duration-300 hover:text-ink ${
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      on top <span aria-hidden>↑</span>
    </button>
  )
}
