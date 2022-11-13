import {
  Col,
  Container,
  Row,
  SectionTitle,
  AiOutlineStar,
  Section,
  FancyBox,
} from '@components';
import { useTranslation } from 'react-i18next';
import CardProject from '../CardProject';
import listProjects from './listProjects';

const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <Section id='portafolio'>
      <Container>
        <SectionTitle
          subtitle={t('projectsSection.title.tag')}
          title={{
            left: t('projectsSection.title.headline.left'),
            colored: t('projectsSection.title.headline.colored'),
          }}
          icon={<AiOutlineStar />}
          align='center'
        />
        <FancyBox options={{ infinite: false }}>
          <Row className='g-1 mt-5'>
            {listProjects.map(project => (
              <Col md={6} lg={4} key={project.id}>
                <CardProject
                  title={project.title}
                  type={project.type}
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

export default ProjectsSection;
