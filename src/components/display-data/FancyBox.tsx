import { FC, ReactNode, useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox.css';

type FancyboxProps = {
  delegate?: any;
  options?: any;
  children: ReactNode;
};
const Fancybox: FC<FancyboxProps> = ({ delegate, options, children }) => {
  const del = delegate || '[data-fancybox]';

  useEffect(() => {
    const opts = options || {};

    NativeFancybox.bind(del, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default Fancybox;
