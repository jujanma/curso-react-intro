import { useEffect, useState } from "react";

const useLocalStorage = (itenName, initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itenName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itenName, JSON.stringify([]));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  });

  const saveItem = (newItem) => {
    localStorage.setItem(itenName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
};

export { useLocalStorage };
