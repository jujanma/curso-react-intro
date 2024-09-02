import "./CreateTodoButton.css";
//Componente para un boton de crear TodoItem
const CreateTodoButton = ({ setOpenModal, openModal }) => {
  return (
    <button
      className="createTodoButton"
      onClick={(event) => {
        setOpenModal(!openModal);
      }}
    >
      Add
    </button>
  );
};

export { CreateTodoButton };
