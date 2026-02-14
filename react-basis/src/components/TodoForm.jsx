import { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  const submitTodo = (event) => {
    event.preventDefault()
    onAdd(text)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={submitTodo}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  )
}
