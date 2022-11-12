import styled, { css, keyframes } from 'styled-components';
import { SHADOW, TRANSITIONS } from '@theme';

export const ProgressAnimation = keyframes`
  0% {
    stroke-dasharray: 0 100;
  }
`;

export const ChevronIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) =>
    theme.mode === 'light'
      ? theme.colors['brand-600']
      : theme.colors['brand-300']};
`;

export const Circle = styled.path<{ percentage: number }>`
  stroke-width: 2px;
  fill: none;
  stroke: ${({ theme }) =>
    theme.mode === 'light'
      ? theme.colors['brand-600']
      : theme.colors['brand-300']};
  animation: ${ProgressAnimation} 1s ease-out forwards;
  stroke-dasharray: ${({ percentage }) => `${percentage}, 100`};
`;

export const CircleContent = styled.svg`
  position: absolute;
  width: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${SHADOW['2xl']};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors['background-1']};
`;

export const Button = styled.button<{ show: boolean }>`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 45px;
  height: 45px;
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  border-style: none;
  background: transparent;
  transform: translateY(10px);
  visibility: hidden;
  opacity: 0;
  transition: ${TRANSITIONS.base};

  ${({ show }) =>
    show &&
    css`
      transform: translateY(0);
      visibility: visible;
      opacity: 1;
    `}
`;
