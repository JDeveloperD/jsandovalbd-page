import { useToggle } from '../../../hooks';
import { ButtonBurger } from '../../inputs';
import { Col, Container, Row } from '../../layouts';
import { Navbar, SocialNetworks } from '../../navigations';
import configMain from '../../../config/main';

const Header = () => {
  const [openNav, toggleNav] = useToggle();

  return (
    <header className='py-2'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={6} md={3} lg={2}>
            <a href=''>
              <img src={configMain.logo.dark} alt='' width={140} />
            </a>
          </Col>
          <Col xs={6} md={9} lg={8}>
            <Navbar isActive={openNav} />
            <ButtonBurger className='ms-auto d-md-none' active={openNav} onClick={toggleNav} />
          </Col>
          <Col lg={2} className='d-none d-lg-block text-end'>
            <SocialNetworks />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
