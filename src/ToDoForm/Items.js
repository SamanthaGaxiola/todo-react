import { useState } from 'react'
import './TodoForm.css'

function BtnDelete({ deleteTodo, id }) {
  return (
    <button className='deletebtn' onClick={() => deleteTodo(id)}>
      Delete
    </button>
  )
}
function TodoItemForm({ todo, editTodo, deleteTodo }) {
  const [updatedTodo, setUpdatedTodo] = useState(() => todo.todo)
  const [showEdit, setShowEdit] = useState(false)

  if (showEdit) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          editTodo({
            ...todo,
            todo: updatedTodo,
          })
          setShowEdit(false)
        }}
      >
        <input
          type='text'
          placeholder='Edit'
          value={updatedTodo}
          onChange={(e) => setUpdatedTodo(e.target.value)}
        />
      </form>
    )
  }
  return (
    <div>
      {todo.todo}{' '}
      <button
        className='editbtn'
        type='button'
        onClick={() => setShowEdit(true)}
      >
        edit
      </button>
      <BtnDelete deleteTodo={deleteTodo} id={todo.id} />
    </div>
  )
}

export default TodoItemForm
