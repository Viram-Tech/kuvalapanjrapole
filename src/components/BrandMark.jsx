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
  const shrink = useTransform(scrollY, [0, end], [1, 0.28])
  const lift = useTransform(scrollY, [0, end], [0, -14]) // nudge up into the bar
  const color = useTransform(scrollY, [0, end], ['#f9f9ff', '#1a1a1a'])
  const subOpacity = useTransform(scrollY, [0, end * 0.7], [1, 0.55])
  const iconOpacity = useTransform(scrollY, [end * 0.55, end], [0, 1]) // navbar only

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {/* Scroll layer — shrinks toward the top (into the navbar) */}
      <motion.div className="absolute inset-0" style={{ scale: shrink, y: lift, transformOrigin: '50% 0%' }}>
        {/* Intro layer — grows out of the reveal, centered → top */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center"
          style={{ transformOrigin: '50% 50%' }}
          initial={{ scale: 0.24, opacity: 0 }}
          animate={{ scale: [0.24, 0.24, 1], opacity: [0, 1, 1] }}
          transition={{ duration: 3, ease: [0.76, 0, 0.24, 1], times: [0, 0.27, 1], delay: 0.3 }}
        >
          <div className="pt-[9vh] text-center">
            <div className="relative inline-flex items-center text-[clamp(1.5rem,5.4vw,4.75rem)]">
              {/* icon fades in only once shrunk into the navbar; absolute so it
                  doesn't shift the centered hero name */}
              <motion.img
                src="/favicon.png"
                alt=""
                aria-hidden="true"
                style={{ opacity: iconOpacity }}
                className="absolute right-full mr-[0.24em] h-[0.8em] w-auto"
              />
              <motion.h1
                lang="en"
                style={{ color }}
                className="font-display font-semibold leading-[0.95] tracking-tight"
              >
                {ORG.nameEn}
              </motion.h1>
            </div>
            <motion.p style={{ color, opacity: subOpacity }} lang="gu" className="font-guj mt-2 text-lg">
              {ORG.nameGu}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
