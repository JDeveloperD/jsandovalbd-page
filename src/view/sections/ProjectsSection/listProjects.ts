import sweetFruitMockup from '@assets/img/projects/sweetfruit-mockup.png';
import sweetFruitThumb from '@assets/img/projects/sweetfruit-thumbnail.jpg';
import bernardoMockup from '@assets/img/projects/bernardo-mockup.png';
import bernardoThumb from '@assets/img/projects/bernardo-thumbnail.jpg';
import sweetFruitLandingMockup from '@assets/img/projects/sweetfruit-landing-mockup.png';
import sweetFruitLandingThumb from '@assets/img/projects/sweetfruit-landing-thumbnail.jpg';
import agroclubMockup from '@assets/img/projects/agroclub-mockup.png';
import agroclubThumb from '@assets/img/projects/agroclub-thumbnail.jpg';
import adaraMockup from '@assets/img/projects/adara-mockup.png';
import adaraThumb from '@assets/img/projects/adara-thumbnail.jpg';
import carussoMockup from '@assets/img/projects/carusso-mockup.png';
import carussoThumb from '@assets/img/projects/carusso-thumbnail.jpg';

export default [
  {
    id: 'project-1',
    title: 'Bernardo Alva',
    type: 'landing',
    thumbnail: bernardoThumb,
    linkToGallery: bernardoMockup,
    linkToPage: 'https://bernardoalva.com',
    business: 'Director de Pandora Marketing',
    services: ['web-design', 'web-dev'],
  },
  {
    id: 'project-2',
    type: 'web',
    title: 'Sweetfruit',
    thumbnail: sweetFruitThumb,
    linkToGallery: sweetFruitMockup,
    linkToPage: 'https://sweetfruit.pe/',
    business: 'Sweet Fuit Perú',
    services: ['web-design', 'web-dev'],
  },
  {
    id: 'project-3',
    title: 'Adara',
    type: 'ecommerce',
    thumbnail: adaraThumb,
    linkToGallery: adaraMockup,
    linkToPage: 'https://adaraperu.com/',
    business: 'Adara Joyas Perú',
    services: ['web-design', 'web-dev'],
  },
  {
    id: 'project-4',
    title: 'Sweetfruit',
    type: 'landing',
    thumbnail: sweetFruitLandingThumb,
    linkToGallery: sweetFruitLandingMockup,
    linkToPage: 'https://landing.sweetfruit.pe/',
    business: 'Sweet Fuit Perú',
    services: ['web-design', 'web-dev'],
  },
  {
    id: 'project-5',
    title: 'Agroclub',
    type: 'design',
    thumbnail: agroclubThumb,
    linkToGallery: agroclubMockup,
    business: 'Pandora Marketing',
    services: ['web-design'],
  },
  {
    id: 'project-56',
    title: 'Carusso',
    type: 'ecommerce',
    thumbnail: carussoThumb,
    linkToGallery: carussoMockup,
    linkToPage: 'https://carusso.pe/',
    business: 'Carusso - Calzado y Accesorios',
    services: ['web-dev'],
  },
];
