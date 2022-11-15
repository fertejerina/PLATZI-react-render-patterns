import React, { useState, createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = createContext();

//LOGICA

function ToDoProvider(props) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const completedToDos = toDos.filter((todo) => !!todo.completed).length;
  const totalToDos = toDos.length;
  let searchedToDos = [];

  if (searchValue.length === 0) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addToDo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      completed: false,
      text: text,
    });
    saveToDos(newToDos); // recargamos el estado
  };

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex((todo) => todo.text === text);
    const newToDos = [...toDos];
    if (newToDos[toDoIndex].completed === false) {
      newToDos[toDoIndex].completed = true;
    } else {
      newToDos[toDoIndex].completed = false;
    }
    saveToDos(newToDos); // recargamos el estado
    alert(`Ya completaste el todo "${text}"`);
  };

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((todo) => todo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos); // recargamos el estado
    alert(`Eliminaste "${text}"`);
  };

  return (
    <ToDoContext.Provider
      value={{
        loading,
        error,
        totalToDos,
        completedToDos,
        searchValue,
        setSearchValue,
        searchedToDos,
        completeToDo,
        addToDo,
        deleteToDo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };
