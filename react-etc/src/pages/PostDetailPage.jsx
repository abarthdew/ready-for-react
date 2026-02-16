import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '@/components/Card'
import ErrorMessage from '@/components/ErrorMessage'
import Loading from '@/components/Loading'
import useAsync from '@/hooks/useAsync'
import { getPostById } from '@/services/postsService'

export default function PostDetailPage() {
  const { id } = useParams()
  const { data, error, loading, run } = useAsync(getPostById)

  useEffect(() => {
    run(id)
  }, [id, run])

  return (
    <Card title={`Post #${id}`} rightSlot={<Link to="/posts">Back to list</Link>}>
      {loading && <Loading />}
      {error && <ErrorMessage message={`Failed to load post: ${error.message}`} />}
      {!loading && !error && data && (
        <article className="detail">
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </article>
      )}
    </Card>
  )
}
