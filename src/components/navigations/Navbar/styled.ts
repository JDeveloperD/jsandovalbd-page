import styled, { css } from 'styled-components';
import { MEDIA_BREAKPOINTS, Z_INDEX_NAV } from '../../../theme';
import { getFontWeight, getSize } from '../../display-data/Typography';

export const Wrapper = styled.nav<{ active?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundBody};
  z-index: ${Z_INDEX_NAV};
  transform: scale(1.2);
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
  padding: 4.5rem 1rem;

  ${({ active }) =>
    active &&
    css`
      transform: scale(1);
      visibility: visible;
      opacity: 1;
    `}

  ${MEDIA_BREAKPOINTS.tablet} {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    height: auto;
    padding: 0;
    width: auto;
    position: relative;
    text-align: right;
    background: transparent;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    text-align: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  ${MEDIA_BREAKPOINTS.tablet} {
    display: inline-block;
    border: none;
  }
`;

export const Link = styled.a`
  display: flex;
  padding: 1rem 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textBody};
  ${getFontWeight('semibold')}

  &:hover {
    color: ${({ theme }) => theme.colors.titleSection};
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    display: inline-flex;
    padding: 1.5rem 1rem;
    ${getSize('sm')}
    position: relative;

    &::after {
      content: '';
      width: 50%;
      height: 1px;
      background: ${({ theme }) => theme.colors['brand-700']};
      position: absolute;
      bottom: 1.25rem;
      display: none;
    }

    &:hover {
      &::after {
        display: block;
      }
    }
  }
`;
