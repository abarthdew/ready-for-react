export default function Card({ title, children, rightSlot }) {
  return (
    <section className="card">
      <header className="card-header">
        <h2>{title}</h2>
        {rightSlot}
      </header>
      {children}
    </section>
  )
}
