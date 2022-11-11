import { useToggle, useScrollDirection } from '../../../hooks';
import { ButtonBurger } from '../../inputs';
import { Col, Container, Row } from '../../layouts';
import { Navbar, SocialNetworks } from '../../navigations';
import { HeaderWrapper } from './styled';
import { LogoTheme } from '../../display-data';

const Header = () => {
  const [openNav, toggleNav] = useToggle();
  const scrollDirection = useScrollDirection();

  return (
    <HeaderWrapper
      id='header'
      upScroll={scrollDirection === 'up'}
      downScroll={scrollDirection === 'down'}
    >
      <Container>
        <Row className='align-items-center'>
          <Col xs={6} md={3} lg={2}>
            <LogoTheme style={{ zIndex: 300 }} />
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
    </HeaderWrapper>
  );
};

export default Header;
