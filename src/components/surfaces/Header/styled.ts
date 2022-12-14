import styled, { css } from 'styled-components';
import { MEDIA_BREAKPOINTS, TRANSITIONS, Z_INDEX_HEADER } from '@theme';
import { rgba } from 'polished';

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${MEDIA_BREAKPOINTS.mobile} {
    gap: 0;

    & > * {
      padding: 0 0.5rem;
      border-left: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;

export const HeaderWrapper = styled.header<{
  upScroll: boolean;
  downScroll: boolean;
  fixed: boolean;
}>`
  padding: 0.5rem 0;
  z-index: ${Z_INDEX_HEADER};
  position: sticky;
  width: 100%;
  transition: ${TRANSITIONS.base};
  background: ${({ theme }) => rgba(theme.colors.body, 0.5)};
  backdrop-filter: blur(40px);

  ${MEDIA_BREAKPOINTS.tablet} {
    padding: 0;
  }

  ${({ upScroll }) =>
    upScroll &&
    css`
      top: 0;
    `}

  ${({ downScroll }) =>
    downScroll &&
    css`
      top: -100px;
    `}

  ${({ fixed }) =>
    fixed &&
    css`
      position: fixed;
      top: 0;
    `}
`;
