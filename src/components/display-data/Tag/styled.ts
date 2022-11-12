import { lighten } from 'polished';
import styled, { css } from 'styled-components';
import { Color } from '@theme/styled';
import { getSize } from '../Typography';

export type TagSize = 'sm' | 'md' | 'lg';

export const TagBackground = styled.div<{ size?: TagSize; color?: Color }>`
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;
  border-radius: 50px;
  background: ${({ theme, color }) =>
    !color ? theme.colors['neutral-100'] : lighten(0.3, theme.colors[color])};
  color: ${({ theme, color }) =>
    !color ? theme.colors['neutral-600'] : theme.colors[color]};

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
