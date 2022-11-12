import { createContext, ReactNode, useContext } from 'react';
import { useToggle } from '@hooks';

type AppStore = {
  openNav: boolean;
  toggleOpenNav: () => void;
};

const AppContext = createContext<AppStore>({} as AppStore);

const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [openNav, toggleOpenNav] = useToggle(false);

  return (
    <AppContext.Provider value={{ openNav, toggleOpenNav }}>
      {children}
    </AppContext.Provider>
  );
};

export { useAppContext, AppProvider };
