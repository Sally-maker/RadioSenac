import React, { useRef, useCallback } from 'react';

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

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToasts();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string()
            .required()
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            ),
        });
        await schema
          .validate(data, { abortEarly: false })
          .then(() => console.log('validado com sucesso'))
          .catch((error) => console.log(error));

        console.log(data, schema);

        await api.post<FormData>('users/createUser', data);
        addToast('User Cadastrado com sucesso', {
          autoDismiss: true,
          appearance: 'success',
        });
        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const err = validationError(error);
          console.log(err);

          formRef.current?.setErrors(err);
        }
        addToast('Não foi possível efetuar login, tente novamente', {
          autoDismiss: true,
          appearance: 'error',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <LoginContainer>
        <Navegation>
          <Logo />
          <h1>Faça Seu Cadastro</h1>
        </Navegation>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <p>Digite seus Credenciais</p>
          <input
            name="email"
            placeholder="Email"
            onChange={() => {
              const UserEmail = String(formRef.current?.getFieldValue('email'));
              const replacedValue = UserEmail.replace(/\D/gi, '');
              formRef.current?.setFieldValue('email', replacedValue);
            }}
          />
          <input
            name="password"
            placeholder="Senha"
            onChange={() => {
              const UserPassword = String(
                formRef.current?.getFieldValue('password'),
              );
              const replacedValue = UserPassword.replace(/\D/gi, '');
              formRef.current?.setFieldValue('password', replacedValue);
            }}
          />
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

export { SignUp };
