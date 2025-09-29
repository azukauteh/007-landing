
// Feature.tsx
// Renders a single feature block with a title and description.
// Used on the landing page to highlight core capabilities of the 007 agent.


interface FeatureProps {
  title: string        
  description: string   
}

export default function Feature({ title, description }: FeatureProps) {
  return (
    <div
      style={{
        margin: '2rem auto',
        maxWidth: '600px',
        padding: '1.5rem',
        borderRadius: '12px',
        backgroundColor: '#121826', // Dark card background
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        textAlign: 'left',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', color: '#00bcd4', marginBottom: '0.5rem' }}>
        {title}
      </h2>
      <p style={{ fontSize: '1rem', color: '#ccc' }}>
        {description}
      </p>
    </div>
  )
}
