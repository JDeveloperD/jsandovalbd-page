import { FC, MouseEventHandler } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Typography } from '../../display-data';
import {
  AccordionItemWrapper,
  AccordionButton,
  AccordionContent,
} from './styled';

type AccordionItemProps = {
  isActive: boolean;
  headLine: string;
  paragraph: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const AccordionItem: FC<AccordionItemProps> = ({
  isActive,
  headLine,
  paragraph,
  onClick,
}) => {
  return (
    <AccordionItemWrapper open={isActive}>
      <AccordionButton onClick={onClick} open={isActive}>
        <Typography as='h5' weight='semibold'>
          {headLine}
        </Typography>
        <FiChevronDown size='1.5rem' />
      </AccordionButton>
      <AccordionContent open={isActive}>
        <div>{paragraph}</div>
      </AccordionContent>
    </AccordionItemWrapper>
  );
};

export default AccordionItem;
