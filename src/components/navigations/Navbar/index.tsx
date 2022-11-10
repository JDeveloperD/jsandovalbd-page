import NavbarItem from './NavbarItem';
import { List, Wrapper } from './styled';

const Navbar = ({ isActive }: { isActive: boolean }) => {
  return (
    <Wrapper active={isActive}>
      <List>
        <NavbarItem text='Inicio' to='/jsandovalbd-page/#inicio' />
        <NavbarItem text='Servicios' to='/jsandovalbd-page/#servicios' />
        <NavbarItem text='Portafolio' to='/jsandovalbd-page/#portafolio' />
        <NavbarItem text='Tecnologías' to='/jsandovalbd-page/#tecnologias' />
        <NavbarItem text='Contacto' to='/jsandovalbd-page/#contacto' />
      </List>
    </Wrapper>
  );
};

export default Navbar;
