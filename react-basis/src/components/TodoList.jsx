import TodoItem from '@/components/TodoItem'

export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) {
    return <p className="empty">조건에 맞는 할 일이 없습니다.</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  )
}
