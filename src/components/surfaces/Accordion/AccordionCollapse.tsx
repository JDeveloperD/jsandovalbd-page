import { CSSProperties, FC, useLayoutEffect, useRef, useState } from 'react';
import { Collapse } from './styled';

type AccordionCollapseProps = {
  content: string;
  collapse?: boolean;
};

const AccordionCollapse: FC<AccordionCollapseProps> = ({
  content,
  collapse,
}) => {
  const [style, setStyle] = useState<CSSProperties>();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const divElement = ref.current;

    if (divElement) {
      // console.log(divElement.scrollHeight);
      if (collapse) {
        setStyle({ height: divElement.scrollHeight });
      } else {
        setStyle(undefined);
      }
    }
  }, [collapse]);

  return (
    <Collapse style={style} ref={ref}>
      <p
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </Collapse>
  );
};

export default AccordionCollapse;
