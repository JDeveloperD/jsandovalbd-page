export const BREAKPOINTS = {
  xs: 360,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const MEDIA_BREAKPOINTS = {
  mobileS: `@media (min-width: ${BREAKPOINTS.xs}px)`,
  mobile: `@media (min-width: ${BREAKPOINTS.sm}px)`,
  tablet: `@media (min-width: ${BREAKPOINTS.md}px)`,
  laptop: `@media (min-width: ${BREAKPOINTS.lg}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.xl}px)`,
  desktopL: `@media (min-width: ${BREAKPOINTS.xxl}px)`,
};

export const CONTAINER_MAX_WIDTHS = {
  sm: '540px',
  md: '720px',
  lg: '1000px',
  xl: '1140px',
  xxl: '1320px',
};
