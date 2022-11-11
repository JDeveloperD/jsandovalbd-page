import { useScrollDirection } from '../../../hooks';
import { Col, Container, Row } from '../../layouts';
import { Nav, SocialNetworks } from '../../navigations';
import { HeaderWrapper } from './styled';
import { LogoTheme } from '../../display-data';
import NavToggler from '../../navigations/Nav/NavToggler';
import { useAppContext } from '../../../context';

const Header = () => {
  const { openNav } = useAppContext();
  const scrollDirection = useScrollDirection();

  return (
    <HeaderWrapper
      id='header'
      upScroll={scrollDirection === 'up'}
      downScroll={scrollDirection === 'down'}
      fixed={openNav}
    >
      <Container>
        <Row className='align-items-center'>
          <Col xs={6} md={3} lg={2}>
            <LogoTheme style={{ zIndex: 300 }} />
          </Col>
          <Col xs={6} md={9} lg={8}>
            <Nav />
            <NavToggler className='ms-auto d-md-none' />
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
