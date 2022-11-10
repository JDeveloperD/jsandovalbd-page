import { Fragment, ReactNode } from 'react';
import { Footer, Header } from '../components';
import { ButtonScrollTop } from '../components/navigations';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
      <ButtonScrollTop />
    </Fragment>
  );
};

export default DefaultLayout;
