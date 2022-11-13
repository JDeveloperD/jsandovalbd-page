import { AiOutlineStar, Container, Section, SectionTitle } from '@components';
import { BackgroundImg, GroupIcons, Icon } from './styled';
import imgUser from '@assets/img/mokups/user.png';
import random2 from '@assets/img/mokups/random2.png';
import react from '@assets/svg/tecnology/reactjs.svg';
import nodejs from '@assets/svg/tecnology/nodejs.svg';
import wordpress from '@assets/svg/tecnology/wordpress.svg';
import woocomerce from '@assets/svg/tecnology/woocommerce.svg';
import nextjsWhite from '@assets/svg/tecnology/nextjs-white.svg';
import nextjsBlack from '@assets/svg/tecnology/nextjs.svg';
import php from '@assets/svg/tecnology/php.svg';
import typescript from '@assets/svg/tecnology/typescript.svg';
import styledComponents from '@assets/svg/tecnology/styled-components.svg';
import sass from '@assets/svg/tecnology/sass.svg';
import bootstrap from '@assets/svg/tecnology/bootstrap.svg';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

const TecnologiesSection = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Section color='background-1' id='tecnologias'>
      <Container>
        <BackgroundImg>
          <img src={random2} />
        </BackgroundImg>
        <SectionTitle
          subtitle={t('tecnologiesSection.title.tag')}
          title={{
            left: t('tecnologiesSection.title.headline.left'),
            colored: t('tecnologiesSection.title.headline.colored'),
          }}
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
            <img src={theme.mode === 'light' ? nextjsBlack : nextjsWhite} />
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
