import { ButtonHTMLAttributes, FC } from 'react';
import { useAppContext } from '../../../context';
import { Toggler, TogglerIcon } from './styled';

type NavTogglerProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const NavToggler: FC<NavTogglerProps> = ({ ...props }) => {
  const { openNav, toggleOpenNav } = useAppContext();

  return (
    <Toggler onClick={toggleOpenNav} {...props}>
      <TogglerIcon active={openNav} />
    </Toggler>
  );
};

export default NavToggler;
