import styled from 'styled-components';
import { MEDIA_BREAKPOINTS, TRANSITIONS } from '@theme';

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  padding: 1.5rem 0;

  ${MEDIA_BREAKPOINTS.tablet} {
    flex-direction: row;
    padding: 3rem 0;
  }
`;

export const GroupIcon = styled.div`
  transition: ${TRANSITIONS.base};
`;

export const GroupItem = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  text-decoration: none;

  ${MEDIA_BREAKPOINTS.tablet} {
    justify-content: center;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.75rem 1.5rem;

    &:last-child {
      border: none;
    }
  }

  &:hover {
    ${GroupIcon} {
      transform: translateY(-4px);
    }
  }
`;
