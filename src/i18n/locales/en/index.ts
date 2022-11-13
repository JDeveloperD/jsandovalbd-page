import localeEs from '../es';

const localeEn: typeof localeEs = {
  copy: `&copy; ${new Date().getFullYear()} Copyright by David. All Rights Reserved.`,
  header: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
  },
  'web-dev': 'Web Development',
  'web-design': 'Web Design',
  'view-more': 'View more',
  'visit-website': 'Visit Website',
  web: 'Web',
  landing: 'Landing',
  ecommerce: 'Ecommerce',
  design: 'Design',
  bannerMain: {
    title: {
      tag: 'Welcome',
      headline: {
        presentation: 'Hi! Im David',
        strings: {
          developer: 'Web Developer',
          designer: 'UI/UX Designer',
        },
      },
    },
    paragraph:
      'I invite you to learn a little more about my experience as a developer and UI/UX designer, based on projects carried out as a freelancer and as a collaborator in other companies.',
    button: 'Write me a',
  },
  workOnSection: {
    title: {
      tag: 'Work Experience',
      headline: {
        left: 'Companies I ',
        colored: 'Worked for',
      },
    },
  },
  serviceSection: {
    title: {
      tag: 'Specialties',
      headline: {
        left: 'My',
        colored: 'Experience',
      },
    },
    development: {
      title: 'Development (Front/Back)',
      description:
        'I am a developer with 3 years of experience, who manages the necessary technologies to develop a professional website.',
    },
    design: {
      title: 'Web Design (UX/UI)',
      description:
        'For the design, it is used as the main tool (Figma), which helps to provide solutions according to the clients line of business.',
    },
  },
  projectsSection: {
    title: {
      tag: 'Portfolio',
      headline: {
        left: 'My',
        colored: 'Proyects',
      },
    },
  },
  tecnologiesSection: {
    title: {
      tag: 'Languages & Tools',
      headline: {
        left: 'Technologies',
        colored: 'I use',
      },
    },
  },
  contactSection: {
    title: {
      tag: 'Contact Info',
      headline: {
        left: '¿Do you want',
        colored: 'To meet Me?',
      },
    },
    links: {
      linkedin: 'Profesional Profile',
      github: 'Project Repository',
    },
  },
};

export default localeEn;
