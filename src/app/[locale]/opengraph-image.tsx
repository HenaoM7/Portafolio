import { ImageResponse } from 'next/og'
import { getTranslations } from 'next-intl/server'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage({
  params,
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale: params.locale, namespace: 'metadata' })

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0b0e13',
          color: '#ece9e2',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 22, color: '#7fa0c2', letterSpacing: 2, textTransform: 'uppercase' }}>
          Henao Intelligence
        </div>
        <div style={{ fontSize: 56, fontWeight: 600, marginTop: 24, lineHeight: 1.2, maxWidth: 950 }}>
          {t('title').split('—')[0]}
        </div>
        <div style={{ fontSize: 26, color: '#9298a3', marginTop: 24, maxWidth: 850 }}>
          {t('description')}
        </div>
      </div>
    ),
    { ...size }
  )
}
