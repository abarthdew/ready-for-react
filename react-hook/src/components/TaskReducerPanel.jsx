import { memo, useMemo, useReducer, useState } from 'react'

const initialTasks = [
  { id: 1, title: 'Design route structure', done: true },
  { id: 2, title: 'Build API abstraction', done: false },
]

function taskReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), title: action.title, done: false }]
    case 'toggle':
      return state.map((task) => (task.id === action.id ? { ...task, done: !task.done } : task))
    case 'remove':
      return state.filter((task) => task.id !== action.id)
    default:
      return state
  }
}

const TaskList = memo(function TaskList({ tasks, onToggle, onRemove }) {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <li key={task.id}>
          <label>
            <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} /> {task.title}
          </label>
          <button type="button" onClick={() => onRemove(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
})

export default function TaskReducerPanel({ onToggle, onRemove, onAdd }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)
  const [input, setInput] = useState('')

  const doneCount = useMemo(() => tasks.filter((task) => task.done).length, [tasks])

  const addTask = () => {
    if (!input.trim()) return
    dispatch({ type: 'add', title: input.trim() })
    onAdd()
    setInput('')
  }

  const toggleTask = (id) => {
    dispatch({ type: 'toggle', id })
    onToggle()
  }

  const removeTask = (id) => {
    dispatch({ type: 'remove', id })
    onRemove()
  }

  return (
    <section className="card">
      <h3>useReducer + useMemo + React.memo</h3>
      <p>Total {tasks.length} / Done {doneCount}</p>
      <div className="row">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="New task" />
        <button type="button" onClick={addTask}>Add</button>
      </div>
      <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
    </section>
  )
}
