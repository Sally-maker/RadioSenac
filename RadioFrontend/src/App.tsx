import { ToastProvider } from 'react-toast-notifications';

import { AuthContextProvider } from './hooks/useAuth';
import { Routes } from './routes';

import GlobalStyles from './styles/global';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AuthContextProvider>
        <ToastProvider placement="bottom-right">
          <Routes />
        </ToastProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
