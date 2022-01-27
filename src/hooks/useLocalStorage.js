import { useState, useEffect } from 'react';
// ref: https://www.youtube.com/watch?v=ngVU74daJ8Y&ab_channel=Rocketseat
const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(() => {
    const getStorage = localStorage.getItem(key);
    if (getStorage) {
      return JSON.parse(getStorage);
    }
    return initialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
export default useLocalStorage;
