export default function PostFilter({ query, onChange }) {
  return (
    <input
      className="search-input"
      value={query}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Filter posts by title"
    />
  )
}
