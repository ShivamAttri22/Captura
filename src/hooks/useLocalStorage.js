import { useEffect, useState } from "react";

function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedvalue = localStorage.getItem(key);
    return storedvalue ? JSON.parse(storedvalue) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );
  return [value, setValue];
}

export default useLocalStorage;
