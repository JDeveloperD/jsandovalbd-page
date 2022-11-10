import styled from 'styled-components';
import { MEDIA_BREAKPOINTS, SHADOW, TRANSITIONS } from '../../../../theme';

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  transition: ${TRANSITIONS.base};
`;

export const CardExcerpt = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 0;
  opacity: 0;
  margin-bottom: 1rem;
  transition: 0.5s ease-out;
`;

export const CardInfo = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(0deg, #000000 0%, rgba(54, 64, 77, 0) 100%);
  /* opacity: 0.8; */
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
  transition: ${TRANSITIONS.base};

  ${MEDIA_BREAKPOINTS.mobileS} {
    padding: 1.5rem;
  }
`;

export const CardWrapper = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/ 12;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: ${SHADOW.base};
  transition: 0.75s ease-in-out;

  &:hover {
    ${CardExcerpt} {
      height: 100%;
      opacity: 1;
    }

    ${CardImage} {
      transform: scale(1.1);
    }

    ${CardInfo} {
      opacity: 1;
    }
  }
`;
