import { DefaultTheme } from 'styled-components';
import {
  BASIC_COLOR,
  BRAND_COLOR,
  FONT_FAMILIES,
  NEUTRAL_COLOR,
} from '../variables';

const LightMode: DefaultTheme = {
  mode: 'light',
  colors: {
    'neutral-50': NEUTRAL_COLOR[50],
    'neutral-100': NEUTRAL_COLOR[100],
    'neutral-200': NEUTRAL_COLOR[200],
    'neutral-300': NEUTRAL_COLOR[300],
    'neutral-400': NEUTRAL_COLOR[400],
    'neutral-500': NEUTRAL_COLOR[500],
    'neutral-600': NEUTRAL_COLOR[600],
    'neutral-700': NEUTRAL_COLOR[700],
    'neutral-800': NEUTRAL_COLOR[800],
    'neutral-900': NEUTRAL_COLOR[900],
    'brand-50': BRAND_COLOR[50],
    'brand-100': BRAND_COLOR[100],
    'brand-200': BRAND_COLOR[200],
    'brand-300': BRAND_COLOR[300],
    'brand-400': BRAND_COLOR[400],
    'brand-500': BRAND_COLOR[500],
    'brand-600': BRAND_COLOR[600],
    'brand-700': BRAND_COLOR[700],
    'brand-800': BRAND_COLOR[800],
    'brand-900': BRAND_COLOR[900],
    primary: BRAND_COLOR[500],
    secondary: '',
    tertiary: '',

    info: '',
    warning: '',
    danger: '',
    success: '',

    white: BASIC_COLOR.white,
    light: '#f8f8f8',
    gray: '',
    black: BASIC_COLOR.black,

    textBody: NEUTRAL_COLOR[500],
    link: BRAND_COLOR[500],
    borderColor: NEUTRAL_COLOR[200],
    titleSection: NEUTRAL_COLOR[800],
    backgroundBody: BASIC_COLOR.white,
  },
  fonts: {
    fontPrimary: FONT_FAMILIES.inter,
    fontSecondary: '',
  },
  fontSizes: {
    body: '1rem',
  },
  shadows: {
    small: '',
    default: '',
  },
};

export default LightMode;
