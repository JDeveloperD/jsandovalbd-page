import { AppProvider } from './context';
import HomePage from './pages/HomePage';
import { ThemeProvider } from './theme';

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
