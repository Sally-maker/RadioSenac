/* eslint-disable import/extensions */
import React from 'react';

import { Main } from '../Main';
import { Tweet } from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab> Postagens </Tab>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
      <Main />
    </Container>
  );
};

export { Feed };
