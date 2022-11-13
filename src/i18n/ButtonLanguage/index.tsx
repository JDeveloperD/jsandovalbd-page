import { FiChevronDown, TbLanguage } from '@components';
import { SHADOW, TRANSITIONS, Z_INDEX_BUTTON } from '@theme';
import styled, { css } from 'styled-components';
import { CgArrowTopRight } from 'react-icons/cg';
import { getFontWeight, getSize } from '@components/display-data/Typography';
import { useTranslation } from 'react-i18next';
import { getLocalStorage, setLocalStorage } from '@utils';

const List = styled.div`
  position: absolute;
  top: 150%;
  right: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.body};
  box-shadow: ${SHADOW.xl};
  z-index: 2;
  padding: 1rem;
  border-radius: 1rem;
  opacity: 0;
  visibility: hidden;
  transition: ${TRANSITIONS.base};
`;

const Language = styled.a<{ active?: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.5rem 24px 0.5rem 12px;
  gap: 0.5rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;

  ${getSize('xs')}

  &:hover {
    background: ${({ theme }) => theme.colors['background-1']};
  }

  ${({ active }) =>
    active &&
    css`
      ${getFontWeight('semibold')}
    `}
`;

const Button = styled.button`
  background: transparent;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  z-index: ${Z_INDEX_BUTTON};

  &:hover {
    ${List} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const ButtonLanguage = () => {
  const { i18n } = useTranslation();

  const handleChangLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setLocalStorage('language', language);
  };

  const currentLanguage = getLocalStorage('language');

  return (
    <Button>
      <TbLanguage />
      <FiChevronDown />
      <List>
        <Language
          active={currentLanguage === 'en'}
          onClick={() => handleChangLanguage('en')}
        >
          English <CgArrowTopRight />
        </Language>
        <Language
          active={currentLanguage === 'es'}
          onClick={() => handleChangLanguage('es')}
        >
          Español <CgArrowTopRight />
        </Language>
      </List>
    </Button>
  );
};

export default ButtonLanguage;
