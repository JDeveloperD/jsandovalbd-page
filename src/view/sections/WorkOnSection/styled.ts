import styled from 'styled-components';
import { MEDIA_BREAKPOINTS, RotateCenterAnimation } from '@theme';

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
    z-index: 1;
  }
  ${MEDIA_BREAKPOINTS.laptop} {
    top: initial;

    img {
      width: 85%;
      filter: invert(100%);
    }
  }

  ${MEDIA_BREAKPOINTS.desktop} {
    img {
      width: 70%;
    }
  }
`;

export const Logo = styled.a`
  width: 100%;
  display: block;
  margin: 0 auto;
  width: 150px;
  text-align: center;

  img {
    filter: ${({ theme }) =>
      theme.mode === 'light' ? 'brightness(50%)' : undefined};
    width: 120px;
    height: 100px;
    object-fit: contain;
  }
`;
