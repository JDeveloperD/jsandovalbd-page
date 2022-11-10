import styled, { keyframes } from 'styled-components';
import { MEDIA_BREAKPOINTS, SHADOW } from '../../../../theme';

export const BackgroundImg = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: invert(100%);
  }
`;

export const GroupIcons = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  z-index: 2;
`;

const SlideUpDownAnimation = keyframes`
  0% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(10px);
  }
`;

export const Icon = styled.div`
  border-radius: 50%;
  position: absolute;
  animation: ${SlideUpDownAnimation} 2s ease-in-out infinite alternate both;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* box-shadow: ${SHADOW.xl}; */

  img {
    width: 100%;
    height: 100%;
    /* padding: 0.15rem; */
  }

  &:nth-child(1) {
    width: 50px;
    height: 50px;
    animation: none;

    img {
      padding: 0 !important;
    }
  }

  &:nth-child(2) {
    left: 15%;
    top: 15%;
    /* background-color: #e9ffd0; */
    width: 60px;
    height: 60px;
    animation-delay: 500ms;

    ${MEDIA_BREAKPOINTS.laptop} {
      width: 80px;
      height: 80px;
    }
  }

  &:nth-child(3) {
    left: 70%;
    top: 70%;
    /* background-color: #dcfaff; */
    width: 50px;
    height: 50px;
    animation-delay: 100ms;

    ${MEDIA_BREAKPOINTS.laptop} {
      width: 70px;
      height: 70px;
    }
  }

  &:nth-child(4) {
    left: 5%;
    top: 48%;
    /* background-color: #c5e1ea; */
    width: 45px;
    height: 45px;

    ${MEDIA_BREAKPOINTS.laptop} {
      width: 65px;
      height: 65px;
    }
  }

  &:nth-child(5) {
    left: 28%;
    top: 70%;
    /* background-color: #ecc1e4; */
    width: 60px;
    height: 60px;
    animation-delay: 600ms;

    ${MEDIA_BREAKPOINTS.laptop} {
      width: 80px;
      height: 80px;
    }
  }

  &:nth-child(6) {
    left: 55%;
    top: 10%;
    /* background-color: #e8e8e8; */
    width: 65px;
    height: 65px;
    animation-delay: 300ms;

    ${MEDIA_BREAKPOINTS.laptop} {
      width: 85px;
      height: 85px;
    }
  }

  &:nth-child(7) {
    left: 80%;
    top: 35%;
    /* background-color: #dcd5f2; */
    width: 50px;
    height: 50px;

    ${MEDIA_BREAKPOINTS.laptop} {
      width: 70px;
      height: 70px;
    }
  }

  &:nth-child(8) {
    // bootstrap
    left: 86%;
    top: 85%;
    width: 70px;
    height: 70px;
    /* background-color: #ddd1ee; */
  }

  &:nth-child(9) {
    // styled-components
    left: 20%;
    top: 95%;
    width: 50px;
    height: 50px;
    /* background-color: blanchedalmond; */
  }

  &:nth-child(10) {
    // sass
    left: 36%;
    top: 30%;
    width: 60px;
    height: 60px;
    /* background-color: #ffdae6; */
  }

  &:nth-child(11) {
    // typescript
    left: 48%;
    top: 69%;
    width: 60px;
    height: 60px;
    /* background-color: #a8d4ff; */
  }
`;
