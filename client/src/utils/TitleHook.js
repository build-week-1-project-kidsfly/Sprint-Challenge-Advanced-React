import React, { useState } from "react";

export const useConsoleState = initialValue => {
  const [value, setValue] = useState(initialValue)
  const newValue = valor => {
    setValue(valor)
    console.log(valor)
  }
  return [value, newValue];
}

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
