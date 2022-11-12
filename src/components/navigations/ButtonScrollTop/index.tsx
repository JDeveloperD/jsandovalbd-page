import { FiChevronUp } from '@components';
import { Button, ChevronIcon, Circle, CircleContent } from './styled';
import { useScroll } from './useScroll';

const ButtonScrollTop = () => {
  const { percentage, isTop, handleScrollTop } = useScroll();

  return (
    <Button onClick={handleScrollTop} show={!isTop}>
      <CircleContent viewBox='0 0 36 36'>
        <Circle
          percentage={percentage}
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
      </CircleContent>
      <ChevronIcon>
        <FiChevronUp size='1.5rem' />
      </ChevronIcon>
    </Button>
  );
};

export default ButtonScrollTop;
