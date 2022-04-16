/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FormEvent, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import api from '../../services/api';

import {
  Container,
  LoginContainer,
  Navegation,
  Logo,
  LoginContainer_ButtonSugmitContainer,
  ButtonSubmitContainer_ButtonSignIn,
} from './styles';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { addToast } = useToasts();
  const history = useHistory();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await api.post('users/createUser', { email, password });
      addToast('User Cadastrado com sucesso', {
        autoDismiss: true,
        appearance: 'success',
      });
      history.push('/login');
    } catch (error) {
      if (error) {
        console.log(error);
      }
      addToast('Não foi possível efetuar Cadastro, tente novamente', {
        autoDismiss: true,
        appearance: 'error',
      });
    }
  };

  return (
    <Container>
      <LoginContainer>
        <Navegation>
          <Logo />
          <h1>Faça Seu Cadastro</h1>
        </Navegation>
        <form onClick={handleSubmit}>
          <p>Digite seus Credenciais</p>
          <input
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginContainer_ButtonSugmitContainer>
            <ButtonSubmitContainer_ButtonSignIn type="button">
              Entrar
            </ButtonSubmitContainer_ButtonSignIn>
          </LoginContainer_ButtonSugmitContainer>
        </form>
      </LoginContainer>
    </Container>
  );
};

export { SignUp };
