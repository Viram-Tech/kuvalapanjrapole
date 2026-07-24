import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ORG } from '../data/site.js'

// The single shared wordmark. During the opening it grows out of the video
// reveal (centered → top). As you scroll it shrinks and slides up into the
// navbar, its colour shifting from light (over the video) to ink (over paper).
export default function BrandMark() {
  const { scrollY } = useScroll()
  const [h, setH] = useState(() => (typeof window !== 'undefined' ? window.innerHeight : 800))

  useEffect(() => {
    const onResize = () => setH(window.innerHeight)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const end = h * 0.7 // shrink completes at 70% of the first screen
  const shrink = useTransform(scrollY, [0, end], [1, 0.2])
  const color = useTransform(scrollY, [0, end], ['#f4f3f0', '#171614'])
  const subOpacity = useTransform(scrollY, [0, end * 0.7], [1, 0.55])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {/* Scroll layer — shrinks toward the top (into the navbar) */}
      <motion.div className="absolute inset-0" style={{ scale: shrink, transformOrigin: '50% 0%' }}>
        {/* Intro layer — grows out of the reveal, centered → top */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center"
          style={{ transformOrigin: '50% 50%' }}
          initial={{ scale: 0.24, opacity: 0 }}
          animate={{ scale: [0.24, 0.24, 1], opacity: [0, 1, 1] }}
          transition={{ duration: 3, ease: [0.76, 0, 0.24, 1], times: [0, 0.27, 1], delay: 0.3 }}
        >
          <div className="pt-[9vh] text-center">
            <motion.h1
              style={{ color }}
              className="font-display text-[clamp(2.2rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tight"
            >
              {ORG.brand}
            </motion.h1>
            <motion.p style={{ color, opacity: subOpacity }} lang="gu" className="font-guj mt-2 text-lg">
              {ORG.nameGu}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
