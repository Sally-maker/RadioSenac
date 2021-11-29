import { ToastProvider } from 'react-toast-notifications';

import { AuthContextProvider } from './hooks/useAuth';
import { Routes } from './routes';

import GlobalStyles from './styles/global';

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <ToastProvider placement="bottom-right">
          <Routes />
        </ToastProvider>
      </AuthContextProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
