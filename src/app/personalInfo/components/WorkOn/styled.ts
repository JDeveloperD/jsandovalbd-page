import styled, { keyframes } from 'styled-components';
import { MEDIA_BREAKPOINTS } from '../../../../theme';

const RotateCenterAnimation = keyframes`
  0% {
    transform: rotate(0); }
  to {
    transform: rotate(360deg); }
`;

export const ImageAnimated = styled.div`
  width: 100%;
  animation: ${RotateCenterAnimation} 100s linear infinite both;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    object-fit: contain;
    object-position: center;
  }
  ${MEDIA_BREAKPOINTS.laptop} {
    top: initial;

    img {
      width: 50%;
      filter: invert(100%);
    }
  }
`;

export const Logo = styled.a`
  width: 100%;
  display: block;
  margin: 0 auto;
  width: 150px;

  img {
    /* filter: brightness(50%); */
    width: 120px;
    height: 100px;
    object-fit: contain;
  }
`;
