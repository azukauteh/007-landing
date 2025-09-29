// Footer.tsx
// Renders the bottom section of the landing page with social links, credits, and animated styling.

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '2rem 1rem',
        fontSize: '0.9rem',
        backgroundColor: '#121826',
        color: '#ccc',
        borderTop: '1px solid #333',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#1a2238'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#121826'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Inspirational credits */}
      <p style={{ marginBottom: '0.5rem' }}>
        Inspired by CodeRabbit & Alx AI for developers
      </p>

      {/* Creator identity */}
      <p style={{ marginBottom: '0.5rem' }}>
        Made with ❤️ by <strong>Uteh Azuka</strong>
      </p>

      {/* Legal links */}
      <p style={{ marginTop: '1rem' }}>
        <a
          href="/license"
          style={{ color: '#888', marginRight: '1rem', textDecoration: 'none' }}
        >
          License
        </a>
        <a
          href="/privacy"
          style={{ color: '#888', textDecoration: 'none' }}
        >
          Privacy
        </a>
      </p>
    </footer>
  )
}
