import { useState } from 'react'

export default function TodoForm({onAdd}){
    const [text, setText] = useSTate('')

    const submitTodo = (event)=> {
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
                placeholder="Insert what to do..."    
            />
            <button type="submit">ADD</button>
        </form>
    )
}