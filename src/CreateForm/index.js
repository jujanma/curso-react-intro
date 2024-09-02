import React, { useContext, useState } from "react";
import "./CreaterForm.css";
import { TodoContext } from "../TodoContext";

function CreateForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label> Escribe tu nuevo ToDo</label>
      <textarea
        placeholder="Nuevo ToDo"
        value={newTodoValue}
        onChange={onChange}
      />

      <div className="CreateForm-buttonContainer">
        <button
          type="submit"
          className="CreateForm-button CreateForm-button--create"
        >
          Crear
        </button>
        <button
          className="CreateForm-button CreateForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { CreateForm };
