import { createContext, FC, useCallback, useContext, useState } from 'react';

import { AddToast } from 'react-toast-notifications';
import Swal from 'sweetalert2';

// eslint-disable-next-line import-helpers/order-imports
import { UserProps } from '../models';

import api from '../services/api';

interface AuthContextProps {
  user: UserProps | null;
  signOut(): void;
  registration(
    email: string,
    password: string,
    toast: AddToast,
    push: (path: string, state?: unknown) => void,
  ): Promise<void>;
  UpdateUser(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  const registration = useCallback(
    async (
      email: string,
      password: string,
      toast: AddToast,
      push: (path: string, state?: unknown) => void,
    ) => {
      const { data, headers } = await api.post<UserProps>('/users/createUser', {
        email,
        password,
      });
      console.log('dados do usuario', data, headers);

      switch (false) {
        case data.role === 'admin':
          setUser(data);
          localStorage.setItem('@RadioSenac', JSON.stringify(data));
          toast('User Cadastrado com sucesso!', {
            autoDismiss: true,
            appearance: 'success',
          });
          push('/dashboard');
          break;
        case data.role === 'standard':
          setUser(data);
          localStorage.setItem('@RadioSenac', JSON.stringify(data));
          toast('User Cadastrado com sucesso!', {
            autoDismiss: true,
            appearance: 'success',
          });
          push('/dashboard');
          break;
        default:
          Swal.fire({
            title: 'Aviso',
            text: 'Verifique se digitou certo as suas credencias',
            icon: 'error',
          });
          break;
      }
    },
    [],
  );

  const signOut = useCallback(async () => {
    setUser(null);
  }, []);

  const UpdateUser = useCallback(() => {
    if (user) {
      const updateUser = {
        _id: user._id,
        email: user.email,
        password: user.password,
        name: user.name,
        created_at: user.created_at,
        role: user.role,
      };

      setUser(updateUser);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, signOut, UpdateUser, registration }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { ...context } = useContext(AuthContext);

  return context;
};
