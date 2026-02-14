import { useMemo, useState } from 'react'
import './App.css'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'React 컴포넌트 구조 익히기', done: false },
    { id: 2, text: 'state/props 흐름 복습하기', done: true },
  ])
  const [filter, setFilter] = useState('all')

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
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const doneCount = todos.filter((todo) => todo.done).length

  return (
    <main className="app">
      <header>
        <h1>React Basis: Todo List</h1>
        <p>
          총 {todos.length}개 / 완료 {doneCount}개
        </p>
      </header>

      <TodoForm onAdd={addTodo} />

      <section className="filter-group" aria-label="todo filter">
        <button type="button" onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
          전체
        </button>
        <button type="button" onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>
          진행중
        </button>
        <button type="button" onClick={() => setFilter('done')} className={filter === 'done' ? 'active' : ''}>
          완료
        </button>
      </section>

      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </main>
  )
}

export default App
