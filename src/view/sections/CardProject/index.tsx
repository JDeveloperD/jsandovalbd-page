import { FC } from 'react';
import {
  AiOutlineZoomIn,
  Button,
  Typography,
  VscLinkExternal,
} from '@components';

import { CardExcerpt, CardImage, CardInfo, CardWrapper } from './styled';
import { useTranslation } from 'react-i18next';

type CardProjectProps = {
  title: string;
  type: string;
  thumbnail: string;
  business: string;
  services: string[];
  linkToPage?: string;
  linkToGallery: string;
};

const CardProject: FC<CardProjectProps> = ({
  title,
  type,
  thumbnail,
  business,
  services,
  linkToPage,
  linkToGallery,
}) => {
  const { t } = useTranslation();
  return (
    <CardWrapper>
      <CardImage src={thumbnail} />
      <CardInfo>
        <Typography as='h4' size='2xl' color='white' className='mb-2'>
          {t(type)} - {title}
        </Typography>
        <Typography as='h6' weight='semibold' color='neutral-200'>
          {business}
        </Typography>
        <CardExcerpt>
          <Button
            data-fancybox='gallery'
            data-src={linkToGallery}
            className='rounded-pill'
            color='brand-500'
            variant='contained'
            size='sm'
          >
            <AiOutlineZoomIn size='1rem' /> {t('view-more')}
          </Button>
          {linkToPage && (
            <Button
              as='a'
              href={linkToPage}
              target='_blank'
              className='rounded-pill'
              color='brand-500'
              variant='contained'
              size='sm'
            >
              <VscLinkExternal size='0.85rem' /> {t('visit-website')}
            </Button>
          )}
        </CardExcerpt>
        <Typography as='small' size='xs' weight='semibold' color='neutral-100'>
          {services.map((service, index) => {
            return `${index !== 0 ? ' / ' : ''}` + t(service);
          })}
        </Typography>
      </CardInfo>
    </CardWrapper>
  );
};

export default CardProject;
