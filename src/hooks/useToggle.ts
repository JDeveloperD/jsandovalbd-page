import { useState } from 'react';

export const useToggle = (
  initialState: boolean = false
): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = () => {
    setState(prev => !prev);
  };

  return [state, toggle];
};
