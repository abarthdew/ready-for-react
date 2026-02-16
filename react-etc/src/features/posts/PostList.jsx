import { Link } from 'react-router-dom'

export default function PostList({ posts }) {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <p>{post.body.slice(0, 90)}...</p>
        </li>
      ))}
    </ul>
  )
}
