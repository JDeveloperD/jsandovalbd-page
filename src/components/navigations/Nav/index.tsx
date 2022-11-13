import { useAppContext } from '@context';
import { Typography, SocialNetworks } from '@components';
import { Button, Container, Item, List } from './styled';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { openNav, toggleOpenNav } = useAppContext();
  const { t } = useTranslation();

  const onSelectItem = (path: string) => {
    toggleOpenNav();

    if (window !== undefined) {
      window.location.href = path;
    }
  };

  return (
    <Container active={openNav}>
      <List>
        <Item>
          <Button onClick={() => onSelectItem('/jsandovalbd-page/#inicio')}>
            {t('header.nav.home')}
          </Button>
        </Item>
        <Item>
          <Button onClick={() => onSelectItem('/jsandovalbd-page/#servicios')}>
            {t('header.nav.services')}
          </Button>
        </Item>
        <Item>
          <Button onClick={() => onSelectItem('/jsandovalbd-page/#portafolio')}>
            {t('header.nav.portfolio')}
          </Button>
        </Item>
        <Item>
          <Button onClick={() => onSelectItem('/jsandovalbd-page/#contacto')}>
            {t('header.nav.contact')}
          </Button>
        </Item>
      </List>
      <div className='text-center d-md-none'>
        <SocialNetworks />
        <Typography
          size='xs'
          weight='semibold'
          className='mt-3'
          dangerouslySetInnerHTML={{ __html: t('copy') }}
        />
      </div>
    </Container>
  );
};

export default Nav;
