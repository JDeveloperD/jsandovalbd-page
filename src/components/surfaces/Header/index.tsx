import {
  Col,
  Container,
  Row,
  Nav,
  LogoTheme,
  SocialNetworks,
} from '@components';
import { useScrollDirection } from '@hooks';
import { HeaderButtons, HeaderWrapper } from './styled';
import NavToggler from '@components/navigations/Nav/NavToggler';
import { useAppContext } from '@context';
import { SwitchTheme } from '@theme';
import { ButtonLanguage } from '@i18n';
import { useEffect } from 'react';

const Header = () => {
  const { openNav } = useAppContext();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 1000);
  }, []);
  return (
    <HeaderWrapper
      id='header'
      upScroll={scrollDirection === 'up'}
      downScroll={scrollDirection === 'down'}
      fixed={openNav}
    >
      <Container>
        <Row className='align-items-center'>
          <Col xs={2} sm={3} className='d-md-none'>
            <NavToggler className='d-md-none' />
          </Col>
          <Col xs={6} md={3} lg={2} className='text-center text-md-start'>
            <LogoTheme style={{ zIndex: 300 }} />
          </Col>
          <Col xs={4} sm={3} md={9} lg={10}>
            <div className='d-flex align-items-center justify-content-end'>
              <Nav />
              <HeaderButtons>
                <div>
                  <ButtonLanguage />
                </div>
                <div>
                  <SwitchTheme />
                </div>
                <div className='d-none d-lg-inline-block'>
                  <SocialNetworks />
                </div>
              </HeaderButtons>
            </div>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
