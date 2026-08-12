'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Data2DFallback from './Data2DFallback'

const DataTopologyCanvas = dynamic(() => import('./DataTopologyCanvas'), {
  ssr: false,
  loading: () => null,
})

/** Below this width, skip Three.js entirely — mobile never downloads the 3D chunk. */
const DESKTOP_BREAKPOINT = '(min-width: 1024px)'

export default function HeroVisual() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia(DESKTOP_BREAKPOINT)
    setIsDesktop(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Before hydration confirms viewport, render the static fallback — never a layout jump into 3D.
  if (!mounted || !isDesktop) return <Data2DFallback />

  return <DataTopologyCanvas />
}
