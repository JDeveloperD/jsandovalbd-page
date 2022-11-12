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

const items = [
  {
    id: 'accordion-services-1',
    title: 'Diseño web Ux/UI',
    paragraph:
      'Para el diseño se utiliza como herramienta principal (Figma), la cual ayudar a brindar soluciones acordes al giro de negocio del cliente.',
  },
  {
    id: 'accordion-services-2',
    title: 'Desarrollo (Front/Back)',
    paragraph:
      'Soy un desarrollador con una experiencia de 3 años, que maneja las tecnologías necesarias para desarrollar una web profesional.',
  },
  // {
  //   id: 'accordion-services-3',
  //   title: 'Social Media',
  //   paragraph:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum possimus vero </br> similique dolore laboriosam error aliquid nobis, at, saepe quidem sunt repellendus iste <b>facere minima.</b> Enim magni porro nulla!',
  // },
];

const AccordionSectionServices = () => {
  const [itemSelected, setItemSelected] = useState(0);

  return (
    <Section id='servicios'>
      <Container>
        <Row className='align-items-center justify-content-around g-3'>
          <Col md={6} xl={5}>
            <SectionTitle
              subtitle='Especialidades'
              title={{ left: 'Mi', colored: 'Experiencia' }}
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

export default AccordionSectionServices;
