import {
  ContactInfoSection,
  WorkOnSection,
} from '@sections/personalInfo/components';
import { BannerMainProject, GridProjects } from '@sections/projects/components';
import { AccordionSectionServices } from '@sections/services/components';
import { TecnologiesSection } from '@sections/tecnologies/components';
import { DefaultLayout } from '@view/layouts';

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
