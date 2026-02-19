import { useMemo, useState } from 'react'

function calculateInsights(size) {
  let score = 0
  for (let i = 0; i < 200000; i += 1) score += (i * 13) % 7
  return { score: score % 1000, recommendation: size > 3 ? 'Split by domain' : 'Keep simple' }
}

export default function ExpensiveInsightsPanel() {
  const [teamSize, setTeamSize] = useState(4)
  const [filter, setFilter] = useState('all')

  const insight = useMemo(() => calculateInsights(teamSize), [teamSize])

  return (
    <section className="card">
      <h3>useMemo for expensive calculations</h3>
      <div className="row">
        <label>Team Size</label>
        <input type="number" min="1" value={teamSize} onChange={(e) => setTeamSize(Number(e.target.value || 1))} />
      </div>
      <div className="row">
        <label>View</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">all</option>
          <option value="frontend">frontend</option>
          <option value="backend">backend</option>
        </select>
      </div>
      <p>Computed score: {insight.score}</p>
      <p>Recommendation: {insight.recommendation} ({filter} view)</p>
    </section>
  )
}
