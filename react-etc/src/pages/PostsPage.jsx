import { useEffect, useMemo, useState } from 'react'
import Card from '@/components/Card'
import ErrorMessage from '@/components/ErrorMessage'
import Loading from '@/components/Loading'
import useAsync from '@/hooks/useAsync'
import { getPosts } from '@/services/postsService'
import PostFilter from '@/features/posts/PostFilter'
import PostList from '@/features/posts/PostList'

export default function PostsPage() {
  const { data, error, loading, run } = useAsync(getPosts)
  const [query, setQuery] = useState('')

  useEffect(() => {
    run(20)
  }, [run])

  const filtered = useMemo(() => {
    if (!data) return []
    const keyword = query.trim().toLowerCase()
    if (!keyword) return data
    return data.filter((post) => post.title.toLowerCase().includes(keyword))
  }, [data, query])

  return (
    <Card title="Posts" rightSlot={<PostFilter query={query} onChange={setQuery} />}>
      {loading && <Loading text="Loading posts from API..." />}
      {error && <ErrorMessage message={`Failed to load posts: ${error.message}`} />}
      {!loading && !error && <PostList posts={filtered} />}
    </Card>
  )
}
