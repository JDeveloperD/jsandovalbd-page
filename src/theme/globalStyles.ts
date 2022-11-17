import { darken, lighten } from 'polished';
import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
  
  html {
    scroll-behavior: smooth;
  }

  #__next {
    min-height: 100vh;

    @media print {
      background: white;
    }
  }

  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      overflow-x: hidden;
      background: ${theme.colors.body};
      color: ${theme.colors.text};
      font-family: ${theme.fonts.fontPrimary};
      position: relative;

      &::-webkit-scrollbar {
        width: 12px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 9px;
        background-color: ${theme.colors['background-2']};

        /* &:hover {
          background-color: ${lighten(0.15, theme.colors['background-1'])};
        } */
      }

      &::-webkit-scrollbar-track {
        background-color: ${theme.colors['background-1']};
      }
    }

    a {
      color: ${theme.colors.link};
      cursor: pointer;

      &:hover {
        color: ${darken(0.15, theme.colors.link)};
      }
    }

    button {
      cursor: pointer;
      font-size: ${theme.fontSizes.body};
      font-family: ${theme.fonts.fontPrimary};
    }

    p {
      line-height: 1.8;
      margin-block-start: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block-start: 0;
    }
    figure {
      margin: 0;
    }

    .Typewriter__cursor {
      -webkit-text-fill-color: ${({ theme }) => theme.colors['headline-1']};
      font-weight: 300;
    }
  `}
`;
