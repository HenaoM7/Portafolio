import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Miguel Ángel Henao — Data Analyst'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0a0f1a',
          padding: '60px 72px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '5px',
            background: 'linear-gradient(90deg, #22d3ee, #60a5fa, #a78bfa)',
          }}
        />

        {/* Dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, #1e293b 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.4,
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, position: 'relative' }}>

          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                background: 'rgba(34,211,238,0.12)',
                border: '1px solid rgba(34,211,238,0.3)',
                borderRadius: '6px',
                padding: '6px 16px',
                color: '#22d3ee',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Portafolio Profesional
            </div>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#f8fafc',
              lineHeight: 1.05,
              marginBottom: '16px',
              letterSpacing: '-1px',
            }}
          >
            Miguel Ángel
            <br />
            Henao Cañas
          </div>

          {/* Title row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '48px',
            }}
          >
            {['Data Analyst', 'Data Quality', 'Business Intelligence'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    fontSize: '22px',
                    fontWeight: 500,
                    color: i === 0 ? '#22d3ee' : i === 1 ? '#60a5fa' : '#a78bfa',
                  }}
                >
                  {t}
                </span>
                {i < 2 && (
                  <span style={{ color: '#334155', fontSize: '22px' }}>·</span>
                )}
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['SQL', 'Python', 'Power BI', 'PostgreSQL', 'Pandas', 'EDA', 'Machine Learning'].map((tag) => (
              <div
                key={tag}
                style={{
                  background: 'rgba(30,41,59,0.8)',
                  border: '1px solid #1e293b',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  color: '#94a3b8',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #1e293b',
            paddingTop: '24px',
            position: 'relative',
          }}
        >
          <span style={{ color: '#475569', fontSize: '16px' }}>
            Medellín, Colombia
          </span>
          <span style={{ color: '#475569', fontSize: '16px' }}>
            github.com/HenaoM7
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
