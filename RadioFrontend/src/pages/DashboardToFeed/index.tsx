import React from 'react';

import { Feed } from '../../components/Feed';
import { MenuBar } from '../../components/MenuBar';

import { Container, Wrapper } from './styles';

const DashboardToFeed: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Feed />
      </Wrapper>
    </Container>
  );
};

export { DashboardToFeed };
