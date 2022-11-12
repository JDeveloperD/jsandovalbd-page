import { DefaultLayout } from '@view/layouts';
import {
  BannerMain,
  ContactSection,
  ProjectsSection,
  ServicesSection,
  TecnologiesSection,
  WorkOnSection,
} from '@view/sections';

const HomePage = () => {
  return (
    <DefaultLayout>
      <BannerMain />
      <WorkOnSection />
      <ServicesSection />
      <ProjectsSection />
      <TecnologiesSection />
      <ContactSection />
    </DefaultLayout>
  );
};

export default HomePage;
