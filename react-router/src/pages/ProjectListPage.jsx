import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionCard from '@/components/SectionCard'
import { projectsApi } from '@/api/projectsApi'

const initialForm = { name: '', status: 'todo', ownerId: 'u1', description: '' }

export default function ProjectListPage() {
  const [projects, setProjects] = useState([])
  const [form, setForm] = useState(initialForm)

  async function load() {
    const data = await projectsApi.list()
    setProjects(data)
  }

  useEffect(() => {
    load()
  }, [])

  const createProject = async (event) => {
    event.preventDefault()
    await projectsApi.create(form)
    setForm(initialForm)
    load()
  }

  const deleteProject = async (projectId) => {
    await projectsApi.remove(projectId)
    load()
  }

  return (
    <div className="grid-2">
      <SectionCard title="Create Project">
        <form className="form" onSubmit={createProject}>
          <input placeholder="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input placeholder="owner user id" value={form.ownerId} onChange={(e) => setForm({ ...form, ownerId: e.target.value })} required />
          <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
            <option value="todo">todo</option>
            <option value="in-progress">in-progress</option>
            <option value="done">done</option>
          </select>
          <textarea placeholder="description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
          <button type="submit">Create</button>
        </form>
      </SectionCard>

      <SectionCard title="Project List">
        <ul className="list">
          {projects.map((project) => (
            <li key={project.id}>
              <div>
                <strong>{project.name}</strong>
                <p>{project.status} · owner: {project.ownerId}</p>
              </div>
              <div className="row">
                <Link to={`/projects/${project.id}`}>Detail</Link>
                <button type="button" onClick={() => deleteProject(project.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  )
}
