import {
  AiOutlineStar,
  Col,
  Container,
  Row,
  Section,
  SectionTitle,
} from '@components';
import logoPandora from '@assets/logos/logo-pandora.svg';
import logoInterfaz from '@assets/logos/logo-interfaz-light.png';
import logoSolera from '@assets/logos/logo-solera.webp';
import random2 from '@assets/img/mokups/random2.png';
import { ImageAnimated, Logo } from './styled';
import { useTranslation } from 'react-i18next';

const WorkOnSection = () => {
  const { t } = useTranslation();
  return (
    <Section color='background-1' className='overflow-hidden pt-1'>
      <ImageAnimated>
        <img src={random2} />
      </ImageAnimated>
      <Container>
        <SectionTitle
          subtitle={t('workOnSection.title.tag')}
          title={{
            left: t('workOnSection.title.headline.left'),
            colored: t('workOnSection.title.headline.colored'),
          }}
          icon={<AiOutlineStar />}
          align='center'
        />
        <Row
          className='justify-content-center mt-5 pt-5'
          style={{ zIndex: 3, position: 'relative' }}
        >
          <Col md={4} xl={3}>
            <Logo
              target='_blank'
              rel='noreferrer'
              href='https://pandoramarketing.net/'
            >
              <img src={logoPandora} />
            </Logo>
          </Col>
          <Col md={4} xl={3}>
            <Logo
              target='_blank'
              rel='noreferrer'
              href='https://pandoramarketing.net/'
            >
              <img src={logoSolera} />
            </Logo>
          </Col>
          <Col md={4} xl={3}>
            <Logo target='_blank' rel='noreferrer' href='https://interfaz.app/'>
              <img src={logoInterfaz} />
            </Logo>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default WorkOnSection;
