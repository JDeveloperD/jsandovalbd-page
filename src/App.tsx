import { LoaderPage } from '@components';
import { AppProvider } from '@context';
import { HomePage } from '@view';
import { ThemeProvider } from '@theme';

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider>
        <HomePage />
        <LoaderPage />
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
