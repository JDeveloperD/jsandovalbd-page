import styled, { css } from 'styled-components';
import { MEDIA_BREAKPOINTS, Z_INDEX_NAV, Z_INDEX_BUTTON } from '../../../theme';
import { getFontWeight, getSize } from '../../display-data/Typography';

export const Container = styled.nav<{ active?: boolean }>`
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
  padding: 6rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

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

export const Button = styled.button`
  background: transparent;
  width: 100%;
  border-style: none;
  display: flex;
  padding: 1rem 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textBody};

  &:hover {
    color: ${({ theme }) => theme.colors.titleSection};
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    ${getSize('sm')}
    ${getFontWeight('semibold')}
    display: inline-flex;
    padding: 1.5rem 1rem;
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

export const Toggler = styled.button`
  border-style: none;
  padding: 0;
  position: relative;
  height: 22px;
  width: 30px;
  display: block;
  background: transparent;
  z-index: ${Z_INDEX_BUTTON};
`;

export const TogglerIcon = styled.span<{ active?: boolean }>`
  width: 80%;
  height: 2px;
  background: ${({ theme }) => theme.colors.titleSection};
  display: block;
  transition: 0.3s ease;

  &::before,
  &::after {
    content: '';
    background: ${({ theme }) => theme.colors.titleSection};
    height: inherit;
    width: 100%;
    display: inherit;
    position: absolute;
    transition: 0.3s ease;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  ${({ active }) =>
    active &&
    css`
      background: transparent;

      &::before {
        rotate: 45deg;
        top: 42%;
      }

      &::after {
        rotate: -45deg;
        bottom: 48%;
      }
    `}
`;
