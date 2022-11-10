import { createContext, useContext } from 'react';
import { DefaultTheme } from 'styled-components';

export type ThemeContextState = {
  theme: DefaultTheme;
  toggleTheme: () => void;
  isThemeLight: boolean;
};

export const ThemeContext = createContext<ThemeContextState | undefined>(
  undefined
);

export const useTheme = () => useContext(ThemeContext) as ThemeContextState;
