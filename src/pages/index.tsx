// Import core visual components for the landing page
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Footer from '../components/Footer'


// Main landing page component
export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#0a0f1c', color: '#fff' }}>
      <Hero />

      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#00bcd4' }}>
          Why Choose 007?
        </h2>

      <Feature
  title="🧩 Modular Architecture"
  description={`Powered by Bun, Zod, and GitHub Apps, 007 is engineered for scale. It’s not just modular — it’s blazing-fast, audit-grade, and built to plug into any review flow.

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
