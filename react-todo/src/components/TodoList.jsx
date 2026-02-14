import TodoItem from '@/components/TodoItem'

export default function TodoList({todos, onToggle, onDelete}) {
    if (!todos.length) {
        return <p className="empty">There's nothing to do...</p>
    }

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </ul>
    )
}