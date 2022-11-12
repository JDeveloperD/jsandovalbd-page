import { TRANSITIONS } from '@theme';
import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  background: red;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li``;

export const Link = styled.a`
  display: inline-block;
`;

export const SocialItem = styled.a`
  display: inline-flex;
  height: 22px;
  width: 25px;
  margin: 0 0.15rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  svg {
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors['background-1']};
    z-index: 1;
    border-radius: 50%;
    width: 0;
    height: 0;
    transition: ${TRANSITIONS.base};
  }

  &:hover {
    color: ${({ theme }) => theme.colors['headline-1']};

    &::before {
      width: 32px;
      height: 32px;
    }
  }
`;
