import styled from 'styled-components';
import { MEDIA_BREAKPOINTS } from '../../theme';
import { Color } from '../../theme/styled';

export default styled.section<{ color?: Color }>`
  background: ${({ theme, color }) => color && theme.colors[color]};
  padding: 3rem 0;
  position: relative;

  ${MEDIA_BREAKPOINTS.laptop} {
    padding: 5rem 0;
  }
`;
