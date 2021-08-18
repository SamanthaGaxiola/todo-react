import { useState } from "react";

import { TodoForm, TodoItem } from ".";
import { getTodos } from "../utils";

function TodoList() {
  const [todos, setTodos] = useState(() => getTodos());

  function addTodo(todo){
    setTodos([
      todo,
      ...todos,
    ]);
  }
  
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="TodoList">
      <TodoForm todos={todos} addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export { TodoList };
export default TodoList;
