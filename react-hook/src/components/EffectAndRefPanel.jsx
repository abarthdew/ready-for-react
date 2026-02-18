import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function EffectAndRefPanel() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const inputRef = useRef(null)
  const boxRef = useRef(null)
  const timerRef = useRef(null)
  const [boxWidth, setBoxWidth] = useState(0)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      const mock = ['react', 'router', 'reducer', 'ref', 'memo', 'context']
      setResults(mock.filter((word) => word.includes(query.toLowerCase())))
    }, 250)

    return () => clearTimeout(timerRef.current)
  }, [query])

  useLayoutEffect(() => {
    if (!boxRef.current) return
    setBoxWidth(Math.round(boxRef.current.getBoundingClientRect().width))
  }, [results.length])

  return (
    <section className="card" ref={boxRef}>
      <h3>useEffect + useLayoutEffect + useRef</h3>
      <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search hooks" />
      <p>Measured panel width: {boxWidth}px</p>
      <p>Debounced mock search results</p>
      <ul className="list">
        {results.map((result) => <li key={result}>{result}</li>)}
      </ul>
    </section>
  )
}
