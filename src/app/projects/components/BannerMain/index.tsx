import { Button, Col, Container, Row, SiGmail, Tag, Typography } from '../../../../components';
import Wave from 'react-wavify';
import { useTheme } from 'styled-components';
import handMobile from '../../../../assets/img/mokups/hand-mobile-2.png';
import random1 from '../../../../assets/img/mokups/random1.png';
import adaraProject from '../../../../assets/img/projects/adara.jpg';
import bernardoProject from '../../../../assets/img/projects/bernardo.jpg';
import sweetFruitProject from '../../../../assets/img/projects/sweetfruit.jpg';
import agroclubProject from '../../../../assets/img/projects/agroclub.jpg';
import { BackgroundBanner, HandImage, ImageAnimated, SliderBanner } from './styled';
import TypeIt from 'typeit-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay } from 'swiper';
import configContact from '../../../../config/contact';

const BannerMainProject = () => {
  const theme = useTheme();
  return (
    <BackgroundBanner id='inicio'>
      <ImageAnimated>
        <img src={random1} />
      </ImageAnimated>
      <Container>
        <Row className='align-items-center g-5'>
          <Col lg={6} className='text-center text-lg-start'>
            <Tag label='Bienvenidos' size='sm' color='brand-600' />
            <Typography as='h1' size='4xl' color='titleSection' className='my-3 my-md-4'>
              Hola! soy David,
              <br />
              <Typography size='5xl' as='b' isGradient className='d-inline-block pt-3'>
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
              Te invito a conocer un poco más sobre mi experiencia como desarrollador y diseñador
              UI/UX, a partir de proyectos realizados como freelancer y como colaborador en otras
              empresas.
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
            <HandImage>
              <SliderBanner>
                <Swiper
                  spaceBetween={0}
                  // effect={'fade'}
                  direction={'vertical'}
                  autoplay
                  loop
                  modules={[EffectFade, Autoplay]}
                  className='swiper-projects'
                >
                  <SwiperSlide>
                    <img src={adaraProject} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={bernardoProject} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={sweetFruitProject} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={agroclubProject} />
                  </SwiperSlide>
                </Swiper>
              </SliderBanner>
              <img src={handMobile} />
            </HandImage>
          </Col>
        </Row>
      </Container>
      <div>
        <Wave
          fill={theme.colors['neutral-700']}
          paused={false}
          options={{
            height: 30,
            amplitude: 30,
            speed: 0.15,
            points: 3,
          }}
        />
        <div style={{ position: 'absolute', bottom: '-1rem', width: '100%' }}>
          <Wave
            fill={theme.colors['neutral-800']}
            paused={false}
            options={{
              height: 30,
              amplitude: 30,
              speed: 0.12,
              points: 4,
            }}
          />
        </div>
      </div>
    </BackgroundBanner>
  );
};

export default BannerMainProject;
