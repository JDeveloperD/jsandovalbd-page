import styled, { css, keyframes } from 'styled-components';

export const Animation = keyframes`
  0% {
    width: 0;
  }

  70% {
    width: 40%;
  }

  100% {
    width: 90%;
  }
`;

export const Background = styled.div<{ isDone: boolean }>`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  ${({ isDone }) =>
    isDone &&
    css`
      visibility: hidden;
    `}

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    background: ${({ theme }) => theme.colors.backgroundBody};
    transition: all 0.7s cubic-bezier(1, 0, 0.55, 1);
    transition-delay: 0.5s;

    ${({ isDone }) =>
      isDone &&
      css`
        height: 0;
      `}
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

export const Progress = styled.div<{ width?: string; inactive: boolean }>`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors['brand-300']};
  top: 50%;
  z-index: 9999999;
  transition: 0.7s ease-in-out;
  animation: ${Animation} 1s ease-in-out;

  ${({ inactive }) =>
    inactive &&
    css`
      max-width: 100vw !important;
      opacity: 0;
    `}
`;
