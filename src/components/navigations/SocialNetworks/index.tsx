import configContact from '@config/contact';
import { SocialItem } from './styled';

const SocialNetworks = () => {
  return (
    <div className='d-inline-flex'>
      {configContact.socialNetworks.map(social => (
        <SocialItem key={social.id} as='a' href={social.url} target='_blank'>
          {social.icon}
        </SocialItem>
      ))}
    </div>
  );
};

export default SocialNetworks;
