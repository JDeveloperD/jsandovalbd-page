const getLocalStorage = (key: string): any | undefined => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return undefined;
};

const setLocalStorage = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const removeLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};

export { getLocalStorage, setLocalStorage, removeLocalStorage };
