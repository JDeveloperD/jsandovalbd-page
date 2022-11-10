import { AiOutlineStar, Container, Section, SectionTitle } from '../../../../components';
import imgUser from '../../../../assets/img/mokups/user.png';
import { BackgroundImg, GroupIcons, Icon } from './styled';
import random2 from '../../../../assets/img/mokups/random2.png';

import react from '../../../../assets/svg/tecnology/reactjs.svg';
import nodejs from '../../../../assets/svg/tecnology/nodejs.svg';
import wordpress from '../../../../assets/svg/tecnology/wordpress.svg';
import woocomerce from '../../../../assets/svg/tecnology/woocommerce.svg';
import nextjs from '../../../../assets/svg/tecnology/nextjs-white.svg';
import php from '../../../../assets/svg/tecnology/php.svg';
import typescript from '../../../../assets/svg/tecnology/typescript.svg';
import styledComponents from '../../../../assets/svg/tecnology/styled-components.svg';
import sass from '../../../../assets/svg/tecnology/sass.svg';
import bootstrap from '../../../../assets/svg/tecnology/bootstrap.svg';

const TecnologiesSection = () => {
  return (
    <Section color='neutral-800' id='tecnologias'>
      <Container>
        <BackgroundImg>
          <img src={random2} />
        </BackgroundImg>
        <SectionTitle
          subtitle='Lenguajes y herramientas'
          title={{ left: 'Tecnologías en ', colored: 'mis Proyectos' }}
          icon={<AiOutlineStar />}
          align='center'
        />
        <GroupIcons className='mt-5'>
          <Icon>
            <img src={imgUser} />
          </Icon>
          <Icon>
            <img src={nodejs} />
          </Icon>
          <Icon>
            <img src={react} />
          </Icon>
          <Icon>
            <img src={wordpress} />
          </Icon>
          <Icon>
            <img src={woocomerce} />
          </Icon>
          <Icon>
            <img src={nextjs} />
          </Icon>
          <Icon>
            <img src={php} />
          </Icon>
          <Icon className='d-none d-md-block'>
            <img src={bootstrap} />
          </Icon>
          <Icon className='d-none d-md-block'>
            <img src={styledComponents} />
          </Icon>
          <Icon className='d-none d-md-block'>
            <img src={sass} />
          </Icon>
          <Icon className='d-none d-md-block'>
            <img src={typescript} />
          </Icon>
        </GroupIcons>
      </Container>
    </Section>
  );
};

export default TecnologiesSection;
