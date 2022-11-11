import styled, { css } from 'styled-components';
import { TRANSITIONS } from '../../../theme';
import { getSize } from '../../display-data/Typography';

const TRANSITION_COMMON = TRANSITIONS.base;

type AccordionStyledProps = {
  collapse?: boolean;
};

export const Toggle = styled.button<AccordionStyledProps>`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.titleSection};
`;

export const Collapse = styled.div`
  ${getSize('sm')}
  padding: 0 1rem 0 1rem;
  overflow: hidden;
  height: 0;
  transition: height ${TRANSITION_COMMON};
`;

export const Item = styled.div<AccordionStyledProps>`
  border-radius: 0.5rem;
  margin-bottom: 0.25rem;
  transition: ${TRANSITION_COMMON};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  &:active {
    filter: brightness(140%);
  }

  ${({ collapse }) =>
    collapse &&
    css`
      background: ${({ theme }) => theme.colors['neutral-800']};
      border-color: ${({ theme }) => theme.colors['neutral-800']};
    `}
`;
