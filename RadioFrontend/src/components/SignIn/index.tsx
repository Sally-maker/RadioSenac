import React, { useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import * as Yup from 'yup';

import api from '../../services/api';
import { validationError } from '../../utils/getValidationError';

import {
  Container,
  LoginContainer,
  Navegation,
  Logo,
  LoginContainer_ButtonSugmitContainer,
  ButtonSubmitContainer_ButtonSignIn,
} from './styles';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToasts();
  const history = useHistory();

  const handleSubmit = async (data: FormData) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required('preencha os dados requeridos'),
        password: Yup.string()
          .required('preencha os dados requeridos')
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          ),
      });
      await schema
        .validate(data)
        .then(() => console.log('validado com sucesso'))
        .catch((error) => console.log(error));

      const formData = new FormData();
      formData.append('email', data.email);
      formData.append('password', data.password);

      await api.post('users/createUser', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      addToast('User Logado com sucesso', {
        autoDismiss: true,
        appearance: 'success',
      });
      history.push('/');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const err = validationError(error);

        formRef.current?.setErrors(err);
      }
      addToast('Não foi possível efetuar login, tente novamente', {
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
          <h1>Login</h1>
        </Navegation>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <p>Digite seus credenciais</p>
          <input name="email" placeholder="Email" />
          <input name="password" placeholder="Senha" />
          <LoginContainer_ButtonSugmitContainer>
            <ButtonSubmitContainer_ButtonSignIn type="submit">
              Entrar
            </ButtonSubmitContainer_ButtonSignIn>
          </LoginContainer_ButtonSugmitContainer>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export { SignIn };
