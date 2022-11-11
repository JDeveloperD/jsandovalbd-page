import { Col, Container, Row } from '../../layouts';
import { SocialNetworks } from '../../navigations';
import { FooterBackground } from './styled';
import { LogoTheme, Typography } from '../../display-data';

const Footer = () => {
  return (
    <FooterBackground>
      <Container>
        <Row className='align-items-center g-4'>
          <Col xs={12} lg={3} className='text-center text-lg-start'>
            <LogoTheme />
          </Col>
          <Col xs={12} lg={6}>
            <Typography size='xs' weight='semibold' className='text-center'>
              &copy; {new Date().getFullYear()} Copyright por David. Todos los derechos reservados.
            </Typography>
          </Col>
          <Col xs={12} lg={3} className='text-center text-lg-end'>
            <SocialNetworks />
          </Col>
        </Row>
      </Container>
    </FooterBackground>
  );
};

export default Footer;
