import { Col, Container, Row } from '../../layouts';
import { SocialNetworks } from '../../navigations';
import { FooterBackground } from './styled';
import { Typography } from '../../display-data';
import configMain from '../../../config/main';

const Footer = () => {
  return (
    <FooterBackground>
      <Container>
        <Row className='align-items-center g-4'>
          <Col xs={12} lg={3} className='text-center text-lg-start'>
            <a href=''>
              <img src={configMain.logo.dark} alt='' width={140} />
            </a>
          </Col>
          <Col xs={12} lg={6}>
            <Typography size='xs' weight='semibold' className='text-center'>
              &copy; {new Date().getFullYear()} Copyright por David. Todos los derechos reservados.
              Desarrollado por JDeveloperD
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
