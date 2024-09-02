import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";
function TodoSearch() {
  const { setSearchValue, searchValue } = useContext(TodoContext);
  return (
    <input
      placeholder="Escribe el Todo que deseas buscar"
      className="todoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
