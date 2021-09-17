/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createContext, FC, useCallback, useContext, useState } from 'react';

import { AddToast } from 'react-toast-notifications';
import Swal from 'sweetalert2';

import { UserProps } from '~/models';

import api from '../services/api';

interface AuthContextProps {
  user: UserProps | null;
  signIn(
    email: string,
    password: string,
    toast: AddToast,
    push: (path: string, state?: unknown) => void,
  ): Promise<void>;
  signOut(): void;
  UpdateUser(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(() => {
    const UserLocalStorage = JSON.parse(
      String(localStorage.getItem('@RadioSenac')),
    ) as UserProps;

    if (UserLocalStorage) {
      return UserLocalStorage;
    }

    return null;
  });

  const registration = useCallback(
    async (
      email: string,
      password: string,
      toast: AddToast,
      push: (path: string, state?: unknown) => void,
    ) => {
      const { data } = await api.post<UserProps>('/users/createUser', {
        email,
        password,
      });
    },
    [],
  );

  const signIn = useCallback(
    async (
      email: string,
      password: string,
      toast: AddToast,
      push: (path: string, state?: unknown) => void,
    ) => {
      const { data } = await api.post<UserProps>('/users/auth', {
        email,
        password,
      });
      console.log('dados do usuario', data);

      switch (true) {
        case data.role === 'admin':
          setUser(data);
          localStorage.setItem('@RadioSenac', JSON.stringify(data));

          toast('Logado com sucesso!', {
            autoDismiss: true,
            appearance: 'success',
          });
          push('/dashboard');
          break;
        case data.role === 'standard':
          setUser(data);
          localStorage.setItem('@RadioSenac', JSON.stringify(data));

          toast('Logado com sucesso!', {
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
    localStorage.removeItem('@RadioSenac');
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

      localStorage.removeItem('@RadioSenac');
      localStorage.setItem('@RadioSenac', JSON.stringify(updateUser));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, UpdateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { ...context } = useContext(AuthContext);

  return context;
};
