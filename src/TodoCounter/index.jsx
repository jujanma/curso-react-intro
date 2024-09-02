import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";
function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h1 className="todoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      ToDos
    </h1>
  );
}

export { TodoCounter };
