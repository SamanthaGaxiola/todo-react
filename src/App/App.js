import { useState } from 'react'
import { TodoForm } from '../ToDoForm/TodoForm.js'
import getTodos from '../gettodos.js'
import TodoItemForm from '../ToDoForm/Items.js'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => getTodos())

  function addTodos(todo) {
    setTodos([todo, ...todos])
  }
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function editTodo(updatedTodo) {
    setTodos(todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)))
  }

  return (
    <div className='App'>
      <p className='header'>What Do I Want To Do?</p>
      <TodoForm todos={todos} addTodo={addTodos} />
      <ul>
        {todos.map((todo) => (
          <TodoItemForm
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
