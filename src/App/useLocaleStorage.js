import { useState } from "react";

const useLocalStorage = (itenName, initialValue) => {
  let localStorageItem = localStorage.getItem(itenName);
  let parsedItem = initialValue;
  if (!localStorageItem) {
    localStorage.setItem(itenName, JSON.stringify([]));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itenName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
};

export { useLocalStorage };
