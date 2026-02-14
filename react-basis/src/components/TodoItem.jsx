export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <label>
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        <span className={todo.done ? 'done' : ''}>{todo.text}</span>
      </label>
      <button type="button" onClick={() => onDelete(todo.id)}>
        삭제
      </button>
    </li>
  )
}
