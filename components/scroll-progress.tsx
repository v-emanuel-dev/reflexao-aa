'use client'

import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-1 origin-left bg-ocean-500 dark:bg-ocean-200"
      style={{ scaleX: scrollYProgress, width: '100%' }}
    />
  )
}
