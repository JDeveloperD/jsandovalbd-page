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
import configContact from '@config/contact';
import Wave from './Wave';
import HandSlider from './HandSlider';
import { useTranslation } from 'react-i18next';
import TypewriterComponent from 'typewriter-effect';

const BannerMain = () => {
  const { t } = useTranslation();

  return (
    <BackgroundBanner id='inicio'>
      <ImageAnimated>
        <img src={random1} />
      </ImageAnimated>
      <Container>
        <Row className='align-items-center g-5'>
          <Col lg={6} className='text-center text-lg-start'>
            <Tag
              label={t('bannerMain.title.tag')}
              size='sm'
              data-aos='fade-right'
              data-aos-delay={2500}
              data-aos-duration={1500}
              data-aos-once={true}
            />
            <Typography
              as='h1'
              size='4xl'
              color='headline-1'
              className='my-3 my-md-4'
              data-aos='fade-right'
              data-aos-delay={2600}
              data-aos-duration={1500}
              data-aos-once={true}
            >
              {t('bannerMain.title.headline.presentation')}
              <br />
              <Typography
                size='5xl'
                as='b'
                isGradient
                className='d-inline-block pt-3'
              >
                <TypewriterComponent
                  options={{
                    strings: [
                      t('bannerMain.title.headline.strings.developer'),
                      t('bannerMain.title.headline.strings.designer'),
                    ],
                    loop: true,
                    autoStart: true,
                  }}
                />
              </Typography>
            </Typography>
            <Typography
              data-aos='fade-right'
              data-aos-delay={2700}
              data-aos-duration={1500}
              data-aos-once={true}
            >
              {t('bannerMain.paragraph')}
            </Typography>
            <div
              className='mt-5'
              data-aos='fade-right'
              data-aos-delay={2800}
              data-aos-duration={1500}
              data-aos-once={true}
            >
              <Button
                as='a'
                href={`mailto:${configContact.gmail}`}
                className='rounded-pill'
                variant='contained'
                color='brand-500'
                size='md'
              >
                {t('bannerMain.button')} <SiGmail />
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

export default BannerMain;
