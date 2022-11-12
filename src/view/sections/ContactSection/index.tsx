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

const ContactSection = () => {
  const { socialNetworks } = configContact;
  return (
    <Section id='contacto'>
      <Container>
        <SectionTitle
          subtitle='Información de contacto'
          title={{ left: '¿Quieres saber', colored: 'Más sobre Mí?' }}
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
              <Typography size='2xl' color='titleSection'>
                {socialNetworks[1].name}
              </Typography>
              <Typography color='textBody' size='sm'>
                {socialNetworks[1].description}
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
              <Typography size='2xl' color='titleSection'>
                {socialNetworks[2].name}
              </Typography>
              <Typography color='textBody' size='sm'>
                {socialNetworks[2].description}
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
              <Typography size='2xl' color='titleSection'>
                {socialNetworks[3].name}
              </Typography>
              <Typography color='textBody' size='sm'>
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
