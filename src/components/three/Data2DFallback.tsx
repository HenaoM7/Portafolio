/**
 * Static, zero-JS-cost visual used on mobile (and as the no-WebGL fallback)
 * so the "data topology" language stays present without ever shipping
 * Three.js to a small screen. Deterministic coordinates — no randomness,
 * so server and client markup always match.
 */
const DOTS = [
  [40, 60], [120, 30], [200, 90], [280, 45], [90, 140], [170, 160], [250, 130],
  [40, 200], [150, 220], [230, 210], [310, 180], [60, 280], [180, 300], [270, 270],
]
const ANOMALIES = [[300, 60], [30, 260]]
const LINES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6], [6, 2],
  [4, 7], [7, 8], [8, 5], [8, 9], [9, 6], [7, 11], [11, 12], [12, 8], [12, 13], [13, 9],
]

export default function Data2DFallback() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-40"
      viewBox="0 0 340 340"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {LINES.map(([a, b], i) => (
        <line
          key={i}
          x1={DOTS[a][0]}
          y1={DOTS[a][1]}
          x2={DOTS[b][0]}
          y2={DOTS[b][1]}
          stroke="#7fa0c2"
          strokeWidth="0.6"
          opacity="0.35"
        />
      ))}
      {DOTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.2" fill="#7fa0c2" opacity="0.8" />
      ))}
      {ANOMALIES.map(([x, y], i) => (
        <circle key={`a${i}`} cx={x} cy={y} r="3.4" fill="#d69a4e" />
      ))}
    </svg>
  )
}
