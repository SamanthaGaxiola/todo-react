import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './TodoForm.css'

function TodoForm({ todos, addTodo }) {
  const [todo, setTodo] = useState("");

  return (
    <form
    className="TodoForm"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({
          id: uuidv4(),
          todo,
          done: false,
        });
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
