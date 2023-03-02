import { Container } from '@shared/ui/layout/container';
import { HomeStyles } from './home.styles';
import { Fragment } from 'react';
import { Header } from '@widgets/header';

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <HomeStyles.Wrapper></HomeStyles.Wrapper>
      </Container>
    </Fragment>
  );
};
