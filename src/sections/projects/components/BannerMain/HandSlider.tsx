import handMobile from '@assets/img/mokups/hand-mobile-2.png';
import adaraProject from '@assets/img/projects/adara.jpg';
import bernardoProject from '@assets/img/projects/bernardo.jpg';
import sweetFruitProject from '@assets/img/projects/sweetfruit.jpg';
import agroclubProject from '@assets/img/projects/agroclub.jpg';
import { HandImage, SliderBanner } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay } from 'swiper';

const HandSlider = () => {
  return (
    <HandImage>
      <SliderBanner>
        <Swiper
          spaceBetween={0}
          effect={'fade'}
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
  );
};

export default HandSlider;
