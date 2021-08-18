import { useState } from "react";

import { TodoForm, TodoItem } from ".";
import { getTodos } from "../utils";

function TodoList() {
  const [todos, setTodos] = useState(() => getTodos());

  return (
    <div className="TodoList">
      <TodoForm todos={todos} setTodos={setTodos} />
      <ul>
        {todos.map((todo, idx) => (
          <TodoItem key={idx} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export { TodoList };
export default TodoList;
