import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const to = location.state?.from ?? '/'

  const submit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    login({ email })
    navigate(to, { replace: true })
  }

  return (
    <div className="center-wrap">
      <form className="auth-form" onSubmit={submit}>
        <h2>Sign In</h2>
        <p>Demo login for protected routes.</p>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="user@company.com"
          type="email"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
