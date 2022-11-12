import { dark, light } from '../mode';
import { setLocalStorage } from '../../utils';
import { useState } from 'react';
import { DefaultTheme } from 'styled-components';

const useToggleTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = () => {
    const currentTheme = theme.mode === 'light' ? dark : light;
    // set localstorage
    setLocalStorage('theme', currentTheme);
    // set state
    setTheme(currentTheme);
  };

  return {
    isThemeLight: theme.mode === 'light',
    theme,
    toggleTheme,
    setTheme,
  };
};

export default useToggleTheme;
