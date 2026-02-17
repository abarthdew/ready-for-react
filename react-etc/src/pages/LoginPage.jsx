import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from ?? '/'

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return

    login({ email })
    navigate(from, { replace: true })
  }

  return (
    <div className="login-wrap">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p className="login-help">Demo auth: enter any email to continue.</p>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}
