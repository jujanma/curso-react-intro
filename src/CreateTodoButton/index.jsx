import "./CreateTodoButton.css";
//Componente para un boton de crear TodoItem
const CreateTodoButton = () => {
  return (
    <button
      className="createTodoButton"
      onClick={(event) => {
        console.log("Le diste click al boton");
        console.log(event);
      }}
    >
      Add
    </button>
  );
};

export { CreateTodoButton };
