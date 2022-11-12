import 'styled-components';

export type Colors = {
  'neutral-50': string;
  'neutral-100': string;
  'neutral-200': string;
  'neutral-300': string;
  'neutral-400': string;
  'neutral-500': string;
  'neutral-600': string;
  'neutral-700': string;
  'neutral-800': string;
  'neutral-900': string;

  'brand-50': string;
  'brand-100': string;
  'brand-200': string;
  'brand-300': string;
  'brand-400': string;
  'brand-500': string;
  'brand-600': string;
  'brand-700': string;
  'brand-800': string;
  'brand-900': string;

  primary: string;
  secondary: string;
  tertiary: string;
  info: string;
  warning: string;
  danger: string;
  success: string;
  white: string;
  light: string;
  gray: string;
  black: string;
  link: string;
  body: string;
  text: string;
  'headline-1': string;
  'background-1': string;
  'background-2': string;
  border: string;
};

export type Color = keyof Colors;

export type ThemeSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type ThemeMode = 'light' | 'dark';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: ThemeMode;
    colors: Colors;
    fonts: {
      fontPrimary: string;
      fontSecondary: string;
    };
    fontSizes: {
      body: string;
    };
    shadows: {
      small: string;
      default: string;
    };
  }
}
