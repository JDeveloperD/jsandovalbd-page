import styled, { css } from 'styled-components';
import { TRANSITIONS } from '../../../theme';
import { getSize } from '../../display-data/Typography';

export const AccordionItemWrapper = styled.div<{ open: boolean }>`
  border-radius: 0.5rem;
  margin-bottom: 0.25rem;
  transition: ${TRANSITIONS.base};

  ${({ open }) =>
    open &&
    css`
      background: ${({ theme }) => theme.colors['neutral-800']};
      border-color: ${({ theme }) => theme.colors['neutral-800']};
    `}
`;

export const AccordionContent = styled.div<{ open: boolean }>`
  ${getSize('sm')}

  div {
    padding: 0 1rem 1.75rem 1rem;
  }

  overflow: hidden;
  height: 0;
  /* max-height: 0;
  transition: max-height 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94); */
  transition: height 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${({ open }) =>
    open &&
    css`
      height: 100px;
      transition: max-height 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      /* transition: max-height 2s ease-in;
      transition-delay: 0ms;
      will-change: unset;
      max-height: 100vh; */
    `}
`;

export const AccordionButton = styled.button<{ open: boolean }>`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.titleSection};

  &,
  & > svg {
    transition: ${TRANSITIONS.base};
  }

  ${({ open }) =>
    open &&
    css`
      svg {
        transform: rotate(180deg);
      }
      color: ${({ theme }) => theme.colors.titleSection};
    `}
`;
