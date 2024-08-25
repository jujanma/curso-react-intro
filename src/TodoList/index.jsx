import "./TodoList.css";
function TodoList({ children }) {
  return <ul className="todoList">{children}</ul>;
}

export { TodoList };
