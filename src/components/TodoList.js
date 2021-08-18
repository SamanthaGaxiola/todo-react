import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <ul>
      <TodoItem todo="item 1" />
      <TodoItem todo="item 2" />
      <TodoItem todo="item 3" />
    </ul>
  );
}

export { TodoList };
export default TodoList;
