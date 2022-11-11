import { useAppContext } from '../../../context';
import { Typography } from '../../display-data';
import SocialNetworks from '../SocialNetworks';
import { Button, Container, Item, List } from './styled';

const Nav = () => {
  const { openNav, toggleOpenNav } = useAppContext();

  const onSelectItem = (path: string) => {
    toggleOpenNav();

    if (window !== undefined) {
      window.location.href = path;
    }
  };
  return (
    <Container active={openNav}>
      <List>
        <Item>
          <Button onClick={() => onSelectItem('/jsandovalbd-page/#inicio')}>Inicio</Button>
        </Item>
        <Item>
          <Button onClick={() => onSelectItem('/jsandovalbd-page/#servicios')}>Servicios</Button>
        </Item>
        <Item>
          <Button onClick={() => onSelectItem('/jsandovalbd-page/#portafolio')}>Portafolio</Button>
        </Item>
        <Item>
          <Button onClick={() => onSelectItem('/jsandovalbd-page/#contacto')}>Contacto</Button>
        </Item>
      </List>
      <div className='text-center d-md-none'>
        <SocialNetworks />
        <Typography size='xs' weight='semibold' className='mt-3'>
          &copy; {new Date().getFullYear()} Copyright por David. Todos los derechos reservados.
        </Typography>
      </div>
    </Container>
  );
};

export default Nav;
