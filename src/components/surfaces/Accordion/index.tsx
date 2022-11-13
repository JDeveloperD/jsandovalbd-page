import { FC, HtmlHTMLAttributes, useState } from 'react';
import AccordionCollapse from './AccordionCollapse';
import { Item } from './styled';
import AccordionToggle from './AccordionToggle';

type AccordionProps = {
  data: { id: any; title: string; paragraph: string }[];
  defaultItemActive?: number;
  itemSelected: (index: number) => any;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Accordion: FC<AccordionProps> = ({ data, itemSelected, ...props }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
    itemSelected(index);
  };

  return (
    <div {...props}>
      {data.map((item, index) => {
        const collapse = index === activeIndex;
        return (
          <Item collapse={collapse} key={item.id}>
            <AccordionToggle
              collapse={collapse}
              headLine={item.title}
              onClick={() => onToggle(index)}
            />
            <AccordionCollapse collapse={collapse} content={item.paragraph} />
          </Item>
        );
      })}
    </div>
  );
};

export default Accordion;
