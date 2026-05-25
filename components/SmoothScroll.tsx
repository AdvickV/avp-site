'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768

    const lenis = isMobile
     ? null
     : new Lenis({
        duration: 1.2,
      })

    function raf(time: number) {
      lenis?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis?.destroy()
    }
  }, [])

  return null
}