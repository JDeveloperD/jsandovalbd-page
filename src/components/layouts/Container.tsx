import { ReactNode } from 'react';
import { Container as BsContainer } from 'react-bootstrap';

const Container = ({ children }: { children: ReactNode }) => {
  return <BsContainer fluid='xl'>{children}</BsContainer>;
};

export default Container;
