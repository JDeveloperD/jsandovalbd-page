import styled, { useTheme } from 'styled-components';
import configMain from '@config/main';

const LogoThemeContent = styled.a`
  display: inline-block;
  width: 100%;
  height: 40px;
  position: relative;

  img {
    height: 100%;
    object-fit: contain;
    object-position: left;
  }
`;

const LogoTheme = ({ ...props }) => {
  const theme = useTheme();

  return (
    <LogoThemeContent {...props}>
      <img
        src={configMain.logo[theme.mode === 'light' ? 'default' : 'dark']}
        alt='JSandovalbD'
      />
    </LogoThemeContent>
  );
};

export default LogoTheme;
