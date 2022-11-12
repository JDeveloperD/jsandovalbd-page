import { ButtonScrollTop, Footer, Header } from '@components';
import { Fragment, ReactNode } from 'react';

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
