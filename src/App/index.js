import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Llorar en la lloreria", completed: false },
//   { text: "Comprar moto", completed: false },
//   { text: "LALALALA", completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
