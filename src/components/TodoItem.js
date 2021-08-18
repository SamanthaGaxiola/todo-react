function TodoItem({ todo, deleteTodo }) {
  return (
    <li>
      {todo.todo} <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
export { TodoItem };
export default TodoItem;
