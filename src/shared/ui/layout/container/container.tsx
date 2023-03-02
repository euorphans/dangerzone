import { FC, HTMLAttributes } from 'react';
import { ContainerStyles } from './container.styles';

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => (
  <ContainerStyles.Container>{children}</ContainerStyles.Container>
);
