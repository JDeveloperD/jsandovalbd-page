import styled, { css } from 'styled-components';
import { GRADIENT_COLOR, MEDIA_BREAKPOINTS } from '@theme';
import { Color } from '@theme/styled';

export type TextSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl';

export type FontWeight = 'normal' | 'semibold';

export type TypographyProps = {
  color?: Color;
  size?: TextSize;
  weight?: FontWeight;
  isGradient?: boolean;
};

export const getFontWeight = (weight: FontWeight = 'normal') =>
  ({
    normal: css`
      font-weight: 400;
    `,
    semibold: css`
      font-weight: 600;
    `,
  }[weight]);

export const getSize = (size: TextSize = 'base') =>
  ({
    xs: css`
      font-size: 0.75rem;
      line-height: 1rem;
    `,
    sm: css`
      font-size: 0.875rem;
      line-height: 1.25rem;
    `,
    base: css`
      font-size: 1rem;
      line-height: 1.5rem;
    `,
    lg: css`
      font-size: 1.125rem;
      line-height: 1.75rem;
    `,
    xl: css`
      ${getFontWeight('semibold')}
      ${MEDIA_BREAKPOINTS.tablet} {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    `,
    '2xl': css`
      ${getFontWeight('semibold')}
      font-size: 1.25rem;
      line-height: 1.75rem;

      ${MEDIA_BREAKPOINTS.tablet} {
        font-size: 1.5rem;
        line-height: 2rem;
      }
    `,
    '3xl': css`
      ${getFontWeight('semibold')}
      font-size: 1.5rem;
      line-height: 2rem;

      ${MEDIA_BREAKPOINTS.tablet} {
        font-size: 1.875rem;
        line-height: 2.25rem;
      }
    `,
    '4xl': css`
      ${getFontWeight('semibold')}
      font-size: 1.875rem;
      line-height: 2.25rem;

      ${MEDIA_BREAKPOINTS.tablet} {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
    `,
    '5xl': css`
      ${getFontWeight('semibold')}
      font-size: 2.25rem;
      line-height: 2.5rem;

      ${MEDIA_BREAKPOINTS.tablet} {
        font-size: 3rem;
        line-height: 3rem;
      }
    `,
  }[size]);

const Typography = styled.p<TypographyProps>`
  margin-bottom: 0;

  color: ${({ theme, color }) => color && theme.colors[color]};

  ${({ weight }) => getFontWeight(weight)};

  ${({ size }) => getSize(size)};

  ${({ isGradient }) =>
    isGradient &&
    css`
      background: ${GRADIENT_COLOR[1]};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;

export default Typography;
