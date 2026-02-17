import { useCallback, useState } from 'react'

export function useAsyncAction(action) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const run = useCallback(async (...params) => {
    try {
      setLoading(true)
      setError(null)
      return await action(...params)
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [action])

  return { loading, error, run }
}
