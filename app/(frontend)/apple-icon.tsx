import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#101010',
          borderRadius: '36px',
          color: '#ffffff',
          fontWeight: 800,
          fontSize: '110px',
          fontFamily: 'sans-serif',
        }}
      >
        R
      </div>
    ),
    {
      ...size,
    }
  )
}

