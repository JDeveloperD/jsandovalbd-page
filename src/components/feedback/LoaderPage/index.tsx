import { useEffect, useState } from 'react';
import { Background, Progress } from './styled';

const LoaderPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
  return (
    <Background isDone={!loading}>
      <Progress inactive={!loading} />
    </Background>
  );
};

export default LoaderPage;
