import { ContactInfoSection, WorkOnSection } from '../app/personalInfo/components';
import { BannerMainProject, GridProjects } from '../app/projects/components';
import { AccordionSectionServices } from '../app/services/components';
import { TecnologiesSection } from '../app/tecnologies/components';
import { DefaultLayout } from '../layouts';

const HomePage = () => {
  return (
    <DefaultLayout>
      <BannerMainProject />
      <WorkOnSection />
      <AccordionSectionServices />
      <GridProjects />
      <TecnologiesSection />
      <ContactInfoSection />
    </DefaultLayout>
  );
};

export default HomePage;
