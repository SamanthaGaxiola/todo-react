import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTodos([
          {
            id: uuidv4(),
            todo,
          },
          ...todos,
        ]);
        setTodo("");
      }}
    >
      <input
        type="text"
        placeholder="Enter Todo..."
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
    </form>
  );
}
export { TodoForm };
export default TodoForm;
