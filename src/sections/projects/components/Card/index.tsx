import { FC } from 'react';
import {
  AiOutlineZoomIn,
  Button,
  Typography,
  VscLinkExternal,
} from '@components';

import { CardExcerpt, CardImage, CardInfo, CardWrapper } from './styled';

type CardProjectProps = {
  title: string;
  thumbnail: string;
  business: string;
  services: string;
  linkToPage?: string;
  linkToGallery: string;
};

const CardProject: FC<CardProjectProps> = ({
  title,
  thumbnail,
  business,
  services,
  linkToPage,
  linkToGallery,
}) => {
  return (
    <CardWrapper>
      <CardImage src={thumbnail} />
      <CardInfo>
        <Typography as='h4' size='2xl' color='white' className='mb-2'>
          {title}
        </Typography>
        <Typography as='h6' weight='semibold' color='neutral-200'>
          {business}
        </Typography>
        <CardExcerpt>
          <Button
            data-fancybox='gallery'
            data-src={linkToGallery}
            // data-caption='Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code'
            className='rounded-pill'
            color='brand-500'
            variant='contained'
            size='sm'
          >
            <AiOutlineZoomIn size='1rem' /> Ver más
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
              <VscLinkExternal size='0.85rem' /> Visitar sitio
            </Button>
          )}
        </CardExcerpt>
        <Typography as='small' size='xs' weight='semibold' color='neutral-100'>
          {services}
        </Typography>
      </CardInfo>
    </CardWrapper>
  );
};

export default CardProject;
