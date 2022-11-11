import styled, { css } from 'styled-components';
import { TRANSITIONS } from '../../../theme';

export const HeaderWrapper = styled.header<{ upScroll: boolean, downScroll: boolean }>`
  padding: 0.5rem 0;
  background: ${({ theme }) => theme.colors.backgroundBody};
  z-index: 1000;
  position: sticky;
  transition: ${TRANSITIONS.base};
  
  ${({ upScroll }) => upScroll && css`
    top: 0;
  `}

  ${({ downScroll }) => downScroll && css`
    top: -100px;
  `}
`;
