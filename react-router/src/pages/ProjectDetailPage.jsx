import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SectionCard from '@/components/SectionCard'
import { projectsApi } from '@/api/projectsApi'
import { tasksApi } from '@/api/tasksApi'

const emptyTask = { title: '', status: 'todo', assigneeId: 'u1' }

export default function ProjectDetailPage() {
  const { projectId } = useParams()
  const [project, setProject] = useState(null)
  const [tasks, setTasks] = useState([])
  const [taskForm, setTaskForm] = useState(emptyTask)

  async function load() {
    const [detail, allTasks] = await Promise.all([projectsApi.detail(projectId), tasksApi.list()])
    setProject(detail)
    setTasks(allTasks)
  }

  useEffect(() => {
    load()
  }, [projectId])

  const projectTasks = useMemo(
    () => tasks.filter((task) => task.projectId === projectId),
    [tasks, projectId],
  )

  const updateProject = async (key, value) => {
    await projectsApi.update(projectId, { [key]: value })
    load()
  }

  const createTask = async (event) => {
    event.preventDefault()
    await tasksApi.create({ ...taskForm, projectId })
    setTaskForm(emptyTask)
    load()
  }

  const updateTask = async (taskId, payload) => {
    await tasksApi.update(taskId, payload)
    load()
  }

  const removeTask = async (taskId) => {
    await tasksApi.remove(taskId)
    load()
  }

  if (!project) {
    return (
      <SectionCard title="Project not found">
        <Link to="/projects">Back</Link>
      </SectionCard>
    )
  }

  return (
    <div className="grid-2">
      <SectionCard title={`Project: ${project.name}`}>
        <label>Status</label>
        <select value={project.status} onChange={(e) => updateProject('status', e.target.value)}>
          <option value="todo">todo</option>
          <option value="in-progress">in-progress</option>
          <option value="done">done</option>
        </select>
        <label>Description</label>
        <textarea value={project.description} onChange={(e) => updateProject('description', e.target.value)} />
      </SectionCard>

      <SectionCard title="Task CRUD by Project">
        <form className="form" onSubmit={createTask}>
          <input placeholder="title" value={taskForm.title} onChange={(e) => setTaskForm({ ...taskForm, title: e.target.value })} required />
          <select value={taskForm.status} onChange={(e) => setTaskForm({ ...taskForm, status: e.target.value })}>
            <option value="todo">todo</option>
            <option value="in-review">in-review</option>
            <option value="done">done</option>
          </select>
          <input placeholder="assignee user id" value={taskForm.assigneeId} onChange={(e) => setTaskForm({ ...taskForm, assigneeId: e.target.value })} required />
          <button type="submit">Create Task</button>
        </form>

        <ul className="list">
          {projectTasks.map((task) => (
            <li key={task.id}>
              <div>
                <strong>{task.title}</strong>
                <p>{task.status} · assignee: {task.assigneeId}</p>
              </div>
              <div className="row">
                <button type="button" onClick={() => updateTask(task.id, { status: task.status === 'done' ? 'todo' : 'done' })}>
                  Toggle Done
                </button>
                <button type="button" onClick={() => removeTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  )
}