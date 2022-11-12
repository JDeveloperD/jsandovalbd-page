import { BsFillMoonFill, BsFillSunFill } from '@components';
import styled, { css } from 'styled-components';
import { useTheme } from './context';
import { TRANSITIONS, Z_INDEX_BUTTON } from './variables';

const Switch = styled.div`
  position: relative;
  cursor: pointer;
  z-index: ${Z_INDEX_BUTTON};
  width: 40px;
  height: 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50px;
  background: ${({ theme }) => theme.colors['background-1']};
`;
const Toggle = styled.div<{ active: boolean }>`
  background: ${({ theme }) => theme.colors.body};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  transition: ${TRANSITIONS.base};

  ${({ active }) =>
    active &&
    css`
      margin-left: 17px;
    `}
`;

const SwitchTheme = ({ ...props }) => {
  const { toggleTheme, isThemeLight } = useTheme();

  return (
    <Switch onClick={toggleTheme} {...props}>
      <Toggle active={!isThemeLight}>
        {isThemeLight ? <BsFillSunFill /> : <BsFillMoonFill />}
      </Toggle>
    </Switch>
  );
};

export default SwitchTheme;
