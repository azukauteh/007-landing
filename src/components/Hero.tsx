
// Hero.tsx
// Renders the top section of the landing page with logo, headline, and tagline.
// Sets the visual tone and introduces the 007 agent.

import Image from 'next/image'
export default function Hero() {
  return (
    <header
      style={{
        textAlign: 'center',
        padding: '4rem 2rem',
        backgroundImage: 'url("https://i.imgur.com/qFDp4fd.png")', // Imgur-hosted background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
      }}
    >
      {/* Logo image (hosted externally via Imgur or fallback to /logo.png) */}
      <img
        src="" 
        width={120}
        style={{
          marginBottom: '1rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
        }}
      />

      {/* Main headline */}
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
      </h1>

      {/* Supporting tagline */}
      <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
      </p>
    </header>
  )
}