import { darken } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';
import { Color } from '../../theme/styled';

export type VariantButton = 'contained' | 'outlined' | 'text' | undefined;

export type SizeButton = 'sm' | 'md' | 'lg' | 'icon' | undefined;

type ButtonProps = {
  variant?: VariantButton;
  size?: SizeButton;
  color?: Color;
  fullWidth?: boolean;
};

const variantStyles = (
  theme: DefaultTheme,
  variant: VariantButton = 'text',
  color: Color = 'primary'
) =>
  ({
    contained: css`
      background: ${theme.colors[color]};
      color: white;

      &:hover {
        background: ${darken(0.07, theme.colors[color])};
        color: white;
      }
    `,
    outlined: css`
      border: 1px solid ${theme.colors[color]};
      background: transparent;
      color: ${theme.colors[color]};

      &:hover {
        background: ${theme.colors[color]};
        color: white;
      }
    `,
    text: css``,
  }[variant]);

const sizeStyles = (size: SizeButton = 'md') =>
  ({
    sm: css`
      padding: 0.35rem 0.7rem;
      font-size: 0.75rem;
      gap: 0.25rem;
    `,
    md: css`
      padding: 12px 26px;
      gap: 0.75rem;
      font-size: 1rem;
    `,
    lg: css`
      padding: 0.5rem 1.3rem;
      font-size: 1.25rem;
      gap: 1rem;
    `,
    icon: css`
      padding: 0.5rem;
    `,
  }[size]);

export default styled.button<ButtonProps>`
  border-style: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  transition: 0.3s ease-in-out;
  text-decoration: none;

  ${({ theme, color, variant }) => variantStyles(theme, variant, color)}

  ${({ size }) => sizeStyles(size)}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: flex;
      width: 100%;
    `}
`;
