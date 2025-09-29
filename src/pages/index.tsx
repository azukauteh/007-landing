// Import core visual components for the landing page
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Feature from '../components/Feature'
import Footer from '../components/Footer'

// Main landing page component
export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#0a0f1c', color: '#fff' }}>
      <Hero />
      <Intro /> {/* 🔥 Tagline + Headline block */}

      {/* Feature Section */}
     <section style={{ textAlign: 'center', padding: '2rem 2rem 3rem', backgroundColor: '#0a0f1c' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#00bcd4' }}>
          Why Choose 007?
        </h2>
        <Feature
          title="🧩 Modular Architecture"
          description={`Powered by Bun, Zod, Vercel, AI SDK and Google gemini, 007 is engineered for scale. It’s not just modular — it’s blazing-fast, audit-grade, and built to plug into any review flow.

This agent reads your Git diffs, streams intelligent feedback, and helps you maintain clean, scalable codebases — one file at a time.`}
        />
        <Feature
          title="🛡️ Audit-Grade Automation"
          description={`Reproducibility isn’t optional — it’s baked in. From CLI orchestration to schema validation, 007 enforces discipline across every commit.
Expect deterministic outputs, traceable logic, and zero surprises.`}
        />

        <Feature
          title="🤝 Contributor-Friendly"
          description={`Onboarding shouldn’t feel like detective work. 007 delivers badge-driven clarity, scaffolded review outputs, and modular docs that make contributing feel like second nature.

Whether you're fixing a typo or refactoring a module — you're never flying blind.`}
        />
      </section>

      {/* Agent Preview Section */}
      <section
        id="agent-preview"
        style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          backgroundColor: '#111827',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#00bcd4' }}>
          🧠 Agent Preview
        </h2>
        <p style={{ marginBottom: '2rem', color: '#ccc', fontSize: '1rem' }}>
          Here’s how 007 reviews your code  one file at a time.
        </p>
        <img
          src="https://i.imgur.com/gk98LTj.png"
          alt="007 Agent Preview"
          style={{
            maxWidth: '100%',
            width: '700px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          }}
        />
      </section>

      {/* GitHub CTA */}
      <section style={{ textAlign: 'center', padding: '2rem' }}>
        <a
          href="https://github.com/azukauteh/007---Setup"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#ff4081',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            transition: 'background-color 0.3s ease',
          }}
        >
          🚀 Try 007 on GitHub
        </a>
      </section>

      <Footer />
    </main>
  )
}
