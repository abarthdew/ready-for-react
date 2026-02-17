import { useEffect, useState } from 'react'
import SectionCard from '@/components/SectionCard'
import { usersApi } from '@/api/usersApi'

const emptyUser = { name: '', email: '', role: 'dev' }

export default function UserManagementPage() {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState(emptyUser)

  async function load() {
    setUsers(await usersApi.list())
  }

  useEffect(() => {
    load()
  }, [])

  const create = async (event) => {
    event.preventDefault()
    await usersApi.create(form)
    setForm(emptyUser)
    load()
  }

  const updateRole = async (userId, role) => {
    await usersApi.update(userId, { role })
    load()
  }

  const remove = async (userId) => {
    await usersApi.remove(userId)
    load()
  }

  return (
    <SectionCard title="Users CRUD">
      <form className="form-inline" onSubmit={create}>
        <input placeholder="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="pm">pm</option>
          <option value="dev">dev</option>
          <option value="qa">qa</option>
        </select>
        <button type="submit">Add User</button>
      </form>

      <ul className="list">
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <strong>{user.name}</strong>
              <p>{user.email}</p>
            </div>
            <div className="row">
              <select value={user.role} onChange={(e) => updateRole(user.id, e.target.value)}>
                <option value="pm">pm</option>
                <option value="dev">dev</option>
                <option value="qa">qa</option>
              </select>
              <button type="button" onClick={() => remove(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </SectionCard>
  )
}
