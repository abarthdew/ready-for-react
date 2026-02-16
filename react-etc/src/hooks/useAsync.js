import { useCallback, useState } from 'react'

export default function useAsync(asyncFn) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const run = useCallback(async (...params) => {
    try {
      setLoading(true)
      setError(null)
      const result = await asyncFn(...params)
      setData(result)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [asyncFn])

  return { data, error, loading, run }
}
