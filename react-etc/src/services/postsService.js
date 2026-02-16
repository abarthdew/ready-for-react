import { httpClient } from '@/api/httpClient'

export async function getPosts(limit = 20) {
  const posts = await httpClient.get('/posts')
  return posts.slice(0, limit)
}

export function getPostById(id) {
  return httpClient.get(`/posts/${id}`)
}
