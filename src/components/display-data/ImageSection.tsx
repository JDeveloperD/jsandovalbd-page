import styled, { keyframes } from 'styled-components';
import { MEDIA_BREAKPOINTS } from '../../theme';

const FadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20%);
  }
`;

export default styled.img`
  width: 100%;
  max-width: 500px;
  height: 250px;
  margin: 0 auto;
  display: block;
  object-fit: contain;
  object-position: center;
  animation: ${FadeInLeft} 0.75s ease-in-out;

  ${MEDIA_BREAKPOINTS.tablet} {
    height: 400px;
  }
`;
