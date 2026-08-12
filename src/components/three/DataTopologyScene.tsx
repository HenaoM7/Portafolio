'use client'

import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const SLATE = '#7fa0c2'
const BRASS = '#d69a4e'
const POINT_COUNT = 220
const ANOMALY_COUNT = 4
const FIELD_RADIUS = 3.4
const CONNECTION_DISTANCE = 1.05

/** Soft circular sprite so points read as dots, not squares. */
function useDotTexture() {
  return useMemo(() => {
    const size = 64
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.6)')
    gradient.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)
    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [])
}

function randomInSphere(radius: number): THREE.Vector3 {
  const u = Math.random()
  const v = Math.random()
  const theta = 2 * Math.PI * u
  const phi = Math.acos(2 * v - 1)
  const r = radius * Math.cbrt(Math.random())
  return new THREE.Vector3(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta) * 0.6,
    r * Math.cos(phi) * 0.5
  )
}

interface FieldData {
  corePositions: Float32Array
  anomalyPositions: Float32Array
  anomalyVectors: THREE.Vector3[]
  linePositions: Float32Array
  lineLengths: number[]
}

function buildField(): FieldData {
  const core: THREE.Vector3[] = []
  for (let i = 0; i < POINT_COUNT - ANOMALY_COUNT; i++) {
    core.push(randomInSphere(FIELD_RADIUS))
  }

  // Anomalies: pulled outward from the cluster along their own direction, so they visibly separate.
  const anomalies: THREE.Vector3[] = []
  for (let i = 0; i < ANOMALY_COUNT; i++) {
    const base = randomInSphere(FIELD_RADIUS * 0.7)
    const direction = base.clone().normalize()
    anomalies.push(base.add(direction.multiplyScalar(FIELD_RADIUS * 0.85)))
  }

  const corePositions = new Float32Array(core.length * 3)
  core.forEach((p, i) => p.toArray(corePositions, i * 3))

  const anomalyPositions = new Float32Array(anomalies.length * 3)
  anomalies.forEach((p, i) => p.toArray(anomalyPositions, i * 3))

  // Connections: link each core point to its nearest few neighbors within a distance threshold.
  const segments: number[] = []
  const lineLengths: number[] = []
  for (let i = 0; i < core.length; i++) {
    let linked = 0
    for (let j = i + 1; j < core.length && linked < 2; j++) {
      const d = core[i].distanceTo(core[j])
      if (d < CONNECTION_DISTANCE) {
        segments.push(core[i].x, core[i].y, core[i].z, core[j].x, core[j].y, core[j].z)
        lineLengths.push(d, d)
        linked++
      }
    }
  }
  const linePositions = new Float32Array(segments)

  return { corePositions, anomalyPositions, anomalyVectors: anomalies, linePositions, lineLengths }
}

interface DataTopologySceneProps {
  reducedMotion: boolean
}

export default function DataTopologyScene({ reducedMotion }: DataTopologySceneProps) {
  const groupRef = useRef<THREE.Group>(null)
  const lineMaterialRef = useRef<THREE.LineBasicMaterial>(null)
  const coreMaterialRef = useRef<THREE.PointsMaterial>(null)
  const anomalyMaterialRef = useRef<THREE.PointsMaterial>(null)
  const { corePositions, anomalyPositions, anomalyVectors, linePositions } = useMemo(buildField, [])
  const dotTexture = useDotTexture()
  const { viewport, camera } = useThree()
  const pointerTarget = useRef({ x: 0, y: 0 })
  const proximityGlow = useRef(0)
  const elapsed = useRef(0)

  // Scratch objects reused every frame — avoid per-frame allocation.
  const worldPos = useMemo(() => new THREE.Vector3(), [])
  const ndc = useMemo(() => new THREE.Vector3(), [])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    elapsed.current += delta

    if (!reducedMotion) {
      // Level 1 — ambient: slow constant drift.
      groupRef.current.rotation.y += delta * 0.035
    }

    // Restrained parallax toward pointer position — capped, never disorienting.
    pointerTarget.current.x = THREE.MathUtils.lerp(pointerTarget.current.x, state.pointer.x, 0.02)
    pointerTarget.current.y = THREE.MathUtils.lerp(pointerTarget.current.y, state.pointer.y, 0.02)
    groupRef.current.rotation.x = -pointerTarget.current.y * 0.12
    groupRef.current.rotation.z = pointerTarget.current.x * 0.06

    // Complexity → Investigation: the network reveals itself over the first few seconds
    // rather than appearing fully formed — connections resolve after the points do.
    const pointsReveal = THREE.MathUtils.smoothstep(elapsed.current, 0.2, 1.6)
    const linesReveal = THREE.MathUtils.smoothstep(elapsed.current, 1.0, 3.2)
    if (coreMaterialRef.current) coreMaterialRef.current.opacity = pointsReveal * 0.85
    if (lineMaterialRef.current) lineMaterialRef.current.opacity = linesReveal * 0.16

    // Investigation on hover: find how close the pointer ray is to any anomaly, in
    // screen space (NDC) — cheap since there are only 4 anomalies to check.
    let minDist = Infinity
    for (const p of anomalyVectors) {
      worldPos.copy(p).applyMatrix4(groupRef.current.matrixWorld)
      ndc.copy(worldPos).project(camera)
      const d = Math.hypot(ndc.x - state.pointer.x, ndc.y - state.pointer.y)
      if (d < minDist) minDist = d
    }
    const targetGlow = reducedMotion ? 0 : THREE.MathUtils.clamp(1 - minDist / 0.22, 0, 1)
    proximityGlow.current = THREE.MathUtils.lerp(proximityGlow.current, targetGlow, 0.08)

    if (anomalyMaterialRef.current) {
      const breathe = reducedMotion ? 0 : Math.sin(elapsed.current * 1.4) * 0.015
      anomalyMaterialRef.current.opacity = pointsReveal
      anomalyMaterialRef.current.size = 0.11 + breathe + proximityGlow.current * 0.09
    }
  })

  return (
    <group ref={groupRef} position={[viewport.width > 10 ? 1.1 : 0, 0, 0]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial ref={lineMaterialRef} color={SLATE} transparent opacity={0} />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[corePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={coreMaterialRef}
          map={dotTexture}
          color={SLATE}
          size={0.065}
          transparent
          opacity={0}
          depthWrite={false}
          sizeAttenuation
        />
      </points>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[anomalyPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={anomalyMaterialRef}
          map={dotTexture}
          color={BRASS}
          size={0.11}
          transparent
          opacity={0}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  )
}
