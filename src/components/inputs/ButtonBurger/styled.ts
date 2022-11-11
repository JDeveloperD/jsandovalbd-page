import styled, { css } from 'styled-components';
import { Z_INDEX_BUTTON } from '../../../theme';

export const Background = styled.button`
  border-style: none;
  padding: 0;
  position: relative;
  height: 22px;
  width: 30px;
  display: block;
  background: transparent;
  z-index: ${Z_INDEX_BUTTON};
`;

export const Burger = styled.span<{ active?: boolean }>`
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
