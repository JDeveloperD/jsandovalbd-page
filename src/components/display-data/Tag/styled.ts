import styled, { css } from 'styled-components';
import { Color } from '@theme/styled';
import { getSize } from '../Typography';

export type TagSize = 'sm' | 'md' | 'lg';

export const TagBackground = styled.div<{ size?: TagSize; color?: Color }>`
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;
  border-radius: 50px;
  background: ${({ theme }) =>
    theme.mode === 'light'
      ? theme.colors['brand-100']
      : theme.colors['neutral-600']};
  color: ${({ theme }) =>
    theme.mode === 'light'
      ? theme.colors['brand-500']
      : theme.colors['neutral-300']};

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: 0.5rem 0.75rem;
          ${getSize('xs')}
        `;
      case 'lg':
        return css`
          padding: 0.75rem 1rem;
          ${getSize('base')}
        `;
      default:
        return css`
          padding: 0.5rem 1rem;
          ${getSize('sm')}
        `;
    }
  }}
`;
