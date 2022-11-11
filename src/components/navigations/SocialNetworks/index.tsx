import configContact from '../../../config/contact';
import { Button } from '../../inputs';

const SocialNetworks = () => {
  return (
    <div className='d-inline-flex gap-2'>
      {configContact.socialNetworks.map(social => (
        <Button
          key={social.id}
          as='a'
          href={social.url}
          target='_blank'
          className='rounded-pill'
          variant='outlined'
          size='icon'
          color='textBody'
        >
          {social.icon}
        </Button>
      ))}
    </div>
  );
};

export default SocialNetworks;
