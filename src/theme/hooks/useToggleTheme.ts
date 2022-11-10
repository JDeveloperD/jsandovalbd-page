import { dark, light } from '../mode';
import { setLocalStorage } from '../../utils';
import { useState } from 'react';
import { DefaultTheme } from 'styled-components';

const useToggleTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const toggleTheme = () => {
    const ob = theme.mode === 'light' ? dark : light;
    // set localstorage
    setLocalStorage('theme', ob);
    // set state
    setTheme(ob);
  };

  return {
    isThemeLight: theme.mode === 'light',
    theme,
    toggleTheme,
    setTheme,
  };
};

export default useToggleTheme;
