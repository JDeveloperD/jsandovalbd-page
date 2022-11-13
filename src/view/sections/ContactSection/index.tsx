import {
  AiOutlineStar,
  Container,
  Section,
  SectionTitle,
  Typography,
} from '@components';
import { Group, GroupIcon, GroupItem } from './styled';
import iconGithub from '@assets/svg/brand/github.svg';
import iconLinkedin from '@assets/svg/brand/linkedin.svg';
import iconWhatsapp from '@assets/svg/brand/whatsapp.svg';
import configContact from '@config/contact';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { socialNetworks } = configContact;
  const { t } = useTranslation();

  return (
    <Section id='contacto'>
      <Container>
        <SectionTitle
          subtitle={t('contactSection.title.tag')}
          title={{
            left: t('contactSection.title.headline.left'),
            colored: t('contactSection.title.headline.colored'),
          }}
          icon={<AiOutlineStar />}
          align='center'
        />
        <Group className='mt-5'>
          <GroupItem
            href={socialNetworks[1].url}
            target='_blank'
            rel='noreferre'
          >
            <GroupIcon>
              <img src={iconLinkedin} width={45} height={45} />
            </GroupIcon>
            <div>
              <Typography size='2xl' color='headline-1'>
                Linkedin
              </Typography>
              <Typography color='text' size='sm'>
                {t('contactSection.links.linkedin')}
              </Typography>
            </div>
          </GroupItem>
          <GroupItem
            href={socialNetworks[2].url}
            target='_blank'
            rel='noreferre'
          >
            <GroupIcon>
              <img src={iconGithub} width={45} height={45} />
            </GroupIcon>
            <div>
              <Typography size='2xl' color='headline-1'>
                Github
              </Typography>
              <Typography color='text' size='sm'>
                {t('contactSection.links.github')}
              </Typography>
            </div>
          </GroupItem>
          <GroupItem
            href={socialNetworks[3].url}
            target='_blank'
            rel='noreferre'
          >
            <GroupIcon>
              <img src={iconWhatsapp} width={45} height={45} />
            </GroupIcon>
            <div>
              <Typography size='2xl' color='headline-1'>
                Whatsapp
              </Typography>
              <Typography color='text' size='sm'>
                {socialNetworks[3].description}
              </Typography>
            </div>
          </GroupItem>
        </Group>
      </Container>
    </Section>
  );
};

export default ContactSection;
