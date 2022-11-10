import { useCallback, useEffect, useState } from 'react';

export const useScroll = (initialValue = 0) => {
  const [scrollPercentage, setScrollPercentage] = useState(initialValue);

  const getVerticalScrollPercentage = useCallback((elm: any) => {
    const p = elm.parentNode;

    return (
      ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) * 100
    );
  }, []);

  const topFunction = useCallback(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      const pos = getVerticalScrollPercentage(document.body);
      setScrollPercentage(Math.round(pos));
    });
  }, [scrollPercentage]);

  return {
    isTop: scrollPercentage >= 0 && scrollPercentage <= 1,
    percentage: scrollPercentage,
    handleScrollTop: topFunction,
  };
};
