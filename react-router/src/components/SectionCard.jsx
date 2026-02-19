export default function SectionCard({ title, right, children }) {
  return (
    <section className="card">
      <header className="card-header">
        <h3>{title}</h3>
        {right}
      </header>
      {children}
    </section>
  )
}