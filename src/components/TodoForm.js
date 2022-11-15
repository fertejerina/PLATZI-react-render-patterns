import React, { useState, useContext } from "react";
import { ToDoContext } from "./TodoContext";
import "../css/TodoForm.css";

function TodoForm() {
  const [newToDoValue, setNewToDoValue] = useState("");
  const { addToDo, setOpenModal } = useContext(ToDoContext);

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Introduce aqui tu 'ToDo'</label>
      <textarea
        value={newToDoValue}
        onChange={onChange}
        placeholder="Escribe aqui."
      />
      <div className="buttons-area">
        <button onClick={onCancel} type="button" className="button-cancel">
          Cancelar
        </button>
        <button type="submit" className="button-submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
