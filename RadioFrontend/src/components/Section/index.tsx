import React from 'react';

import Logo from '../../assets/LogoRadioSenac.jpg';

import {
  Container,
  Navegation,
  LogoRadio,
  Content_Main,
  Header,
} from './styles';

interface Props {
  variant: 'blue' | 'orange' | 'black' | 'white';
  title: string;
  description: string;
}

const Section: React.FC<Props> = ({ description, title, variant }) => {
  const buttonVariantColor = Math.round(Math.random());

  return (
    <Container className={variant}>
      <Navegation>
        <Header>
          <h1>
            <LogoRadio src={Logo} />
            <span>Rádio Senac</span>
          </h1>

          <button>{buttonVariantColor === 0 ? 'Acessar' : 'Interagir'}</button>
        </Header>
      </Navegation>

      <Content_Main>
        <h1>{title}</h1>
        <p>{description}</p>
      </Content_Main>
    </Container>
  );
};

export { Section };
