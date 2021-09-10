/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-pascal-case */
import { useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLock, FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import * as Yup from 'yup';

import { Input } from '~/components';
import { useAuth } from '~/hooks/useAuth';
import { validationError } from '~/utils/getValidationError';

import {
  Container,
  LoginContainer,
  LoginContainer_Title,
  LoginContainer_Label,
  LoginContainer_ButtonSugmitContainer,
  ButtonSubmitContainer_ButtonSignIn,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SingIn = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToasts();
  const history = useHistory();

  const handleSubmit = async (data: SignInFormData) => {
    console.log(data);
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      });
      await schema.validate(data);
      await signIn(data.email, data.password, addToast, history.push);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = validationError(error);

        formRef.current?.setErrors(errors);
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
        <LoginContainer_Title>Login</LoginContainer_Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <LoginContainer_Label>Digite suas Credenciais</LoginContainer_Label>
          <Input
            icon={FiLock}
            extraStyles={{
              marginTop: '1.9rem',
            }}
            name="Email"
          />
          <Input
            icon={FiLogIn}
            extraStyles={{
              marginTop: '1.9rem',
            }}
            name="Password"
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

export default SingIn;
