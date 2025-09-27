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
        Inspired by CodeRabbit & African Leadership AI Program
      </p>

      {/* Creator identity */}
      <p style={{ marginBottom: '0.5rem' }}>
        Made with ❤️ by <strong>Uteh Azuka</strong>
      </p>

      {/* Social icons */}
      <div style={{ margin: '1rem 0', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a
          href="https://github.com/azukauteh/007"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          style={{ color: '#00bcd4', fontSize: '1.5rem' }}
        >
          🐙
        </a>
        <a
          href="https://twitter.com/azukauteh"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          style={{ color: '#1DA1F2', fontSize: '1.5rem' }}
        >
          🐦
        </a>
        <a
          href="https://linkedin.com/in/azukauteh"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          style={{ color: '#0A66C2', fontSize: '1.5rem' }}
        >
          💼
        </a>
      </div>

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
