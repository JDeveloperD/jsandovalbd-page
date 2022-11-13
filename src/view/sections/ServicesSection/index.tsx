import {
  Accordion,
  AiOutlineStar,
  Col,
  Container,
  ImageSection,
  Row,
  Section,
  SectionTitle,
  Typography,
} from '@components';
import Development from '@assets/img/services/desarrollo.png';
import Design from '@assets/img/services/diseno-ui-ux.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const [itemSelected, setItemSelected] = useState(0);
  const { t } = useTranslation();

  const items = [
    {
      id: 'accordion-services-1',
      title: t('serviceSection.design.title'),
      paragraph: t('serviceSection.design.description'),
    },
    {
      id: 'accordion-services-2',
      title: t('serviceSection.development.title'),
      paragraph: t('serviceSection.development.description'),
    },
  ];

  return (
    <Section id='servicios'>
      <Container>
        <Row className='align-items-center justify-content-around g-3'>
          <Col md={6} xl={5}>
            <SectionTitle
              subtitle={t('serviceSection.title.tag')}
              title={{
                left: t('serviceSection.title.headline.left'),
                colored: t('serviceSection.title.headline.colored'),
              }}
              icon={<AiOutlineStar />}
            />
            <Typography className='mt-3 mb-5 text-center text-md-start'>
              {/* Apply Notero’s elegant themes to your taste. Dark themes work excellently for those
              who prefer distraction-free mode. */}
            </Typography>
            <Accordion
              data={items}
              itemSelected={(index: number) => {
                setItemSelected(index);
              }}
            />
          </Col>
          <Col md={6} xl={5}>
            {itemSelected === 0 && <ImageSection src={Design} />}
            {itemSelected === 1 && <ImageSection src={Development} />}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default ServicesSection;
