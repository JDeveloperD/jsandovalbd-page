import { SiGmail, FaLinkedinIn, FaGithub, BsWhatsapp } from '../components';

const whatsapp = {
  string: '+51 973 140 063',
  number: 973140063,
};

const gmail = 'jsandovalbd1993@gmail.com';

const configContact = {
  whatsapp,
  gmail,
  socialNetworks: [
    {
      id: 'sn-1',
      name: 'Gmail',
      icon: <SiGmail size='0.75rem' />,
      url: `mailto:${gmail}`,
      description: 'Correo electrónico',
    },
    {
      id: 'sn-2',
      name: 'Linkedin',
      icon: <FaLinkedinIn size='0.75rem' />,
      url: 'https://www.linkedin.com/in/david-sandoval-307681225/',
      description: 'Perfil profesional',
    },
    {
      id: 'sn-3',
      name: 'Github',
      icon: <FaGithub size='0.75rem' />,
      url: 'https://github.com/JDeveloperD',
      description: 'Repositorio de proyectos',
    },
    {
      id: 'sn-4',
      name: 'Whastapp',
      icon: <BsWhatsapp size='0.75rem' />,
      url: `https://wa.me/51${whatsapp.number}`,
      description: whatsapp.string,
    },
  ],
};

export default configContact;
