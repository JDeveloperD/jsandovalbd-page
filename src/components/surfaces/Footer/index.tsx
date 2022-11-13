import {
  Col,
  Container,
  Row,
  SocialNetworks,
  LogoTheme,
  Typography,
} from '@components';
import { useTranslation } from 'react-i18next';
import { FooterBackground } from './styled';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterBackground>
      <Container>
        <Row className='align-items-center g-4'>
          <Col xs={12} lg={3} className='text-center text-lg-start'>
            <LogoTheme />
          </Col>
          <Col xs={12} lg={6}>
            <Typography
              size='xs'
              weight='semibold'
              className='text-center'
              dangerouslySetInnerHTML={{ __html: t('copy') }}
            />
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
