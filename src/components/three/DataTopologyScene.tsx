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
  linePositions: Float32Array
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
  for (let i = 0; i < core.length; i++) {
    let linked = 0
    for (let j = i + 1; j < core.length && linked < 2; j++) {
      if (core[i].distanceTo(core[j]) < CONNECTION_DISTANCE) {
        segments.push(core[i].x, core[i].y, core[i].z, core[j].x, core[j].y, core[j].z)
        linked++
      }
    }
  }
  const linePositions = new Float32Array(segments)

  return { corePositions, anomalyPositions, linePositions }
}

interface DataTopologySceneProps {
  reducedMotion: boolean
}

export default function DataTopologyScene({ reducedMotion }: DataTopologySceneProps) {
  const groupRef = useRef<THREE.Group>(null)
  const { corePositions, anomalyPositions, linePositions } = useMemo(buildField, [])
  const dotTexture = useDotTexture()
  const { viewport } = useThree()
  const pointerTarget = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    if (!groupRef.current) return

    if (!reducedMotion) {
      // Level 1 — ambient: slow constant drift.
      groupRef.current.rotation.y += delta * 0.035
    }

    // Restrained parallax toward pointer position — capped, never disorienting.
    pointerTarget.current.x = THREE.MathUtils.lerp(pointerTarget.current.x, state.pointer.x, 0.02)
    pointerTarget.current.y = THREE.MathUtils.lerp(pointerTarget.current.y, state.pointer.y, 0.02)
    groupRef.current.rotation.x = -pointerTarget.current.y * 0.12
    groupRef.current.rotation.z = pointerTarget.current.x * 0.06
  })

  return (
    <group ref={groupRef} position={[viewport.width > 10 ? 1.1 : 0, 0, 0]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={SLATE} transparent opacity={0.16} />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[corePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          map={dotTexture}
          color={SLATE}
          size={0.065}
          transparent
          opacity={0.85}
          depthWrite={false}
          sizeAttenuation
        />
      </points>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[anomalyPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          map={dotTexture}
          color={BRASS}
          size={0.11}
          transparent
          opacity={1}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  )
}
