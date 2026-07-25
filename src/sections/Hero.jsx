import { motion } from 'motion/react'
import { useContent } from '../i18n.jsx'

// Horizon-style opening: a small centered window opens (clip-path reveal) onto
// the video. The video keeps its original size/framing the whole time — the
// window uncovers more of it, it does NOT zoom. The name lives in <BrandMark/>.
export default function Hero() {
  const { c } = useContent()
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black">
      {/* Clipped layer — revealed by the opening window */}
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
      </motion.div>

      {/* scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-paper/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 0.8 }}
      >
        <span className="eyebrow text-[10px]">{c.hero.scroll}</span>
      </motion.div>
    </section>
  )
}
