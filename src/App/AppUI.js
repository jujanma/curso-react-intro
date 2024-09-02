import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } =
    useContext(TodoContext);

  return (
    <>
      {loading ? (
        <TodosLoading />
      ) : (
        <>
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          <CreateTodoButton />
        </>
      )}
    </>
  );
}

export { AppUI };
