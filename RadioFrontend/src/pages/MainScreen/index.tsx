import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Section } from '../../components/Section';
import SideMenu from '../../components/SideMenu';
import { SignIn } from '../../components/SignIn';
import { SignUp } from '../../components/SignUp';
import data from '../../data';
import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';

const MainScreen: React.FC = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Container>
        <Section
          variant="blue"
          title={data[0].title}
          description={data[0].description}
        />
        <Section
          variant="orange"
          title={data[1].title}
          description={data[1].description}
        />
        <Section
          variant="black"
          title={data[2].title}
          description={data[2].description}
        />
        <Section
          variant="white"
          title={data[3].title}
          description={data[3].description}
        />

        <SideMenu>
          <Switch>
            {!user ? (
              <Route exact component={SignIn} />
            ) : (
              <Route exact component={SignUp} />
            )}
          </Switch>
        </SideMenu>
      </Container>
    </BrowserRouter>
  );
};

export { MainScreen };
