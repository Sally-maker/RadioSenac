import { useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLock, FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import * as Yup from 'yup';

import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';
import { validationError } from '../../utils/getValidationError';

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

const Register = () => {
  const formRef = useRef<FormHandles>(null);
  console.log(formRef);

  const { registration } = useAuth();
  const { addToast } = useToasts();
  const history = useHistory();

  const handleSubmit = async (data: SignInFormData) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required('Preencha o campo de Email'),
        password: Yup.string().required('Preencha o campo de Senha'),
      });
      await schema.validate(data);
      await registration(data.email, data.password, addToast, history.push);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        console.log(error);
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
        <LoginContainer_Title>Register</LoginContainer_Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <LoginContainer_Label>Digite suas Credenciais</LoginContainer_Label>
          <Input
            icon={FiLock}
            extraStyles={{
              marginTop: '1.9rem',
            }}
            name="email"
          />
          <Input
            icon={FiLogIn}
            extraStyles={{
              marginTop: '1.9rem',
            }}
            name="password"
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

export default Register;
