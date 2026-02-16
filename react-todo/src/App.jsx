import { useEffect, useMemo, useState } from 'react'
import './App.css'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

const STORAGE_KEY = 'react-todo.todos'
const DEFAULT_TODOS = [
  { id: 1, text: 'understanding for React component structures', done: false},
  { id: 2, text: 're-practicing about state/props processing', done: true }
]


function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) return DEFAULT_TODOS

      const parsed = JSON.parse(stored)
      if (!Array.isArray(parsed)) return DEFAULT_TODOS
      return parsed
    } catch {
      return DEFAULT_TODOS
    }
  })

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((todo) => !todo.done)
    if (filter === 'done') return todos.filter((todo) => todo.done)
    return todos
  }, [todos, filter])

  const addTodo = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: trimmed,
        done: false,
      },
    ])
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? {...todo, done: !todo.done} : todo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const doneCount = todos.filter((todo) => todo.done).length

  return (
    <>
      <main className="app">
        <header>
          <h1>React Todo: Todo List</h1>
          <p>
            Total: {todos.length} / Done: {doneCount}
          </p>
        </header>

        <TodoForm onAdd={addTodo} />
        <section className="filter-group" aria-label="todo filter">
          <button type="button" onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>ALL</button>
          <button type="button" onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>ACTIVE</button>
          <button type="button" onClick={() => setFilter('done')} className={filter === 'done' ? 'active' : ''}>DONE</button>
        </section>

        <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
    </>
  )
}

export default App
