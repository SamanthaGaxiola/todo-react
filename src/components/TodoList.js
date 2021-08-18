import { useState } from "react";
import TodoItem from "./TodoItem";
import { getTodos } from "../utils";

function TodoList() {
  const [todos, setTodos] = useState(() => getTodos());
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo} todo={todo} />
      ))}
    </ul>
  );
}

export { TodoList };
export default TodoList;
