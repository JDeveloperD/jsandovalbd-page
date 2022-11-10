import HomePage from './pages/HomePage';
import { ThemeProvider } from './theme';

const App = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
