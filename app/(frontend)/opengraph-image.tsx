import { ImageResponse } from 'next/og'

export const alt = 'RAMART ATELIÉR | Architektonické štúdio Ing. arch. Martin Rajčan'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#101010',
          padding: '60px 80px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid border */}
        <div
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            right: '30px',
            bottom: '30px',
            border: '1px solid rgba(162, 162, 162, 0.25)',
            borderRadius: '6px',
          }}
        />

        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(222, 217, 205, 0.2)',
            paddingBottom: '24px',
          }}
        >
          <span
            style={{
              fontSize: '14px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#a2a2a2',
              fontFamily: 'monospace',
            }}
          >
            ATELIÉR ARCHITEKTÚRY / ING. ARCH. MARTIN RAJČAN
          </span>
          <span
            style={{
              fontSize: '13px',
              letterSpacing: '0.2em',
              color: '#ded9cd',
              fontFamily: 'monospace',
            }}
          >
            SKA 2013
          </span>
        </div>

        {/* Main Center Typography */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              fontSize: '92px',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>RAMART</span>
            <span style={{ color: '#68707d' }}>STUDIO</span>
          </div>

          <p
            style={{
              fontSize: '24px',
              fontWeight: 300,
              color: '#e2ded5',
              marginTop: '32px',
              lineHeight: 1.4,
              maxWidth: '900px',
            }}
          >
            Autorská architektúra rodinných domov, moderné materiály a prémiové realizácie.
          </p>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(222, 217, 205, 0.2)',
            paddingTop: '24px',
            fontFamily: 'monospace',
            fontSize: '13px',
            letterSpacing: '0.2em',
            color: '#a2a2a2',
          }}
        >
          <span>LAZOVNÁ 43, BANSKÁ BYSTRICA</span>
          <span style={{ color: '#ffffff' }}>WWW.RAMARTSTUDIO.SK</span>
          <span>+421 908 477 417</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

