import styled, { keyframes } from 'styled-components';
import { MEDIA_BREAKPOINTS } from '@theme';

const RotateCenterAnimation = keyframes`
  0% {
    transform: rotate(0); }
  to {
    transform: rotate(360deg); }
`;

export const BackgroundBanner = styled.section`
  position: relative;
  padding: 3rem 0 6rem;
  overflow: hidden;
`;

export const ContentWave = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const HandImage = styled.div`
  height: 400px;
  position: relative;
  text-align: center;

  img {
    height: 100%;
    object-fit: contain;
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    height: 500px;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    height: 600px;
  }
`;

export const ImageAnimated = styled.div`
  width: 100%;
  z-index: -1;
  animation: ${RotateCenterAnimation} 100s linear infinite both;
  position: absolute;
  top: 25%;

  img {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    object-fit: contain;
    object-position: center;
    opacity: 0.3;
  }
  ${MEDIA_BREAKPOINTS.laptop} {
    top: initial;
  }
`;

export const SliderBanner = styled.div`
  position: absolute;
  z-index: -1;
  top: 7px;
  border-radius: 1rem;
  left: calc(50% - 51px);
  width: 130px;
  height: 278px;
  transform: translateX(-50%);
  overflow: hidden;

  ${MEDIA_BREAKPOINTS.tablet} {
    width: 162px;
    height: 349px;
    top: 8px;
    left: calc(50% - 64px);
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    width: 196px;
    height: 418px;
    border-radius: 1.5rem;
    top: 10px;
    left: calc(50% - 76px);
  }

  .swiper {
    height: 100%;

    .swiper-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
