'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import DataTopologyScene from './DataTopologyScene'

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
  } catch {
    return false
  }
}

export default function DataTopologyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(true)
  const [webglOk, setWebglOk] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setWebglOk(supportsWebGL())

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(motionQuery.matches)
    const onMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    motionQuery.addEventListener('change', onMotionChange)

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0,
    })
    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      motionQuery.removeEventListener('change', onMotionChange)
      observer.disconnect()
    }
  }, [])

  if (!webglOk) return null

  return (
    <div ref={containerRef} className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        camera={{ position: [0, 0, 6], fov: 45 }}
        frameloop={inView ? 'always' : 'never'}
      >
        <DataTopologyScene reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
