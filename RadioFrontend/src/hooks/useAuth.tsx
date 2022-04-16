import { createContext, FC, useCallback, useContext, useState } from 'react';

import { AddToast } from 'react-toast-notifications';
import Swal from 'sweetalert2';

import { UserProps } from '../models/User';
import api from '../services/api';

interface AuthContextProps {
  user: UserProps | null;
  signOut(): void;
  SingIn(
    email: string,
    password: string,
    toast: AddToast,
    push: (path: string, state?: unknown) => void,
  ): Promise<void>;
  UpdateUser(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(() => {
    const userIsStorage = JSON.parse(
      String(localStorage.getItem('@RadioSenac')),
    ) as UserProps;

    if (userIsStorage) {
      return userIsStorage;
    }

    return null;
  });

  const SingIn = useCallback(
    async (
      email: string,
      password: string,
      toast: AddToast,
      push: (path: string, state?: unknown) => void,
    ) => {
      const { data } = await api.post<UserProps>('users/auth', {
        email,
        password,
      });
      console.log('dados do usuario', data);

      switch (false) {
        case data.role === 'admin':
          setUser(data);
          localStorage.setItem('@RadioSenac', JSON.stringify(data));
          toast('User Logado com sucesso!', {
            autoDismiss: true,
            appearance: 'success',
          });
          push('/dashboard');
          break;
        case data.role === 'standard':
          setUser(data);
          localStorage.setItem('@RadioSenac', JSON.stringify(data));
          toast('User Logado com sucesso!', {
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
        created_at: user.created_at,
        role: user.role,
      };

      setUser(updateUser);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, signOut, UpdateUser, SingIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { ...context } = useContext(AuthContext);

  return context;
};
