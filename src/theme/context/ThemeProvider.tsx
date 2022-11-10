import { FC, ReactNode, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from '../globalStyles';
import { ThemeContext, useTheme } from './ThemeContext';
import useToggleTheme from '../hooks/useToggleTheme';
import { getLocalStorage } from '../../utils';

const ThemeStyledComponent: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

const ThemeProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { theme, toggleTheme, isThemeLight, setTheme } = useToggleTheme();

  useEffect(() => {
    const themeInLocalStorage = getLocalStorage('theme');

    if (themeInLocalStorage) {
      setTheme(themeInLocalStorage);
    }
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isThemeLight,
      }}
    >
      <ThemeStyledComponent>{children}</ThemeStyledComponent>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
