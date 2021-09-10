import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from './hooks/useAuth';
import Routes from './routes';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthContextProvider>
        <ToastProvider placement="bottom-right">
          <Routes />
        </ToastProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
