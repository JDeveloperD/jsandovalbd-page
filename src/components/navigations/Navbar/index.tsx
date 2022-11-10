import NavbarItem from './NavbarItem';
import { List, Wrapper } from './styled';

const Navbar = ({ isActive }: { isActive: boolean }) => {
  return (
    <Wrapper active={isActive}>
      <List>
        <NavbarItem text='Inicio' to='/#inicio' />
        <NavbarItem text='Servicios' to='/#servicios' />
        <NavbarItem text='Portafolio' to='/#portafolio' />
        <NavbarItem text='Tecnologías' to='/#tecnologias' />
        <NavbarItem text='Contacto' to='/#contacto' />
      </List>
    </Wrapper>
  );
};

export default Navbar;
