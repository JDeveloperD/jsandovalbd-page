import {
  Button,
  Col,
  Container,
  Row,
  SiGmail,
  Tag,
  Typography,
} from '@components';
import random1 from '@assets/img/mokups/random1.png';
import { BackgroundBanner, ImageAnimated } from './styled';
import TypeIt from 'typeit-react';
import configContact from '@config/contact';
import Wave from './Wave';
import HandSlider from './HandSlider';

const BannerMainProject = () => {
  return (
    <BackgroundBanner id='inicio'>
      <ImageAnimated>
        <img src={random1} />
      </ImageAnimated>
      <Container>
        <Row className='align-items-center g-5'>
          <Col lg={6} className='text-center text-lg-start'>
            <Tag label='Bienvenidos' size='sm' color='brand-600' />
            <Typography
              as='h1'
              size='4xl'
              color='titleSection'
              className='my-3 my-md-4'
            >
              Hola! soy David,
              <br />
              <Typography
                size='5xl'
                as='b'
                isGradient
                className='d-inline-block pt-3'
              >
                <TypeIt
                  options={{
                    loop: true,
                    lifeLike: true,
                    cursor: true,
                    cursorSpeed: 1000,
                    breakLines: false,
                  }}
                  getBeforeInit={(instance: any) => {
                    instance
                      .type('Desarrollador <br className="d-none" /> FrontEnd')
                      .pause(750)
                      .move(-3)
                      .delete(5)
                      .pause(500)
                      .type('Back')
                      .move(3)
                      .pause(2000)
                      .delete()
                      .type('Diseñador UI')
                      .pause(500)
                      .type('/UX')
                      .pause(2000)
                      .go();

                    return instance;
                  }}
                />
              </Typography>
            </Typography>
            <Typography>
              Te invito a conocer un poco más sobre mi experiencia como
              desarrollador y diseñador UI/UX, a partir de proyectos realizados
              como freelancer y como colaborador en otras empresas.
            </Typography>
            <div className='mt-5'>
              <Button
                as='a'
                href={`mailto:${configContact.gmail}`}
                className='rounded-pill'
                variant='contained'
                color='brand-500'
                size='md'
              >
                Escríbeme un mensaje <SiGmail />
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <HandSlider />
          </Col>
        </Row>
      </Container>
      <Wave />
    </BackgroundBanner>
  );
};

export default BannerMainProject;
