import {
  Col,
  Container,
  Row,
  SectionTitle,
  AiOutlineStar,
  Section,
  FancyBox,
} from '@components';
import CardProject from '../Card';
import listProjects from './listProjects';

const GridProjects = () => {
  return (
    <Section id='portafolio'>
      <Container>
        <SectionTitle
          subtitle='Portafolio'
          title={{ left: 'Trabajos', colored: 'Realizados' }}
          icon={<AiOutlineStar />}
          align='center'
        />
        <FancyBox options={{ infinite: false }}>
          <Row className='g-1 mt-5'>
            {listProjects.map(project => (
              <Col md={6} xl={4} key={project.id}>
                <CardProject
                  title={project.title}
                  thumbnail={project.thumbnail}
                  linkToGallery={project.linkToGallery}
                  linkToPage={project.linkToPage}
                  business={project.business}
                  services={project.services}
                />
              </Col>
            ))}
          </Row>
        </FancyBox>
      </Container>
    </Section>
  );
};

export default GridProjects;
