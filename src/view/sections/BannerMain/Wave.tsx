import Wavify from 'react-wavify';
import { useTheme } from 'styled-components';
import { ContentWave } from './styled';

const Wave = () => {
  const theme = useTheme();
  return (
    <ContentWave>
      <Wavify
        fill={theme.colors['background-2']}
        paused={false}
        options={{
          height: 30,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
      />
      <div style={{ position: 'absolute', bottom: '-1rem', width: '100%' }}>
        <Wavify
          fill={theme.colors['background-1']}
          paused={false}
          options={{
            height: 30,
            amplitude: 30,
            speed: 0.12,
            points: 4,
          }}
        />
      </div>
    </ContentWave>
  );
};

export default Wave;
