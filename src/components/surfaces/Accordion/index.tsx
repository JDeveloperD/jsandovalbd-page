import { FC, useState } from 'react';
import AccordionItem from './AccordionItem';

type AccordionProps = {
  data: { id: any; title: string; paragraph: string }[];
  defaultItemActive?: number;
  itemSelected: (title: string) => any;
};

const Accordion: FC<AccordionProps> = ({ data = [], defaultItemActive = 1, itemSelected }) => {
  const [accordionActive, setAccordionActive] = useState(defaultItemActive);

  if (data.length === 0) {
    return null;
  }

  const handleActiveItem = (numberItem: number) => {
    setAccordionActive(numberItem);
  };

  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          headLine={item.title}
          paragraph={item.paragraph}
          isActive={accordionActive === index + 1}
          onClick={() => {
            handleActiveItem(index + 1);
            itemSelected(item.id);
          }}
        />
      ))}
    </div>
  );
};

export default Accordion;
