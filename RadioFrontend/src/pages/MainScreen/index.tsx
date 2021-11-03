import React from 'react';

import { Section } from 'components/Section';
import data from 'data';

import { Container } from './styles';

const MainScreen: React.FC = () => {
  return (
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
    </Container>
  );
};

export { MainScreen };
