import { useState } from "react";

function TodoItemForm({ todo, hideForm, editTodo }) {
  const [updatedTodo, setUpdatedTodo] = useState(() => todo.todo);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo({
          ...todo,
          todo: updatedTodo,
        });
        hideForm();
      }}
    >
      <input
        type="text"
        placeholder="Enter Todo..."
        value={updatedTodo}
        onChange={(e) => setUpdatedTodo(e.target.value)}
      />
    </form>
  );
}

function BtnEditCancel({ showForm, toggleForm }) {
  return <button onClick={toggleForm}>{showForm ? "Cancel" : "Edit"}</button>;
}

function BtnDelete({ deleteTodo, id }) {
  return <button onClick={() => deleteTodo(id)}>Delete</button>;
}


function TodoItem({ todo, deleteTodo, editTodo }) {
  const [showForm, setShowForm] = useState(false);

  function hideForm() {
    setShowForm(false);
  }
  function toggleForm() {
    setShowForm((prev) => !prev);
  }
  return (
    <li>
      {showForm ? (
        <TodoItemForm todo={todo} hideForm={hideForm} editTodo={editTodo} />
      ) : (
        todo.todo
      )}{" "}
      <BtnEditCancel showForm={showForm} toggleForm={toggleForm} />
      <BtnDelete deleteTodo={deleteTodo} id={todo.id} />
    </li>
  );
}
export { TodoItem };
export default TodoItem;
