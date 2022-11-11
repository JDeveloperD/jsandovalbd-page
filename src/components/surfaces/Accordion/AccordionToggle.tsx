import { Typography } from '../../display-data';
import { Toggle } from './styled';
import { FiChevronDown } from 'react-icons/fi';
import { FC, HtmlHTMLAttributes } from 'react';

type AccordionToggleProps = {
  headLine: string;
  collapse?: boolean;
} & HtmlHTMLAttributes<HTMLButtonElement>;

const AccordionToggle: FC<AccordionToggleProps> = ({ headLine, collapse, ...props }) => {
  return (
    <Toggle collapse={collapse} {...props}>
      <Typography as='h5' weight='semibold'>
        {headLine}
      </Typography>
      <FiChevronDown size='1.5rem' />
    </Toggle>
  );
};

export default AccordionToggle;
